"use strict";

const $ = (id) => document.getElementById(id);
const original = $("original");
const modified = $("modified");
const algorithm = $("algorithm");
const encoder = new TextEncoder();
let textVersion = 0;
let fileVersion = 0;
let currentFileHash = "";

// MD5はWeb Crypto APIにないため、教材専用のローカル実装で計算する。
// 32ビット演算、64バイト単位の処理、長さの付加はMD5の仕様に従う。
function md5(bytes) {
  const length = Math.ceil((bytes.length + 9) / 64) * 64;
  const padded = new Uint8Array(length);
  padded.set(bytes);
  padded[bytes.length] = 0x80;
  const view = new DataView(padded.buffer);
  const bits = BigInt(bytes.length) * 8n;
  view.setUint32(length - 8, Number(bits & 0xffffffffn), true);
  view.setUint32(length - 4, Number(bits >> 32n), true);
  const shifts = [7,12,17,22, 5,9,14,20, 4,11,16,23, 6,10,15,21];
  const constants = Array.from({ length: 64 }, (_, i) => Math.floor(Math.abs(Math.sin(i + 1)) * 2 ** 32) | 0);
  let a0 = 0x67452301, b0 = 0xefcdab89, c0 = 0x98badcfe, d0 = 0x10325476;
  for (let offset = 0; offset < length; offset += 64) {
    let a = a0, b = b0, c = c0, d = d0;
    for (let i = 0; i < 64; i++) {
      let f, g;
      if (i < 16) { f = (b & c) | (~b & d); g = i; }
      else if (i < 32) { f = (d & b) | (~d & c); g = (5 * i + 1) % 16; }
      else if (i < 48) { f = b ^ c ^ d; g = (3 * i + 5) % 16; }
      else { f = c ^ (b | ~d); g = (7 * i) % 16; }
      const x = (a + f + constants[i] + view.getUint32(offset + g * 4, true)) | 0;
      const s = shifts[Math.floor(i / 16) * 4 + i % 4];
      const next = (b + ((x << s) | (x >>> (32 - s)))) | 0;
      a = d; d = c; c = b; b = next;
    }
    a0 = (a0 + a) | 0; b0 = (b0 + b) | 0; c0 = (c0 + c) | 0; d0 = (d0 + d) | 0;
  }
  const result = new DataView(new ArrayBuffer(16));
  [a0, b0, c0, d0].forEach((value, i) => result.setUint32(i * 4, value, true));
  return toHex(result.buffer);
}

function toHex(buffer) {
  return Array.from(new Uint8Array(buffer), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function digest(bytes, method) {
  if (method === "MD5") return md5(bytes);
  if (!globalThis.crypto?.subtle) throw new Error("HTTPSのページ、またはlocalhostで開いてください。Web Crypto APIが利用できません。");
  return toHex(await crypto.subtle.digest(method, bytes));
}

// 入力文字列をHTMLとして扱わず、差分のみ安全なDOM要素にする。
function renderHash(element, value, other) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < value.length; i++) {
    const span = document.createElement("span");
    span.textContent = value[i];
    if (value[i] !== other[i]) span.className = "changed";
    fragment.append(span);
  }
  element.replaceChildren(fragment);
}

