"use strict";

// Each frame is one teachable action, linked to one pseudocode line.
const algorithms = {
  max: { name: "最大値", label: "現在の最大値", code: ["max ← data[0]", "for i ← 1 to データ数 - 1", "  if data[i] > max", "    max ← data[i]", "  endif", "endfor", "最大値は max"], point: "1つずつ順番に比較して、必要なときだけ値を更新します。最大値では「>」を使います。" },
  min: { name: "最小値", label: "現在の最小値", code: ["min ← data[0]", "for i ← 1 to データ数 - 1", "  if data[i] < min", "    min ← data[i]", "  endif", "endfor", "最小値は min"], point: "1つずつ順番に比較して、必要なときだけ値を更新します。最小値では「<」を使います。" },
  sum: { name: "合計", label: "現在の合計", code: ["sum ← 0", "for i ← 0 to データ数 - 1", "  sum ← sum + data[i]", "endfor", "合計は sum"], point: "変数に値を順番に足していきます。合計の初期値は0です。" },
  average: { name: "平均", label: "現在の合計", code: ["sum ← 0", "for i ← 0 to データ数 - 1", "  sum ← sum + data[i]", "endfor", "average ← sum ÷ データ数", "平均は average"], point: "平均を求めるには、まず合計を求めます。すべてを足した後に、データ数で割ります。" },
  search: { name: "線形探索", label: "探索結果", code: ["位置 ← -1", "for i ← 0 to データ数 - 1", "  if data[i] = 探す値", "    位置 ← i", "    繰返しを終了", "  endif", "endfor", "位置が -1 なら見つからない"], point: "先頭から順番に探す方法を線形探索といいます。見つかった時点で終了し、同じ値が複数ある場合は最初の位置を返します。" }
};
let data = [7, 3, 12, 5, 9, 2, 16];
let mode = "max";
let target = 5;
let frames = [];
let step = 0;
let timer = null;
const app = document.getElementById("app");
app.innerHTML = `<main><a class="back-link" href="../">← FE教材一覧</a><header><div class="eyebrow">基本情報技術者試験 · 科目B</div><h1>FE アルゴリズム可視化教材<span>配列を調べる基本アルゴリズム</span></h1><p class="hint">配列を先頭から順番に確認する流れを、1ステップずつ見てみましょう。</p></header><nav aria-label="アルゴリズムの切替">${Object.entries(algorithms).map(([key, a]) => `<button type="button" data-mode="${key}" aria-pressed="false">${a.name}</button>`).join("")}</nav><div class="layout"><section class="panel" aria-labelledby="algorithm-title"><h2 id="algorithm-title"></h2><div class="data-settings"><label for="data-count">表示数</label><select id="data-count"><option value="5">5個</option><option value="6">6個</option><option value="7" selected>7個</option><option value="8">8個</option><option value="9">9個</option></select><p class="hint">個数を変更すると、新しいデータで最初から始めます。</p></div><div class="search" hidden><label for="target">探す値</label><input id="target" type="number" step="1" value="5"><p class="hint">値を変更すると、先頭からやり直します。</p><p id="input-error" class="error" role="alert"></p></div><p class="hint">インデックス（要素の位置）は <strong>0から</strong>始まります。</p><div id="cards" class="cards" aria-label="配列のデータ"></div><div class="legend"><span>未確認</span><span class="current">現在確認中</span><span class="checked">確認済み</span></div><div id="metrics" class="metrics"><div id="metric-label" class="metric-label"></div><div id="value" class="value"></div><div id="detail" class="detail"></div></div><div class="explanation" aria-live="polite" aria-atomic="true"><div id="phase" class="phase"></div><div id="formula" class="formula"></div><p id="explanation"></p></div><div class="controls"><button id="next" class="primary" type="button">1ステップ進む →</button><button id="reset" type="button">最初から</button><button id="play" type="button">自動再生</button><button id="pause" type="button">一時停止</button><button id="random" type="button">新しいデータを作る</button></div><p id="play-status" class="play-status"></p><div id="point" class="point" hidden><h3>学習ポイント</h3><p id="point-text"></p></div></section><aside class="panel" aria-labelledby="code-title"><h2 id="code-title">疑似コード</h2><p class="hint">色の付いた行を、今実行しています。<br>「←」は、右の値を左の変数に保存する意味です。</p><ol id="code" class="code"></ol><div id="side-note" class="side-note"></div></aside></div><footer>教育用途の教材です。処理はすべてブラウザ内で行います。</footer></main>`;
const $ = (id) => document.getElementById(id);

