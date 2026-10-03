"use strict";
(() => {
  const $ = (id) => document.getElementById(id);
  const modes = {
    compare: { label: "① 暗号方式を比較", title: "同じ鍵？ 2種類の鍵？" },
    hybrid: { label: "② ハイブリッド暗号", title: "鍵は安全に、データは速く" },
    signature: { label: "③ デジタル署名", title: "文章の変更を見つけよう" },
    pki: { label: "④ デジタル証明書・PKI", title: "その公開鍵は本物？" }
  };
  const symmetric = [
    ["同じ鍵を使う準備", "送信者が共通鍵を作ります。", "共通鍵は暗号化と復号の両方に使います。"],
    ["鍵を渡すには？", "この鍵をどうやって安全に相手へ渡す？", "途中で鍵を盗まれると、暗号を読まれてしまう。これを鍵配送問題といいます。"],
    ["共通鍵で暗号化", "送信者が同じ共通鍵で文章を暗号文にします。", "共通鍵は黄色で示しています。"],
    ["暗号文を送る", "暗号文を受信者へ送ります。", "鍵を知らなければ内容を読めません。"],
    ["同じ鍵で復号", "受信者も同じ共通鍵を使って元の文章に戻します。", "同じ鍵を両者で安全に共有する必要があります。"]
  ];
  const asymmetric = [
    ["受信者が鍵を2つ用意", "公開鍵と秘密鍵はペアです。", "公開鍵は誰に渡してもよく、秘密鍵は本人だけが保管します。"],
    ["公開鍵を渡す", "受信者は青い公開鍵を送信者へ渡します。", "赤い秘密鍵は渡しません。"],
    ["公開鍵で暗号化", "送信者は受信者の公開鍵で文章を暗号化します。", "暗号化に使うのは受信者の公開鍵です。"],
    ["暗号文を送る", "暗号文を受信者へ送信します。", "公開鍵だけでは復号できません。"],
    ["秘密鍵で復号", "受信者は自分だけが持つ秘密鍵で復号します。", "秘密鍵を安全に保管することが大切です。"]
  ];
  const hybrid = [
    ["2つの方式の得意・不得意", "共通鍵は速いけれど鍵を渡すのが心配。公開鍵は鍵を配りやすいけれど処理が遅い。", "それなら、両方の長所を使おう！ 送信者は受信者の公開鍵を受け取っている前提です。秘密鍵は受信者だけが持ちます。"],
    ["共通鍵を作る", "送信側で、通信に使う黄色い共通鍵を作ります。", "大量データには速い共通鍵暗号を使います。"],
    ["共通鍵を包む", "受信者の青い公開鍵で、共通鍵そのものを暗号化します。", "公開鍵で大量のデータを暗号化するのではありません。"],
    ["暗号化した鍵を送る", "包まれた共通鍵を受信者へ送ります。", "途中で見られても、秘密鍵がなければ取り出せません。"],
    ["秘密鍵で取り出す", "受信者が自分の赤い秘密鍵を使い、共通鍵を取り出します。", "両者が同じ共通鍵を持てました。"],
    ["共通鍵で文章を暗号化", "送信者は共有した共通鍵で「こんにちは」を暗号文にします。", "データの暗号化には黄色い共通鍵を使います。"],
    ["暗号文を送る", "暗号文を受信者へ送ります。", "公開鍵で包んで送ったのは共通鍵です。文章は共通鍵で暗号化します。"],
    ["共通鍵で復号", "受信者は同じ共通鍵で暗号文を復号し、「こんにちは」を読みます。", "公開鍵暗号方式で共通鍵を共有し、共通鍵暗号方式でデータを通信します。これがハイブリッド暗号方式です。"]
  ];
  const pki = [
    ["Webサイトが鍵を用意", "Webサイトは公開鍵と秘密鍵を用意します。", "秘密鍵はWebサイトだけが保管します。"],
    ["私の公開鍵です", "Webサイトが公開鍵を利用者へ渡そうとします。", "ちょっと待って！ この公開鍵、本当にこのWebサイトのもの？"],
    ["デジタル証明書が登場", "証明書は、公開鍵とWebサイトの名前を結びつけます。", "証明書には所有者、公開鍵、発行者などが記載されます。"],
    ["認証局（CA）が発行", "信頼された第三者の認証局がWebサイトを確認し、証明書を発行します。", "Webサイト → 本人確認 → 認証局（CA） → 証明書発行"],
    ["利用者が証明書を確認", "信頼できる認証局の署名、接続先の名前、有効期限などを確認します。", "✔ 証明書OK。この公開鍵は接続先のWebサイトのものと判断できます。"],
    ["ここまでの仕組みをまとめると？", "公開鍵基盤、PKIです。", "公開鍵暗号方式・秘密鍵・公開鍵・デジタル証明書・認証局（CA）・鍵の管理ルールがつながります。"],
    ["PKIとは", "PKIは1つの暗号技術の名前ではありません。", "公開鍵や証明書、認証局などを使って、インターネット上で安全に本人確認を行うための仕組み全体です。"]
  ];
  let mode = "compare", kind = "symmetric", step = 0;
  let signed = null, keys = null, signature = null, displayedHash = "", verification = "";
  const sharedKey = '<span class="key shared">🔑 共通鍵</span>';
  const publicKey = '<span class="key public">🔑 公開鍵</span>';
  const privateKey = '<span class="key private">🔑 秘密鍵</span>';
  const heldKeys = (keys) => `<div class="held-keys"><span class="held-label">手元にある鍵</span>${keys.length ? keys.join("") : '<span class="no-key">まだ鍵はありません</span>'}</div>`;
  const scene = ({ senderKeys, receiverKeys, action, centerKey = "", senderActive = false, receiverActive = false, moving = false }) => `<div class="scene"><div class="actor ${senderActive ? "active" : ""}"><span class="icon">👤</span><strong>送信者</strong>${heldKeys(senderKeys)}</div><div class="arrow ${moving ? "active" : ""}">→</div><div class="artifact ${moving ? "active" : ""}"><span class="held-label">いまの動き</span>${centerKey}<strong>${action}</strong></div><div class="arrow ${moving ? "active" : ""}">→</div><div class="actor ${receiverActive ? "active" : ""}"><span class="icon">👤</span><strong>受信者</strong>${heldKeys(receiverKeys)}</div></div>`;
  function messageFlow(phase) {
    const encrypted = phase >= 1, sent = phase >= 2, decrypted = phase >= 3;
    return `<div class="message-example" aria-label="送る文章の変化">
      <div class="message-card ${encrypted ? "done" : "current"}"><span class="message-label">送信者の平文</span><strong>こんにちは</strong><small>暗号化する前の文章</small></div>
      <span class="message-arrow" aria-hidden="true">→</span>
      <div class="message-card ${encrypted ? sent ? "done" : "current" : "pending"}"><span class="message-label">${sent ? "送信中の暗号文" : "暗号文"}</span><strong>${encrypted ? "Q7x-9mP" : "まだ暗号化していません"}</strong><small>${encrypted ? "読めない形に変化" : "次の段階で変化"}</small></div>
      <span class="message-arrow" aria-hidden="true">→</span>
      <div class="message-card ${decrypted ? "current" : "pending"}"><span class="message-label">受信者が復号した文</span><strong>${decrypted ? "こんにちは" : "まだ復号していません"}</strong><small>${decrypted ? "元の文章に戻る" : "届いたあとに復号"}</small></div>
    </div><p class="message-note">※「Q7x-9mP」は暗号文の見た目を示す例です。実際に暗号化して計算した値ではありません。</p>`;
  }
  function callout(text, type = "") { return `<div class="callout ${type}">${text}</div>`; }
  function comparison() { return '<table class="comparison"><thead><tr><th>方式</th><th>得意なこと</th><th>注意点</th></tr></thead><tbody><tr><th>共通鍵暗号方式</th><td>処理が速く、大量データに向く</td><td>鍵配送問題がある</td></tr><tr><th>公開鍵暗号方式</th><td>公開鍵を配れるため鍵配送問題に対応しやすい</td><td>処理が遅く、大量データに向かない</td></tr></tbody></table>'; }
  function renderCompare() {
    const items = kind === "symmetric" ? symmetric : asymmetric;
    const s = step;
    const selector = `<div class="compare-switch"><button data-kind="symmetric" class="${kind === "symmetric" ? "current" : ""}">共通鍵暗号方式</button><button data-kind="asymmetric" class="${kind === "asymmetric" ? "current" : ""}">公開鍵暗号方式</button></div>`;
    $("stage-title").textContent = `${kind === "symmetric" ? "共通鍵暗号方式" : "公開鍵暗号方式"}：${items[s][0]}`;
    $("lead").textContent = items[s][1];
    const symmetricScene = [
      { senderKeys: [sharedKey], receiverKeys: [], action: "共通鍵を作成", senderActive: true },
      { senderKeys: [sharedKey], receiverKeys: [], centerKey: sharedKey, action: "共通鍵を渡すには？", moving: true },
      { senderKeys: [sharedKey], receiverKeys: [sharedKey], action: "共通鍵で暗号化", senderActive: true, receiverActive: true },
      { senderKeys: [sharedKey], receiverKeys: [sharedKey], action: "暗号文を送信", moving: true },
      { senderKeys: [sharedKey], receiverKeys: [sharedKey], action: "同じ共通鍵で復号", receiverActive: true }
    ];
    const receiverPair = [publicKey, privateKey];
    const publicScene = [
      { senderKeys: [], receiverKeys: receiverPair, action: "鍵ペアを用意", receiverActive: true },
      { senderKeys: [publicKey], receiverKeys: receiverPair, centerKey: publicKey, action: "公開鍵を渡す", moving: true },
      { senderKeys: [publicKey], receiverKeys: receiverPair, action: "受信者の公開鍵で暗号化", senderActive: true },
      { senderKeys: [publicKey], receiverKeys: receiverPair, action: "暗号文を送信", moving: true },
      { senderKeys: [publicKey], receiverKeys: receiverPair, action: "受信者の秘密鍵で復号", receiverActive: true }
    ];
    $("diagram").innerHTML = selector + scene((kind === "symmetric" ? symmetricScene : publicScene)[s]) + messageFlow(s < 2 ? 0 : s === 2 ? 1 : s === 3 ? 2 : 3);
    $("detail").innerHTML = callout(items[s][2], kind === "symmetric" && s === 1 ? "warn" : "") + comparison();
  }
  function renderHybrid() {
    const s = step; $("stage-title").textContent = hybrid[s][0]; $("lead").textContent = hybrid[s][1];
    const receiverPair = [publicKey, privateKey];
    const hybridScene = [
      { senderKeys: [publicKey], receiverKeys: receiverPair, action: "2方式を組み合わせる" },
      { senderKeys: [publicKey, sharedKey], receiverKeys: receiverPair, action: "共通鍵を作成", senderActive: true },
      { senderKeys: [publicKey, sharedKey], receiverKeys: receiverPair, centerKey: publicKey, action: "公開鍵で共通鍵を暗号化", senderActive: true },
      { senderKeys: [publicKey, sharedKey], receiverKeys: receiverPair, centerKey: '<span class="wrapped-key">🔒 暗号化された共通鍵</span>', action: "暗号化した鍵を送信", moving: true },
      { senderKeys: [publicKey, sharedKey], receiverKeys: [...receiverPair, sharedKey], action: "秘密鍵で共通鍵を取り出す", receiverActive: true },
      { senderKeys: [publicKey, sharedKey], receiverKeys: [...receiverPair, sharedKey], action: "共通鍵で文章を暗号化", senderActive: true },
      { senderKeys: [publicKey, sharedKey], receiverKeys: [...receiverPair, sharedKey], action: "暗号文を送信", moving: true },
      { senderKeys: [publicKey, sharedKey], receiverKeys: [...receiverPair, sharedKey], action: "同じ共通鍵で復号", receiverActive: true }
    ];
    $("diagram").innerHTML = scene(hybridScene[s]) + (s >= 5 ? messageFlow(s - 4) : "");
    $("detail").innerHTML = callout(hybrid[s][2], s === 7 ? "success" : "") + (s === 7 ? '<p class="summary">公開鍵暗号方式 ↓ 共通鍵を安全に共有<br>共通鍵暗号方式 ↓ データを高速に暗号化<br><strong>＝ ハイブリッド暗号方式</strong></p><p class="note">HTTPS（TLS）も共通鍵暗号と公開鍵技術を組み合わせます。現在のTLSでは、共通鍵を公開鍵で包んで送る代わりに、鍵共有で共通鍵を作る方式が一般的です。</p>' : "");
  }
  function certificate() { return `<div class="certificate"><h3>📜 デジタル証明書</h3><dl><dt>所有者</dt><dd>www.example.jp</dd><dt>公開鍵</dt><dd>${publicKey}</dd><dt>発行者</dt><dd>認証局（CA）</dd></dl></div>`; }
  function renderPki() {
    const s = step; $("stage-title").textContent = pki[s][0]; $("lead").textContent = pki[s][1];
    if (s >= 5) {
      $("diagram").innerHTML = '<div class="pki-map"><span>公開鍵暗号方式</span><span class="key public">公開鍵</span><span class="key private">秘密鍵</span><span>デジタル証明書</span><span class="center">PKI<br><small>公開鍵基盤</small></span><span>認証局（CA）</span><span>鍵の管理ルール</span></div>';
    } else {
      $("diagram").innerHTML = `<div class="scene"><div class="actor ${s === 4 ? "active" : ""}"><span class="icon">👤</span><strong>利用者</strong><small>${s === 4 ? "証明書を検証" : "公開鍵を受け取る"}</small></div><div class="arrow ${s === 1 || s === 4 ? "active" : ""}">←</div><div class="actor ${s < 2 ? "active" : ""}"><span class="icon">🌐</span><strong>Webサイト</strong>${publicKey}${privateKey}</div><div class="arrow ${s === 3 ? "active" : ""}">↔</div><div class="actor ${s === 3 ? "active" : ""}"><span class="icon">🏛️</span><strong>認証局（CA）</strong><small>証明書を発行する信頼された第三者</small></div></div>${s >= 2 ? certificate() : ""}`;
    }
    $("detail").innerHTML = callout(pki[s][2], s === 1 ? "warn" : s === 4 || s === 6 ? "success" : "") + (s === 2 ? '<p class="note">デジタル証明書は、公開鍵がそのWebサイトのものだと確かめるためのものです。</p>' : s === 4 ? '<p class="note">実際には証明書の署名、名前、有効期限、信頼の連鎖などをブラウザが確認します。</p>' : "");
  }
  const hex = (buffer) => Array.from(new Uint8Array(buffer), byte => byte.toString(16).padStart(2, "0")).join("");
  const short = (value) => value ? `${value.slice(0, 24)}…${value.slice(-8)}` : "未計算";
  async function hash(message) { return hex(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(message))); }
  async function createSignature() {
    try {
      if (!crypto.subtle) throw new Error("Web Crypto APIが利用できません。HTTPSで開いてください。");
      const message = $("message").value;
      if (!message.trim()) { verification = "文章を入力してください。"; render(); return; }
      keys = await crypto.subtle.generateKey({ name: "RSA-PSS", modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: "SHA-256" }, false, ["sign", "verify"]);
      signature = await crypto.subtle.sign({ name: "RSA-PSS", saltLength: 32 }, keys.privateKey, new TextEncoder().encode(message));
      signed = { message, hash: await hash(message) }; displayedHash = signed.hash; verification = "署名を作成しました。受信側で確認を押してください。"; step = 1; render();
    } catch (error) { verification = error.message; render(); }
  }
  async function verifySignature() {
    if (!signed) { verification = "先にデジタル署名を作成してください。"; render(); return; }
    const message = $("message").value;
    const actual = await hash(message);
    displayedHash = actual;
    const ok = await crypto.subtle.verify({ name: "RSA-PSS", saltLength: 32 }, keys.publicKey, signature, new TextEncoder().encode(message));
    verification = ok ? "一致 → 改ざんされていません" : "不一致 → 内容が変更されています";
    step = ok ? 2 : 4; render();
  }
  function renderSignature() {
    $("stage-title").textContent = ["文章と署名", "署名を作成", "受信側で確認", "文章を変更", "変更を検出"][step];
    $("lead").textContent = ["文章からハッシュ値を作り、送信者の秘密鍵で署名します。", "メッセージ → SHA-256 → 送信者の秘密鍵で署名 → デジタル署名完成", "受信した文章のハッシュ値と、署名が示す元の文章のハッシュ値を比べます。", "文章の時刻を10時から11時に変えてみましょう。", "署名の検証とハッシュ値の違いを確認します。"][step];
    const current = $("message") ? $("message").value : "明日の会議は10時です";
    $("diagram").innerHTML = `<div class="sign-layout"><div class="panel"><label for="message"><strong>送る文章</strong></label><textarea id="message">明日の会議は10時です</textarea><div class="sign-actions"><button type="button" class="action primary" id="create-signature">デジタル署名を作成</button><button type="button" class="action" id="verify-signature">受信側で確認</button><button type="button" class="action" id="tamper">文章を改ざんしてみる</button></div></div><div class="panel"><strong>ハッシュ値を比べる</strong><div class="hash-row">署名した文章：<span class="hash">${short(signed?.hash)}</span></div><div class="hash-row">受信した文章：<span class="hash">${short(displayedHash)}</span></div><div class="hash-row">デジタル署名：<span class="hash">${signature ? `${hex(signature).slice(0, 24)}…` : "未作成"}</span></div><p class="note">署名は送信者の秘密鍵で作成し、公開鍵で検証します。</p></div></div>`;
    $("message").value = current;
    $("create-signature").addEventListener("click", createSignature);
    $("verify-signature").addEventListener("click", verifySignature);
    $("tamper").addEventListener("click", () => { $("message").value = $("message").value.replace("10時", "11時"); displayedHash = ""; verification = "文章を変更しました。もう一度「受信側で確認」を押してください。"; step = 3; render(); });
    $("detail").innerHTML = callout(verification || "デジタル署名で確認できること：本人が署名したこと、内容が改ざんされていないこと、否認防止。", verification.startsWith("一致") ? "success" : verification.startsWith("不一致") ? "warn" : "") + '<p class="note">この体験ではブラウザ内で一時的な鍵ペアを生成し、SHA-256とRSA-PSSを使います。「本人」の判断には公開鍵が本当に本人のものだという確認も必要です。</p>';
  }
  function render() {
    $("quiz").hidden = mode !== "quiz";
    document.querySelector(".workspace").hidden = mode === "quiz";
    document.querySelectorAll(".tabs button").forEach(button => button.setAttribute("aria-selected", String(button.dataset.mode === mode)));
    if (mode === "quiz") return;
    $("stage-label").textContent = modes[mode].label;
    const total = mode === "compare" ? 5 : mode === "hybrid" ? hybrid.length : mode === "pki" ? pki.length : 5;
    $("progress").textContent = `${step + 1} / ${total}`;
    $("back").disabled = step === 0; $("next").disabled = step === total - 1;
    if (mode === "compare") renderCompare(); else if (mode === "hybrid") renderHybrid(); else if (mode === "pki") renderPki(); else renderSignature();
  }
  document.querySelector(".tabs").addEventListener("click", (event) => { const button = event.target.closest("button[data-mode]"); if (!button) return; mode = button.dataset.mode; step = 0; render(); });
  $("diagram").addEventListener("click", (event) => { const button = event.target.closest("button[data-kind]"); if (!button) return; kind = button.dataset.kind; step = 0; render(); });
  $("back").addEventListener("click", () => { if (step) { step--; render(); } });
  $("next").addEventListener("click", () => { const max = mode === "compare" ? 4 : mode === "hybrid" ? hybrid.length - 1 : mode === "pki" ? 6 : 4; if (step < max) { step++; render(); } });
  $("reset").addEventListener("click", () => { step = 0; if (mode === "signature") { signed = null; keys = null; signature = null; displayedHash = ""; verification = ""; $("message").value = "明日の会議は10時です"; } render(); });
  const questions = [
    ["暗号化と復号に同じ鍵を使う方式は？", ["共通鍵暗号方式", "公開鍵暗号方式"], 0, "共通鍵暗号方式では両者が同じ鍵を使います。"],
    ["公開鍵暗号方式で本人だけが持つ鍵は？", ["公開鍵", "秘密鍵"], 1, "秘密鍵は本人だけが安全に保管します。"],
    ["『この公開鍵は本物です』と示すものは？", ["デジタル署名", "デジタル証明書"], 1, "証明書はサイトの名前と公開鍵を結びつけます。"],
    ["デジタル証明書を発行する第三者機関は？", ["ISP", "CA", "DNS", "DHCP"], 1, "CAは認証局の略です。"],
    ["共通鍵暗号と公開鍵暗号を組み合わせる方式は？", ["ハイブリッド暗号方式", "ハッシュ方式"], 0, "鍵の共有に公開鍵技術、データに共通鍵暗号を使います。"]
  ];
  const answers = new Map();
  $("questions").innerHTML = questions.map((q, i) => `<div class="question"><h3>Q${i + 1} ${q[0]}</h3><div class="answers">${q[1].map((choice, j) => `<button type="button" data-question="${i}" data-answer="${j}">${String.fromCharCode(65 + j)} ${choice}</button>`).join("")}</div><div class="feedback" id="feedback-${i}" aria-live="polite"></div></div>`).join("");
  $("questions").addEventListener("click", (event) => { const button = event.target.closest("button[data-question]"); if (!button) return; const i = Number(button.dataset.question), choice = Number(button.dataset.answer), ok = choice === questions[i][2]; answers.set(i, ok); button.parentElement.querySelectorAll("button").forEach(item => item.classList.toggle("selected", item === button)); const feedback = $(`feedback-${i}`); feedback.className = `feedback ${ok ? "good" : "bad"}`; feedback.textContent = `${ok ? "正解" : "不正解"}。${questions[i][3]}`; $("score").textContent = `${answers.size} / ${questions.length}問回答 · ${[...answers.values()].filter(Boolean).length}問正解`; });
  render();
})();
