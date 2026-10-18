window.LESSONS = [
  {
    "title": "HTMLの基本構造",
    "goal": "index.htmlをUTF-8で保存し、HTMLの骨組みを作りましょう。",
    "placement": "サクラエディタで新規ファイルを開き、全行を入力します。文字コードをUTF-8にし、ファイル名を index.html にして保存します。",
    "snippet": "<!DOCTYPE html>\n<html lang=\"ja\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>HTML5練習用サンプルページ</title>\n</head>\n<body>\n    <!-- 次のステップで内容を入力します -->\n</body>\n</html>\n",
    "terms": [
      [
        "<!DOCTYPE html>",
        "HTML5の文書であることを宣言します。"
      ],
      [
        "html / lang",
        "ページ全体を囲み、lang=\"ja\"で日本語を示します。"
      ],
      [
        "head / meta",
        "画面に表示しない設定を置き、charset=\"UTF-8\"で文字コードを指定します。"
      ],
      [
        "title",
        "ブラウザのタブに出る名前です。"
      ],
      [
        "body",
        "ブラウザの画面に出る内容を入れます。"
      ]
    ],
    "tasks": [
      "index.htmlで保存し、ブラウザで開きましょう。",
      "ファイル名が index.html.txt になっていないか確認しましょう。"
    ],
    "answers": [
      "サクラエディタの「名前を付けて保存」で、文字コードをUTF-8、ファイル名を index.html にします。",
      "エクスプローラーで拡張子を表示し、.html で終わることを確認します。"
    ],
    "mistakes": [
      ".txt のまま保存するとHTMLとして開けません。",
      "全角の＜ ＞ではタグになりません。"
    ],
    "step": 1,
    "source": "<!DOCTYPE html>\n<html lang=\"ja\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>HTML5練習用サンプルページ</title>\n</head>\n<body>\n    <!-- 次のステップで内容を入力します -->\n</body>\n</html>\n",
    "note": ""
  },
  {
    "title": "見出しと段落",
    "goal": "見出しと段落を加え、文章の階層を確認しましょう。",
    "placement": "STEP 1 の body 内にあるコメント1行を、今回のコードに置き換えます。",
    "snippet": "<h1>HTML5練習用サンプルページ</h1>\n<h2>このサイトについて</h2>\n<p>これはHTML5を練習するためのサンプルページです。<br>少しずつ内容を増やします。</p>\n<hr>",
    "terms": [
      [
        "h1〜h6",
        "見出しの階層です。h1が最上位で、数字は文字の大きさを指定するものではありません。"
      ],
      [
        "p",
        "1つの段落を表します。"
      ],
      [
        "br",
        "同じ段落の中で改行します。終了タグはありません。"
      ],
      [
        "hr",
        "話題の区切りを示します。終了タグはありません。"
      ]
    ],
    "tasks": [
      "h2の下に短い段落を1つ加えましょう。",
      "brの前後で表示がどう変わるか確認しましょう。"
    ],
    "answers": [
      "<p>毎日少しずつ練習します。</p> を h2 の下に加えます。",
      "brを削除すると同じ段落内の改行がなくなります。"
    ],
    "mistakes": [
      "pや見出しの終了タグを書き忘れないようにします。",
      "見た目だけを理由にh2をh4に飛ばさないようにします。"
    ],
    "step": 2,
    "source": "<!DOCTYPE html>\n<html lang=\"ja\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>HTML5練習用サンプルページ</title>\n</head>\n<body>\n    <h1>HTML5練習用サンプルページ</h1>\n    <h2>このサイトについて</h2>\n    <p>これはHTML5を練習するためのサンプルページです。<br>少しずつ内容を増やします。</p>\n    <hr>\n</body>\n</html>\n",
    "note": ""
  },
  {
    "title": "ページの基本構造",
    "goal": "ページを役割ごとの領域に分けましょう。",
    "placement": "STEP 2 の body 内を、今回の構造に組み直します。h1と説明文は消さずに、それぞれ header と main 内に移します。",
    "snippet": "    <header>\n        <h1>HTML5練習用サンプルページ</h1>\n        <nav aria-label=\"ページ内の案内\"><p>ここにページ内の案内を追加します。</p></nav>\n    </header>\n    <main>\n        <section id=\"about\">\n            <h2>このサイトについて</h2>\n            <article>\n                <h3>このページで学ぶこと</h3>\n                <p>これはHTML5を練習するためのサンプルページです。<br>少しずつ内容を増やします。</p>\n                <hr>\n            </article>\n        </section>\n        <aside>\n            <h2>補足情報</h2>\n            <p>このページはHTML5の練習用です。次はCSSで見た目を整えましょう。</p>\n        </aside>\n    </main>\n    <footer>\n        <p>&copy; HTML5練習サイト</p>\n    </footer>",
    "terms": [
      [
        "header",
        "ページやまとまりの先頭です。"
      ],
      [
        "nav",
        "案内用のリンクをまとめる場所です。"
      ],
      [
        "main",
        "そのページの中心となる内容です。"
      ],
      [
        "section",
        "見出しを持つ話題のまとまりです。"
      ],
      [
        "article",
        "それだけで読める内容のまとまりです。"
      ],
      [
        "aside",
        "補足の情報です。"
      ],
      [
        "footer",
        "ページの末尾の情報です。"
      ]
    ],
    "tasks": [
      "ブラウザで header・main・footer の順を確認しましょう。",
      "asideの文章を1文だけ変えてみましょう。"
    ],
    "answers": [
      "上からタイトル、紹介と補足、フッターの順に表示されます。",
      "例：<p>このページは入力練習用です。</p>"
    ],
    "mistakes": [
      "main を header の中に入れないようにします。",
      "section と article の終了タグの順序を確認します。"
    ],
    "step": 3,
    "source": "<!DOCTYPE html>\n<html lang=\"ja\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>HTML5練習用サンプルページ</title>\n</head>\n<body>\n    <header>\n        <h1>HTML5練習用サンプルページ</h1>\n        <nav aria-label=\"ページ内の案内\"><p>ここにページ内の案内を追加します。</p></nav>\n    </header>\n    <main>\n        <section id=\"about\">\n            <h2>このサイトについて</h2>\n            <article>\n                <h3>このページで学ぶこと</h3>\n                <p>これはHTML5を練習するためのサンプルページです。<br>少しずつ内容を増やします。</p>\n                <hr>\n            </article>\n        </section>\n        <aside>\n            <h2>補足情報</h2>\n            <p>このページはHTML5の練習用です。次はCSSで見た目を整えましょう。</p>\n        </aside>\n    </main>\n    <footer>\n        <p>&copy; HTML5練習サイト</p>\n    </footer>\n</body>\n</html>\n",
    "note": ""
  },
  {
    "title": "リスト",
    "goal": "番号なし・番号付きのリストを作りましょう。",
    "placement": "main の紹介 section に項目一覧を加え、その後に新しいリスト section を加えます。",
    "snippet": "<!-- 紹介 section の article 内へ追加 -->\n<p>このページには、次の要素が含まれます。</p>\n<ul>\n    <li>見出しと段落</li>\n    <li>リスト</li>\n    <li>表・画像・フォーム</li>\n</ul>\n<!-- 紹介 section の後へ追加 -->\n<section id=\"lists\">\n    <h2>リストの練習</h2>\n    <h3>番号なしリスト</h3>\n    <ul>\n        <li>りんご</li>\n        <li>バナナ</li>\n        <li>オレンジ</li>\n    </ul>\n    <h3>番号付きリスト</h3>\n    <ol>\n        <li>HTMLを学ぶ</li>\n        <li>CSSを学ぶ</li>\n        <li>JavaScriptを学ぶ</li>\n        <li>実際のサイトを作る</li>\n    </ol>\n</section>",
    "terms": [
      [
        "ul",
        "順番を付けない項目の親です。"
      ],
      [
        "ol",
        "順番を付ける項目の親です。"
      ],
      [
        "li",
        "各項目です。liはulまたはolの内側に置きます。"
      ]
    ],
    "tasks": [
      "果物の項目を1つ増やしましょう。",
      "ol の2番目と3番目を入れ替えましょう。"
    ],
    "answers": [
      "<li>ぶどう</li> を ul の中に追加します。",
      "CSSを学ぶ と JavaScriptを学ぶ の li の位置を入れ替えます。"
    ],
    "mistakes": [
      "liをulやolの外に置かないようにします。",
      "liの終了タグを忘れないようにします。"
    ],
    "step": 4,
    "source": "<!DOCTYPE html>\n<html lang=\"ja\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>HTML5練習用サンプルページ</title>\n</head>\n<body>\n    <header>\n        <h1>HTML5練習用サンプルページ</h1>\n        <nav aria-label=\"ページ内の案内\"><p>ここにページ内の案内を追加します。</p></nav>\n    </header>\n    <main>\n        <section id=\"about\">\n            <h2>このサイトについて</h2>\n            <article>\n                <h3>このページで学ぶこと</h3>\n                <p>これはHTML5を練習するためのサンプルページです。<br>少しずつ内容を増やします。</p>\n                <hr>\n                <p>このページには、次の要素が含まれます。</p>\n                <ul>\n                    <li>見出しと段落</li>\n                    <li>リスト</li>\n                    <li>表・画像・フォーム</li>\n                </ul>\n            </article>\n        </section>\n\n        <section id=\"lists\">\n            <h2>リストの練習</h2>\n            <h3>番号なしリスト</h3>\n            <ul>\n                <li>りんご</li>\n                <li>バナナ</li>\n                <li>オレンジ</li>\n            </ul>\n            <h3>番号付きリスト</h3>\n            <ol>\n                <li>HTMLを学ぶ</li>\n                <li>CSSを学ぶ</li>\n                <li>JavaScriptを学ぶ</li>\n                <li>実際のサイトを作る</li>\n            </ol>\n        </section>\n        <aside>\n            <h2>補足情報</h2>\n            <p>このページはHTML5の練習用です。次はCSSで見た目を整えましょう。</p>\n        </aside>\n    </main>\n    <footer>\n        <p>&copy; HTML5練習サイト</p>\n    </footer>\n</body>\n</html>\n",
    "note": ""
  },
  {
    "title": "リンク",
    "goal": "ページ内リンクとメールリンクを結び付けましょう。",
    "placement": "header 内の nav をリンク一覧に置き換え、main に id=\"table\" の section を加え、footer にメールリンクを加えます。",
    "snippet": "<nav aria-label=\"ページ内の案内\">\n    <ul>\n        <li><a href=\"#about\">このサイトについて</a></li>\n        <li><a href=\"#table\">比較表</a></li>\n        \n        \n    </ul>\n</nav>\n<section id=\"table\">\n    <h2>比較表</h2>\n    <p>次のステップで表を追加します。</p>\n</section>\n<a href=\"mailto:info@example.com\">info@example.com</a>",
    "terms": [
      [
        "a / href",
        "行き先を指定したリンクです。"
      ],
      [
        "id",
        "ページ内の目印です。同じページ内で重複させません。"
      ],
      [
        "#table",
        "hrefの#以降が id=\"table\" と一致すると、その場所へ移動します。"
      ],
      [
        "target",
        "_blankで別のタブを開けます。外部ページで使うときはrel=\"noopener\"も付けます。"
      ],
      [
        "mailto",
        "メールアプリを開くためのリンクです。"
      ]
    ],
    "tasks": [
      "「比較表」のリンクをクリックしましょう。",
      "hrefの#tableとid=\"table\"の文字を比べましょう。"
    ],
    "answers": [
      "比較表の見出しに移動します。",
      "#を除いたtableが一致しています。"
    ],
    "mistakes": [
      "href=\"#table\" の#を忘れないようにします。",
      "idの綴りが異なると移動しません。"
    ],
    "step": 5,
    "source": "<!DOCTYPE html>\n<html lang=\"ja\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>HTML5練習用サンプルページ</title>\n</head>\n<body>\n    <header>\n        <h1>HTML5練習用サンプルページ</h1>\n        <nav aria-label=\"ページ内の案内\">\n            <ul>\n                <li><a href=\"#about\">このサイトについて</a></li>\n                <li><a href=\"#table\">比較表</a></li>\n        \n        \n            </ul>\n        </nav>\n    </header>\n    <main>\n        <section id=\"about\">\n            <h2>このサイトについて</h2>\n            <article>\n                <h3>このページで学ぶこと</h3>\n                <p>これはHTML5を練習するためのサンプルページです。<br>少しずつ内容を増やします。</p>\n                <hr>\n                <p>このページには、次の要素が含まれます。</p>\n                <ul>\n                    <li>見出しと段落</li>\n                    <li>リスト</li>\n                    <li>表・画像・フォーム</li>\n                </ul>\n            </article>\n        </section>\n\n        <section id=\"lists\">\n            <h2>リストの練習</h2>\n            <h3>番号なしリスト</h3>\n            <ul>\n                <li>りんご</li>\n                <li>バナナ</li>\n                <li>オレンジ</li>\n            </ul>\n            <h3>番号付きリスト</h3>\n            <ol>\n                <li>HTMLを学ぶ</li>\n                <li>CSSを学ぶ</li>\n                <li>JavaScriptを学ぶ</li>\n                <li>実際のサイトを作る</li>\n            </ol>\n        </section>\n\n        <section id=\"table\">\n            <h2>比較表</h2>\n            <p>次のステップで表を追加します。</p>\n        </section>\n        <aside>\n            <h2>補足情報</h2>\n            <p>このページはHTML5の練習用です。次はCSSで見た目を整えましょう。</p>\n        </aside>\n    </main>\n    <footer>\n        <p>&copy; HTML5練習サイト</p>\n        <p>連絡先：<a href=\"mailto:info@example.com\">info@example.com</a></p>\n    </footer>\n</body>\n</html>\n",
    "note": "表を作る前にページ内リンクの行き先を用意します。"
  },
  {
    "title": "テーブル",
    "goal": "見出し行とデータ行を分けて比較表を作りましょう。",
    "placement": "id=\"table\" の section 内で、仮の p を今回のコードに置き換えます。",
    "snippet": "<h3>言語と技術の比較表</h3>\n<table>\n    <caption>Web制作で使う言語と技術</caption>\n    <thead>\n        <tr><th scope=\"col\">名前</th><th scope=\"col\">難易度</th><th scope=\"col\">用途</th></tr>\n    </thead>\n    <tbody>\n        <tr><td>HTML</td><td>初級</td><td>Webページの構造</td></tr>\n        <tr><td>CSS</td><td>初級</td><td>Webページのデザイン</td></tr>\n        <tr><td>JavaScript</td><td>中級</td><td>Webページの動き</td></tr>\n        <tr><td>Python</td><td>初級〜中級</td><td>データ分析など</td></tr>\n    </tbody>\n</table>\n<p>HTMLとCSSはプログラミング言語ではありませんが、Web制作でよく使います。</p>",
    "terms": [
      [
        "table",
        "表全体です。"
      ],
      [
        "caption",
        "表の名前を示します。"
      ],
      [
        "thead / tbody",
        "見出し部分とデータ部分です。"
      ],
      [
        "tr",
        "横1行を作ります。"
      ],
      [
        "th / td",
        "見出しセルとデータセルです。"
      ],
      [
        "rowspan / colspan",
        "追加練習で使う、縦・横のセル結合です。"
      ]
    ],
    "tasks": [
      "表に1行追加しましょう。",
      "追加練習：新しい表でcolspan=\"2\"を試しましょう。"
    ],
    "answers": [
      "<tr><td>Ruby</td><td>中級</td><td>Web開発</td></tr> を tbody に追加します。",
      "<tr><th colspan=\"2\">2列分の見出し</th></tr> のように書きます。縦に結合する場合は rowspan=\"2\" です。"
    ],
    "mistakes": [
      "trの中のセル数をそろえます。",
      "captionはtableのすぐ内側に置きます。"
    ],
    "step": 6,
    "source": "<!DOCTYPE html>\n<html lang=\"ja\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>HTML5練習用サンプルページ</title>\n</head>\n<body>\n    <header>\n        <h1>HTML5練習用サンプルページ</h1>\n        <nav aria-label=\"ページ内の案内\">\n            <ul>\n                <li><a href=\"#about\">このサイトについて</a></li>\n                <li><a href=\"#table\">比較表</a></li>\n        \n        \n            </ul>\n        </nav>\n    </header>\n    <main>\n        <section id=\"about\">\n            <h2>このサイトについて</h2>\n            <article>\n                <h3>このページで学ぶこと</h3>\n                <p>これはHTML5を練習するためのサンプルページです。<br>少しずつ内容を増やします。</p>\n                <hr>\n                <p>このページには、次の要素が含まれます。</p>\n                <ul>\n                    <li>見出しと段落</li>\n                    <li>リスト</li>\n                    <li>表・画像・フォーム</li>\n                </ul>\n            </article>\n        </section>\n\n        <section id=\"lists\">\n            <h2>リストの練習</h2>\n            <h3>番号なしリスト</h3>\n            <ul>\n                <li>りんご</li>\n                <li>バナナ</li>\n                <li>オレンジ</li>\n            </ul>\n            <h3>番号付きリスト</h3>\n            <ol>\n                <li>HTMLを学ぶ</li>\n                <li>CSSを学ぶ</li>\n                <li>JavaScriptを学ぶ</li>\n                <li>実際のサイトを作る</li>\n            </ol>\n        </section>\n\n        <section id=\"table\">\n            <h2>比較表</h2>\n            <h3>言語と技術の比較表</h3>\n            <table>\n                <caption>Web制作で使う言語と技術</caption>\n                <thead>\n                    <tr><th scope=\"col\">名前</th><th scope=\"col\">難易度</th><th scope=\"col\">用途</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td>HTML</td><td>初級</td><td>Webページの構造</td></tr>\n                    <tr><td>CSS</td><td>初級</td><td>Webページのデザイン</td></tr>\n                    <tr><td>JavaScript</td><td>中級</td><td>Webページの動き</td></tr>\n                    <tr><td>Python</td><td>初級〜中級</td><td>データ分析など</td></tr>\n                </tbody>\n            </table>\n            <p>HTMLとCSSはプログラミング言語ではありませんが、Web制作でよく使います。</p>\n        </section>\n        <aside>\n            <h2>補足情報</h2>\n            <p>このページはHTML5の練習用です。次はCSSで見た目を整えましょう。</p>\n        </aside>\n    </main>\n    <footer>\n        <p>&copy; HTML5練習サイト</p>\n        <p>連絡先：<a href=\"mailto:info@example.com\">info@example.com</a></p>\n    </footer>\n</body>\n</html>\n",
    "note": ""
  },
  {
    "title": "画像",
    "goal": "作業フォルダ内の画像を相対パスで表示しましょう。",
    "placement": "main の比較表 section の後に、画像 section を追加します。配布ZIPの images フォルダを index.html と同じ場所に置きます。navにも画像リンクを加えます。",
    "snippet": "<!-- nav の ul 内へ追加 -->\n<li><a href=\"#images\">画像</a></li>\n<!-- main の比較表 section の後へ追加 -->\n<section id=\"images\">\n    <h2>画像の練習</h2>\n    <article>\n        <h3>サンプル画像1</h3>\n        <img src=\"images/sample1.jpg\" alt=\"青い空と山のイラスト\" width=\"400\" height=\"300\">\n        <p>幅400px、高さ300pxの画像です。</p>\n    </article>\n    <article>\n        <h3>サンプル画像2</h3>\n        <img src=\"images/sample2.jpg\" alt=\"花が咲く庭のイラスト\" width=\"300\" height=\"200\">\n        <p>幅300px、高さ200pxの画像です。</p>\n    </article>\n    <article>\n        <h3>画像とリンクの組み合わせ</h3>\n        <a href=\"images/sample3.jpg\" target=\"_blank\" rel=\"noopener\">\n            <img src=\"images/sample3.jpg\" alt=\"海辺の灯台のイラストを別のタブで開く\" width=\"250\" height=\"150\">\n        </a>\n        <p>画像をクリックすると、別のタブで画像が開きます。</p>\n    </article>\n</section>",
    "terms": [
      [
        "img / src",
        "画像ファイルの場所です。images/sample1.jpg は同じフォルダ内の images を指します。"
      ],
      [
        "alt",
        "画像が見えない場合にも意味が伝わる代替文です。"
      ],
      [
        "width / height",
        "表示の幅と高さです。"
      ],
      [
        "aでimgを囲む",
        "画像をクリックできるリンクにします。"
      ]
    ],
    "tasks": [
      "sample1.jpg の幅を300に変えてみましょう。",
      "画像をクリックして、別のタブで開くか確認しましょう。"
    ],
    "answers": [
      "width=\"300\" にすると、表示幅が300pxになります。高さも比率に合わせて調整しましょう。",
      "3枚目の画像は images/sample3.jpg を新しいタブで開きます。"
    ],
    "mistakes": [
      "images フォルダ名やファイル名を正確に入力します。",
      "画像が表示されないときは index.html と images の位置を確認します。"
    ],
    "step": 7,
    "source": "<!DOCTYPE html>\n<html lang=\"ja\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>HTML5練習用サンプルページ</title>\n</head>\n<body>\n    <header>\n        <h1>HTML5練習用サンプルページ</h1>\n        <nav aria-label=\"ページ内の案内\">\n            <ul>\n                <li><a href=\"#about\">このサイトについて</a></li>\n                <li><a href=\"#table\">比較表</a></li>\n                <li><a href=\"#images\">画像</a></li>\n        \n            </ul>\n        </nav>\n    </header>\n    <main>\n        <section id=\"about\">\n            <h2>このサイトについて</h2>\n            <article>\n                <h3>このページで学ぶこと</h3>\n                <p>これはHTML5を練習するためのサンプルページです。<br>少しずつ内容を増やします。</p>\n                <hr>\n                <p>このページには、次の要素が含まれます。</p>\n                <ul>\n                    <li>見出しと段落</li>\n                    <li>リスト</li>\n                    <li>表・画像・フォーム</li>\n                </ul>\n            </article>\n        </section>\n\n        <section id=\"lists\">\n            <h2>リストの練習</h2>\n            <h3>番号なしリスト</h3>\n            <ul>\n                <li>りんご</li>\n                <li>バナナ</li>\n                <li>オレンジ</li>\n            </ul>\n            <h3>番号付きリスト</h3>\n            <ol>\n                <li>HTMLを学ぶ</li>\n                <li>CSSを学ぶ</li>\n                <li>JavaScriptを学ぶ</li>\n                <li>実際のサイトを作る</li>\n            </ol>\n        </section>\n\n        <section id=\"table\">\n            <h2>比較表</h2>\n            <h3>言語と技術の比較表</h3>\n            <table>\n                <caption>Web制作で使う言語と技術</caption>\n                <thead>\n                    <tr><th scope=\"col\">名前</th><th scope=\"col\">難易度</th><th scope=\"col\">用途</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td>HTML</td><td>初級</td><td>Webページの構造</td></tr>\n                    <tr><td>CSS</td><td>初級</td><td>Webページのデザイン</td></tr>\n                    <tr><td>JavaScript</td><td>中級</td><td>Webページの動き</td></tr>\n                    <tr><td>Python</td><td>初級〜中級</td><td>データ分析など</td></tr>\n                </tbody>\n            </table>\n            <p>HTMLとCSSはプログラミング言語ではありませんが、Web制作でよく使います。</p>\n        </section>\n\n        <section id=\"images\">\n            <h2>画像の練習</h2>\n            <article>\n                <h3>サンプル画像1</h3>\n                <img src=\"images/sample1.jpg\" alt=\"青い空と山のイラスト\" width=\"400\" height=\"300\">\n                <p>幅400px、高さ300pxの画像です。</p>\n            </article>\n            <article>\n                <h3>サンプル画像2</h3>\n                <img src=\"images/sample2.jpg\" alt=\"花が咲く庭のイラスト\" width=\"300\" height=\"200\">\n                <p>幅300px、高さ200pxの画像です。</p>\n            </article>\n            <article>\n                <h3>画像とリンクの組み合わせ</h3>\n                <a href=\"images/sample3.jpg\" target=\"_blank\" rel=\"noopener\">\n                    <img src=\"images/sample3.jpg\" alt=\"海辺の灯台のイラストを別のタブで開く\" width=\"250\" height=\"150\">\n                </a>\n                <p>画像をクリックすると、別のタブで画像が開きます。</p>\n            </article>\n        </section>\n        <aside>\n            <h2>補足情報</h2>\n            <p>このページはHTML5の練習用です。次はCSSで見た目を整えましょう。</p>\n        </aside>\n    </main>\n    <footer>\n        <p>&copy; HTML5練習サイト</p>\n        <p>連絡先：<a href=\"mailto:info@example.com\">info@example.com</a></p>\n    </footer>\n</body>\n</html>\n",
    "note": ""
  },
  {
    "title": "フォーム",
    "goal": "名前・メール・数値・選択・文章の入力部品を置きましょう。",
    "placement": "main の画像 section の後に、フォーム section を追加します。navにもフォームリンクを加えます。",
    "snippet": "<!-- nav の ul 内へ追加 -->\n<li><a href=\"#form\">フォーム</a></li>\n<!-- main の画像 section の後へ追加 -->\n<section id=\"form\">\n    <h2>フォームの練習</h2>\n    <p>送信先のない練習用フォームです。個人情報は入力しないでください。</p>\n    <form onsubmit=\"return false;\">\n        <p><label for=\"name\">お名前：</label><br><input type=\"text\" id=\"name\" name=\"name\" placeholder=\"山田太郎\"></p>\n        <p><label for=\"email\">メールアドレス：</label><br><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"example@email.com\"></p>\n        <p><label for=\"age\">年齢：</label><br><input type=\"number\" id=\"age\" name=\"age\" min=\"0\" max=\"120\"></p>\n        <fieldset>\n            <legend>好きな色</legend>\n            <input type=\"radio\" id=\"red\" name=\"color\" value=\"red\"><label for=\"red\">赤</label>\n            <input type=\"radio\" id=\"blue\" name=\"color\" value=\"blue\"><label for=\"blue\">青</label>\n            <input type=\"radio\" id=\"green\" name=\"color\" value=\"green\"><label for=\"green\">緑</label>\n        </fieldset>\n        <p><input type=\"checkbox\" id=\"agree\" name=\"agree\"><label for=\"agree\">練習用の確認にチェックする</label></p>\n        <p><label for=\"message\">メッセージ：</label><br><textarea id=\"message\" name=\"message\" rows=\"4\" cols=\"40\" placeholder=\"練習用の文章を入力\"></textarea></p>\n        <button type=\"submit\">送信（練習）</button>\n        <button type=\"reset\">リセット</button>\n    </form>\n</section>",
    "terms": [
      [
        "form",
        "入力部品のまとまりです。この例には送信先がありません。"
      ],
      [
        "label / for",
        "入力部品の説明です。forとinputのidを一致させます。"
      ],
      [
        "input / type",
        "text・email・number・radio・checkboxを使い分けます。"
      ],
      [
        "name",
        "送信データを識別する名前です。ラジオボタンは同じnameで1組になります。"
      ],
      [
        "placeholder",
        "入力例を薄く表示します。"
      ],
      [
        "textarea",
        "複数行の文章を入力します。"
      ],
      [
        "button",
        "submitは送信、resetは入力の取り消しです。"
      ]
    ],
    "tasks": [
      "好きな色を1つ選んでみましょう。",
      "リセットで入力が消えるか確認しましょう。"
    ],
    "answers": [
      "赤・青・緑のいずれか1つだけ選べます。",
      "リセットを押すと初期状態に戻ります。送信は練習用で、データは送られません。"
    ],
    "mistakes": [
      "labelのforとinputのidを一致させます。",
      "ここには実際の氏名やメールアドレスを入力しないでください。"
    ],
    "step": 8,
    "source": "<!DOCTYPE html>\n<html lang=\"ja\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>HTML5練習用サンプルページ</title>\n</head>\n<body>\n    <header>\n        <h1>HTML5練習用サンプルページ</h1>\n        <nav aria-label=\"ページ内の案内\">\n            <ul>\n                <li><a href=\"#about\">このサイトについて</a></li>\n                <li><a href=\"#table\">比較表</a></li>\n                <li><a href=\"#images\">画像</a></li>\n                <li><a href=\"#form\">フォーム</a></li>\n            </ul>\n        </nav>\n    </header>\n    <main>\n        <section id=\"about\">\n            <h2>このサイトについて</h2>\n            <article>\n                <h3>このページで学ぶこと</h3>\n                <p>これはHTML5を練習するためのサンプルページです。<br>少しずつ内容を増やします。</p>\n                <hr>\n                <p>このページには、次の要素が含まれます。</p>\n                <ul>\n                    <li>見出しと段落</li>\n                    <li>リスト</li>\n                    <li>表・画像・フォーム</li>\n                </ul>\n            </article>\n        </section>\n\n        <section id=\"lists\">\n            <h2>リストの練習</h2>\n            <h3>番号なしリスト</h3>\n            <ul>\n                <li>りんご</li>\n                <li>バナナ</li>\n                <li>オレンジ</li>\n            </ul>\n            <h3>番号付きリスト</h3>\n            <ol>\n                <li>HTMLを学ぶ</li>\n                <li>CSSを学ぶ</li>\n                <li>JavaScriptを学ぶ</li>\n                <li>実際のサイトを作る</li>\n            </ol>\n        </section>\n\n        <section id=\"table\">\n            <h2>比較表</h2>\n            <h3>言語と技術の比較表</h3>\n            <table>\n                <caption>Web制作で使う言語と技術</caption>\n                <thead>\n                    <tr><th scope=\"col\">名前</th><th scope=\"col\">難易度</th><th scope=\"col\">用途</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td>HTML</td><td>初級</td><td>Webページの構造</td></tr>\n                    <tr><td>CSS</td><td>初級</td><td>Webページのデザイン</td></tr>\n                    <tr><td>JavaScript</td><td>中級</td><td>Webページの動き</td></tr>\n                    <tr><td>Python</td><td>初級〜中級</td><td>データ分析など</td></tr>\n                </tbody>\n            </table>\n            <p>HTMLとCSSはプログラミング言語ではありませんが、Web制作でよく使います。</p>\n        </section>\n\n        <section id=\"images\">\n            <h2>画像の練習</h2>\n            <article>\n                <h3>サンプル画像1</h3>\n                <img src=\"images/sample1.jpg\" alt=\"青い空と山のイラスト\" width=\"400\" height=\"300\">\n                <p>幅400px、高さ300pxの画像です。</p>\n            </article>\n            <article>\n                <h3>サンプル画像2</h3>\n                <img src=\"images/sample2.jpg\" alt=\"花が咲く庭のイラスト\" width=\"300\" height=\"200\">\n                <p>幅300px、高さ200pxの画像です。</p>\n            </article>\n            <article>\n                <h3>画像とリンクの組み合わせ</h3>\n                <a href=\"images/sample3.jpg\" target=\"_blank\" rel=\"noopener\">\n                    <img src=\"images/sample3.jpg\" alt=\"海辺の灯台のイラストを別のタブで開く\" width=\"250\" height=\"150\">\n                </a>\n                <p>画像をクリックすると、別のタブで画像が開きます。</p>\n            </article>\n        </section>\n\n        <section id=\"form\">\n            <h2>フォームの練習</h2>\n            <p>送信先のない練習用フォームです。個人情報は入力しないでください。</p>\n            <form onsubmit=\"return false;\">\n                <p><label for=\"name\">お名前：</label><br><input type=\"text\" id=\"name\" name=\"name\" placeholder=\"山田太郎\"></p>\n                <p><label for=\"email\">メールアドレス：</label><br><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"example@email.com\"></p>\n                <p><label for=\"age\">年齢：</label><br><input type=\"number\" id=\"age\" name=\"age\" min=\"0\" max=\"120\"></p>\n                <fieldset>\n                    <legend>好きな色</legend>\n                    <input type=\"radio\" id=\"red\" name=\"color\" value=\"red\"><label for=\"red\">赤</label>\n                    <input type=\"radio\" id=\"blue\" name=\"color\" value=\"blue\"><label for=\"blue\">青</label>\n                    <input type=\"radio\" id=\"green\" name=\"color\" value=\"green\"><label for=\"green\">緑</label>\n                </fieldset>\n                <p><input type=\"checkbox\" id=\"agree\" name=\"agree\"><label for=\"agree\">練習用の確認にチェックする</label></p>\n                <p><label for=\"message\">メッセージ：</label><br><textarea id=\"message\" name=\"message\" rows=\"4\" cols=\"40\" placeholder=\"練習用の文章を入力\"></textarea></p>\n                <button type=\"submit\">送信（練習）</button>\n                <button type=\"reset\">リセット</button>\n            </form>\n        </section>\n        <aside>\n            <h2>補足情報</h2>\n            <p>このページはHTML5の練習用です。次はCSSで見た目を整えましょう。</p>\n        </aside>\n    </main>\n    <footer>\n        <p>&copy; HTML5練習サイト</p>\n        <p>連絡先：<a href=\"mailto:info@example.com\">info@example.com</a></p>\n    </footer>\n</body>\n</html>\n",
    "note": ""
  },
  {
    "title": "HTMLの完成",
    "goal": "すべての内容を1つのページとして確認しましょう。",
    "placement": "main の最後、aside の直前に完成チェック section を加えます。講師は「ここまでのHTML全体」で完成コードを確認できます。",
    "snippet": "<section id=\"finish\">\n    <h2>完成チェック</h2>\n    <p>見出しからフォームまで、1つのHTMLにまとめました。</p>\n</section>",
    "terms": [
      [
        "入れ子",
        "開始タグと終了タグが対応し、外側から順に閉じられているか確認します。"
      ],
      [
        "ページ内リンク",
        "navのhrefと各sectionのidが対応します。"
      ],
      [
        "相対パス",
        "imagesフォルダとindex.htmlの位置関係で画像が読まれます。"
      ]
    ],
    "tasks": [
      "ヘッダー、紹介、リスト、比較表、画像、フォーム、補足、フッターを確認しましょう。",
      "ページ内リンクを順にクリックしましょう。"
    ],
    "answers": [
      "各要素がページ内に表示されれば完成です。",
      "リンク先の各見出しへ移動します。"
    ],
    "mistakes": [
      "閉じタグの抜けを最後に見直します。",
      "画像とフォームの見出しが二重になっていないか確認します。"
    ],
    "step": 9,
    "source": "<!DOCTYPE html>\n<html lang=\"ja\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>HTML5練習用サンプルページ</title>\n</head>\n<body>\n    <header>\n        <h1>HTML5練習用サンプルページ</h1>\n        <nav aria-label=\"ページ内の案内\">\n            <ul>\n                <li><a href=\"#about\">このサイトについて</a></li>\n                <li><a href=\"#table\">比較表</a></li>\n                <li><a href=\"#images\">画像</a></li>\n                <li><a href=\"#form\">フォーム</a></li>\n            </ul>\n        </nav>\n    </header>\n    <main>\n        <section id=\"about\">\n            <h2>このサイトについて</h2>\n            <article>\n                <h3>このページで学ぶこと</h3>\n                <p>これはHTML5を練習するためのサンプルページです。<br>少しずつ内容を増やします。</p>\n                <hr>\n                <p>このページには、次の要素が含まれます。</p>\n                <ul>\n                    <li>見出しと段落</li>\n                    <li>リスト</li>\n                    <li>表・画像・フォーム</li>\n                </ul>\n            </article>\n        </section>\n\n        <section id=\"lists\">\n            <h2>リストの練習</h2>\n            <h3>番号なしリスト</h3>\n            <ul>\n                <li>りんご</li>\n                <li>バナナ</li>\n                <li>オレンジ</li>\n            </ul>\n            <h3>番号付きリスト</h3>\n            <ol>\n                <li>HTMLを学ぶ</li>\n                <li>CSSを学ぶ</li>\n                <li>JavaScriptを学ぶ</li>\n                <li>実際のサイトを作る</li>\n            </ol>\n        </section>\n\n        <section id=\"table\">\n            <h2>比較表</h2>\n            <h3>言語と技術の比較表</h3>\n            <table>\n                <caption>Web制作で使う言語と技術</caption>\n                <thead>\n                    <tr><th scope=\"col\">名前</th><th scope=\"col\">難易度</th><th scope=\"col\">用途</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td>HTML</td><td>初級</td><td>Webページの構造</td></tr>\n                    <tr><td>CSS</td><td>初級</td><td>Webページのデザイン</td></tr>\n                    <tr><td>JavaScript</td><td>中級</td><td>Webページの動き</td></tr>\n                    <tr><td>Python</td><td>初級〜中級</td><td>データ分析など</td></tr>\n                </tbody>\n            </table>\n            <p>HTMLとCSSはプログラミング言語ではありませんが、Web制作でよく使います。</p>\n        </section>\n\n        <section id=\"images\">\n            <h2>画像の練習</h2>\n            <article>\n                <h3>サンプル画像1</h3>\n                <img src=\"images/sample1.jpg\" alt=\"青い空と山のイラスト\" width=\"400\" height=\"300\">\n                <p>幅400px、高さ300pxの画像です。</p>\n            </article>\n            <article>\n                <h3>サンプル画像2</h3>\n                <img src=\"images/sample2.jpg\" alt=\"花が咲く庭のイラスト\" width=\"300\" height=\"200\">\n                <p>幅300px、高さ200pxの画像です。</p>\n            </article>\n            <article>\n                <h3>画像とリンクの組み合わせ</h3>\n                <a href=\"images/sample3.jpg\" target=\"_blank\" rel=\"noopener\">\n                    <img src=\"images/sample3.jpg\" alt=\"海辺の灯台のイラストを別のタブで開く\" width=\"250\" height=\"150\">\n                </a>\n                <p>画像をクリックすると、別のタブで画像が開きます。</p>\n            </article>\n        </section>\n\n        <section id=\"form\">\n            <h2>フォームの練習</h2>\n            <p>送信先のない練習用フォームです。個人情報は入力しないでください。</p>\n            <form onsubmit=\"return false;\">\n                <p><label for=\"name\">お名前：</label><br><input type=\"text\" id=\"name\" name=\"name\" placeholder=\"山田太郎\"></p>\n                <p><label for=\"email\">メールアドレス：</label><br><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"example@email.com\"></p>\n                <p><label for=\"age\">年齢：</label><br><input type=\"number\" id=\"age\" name=\"age\" min=\"0\" max=\"120\"></p>\n                <fieldset>\n                    <legend>好きな色</legend>\n                    <input type=\"radio\" id=\"red\" name=\"color\" value=\"red\"><label for=\"red\">赤</label>\n                    <input type=\"radio\" id=\"blue\" name=\"color\" value=\"blue\"><label for=\"blue\">青</label>\n                    <input type=\"radio\" id=\"green\" name=\"color\" value=\"green\"><label for=\"green\">緑</label>\n                </fieldset>\n                <p><input type=\"checkbox\" id=\"agree\" name=\"agree\"><label for=\"agree\">練習用の確認にチェックする</label></p>\n                <p><label for=\"message\">メッセージ：</label><br><textarea id=\"message\" name=\"message\" rows=\"4\" cols=\"40\" placeholder=\"練習用の文章を入力\"></textarea></p>\n                <button type=\"submit\">送信（練習）</button>\n                <button type=\"reset\">リセット</button>\n            </form>\n        </section>\n\n        <section id=\"finish\">\n            <h2>完成チェック</h2>\n            <p>見出しからフォームまで、1つのHTMLにまとめました。</p>\n        </section>\n        <aside>\n            <h2>補足情報</h2>\n            <p>このページはHTML5の練習用です。次はCSSで見た目を整えましょう。</p>\n        </aside>\n    </main>\n    <footer>\n        <p>&copy; HTML5練習サイト</p>\n        <p>連絡先：<a href=\"mailto:info@example.com\">info@example.com</a></p>\n    </footer>\n</body>\n</html>\n",
    "note": ""
  },
  {
    "title": "CSSを適用する",
    "goal": "HTMLは内容、CSSは見た目を担当することを体験しましょう。",
    "placement": "head 内の title の次に link を1行加えます。cute.css と chic.css を index.html と同じ場所に置きます。",
    "snippet": "<link rel=\"stylesheet\" href=\"cute.css\">\n<!-- chic.css に切り替えるときは href=\"chic.css\" に変更 -->",
    "terms": [
      [
        "link",
        "別ファイルのCSSをHTMLに読み込みます。"
      ],
      [
        "rel=\"stylesheet\"",
        "読み込むファイルがスタイルシートだと示します。"
      ],
      [
        "href",
        "CSSファイルの名前または場所です。"
      ]
    ],
    "tasks": [
      "cute.css でページを開きましょう。",
      "hrefをchic.cssに変え、再読み込みして違いを見ましょう。"
    ],
    "answers": [
      "明るい色のページになります。",
      "同じHTMLでも色や余白などが変わります。"
    ],
    "mistakes": [
      "CSSファイルをindex.htmlと同じ場所に置きます。",
      "hrefの綴りとファイル名を一致させます。"
    ],
    "step": 10,
    "source": "<!DOCTYPE html>\n<html lang=\"ja\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>HTML5練習用サンプルページ</title>\n    <link rel=\"stylesheet\" href=\"cute.css\">\n</head>\n<body>\n    <header>\n        <h1>HTML5練習用サンプルページ</h1>\n        <nav aria-label=\"ページ内の案内\">\n            <ul>\n                <li><a href=\"#about\">このサイトについて</a></li>\n                <li><a href=\"#table\">比較表</a></li>\n                <li><a href=\"#images\">画像</a></li>\n                <li><a href=\"#form\">フォーム</a></li>\n            </ul>\n        </nav>\n    </header>\n    <main>\n        <section id=\"about\">\n            <h2>このサイトについて</h2>\n            <article>\n                <h3>このページで学ぶこと</h3>\n                <p>これはHTML5を練習するためのサンプルページです。<br>少しずつ内容を増やします。</p>\n                <hr>\n                <p>このページには、次の要素が含まれます。</p>\n                <ul>\n                    <li>見出しと段落</li>\n                    <li>リスト</li>\n                    <li>表・画像・フォーム</li>\n                </ul>\n            </article>\n        </section>\n\n        <section id=\"lists\">\n            <h2>リストの練習</h2>\n            <h3>番号なしリスト</h3>\n            <ul>\n                <li>りんご</li>\n                <li>バナナ</li>\n                <li>オレンジ</li>\n            </ul>\n            <h3>番号付きリスト</h3>\n            <ol>\n                <li>HTMLを学ぶ</li>\n                <li>CSSを学ぶ</li>\n                <li>JavaScriptを学ぶ</li>\n                <li>実際のサイトを作る</li>\n            </ol>\n        </section>\n\n        <section id=\"table\">\n            <h2>比較表</h2>\n            <h3>言語と技術の比較表</h3>\n            <table>\n                <caption>Web制作で使う言語と技術</caption>\n                <thead>\n                    <tr><th scope=\"col\">名前</th><th scope=\"col\">難易度</th><th scope=\"col\">用途</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td>HTML</td><td>初級</td><td>Webページの構造</td></tr>\n                    <tr><td>CSS</td><td>初級</td><td>Webページのデザイン</td></tr>\n                    <tr><td>JavaScript</td><td>中級</td><td>Webページの動き</td></tr>\n                    <tr><td>Python</td><td>初級〜中級</td><td>データ分析など</td></tr>\n                </tbody>\n            </table>\n            <p>HTMLとCSSはプログラミング言語ではありませんが、Web制作でよく使います。</p>\n        </section>\n\n        <section id=\"images\">\n            <h2>画像の練習</h2>\n            <article>\n                <h3>サンプル画像1</h3>\n                <img src=\"images/sample1.jpg\" alt=\"青い空と山のイラスト\" width=\"400\" height=\"300\">\n                <p>幅400px、高さ300pxの画像です。</p>\n            </article>\n            <article>\n                <h3>サンプル画像2</h3>\n                <img src=\"images/sample2.jpg\" alt=\"花が咲く庭のイラスト\" width=\"300\" height=\"200\">\n                <p>幅300px、高さ200pxの画像です。</p>\n            </article>\n            <article>\n                <h3>画像とリンクの組み合わせ</h3>\n                <a href=\"images/sample3.jpg\" target=\"_blank\" rel=\"noopener\">\n                    <img src=\"images/sample3.jpg\" alt=\"海辺の灯台のイラストを別のタブで開く\" width=\"250\" height=\"150\">\n                </a>\n                <p>画像をクリックすると、別のタブで画像が開きます。</p>\n            </article>\n        </section>\n\n        <section id=\"form\">\n            <h2>フォームの練習</h2>\n            <p>送信先のない練習用フォームです。個人情報は入力しないでください。</p>\n            <form onsubmit=\"return false;\">\n                <p><label for=\"name\">お名前：</label><br><input type=\"text\" id=\"name\" name=\"name\" placeholder=\"山田太郎\"></p>\n                <p><label for=\"email\">メールアドレス：</label><br><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"example@email.com\"></p>\n                <p><label for=\"age\">年齢：</label><br><input type=\"number\" id=\"age\" name=\"age\" min=\"0\" max=\"120\"></p>\n                <fieldset>\n                    <legend>好きな色</legend>\n                    <input type=\"radio\" id=\"red\" name=\"color\" value=\"red\"><label for=\"red\">赤</label>\n                    <input type=\"radio\" id=\"blue\" name=\"color\" value=\"blue\"><label for=\"blue\">青</label>\n                    <input type=\"radio\" id=\"green\" name=\"color\" value=\"green\"><label for=\"green\">緑</label>\n                </fieldset>\n                <p><input type=\"checkbox\" id=\"agree\" name=\"agree\"><label for=\"agree\">練習用の確認にチェックする</label></p>\n                <p><label for=\"message\">メッセージ：</label><br><textarea id=\"message\" name=\"message\" rows=\"4\" cols=\"40\" placeholder=\"練習用の文章を入力\"></textarea></p>\n                <button type=\"submit\">送信（練習）</button>\n                <button type=\"reset\">リセット</button>\n            </form>\n        </section>\n\n        <section id=\"finish\">\n            <h2>完成チェック</h2>\n            <p>見出しからフォームまで、1つのHTMLにまとめました。</p>\n        </section>\n        <aside>\n            <h2>補足情報</h2>\n            <p>このページはHTML5の練習用です。次はCSSで見た目を整えましょう。</p>\n        </aside>\n    </main>\n    <footer>\n        <p>&copy; HTML5練習サイト</p>\n        <p>連絡先：<a href=\"mailto:info@example.com\">info@example.com</a></p>\n    </footer>\n</body>\n</html>\n",
    "note": ""
  }
];
