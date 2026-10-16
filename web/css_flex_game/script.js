"use strict";

// The answer board is a separate Flexbox. Only validated declarations reach the play board.
const stageData = [
  ["右端のおうちへ", "シマエナガを右端のおうちまで移動させよう。", 1, false, "justify-content: flex-end;", ["justify-content"], "横方向の並べ方を決めるプロパティを考えよう。", "終点を表す flex-end を試してみよう。", "justify-content は通常、横方向の位置を決めます。"],
  ["まんなかのおうちへ", "シマエナガを横方向の中央へ移動させよう。", 1, false, "justify-content: center;", ["justify-content"], "横方向の空きスペースを左右に分けよう。", "center を試してみよう。", "justify-content で主軸の中央に置きます。"],
  ["３羽を均等に", "３羽を左端・中央・右端のおうちへ移動させよう。", 3, false, "justify-content: space-between;", ["justify-content"], "最初と最後を両端に置き、間を均等に空けよう。", "space-between を試してみよう。", "space-between は両端を固定し、その間に同じ空間を作ります。"],
  ["下の止まり木へ", "シマエナガを下端のおうちへ移動させよう。", 1, false, "align-items: flex-end;", ["align-items"], "横に並ぶとき、縦方向は交差軸です。", "align-items に flex-end を指定してみよう。", "align-items は交差軸（今は縦方向）の位置を決めます。"],
  ["縦のまんなかへ", "シマエナガを縦方向の中央へ移動させよう。", 1, false, "align-items: center;", ["align-items"], "縦方向の位置を決めるプロパティを使おう。", "align-items: center を試してみよう。", "通常の横並びでは、align-items が縦方向を動かします。"],
  ["縦一列に並ぼう", "３羽を上から順に縦一列のおうちへ移動させよう。", 3, false, "flex-direction: column;", ["flex-direction"], "並ぶ方向そのものを変えよう。", "column は縦方向を表します。", "column にすると主軸が縦になり、上から下へ並びます。"],
  ["順番を逆に", "３羽の左右の順序を逆にして、おうちへ移動させよう。", 3, false, "flex-direction: row-reverse;", ["flex-direction"], "横並びのまま、進む向きを逆にしよう。", "row-reverse を試してみよう。", "row-reverse では最初の子が右端になります。"],
  ["下から上へ", "３羽を下から上へ逆順に並べよう。", 3, false, "flex-direction: column-reverse;", ["flex-direction"], "縦並びと逆順を一度に指定しよう。", "column-reverse を試してみよう。", "column-reverse は縦方向の並びを逆にします。"],
  ["縦列を下へ", "３羽を縦に並べ、全員を下側のおうちへ移動させよう。", 3, false, "flex-direction: column; justify-content: flex-end;", ["flex-direction", "justify-content"], "まず主軸を縦に変え、その主軸に沿って動かそう。", "column と justify-content: flex-end を組み合わせよう。", "column のとき justify-content は縦方向に働きます。"],
  ["縦列を右へ", "３羽を縦に並べ、右端のおうちへ移動させよう。", 3, false, "flex-direction: column; align-items: flex-end;", ["flex-direction", "align-items"], "縦に並べると、横方向が交差軸になります。", "column と align-items: flex-end を組み合わせよう。", "column のとき align-items は横方向に働きます。"],
  ["周りに余白を", "３羽をそれぞれの周囲に余白を作って並べよう。", 3, false, "justify-content: space-around;", ["justify-content"], "各シマエナガの左右に同じ量の余白を配ろう。", "space-around を試してみよう。", "space-around では端の余白は鳥同士の間隔の半分です。"],
  ["すべて同じ間隔", "両端の余白も鳥同士の間隔も同じにしよう。", 3, false, "justify-content: space-evenly;", ["justify-content"], "端から鳥までの距離も均等にしよう。", "space-evenly を試してみよう。", "space-evenly ではすべての空き間隔が等しくなります。"],
  ["間を28px空けよう", "３羽の間を28pxずつ空けて並べよう。", 3, false, "gap: 28px;", ["gap"], "鳥と鳥の間隔を数値で指定しよう。", "gap: 28px; を試してみよう。", "gap は子要素の間に指定した長さの空間を作ります。"],
  ["次の行に折り返そう", "４羽を入りきるところで次の行へ折り返そう。", 4, true, "flex-wrap: wrap;", ["flex-wrap"], "横幅に収まらない子を次の行へ送ろう。", "flex-wrap: wrap; を試してみよう。", "wrap は幅が足りないとき次の行へ折り返します。"],
  ["折り返して間を空ける", "４羽を折り返し、鳥同士を26px空けよう。", 4, true, "flex-wrap: wrap; gap: 26px;", ["flex-wrap", "gap"], "折り返しと、横・縦の間隔を組み合わせよう。", "wrap と gap: 26px; を試してみよう。", "gap は折り返した行の間にも働きます。"],
  ["ど真ん中のおうちへ", "シマエナガを縦横ともに中央へ移動させよう。", 1, false, "justify-content: center; align-items: center;", ["justify-content", "align-items"], "主軸と交差軸の両方を中央にしよう。", "justify-content と align-items の両方に center を指定しよう。", "通常の横並びでは justify-content が横、align-items が縦を動かします。"],
  ["逆順のまんなかへ", "３羽を逆順にして、まとまった列を横方向の中央へ置こう。", 3, false, "flex-direction: row-reverse; justify-content: center;", ["flex-direction", "justify-content"], "順序を逆にしてから、主軸の中央へ移動させよう。", "row-reverse と justify-content: center を組み合わせよう。", "row-reverse でも主軸は横方向です。"],
  ["逆順の右側へ", "３羽を下から逆順に縦へ並べ、列を右側へ置こう。", 3, false, "flex-direction: column-reverse; align-items: flex-end;", ["flex-direction", "align-items"], "縦の逆順にすると、横方向が交差軸です。", "column-reverse と align-items: flex-end を組み合わせよう。", "column-reverse では主軸が縦、交差軸が横です。"],
  ["折り返しの整列", "４羽を折り返し、各行を中央に寄せ、背の低い鳥の高さもそろえよう。", 4, true, "flex-wrap: wrap; justify-content: center; align-items: center;", ["flex-wrap", "justify-content", "align-items"], "折り返して、各行の横方向と行内の縦方向を調整しよう。", "wrap、justify-content: center、align-items: center を試してみよう。", "align-items は各行内で、背の異なる子の縦位置をそろえます。"],
  ["みんなで帰ろう！", "４羽を逆順で折り返し、行内の余白・高さ・鳥の間隔をそろえよう。", 4, true, "flex-direction: row-reverse; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 20px;", ["flex-direction", "flex-wrap", "justify-content", "align-items", "gap"], "向き、折り返し、主軸、交差軸、間隔を順に考えよう。", "row-reverse、wrap、space-between、center、gap: 20px を試してみよう。", "複数のプロパティを組み合わせても、各プロパティの役割は同じです。"]
];
const stages = stageData.map(([title, task, count, dense, answer, allowed, hint1, hint2, lesson], index) => ({title, task, count, dense, answer, allowed, hint1, hint2, lesson, index}));
const colors = ["#f2a3bf", "#a5d9e6", "#b8d9aa", "#eac891"];
const el = id => document.getElementById(id);
const board = el("board"), birds = el("birds"), reference = el("reference"), goals = el("goals"), input = el("css-input");
const storageKey = "shimaenaga-flex-game-v1";
let completed = loadProgress(), current = 0, hintStep = 0, runSerial = 0;

