"use strict";
// Based on the 12-page examinee HTML reference. Each entry has an editable, complete example.
const REFERENCE = [];
function add(category, rows) { rows.forEach(row => REFERENCE.push({category, ...row})); }
const A = (name, meaning, example) => ({name, meaning, example});
const documentStart = '<!DOCTYPE html>\n<html lang="ja">\n  <head>\n    <meta charset="utf-8">\n    <title>練習ページ</title>\n  </head>\n  <body>\n    <h1>こんにちは！</h1>\n  </body>\n</html>';
const table = '<table border="1">\n  <caption>出席表</caption>\n  <thead>\n    <tr><th scope="col">名前</th><th scope="col">出席</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>山田</td><td>○</td></tr>\n    <tr><td>田中</td><td>○</td></tr>\n  </tbody>\n  <tfoot>\n    <tr><th scope="row">合計</th><td>2人</td></tr>\n  </tfoot>\n</table>';
const form = '<form>\n  <label for="student">名前</label>\n  <input id="student" name="student" type="text" required>\n  <input type="submit" value="確認">\n</form>';
add('HTMLの基本構造', [
  {name:'<!DOCTYPE html>',meaning:'HTML文書であることを宣言',description:'ファイルの一番最初に書き、HTMLの種類をブラウザに伝えます。画面には直接表示されません。',code:documentStart,hidden:true},
  {name:'<html>',meaning:'文書全体を包む',description:'headとbodyを中に入れる、一番外側の要素です。',code:documentStart,attrs:[A('lang','文書の言語','lang="ja"（日本語）')],hidden:true},
  {name:'<head>',meaning:'画面に出ない基本情報をまとめる',description:'titleやmetaなど、ページの情報を中に入れます。本文はbodyに書きます。',code:documentStart,hidden:true},
  {name:'<body>',meaning:'画面に表示する内容をまとめる',description:'見出し、文章、画像などをbodyの中に書きます。headと並んでhtmlの子要素です。',code:documentStart}
]);
add('メタ情報・スクリプト', [
  {name:'<title>',meaning:'ページのタイトルを指定',description:'ブラウザのタブなどに使われ、本文には表示されません。',code:documentStart,hidden:true},
  {name:'<link>',meaning:'外部ファイルとの関係を示す',description:'CSSファイルを読み込むときはheadの中に書きます。サンプルは書き方の確認用です。',code:'<head>\n  <link rel="stylesheet" href="style.css" media="screen" type="text/css">\n</head>',attrs:[A('rel','文書との関係','stylesheet（スタイルシート）、alternate（代替文書）'),A('href','読み込むファイルの場所','href="style.css"'),A('media','対象の画面や条件','screen、all、screen and (max-width: 600px)'),A('type','ファイルの種類（MIMEタイプ）','text/css。現在のCSSでは省略可能')],hidden:true},
  {name:'<meta>',meaning:'文字コードなどの情報を指定',description:'headの中に書きます。本文には表示されません。',code:'<head>\n  <meta charset="utf-8">\n  <meta name="description" content="HTMLの練習ページ">\n</head>',attrs:[A('charset','文字の読み方','utf-8'),A('name','情報の名前','description'),A('content','nameやhttp-equivに対応する値','content="HTMLの練習ページ"'),A('http-equiv','HTTPヘッダーに相当する情報の名前','例：refresh。自動更新は用途を確認して使う')],hidden:true},
  {name:'<script>',meaning:'JavaScriptを指定',description:'JavaScriptを読み込むタグです。この教材のプレビューではスクリプトを実行しません。',code:'<script src="script.js" type="text/javascript"><\/script>',attrs:[A('src','JavaScriptファイルの場所','src="script.js"'),A('type','スクリプトの種類','text/javascript（通常は省略可）'),A('charset','外部ファイルの文字コード','utf-8。現在は通常UTF-8で保存する')],hidden:true},
  {name:'<noscript>',meaning:'JavaScriptが使えないときの内容',description:'JavaScriptが無効の場合に表示する案内です。この教材では実行を禁止しているため表示されます。',code:'<noscript>JavaScriptを利用できません。</noscript>'}
]);
add('セクション・ページ構造', [
  {name:'<header>',meaning:'ページや章の先頭部分',description:'見出しや導入の内容をまとめます。',code:'<header>\n  <h1>学校だより</h1>\n  <p>今月のお知らせ</p>\n</header>'},
  {name:'<footer>',meaning:'ページや章の末尾部分',description:'著作権表示や連絡先などをまとめます。',code:'<footer>\n  <p>&copy; 2026 練習サイト</p>\n</footer>'},
  {name:'<article>',meaning:'単独で読める記事をまとめる',description:'ニュース記事やブログ記事のように、独立した内容に使います。',code:'<article>\n  <h2>学習会のお知らせ</h2>\n  <p>土曜日に開催します。</p>\n</article>'},
  {name:'<section>',meaning:'内容をテーマごとに分ける',description:'一つの話題をまとめます。通常は見出しを付けます。',code:'<section>\n  <h2>講座の内容</h2>\n  <p>HTMLの基本を学びます。</p>\n</section>'},
  {name:'<nav>',meaning:'主な案内リンクをまとめる',description:'ページ内やサイト内の主な移動先を並べます。',code:'<nav>\n  <a href="#course">講座案内へ</a>\n</nav>\n<section id="course">\n  <h2>講座案内</h2>\n</section>'},
  {name:'<aside>',meaning:'補足の内容をまとめる',description:'本文に関連した補足やサイドバーに使います。',code:'<article>\n  <h2>HTMLの学習</h2>\n  <p>タグを入力します。</p>\n  <aside>補足：保存するときは拡張子を .html にします。</aside>\n</article>'},
  {name:'<address>',meaning:'連絡先を示す',description:'記事やページの作成者に関する連絡先を示します。郵便住所だけのタグではありません。',code:'<footer>\n  <address>お問い合わせ：info@example.com</address>\n</footer>'}
]);
add('見出し・段落と汎用要素', [
  ...[1,2,3,4,5,6].map(n=>({name:`<h${n}>`,meaning:`レベル${n}の見出しを作る`,description:'数字が小さいほど上位の見出しです。順番は文字の大きさではなく、文章の構成で決めます。',code:[1,2,3,4,5,6].map(i=>`<h${i}>レベル${i}の見出し</h${i}>`).join('\n')})),
  {name:'<p>',meaning:'段落を作る',description:'文章をひとまとまりの段落として表します。',code:'<p>今日はHTMLの学習をしています。</p>\n<p>次に表示結果を確認します。</p>'},
  {name:'<div>',meaning:'まとまりを作る',description:'特別な意味を持たないブロックのまとまりです。CSSなどの対象をまとめるときに使います。',code:'<div class="notice">\n  <h2>お知らせ</h2>\n  <p>明日は休講です。</p>\n</div>'},
  {name:'<span>',meaning:'文章の一部分を囲む',description:'特別な意味を持たない小さな範囲です。',code:'<p>次回は<span class="date">月曜日</span>です。</p>'}
]);
add('リスト', [
  {name:'<ul>',meaning:'順番のない箇条書きを作る',description:'ulの子要素にliを並べます。olへ書き換えると番号付きになります。',code:'<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>'},
  {name:'<ol>',meaning:'順番のあるリストを作る',description:'olの子要素にliを並べます。ulへ書き換えると記号付きになります。',code:'<ol>\n  <li>ファイルを保存</li>\n  <li>ブラウザで開く</li>\n</ol>'},
  {name:'<li>',meaning:'リストの一項目を作る',description:'liはulまたはolの中に書きます。',code:'<ul>\n  <li>りんご</li>\n  <li>みかん</li>\n</ul>'},
  {name:'<dl>',meaning:'用語と説明の一覧を作る',description:'dlの中に、用語のdtと説明のddを組み合わせます。',code:'<dl>\n  <dt>HTML</dt>\n  <dd>文書の構造を作る言語</dd>\n  <dt>CSS</dt>\n  <dd>見た目を整える言語</dd>\n</dl>'},
  {name:'<dt>',meaning:'説明する用語や名前を示す',description:'dlの中に書き、その説明をddに書きます。',code:'<dl>\n  <dt>HTML</dt>\n  <dd>ページの内容を組み立てる言語</dd>\n</dl>'},
  {name:'<dd>',meaning:'用語や名前の説明を書く',description:'dlの中でdtに対応する説明です。',code:'<dl>\n  <dt>CSS</dt>\n  <dd>ページの見た目を整える言語</dd>\n</dl>'}
]);
add('文字の意味・改行', [
  {name:'<em>',meaning:'語句を強調する',description:'文の中で強調したい部分に使います。通常は斜体で表示されます。',code:'<p>提出日は<em>今日</em>です。</p>'},
  {name:'<strong>',meaning:'重要な部分を示す',description:'重要性が高い部分に使います。通常は太字で表示されます。',code:'<p><strong>必ず保存してください。</strong></p>'},
  {name:'<small>',meaning:'注記や細かな条件を示す',description:'補足や著作権表示などに使います。通常は小さく表示されます。',code:'<p>参加無料です。<small>交通費は各自負担です。</small></p>'},
  {name:'<time>',meaning:'日時を示す',description:'人が読む日時と、機械が読み取る日時を対応させられます。',code:'<p>開催日：<time datetime="2026-10-19">10月19日</time></p>',attrs:[A('datetime','機械が読み取る日時','2026-10-19、14:30')]},
  {name:'<i>',meaning:'周囲と区別した語句を示す',description:'作品名や外国語の語句など、別の性質の部分に使えます。通常は斜体です。強調にはemを使います。',code:'<p>英語の<i>HTML</i>を学びます。</p>'},
  {name:'<b>',meaning:'意味上、目立たせたい語句を示す',description:'読み手の注意を引くキーワードなどに使います。通常は太字です。重要性を示すときはstrongを使います。',code:'<p>キーワードは<b>要素</b>です。</p>'},
  {name:'<br>',meaning:'行を変える',description:'住所や詩など、同じ段落内で行を分けたいときに使います。',code:'<p>東京都千代田区<br>練習町1-2-3</p>'}
]);
add('リンク・画像と図', [
  {name:'<a>',meaning:'リンクを作る',description:'hrefに移動先を指定します。#とidを使うと、このページ内の場所へ移動できます。',code:'<a href="#goal">下の見出しへ</a>\n<p>途中の文章です。</p>\n<h2 id="goal">到着しました</h2>',attrs:[A('href','移動先のURLやページ内のid','href="#goal"、href="page.html#goal"')]},
  {name:'<img>',meaning:'画像を表示する',description:'画像が表示されない場合に備え、内容を表すaltも指定します。サンプル画像は同じフォルダのassets内にあります。',code:'<img src="assets/sample-flower.svg" alt="ピンクの花のイラスト" width="180" height="130">',attrs:[A('src','画像ファイルの場所','assets/sample-flower.svg'),A('alt','画像の代わりに伝える言葉','ピンクの花のイラスト'),A('width','画像の横幅（ピクセル）','180'),A('height','画像の高さ（ピクセル）','130')]},
  {name:'<figure>',meaning:'図版と説明をまとめる',description:'画像や図と、その説明のfigcaptionを一組にします。',code:'<figure>\n  <img src="assets/sample-flower.svg" alt="ピンクの花" width="180" height="130">\n  <figcaption>図1：花のイラスト</figcaption>\n</figure>'},
  {name:'<figcaption>',meaning:'図版の説明を付ける',description:'figureの中に書き、画像などの説明やタイトルを示します。',code:'<figure>\n  <img src="assets/sample-flower.svg" alt="ピンクの花" width="180" height="130">\n  <figcaption>ピンクの花</figcaption>\n</figure>'}
]);
add('表（テーブル）', [
  {name:'<table>',meaning:'表全体を作る',description:'表の中に行を作り、その行に見出しセルとデータセルを入れます。',code:table},
  {name:'<caption>',meaning:'表の題名を付ける',description:'tableの最初に書く表のタイトルです。',code:table},
  {name:'<thead>',meaning:'見出しの行をまとめる',description:'tableの中で表の見出し部分をまとめます。行trを子要素にします。',code:table},
  {name:'<tbody>',meaning:'表の本体の行をまとめる',description:'tableの中で主なデータ行をまとめます。',code:table},
  {name:'<tfoot>',meaning:'表の末尾の行をまとめる',description:'tableの中で合計などの行をまとめます。',code:table},
  {name:'<tr>',meaning:'表の一行を作る',description:'thead、tbody、tfoot、またはtableの中に書き、セルを並べます。',code:table},
  {name:'<th>',meaning:'見出しセルを作る',description:'行や列の見出しです。scopeでどちらの見出しか示せます。',code:table,attrs:[A('scope','見出しが対応する方向','col（列）、row（行）、colgroup、rowgroup'),A('colspan','横に結合する列数','colspan="2"'),A('rowspan','縦に結合する行数','rowspan="2"')]},
  {name:'<td>',meaning:'データのセルを作る',description:'行trの中に入れる通常のデータセルです。',code:table,attrs:[A('colspan','横に結合する列数','colspan="2"'),A('rowspan','縦に結合する行数','rowspan="2"')]}
]);
add('フォーム', [
  {name:'<form>',meaning:'入力欄をまとめる',description:'フォーム部品をひとまとめにします。教材内では外部への送信はできません。',code:form,attrs:[A('action','本来の送信先URL','action="/send"'),A('method','本来の送信方法','get、post'),A('name','フォーム自体の名前','name="contact"')]},
  {name:'<label>',meaning:'入力欄の名前を付ける',description:'forの値と入力欄のidを同じにすると、ラベルをクリックして入力欄を選べます。',code:form,attrs:[A('for','対応する入力欄のid','for="student"')]},
  {name:'<input>',meaning:'一行入力や選択ボタンを作る',description:'typeで入力欄の種類が変わります。下の例にはPDFの8種類を含めています。送信は無効です。',code:'<form>\n  <label for="name">名前</label>\n  <input id="name" name="name" type="text" required>\n  <label for="phone">電話</label>\n  <input id="phone" name="phone" type="tel">\n  <label for="mail">メール</label>\n  <input id="mail" name="mail" type="email">\n  <label><input type="checkbox" name="agree" value="yes"> 同意する</label>\n  <label><input type="radio" name="course" value="html"> HTML</label>\n  <label><input type="radio" name="course" value="css"> CSS</label>\n  <input type="submit" value="確認">\n  <input type="image" src="assets/sample-button.svg" alt="画像の確認ボタン" width="100" height="36">\n</form>',attrs:[A('type','部品の種類','text、tel、email、checkbox、radio、submit、image'),A('name','送信データの名前。同じradioを一組にする','name="course"'),A('value','入力値や送信ボタンの文字','value="確認"'),A('required','入力必須にする','required（値は不要）'),A('src','image型の画像の場所','assets/sample-button.svg'),A('alt','image型の代替テキスト','画像の確認ボタン')]},
  ...[['text','一行の文字入力'],['tel','電話番号の入力'],['email','メールアドレスの入力'],['checkbox','チェックボックス'],['radio','ラジオボタン'],['submit','送信ボタン'],['image','画像の送信ボタン']].map(([type,meaning])=>({name:`<input type="${type}">`,meaning:`${meaning}を作る`,description:type==='submit'||type==='image'?'この教材では送信を無効にしています。':type==='radio'?'同じnameのラジオボタンから一つを選びます。':'入力欄の種類をtype属性で指定します。',code:type==='image'?'<form>\n  <input type="image" src="assets/sample-button.svg" alt="画像の確認ボタン" width="100" height="36">\n</form>':type==='radio'?'<form>\n  <label><input type="radio" name="choice" value="a"> A</label>\n  <label><input type="radio" name="choice" value="b"> B</label>\n</form>':type==='checkbox'?'<form>\n  <label><input type="checkbox" name="agree" value="yes"> 同意する</label>\n</form>':type==='submit'?'<form>\n  <input type="submit" value="確認">\n</form>':`<form>\n  <label for="sample">${meaning}</label>\n  <input id="sample" name="sample" type="${type}" required>\n</form>`,attrs:type==='image'?[A('src','画像の場所','assets/sample-button.svg'),A('alt','画像の代替テキスト','画像の確認ボタン')]:type==='submit'?[A('value','ボタンの表示文字','確認')]:[A('name','入力欄の名前','name="sample"'),A('value','送信される値や初期値','value="yes"'),A('required','入力必須にする','required')]})),
  {name:'<select>',meaning:'選択リストを作る',description:'selectの中にoptionを並べます。multipleを付けると複数選択できます。',code:'<form>\n  <label for="fruit">果物</label>\n  <select id="fruit" name="fruit" required>\n    <option value="">選んでください</option>\n    <option value="apple">りんご</option>\n    <option value="orange">みかん</option>\n  </select>\n</form>',attrs:[A('name','送信データの名前','fruit'),A('multiple','複数選択を許可','multiple'),A('size','画面に見せる行数','size="3"'),A('required','選択必須にする','required')]},
  {name:'<option>',meaning:'選択リストの一項目を作る',description:'selectの子要素に書きます。valueが送信される値です。',code:'<select name="fruit">\n  <option value="apple" selected>りんご</option>\n  <option value="orange">みかん</option>\n</select>',attrs:[A('value','選択時に使う値','value="apple"'),A('selected','最初から選ばれた状態にする','selected')]},
  {name:'<textarea>',meaning:'複数行の入力欄を作る',description:'最初から表示する文章は開始タグと終了タグの間に書きます。',code:'<form>\n  <label for="message">感想</label>\n  <textarea id="message" name="message" cols="30" rows="4" required>楽しかったです。</textarea>\n</form>',attrs:[A('name','送信データの名前','message'),A('cols','おおよその表示幅（文字数）','30'),A('rows','表示する行数','4'),A('required','入力必須にする','required')]}
]);
add('グローバル属性', [
  {name:'id属性',meaning:'一つの要素に固有の名前を付ける',description:'同じ文書内で同じidを重複させません。リンクの移動先にも使えます。',code:'<a href="#place">説明へ</a>\n<h2 id="place">説明</h2>' ,attrs:[A('id','要素の固有名','id="place"')]},
  {name:'class属性',meaning:'複数の要素に共通の名前を付ける',description:'同じclassを複数の要素に付けられます。CSSでまとめて指定するときに便利です。',code:'<p class="notice">提出日は月曜日です。</p>\n<p class="notice">忘れずに保存しましょう。</p>',attrs:[A('class','共通の分類名','class="notice"')]},
  {name:'lang属性',meaning:'文章の言語を示す',description:'htmlに指定して文書全体の言語を伝えます。必要なら一部分にも指定できます。',code:'<!DOCTYPE html>\n<html lang="ja">\n  <head><meta charset="utf-8"><title>言語の例</title></head>\n  <body><p>こんにちは。</p></body>\n</html>',attrs:[A('lang','言語の略号','ja（日本語）、en（英語）')],hidden:true}
]);
add('文字実体参照', [
  {name:'&nbsp;',meaning:'改行されない空白を入れる',description:'隣の文字と同じ行に残したい空白です。字下げやレイアウト調整にはCSSを使います。',code:'<p>価格：1&nbsp;000円</p>'},
  {name:'&amp;',meaning:'記号「&」を表示する',description:'HTMLの特別な記号&を文章として書くときに使います。',code:'<p>HTML &amp; CSS</p>'},
  {name:'&quot;',meaning:'二重引用符「"」を表示する',description:'文章中に二重引用符を文字として書けます。',code:'<p>彼は &quot;OK&quot; と答えました。</p>'},
  {name:'&lt;',meaning:'記号「<」を表示する',description:'タグと間違えられずに、小なり記号を表示できます。',code:'<p>2 &lt; 3</p>'},
  {name:'&gt;',meaning:'記号「>」を表示する',description:'大なり記号を表示できます。',code:'<p>3 &gt; 2</p>'},
  {name:'&copy;',meaning:'著作権マークを表示する',description:'©を文章に入れます。',code:'<p>&copy; 2026 練習サイト</p>'}
]);

