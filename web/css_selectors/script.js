// プレビューのHTMLは固定し、選んだセレクターだけを実際のCSS規則として適用します。
const selectorInfo = {
  "p": "タグ名で選びます。ページ内のp要素（段落）すべてが対象です。",
  ".note": "先頭の「.」はクラスを表します。class=\"note\" の付いた要素を、場所に関係なく選びます。",
  "#main-title": "先頭の「#」はIDを表します。id=\"main-title\" の付いた見出しを選びます。",
  ".card p": "空白は「中にある」という意味です。cardクラスの中にあるp要素だけを選びます。",
  "h2, .note": "カンマは「または」です。h2要素とnoteクラスの要素を、1つのCSS規則で選びます。",
  "a:hover": "リンクにマウスを重ねている間だけ一致します。プレビューの「記事を読む」にマウスを重ねてください。"
};
const questions = [
  { text: "ページ内の段落（p要素）すべてにCSSを当ててください。", answer: "p", hint: "タグ名をそのまま書くセレクターを選びます。" },
  { text: "class=\"note\" が付いた要素だけにCSSを当ててください。", answer: ".note", hint: "クラス名の前には「.」を付けます。" },
  { text: "id=\"main-title\" が付いた見出しだけにCSSを当ててください。", answer: "#main-title", hint: "ID名の前には「#」を付けます。" },
  { text: "cardクラスの中にある段落だけにCSSを当ててください。カードの外の段落は選びません。", answer: ".card p", hint: "cardとpの間に空白がある、子孫セレクターを選びます。" },
  { text: "h2要素とnoteクラスの要素の両方に、1つのCSS規則で色を付けてください。", answer: "h2, .note", hint: "2種類の宛先をカンマで並べたグループを選びます。" }
];
const elementNames = {
  title: "サイトの見出し",
  intro: "サイトの紹介文",
  heading1: "記事Aの見出し",
  paragraph1: "記事Aの説明文",
  link1: "記事Aのリンク",
  heading2: "記事Bの見出し",
  paragraph2: "記事Bの説明文",
  link2: "記事Bのリンク",
  "outside-note": "カード外の補足文"
};
const $ = id => document.getElementById(id);
const samplePage = $("sample-page");
let mode = "experience";
let experienceChoice = "p";
const practiceChoices = questions.map(() => "");
let currentQuestion = 0;
let lastMatchKey = "";

function choice() {
  return mode === "experience" ? experienceChoice : practiceChoices[currentQuestion];
}

function scopedSelector(selector) {
  // この教材の見本だけに効かせ、教材自身の見出しなどには当てません。
  return selector.split(",").map(part => "#sample-page " + part.trim()).join(", ");
}

function updateMatches() {
  const selector = choice();
  const matches = selector ? Array.from(samplePage.querySelectorAll(selector)) : [];
  samplePage.querySelectorAll("[data-demo]").forEach(element => {
    element.classList.toggle("is-match", matches.includes(element));
  });
  const names = matches.map(element => elementNames[element.dataset.demo]);
  const key = selector + "|" + names.join("|");
  if (key === lastMatchKey) return;
  lastMatchKey = key;
  $("match-status").textContent = selector
    ? "一致した要素：" + matches.length + "個" + (names.length ? "（" + names.join("、") + "）" : "")
    : "セレクターを選んでください。";
}

function render() {
  const selector = choice();
  $("selector-choice").value = selector;
  $("selector-explanation").textContent = selector
    ? selector + "： " + selectorInfo[selector]
    : "セレクターを選ぶと、ここに読み方が表示されます。";
  $("demo-style").textContent = selector
    ? scopedSelector(selector) + " { background-color: #fce4ec; }\n"
    : "";
  $("css-code").textContent = selector
    ? selector + " {\n  background-color: #fce4ec;\n}"
    : "/* セレクターを選ぶとCSSが表示されます。 */";
  $("copy-code").disabled = !selector;
  lastMatchKey = "";
  updateMatches();
}

$("selector-choice").addEventListener("change", event => {
  if (mode === "experience") experienceChoice = event.target.value;
  else practiceChoices[currentQuestion] = event.target.value;
  $("answer-feedback").textContent = "";
  $("answer-feedback").className = "";
  $("copy-feedback").textContent = "";
  render();
});

// :hover は選択だけでは一致しないため、ポインター移動後にも数え直します。
samplePage.addEventListener("pointermove", () => {
  if (choice() === "a:hover") requestAnimationFrame(updateMatches);
});
samplePage.addEventListener("pointerleave", () => {
  if (choice() === "a:hover") requestAnimationFrame(updateMatches);
});
samplePage.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", event => event.preventDefault());
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
  render();
}
document.querySelectorAll(".question-button").forEach(button => {
  button.addEventListener("click", () => selectQuestion(Number(button.dataset.question)));
});
$("check-answer").addEventListener("click", () => {
  const correct = choice() === questions[currentQuestion].answer;
  $("answer-feedback").className = correct ? "correct" : "incorrect";
  $("answer-feedback").textContent = correct
    ? "正解です！"
    : "もう一度確認しましょう。ヒント：" + questions[currentQuestion].hint;
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
  if (mode === "experience") experienceChoice = "p";
  else practiceChoices[currentQuestion] = "";
  $("answer-feedback").textContent = "";
  $("answer-feedback").className = "";
  $("copy-feedback").textContent = "初期状態に戻しました。";
  render();
});

selectQuestion(0);
switchMode(false);
