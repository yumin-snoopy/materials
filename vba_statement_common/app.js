(() => {
  "use strict";

  const data = window.PRACTICE_SET;
  const root = document.getElementById("app");

  if (!data || !root) {
    return;
  }

  const state = {
    filter: "all",
    selections: {},
    answers: {}
  };

  const tagLabels = {
    if: "If",
    loop: "繰り返し",
    cell: "セル・ブック",
    other: "その他"
  };

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);
  }

  function sameAnswers(left = [], right = []) {
    if (left.length !== right.length) {
      return false;
    }

    const a = [...left].sort((x, y) => x - y);
    const b = [...right].sort((x, y) => x - y);
    return a.every((value, index) => value === b[index]);
  }

  function visibleQuestions() {
    if (state.filter === "all") {
      return data.questions;
    }
    return data.questions.filter(question => question.tags.includes(state.filter));
  }

  function seriesLink(number, label) {
    if (number < 1 || number > 10) {
      return "";
    }
    return `<a class="series-link" href="../vba_statement_practice_${String(number).padStart(2, "0")}/">${label}</a>`;
  }

  function renderShell() {
    const tags = [...new Set(data.questions.flatMap(question => question.tags))];
    root.innerHTML = `
      <header>
        <div>
          <h1>${escapeHtml(data.title)}</h1>
          <p class="lead">${escapeHtml(data.description)}</p>
        </div>
        <section class="scorebox" aria-live="polite">
          <span>現在の得点</span>
          <strong id="scoreText">0 / ${data.questions.length}</strong>
          <div class="progress" aria-label="回答済みの割合"><div id="progressBar"></div></div>
        </section>
      </header>
      <nav class="series-nav" aria-label="問題集ナビゲーション">
        ${seriesLink(data.number - 1, "前の問題集")}
        <a class="series-link" href="../">教材一覧</a>
        ${seriesLink(data.number + 1, "次の問題集")}
      </nav>
      <section class="toolbar" aria-label="操作">
        <div class="filters" role="group" aria-label="問題フィルター">
          <button class="filter" type="button" data-filter="all" aria-pressed="true">すべて</button>
          ${tags.map(tag => `<button class="filter" type="button" data-filter="${tag}" aria-pressed="false">${tagLabels[tag] || escapeHtml(tag)}</button>`).join("")}
        </div>
        <button class="action" type="button" id="resetBtn">回答をリセット</button>
      </section>
      <div class="layout">
        <section class="question-list" id="questionList" aria-label="練習問題"></section>
        <aside aria-label="学習メモ">
          <section class="qrbox" aria-labelledby="qrTitle">
            <div id="qrCode" role="img" aria-label="このページのQRコード"></div>
            <div class="qr-copy"><strong id="qrTitle">スマホで開く</strong><p id="qrStatus">このページのQRコードを作成しています。</p></div>
          </section>
          <section class="panel"><h3>読み解く順番</h3><ul><li>変数やセルの初期値を確認</li><li>上から1行ずつ処理を追う</li><li>条件とループ回数を記録</li><li>最後の値や動作を選ぶ</li></ul></section>
          <section class="panel"><h3>回答方法</h3><ul><li>1つ選ぶ問題は選択すると判定</li><li>複数選ぶ問題はすべて選んで回答</li><li>不正解のときは解説とコードを確認</li></ul></section>
          <section class="panel"><h3>問題ナビ</h3><div class="mini-list" id="miniList"></div></section>
        </aside>
      </div>
      <section class="summary" id="summary" aria-live="polite"></section>
    `;
  }

  function renderQuestions() {
    const list = document.getElementById("questionList");
    list.innerHTML = "";

    visibleQuestions().forEach(question => {
      const selected = state.selections[question.id] || [];
      const submitted = state.answers[question.id];
      const answered = Array.isArray(submitted);
      const correct = answered && sameAnswers(submitted, question.answers);
      const multiple = question.answers.length > 1;
      const inputType = multiple ? "checkbox" : "radio";

      const article = document.createElement("article");
      article.className = `question${answered ? (correct ? " is-correct" : " is-wrong") : ""}`;
      article.id = `q-${question.id}`;

      const choices = question.choices.map((choice, index) => {
        let className = "choice";
        if (answered && question.answers.includes(index)) className += " correct";
        if (answered && submitted.includes(index) && !question.answers.includes(index)) className += " wrong";
        return `
          <label class="${className}">
            <input type="${inputType}" name="q${question.id}" value="${index}" ${selected.includes(index) ? "checked" : ""}>
            <span><b>${String.fromCharCode(65 + index)}.</b> ${escapeHtml(choice)}</span>
          </label>`;
      }).join("");

      article.innerHTML = `
        <div class="q-head">
          <h2>問${question.id}: ${escapeHtml(question.title)}</h2>
          <div class="tags">${question.tags.map(tag => `<span class="tag">${tagLabels[tag] || escapeHtml(tag)}</span>`).join("")}</div>
        </div>
        ${question.code ? `<pre><code>${escapeHtml(question.code)}</code></pre>` : ""}
        <p class="prompt">${escapeHtml(question.prompt)}</p>
        ${multiple ? `<p class="multi-note">正しいものをすべて選んでください。</p>` : ""}
        <div class="choices" role="group" aria-label="問${question.id}の選択肢">${choices}</div>
        ${multiple ? `<button class="check-answer" type="button" data-question="${question.id}">回答する</button>` : ""}
        <div class="result${answered ? " show" : ""}" aria-live="polite">
          <strong>${answered ? (correct ? "正解" : "不正解") : ""}</strong>
          ${answered ? escapeHtml(question.explanation) : ""}
        </div>`;
      list.appendChild(article);
    });
  }

  function renderMiniList() {
    const list = document.getElementById("miniList");
    list.innerHTML = "";
    data.questions.forEach(question => {
      const button = document.createElement("button");
      const submitted = state.answers[question.id];
      button.type = "button";
      button.className = "mini";
      button.textContent = question.id;
      if (Array.isArray(submitted)) {
        button.classList.add(sameAnswers(submitted, question.answers) ? "done" : "missed");
      }
      button.setAttribute("aria-label", `問${question.id}へ移動`);
      button.addEventListener("click", () => {
        state.filter = "all";
        updateFilters();
        renderAll();
        document.getElementById(`q-${question.id}`).scrollIntoView({behavior: "smooth", block: "start"});
      });
      list.appendChild(button);
    });
  }

  function updateScore() {
    const answered = Object.keys(state.answers).length;
    const correct = data.questions.filter(question => sameAnswers(state.answers[question.id], question.answers)).length;
    document.getElementById("scoreText").textContent = `${correct} / ${data.questions.length}`;
    document.getElementById("progressBar").style.width = `${(answered / data.questions.length) * 100}%`;
    const summary = document.getElementById("summary");
    if (answered === data.questions.length) {
      summary.textContent = correct === data.questions.length
        ? "全問正解です。コードと選択肢を正確に読み取れています。"
        : `${data.questions.length}問中${correct}問正解です。間違えた問題は、変数やセルの値を1行ずつ追い直してみましょう。`;
      summary.classList.add("show");
    } else {
      summary.classList.remove("show");
      summary.textContent = "";
    }
  }

  function updateFilters() {
    document.querySelectorAll(".filter").forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.filter === state.filter));
    });
  }

  function renderAll() {
    renderQuestions();
    renderMiniList();
    updateScore();
  }

  function initializeQrCode() {
    const area = document.getElementById("qrCode");
    const status = document.getElementById("qrStatus");
    if (!area || !status || typeof QRCode === "undefined") {
      if (status) status.textContent = "QRコードを読み込めませんでした。ページを更新してください。";
      return;
    }
    new QRCode(area, {
      text: data.pageUrl,
      width: 92,
      height: 92,
      colorDark: "#18212f",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M
    });
    status.textContent = "読み取ると、この練習ページを開けます。";
  }

  renderShell();

  document.getElementById("questionList").addEventListener("change", event => {
    if (!event.target.matches("input")) return;
    const id = Number(event.target.name.replace("q", ""));
    const question = data.questions.find(item => item.id === id);
    const index = Number(event.target.value);
    if (question.answers.length > 1) {
      const selected = new Set(state.selections[id] || []);
      event.target.checked ? selected.add(index) : selected.delete(index);
      state.selections[id] = [...selected].sort((a, b) => a - b);
      return;
    }
    state.selections[id] = [index];
    state.answers[id] = [index];
    renderAll();
    document.getElementById(`q-${id}`).scrollIntoView({behavior: "smooth", block: "nearest"});
  });

  document.getElementById("questionList").addEventListener("click", event => {
    const button = event.target.closest(".check-answer");
    if (!button) return;
    const id = Number(button.dataset.question);
    state.answers[id] = [...(state.selections[id] || [])];
    renderAll();
    document.getElementById(`q-${id}`).scrollIntoView({behavior: "smooth", block: "nearest"});
  });

  document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      updateFilters();
      renderQuestions();
    });
  });

  document.getElementById("resetBtn").addEventListener("click", () => {
    state.selections = {};
    state.answers = {};
    renderAll();
    scrollTo({top: 0, behavior: "smooth"});
  });

  renderAll();
  initializeQrCode();
})();
