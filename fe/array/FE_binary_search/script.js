"use strict";

const $ = (id) => document.getElementById(id);
const code = [
  "low ← 0",
  "high ← データ数 - 1",
  "while low ≦ high",
  "  mid ← floor((low + high) ÷ 2)",
  "  if data[mid] = target",
  "    発見して終了",
  "  else if data[mid] < target",
  "    low ← mid + 1",
  "  else",
  "    high ← mid - 1",
  "見つからない（low > high）"
];
let data = [3, 8, 12, 17, 23, 31, 38, 45, 52];
let target = 38;
let frames = [];
let step = 0;
let timer = null;
let started = false;

$("app").innerHTML = `<main><a href="../">← 配列処理教材</a><header><div class="eyebrow">基本情報技術者試験 · 科目B</div><h1>二分探索（Binary Search）</h1><p class="lead">中央の値を確認し、探す範囲を半分ずつ狭めます。</p></header><p class="condition">重要：二分探索を使うには、データが昇順または降順に並んでいる必要があります。この教材は昇順です。</p><div class="layout"><section class="panel"><div class="input-row"><label for="target">探す値</label><input id="target" type="number" step="1" value="38" inputmode="numeric"><button id="start" class="start" type="button">検索開始</button></div><div id="error" class="error" role="alert"></div><p class="hint">インデックスは <strong>0から</strong>始まります。下の数字の位置を表します。</p><div id="range" class="range"></div><div class="array-scroll"><div id="array" class="array" aria-label="昇順に並んだ数値"></div></div><div class="legend"><span><b class="current"></b>現在の探索範囲</span><span><b class="excluded"></b>探索対象外</span><span><b class="found-key"></b>発見</span></div><div class="formula"><span>中央位置 = (左端 + 右端) ÷ 2 の小数点以下を切り捨てる</span><strong>mid = floor((low + high) / 2)</strong><div id="calculation"></div></div><div id="comparison" class="comparison"><div id="values"></div><div id="expression" class="expression"></div><div id="direction" class="direction"></div></div><p id="message" class="message" aria-live="polite" aria-atomic="true"></p><div class="stats"><div>二分探索の比較 <strong id="binary-count">0</strong> 回</div><div>残りの候補 <strong id="remaining">9</strong> 個</div></div><div class="controls"><button id="step" type="button">1ステップ進む →</button><button id="play" type="button">自動再生</button><button id="pause" type="button">一時停止</button><button id="reset" type="button">最初から</button><button id="new" type="button">新しいデータを作る</button></div><p id="status" class="status"></p></section><aside class="panel"><h2>疑似コード</h2><p class="hint">今実行している行を黄色で示します。「←」は右の値を左の変数に保存する意味です。</p><ol id="code" class="code"></ol><p class="small">low は左端、high は右端、mid は中央のインデックスです。データ数が偶数などで中央位置が小数になるときは切り捨てます。</p></aside></div><section class="compare-box"><h2>線形探索との違い</h2><div class="compare-grid"><div><h3>線形探索</h3><p>先頭から順番に1つずつ確認します。</p><p>比較回数：<strong id="linear-count"></strong> 回</p></div><div><h3>二分探索</h3><p>中央を確認して、不要な半分を除外します。</p><p>比較回数：<strong id="binary-summary">0</strong> 回</p></div></div><p id="comparison-note" class="small"></p><p class="small">未整列のデータでは、中央より小さい値が右側にあるかもしれません。そのため片側を安全に除外できません。</p></section><section class="points"><h2>二分探索のポイント</h2><ol><li>データは並び替え済みである必要がある</li><li>中央の値を確認する</li><li>不要な半分を探索対象から外す</li><li>探索範囲を半分ずつ狭める</li><li>線形探索より少ない比較回数で見つけられる場合がある</li></ol></section><footer>処理はすべてブラウザ内で行います。右クリックの抑止は簡易的なもので、ソースを完全に隠すものではありません。</footer></main>`;

function makeFrames() {
  const result = [];
  let low = 0;
  let high = data.length - 1;
  let comparisons = 0;
  const add = (line, phase, message, extra = {}) => result.push({low, high, mid: null, comparisons, phase, message, line, ...extra});
  add(0, "準備", `探す値は${target}です。まず左端 low = 0、右端 high = ${high} にします。`, {calculation: "検索開始を押してから、1ステップずつ確認しましょう。"});
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const raw = (low + high) / 2;
    const calculation = `(${low} + ${high}) ÷ 2 = ${raw} → mid = ${mid}${raw !== mid ? "（小数点以下を切り捨て）" : ""}`;
    add(3, "中央を計算", `現在の探索範囲はインデックス${low}～${high}です。中央位置を求めます。インデックス${mid}の値は${data[mid]}です。`, {mid, calculation});
    comparisons++;
    const sign = target === data[mid] ? "=" : target > data[mid] ? ">" : "<";
    const direction = sign === "=" ? "見つかりました！" : sign === ">" ? "右側を探します" : "左側を探します";
    add(sign === "=" ? 4 : sign === ">" ? 6 : 8, "中央の値と比較", sign === "=" ? `探す値${target}と中央の値${data[mid]}は同じです。` : sign === ">" ? `探す値${target}は${data[mid]}より大きいため、${data[mid]}とその左側は探す必要がありません。` : `探す値${target}は${data[mid]}より小さいため、${data[mid]}とその右側は探す必要がありません。`, {mid, calculation, expression: `${target} ${sign} ${data[mid]}`, direction});
    if (sign === "=") {
      add(5, "発見", `${target}はインデックス${mid}で見つかりました！`, {mid, calculation, expression: `${target} = ${data[mid]}`, direction: "見つかりました！", found: mid, done: true});
      break;
    }
    if (sign === ">") {
      low = mid + 1;
      add(7, "右半分へ", `lowを${low}に更新しました。探索範囲を右半分に変更します。${low <= high ? `残りはインデックス${low}～${high}です。` : "low > high になりました。"}`, {calculation: `low ← mid + 1 = ${mid} + 1 = ${low}`});
    } else {
      high = mid - 1;
      add(9, "左半分へ", `highを${high}に更新しました。探索範囲を左半分に変更します。${low <= high ? `残りはインデックス${low}～${high}です。` : "low > high になりました。"}`, {calculation: `high ← mid - 1 = ${mid} - 1 = ${high}`});
    }
  }
  if (low > high) add(10, "見つからない", `最後まで探しましたが、${target}は見つかりませんでした。low = ${low} > high = ${high} となり、候補がありません。`, {calculation: `low = ${low} > high = ${high}`, done: true, failure: true});
  return result;
}

