# JavaScriptサンプル集

HTML・CSSを学んだ人が、Webページに動きを追加するための教材です。15種類のサンプルを画面で操作し、必要なHTML・CSS・JavaScriptをコピーできます。JavaScriptの基本構文をすべて覚えることより、動きを確認して作品へ組み込むことを重視しています。

## 対象者

HTMLとCSSで基本的なWebページを作ったことがある初学者。

## 掲載している機能

- 基本操作：メッセージ表示、文字変更、色変更、表示・非表示
- Webページでよく使う機能：ハンバーガーメニュー、タブ、アコーディオン、画像切り替え、先頭に戻るボタン
- フォーム関連：名前の表示、入力必須チェック、文字数カウンター
- 便利な機能：現在の日時、足し算、おみくじ

## 使い方

1. 左のメニューからサンプルを選びます。スマートフォンでは「サンプル一覧を開く」を押します。検索もできます。
2. プレビューで動きを試します。ハンバーガーメニューは幅を切り替えて確認できます。
3. HTML・CSS・JavaScriptのタブからコードをコピーします。CSSが不要なサンプルもあります。
4. HTMLを自分のページの `<body>` 内へ、CSSを `css/style.css` へ、JavaScriptを `js/script.js` へ追加します。
5. HTMLの `<head>` 内で `<script src="js/script.js" defer></script>` を読み込みます。ファイルの場所が異なる場合はパスを変えます。

各サンプルのコードは独立した関数にまとめてあります。複数使う場合も、HTMLのIDを変える際は対応するJavaScriptのセレクターを同じ名前に変更してください。

教材ページでは一般的なソース確認操作を抑制していますが、公開されたファイルの閲覧を完全に防ぐ仕組みではありません。

## ファイル構成

```text
javascript_samples/
├── index.html
├── css/style.css
├── js/script.js
├── js/samples.js
├── js/guard.js
└── README.md
```

`js/samples.js` に表示用のサンプルコードと説明を、`js/script.js` に教材画面の操作を分けています。`js/guard.js` は教材画面とプレビューで一般的なソース確認操作を抑制します。

## 公開ページ

https://yumin-snoopy.github.io/materials/web/javascript_samples/

