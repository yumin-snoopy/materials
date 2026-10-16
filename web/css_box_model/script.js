// この教材では、設定値を state にまとめ、画面・計算式・CSSコードへ同時に反映します。
const defaults = {
  width: 200, height: 100, borderWidth: 5, borderRadius: 8,
  borderStyle: "solid", boxSizing: "content-box",
  paddingMode: "all", marginMode: "all",
  padding: { top: 20, right: 20, bottom: 20, left: 20 },
  margin: { top: 10, right: 10, bottom: 10, left: 10 }
};
const sides = ["top", "right", "bottom", "left"];
const sideNames = { top: "上", right: "右", bottom: "下", left: "左" };
const explanations = {
  width: "内容部分の横幅を指定します。box-sizing が border-box のときは、padding と border を含む横幅になります。",
  height: "内容部分の高さを指定します。box-sizing が border-box のときは、padding と border を含む高さになります。",
  padding: "内容と枠線の間にある内側の余白です。padding を増やすと、内容の周りの緑色の領域が広がります。",
  margin: "枠線の外側にある余白です。ほかの要素との間隔を調整します。ボックス本体のサイズには含まれません。",
  "border-width": "枠線の太さです。左右・上下にそれぞれ枠線があるため、content-box では実際のサイズに両側の太さを加えます。",
  "border-radius": "角の丸みです。ボックス本体の横幅や高さは変わりません。",
  "border-style": "枠線の形です。solid は実線、dashed は破線、dotted は点線です。",
  "box-sizing": "content-box は width・height が内容部分のサイズです。border-box は padding と border を含むサイズです。"
};
const questions = [
  { text: "横幅 200px、高さ 100px のボックスを作成してください。", check: s => s.width === 200 && s.height === 100, hint: "width を 200px、height を 100px にします。" },
  { text: "padding を上下左右すべて 20px にしてください。", check: s => sides.every(side => s.padding[side] === 20), hint: "padding は内側の余白です。上下左右の4か所を確認しましょう。" },
  { text: "margin を上・下 30px、右・左 10px にしてください。", check: s => s.margin.top === 30 && s.margin.bottom === 30 && s.margin.right === 10 && s.margin.left === 10, hint: "margin を「個別に設定」にして、上と下を 30px、右と左を 10px にします。" },
  { text: "border を 5px の実線にしてください。", check: s => s.borderWidth === 5 && s.borderStyle === "solid", hint: "border-width を 5px、border-style を solid（実線）にします。" },
  { text: "width が 200px、padding が左右 20px、border が左右 5px の content-box。実際の横幅は何 px ですか？", check: (_s, answer) => Number(answer) === 250 && answer.trim() !== "", hint: "200 ＋ 左右の padding（20 ＋ 20）＋ 左右の border（5 ＋ 5）を計算します。" }
];

let state = structuredClone(defaults);
let currentQuestion = 0;
let practiceStarted = false;
const $ = id => document.getElementById(id);
const controls = $("controls");

function pairMarkup(key, min, max, value, label) {
  return `<div class="input-pair" data-pair="${key}">
    <input type="range" id="${key}-range" min="${min}" max="${max}" value="${value}" aria-label="${label}のスライダー">
    <input type="number" id="${key}-number" min="${min}" max="${max}" step="1" value="${value}" aria-label="${label}の数値">
    <span class="unit">px</span>
  </div>`;
}

function singleControl(key, cssName, label, min, max) {
  return `<div class="control-group"><div class="control-title"><label for="${key}-range">${cssName}</label><button type="button" class="help-button" data-help="${cssName}" aria-label="${cssName} の説明" aria-expanded="false">？</button></div>${pairMarkup(key, min, max, state[key], label)}</div>`;
}

function spacingControl(kind) {
  const label = kind === "padding" ? "padding（内側の余白）" : "margin（外側の余白）";
  const sideFields = sides.map(side => `<div class="side-control"><label for="${kind}-${side}-range">${side}（${sideNames[side]}）</label>${pairMarkup(`${kind}-${side}`, 0, 50, state[kind][side], `${kind} ${side}`)}</div>`).join("");
  return `<div class="control-group"><div class="control-title">${kind}<button type="button" class="help-button" data-help="${kind}" aria-label="${kind} の説明" aria-expanded="false">？</button></div>
    <select class="mode-select" id="${kind}-mode" aria-label="${kind} の設定方法"><option value="all">上下左右を一括変更</option><option value="sides">top・right・bottom・left を個別に変更</option></select>
    <div id="${kind}-all">${pairMarkup(`${kind}-all`, 0, 50, state[kind].top, label)}</div>
    <div id="${kind}-sides" class="side-controls" hidden>${sideFields}</div></div>`;
}

