# 教材

学習用の教材をまとめたリポジトリです。

[教材一覧（公開ページ）](https://yumin-snoopy.github.io/materials/)

## 収録内容

- [VBA/](./VBA/) — VBA基礎練習・VBAエキスパート対策（[教材一覧](https://yumin-snoopy.github.io/materials/VBA/)）
- [fe/](./fe/) — 基本情報技術者 科目Bのソート・配列処理、情報セキュリティ（[教材一覧](https://yumin-snoopy.github.io/materials/fe/)）
  - [鍵と証明書の動きを見る](./fe/pki_visual/) — 暗号方式・署名・証明書・PKI
  - [ハッシュ値確認](./fe/hash_demo/) — 文字列とファイルのハッシュ値を比べる体験教材
- [web/slideshow/](./web/slideshow/) — スライドショー教材（[教材を開く](https://yumin-snoopy.github.io/materials/web/slideshow/)）
- [web/css_samples/](./web/css_samples/) — CSSデザインサンプル集。12カテゴリ・100種類の見本からHTMLとCSSをコピーできます（[教材を開く](https://yumin-snoopy.github.io/materials/web/css_samples/)）

VBA教材と共通ファイルは `VBA/` 内に追加します。

## 閲覧抑止の方針

各教材HTMLから相対パスで共通のソース表示操作抑止スクリプトを読み込み、右クリックとF12・Ctrl/Cmd+U・代表的な開発者ツールのショートカットを抑止します。教材本体のCSS・JavaScriptは外部ファイルへ分離します。スライドショーとCSSデザインサンプル集は、学習に必要なコード表示・コピー機能を備えています（AGENTS.mdを参照）。

これは簡易的な抑止であり、完全なソース保護ではありません。ブラウザのメニューや設定で開く開発者ツール、直接のファイル取得は防げません。開発者ツール検知ループ・ページ強制終了・debuggerの連続実行は使用しません。
