# VBA IF文 読み解き練習 BASIC

VBAの `If` / `ElseIf` / `Else`、`And`、`Or` の読み方を練習するWebアプリです。

## Webアプリ

以下のURLから利用できます。

https://yumin-snoopy.github.io/materials/vba_if_practice/

## 主な機能

- 選択式の練習問題（10問）
- 正解・不正解の判定
- 各問題の解説表示
- 得点と進捗の表示
- `If / ElseIf`、`And`、`Or` の問題フィルター
- 問題ナビ
- 回答のリセット
- スマートフォン対応
- このページを開くためのQRコード表示

## 利用方法

1. 上記のWebアプリURLへアクセスします。
2. VBAコードを読み、表示される結果を選択します。
3. 回答すると、正解・不正解と解説が表示されます。
4. 10問すべて回答すると、最終結果が表示されます。

## ファイル構成

- `index.html`：画面の構成・右クリック抑止・CSS / JavaScriptの読み込み
- `style.css`：画面デザイン
- `script.js`：問題データ・判定処理・QRコード処理
- `qrcode.min.js`：QRコード生成用ライブラリ

## メンテナンスについて

問題文・選択肢・正解・解説を変更する場合は、`script.js` の `questions` 配列を編集します。

QRコードのリンク先を変更する場合は、`script.js` の `pageUrl` を編集します。

CSSとJavaScriptは、今後の修正がしやすいように読みやすい形式で管理しています。

`index.html` では `Date.now()` を利用し、`style.css` と `script.js` のURLに毎回異なる値を付けて読み込んでいます。これにより、ブラウザに古いCSSやJavaScriptが残っていても、更新後のファイルを読み込みやすくしています。

右クリック抑止は `index.html` 側で行っています。JavaScript側には、F12やショートカットキーを無効化するための処理は入れていません。