controls.innerHTML = [
  singleControl("width", "width", "横幅", 100, 400),
  singleControl("height", "height", "高さ", 50, 250),
  spacingControl("padding"), spacingControl("margin"),
  singleControl("borderWidth", "border-width", "枠線の太さ", 0, 15),
  singleControl("borderRadius", "border-radius", "角の丸み", 0, 50)
].join("");

function setPair(key, value) {
  $(key + "-range").value = value;
  $(key + "-number").value = value;
}

function updateValue(key, value) {
  if (key.includes("-")) {
    const [kind, side] = key.split("-");
    if (side === "all") {
      sides.forEach(name => { state[kind][name] = value; setPair(`${kind}-${name}`, value); });
    } else {
      state[kind][side] = value;
    }
  } else {
    state[key] = value;
  }
  setPair(key, value);
  render();
}

document.querySelectorAll("[data-pair]").forEach(pair => {
  const key = pair.dataset.pair;
  const range = $(key + "-range");
  const number = $(key + "-number");
  range.addEventListener("input", () => updateValue(key, Number(range.value)));
  number.addEventListener("input", () => {
    if (number.value === "") return;
    const value = Number(number.value);
    if (Number.isInteger(value) && value >= Number(number.min) && value <= Number(number.max)) updateValue(key, value);
  });
  number.addEventListener("change", () => {
    const fallback = Number(range.value);
    const raw = number.value === "" ? fallback : Number(number.value);
    updateValue(key, Math.max(Number(number.min), Math.min(Number(number.max), Number.isFinite(raw) ? Math.round(raw) : fallback)));
  });
});

for (const kind of ["padding", "margin"]) {
  $(kind + "-mode").addEventListener("change", event => {
    const mode = event.target.value;
    state[kind + "Mode"] = mode;
    if (mode === "all") {
      const value = state[kind].top;
      sides.forEach(side => { state[kind][side] = value; setPair(`${kind}-${side}`, value); });
      setPair(`${kind}-all`, value);
    }
    $(kind + "-all").hidden = mode !== "all";
    $(kind + "-sides").hidden = mode !== "sides";
    render();
  });
}

$("border-style").addEventListener("change", event => { state.borderStyle = event.target.value; render(); });
$("box-sizing").addEventListener("change", event => { state.boxSizing = event.target.value; render(); });

document.querySelectorAll(".help-button").forEach(button => button.addEventListener("click", () => {
  const open = button.getAttribute("aria-expanded") === "true";
  document.querySelectorAll(".help-button").forEach(item => item.setAttribute("aria-expanded", "false"));
  $("help-text").hidden = open;
  if (!open) {
    button.setAttribute("aria-expanded", "true");
    $("help-text").textContent = `${button.dataset.help}：${explanations[button.dataset.help]}`;
  }
}));

function spacingCss(kind) {
  if (state[kind + "Mode"] === "all") return `${state[kind].top}px`;
  return sides.map(side => `${state[kind][side]}px`).join(" ");
}

function render() {
  const box = $("sample-box");
  box.style.width = `${state.width}px`;
  box.style.height = `${state.height}px`;
  box.style.padding = spacingCss("padding");
  box.style.margin = spacingCss("margin");
  box.style.border = `${state.borderWidth}px ${state.borderStyle} #ae9aca`;
  box.style.borderRadius = `${state.borderRadius}px`;
  box.style.boxSizing = state.boxSizing;

  const extraWidth = state.padding.left + state.padding.right + 2 * state.borderWidth;
  const extraHeight = state.padding.top + state.padding.bottom + 2 * state.borderWidth;
  const actualWidth = state.boxSizing === "content-box" ? state.width + extraWidth : Math.max(state.width, extraWidth);
  const actualHeight = state.boxSizing === "content-box" ? state.height + extraHeight : Math.max(state.height, extraHeight);
  const horizontal = `${state.padding.left} ＋ ${state.padding.right} ＋ ${state.borderWidth} ＋ ${state.borderWidth}`;
  const vertical = `${state.padding.top} ＋ ${state.padding.bottom} ＋ ${state.borderWidth} ＋ ${state.borderWidth}`;
  if (state.boxSizing === "content-box") {
    $("width-formula").innerHTML = `横幅：${state.width} ＋ ${horizontal} ＝ <strong>${actualWidth}px</strong>`;
    $("height-formula").innerHTML = `高さ：${state.height} ＋ ${vertical} ＝ <strong>${actualHeight}px</strong>`;
  } else {
    $("width-formula").innerHTML = `横幅：指定 ${state.width}px（内訳：内容 ${Math.max(0, state.width - extraWidth)} ＋ ${horizontal}）＝ <strong>${actualWidth}px</strong>`;
    $("height-formula").innerHTML = `高さ：指定 ${state.height}px（内訳：内容 ${Math.max(0, state.height - extraHeight)} ＋ ${vertical}）＝ <strong>${actualHeight}px</strong>`;
  }
  $("margin-formula").textContent = `margin を含めた占有範囲：横 ${actualWidth} ＋ ${state.margin.left} ＋ ${state.margin.right} ＝ ${actualWidth + state.margin.left + state.margin.right}px ／ 縦 ${actualHeight} ＋ ${state.margin.top} ＋ ${state.margin.bottom} ＝ ${actualHeight + state.margin.top + state.margin.bottom}px。margin はボックス本体に含みません。`;
  const expanded = state.boxSizing === "border-box" && (state.width < extraWidth || state.height < extraHeight);
  $("box-warning").hidden = !expanded;
  if (expanded) $("box-warning").textContent = "指定サイズより padding と border の合計が大きいため、内容部分は 0px となり、ボックス本体はその合計まで広がります。";

  $("css-code").textContent = `.sample-box {\n  width: ${state.width}px;\n  height: ${state.height}px;\n  padding: ${spacingCss("padding")};\n  border: ${state.borderWidth}px ${state.borderStyle} #ae9aca;\n  margin: ${spacingCss("margin")};\n  border-radius: ${state.borderRadius}px;\n  box-sizing: ${state.boxSizing};\n}`;
}