function validTarget() {
  return $("target").value.trim() !== "" && Number.isSafeInteger($("target").valueAsNumber);
}
function pause() {
  if (timer !== null) clearInterval(timer);
  timer = null;
}
function render() {
  const f = frames[step];
  $("range").innerHTML = `左端 <strong>low = ${f.low}</strong> ／ 右端 <strong>high = ${f.high}</strong> ／ 中央 <strong>mid = ${f.mid === null ? "—" : f.mid}</strong>`;
  $("array").replaceChildren(...data.map((value, i) => {
    const card = document.createElement("div");
    card.className = `card ${i < f.low || i > f.high ? "outside" : "in-range"} ${i === f.mid ? "is-mid" : ""} ${i === f.found ? "found" : ""}`;
    const tags = document.createElement("div"); tags.className = "tags";
    [["low", f.low], ["mid", f.mid], ["high", f.high]].forEach(([name, position]) => {
      if (i === position && (name !== "mid" || f.mid !== null)) {
        const tag = document.createElement("span"); tag.className = `tag ${name}`; tag.textContent = name; tags.append(tag);
      }
    });
    const number = document.createElement("div"); number.className = "number"; number.textContent = value;
    const index = document.createElement("div"); index.className = "index"; index.textContent = `インデックス ${i}`;
    card.append(tags, number, index); return card;
  }));
  $("calculation").textContent = f.calculation || "";
  $("values").textContent = f.expression ? `探す値：${target} ／ 中央の値：${data[f.mid]}` : "中央を求めてから比較します";
  $("expression").textContent = f.expression || "";
  $("direction").textContent = f.direction || "";
  $("message").textContent = f.message;
  $("message").className = `message ${f.found !== undefined ? "success" : f.failure ? "failure" : ""}`;
  $("binary-count").textContent = f.comparisons;
  $("binary-summary").textContent = f.comparisons;
  $("remaining").textContent = Math.max(0, f.high - f.low + 1);
  const linearIndex = data.indexOf(target);
  $("linear-count").textContent = linearIndex < 0 ? data.length : linearIndex + 1;
  $("comparison-note").textContent = f.done ? `同じ${data.length}個のデータから${target}を探すと、線形探索は${linearIndex < 0 ? data.length : linearIndex + 1}回、二分探索は${f.comparisons}回比較しました。データや探す値によって回数は変わります。` : "二分探索の比較回数は、ステップを進めると増えます。";
  $("code").replaceChildren(...code.map((line, i) => { const li = document.createElement("li"); li.textContent = line; if (i === f.line) {li.className = "executing"; li.setAttribute("aria-current", "step");} return li;}));
  $("step").disabled = !started || f.done || timer !== null;
  $("play").disabled = !started || f.done || timer !== null;
  $("pause").disabled = timer === null;
  $("status").textContent = timer !== null ? "自動再生中：約1秒ごとに進みます" : f.done ? "探索終了。「最初から」で同じデータをもう一度確認できます。" : started ? `ステップ ${step} / ${frames.length - 1} · ${f.phase}` : "探す値を確認して「検索開始」を押してください。";
}
function reset() { pause(); frames = makeFrames(); step = 0; started = false; render(); }
function next() { if (!started || step >= frames.length - 1) return; step++; if (frames[step].done) pause(); render(); }
$("start").addEventListener("click", () => { if (!validTarget()) { $("error").textContent = "探す値には整数を入力してください。"; return; } $("error").textContent = ""; target = $("target").valueAsNumber; pause(); frames = makeFrames(); step = 0; started = true; render(); });
$("step").addEventListener("click", next);
$("play").addEventListener("click", () => { if (!started || timer !== null || frames[step].done) return; timer = setInterval(next, 1000); render(); });
$("pause").addEventListener("click", () => { pause(); render(); });
$("reset").addEventListener("click", reset);
$("new").addEventListener("click", () => { const pool = Array.from({length: 99}, (_, i) => i + 1); for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; } data = pool.slice(0, 9).sort((a, b) => a - b); target = data[6]; $("target").value = target; $("error").textContent = ""; reset(); });
$("target").addEventListener("input", () => { $("error").textContent = validTarget() ? "" : "探す値には整数を入力してください。"; reset(); });
document.addEventListener("visibilitychange", () => { if (document.hidden) { pause(); render(); } });
document.addEventListener("contextmenu", (event) => event.preventDefault());
reset();