function loadProgress() {
  try { const data = JSON.parse(localStorage.getItem(storageKey)); return new Set(Array.isArray(data) ? data.filter(n => Number.isInteger(n) && n >= 0 && n < 20) : []); }
  catch { return new Set(); }
}
function saveProgress() { try { localStorage.setItem(storageKey, JSON.stringify([...completed].sort((a,b) => a-b))); } catch { /* The game remains usable when storage is unavailable. */ } }
function template() { return ".container {\n  display: flex;\n  \n}"; }
function fullAnswer(stage) { return `.container {\n  display: flex;\n  ${stage.answer.replaceAll("; ", ";\n  ")}\n}`; }
function parseCss(code, stage) {
  const match = code.match(/^\s*\.container\s*\{([^{}]*)\}\s*$/);
  if (!match) throw new Error(".container { ... } の形で入力してください。ほかのセレクターや記号は使えません。");
  const body = match[1].trim();
  const declarations = body.split(";").map(s => s.trim()).filter(Boolean);
  const result = {};
  const values = {
    display: ["flex"],
    "justify-content": ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
    "align-items": ["stretch", "flex-start", "flex-end", "center"],
    "flex-direction": ["row", "row-reverse", "column", "column-reverse"],
    "flex-wrap": ["nowrap", "wrap"],
    gap: []
  };
  for (const declaration of declarations) {
    const parts = declaration.match(/^([a-z-]+)\s*:\s*([a-z0-9-]+)\s*$/i);
    if (!parts) throw new Error(`「${declaration.slice(0, 35)}」の書き方を確認してください。プロパティ: 値; の形です。`);
    const property = parts[1].toLowerCase(), value = parts[2].toLowerCase();
    if (!(property === "display" || stage.allowed.includes(property))) throw new Error(`${property} はこのレベルでは使えません。使えるもの: display, ${stage.allowed.join(", ")}`);
    if (Object.hasOwn(result, property)) throw new Error(`${property} が重複しています。1回だけ書いてください。`);
    if (property === "gap" ? !(/^(?:0|[0-9]{1,2}px)$/.test(value) && (value === "0" || Number.parseInt(value, 10) <= 60)) : !values[property].includes(value)) {
      throw new Error(`${property}: ${value} は使えません。値や単位を確認してください。`);
    }
    result[property] = value;
  }
  if (result.display !== "flex") throw new Error("display: flex; を残してください。");
  return result;
}
function applyLayout(element, declarations) {
  for (const property of ["display", "justify-content", "align-items", "flex-direction", "flex-wrap", "gap"]) element.style.removeProperty(property);
  for (const [property, value] of Object.entries(declarations)) element.style.setProperty(property, value);
}
function makeBird(number, forReference) {
  const bird = document.createElement("div");
  bird.className = (forReference ? "ref-bird" : "bird") + (number === 1 && stages[current].dense ? " tall" : "");
  bird.style.setProperty("--ribbon", colors[number]);
  bird.dataset.bird = String(number + 1);
  if (!forReference) {
    const img = document.createElement("img"); img.src = "./images/shimaenaga.svg"; img.alt = "";
    const badge = document.createElement("span"); badge.className = "number"; badge.textContent = String(number + 1);
    bird.append(img, badge); bird.setAttribute("aria-label", `${number + 1}番のシマエナガ`);
  }
  return bird;
}
function placeGoals() {
  const origin = goals.getBoundingClientRect();
  goals.replaceChildren();
  [...reference.children].forEach((bird, index) => {
    const rect = bird.getBoundingClientRect();
    const goal = document.createElement("div"); goal.className = "goal";
    goal.style.left = `${rect.left - origin.left}px`; goal.style.top = `${rect.top - origin.top}px`;
    goal.style.width = `${rect.width}px`; goal.style.height = `${rect.height}px`;
    goal.style.setProperty("--ribbon", colors[index]);
    const badge = document.createElement("span"); badge.className = "number"; badge.textContent = String(index + 1);
    goal.append(badge); goals.append(goal);
  });
}
function matchingLayout() {
  const a = [...birds.children], b = [...reference.children];
  if (a.length !== b.length) return false;
  return a.every((bird, index) => {
    const actual = bird.getBoundingClientRect(), expected = b[index].getBoundingClientRect();
    return ["left", "top", "width", "height"].every(key => Math.abs(actual[key] - expected[key]) <= 3);
  });
}
function feedback(message, kind = "") { const node = el("feedback"); node.textContent = message; node.className = `feedback ${kind}`; }
function updateProgress() {
  el("progress").textContent = `クリア ${completed.size} / 20`;
  [...el("level-select").options].forEach((option, index) => { option.textContent = `${completed.has(index) ? "✓ " : ""}LEVEL ${index + 1}｜${stages[index].title}`; });
  el("celebration").hidden = completed.size !== 20;
}
function loadStage(index) {
  current = index; runSerial++; hintStep = 0;
  const stage = stages[index];
  board.classList.toggle("dense", stage.dense);
  board.style.setProperty("--wide-bird", "29%");
  birds.replaceChildren(...Array.from({length:stage.count}, (_, i) => makeBird(i, false)));
  reference.replaceChildren(...Array.from({length:stage.count}, (_, i) => makeBird(i, true)));
  applyLayout(birds, {display:"flex"});
  applyLayout(reference, parseCss(fullAnswer(stage), stage));
  input.value = template();
  el("level-label").textContent = `LEVEL ${index + 1} / 20`;
  el("stage-title").textContent = stage.title;
  el("task-text").textContent = stage.task;
  el("stage-topic").textContent = stage.lesson;
  el("level-select").value = String(index);
  el("hint-text").textContent = ""; el("answer-text").hidden = true;
  el("answer-text").textContent = "";
  el("previous").disabled = index === 0; el("next").disabled = index === 19;
  feedback("コードを入力して実行してね。");
  placeGoals();
}
function run() {
  const serial = ++runSerial, stage = stages[current];
  let declarations;
  try { declarations = parseCss(input.value, stage); }
  catch (error) { feedback(error.message, "error"); return; }
  applyLayout(birds, declarations);
  requestAnimationFrame(() => requestAnimationFrame(() => {
    if (serial !== runSerial) return;
    placeGoals();
    if (matchingLayout()) {
      const newClear = !completed.has(current);
      completed.add(current); saveProgress(); updateProgress();
      feedback("正解！おうちに帰れたよ！ 次のレベルへ進もう。", "success");
      if (newClear) [...birds.children].forEach(b => { b.classList.remove("celebrate"); void b.offsetWidth; b.classList.add("celebrate"); });
    } else feedback("もう少し！鳥の番号とおうちの位置を見比べよう。主軸と交差軸にも注目してね。", "error");
  }));
}
function showHint() { const stage = stages[current]; hintStep = Math.min(2, hintStep + 1); el("hint-text").textContent = `ヒント${hintStep}：${hintStep === 1 ? stage.hint1 : stage.hint2}`; }
const select = el("level-select");
stages.forEach((_, index) => { const option = document.createElement("option"); option.value = String(index); select.append(option); });
select.addEventListener("change", () => loadStage(Number(select.value)));
el("run").addEventListener("click", run);
el("reset-level").addEventListener("click", () => loadStage(current));
el("hint").addEventListener("click", showHint);
el("answer").addEventListener("click", () => { const answer = el("answer-text"); answer.textContent = fullAnswer(stages[current]); answer.hidden = !answer.hidden; });
el("previous").addEventListener("click", () => loadStage(current - 1));
el("next").addEventListener("click", () => loadStage(current + 1));
el("reset-progress").addEventListener("click", () => { if (window.confirm("20問のクリア記録をすべて消しますか？")) { completed.clear(); saveProgress(); updateProgress(); feedback("進捗をリセットしました。現在のレベルから始められます。"); } });
new ResizeObserver(() => placeGoals()).observe(board);
updateProgress(); loadStage(0);

