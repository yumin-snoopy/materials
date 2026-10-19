"use strict";
const $ = id => document.getElementById(id);
const categories = [...new Set(REFERENCE.map(item => item.category))];
let current = REFERENCE[0];
const escapeHtml = value => value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
function highlight(code) {
  return code.split(/(<!--[\s\S]*?-->|<!DOCTYPE[^>]*>|<\/?[A-Za-z][^>]*>)/gi).map(part => {
    if (/^<!--/.test(part)) return `<span class="comment-code">${escapeHtml(part)}</span>`;
    if (/^</.test(part)) return `<span class="tag-code">${escapeHtml(part)}</span>`;
    return escapeHtml(part);
  }).join('');
}
function syncHighlight() {
  $('highlight').innerHTML = highlight($('editor').value) + '\n';
  $('highlight').scrollTop = $('editor').scrollTop;
  $('highlight').scrollLeft = $('editor').scrollLeft;
}
function previewHtml(code) {
  // Scripts and forms have no sandbox allowances. CSP also blocks external content.
  const guard = `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src 'self' data:; style-src 'unsafe-inline'; form-action 'none'; base-uri 'none'">`;
  const previewStyle = '<style>body{font-family:serif;font-size:16px;color:#202c35;margin:18px;line-height:1.45}table{border-collapse:collapse}th,td{padding:5px 9px}input,select,textarea{font:inherit}figure{margin:1em 0}</style>';
  // Append protective head content even when the sample is a complete document.
  if (/<head(?:\s[^>]*)?>/i.test(code)) return code.replace(/<head(?:\s[^>]*)?>/i, match => match + guard + previewStyle);
  return `<!doctype html><html lang="ja"><head><meta charset="utf-8">${guard}${previewStyle}</head><body>${code}</body></html>`;
}
function updatePreview() {
  syncHighlight();
  if (current.hidden) {
    $('preview-note').textContent = 'ブラウザの画面には直接表示されません。コードの中での役割を確認してください。';
    $('preview').hidden = true;
    $('preview').removeAttribute('srcdoc');
    return;
  }
  $('preview-note').textContent = current.name.startsWith('<form') || current.name.startsWith('<input') ? '入力や選択は試せます。送信は安全のため無効です。' : '入力したコードがここに反映されます。';
  $('preview').hidden = false;
  $('preview').srcdoc = previewHtml($('editor').value);
}
function renderMenu() {
  const query = $('search').value.trim().toLocaleLowerCase();
  const visible = REFERENCE.filter(item => `${item.name} ${item.meaning} ${item.description}`.toLocaleLowerCase().includes(query));
  $('search-count').textContent = `${visible.length} / ${REFERENCE.length} 項目`;
  $('menu').replaceChildren();
  for (const category of categories) {
    const items = visible.filter(item => item.category === category);
    if (!items.length) continue;
    const details = document.createElement('details');
    details.open = query !== '' || category === current.category;
    const summary = document.createElement('summary');
    summary.textContent = category;
    const count = document.createElement('small');
    count.textContent = String(items.length);
    summary.append(count);
    const list = document.createElement('div');
    list.className = 'menu-items';
    for (const item of items) {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = item.name;
      button.classList.toggle('active', item === current);
      button.setAttribute('aria-current', item === current ? 'true' : 'false');
      button.addEventListener('click', () => selectItem(item));
      list.append(button);
    }
    details.append(summary,list);
    $('menu').append(details);
  }
}
function selectItem(item) {
  current = item;
  $('category-tag').textContent = item.category;
  $('item-index').textContent = `${REFERENCE.indexOf(item) + 1} / ${REFERENCE.length}`;
  $('item-title').textContent = item.name;
  $('item-meaning').textContent = item.meaning;
  $('description').textContent = item.description;
  $('attribute-section').hidden = !item.attrs?.length;
  $('attributes').replaceChildren();
  for (const attribute of item.attrs || []) {
    const row = document.createElement('div'); row.className = 'value-row';
    const name = document.createElement('dt'); name.textContent = attribute.name;
    const detail = document.createElement('dd'); detail.textContent = `${attribute.meaning}　例：${attribute.example}`;
    row.append(name, detail); $('attributes').append(row);
  }
  $('editor').value = item.code;
  $('editor').scrollTop = 0;
  $('editor').scrollLeft = 0;
  $('status').textContent = '';
  updatePreview();
  renderMenu();
  if (matchMedia('(max-width: 800px)').matches) {
    $('sidebar').classList.remove('open');
    $('menu-toggle').setAttribute('aria-expanded', 'false');
    $('main').focus();
  }
}
$('search').addEventListener('input', renderMenu);
$('editor').addEventListener('input', updatePreview);
$('editor').addEventListener('scroll', syncHighlight);
$('editor').addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;
  event.preventDefault();
  const editor = event.currentTarget;
  const start = editor.selectionStart;
  editor.setRangeText('  ', start, editor.selectionEnd, 'end');
  updatePreview();
});
$('reset').addEventListener('click', () => {
  $('editor').value = current.code;
  $('status').textContent = '最初のコードに戻しました。';
  updatePreview();
});
$('copy').addEventListener('click', async () => {
  try {
    if (navigator.clipboard?.writeText) await navigator.clipboard.writeText($('editor').value);
    else {
      $('editor').focus(); $('editor').select();
      if (!document.execCommand('copy')) throw new Error('copy failed');
    }
    $('status').textContent = 'コードをコピーしました。';
  } catch { $('status').textContent = 'コピーできませんでした。コードを選択してコピーしてください。'; }
});
$('menu-toggle').addEventListener('click', () => {
  const open = $('sidebar').classList.toggle('open');
  $('menu-toggle').setAttribute('aria-expanded', String(open));
});
$('preview').addEventListener('load', () => {
  const frame = $('preview').contentDocument;
  if (!frame) return;
  frame.addEventListener('click', event => {
    const link = event.target.closest?.('a[href^="#"]');
    if (!link) return;
    const target = frame.getElementById(link.getAttribute('href').slice(1));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({block:'start'});
  });
});
selectItem(REFERENCE[0]);

