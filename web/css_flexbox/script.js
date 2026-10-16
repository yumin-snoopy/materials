// CSSに関係する値と、観察用のサイズを一緒に管理します。
const defaults = {
  display: "block", direction: "row", justify: "flex-start", align: "stretch",
  wrap: "nowrap", gap: 12, count: 3, width: 520, height: 320, itemHeight: "fixed"
};
const questions = [
  {
    text: "3つのボックスを「1、2、3」の順で横一列に並べてください。",
    check: s => s.display === "flex" && s.direction === "row",
    hint: "親の display を flex、flex-direction を row にします。"
  },
  {
    text: "3つのボックスを、水平方向・垂直方向とも中央に配置してください。",
    check: s => s.display === "flex" && s.justify === "center" && s.align === "center",
    hint: "主軸と交差軸の両方を center にします。row でも column でもかまいません。"
  },
  {
    text: "3つのボックスを横一列にし、1を左端、3を右端、2をその間に均等に配置してください。",
    check: s => s.display === "flex" && s.direction === "row" && s.justify === "space-between",
    hint: "display を flex、flex-direction を row、justify-content を space-between にします。"
  },
  {
    text: "ボックスを縦方向に並べてください。上からでも下からでも正解です。",
    check: s => s.display === "flex" && s.direction.startsWith("column"),
    hint: "display を flex にして、flex-direction を column または column-reverse にします。"
  },
  {
    text: "子ボックスの間隔を20pxにし、親の幅が足りないときに折り返す設定にしてください。6個の子ボックスで試せます。",
    check: s => s.display === "flex" && s.direction.startsWith("row") && s.gap === 20 && s.wrap !== "nowrap",
    hint: "親の幅で折り返すには横並びにします。display を flex、flex-direction を row または row-reverse、gap を 20px、flex-wrap を wrap または wrap-reverse にします。"
  }
];
const explanations = {
  display: "子を並べる親要素に flex を指定すると、子がFlexboxの仲間になります。block は通常の縦積み表示です。",
  "flex-direction": "子が進む向きです。row は横、column は縦です。reverse は進む向きを逆にします。column にすると主軸も縦になります。",
  "justify-content": "主軸に沿って子をどこへ置くか決めます。row なら左右、column なら上下の位置合わせです。",
  "align-items": "主軸に直角な交差軸で子をそろえます。row なら上下、column なら左右です。stretch を試すときは子の高さを auto にします。",
  "flex-wrap": "並べる方向に場所が足りないとき、次の行や列へ送る設定です。nowrap は送らず、wrap-reverse は交差軸の逆側に折り返します。",
  gap: "子同士のすき間です。margin は各子の外側に付く余白で、並びの外端にも影響することがあります。gap は子の間だけをまとめて調整できます。"
};
const $ = id => document.getElementById(id);
let experienceState = { ...defaults };
const practiceStates = questions.map((_, index) => ({
  ...defaults, count: index === 4 ? 6 : 3, width: index === 4 ? 280 : 520
}));
let mode = "experience";
let currentQuestion = 0;
const cssFields = ["display", "flex-direction", "justify-content", "align-items", "flex-wrap", "gap"];
const viewFields = ["item-count", "container-width", "container-height", "item-height"];

function state() {
  return mode === "experience" ? experienceState : practiceStates[currentQuestion];
}

function setState(patch) {
  Object.assign(state(), patch);
  $("answer-feedback").textContent = "";
  $("answer-feedback").className = "";
  render();
}

function syncInputs() {
  const s = state();
  $("display").value = s.display;
  $("flex-direction").value = s.direction;
  $("justify-content").value = s.justify;
  $("align-items").value = s.align;
  $("flex-wrap").value = s.wrap;
  $("gap").value = s.gap;
  $("item-count").value = s.count;
  $("container-width").value = s.width;
  $("container-height").value = s.height;
  $("item-height").value = s.itemHeight;
}

function axisInfo(s) {
  const column = s.direction.startsWith("column");
  const main = column
    ? (s.direction === "column" ? "↓ 上から下" : "↑ 下から上")
    : (s.direction === "row" ? "→ 左から右" : "← 右から左");
  const reverseCross = s.wrap === "wrap-reverse";
  const cross = column
    ? (reverseCross ? "← 右から左" : "→ 左から右")
    : (reverseCross ? "↑ 下から上" : "↓ 上から下");
  return { main, cross, column };
}

function codeFor(s) {
  return [
    ".container {",
    "  display: " + s.display + ";",
    "  flex-direction: " + s.direction + ";",
    "  justify-content: " + s.justify + ";",
    "  align-items: " + s.align + ";",
    "  flex-wrap: " + s.wrap + ";",
    "  gap: " + s.gap + "px;",
    "  width: " + s.width + "px;",
    "  height: " + s.height + "px;",
    "}",
    "",
    ".item {",
    "  height: " + (s.itemHeight === "auto" ? "auto" : "76px") + ";",
    "  width: " + (s.direction.startsWith("column") && s.itemHeight === "auto" ? "auto" : "110px") + ";",
    "}"
  ].join("\n");
}

