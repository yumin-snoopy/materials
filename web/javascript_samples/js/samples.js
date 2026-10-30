"use strict";
// 各見本の HTML・CSS・JavaScript は、そのまま別ファイルへ貼れる独立した部品です。
window.javascriptSamples = [
  {
    group:'基本操作', title:'ボタンを押してメッセージを表示', description:'クリックすると、画面にメッセージを表示します。', usage:'問い合わせ案内や操作完了のお知らせに使えます。', explanation:'addEventListener() でクリックを受け取り、textContent で文字を入れます。', customize:'「こんにちは！」を表示したい文章に変更します。',
    html:`<button id="js-message-button" type="button">メッセージを表示</button>
<p id="js-message-output" role="status"></p>`, css:'',
    js:`(() => {
  const button = document.querySelector('#js-message-button');
  const output = document.querySelector('#js-message-output');
  button.addEventListener('click', () => {
    output.textContent = 'こんにちは！';
  });
})();`
  },
  {
    group:'基本操作', title:'ボタンを押して文字を変更', description:'ボタンを押すたびに文章が切り替わります。', usage:'説明文や状態の切り替えに使えます。', explanation:'現在の textContent を調べ、次に表示する文字を決めます。', customize:'「最初の文章」「変更後の文章」を自分の文章に変えます。',
    html:`<p id="js-change-text">最初の文章</p>
<button id="js-change-button" type="button">文字を切り替える</button>`, css:'',
    js:`(() => {
  const text = document.querySelector('#js-change-text');
  document.querySelector('#js-change-button').addEventListener('click', () => {
    text.textContent = text.textContent === '最初の文章' ? '変更後の文章' : '最初の文章';
  });
})();`
  },
  {
    group:'基本操作', title:'背景色や文字色を変更', description:'ボタンを押すと見本の背景色と文字色が切り替わります。', usage:'テーマの切り替えや、目立たせたい部分の表示に使えます。', explanation:'classList.toggle() でクラスを付け外しし、色の指定はCSSにまとめます。', customize:'CSSの背景色と文字色を、自分のサイトに合う色に変えます。',
    html:`<div id="js-color-box" class="js-color-box">色が変わる見本です</div>
<button id="js-color-button" type="button">色を切り替える</button>`,
    css:`.js-color-box { padding: 24px; margin-bottom: 12px; background: #e9f5fb; color: #23495e; border-radius: 12px; }
.js-color-box.is-changed { background: #f8dce9; color: #7c2853; }`,
    js:`(() => {
  const box = document.querySelector('#js-color-box');
  document.querySelector('#js-color-button').addEventListener('click', () => {
    box.classList.toggle('is-changed');
  });
})();`
  },
  {
    group:'基本操作', title:'要素の表示・非表示を切り替え', description:'説明欄を開いたり閉じたりします。', usage:'補足説明や詳細情報を必要なときだけ表示できます。', explanation:'hidden 属性を切り替え、aria-expanded に開閉状態を反映します。', customize:'隠しておく説明文とボタンの表示文字を変えます。',
    html:`<button id="js-show-button" type="button" aria-controls="js-show-content" aria-expanded="false">説明を表示</button>
<p id="js-show-content" hidden>ここに補足説明を入れます。</p>`, css:'',
    js:`(() => {
  const button = document.querySelector('#js-show-button');
  const content = document.querySelector('#js-show-content');
  button.addEventListener('click', () => {
    content.hidden = !content.hidden;
    button.setAttribute('aria-expanded', String(!content.hidden));
    button.textContent = content.hidden ? '説明を表示' : '説明を閉じる';
  });
})();`
  },
  {
    group:'Webページでよく使う機能', title:'ハンバーガーメニュー', description:'広い画面では横並び、狭い画面では三本線の開閉メニューになります。', usage:'スマートフォンでも使いやすいサイトのナビゲーションに使えます。', explanation:'@media で見た目を切り替えます。クリック時に classList.toggle() で開閉し、aria-expanded とボタンの見た目をそろえます。', customize:'サイト名、メニューの文字と href、色、切り替え幅の 600px を変更します。', mobilePreview:true,
    html:`<header class="js-nav-header">
  <strong class="js-nav-brand">サンプルサイト</strong>
  <button class="js-nav-toggle" type="button" aria-controls="js-nav-links" aria-expanded="false" aria-label="メニューを開く">
    <span></span><span></span><span></span>
  </button>
  <nav id="js-nav-links" class="js-nav-links" aria-label="メインメニュー">
    <a href="#home">ホーム</a><a href="#about">紹介</a><a href="#contact">お問い合わせ</a>
  </nav>
</header>`,
    css:`.js-nav-header { display:flex; align-items:center; justify-content:space-between; gap:16px; padding:12px 16px; background:#e7f5fb; border-radius:10px; }
.js-nav-brand { white-space:nowrap; }
.js-nav-links { display:flex; gap:18px; }
.js-nav-links a { color:#24566f; text-decoration:none; }
.js-nav-links a:focus-visible, .js-nav-toggle:focus-visible { outline:3px solid #438eae; outline-offset:3px; }
.js-nav-toggle { display:none; }
@media (max-width:600px) {
  .js-nav-header { position:relative; flex-wrap:wrap; }
  .js-nav-toggle { display:flex; flex-direction:column; justify-content:center; gap:5px; width:44px; height:44px; padding:9px; background:#fff; border:1px solid #7aa8bc; border-radius:8px; }
  .js-nav-toggle span { display:block; width:100%; height:2px; background:#24566f; transition:transform .2s,opacity .2s; }
  .js-nav-toggle.is-open span:first-child { transform:translateY(7px) rotate(45deg); }
  .js-nav-toggle.is-open span:nth-child(2) { opacity:0; }
  .js-nav-toggle.is-open span:last-child { transform:translateY(-7px) rotate(-45deg); }
  .js-nav-links { display:none; width:100%; flex-direction:column; gap:0; }
  .js-nav-links.is-open { display:flex; }
  .js-nav-links a { display:block; padding:10px; border-top:1px solid #b8d4e0; }
}`,
    js:`(() => {
  const button = document.querySelector('.js-nav-toggle');
  const menu = document.querySelector('#js-nav-links');
  function closeMenu() {
    button.classList.remove('is-open');
    menu.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'メニューを開く');
  }
  button.addEventListener('click', () => {
    const open = button.classList.toggle('is-open');
    menu.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  window.matchMedia('(min-width: 601px)').addEventListener('change', event => {
    if (event.matches) closeMenu();
  });
})();`
  },
  {
    group:'Webページでよく使う機能', title:'タブ切り替え', description:'見出しを選ぶと対応する内容に切り替わります。', usage:'商品情報や複数の説明を限られた場所にまとめられます。', explanation:'選択中のタブだけ aria-selected を true にし、対応するパネル以外を hidden にします。左右キーでも移動できます。', customize:'タブ名と各パネルの文章を変更します。',
    html:`<div class="js-tabs" role="tablist" aria-label="説明の種類">
  <button id="js-tab-a" type="button" role="tab" aria-controls="js-panel-a" aria-selected="true">特徴</button>
  <button id="js-tab-b" type="button" role="tab" aria-controls="js-panel-b" aria-selected="false" tabindex="-1">使い方</button>
</div>
<div id="js-panel-a" class="js-tab-panel" role="tabpanel" aria-labelledby="js-tab-a">使いやすい機能です。</div>
<div id="js-panel-b" class="js-tab-panel" role="tabpanel" aria-labelledby="js-tab-b" hidden>ボタンを押して切り替えます。</div>`,
    css:`.js-tabs { display:flex; gap:8px; border-bottom:2px solid #bed8e5; }
.js-tabs button { padding:9px 16px; border:0; background:#eef5f8; border-radius:8px 8px 0 0; }
.js-tabs button[aria-selected="true"] { background:#f8dce9; font-weight:bold; }
.js-tab-panel { padding:18px 4px; }`,
    js:`(() => {
  const tabs = [...document.querySelectorAll('.js-tabs [role="tab"]')];
  function selectTab(index) {
    tabs.forEach((tab, position) => {
      const active = position === index;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
    });
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(index));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const next = (index + (event.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length;
      selectTab(next); tabs[next].focus();
    });
  });
})();`
  },
  {
    group:'Webページでよく使う機能', title:'アコーディオンメニュー', description:'質問を押すと回答が開閉します。', usage:'よくある質問や長い説明を整理できます。', explanation:'HTML標準の details と summary を使うので、キーボードでも操作できます。JavaScriptは開いた項目だけを残す処理です。', customize:'質問と回答の文面を変更します。',
    html:`<div class="js-accordion">
  <details><summary>利用方法は？</summary><p>説明を読んでから操作してください。</p></details>
  <details><summary>費用はかかりますか？</summary><p>この見本は無料です。</p></details>
</div>`,
    css:`.js-accordion details { border:1px solid #bdd6e2; border-radius:8px; margin-bottom:8px; padding:9px 14px; }
.js-accordion summary { cursor:pointer; font-weight:bold; }
.js-accordion p { margin-bottom:2px; }`,
    js:`(() => {
  const items = document.querySelectorAll('.js-accordion details');
  items.forEach(item => item.addEventListener('toggle', () => {
    if (item.open) items.forEach(other => { if (other !== item) other.open = false; });
  }));
})();`
  },
  {
    group:'Webページでよく使う機能', title:'画像の切り替え', description:'ボタンで表示する画像を順番に切り替えます。', usage:'作品写真や商品画像の紹介に使えます。', explanation:'画像の src と alt を同時に変更します。この見本は外部ファイル不要のSVG画像を使用しています。', customize:'images の src を自分の画像パスに、alt を画像の説明に変更します。',
    html:`<div class="js-image-switch"><img id="js-switch-image" alt="青い海のイラスト" width="320" height="160"><p id="js-image-caption">青い海</p><button id="js-image-next" type="button">次の画像</button></div>`,
    css:`.js-image-switch img { display:block; max-width:100%; height:auto; border-radius:10px; }
.js-image-switch p { margin:8px 0; }`,
    js:`(() => {
  function picture(color, label) {
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="160"><rect width="320" height="160" fill="' + color + '"/><circle cx="250" cy="48" r="28" fill="#fff7cf"/><text x="25" y="135" font-size="28" fill="#ffffff">' + label + '</text></svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }
  const images = [
    {src:picture('#4a9fbc', 'SEA'), alt:'青い海のイラスト', caption:'青い海'},
    {src:picture('#d783a9', 'FLOWER'), alt:'ピンクの花のイラスト', caption:'ピンクの花'},
    {src:picture('#77a777', 'FOREST'), alt:'緑の森のイラスト', caption:'緑の森'}
  ];
  const image = document.querySelector('#js-switch-image');
  const caption = document.querySelector('#js-image-caption');
  let index = 0;
  function showImage() { image.src = images[index].src; image.alt = images[index].alt; caption.textContent = images[index].caption; }
  document.querySelector('#js-image-next').addEventListener('click', () => { index = (index + 1) % images.length; showImage(); });
  showImage();
})();`
  },
  {
    group:'Webページでよく使う機能', title:'ページの先頭に戻るボタン', description:'スクロールした位置からページの先頭へ戻ります。', usage:'縦に長い記事や作品紹介ページに使えます。', explanation:'クリック時に window.scrollTo() を呼び出してページの先頭へ移動します。', customize:'ボタンの文字や、ページの長さに合わせた配置を変更します。',
    html:`<p>ここがページの先頭です。</p>
<div class="js-scroll-space">下へスクロールしてください</div>
<button id="js-top-button" type="button">ページの先頭に戻る</button>`,
    css:`.js-scroll-space { height:350px; background:linear-gradient(#e9f5fb,#fbe7f0); padding:12px; margin-bottom:12px; }`,
    js:`(() => {
  document.querySelector('#js-top-button').addEventListener('click', () => {
    window.scrollTo({top:0, behavior:'smooth'});
  });
})();`
  },
  {
    group:'フォーム関連', title:'入力した名前を画面に表示', description:'入力した名前を使って挨拶を表示します。', usage:'簡単な歓迎メッセージやプレビューに使えます。', explanation:'input の value を読み、textContent で安全に表示します。空欄の場合も案内を出します。', customize:'挨拶の文と入力欄のラベルを変更します。',
    html:`<label for="js-name-input">お名前</label> <input id="js-name-input" type="text" autocomplete="name">
<button id="js-name-button" type="button">表示する</button><p id="js-name-result" role="status"></p>`, css:'',
    js:`(() => {
  const input = document.querySelector('#js-name-input');
  const result = document.querySelector('#js-name-result');
  document.querySelector('#js-name-button').addEventListener('click', () => {
    const name = input.value.trim();
    result.textContent = name ? name + 'さん、こんにちは！' : 'お名前を入力してください。';
  });
})();`
  },
  {
    group:'フォーム関連', title:'入力必須チェック', description:'送信前に入力があるか確認し、結果を表示します。', usage:'お問い合わせなどの入力フォームに使えます。', explanation:'フォームの submit イベントで validity を確認します。ここでは送信を止めて結果を見せます。', customize:'ラベル、エラーメッセージ、実際の送信先を変更します。',
    html:`<form id="js-required-form" novalidate>
  <label for="js-required-name">お名前（必須）</label>
  <input id="js-required-name" name="name" required aria-describedby="js-required-result">
  <button type="submit">確認する</button>
  <p id="js-required-result" role="status"></p>
</form>`,
    css:`#js-required-name[aria-invalid="true"] { border:2px solid #be436c; }`,
    js:`(() => {
  const form = document.querySelector('#js-required-form');
  const input = document.querySelector('#js-required-name');
  const result = document.querySelector('#js-required-result');
  form.addEventListener('submit', event => {
    event.preventDefault(); // 見本では実際の送信を行わない
    const valid = input.value.trim().length > 0;
    input.setAttribute('aria-invalid', String(!valid));
    result.textContent = valid ? '入力を確認しました。' : 'お名前を入力してください。';
    if (!valid) input.focus();
  });
  input.addEventListener('input', () => { input.removeAttribute('aria-invalid'); result.textContent = ''; });
})();`
  },
  {
    group:'フォーム関連', title:'入力文字数カウンター', description:'入力した文字数をリアルタイムで表示します。', usage:'投稿文や紹介文の長さを確認できます。', explanation:'input イベントで文字数を数え、表示を更新します。maxlength で上限も指定します。', customize:'maxlength の数値と案内文を変更します。',
    html:`<label for="js-count-input">紹介文（100文字まで）</label><br>
<textarea id="js-count-input" maxlength="100" rows="3"></textarea>
<p id="js-count-result" aria-live="polite">0 / 100文字</p>`,
    css:`#js-count-input { width:min(100%,400px); padding:8px; border:1px solid #9db8c7; border-radius:8px; }`,
    js:`(() => {
  const input = document.querySelector('#js-count-input');
  const result = document.querySelector('#js-count-result');
  input.addEventListener('input', () => {
    result.textContent = input.value.length + ' / ' + input.maxLength + '文字';
  });
})();`
  },
  {
    group:'便利な機能', title:'現在の日付・時刻の表示', description:'現在の日時を表示し、1秒ごとに更新します。', usage:'イベントページや時計表示に使えます。', explanation:'Date と Intl.DateTimeFormat を使い、日本語形式で日時を表示します。', customize:'表示形式や更新間隔を変更します。',
    html:`<p>現在の日時：<time id="js-clock"></time></p>`, css:'',
    js:`(() => {
  const clock = document.querySelector('#js-clock');
  const format = new Intl.DateTimeFormat('ja-JP', {year:'numeric',month:'long',day:'numeric',weekday:'long',hour:'2-digit',minute:'2-digit',second:'2-digit'});
  function updateClock() {
    const now = new Date();
    clock.textContent = format.format(now);
    clock.dateTime = now.toISOString();
  }
  updateClock();
  setInterval(updateClock, 1000);
})();`
  },
  {
    group:'便利な機能', title:'簡単な計算', description:'2つの数字を足して結果を表示します。', usage:'料金や個数の簡単な計算に使えます。', explanation:'Number() で入力を数値に変換します。空欄や不正な値は先に確認します。', customize:'演算子の + を変えれば、別の計算にも応用できます。',
    html:`<label for="js-calc-a">1つ目</label> <input id="js-calc-a" type="number" step="any" value="2">
<label for="js-calc-b">2つ目</label> <input id="js-calc-b" type="number" step="any" value="3">
<button id="js-calc-button" type="button">足し算する</button>
<p id="js-calc-result" role="status"></p>`,
    css:`#js-calc-a, #js-calc-b { width:90px; margin:4px; }`,
    js:`(() => {
  const first = document.querySelector('#js-calc-a');
  const second = document.querySelector('#js-calc-b');
  const result = document.querySelector('#js-calc-result');
  document.querySelector('#js-calc-button').addEventListener('click', () => {
    if (first.value.trim() === '' || second.value.trim() === '' || !first.validity.valid || !second.validity.valid) {
      result.textContent = '数字を2つ入力してください。'; return;
    }
    result.textContent = '計算結果：' + (Number(first.value) + Number(second.value));
  });
})();`
  },
  {
    group:'便利な機能', title:'おみくじ（ランダム表示）', description:'ボタンを押すたびに結果をランダムで表示します。', usage:'簡単な遊びや抽選の演出に使えます。', explanation:'Math.random() から配列の番号を決め、結果を表示します。', customize:'results の中身を自分の言葉に変更します。',
    html:`<button id="js-fortune-button" type="button">おみくじを引く</button>
<p id="js-fortune-result" role="status"></p>`, css:'',
    js:`(() => {
  const results = ['大吉', '中吉', '小吉', '吉'];
  const result = document.querySelector('#js-fortune-result');
  document.querySelector('#js-fortune-button').addEventListener('click', () => {
    const index = Math.floor(Math.random() * results.length);
    result.textContent = '結果：' + results[index];
  });
})();`
  }
];

