# 教材

学習用の教材をまとめたリポジトリです。

[教材一覧（公開ページ）](https://yumin-snoopy.github.io/materials/)

## 収録内容

- [VBA/](./VBA/) — VBA基礎練習・VBAエキスパート対策（[教材一覧](https://yumin-snoopy.github.io/materials/VBA/)）
- [fe/](./fe/) — 基本情報技術者 科目Bのソート・配列処理（[教材一覧](https://yumin-snoopy.github.io/materials/fe/)）
- [slideshow/](./slideshow/) — スライドショー教材
- [security/hash_demo/](./security/hash_demo/) — ハッシュ値確認の体験教材

VBA教材と共通ファイルは `VBA/` 内に追加します。

## 閲覧抑止の方針

すべての教材HTMLで `assets/source-guard.js` を読み込み、右クリックとF12・Ctrl/Cmd+U・代表的な開発者ツールのショートカットを抑止します。HTML内のCSS・JavaScriptは外部ファイルへ分離し、HTMLの余分な改行・空白を減らします。スライドショーは生徒がまねできるようにする例外です。「ソースを表示」ボタン、読みやすいコード、コピー範囲の目印を維持します。新規教材にも同じ方針を適用します（AGENTS.mdを参照）。

これは簡易的な抑止であり、完全なソース保護ではありません。ブラウザのメニューや設定で開く開発者ツール、直接のファイル取得は防げません。開発者ツール検知ループ・ページ強制終了・debuggerの連続実行は使用しません。