function buildFrames() {
  const a = algorithms[mode];
  let value = null;
  let checked = -1;
  let found = -1;
  const result = [{ line: -1, active: -1, checked, value, found, phase: "準備", formula: "先頭から順番に確認", text: "「1ステップ進む」を押して始めましょう。", done: false }];
  function add(line, active, phase, formula, text, extra = {}) {
    result.push({ line, active, checked, value, found, phase, formula, text, done: false, ...extra });
  }
  if (mode === "max" || mode === "min") {
    const isMax = mode === "max";
    const symbol = isMax ? ">" : "<";
    value = data[0]; checked = 0;
    add(0, 0, "初期値を保存", `${a.name} = ${value}`, `最初の${value}を、現在の${a.name}として保存します。`, { updated: true });
    for (let i = 1; i < data.length; i++) {
      add(1, i, "次の要素へ", `i = ${i} ／ data[${i}] = ${data[i]}`, `次の${data[i]}を確認します。現在の${a.name}は${value}です。`);
      const update = isMax ? data[i] > value : data[i] < value;
      add(2, i, "比較", `${data[i]} ${symbol} ${value} → ${update ? "はい" : "いいえ"}`, `${data[i]}と現在の${a.name}${value}を比較します。${isMax ? "大きい" : "小さい"}かどうかを調べます。`);
      checked = i;
      if (update) {
        const previous = value; value = data[i];
        add(3, i, "値を更新", `${previous} → ${value}`, `${a.name}を ${previous} → ${value} に更新しました。`, { updated: true });
      } else {
        add(4, i, "値をそのまま保存", `${a.name} = ${value} のまま`, `${data[i]}は${value}より${isMax ? "大きくない" : "小さくない"}ため、${a.name}は変更しません。`);
      }
    }
    add(5, -1, "繰返し終了", "すべての要素を確認しました", "最後の要素まで比較したので、繰返しを終了します。");
    add(6, -1, "完了", `${a.name} = ${value}`, `${a.name}は${value}です。`, { done: true });
  } else if (mode === "sum" || mode === "average") {
    value = 0;
    add(0, -1, "初期値を保存", "sum = 0", "合計を保存する変数sumを0にします。");
    for (let i = 0; i < data.length; i++) {
      add(1, i, "次の要素へ", `i = ${i} ／ data[${i}] = ${data[i]}`, `${data[i]}を、現在の合計${value}に足します。`);
      const previous = value; value += data[i]; checked = i;
      add(2, i, "合計を更新", `${previous} + ${data[i]} = ${value}`, `sum ← sum + data[i] により、合計を${value}に更新しました。`, { updated: true });
    }
    add(3, -1, "繰返し終了", `合計 = ${value}`, "すべてのデータを足し終わりました。");
    if (mode === "average") {
      const sum = value; value = sum / data.length;
      const average = Number(value.toFixed(4));
      add(4, -1, "平均を計算", `${sum} ÷ ${data.length} ${average === value ? "=" : "≈"} ${average}`, `合計${sum}をデータ数${data.length}で割り、平均を求めます。`, { average: true, sum, updated: true });
      add(5, -1, "完了", `平均 = ${average}`, "平均は、すべてのデータを確認した最後に計算します。", { done: true, average: true, sum });
    } else add(4, -1, "完了", `合計 = ${value}`, `合計は${value}です。`, { done: true });
  } else {
    value = "未発見";
    add(0, -1, "初期値を保存", "位置 = -1", `探す値は${target}です。位置を-1（未発見）にして、先頭から探します。`);
    for (let i = 0; i < data.length; i++) {
      add(1, i, "次の要素へ", `i = ${i} ／ data[${i}] = ${data[i]}`, `インデックス${i}の${data[i]}を確認します。`);
      add(2, i, "比較", `${data[i]} = ${target} ? → ${data[i] === target ? "見つかった！" : "違う"}`, `${data[i]}と探す値${target}が等しいか比較します。`);
      checked = i;
      if (data[i] === target) {
        found = i; value = `位置 ${i}`;
        add(3, i, "位置を保存", `位置 = ${i}`, `インデックス${i}で見つかりました（先頭から${i + 1}番目）。`, { updated: true });
        add(4, i, "完了", "見つかったので探索終了", `インデックス${i}で見つかりました。残りの要素は確認しません。`, { done: true });
        break;
      }
      add(5, i, "次へ進む準備", `${data[i]} ≠ ${target}`, "探す値と違うため、次の要素に進みます。");
    }
    if (found === -1) {
      add(6, -1, "繰返し終了", "すべての要素を確認しました", "最後の要素まで探したので、繰返しを終了します。");
      value = "見つからない";
      add(7, -1, "完了", "位置 = -1", "最後まで探しましたが見つかりませんでした。", { done: true });
    }
  }
  return result;
}

