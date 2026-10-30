"use strict";
// 操作を抑制する補助機能です。公開ファイルの閲覧を完全に防ぐものではありません。
(() => {
  const guarded = new WeakSet();
  function install(target) {
    if (!target || guarded.has(target)) return;
    guarded.add(target);
    target.addEventListener('contextmenu', event => event.preventDefault(), {capture:true});
    target.addEventListener('keydown', event => {
      const key = String(event.key).toLowerCase();
      const ctrl = event.ctrlKey && !event.metaKey;
      const mac = event.metaKey && !event.ctrlKey;
      const devtools = (ctrl && event.shiftKey && ['i','j','c'].includes(key)) ||
        (mac && event.altKey && ['i','j','c'].includes(key));
      const source = (ctrl || mac) && key === 'u';
      if (key === 'f12' || devtools || source) event.preventDefault();
    }, {capture:true});
  }
  install(document);
  const preview = document.querySelector('#preview');
  const installInPreview = () => {
    try { install(preview.contentDocument); }
    catch { /* 別オリジンの文書にはアクセスできない */ }
  };
  preview.addEventListener('load', installInPreview);
  installInPreview();
})();