function render() {
  const s = state();
  $("gap-value").textContent = s.gap + "px";
  $("item-count-value").textContent = s.count + "個";
  $("container-width-value").textContent = s.width + "px";
  $("container-height-value").textContent = s.height + "px";
  const container = $("sample-container");
  container.style.display = s.display;
  container.style.flexDirection = s.direction;
  container.style.justifyContent = s.justify;
  container.style.alignItems = s.align;
  container.style.flexWrap = s.wrap;
  container.style.gap = s.gap + "px";
  container.style.width = s.width + "px";
  container.style.height = s.height + "px";
  container.classList.toggle("auto-height", s.itemHeight === "auto");
  container.classList.toggle("column-items", s.direction.startsWith("column"));
  container.replaceChildren();
  for (let i = 1; i <= s.count; i++) {
    const item = document.createElement("div");
    item.className = "sample-item";
    item.textContent = String(i);
    container.appendChild(item);
  }
  const axis = axisInfo(s);
  $("main-axis").textContent = s.display === "flex" ? axis.main : "なし";
  $("cross-axis").textContent = s.display === "flex" ? axis.cross : "なし";
  $("layout-note").textContent = s.display === "flex"
    ? "主軸は子が並ぶ道、交差軸は直角の道です。矢印は進む向きを示します。"
    : "display: block ではFlexboxの主軸・交差軸はありません。flex に変更すると矢印が現れます。";
  $("css-code").textContent = codeFor(s);
}

const fieldMap = {
  display: "display", "flex-direction": "direction", "justify-content": "justify",
  "align-items": "align", "flex-wrap": "wrap", gap: "gap",
  "item-count": "count", "container-width": "width",
  "container-height": "height", "item-height": "itemHeight"
};
for (const id of [...cssFields, ...viewFields]) {
  const input = $(id);
  const eventName = input.type === "range" ? "input" : "change";
  input.addEventListener(eventName, () => {
    const value = input.type === "range" ? Number(input.value) : input.value;
    setState({ [fieldMap[id]]: value });
  });
}

document.querySelectorAll(".help-button").forEach(button => {
  button.addEventListener("click", () => {
    const wasOpen = button.getAttribute("aria-expanded") === "true";
    document.querySelectorAll(".help-button").forEach(item => item.setAttribute("aria-expanded", "false"));
    $("help-text").hidden = wasOpen;
    if (!wasOpen) {
      button.setAttribute("aria-expanded", "true");
      $("help-text").textContent = button.dataset.help + "： " + explanations[button.dataset.help];
    }
  });
});

function switchMode(practice) {
  mode = practice ? "practice" : "experience";
  $("tab-experience").classList.toggle("is-active", !practice);
  $("tab-practice").classList.toggle("is-active", practice);
  $("tab-experience").setAttribute("aria-selected", String(!practice));
  $("tab-practice").setAttribute("aria-selected", String(practice));
  $("experience-panel").hidden = practice;
  $("practice-panel").hidden = !practice;
  $("copy-feedback").textContent = "";
  syncInputs();
  render();
}
$("tab-experience").addEventListener("click", () => switchMode(false));
$("tab-practice").addEventListener("click", () => switchMode(true));

function selectQuestion(index) {
  currentQuestion = index;
  document.querySelectorAll(".question-button").forEach((button, i) => {
    button.classList.toggle("is-active", i === index);
    if (i === index) button.setAttribute("aria-current", "true");
    else button.removeAttribute("aria-current");
  });
  $("question-title").textContent = "問題 " + (index + 1);
  $("question-text").textContent = questions[index].text;
  $("answer-feedback").textContent = "";
  $("answer-feedback").className = "";
  syncInputs();
  render();
}
document.querySelectorAll(".question-button").forEach(button => {
  button.addEventListener("click", () => selectQuestion(Number(button.dataset.question)));
});
$("check-answer").addEventListener("click", () => {
  const question = questions[currentQuestion];
  const correct = question.check(state());
  $("answer-feedback").className = correct ? "correct" : "incorrect";
  $("answer-feedback").textContent = correct ? "正解です！" : "もう一度確認しましょう。ヒント：" + question.hint;
});

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
$("reset").addEventListener("click", () => {
  if (mode === "experience") experienceState = { ...defaults };
  else practiceStates[currentQuestion] = {
    ...defaults, count: currentQuestion === 4 ? 6 : 3, width: currentQuestion === 4 ? 280 : 520
  };
  $("copy-feedback").textContent = "初期状態に戻しました。";
  $("answer-feedback").textContent = "";
  syncInputs();
  render();
});

selectQuestion(0);
switchMode(false);