$("copy-code").addEventListener("click", async () => {
  const code = $("css-code").textContent;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(code);
    } else {
      const temporary = document.createElement("textarea");
      temporary.value = code;
      temporary.style.position = "fixed";
      temporary.style.opacity = "0";
      document.body.appendChild(temporary);
      temporary.select();
      const copied = document.execCommand("copy");
      temporary.remove();
      if (!copied) throw new Error("copy failed");
    }
    $("copy-feedback").textContent = "CSSコードをコピーしました。";
  } catch (_error) {
    $("copy-feedback").textContent = "コピーできませんでした。上のコードを選択してコピーしてください。";
  }
});

function syncInputs() {
  for (const key of ["width", "height", "borderWidth", "borderRadius"]) setPair(key, state[key]);
  for (const kind of ["padding", "margin"]) {
    $(kind + "-mode").value = state[kind + "Mode"];
    $(kind + "-all").hidden = state[kind + "Mode"] !== "all";
    $(kind + "-sides").hidden = state[kind + "Mode"] !== "sides";
    setPair(`${kind}-all`, state[kind].top);
    sides.forEach(side => setPair(`${kind}-${side}`, state[kind][side]));
  }
  $("border-style").value = state.borderStyle;
  $("box-sizing").value = state.boxSizing;
}

$("reset").addEventListener("click", () => {
  state = structuredClone(defaults);
  syncInputs();
  $("copy-feedback").textContent = "初期状態に戻しました。";
  render();
});

function selectQuestion(index) {
  currentQuestion = index;
  document.querySelectorAll(".question-button").forEach((button, i) => {
    button.classList.toggle("is-active", i === index);
    if (i === index) button.setAttribute("aria-current", "true");
    else button.removeAttribute("aria-current");
  });
  $("question-title").textContent = `問題 ${index + 1}`;
  $("question-text").textContent = questions[index].text;
  $("calculation-answer-label").hidden = index !== 4;
  $("answer-feedback").textContent = "";
  $("answer-feedback").className = "";
}
document.querySelectorAll(".question-button").forEach(button => button.addEventListener("click", () => selectQuestion(Number(button.dataset.question))));
$("check-answer").addEventListener("click", () => {
  const question = questions[currentQuestion];
  const correct = question.check(state, $("calculation-answer").value);
  $("answer-feedback").className = correct ? "correct" : "incorrect";
  $("answer-feedback").textContent = correct ? "正解です！" : `もう一度確認しましょう。ヒント：${question.hint}`;
});

function switchTab(practice) {
  if (practice && !practiceStarted) {
    // 練習開始時は、初期値だけで正解にならないようにします。
    state = { ...structuredClone(defaults), width: 180, height: 90, borderWidth: 0, borderStyle: "dashed",
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      margin: { top: 0, right: 0, bottom: 0, left: 0 } };
    syncInputs();
    render();
    practiceStarted = true;
  }
  $("tab-experience").classList.toggle("is-active", !practice);
  $("tab-practice").classList.toggle("is-active", practice);
  $("tab-experience").setAttribute("aria-selected", String(!practice));
  $("tab-practice").setAttribute("aria-selected", String(practice));
  $("experience-panel").hidden = practice;
  $("practice-panel").hidden = !practice;
  document.body.classList.toggle("practice-mode", practice);
}
$("tab-experience").addEventListener("click", () => switchTab(false));
$("tab-practice").addEventListener("click", () => switchTab(true));

selectQuestion(0);
render();