async function updateText() {
  // 非同期計算が逆順で終わっても、最新の入力だけを表示する。
  const version = ++textVersion;
  const left = original.value, right = modified.value, method = algorithm.value;
  $("original-count").textContent = `${Array.from(left).length}文字（改行を含む）`;
  $("modified-count").textContent = `${Array.from(right).length}文字（改行を含む）`;
  document.querySelectorAll(".algorithm-label").forEach((el) => { el.textContent = method; });
  const lengths = { "SHA-256": [64, 256], "SHA-1": [40, 160], MD5: [32, 128] };
  $("algorithm-info").textContent = `${method}：長さはいつも${lengths[method][0]}文字（${lengths[method][1]}ビット）です。`;
  $("legacy-warning").hidden = method === "SHA-256";
  $("status-title").textContent = "計算中…";
  $("difference").textContent = "";
  $("comparison-status").className = "status";
  $("original-hash").textContent = "計算中…";
  $("modified-hash").textContent = "計算中…";
  try {
    const [a, b] = await Promise.all([digest(encoder.encode(left), method), digest(encoder.encode(right), method)]);
    if (version !== textVersion) return;
    renderHash($("original-hash"), a, b);
    renderHash($("modified-hash"), b, a);
    const same = a === b;
    $("comparison-status").className = same ? "status" : "status different";
    $("status-title").textContent = same ? "✓ ハッシュ値は一致しています" : "≠ ハッシュ値が異なります。データが変更されています";
    const changed = Array.from(a).filter((char, i) => char !== b[i]).length;
    $("difference").textContent = same ? (left === right ? "同じデータからは、同じハッシュ値が生成されます。" : "文字列は異なりますが、ハッシュ値は一致しています。一致だけでは同じデータと断定できません。") : `${a.length}文字中 ${changed}文字の位置が変わりました。元に戻して、もう一度比べてみましょう。`;
  } catch (error) {
    if (version !== textVersion) return;
    $("original-hash").textContent = "計算できません";
    $("modified-hash").textContent = "計算できません";
    $("comparison-status").className = "status error";
    $("status-title").textContent = "ハッシュ値を計算できませんでした";
    $("difference").textContent = error.message;
  }
}

original.addEventListener("input", updateText);
modified.addEventListener("input", updateText);
algorithm.addEventListener("change", updateText);
$("change").addEventListener("click", () => { modified.value += "。"; updateText(); });
$("restore").addEventListener("click", () => { modified.value = original.value; updateText(); });

function compareFile() {
  const expected = $("expected-hash").value.trim().toLowerCase();
  $("file-comparison").textContent = !expected ? "" : !/^[0-9a-f]{64}$/.test(expected) ? "半角の0〜9とa〜fで、64文字のハッシュ値を入力してください。" : !currentFileHash ? "先にファイルを選択してください。" : currentFileHash === expected ? "✓ ハッシュ値は一致しています。配布元の値と同じです。" : "≠ ハッシュ値が異なります。配布元の値と一致しません。";
}

async function handleFiles(files) {
  const version = ++fileVersion;
  currentFileHash = "";
  $("file-hash").hidden = true;
  $("file-hash").textContent = "";
  compareFile();
  if (files.length !== 1) { $("file-status").textContent = "1回に1ファイルを選択してください。"; return; }
  const file = files[0];
  if (file.size > 50 * 1024 * 1024) { $("file-status").textContent = "50 MB以下のファイルを選択してください。大きなファイルは処理に多くのメモリを使います。"; return; }
  $("file-status").textContent = `「${file.name}」を計算中…`;
  try {
    const bytes = await file.arrayBuffer();
    if (version !== fileVersion) return;
    const hash = await digest(bytes, "SHA-256");
    if (version !== fileVersion) return;
    currentFileHash = hash;
    $("file-hash").textContent = hash;
    $("file-hash").hidden = false;
    $("file-status").textContent = `「${file.name}」・${file.size.toLocaleString("ja-JP")}バイト・SHA-256`;
    compareFile();
  } catch (error) {
    if (version !== fileVersion) return;
    $("file-status").textContent = `計算できませんでした。${error.message}`;
  }
}

$("file-input").addEventListener("change", (event) => { if (event.target.files.length) handleFiles(event.target.files); event.target.value = ""; });
$("expected-hash").addEventListener("input", compareFile);
const dropZone = $("drop-zone");
// ページ外へのドロップによる意図しないファイル表示も防ぐ。
for (const name of ["dragover", "drop"]) window.addEventListener(name, (event) => event.preventDefault());
dropZone.addEventListener("dragover", () => dropZone.classList.add("dragging"));
dropZone.addEventListener("dragleave", () => dropZone.classList.remove("dragging"));
dropZone.addEventListener("drop", (event) => { dropZone.classList.remove("dragging"); handleFiles(event.dataTransfer.files); });
updateText();

// 簡易的な閲覧抑止です。完全なソース保護ではなく、開発者ツールは制限しません。
if (typeof document !== "undefined") {
  document.addEventListener("contextmenu", (event) => event.preventDefault());
}
