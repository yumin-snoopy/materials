(() => {
  "use strict";
  const terms = window.TERM_CARDS || [];
  const byId = new Map(terms.map(term => [term.id, term]));
  const key = "ai-passport-term-cards-v1";
  const $ = id => document.getElementById(id);
  const allowed = new Set(["unseen", "retry", "known"]);
  let canSave = true;
  let state = { statuses: {}, filter: "all", order: [], index: 0 };

  try {
    localStorage.setItem(key + "-test", "1");
    localStorage.removeItem(key + "-test");
    const saved = JSON.parse(localStorage.getItem(key) || "null");
    if (saved && typeof saved === "object") {
      if (saved.statuses && typeof saved.statuses === "object") {
        for (const [id, value] of Object.entries(saved.statuses)) {
          if (byId.has(id) && allowed.has(value)) state.statuses[id] = value;
        }
      }
      if (["all", "unseen", "retry", "known"].includes(saved.filter)) state.filter = saved.filter;
      if (Array.isArray(saved.order)) {
        state.order = [...new Set(saved.order)].filter(id => byId.has(id));
      }
      if (Number.isInteger(saved.index)) state.index = Math.max(0, Math.min(saved.index, state.order.length));
    }
  } catch (_) { canSave = false; }

  function save() {
    if (!canSave) return;
    try { localStorage.setItem(key, JSON.stringify(state)); }
    catch (_) { canSave = false; showStorageNote(); }
  }
  function showStorageNote() {
    $("storageNote").textContent = canSave
      ? "学習状況は、この端末のブラウザに保存されます。"
      : "このブラウザでは学習状況を保存できません。この画面を開いている間は利用できます。";
  }
  function matches(term, filter) {
    return filter === "all" || (state.statuses[term.id] || "unseen") === filter;
  }
  function startPass(filter = state.filter, shuffle = false) {
    state.filter = filter;
    state.order = terms.filter(term => matches(term, filter)).map(term => term.id);
    if (shuffle) {
      for (let i = state.order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [state.order[i], state.order[j]] = [state.order[j], state.order[i]];
      }
    }
    state.index = 0;
    save();
    render();
  }
  function count(status) {
    return terms.filter(term => (state.statuses[term.id] || "unseen") === status).length;
  }
  function render() {
    showStorageNote();
    $("filter").value = state.filter;
    for (const status of ["unseen", "retry", "known"]) $(status + "Count").textContent = count(status);
    const id = state.order[state.index];
    const term = byId.get(id);
    $("card").hidden = !term;
    $("finish").hidden = !!term;
    $("cardNav").hidden = state.order.length === 0;
    $("skipHint").hidden = state.order.length === 0;
    $("previous").disabled = state.index === 0;
    $("next").hidden = !term;
    $("next").textContent = state.index === state.order.length - 1 ? "学習結果を見る" : "次の単語";
    if (!term) {
      $("position").textContent = state.order.length ? `${state.order.length} / ${state.order.length}` : "0 / 0";
      $("finishTitle").textContent = state.order.length ? "一巡しました" : "対象のカードは0件です";
      $("finishText").textContent = state.order.length
        ? `学習結果：未学習 ${count("unseen")}件・もう一度 ${count("retry")}件・覚えた ${count("known")}件。必要な用語を選んで、もう一巡しましょう。`
        : "この絞り込みに当てはまる用語はありません。別の表示条件を選ぶか、「すべて」で学習を始めてください。";
      $("retryOnly").hidden = count("retry") === 0;
      return;
    }
    $("position").textContent = `${state.index + 1} / ${state.order.length}`;
    $("term").textContent = term.term;
    $("meaning").textContent = term.meaning;
    $("example").textContent = term.example;
    $("point").textContent = term.point;
    $("related").hidden = !term.related?.length;
    $("related").textContent = term.related?.length ? `関連する用語：${term.related.join("、")}` : "";
    $("details").hidden = true;
    $("reveal").hidden = false;
  }
  function answer(status) {
    const id = state.order[state.index];
    if (!id || $("details").hidden) return;
    state.statuses[id] = status;
    state.index += 1; // 一巡の並びは固定し、状態変更による飛び・重複を防ぐ。
    save();
    render();
    if (!$("card").hidden) $("reveal").focus();
    else $("restart").focus();
  }
  $("reveal").addEventListener("click", () => {
    $("details").hidden = false;
    $("reveal").hidden = true;
    $("retry").focus();
  });
  $("retry").addEventListener("click", () => answer("retry"));
  $("known").addEventListener("click", () => answer("known"));
  $("filter").addEventListener("change", event => startPass(event.target.value));
  $("shuffle").addEventListener("click", () => startPass(state.filter, true));
  $("restart").addEventListener("click", () => startPass(state.filter));
  $("retryOnly").addEventListener("click", () => startPass("retry"));
  $("previous").addEventListener("click", () => {
    if (state.index === 0) return;
    state.index -= 1;
    save();
    render();
    $("previous").focus();
  });
  $("next").addEventListener("click", () => {
    if (state.index >= state.order.length) return;
    state.index += 1;
    save();
    render();
    ($("card").hidden ? $("previous") : $("next")).focus();
  });
  $("reset").addEventListener("click", () => {
    if (!window.confirm("学習状況をすべてリセットしますか？")) return;
    state.statuses = {};
    startPass("all");
  });
  if (state.order.length === 0 && state.index === 0 && state.filter === "all") startPass("all");
  else render();
})();

