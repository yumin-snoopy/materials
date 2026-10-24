"use strict";
// Each @ token becomes one sample-specific class name in both the HTML and CSS.
(() => {
  const categories = [
    ["heading", "見出しデザイン"], ["text", "文字・テキスト装飾"],
    ["button", "ボタン"], ["box", "ボックス・囲み枠"],
    ["list", "リスト"], ["link", "リンク"],
    ["table", "テーブル"], ["image", "画像の装飾"],
    ["card", "カードデザイン"], ["nav", "ナビゲーションメニュー"],
    ["form", "フォーム（入力欄など）"], ["divider", "区切り線・装飾"]
  ];
  const all = [];
  const add = (category, title, tags, description, html, css, keywords = []) => {
    const numberInCategory = all.filter(item => item.category === category).length + 1;
    const id = `css-sample-${category}-${String(numberInCategory).padStart(2, "0")}`;
    const htmlText = html.replaceAll('class="@', `class="${id}`);
    const cssText = `.${id}, .${id} * { box-sizing: border-box; }\n.${id} { color: #263846; }\n` + css.replaceAll("@", `.${id}`);
    all.push({category, categoryName: categories.find(entry => entry[0] === category)[1], title, tags, description, html: htmlText.trim(), css: cssText.trim(), keywords});
  };

  // 見出し: line, rule, band, badge, underline, centered, side rule, gradient, corner.
  add("heading","細い左ラインの見出し",["シンプル","ビジネス"],"左の細い線で内容の始まりを示します。記事の小見出しに使いやすい形です。",`<h2 class="@">サービスのご案内</h2>`,`@ { margin: 0; padding: 8px 0 8px 16px; border-left: 4px solid #327f91; color: #253e4b; font: 700 1.45rem/1.45 system-ui, sans-serif; }`,["線","見出し"]);
  add("heading","下線で整える見出し",["シンプル","ビジネス"],"見出しの下に余白と線を置き、読みやすく区切ります。",`<h2 class="@">お知らせ</h2>`,`@ { margin: 0; padding: 0 0 12px; border-bottom: 2px solid #bfd5dc; color: #25495b; font: 700 1.5rem/1.4 system-ui, sans-serif; }`,["下線","見出し"]);
  add("heading","淡い帯の見出し",["やさしい","かわいい"],"淡い背景色を敷いた、やわらかな印象の見出しです。",`<h2 class="@">今日のおすすめ</h2>`,`@ { margin: 0; padding: 14px 20px; border-radius: 8px; background: #fce9ed; color: #8c4a5f; font: 700 1.45rem/1.4 system-ui, sans-serif; }`,["ピンク","角丸","帯"]);
  add("heading","小さな番号付き見出し",["モダン","ビジネス"],"番号を添えて、手順や連続する項目をわかりやすく示します。",`<h2 class="@"><span class="@__number">01</span> はじめに</h2>`,`@ { display: flex; align-items: center; gap: 12px; margin: 0; color: #203c4b; font: 700 1.45rem/1.4 system-ui, sans-serif; }
@__number { display: inline-grid; place-items: center; min-width: 42px; height: 42px; border-radius: 50%; background: #dceef0; color: #245d68; font: 800 1rem system-ui, sans-serif; }`,["数字","丸"]);
  add("heading","短いアクセント下線",["モダン","シンプル"],"文字の下に短い色線を置き、すっきりと強調します。",`<h2 class="@">私たちについて</h2>`,`@ { width: fit-content; margin: 0; padding-bottom: 12px; background: linear-gradient(#db815c, #db815c) left bottom / 56px 4px no-repeat; color: #293c45; font: 700 1.5rem/1.4 system-ui, sans-serif; }`,["オレンジ","線"]);
  add("heading","中央配置の章見出し",["落ち着いた","シンプル"],"中央揃えと上下の細い線で、章の始まりを示します。",`<h2 class="@">季節のお便り</h2>`,`@ { margin: 0; padding: 15px 22px; border-top: 1px solid #b5c5bd; border-bottom: 1px solid #b5c5bd; color: #405b4b; text-align: center; letter-spacing: .08em; font: 700 1.45rem/1.5 system-ui, sans-serif; }`,["グリーン","中央"]);
  add("heading","左右の線ではさむ見出し",["モダン","落ち着いた"],"見出しの左右に線を伸ばし、内容を中央に集めます。",`<h2 class="@">新着情報</h2>`,`@ { display: flex; align-items: center; gap: 16px; width: 100%; margin: 0; color: #344656; text-align: center; white-space: nowrap; font: 700 1.3rem/1.4 system-ui, sans-serif; }
@::before, @::after { content: ""; flex: 1; height: 1px; background: #a9b9c8; }`,["線","中央"]);
  add("heading","角を切り取った見出し",["モダン","ビジネス"],"右上の角に変化を付けた、案内ページ向けの見出しです。",`<h2 class="@">ご利用の流れ</h2>`,`@ { margin: 0; padding: 14px 20px; background: #264e68; color: #fff; clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 0 100%); font: 700 1.45rem/1.4 system-ui, sans-serif; }`,["ブルー","切り欠き"]);
  add("heading","二色の角ライン見出し",["かわいい","やさしい"],"左上の短い二色ラインが目を引く見出しです。",`<h2 class="@">イベント情報</h2>`,`@ { margin: 0; padding: 15px 18px; border-left: 6px solid #e989a0; border-top: 3px solid #f1c77a; border-radius: 3px 9px 9px 3px; background: #fff8f9; color: #704959; font: 700 1.45rem/1.4 system-ui, sans-serif; }`,["ピンク","角丸"]);

  // 文字・テキスト装飾
  add("text","マーカー風の強調",["シンプル","やさしい"],"重要な言葉の下半分に色を付けます。本文の一部を強調できます。",`<p class="@">ここが<span class="@__mark">大切なポイント</span>です。</p>`,`@ { margin: 0; color: #374a52; font: 1.1rem/1.8 system-ui, sans-serif; }
@__mark { font-weight: 700; background: linear-gradient(transparent 58%, #ffe2a0 58%); }`,["黄色","マーカー"]);
  add("text","小さな英字ラベル",["モダン","ビジネス"],"英字を小さなラベルとして添え、情報にリズムを付けます。",`<p class="@"><span class="@__label">NEW</span> 新しい講座が始まります</p>`,`@ { display: flex; align-items: center; gap: 10px; margin: 0; color: #314655; font: 1rem/1.6 system-ui, sans-serif; }
@__label { display: inline-block; padding: 3px 8px; border-radius: 3px; background: #e2f0f3; color: #236d7b; font: 800 .72rem/1.4 system-ui, sans-serif; letter-spacing: .1em; }`,["ラベル","ブルー"]);
  add("text","引用文のアクセント",["落ち着いた","シンプル"],"左線と斜体で引用文を本文から区別します。",`<blockquote class="@">小さな工夫が、毎日の使いやすさをつくります。</blockquote>`,`@ { margin: 0; padding: 12px 0 12px 20px; border-left: 3px solid #91a99c; color: #4b6055; font: italic 1.15rem/1.8 Georgia, "Yu Mincho", serif; }`,["引用","グリーン"]);
  add("text","大きな数字の実績表示",["ビジネス","モダン"],"数字を主役にして、実績や件数を見せるときに使います。",`<p class="@"><strong>120</strong><span>件の制作実績</span></p>`,`@ { display: flex; align-items: baseline; gap: 12px; margin: 0; color: #2b4757; font-family: system-ui, sans-serif; }
@ strong { color: #2c8290; font-size: clamp(2.6rem, 7vw, 4rem); line-height: 1; font-weight: 800; }
@ span { font-size: 1rem; font-weight: 700; }`,["数字","実績"]);
  add("text","文字間を広げた短文",["落ち着いた","モダン"],"文字間を広めに取り、短いメッセージを上品に見せます。",`<p class="@">暮らしを、もっと心地よく。</p>`,`@ { margin: 0; color: #4a5a53; font: 600 1.22rem/1.8 system-ui, sans-serif; letter-spacing: .18em; }`,["文字間","グリーン"]);
  add("text","丸背景のキーワード",["かわいい","やさしい"],"単語の後ろに丸みのある背景を敷き、やさしく目立たせます。",`<p class="@">おすすめは <span class="@__word">手づくり</span> です。</p>`,`@ { margin: 0; color: #57495a; font: 1.1rem/1.8 system-ui, sans-serif; }
@__word { padding: 3px 12px; border-radius: 999px; background: #f9dfe8; color: #8e4565; font-weight: 700; }`,["ピンク","角丸"]);
  add("text","縦線付きの補足文",["ビジネス","シンプル"],"本文より小さな文字と線で、補足情報を整理します。",`<p class="@">受付時間は平日9時から17時までです。</p>`,`@ { margin: 0; padding-left: 13px; border-left: 2px solid #b5c3ca; color: #60727b; font: .94rem/1.7 system-ui, sans-serif; }`,["補足","グレー"]);
  add("text","淡い影のタイトル文字",["モダン","かわいい"],"文字の後ろにごく淡い影を付けた短いタイトル向けです。",`<p class="@">Fresh Ideas</p>`,`@ { margin: 0; color: #43889a; text-shadow: 2px 3px 0 #d9edf1; letter-spacing: .04em; font: 800 clamp(1.6rem, 5vw, 2.4rem)/1.3 system-ui, sans-serif; }`,["影","ブルー"]);

  // ボタン
  add("button","基本の青いボタン",["シンプル","ビジネス"],"リンク先へ進むための、読みやすい定番のボタンです。",`<a class="@" href="#">詳細を見る</a>`,`@ { display: inline-block; padding: 12px 23px; border-radius: 6px; background: #286d86; color: #fff; text-decoration: none; font: 700 1rem/1.4 system-ui, sans-serif; }
@:hover, @:focus-visible { background: #1c5166; }`,["ブルー"]);
  add("button","輪郭だけのボタン",["シンプル","落ち着いた"],"背景を塗らずに枠線で示す、控えめな案内ボタンです。",`<a class="@" href="#">もっと見る</a>`,`@ { display: inline-block; padding: 11px 22px; border: 2px solid #426a60; border-radius: 6px; color: #426a60; text-decoration: none; font: 700 1rem/1.4 system-ui, sans-serif; }
@:hover, @:focus-visible { background: #e9f2ed; }`,["グリーン","枠"]);
  add("button","丸いピンクのボタン",["かわいい","やさしい"],"大きな角丸で、親しみやすい印象を作ります。",`<a class="@" href="#">申し込む</a>`,`@ { display: inline-block; padding: 12px 28px; border-radius: 999px; background: #e784a2; color: #fff; text-decoration: none; font: 700 1rem/1.4 system-ui, sans-serif; }
@:hover, @:focus-visible { background: #cf6485; }`,["ピンク","角丸"]);
  add("button","右矢印付きボタン",["ビジネス","モダン"],"矢印で進む方向を示す、案内ページ向けのボタンです。",`<a class="@" href="#">サービス一覧 <span aria-hidden="true">→</span></a>`,`@ { display: inline-flex; align-items: center; justify-content: space-between; gap: 28px; padding: 12px 17px; border-radius: 5px; background: #293e56; color: #fff; text-decoration: none; font: 700 1rem/1.4 system-ui, sans-serif; }
@ span { font-size: 1.3em; transition: transform .2s; }
@:hover span, @:focus-visible span { transform: translateX(4px); }`,["矢印","ブルー"]);
  add("button","やわらかな影のボタン",["やさしい","かわいい"],"淡い色と影で、押せそうな形をわかりやすく見せます。",`<a class="@" href="#">予約する</a>`,`@ { display: inline-block; padding: 12px 25px; border-radius: 10px; background: #a2c8b6; box-shadow: 0 5px 0 #739e8a; color: #193d2f; text-decoration: none; font: 700 1rem/1.4 system-ui, sans-serif; }
@:hover, @:focus-visible { transform: translateY(2px); box-shadow: 0 3px 0 #739e8a; }`,["影","グリーン"]);
  add("button","二色グラデーションボタン",["モダン","かわいい"],"二色をなめらかにつないだ、短い行動を促すボタンです。",`<a class="@" href="#">はじめる</a>`,`@ { display: inline-block; padding: 12px 26px; border-radius: 8px; background: linear-gradient(110deg, #ed8d79, #dc6b95); color: #fff; text-decoration: none; font: 700 1rem/1.4 system-ui, sans-serif; }
@:hover, @:focus-visible { filter: brightness(.91); }`,["ピンク","オレンジ","グラデーション"]);
  add("button","下線が伸びるテキストボタン",["落ち着いた","シンプル"],"背景を使わず、下線の変化で操作できることを示します。",`<a class="@" href="#">内容を読む →</a>`,`@ { display: inline-block; padding: 6px 0; background: linear-gradient(#52775e, #52775e) left bottom / 38px 2px no-repeat; color: #31503b; text-decoration: none; font: 700 1rem/1.4 system-ui, sans-serif; transition: background-size .2s; }
@:hover, @:focus-visible { background-size: 100% 2px; }`,["下線","グリーン"]);
  add("button","角を切ったオレンジボタン",["モダン","ビジネス"],"片側の角を切り、すっきりした動きを出します。",`<a class="@" href="#">資料を見る</a>`,`@ { display: inline-block; padding: 12px 27px; background: #d87745; clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%); color: #fff; text-decoration: none; font: 700 1rem/1.4 system-ui, sans-serif; }
@:hover, @:focus-visible { background: #b35d32; }`,["オレンジ","切り欠き"]);
  add("button","細枠と淡色のボタン",["やさしい","シンプル"],"薄い背景と細い枠を組み合わせた、控えめなボタンです。",`<a class="@" href="#">お問い合わせ</a>`,`@ { display: inline-block; padding: 11px 22px; border: 1px solid #a8bed0; border-radius: 9px; background: #f0f6fa; color: #3a607b; text-decoration: none; font: 700 1rem/1.4 system-ui, sans-serif; }
@:hover, @:focus-visible { background: #e1eef6; }`,["角丸","ブルー"]);

  // ボックス・囲み枠
  add("box","細枠の案内ボックス",["シンプル","ビジネス"],"大切な案内を、細い枠線で本文から区別します。",`<div class="@">受付は毎週月曜日から金曜日までです。</div>`,`@ { padding: 19px 22px; border: 1px solid #b9cbd2; border-radius: 6px; background: #fff; color: #344b56; font: 1rem/1.7 system-ui, sans-serif; }`,["枠","グレー"]);
  add("box","左に色帯のあるボックス",["ビジネス","モダン"],"左側に色を置き、連絡事項をわかりやすく示します。",`<div class="@">提出期限は月末です。余裕をもって準備しましょう。</div>`,`@ { padding: 18px 21px; border-left: 6px solid #3d8fa0; background: #edf6f8; color: #2b4b56; font: 1rem/1.7 system-ui, sans-serif; }`,["ブルー","帯"]);
  add("box","やさしいピンクのメモ",["かわいい","やさしい"],"柔らかな色の背景と角丸で、補足メモを目立たせます。",`<div class="@">メモ：持ち物を確認してからお越しください。</div>`,`@ { padding: 20px 23px; border-radius: 16px; background: #fceef2; color: #795466; font: 1rem/1.7 system-ui, sans-serif; }`,["ピンク","角丸"]);
  add("box","破線のヒントボックス",["やさしい","シンプル"],"破線の枠で、練習のヒントを気軽に囲みます。",`<div class="@">ヒント：先に見出しを決めると書きやすくなります。</div>`,`@ { padding: 18px 22px; border: 2px dashed #94b7a2; border-radius: 9px; background: #f8fcf8; color: #3d5b47; font: 1rem/1.7 system-ui, sans-serif; }`,["グリーン","破線"]);
  add("box","小見出し付き情報ボックス",["ビジネス","落ち着いた"],"タイトルと本文をひとつの枠にまとめます。",`<div class="@"><strong class="@__title">営業時間</strong><p>平日 9:00〜17:00<br>土日祝日はお休みです。</p></div>`,`@ { padding: 0 20px 17px; border: 1px solid #c6d5ce; border-radius: 7px; background: #fff; color: #3d5349; font: 1rem/1.65 system-ui, sans-serif; }
@__title { display: block; margin: 0 -20px 14px; padding: 10px 20px; border-radius: 6px 6px 0 0; background: #e6f0e9; color: #305640; }
@ p { margin: 0; }`,["グリーン","見出し"]);
  add("box","浮かせた白いカード枠",["モダン","シンプル"],"影で背景から少し浮かせ、情報のまとまりを作ります。",`<div class="@">新しい講座の申込受付を開始しました。</div>`,`@ { padding: 22px 25px; border: 1px solid #e4ebee; border-radius: 12px; background: #fff; box-shadow: 0 10px 26px rgba(30, 59, 75, .12); color: #344b57; font: 1rem/1.7 system-ui, sans-serif; }`,["影","角丸"]);
  add("box","角だけを強調した囲み",["モダン","落ち着いた"],"左上と右下の角線だけを見せ、軽い囲みを作ります。",`<div class="@">季節ごとのおすすめを紹介しています。</div>`,`@ { padding: 21px 25px; border-top: 3px solid #c58968; border-left: 3px solid #c58968; border-right: 3px solid #e7d6c9; border-bottom: 3px solid #e7d6c9; color: #615047; font: 1rem/1.7 system-ui, sans-serif; }`,["オレンジ","角"]);
  add("box","グラデーション枠のメッセージ",["モダン","かわいい"],"外枠だけに色の変化を付け、本文は白く保ちます。",`<div class="@"><div class="@__inner">新しいアイデアを一緒に形にしましょう。</div></div>`,`@ { padding: 3px; border-radius: 13px; background: linear-gradient(120deg, #efb1bc, #91c8cc); color: #3e5260; font: 1rem/1.7 system-ui, sans-serif; }
@__inner { padding: 17px 21px; border-radius: 10px; background: #fff; }`,["グラデーション","枠"]);

  // リスト
  add("list","細い区切り線のリスト",["シンプル","ビジネス"],"各項目を細い線で分け、情報を読みやすく並べます。",`<ul class="@"><li>講座の概要</li><li>受講の流れ</li><li>よくある質問</li></ul>`,`@ { width: min(100%, 480px); margin: 0; padding: 0; list-style: none; color: #344b56; font: 1rem/1.5 system-ui, sans-serif; }
@ li { padding: 11px 5px; border-bottom: 1px solid #d9e4e8; }`,["線"]);
  add("list","丸印のやさしいリスト",["かわいい","やさしい"],"小さな色付きの丸で項目をやさしく示します。",`<ul class="@"><li>手軽に始められる</li><li>自分のペースで学べる</li><li>作品づくりに役立つ</li></ul>`,`@ { margin: 0; padding: 0; list-style: none; color: #5b5360; font: 1rem/1.7 system-ui, sans-serif; }
@ li { position: relative; padding: 4px 0 4px 23px; }
@ li::before { content: ""; position: absolute; left: 2px; top: 15px; width: 9px; height: 9px; border-radius: 50%; background: #e68ba7; }`,["ピンク","丸"]);
  add("list","番号を囲んだ手順リスト",["ビジネス","モダン"],"番号を目立たせて、順番のある作業を示します。",`<ol class="@"><li>内容を選ぶ</li><li>情報を入力する</li><li>完成を確認する</li></ol>`,`@ { counter-reset: step; margin: 0; padding: 0; list-style: none; color: #344d5c; font: 1rem/1.7 system-ui, sans-serif; }
@ li { counter-increment: step; display: flex; align-items: center; gap: 12px; padding: 6px 0; }
@ li::before { content: counter(step); display: grid; place-items: center; flex: 0 0 30px; height: 30px; border-radius: 50%; background: #dcecf2; color: #2d687d; font-weight: 800; }`,["数字","ブルー"]);
  add("list","チェック印のポイント",["やさしい","ビジネス"],"項目の先頭にチェック印を付け、特徴をまとめます。",`<ul class="@"><li>スマートフォンに対応</li><li>読みやすい文字サイズ</li><li>色の変更もかんたん</li></ul>`,`@ { margin: 0; padding: 0; list-style: none; color: #385147; font: 1rem/1.7 system-ui, sans-serif; }
@ li { position: relative; padding: 5px 0 5px 28px; }
@ li::before { content: "✓"; position: absolute; left: 0; color: #318267; font-weight: 900; }`,["チェック","グリーン"]);
  add("list","淡い背景の交互リスト",["シンプル","落ち着いた"],"一行おきに背景を変えて、横に長い項目を追いやすくします。",`<ul class="@"><li>月曜日：基礎を学ぶ</li><li>水曜日：実例を試す</li><li>金曜日：作品をまとめる</li></ul>`,`@ { width: min(100%, 500px); margin: 0; padding: 0; list-style: none; color: #43574b; font: 1rem/1.6 system-ui, sans-serif; }
@ li { padding: 10px 14px; }
@ li:nth-child(odd) { background: #eef5ef; }`,["交互","グリーン"]);
  add("list","二列のキーワードリスト",["モダン","ビジネス"],"短い項目を二列に並べ、スペースを有効に使います。",`<ul class="@"><li>企画</li><li>制作</li><li>運用</li><li>相談</li></ul>`,`@ { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; width: min(100%, 430px); margin: 0; padding: 0; list-style: none; color: #325068; font: 700 1rem/1.5 system-ui, sans-serif; }
@ li { padding: 12px 15px; border-left: 3px solid #6996ae; background: #f0f6f9; }`,["二列","ブルー"]);
  add("list","左に縦線を通す工程リスト",["モダン","落ち着いた"],"項目を縦の線でつなぎ、流れを視覚的に示します。",`<ol class="@"><li>準備する</li><li>組み立てる</li><li>仕上げる</li></ol>`,`@ { margin: 0; padding: 0 0 0 18px; list-style: none; border-left: 2px solid #b6cbbf; color: #435c4c; font: 1rem/1.6 system-ui, sans-serif; }
@ li { position: relative; padding: 4px 0 14px 19px; }
@ li:last-child { padding-bottom: 4px; }
@ li::before { content: ""; position: absolute; left: -25px; top: 10px; width: 10px; height: 10px; border-radius: 50%; background: #5d9476; box-shadow: 0 0 0 3px #fff; }`,["工程","線"]);
  add("list","角丸のタグリスト",["かわいい","やさしい"],"短い言葉をタグのように並べるリストです。",`<ul class="@"><li>デザイン</li><li>写真</li><li>文章</li></ul>`,`@ { display: flex; flex-wrap: wrap; gap: 8px; margin: 0; padding: 0; list-style: none; color: #775764; font: 700 .95rem/1.4 system-ui, sans-serif; }
@ li { padding: 7px 13px; border-radius: 999px; background: #f8e8ee; }`,["ピンク","角丸"]);

  // リンク
  add("link","定番の下線リンク",["シンプル","ビジネス"],"下線でリンクとわかりやすく示す基本形です。",`<a class="@" href="#">詳しい内容はこちら</a>`,`@ { color: #236e98; text-decoration: underline; text-underline-offset: 4px; font: 600 1rem/1.5 system-ui, sans-serif; }
@:hover, @:focus-visible { color: #164b6b; text-decoration-thickness: 2px; }`,["下線","ブルー"]);
  add("link","右矢印の案内リンク",["ビジネス","モダン"],"文字の右に矢印を置き、次のページへの移動を示します。",`<a class="@" href="#">サービス詳細 <span aria-hidden="true">→</span></a>`,`@ { display: inline-flex; align-items: center; gap: 9px; color: #2a6472; text-decoration: none; font: 700 1rem/1.5 system-ui, sans-serif; }
@ span { transition: transform .2s; }
@:hover span, @:focus-visible span { transform: translateX(4px); }
@:hover, @:focus-visible { text-decoration: underline; text-underline-offset: 4px; }`,["矢印"]);
  add("link","色帯で浮かぶリンク",["かわいい","やさしい"],"背景に淡い色を入れ、文章中でも見つけやすくします。",`<a class="@" href="#">イベントの案内を見る</a>`,`@ { padding: 2px 5px; background: linear-gradient(transparent 45%, #fbd4db 45%); color: #854c5f; text-decoration: none; font: 700 1rem/1.5 system-ui, sans-serif; }
@:hover, @:focus-visible { background: #fbd4db; }`,["ピンク","マーカー"]);
  add("link","短い線が伸びるリンク",["モダン","落ち着いた"],"下線の長さが変わる、控えめな動きのリンクです。",`<a class="@" href="#">制作事例を見る</a>`,`@ { display: inline-block; padding-bottom: 5px; background: linear-gradient(#587e64, #587e64) left bottom / 25% 2px no-repeat; color: #355a42; text-decoration: none; font: 700 1rem/1.5 system-ui, sans-serif; transition: background-size .2s; }
@:hover, @:focus-visible { background-size: 100% 2px; }`,["下線","グリーン"]);
  add("link","外部ページを示すリンク",["シンプル","ビジネス"],"小さな記号を添え、別サイトへのリンクに使います。",`<a class="@" href="https://example.com/">関連サイト <span aria-hidden="true">↗</span></a>`,`@ { display: inline-flex; align-items: baseline; gap: 4px; color: #2e637d; text-decoration: underline; text-underline-offset: 3px; font: 600 1rem/1.5 system-ui, sans-serif; }
@ span { font-size: .9em; }
@:hover, @:focus-visible { color: #1a4257; }`,["外部","矢印"]);
  add("link","細枠の小さなリンク",["落ち着いた","やさしい"],"ボタンより控えめに、行き先を枠で示します。",`<a class="@" href="#">作品一覧へ</a>`,`@ { display: inline-block; padding: 7px 12px; border: 1px solid #a8b8aa; border-radius: 4px; color: #47624c; text-decoration: none; font: 600 .95rem/1.4 system-ui, sans-serif; }
@:hover, @:focus-visible { background: #edf3ed; }`,["枠","グリーン"]);
  add("link","丸い矢印アイコンのリンク",["モダン","ビジネス"],"文字の手前に丸い矢印を置き、一覧で目立たせます。",`<a class="@" href="#"><span aria-hidden="true">›</span> よくある質問</a>`,`@ { display: inline-flex; align-items: center; gap: 9px; color: #2d556e; text-decoration: none; font: 700 1rem/1.4 system-ui, sans-serif; }
@ span { display: grid; place-items: center; width: 22px; height: 22px; border-radius: 50%; background: #dbeaf2; font-size: 1.25rem; line-height: 1; }
@:hover, @:focus-visible { text-decoration: underline; }`,["丸","矢印"]);
  add("link","区切り点のあるパンくずリンク",["シンプル","落ち着いた"],"階層の途中を示す、パンくず用の小さなリンクです。",`<a class="@" href="#">ホーム <span aria-hidden="true">/</span> お知らせ</a>`,`@ { color: #526572; text-decoration: none; font: .94rem/1.5 system-ui, sans-serif; }
@ span { margin: 0 8px; color: #9baeb6; }
@:hover, @:focus-visible { text-decoration: underline; }`,["パンくず","グレー"]);

  // テーブル: narrow screens scroll within each independent table wrapper.
  const table = (rows = ["基礎講座", "実践講座"]) => `<div class="@"><table><thead><tr><th scope="col">講座</th><th scope="col">時間</th><th scope="col">料金</th></tr></thead><tbody><tr><th scope="row">${rows[0]}</th><td>90分</td><td>無料</td></tr><tr><th scope="row">${rows[1]}</th><td>120分</td><td>2,000円</td></tr></tbody></table></div>`;
  add("table","罫線をそろえた基本表",["シンプル","ビジネス"],"セルを線で区切る、内容を比較しやすい基本形です。",table(),`@ { max-width: 100%; overflow-x: auto; color: #344b56; font: .95rem/1.5 system-ui, sans-serif; }
@ table { width: 100%; min-width: 370px; border-collapse: collapse; }
@ th, @ td { padding: 11px 14px; border: 1px solid #c7d6dc; text-align: left; }
@ thead { background: #e9f2f5; }`,["罫線"]);
  add("table","横線だけのすっきり表",["シンプル","落ち着いた"],"横線だけで行を分け、軽い印象にします。",table(),`@ { max-width: 100%; overflow-x: auto; color: #3e5548; font: .95rem/1.5 system-ui, sans-serif; }
@ table { width: 100%; min-width: 370px; border-collapse: collapse; }
@ th, @ td { padding: 13px 15px; border-bottom: 1px solid #c9d8ce; text-align: left; }
@ thead th { border-bottom: 2px solid #638b6b; color: #365c3d; }`,["横線","グリーン"]);
  add("table","行を交互に色分けした表",["ビジネス","やさしい"],"一行おきに色を変え、目で追いやすくします。",table(),`@ { max-width: 100%; overflow-x: auto; color: #385263; font: .95rem/1.5 system-ui, sans-serif; }
@ table { width: 100%; min-width: 370px; border-collapse: collapse; }
@ th, @ td { padding: 11px 14px; text-align: left; }
@ thead { background: #34738b; color: #fff; }
@ tbody tr:nth-child(even) { background: #eaf4f7; }`,["交互","ブルー"]);
  add("table","左の項目を強調した表",["ビジネス","シンプル"],"各行の左端を淡い背景で示し、項目名を見つけやすくします。",table(),`@ { max-width: 100%; overflow-x: auto; color: #3a4b57; font: .95rem/1.5 system-ui, sans-serif; }
@ table { width: 100%; min-width: 370px; border-collapse: collapse; }
@ th, @ td { padding: 11px 13px; border-bottom: 1px solid #d7e0e4; text-align: left; }
@ tbody th { background: #edf3f6; color: #2b5a70; }
@ thead th { color: #4b6573; }`,["項目","グレー"]);
  add("table","角丸のカード型テーブル",["モダン","やさしい"],"表全体を角丸の枠で包み、カードのように見せます。",table(),`@ { max-width: 100%; overflow-x: auto; border: 1px solid #d8e3e5; border-radius: 12px; color: #38515b; font: .95rem/1.5 system-ui, sans-serif; }
@ table { width: 100%; min-width: 370px; border-collapse: collapse; }
@ th, @ td { padding: 12px 14px; border-bottom: 1px solid #e2eaeb; text-align: left; }
@ tbody tr:last-child th, @ tbody tr:last-child td { border-bottom: 0; }
@ thead { background: #e7f2f1; }`,["角丸","枠"]);
  add("table","料金を目立たせる表",["ビジネス","モダン"],"右端の金額を太字にして、比較しやすくします。",table(),`@ { max-width: 100%; overflow-x: auto; color: #354a55; font: .95rem/1.5 system-ui, sans-serif; }
@ table { width: 100%; min-width: 370px; border-collapse: collapse; }
@ th, @ td { padding: 12px 14px; border-bottom: 1px solid #ccdbe0; text-align: left; }
@ thead { background: #263f50; color: #fff; }
@ tbody td:last-child { color: #b85e36; font-weight: 800; }`,["料金","オレンジ"]);
  add("table","淡いピンクの予定表",["かわいい","やさしい"],"見出し行に淡い色を使い、柔らかく予定を整理します。",table(["午前の部","午後の部"]),`@ { max-width: 100%; overflow-x: auto; color: #64515d; font: .95rem/1.5 system-ui, sans-serif; }
@ table { width: 100%; min-width: 370px; border-collapse: separate; border-spacing: 0 5px; }
@ th, @ td { padding: 10px 13px; text-align: left; }
@ thead th { background: #f5dce5; color: #815268; }
@ tbody tr { background: #fff4f7; }`,["ピンク","予定"]);
  add("table","左端に細線のある表",["落ち着いた","モダン"],"各行の先頭に細い線を引き、情報のまとまりを示します。",table(),`@ { max-width: 100%; overflow-x: auto; color: #4a5c4d; font: .95rem/1.5 system-ui, sans-serif; }
@ table { width: 100%; min-width: 370px; border-collapse: separate; border-spacing: 0 6px; }
@ th, @ td { padding: 9px 13px; text-align: left; }
@ thead th { border-bottom: 2px solid #839e85; }
@ tbody tr { background: #f0f5ef; }
@ tbody th { border-left: 4px solid #6b9773; }`,["グリーン","線"]);

  // 画像の装飾: inline SVG is intentionally self-contained for copying.
  const art = `<svg class="@__image" viewBox="0 0 320 190" role="img" aria-label="山と太陽のイラスト" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="190" fill="#d9edf2"/><circle cx="246" cy="47" r="24" fill="#f4d38b"/><path d="M0 160 85 68l77 91 49-58 109 89H0" fill="#92b7a6"/><path d="M0 176 100 112l87 78H0" fill="#5e917d"/></svg>`;
  const fig = `<figure class="@">${art}<figcaption>山の風景</figcaption></figure>`;
  add("image","角丸の風景画像",["シンプル","やさしい"],"画像の角を丸め、ページになじみやすくします。",fig,`@ { width: min(100%, 320px); margin: 0; color: #556b70; font: .9rem/1.5 system-ui, sans-serif; }
@__image { display: block; width: 100%; height: auto; border-radius: 14px; }
@ figcaption { margin-top: 8px; }`,["画像","角丸"]);
  add("image","丸く切り抜く画像",["かわいい","やさしい"],"正方形の画像を丸く見せたいときに使う形です。",fig,`@ { width: 185px; margin: 0; text-align: center; color: #606a5a; font: .9rem/1.5 system-ui, sans-serif; }
@__image { display: block; width: 180px; height: 180px; margin: auto; border-radius: 50%; object-fit: cover; }
@ figcaption { margin-top: 8px; }`,["画像","丸"]);
  add("image","白い写真フレーム",["落ち着いた","シンプル"],"白い縁と影を付け、写真のように見せます。",fig,`@ { width: min(100%, 320px); margin: 0; padding: 9px 9px 12px; background: #fff; box-shadow: 0 8px 26px #243f4b30; color: #5b6063; text-align: center; font: .9rem/1.5 system-ui, sans-serif; }
@__image { display: block; width: 100%; height: auto; }
@ figcaption { margin-top: 9px; }`,["画像","影","枠"]);
  add("image","淡い色の二重枠",["かわいい","やさしい"],"画像の周囲に二本の色枠を付けます。",fig,`@ { width: min(100%, 320px); margin: 0; padding: 7px; border: 2px solid #e7a7b7; outline: 2px solid #f7dce3; outline-offset: 4px; color: #8a5967; font: .9rem/1.5 system-ui, sans-serif; }
@__image { display: block; width: 100%; height: auto; }
@ figcaption { margin-top: 7px; text-align: center; }`,["画像","ピンク","枠"]);
  add("image","下にずらした背景画像",["モダン","ビジネス"],"背景色を少しずらして、画像に奥行きを出します。",fig,`@ { width: min(100%, 320px); margin: 0; padding: 0 12px 12px 0; background: linear-gradient(#b7d7db, #b7d7db) right bottom / calc(100% - 12px) calc(100% - 12px) no-repeat; color: #4c6770; font: .9rem/1.5 system-ui, sans-serif; }
@__image { display: block; width: 100%; height: auto; }
@ figcaption { padding-top: 8px; text-align: center; }`,["画像","ブルー"]);
  add("image","斜め角の画像",["モダン","落ち着いた"],"角を少し切り落として、印象に変化を付けます。",fig,`@ { width: min(100%, 320px); margin: 0; color: #52665a; font: .9rem/1.5 system-ui, sans-serif; }
@__image { display: block; width: 100%; height: auto; clip-path: polygon(0 0, calc(100% - 26px) 0, 100% 26px, 100% 100%, 26px 100%, 0 calc(100% - 26px)); }
@ figcaption { margin-top: 8px; }`,["画像","切り欠き"]);
  add("image","下線付きキャプション画像",["ビジネス","シンプル"],"説明文の下に線を引き、画像と情報をまとめます。",fig,`@ { width: min(100%, 320px); margin: 0; color: #3e5868; font: .95rem/1.5 system-ui, sans-serif; }
@__image { display: block; width: 100%; height: auto; }
@ figcaption { padding: 10px 0; border-bottom: 2px solid #5b8aa0; font-weight: 700; }`,["画像","下線"]);
  add("image","ホバーで明るくなる画像",["モダン","やさしい"],"マウスを重ねると少し明るくなり、画像に反応を付けます。",fig,`@ { width: min(100%, 320px); margin: 0; color: #526b61; font: .9rem/1.5 system-ui, sans-serif; }
@__image { display: block; width: 100%; height: auto; border-radius: 8px; filter: brightness(.92); transition: filter .2s; }
@:hover @__image { filter: brightness(1.08); }
@ figcaption { margin-top: 8px; }`,["画像","ホバー"]);

  // カードデザイン
  const cardHtml = `<article class="@"><h3>はじめてのWeb制作</h3><p>基本から少しずつ学べる講座です。</p><a href="#">内容を見る →</a></article>`;
  add("card","細枠の基本カード",["シンプル","ビジネス"],"見出し・本文・リンクをひとまとめにする基本のカードです。",cardHtml,`@ { width: min(100%, 340px); padding: 22px; border: 1px solid #d2e0e4; border-radius: 8px; background: #fff; color: #3c5260; font: 1rem/1.65 system-ui, sans-serif; }
@ h3 { margin: 0 0 8px; color: #254a5b; font-size: 1.2rem; }
@ p { margin: 0 0 14px; }
@ a { color: #266f87; font-weight: 700; }`,["枠","角丸"]);
  add("card","上に色帯のあるカード",["ビジネス","モダン"],"上端の色帯で、並んだカードに統一感を出します。",cardHtml,`@ { width: min(100%, 340px); padding: 23px; border-top: 6px solid #45879b; background: #f3f8fa; color: #405662; font: 1rem/1.65 system-ui, sans-serif; }
@ h3 { margin: 0 0 8px; color: #25566a; font-size: 1.2rem; }
@ p { margin: 0 0 14px; }
@ a { color: #2b6b7c; font-weight: 700; }`,["ブルー","帯"]);
  add("card","影で浮かぶ白いカード",["モダン","シンプル"],"薄い影でカードの範囲を見せます。",cardHtml,`@ { width: min(100%, 340px); padding: 23px; border-radius: 13px; background: #fff; box-shadow: 0 12px 28px #294a5b26; color: #40535e; font: 1rem/1.65 system-ui, sans-serif; }
@ h3 { margin: 0 0 8px; color: #233f50; font-size: 1.2rem; }
@ p { margin: 0 0 14px; }
@ a { color: #2f758a; font-weight: 700; }`,["影","角丸"]);
  add("card","淡いピンクの案内カード",["かわいい","やさしい"],"やさしい背景色で、イベントなどの案内を目立たせます。",cardHtml,`@ { width: min(100%, 340px); padding: 24px; border-radius: 17px; background: #fff0f4; color: #705662; font: 1rem/1.65 system-ui, sans-serif; }
@ h3 { margin: 0 0 8px; color: #95536c; font-size: 1.2rem; }
@ p { margin: 0 0 14px; }
@ a { color: #a04d6d; font-weight: 700; }`,["ピンク","角丸"]);
  add("card","番号付きステップカード",["ビジネス","モダン"],"番号を上に置き、手順を一枚ずつ示すカードです。",`<article class="@"><span class="@__number">STEP 01</span><h3>準備をする</h3><p>必要な資料をそろえましょう。</p></article>`,`@ { width: min(100%, 340px); padding: 24px; border: 1px solid #cadce2; border-radius: 8px; background: #fff; color: #475c66; font: 1rem/1.65 system-ui, sans-serif; }
@__number { color: #2b7b91; font-size: .78rem; font-weight: 800; letter-spacing: .13em; }
@ h3 { margin: 8px 0; color: #29495b; font-size: 1.25rem; }
@ p { margin: 0; }`,["数字","ステップ"]);
  add("card","左に太線のメモカード",["落ち着いた","シンプル"],"左側の太い線で、短い内容をまとめます。",cardHtml,`@ { width: min(100%, 340px); padding: 20px 23px; border-left: 7px solid #7fa287; background: #f3f7f2; color: #4c6050; font: 1rem/1.65 system-ui, sans-serif; }
@ h3 { margin: 0 0 8px; color: #355d3e; font-size: 1.2rem; }
@ p { margin: 0 0 14px; }
@ a { color: #3c7750; font-weight: 700; }`,["グリーン","線"]);
  add("card","料金を示すプランカード",["ビジネス","モダン"],"価格と申込リンクを一枚にまとめるカードです。",`<article class="@"><h3>ベーシック</h3><p class="@__price">月額 1,000円</p><p>基礎から学びたい方向け。</p><a href="#">プランを見る</a></article>`,`@ { width: min(100%, 340px); padding: 23px; border: 2px solid #a9c8d3; border-radius: 10px; background: #fff; color: #425766; font: 1rem/1.6 system-ui, sans-serif; }
@ h3 { margin: 0 0 8px; color: #254e64; font-size: 1.2rem; }
@__price { margin: 0 0 10px; color: #bd663a; font-size: 1.45rem; font-weight: 800; }
@ p { margin-top: 0; }
@ a { display: block; padding: 9px; border-radius: 5px; background: #326f83; color: #fff; text-align: center; text-decoration: none; font-weight: 700; }`,["料金","オレンジ"]);
  add("card","小さなラベル付きカード",["やさしい","かわいい"],"カードの上にラベルを添えて、種類を伝えます。",`<article class="@"><span class="@__label">おすすめ</span><h3>写真の楽しみ方</h3><p>日常の一枚から始めましょう。</p></article>`,`@ { width: min(100%, 340px); padding: 22px; border-radius: 12px; background: #f1f7f4; color: #4b6054; font: 1rem/1.65 system-ui, sans-serif; }
@__label { display: inline-block; padding: 4px 10px; border-radius: 999px; background: #cfe8d9; color: #386b50; font-size: .78rem; font-weight: 800; }
@ h3 { margin: 11px 0 7px; color: #315742; font-size: 1.2rem; }
@ p { margin: 0; }`,["ラベル","グリーン"]);

  // ナビゲーションメニュー: links use local # targets as visual examples.
  const navHtml = `<nav class="@" aria-label="サンプルメニュー"><a href="#">ホーム</a><a href="#">サービス</a><a href="#">お問い合わせ</a></nav>`;
  add("nav","横並びの基本メニュー",["シンプル","ビジネス"],"横に並べたリンクで、主なページへ移動できる形です。",navHtml,`@ { display: flex; flex-wrap: wrap; gap: 20px; font: 700 .95rem/1.5 system-ui, sans-serif; }
@ a { color: #2c5869; text-decoration: none; }
@ a:hover, @ a:focus-visible { text-decoration: underline; text-underline-offset: 5px; }`,["横並び"]);
  add("nav","下線で選択を示すメニュー",["ビジネス","モダン"],"現在のページに下線を付けたメニューです。",`<nav class="@" aria-label="サンプルメニュー"><a class="@__current" href="#" aria-current="page">ホーム</a><a href="#">サービス</a><a href="#">お問い合わせ</a></nav>`,`@ { display: flex; flex-wrap: wrap; gap: 14px; border-bottom: 1px solid #cadbe1; font: 700 .95rem/1.5 system-ui, sans-serif; }
@ a { padding: 8px 4px; border-bottom: 3px solid transparent; color: #496675; text-decoration: none; }
@ a:hover, @ a:focus-visible, @__current { border-bottom-color: #347b91; color: #235b6d; }`,["下線"]);
  add("nav","淡い背景のタブメニュー",["やさしい","シンプル"],"項目をタブのように見せ、切り替え先を示します。",navHtml,`@ { display: flex; flex-wrap: wrap; gap: 6px; font: 700 .93rem/1.4 system-ui, sans-serif; }
@ a { padding: 10px 14px; border-radius: 8px 8px 0 0; background: #e9f3f3; color: #35636a; text-decoration: none; }
@ a:hover, @ a:focus-visible { background: #d1e8e8; }`,["タブ","角丸"]);
  add("nav","区切り線のあるメニュー",["落ち着いた","ビジネス"],"項目間の細線で、リンクの区切りをわかりやすくします。",navHtml,`@ { display: flex; flex-wrap: wrap; font: 600 .93rem/1.4 system-ui, sans-serif; }
@ a { padding: 4px 13px; border-right: 1px solid #b6c7bc; color: #3d6147; text-decoration: none; }
@ a:first-child { padding-left: 0; }
@ a:last-child { border-right: 0; }
@ a:hover, @ a:focus-visible { text-decoration: underline; }`,["区切り線","グリーン"]);
  add("nav","丸いピル型メニュー",["かわいい","やさしい"],"丸い項目を並べ、親しみやすい案内にします。",navHtml,`@ { display: flex; flex-wrap: wrap; gap: 8px; font: 700 .9rem/1.4 system-ui, sans-serif; }
@ a { padding: 9px 14px; border-radius: 999px; background: #f9e6ec; color: #90546a; text-decoration: none; }
@ a:hover, @ a:focus-visible { background: #f0ccda; }`,["ピンク","角丸"]);
  add("nav","濃い背景のナビゲーション",["モダン","ビジネス"],"濃い背景に白い文字を置いた、はっきりしたメニューです。",navHtml,`@ { display: flex; flex-wrap: wrap; gap: 4px; padding: 7px; border-radius: 8px; background: #263e50; font: 700 .9rem/1.4 system-ui, sans-serif; }
@ a { padding: 9px 12px; border-radius: 5px; color: #fff; text-decoration: none; }
@ a:hover, @ a:focus-visible { background: #3b657d; }`,["ブルー","濃色"]);
  add("nav","縦並びのサイドメニュー",["ビジネス","シンプル"],"ページ横のメニューに使いやすい縦並びです。",navHtml,`@ { display: grid; width: min(100%, 270px); border: 1px solid #d6e2e6; font: 600 .94rem/1.5 system-ui, sans-serif; }
@ a { padding: 11px 15px; border-bottom: 1px solid #d6e2e6; color: #375867; text-decoration: none; }
@ a:last-child { border-bottom: 0; }
@ a:hover, @ a:focus-visible { background: #edf5f7; }`,["縦","線"]);
  add("nav","番号を添えたメニュー",["モダン","落ち着いた"],"小さな番号を添え、順序のある案内を作ります。",`<nav class="@" aria-label="サンプルメニュー"><a href="#"><small>01</small> ホーム</a><a href="#"><small>02</small> サービス</a><a href="#"><small>03</small> お問い合わせ</a></nav>`,`@ { display: flex; flex-wrap: wrap; gap: 16px; font: 700 .94rem/1.4 system-ui, sans-serif; }
@ a { color: #425c4c; text-decoration: none; }
@ small { margin-right: 5px; color: #9c7755; font-size: .7rem; }
@ a:hover, @ a:focus-visible { text-decoration: underline; text-underline-offset: 4px; }`,["番号","グリーン"]);

  // フォーム: presentation examples; no submission or script is required.
  add("form","細枠の基本入力欄",["シンプル","ビジネス"],"名前などの短い文字を入力する、基本の形です。",`<label class="@">お名前<input type="text" placeholder="山田 花子"></label>`,`@ { display: grid; gap: 7px; width: min(100%, 340px); color: #40545f; font: 700 .95rem/1.5 system-ui, sans-serif; }
@ input { width: 100%; padding: 11px 13px; border: 1px solid #aebfc7; border-radius: 5px; background: #fff; color: #263d49; font: 1rem system-ui, sans-serif; }
@ input:focus { outline: 2px solid #5495a7; outline-offset: 1px; }`,["入力欄","枠"]);
  add("form","下線だけの入力欄",["モダン","シンプル"],"下線で入力位置を示す、すっきりしたデザインです。",`<label class="@">メールアドレス<input type="email" placeholder="name@example.com"></label>`,`@ { display: grid; gap: 6px; width: min(100%, 340px); color: #35546a; font: 700 .95rem/1.5 system-ui, sans-serif; }
@ input { width: 100%; padding: 10px 2px; border: 0; border-bottom: 2px solid #98b6c6; background: transparent; color: #263d49; font: 1rem system-ui, sans-serif; }
@ input:focus { outline: 0; border-bottom-color: #2c7895; }`,["下線","ブルー"]);
  add("form","淡い背景の入力欄",["やさしい","かわいい"],"淡い色を背景に使った、やわらかな入力欄です。",`<label class="@">ニックネーム<input type="text" placeholder="お名前を入力"></label>`,`@ { display: grid; gap: 7px; width: min(100%, 340px); color: #805366; font: 700 .95rem/1.5 system-ui, sans-serif; }
@ input { width: 100%; padding: 12px 14px; border: 1px solid #f0c5d2; border-radius: 10px; background: #fff5f8; color: #59434d; font: 1rem system-ui, sans-serif; }
@ input:focus { outline: 2px solid #de8fa7; outline-offset: 1px; }`,["ピンク","角丸"]);
  add("form","説明を添えた入力欄",["ビジネス","シンプル"],"入力欄の下に短い説明を置き、迷わず入力できます。",`<div class="@"><label for="css-sample-form-phone">電話番号</label><input id="css-sample-form-phone" type="tel" placeholder="090-1234-5678" aria-describedby="css-sample-form-phone-help"><small id="css-sample-form-phone-help">ハイフンを入れて入力してください。</small></div>`,`@ { display: grid; gap: 6px; width: min(100%, 340px); color: #3e5663; font: .95rem/1.5 system-ui, sans-serif; }
@ label { font-weight: 700; }
@ input { width: 100%; padding: 10px 12px; border: 1px solid #b5cbd4; border-radius: 5px; color: #263d49; font: 1rem system-ui, sans-serif; }
@ input:focus { outline: 2px solid #4e8aa0; }
@ small { color: #617681; font-size: .82rem; }`,["説明","入力欄"]);
  add("form","角丸の選択メニュー",["やさしい","落ち着いた"],"候補から一つ選ぶプルダウンの例です。",`<label class="@">希望する時間<select><option>時間を選んでください</option><option>午前</option><option>午後</option></select></label>`,`@ { display: grid; gap: 7px; width: min(100%, 340px); color: #47604c; font: 700 .95rem/1.5 system-ui, sans-serif; }
@ select { width: 100%; padding: 11px 12px; border: 1px solid #a9c1ae; border-radius: 9px; background: #f8fbf8; color: #344d39; font: 1rem system-ui, sans-serif; }
@ select:focus { outline: 2px solid #649574; }`,["選択","グリーン"]);
  add("form","コメント用の入力欄",["シンプル","ビジネス"],"長めの文章を入力するテキストエリアです。",`<label class="@">メッセージ<textarea rows="3" placeholder="こちらに入力してください"></textarea></label>`,`@ { display: grid; gap: 7px; width: min(100%, 380px); color: #3d5663; font: 700 .95rem/1.5 system-ui, sans-serif; }
@ textarea { width: 100%; padding: 12px 13px; border: 1px solid #b4c5cd; border-radius: 6px; background: #fff; color: #263d49; font: 1rem/1.5 system-ui, sans-serif; resize: vertical; }
@ textarea:focus { outline: 2px solid #5d93a8; }`,["文章","入力欄"]);
  add("form","カード型チェック項目",["かわいい","やさしい"],"項目全体を押せる形にして、選びやすくします。",`<label class="@"><input type="checkbox"><span>新しいお知らせを受け取る</span></label>`,`@ { display: flex; align-items: center; gap: 10px; width: min(100%, 360px); padding: 13px 16px; border: 1px solid #e8cbd5; border-radius: 10px; background: #fff5f8; color: #715565; cursor: pointer; font: 700 .95rem/1.5 system-ui, sans-serif; }
@ input { width: 18px; height: 18px; margin: 0; accent-color: #c76f8f; font: inherit; }
@:focus-within { outline: 2px solid #d98eaa; }`,["チェック","ピンク"]);
  add("form","二択のラジオ項目",["ビジネス","シンプル"],"一つだけ選ぶ選択肢を、枠でまとめます。",`<fieldset class="@"><legend>参加方法</legend><label><input type="radio" name="sample-attend" checked> 会場</label><label><input type="radio" name="sample-attend"> オンライン</label></fieldset>`,`@ { display: flex; flex-wrap: wrap; gap: 12px; width: min(100%, 380px); padding: 10px 16px 15px; border: 1px solid #b9ced6; border-radius: 7px; color: #3d5966; font: .95rem/1.5 system-ui, sans-serif; }
@ legend { padding: 0 5px; font-weight: 700; }
@ label { cursor: pointer; }
@ input { accent-color: #367c91; font: inherit; }`,["選択","ラジオ"]);
  add("form","検索用の丸い入力欄",["モダン","やさしい"],"サイト内検索の入口に使える丸い入力欄です。",`<label class="@"><span>検索</span><input type="search" placeholder="キーワードを入力"></label>`,`@ { display: flex; align-items: center; gap: 10px; width: min(100%, 380px); padding: 5px 14px; border: 1px solid #adcbc8; border-radius: 999px; background: #f5faf9; color: #3d6b66; font: 700 .92rem/1.5 system-ui, sans-serif; }
@ input { flex: 1; min-width: 0; padding: 8px 0; border: 0; outline: 0; background: transparent; color: #25453f; font: 1rem system-ui, sans-serif; }
@:focus-within { outline: 2px solid #67a49d; }`,["検索","角丸"]);

  // 区切り線・装飾
  add("divider","細いグレーの区切り線",["シンプル","ビジネス"],"本文の区切りに使える、ごく細い線です。",`<hr class="@">`,`@ { width: 100%; margin: 20px 0; border: 0; border-top: 1px solid #cbd6db; }`,["線","グレー"]);
  add("divider","太さを変えた青い線",["ビジネス","モダン"],"短い色線のあとに細い線を続け、章を区切ります。",`<hr class="@">`,`@ { width: 100%; height: 4px; margin: 20px 0; border: 0; background: linear-gradient(to right, #377f99 0 60px, #d8e5eb 60px 100%); }`,["線","ブルー"]);
  add("divider","点線の区切り",["やさしい","シンプル"],"文章の間をやわらかく区切る点線です。",`<hr class="@">`,`@ { width: 100%; margin: 20px 0; border: 0; border-top: 3px dotted #a7bdad; }`,["点線","グリーン"]);
  add("divider","中央に小さな丸を置く線",["かわいい","やさしい"],"線の中央に丸を置き、少し飾りを加えます。",`<div class="@" aria-hidden="true"><span></span></div>`,`@ { display: flex; align-items: center; gap: 12px; width: 100%; margin: 18px 0; }
@::before, @::after { content: ""; flex: 1; height: 1px; background: #e1b4c5; }
@ span { width: 10px; height: 10px; border-radius: 50%; background: #dd8aa8; }`,["ピンク","丸"]);
  add("divider","短い中央ライン",["落ち着いた","モダン"],"中央の短い線だけで、余白を生かして区切ります。",`<hr class="@">`,`@ { width: 80px; height: 3px; margin: 24px auto; border: 0; border-radius: 3px; background: #789a83; }`,["グリーン","中央"]);
  add("divider","二本線の区切り",["落ち着いた","ビジネス"],"平行な二本の細い線で、章をはっきり分けます。",`<hr class="@">`,`@ { width: 100%; margin: 20px 0; border: 0; border-top: 3px double #aebcc3; }`,["二本線","グレー"]);
  add("divider","グラデーションが消える線",["モダン","やさしい"],"中央を濃く、端を薄くした自然な区切りです。",`<hr class="@">`,`@ { width: 100%; height: 2px; margin: 20px 0; border: 0; background: linear-gradient(to right, transparent, #7aa9b3, transparent); }`,["グラデーション","ブルー"]);
  add("divider","見出し文字入りの区切り",["かわいい","やさしい"],"文字を挟んで、次の内容に移ることを伝えます。",`<div class="@"><span>つづき</span></div>`,`@ { display: flex; align-items: center; gap: 12px; width: 100%; color: #9a6375; font: 700 .9rem/1.5 system-ui, sans-serif; }
@::before, @::after { content: ""; flex: 1; border-top: 1px solid #e4bac9; }
@ span { white-space: nowrap; }`,["ピンク","文字"]);
  add("divider","小さな菱形の区切り",["モダン","落ち着いた"],"中央に菱形を置いた、控えめな飾り線です。",`<div class="@" aria-hidden="true"><span></span></div>`,`@ { display: flex; align-items: center; gap: 12px; width: 100%; }
@::before, @::after { content: ""; flex: 1; height: 1px; background: #b7c7bd; }
@ span { width: 10px; height: 10px; transform: rotate(45deg); background: #7b9e86; }`,["菱形","グリーン"]);

  window.cssDesignCategories = categories;
  window.cssDesignSamples = all;
})();