function validTarget() {
  if (mode !== "search") return true;
  const input = $("target");
  return input.value.trim() !== "" && Number.isSafeInteger(input.valueAsNumber);
}
function pause() {
  if (timer !== null) clearInterval(timer);
  timer = null;
}
function render() {
  const a = algorithms[mode];
  const f = frames[step];
  document.querySelectorAll("[data-mode]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.mode === mode)));
  $("algorithm-title").textContent = `${a.name}を${mode === "search" ? "探す" : "求める"}`;
  if (mode === "search") $("algorithm-title").textContent = "線形探索（順次探索）";
  document.querySelector(".search").hidden = mode !== "search";
  $("cards").style.setProperty("--count", data.length);
  $("cards").innerHTML = data.map((number, i) => `<div class="card ${i <= f.checked ? "done" : ""} ${i === f.active ? "active" : ""} ${i === f.found ? "found" : ""}"><div class="index">[${i}]</div><div class="number">${number}</div><div class="marker">${i === f.active ? "↑<br>現在確認中" : i <= f.checked ? "確認済み" : "未確認"}</div></div>`).join("");
  $("metric-label").textContent = f.average ? "平均" : a.label;
  $("value").textContent = f.value === null ? "—" : typeof f.value === "number" ? Number(f.value.toFixed(4)) : f.value;
  $("detail").textContent = mode === "average" ? (f.average ? `合計 ${f.sum} ／ データ数 ${data.length} （小数は最大4桁まで表示）` : `データ数 ${data.length} ／ 平均は最後に計算します`) : mode === "search" ? `探す値：${target}` : `確認済み：${f.checked + 1} / ${data.length}個`;
  $("metrics").classList.remove("updated");
  if (f.updated) { void $("metrics").offsetWidth; $("metrics").classList.add("updated"); }
  $("phase").textContent = `ステップ ${step} / ${frames.length - 1} · ${f.phase}`;
  $("formula").textContent = f.formula;
  $("explanation").textContent = f.text;
  $("code").replaceChildren(...a.code.map((line, i) => {
    const item = document.createElement("li"); item.textContent = line;
    if (i === f.line) { item.className = "executing"; item.setAttribute("aria-current", "step"); }
    return item;
  }));
  $("side-note").textContent = mode === "max" || mode === "min" ? "最大値は >（より大きい）、最小値は <（より小さい）。比較演算子の向きに注目しましょう。" : mode === "search" ? "-1は、配列のインデックスに使われない値なので「見つからない」の目印にできます。" : "sumは合計を保存する変数です。data[i]はインデックスiの要素を表します。";
  $("point").hidden = !f.done;
  $("point-text").textContent = a.point;
  $("next").disabled = f.done || !validTarget() || timer !== null;
  $("play").disabled = f.done || !validTarget() || timer !== null;
  $("pause").disabled = timer === null;
  $("play-status").textContent = timer !== null ? "自動再生中 · 約1秒ごとに進みます" : f.done ? "完了 · 「最初から」で繰り返し学べます" : "手動操作 · 1ステップずつ説明しながら進められます";
}
function reset() { pause(); frames = buildFrames(); step = 0; render(); }
function next() {
  if (!validTarget() || step >= frames.length - 1) return;
  step++;
  if (frames[step].done) pause();
  render();
}
document.querySelectorAll("[data-mode]").forEach((button) => button.addEventListener("click", () => { mode = button.dataset.mode; reset(); }));
$("next").addEventListener("click", next);
$("reset").addEventListener("click", reset);
$("play").addEventListener("click", () => {
  if (timer !== null || !validTarget() || frames[step].done) return;
  timer = setInterval(next, 1000); render();
});
$("pause").addEventListener("click", () => { pause(); render(); });
function makeNewData() {
  const count = Number($("data-count").value);
  const candidates = Array.from({ length: 20 }, (_, i) => i + 1);
  // Shuffle a pool of distinct numbers, then take the selected count without replacement.
  for (let i = candidates.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
  }
  data = candidates.slice(0, count);
  reset();
}
$("random").addEventListener("click", makeNewData);
$("data-count").addEventListener("change", makeNewData);
$("target").addEventListener("input", () => {
  pause();
  $("input-error").textContent = validTarget() ? "" : "探す値には整数を入力してください。";
  if (validTarget()) target = $("target").valueAsNumber;
  frames = buildFrames(); step = 0; render();
});
document.addEventListener("visibilitychange", () => { if (document.hidden) { pause(); render(); } });
// A simple deterrent only; browser source and developer tools remain accessible.
document.addEventListener("contextmenu", (event) => event.preventDefault());
reset();
