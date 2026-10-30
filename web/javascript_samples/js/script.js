"use strict";
(() => {
  const samples = window.javascriptSamples;
  const menu = document.querySelector('#menu');
  const search = document.querySelector('#search');
  const frame = document.querySelector('#preview');
  const code = document.querySelector('#code');
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  let selected = 0;
  let kind = 'html';

  function renderMenu() {
    const query = search.value.trim().toLocaleLowerCase();
    const matches = samples.map((sample, index) => ({sample, index})).filter(({sample}) =>
      [sample.title, sample.group, sample.description, sample.usage].join(' ').toLocaleLowerCase().includes(query));
    menu.replaceChildren();
    for (const group of [...new Set(matches.map(({sample}) => sample.group))]) {
      const section = document.createElement('section');
      section.className = 'menu-group';
      const heading = document.createElement('h2');
      heading.textContent = group;
      section.append(heading);
      for (const {sample, index} of matches.filter(item => item.sample.group === group)) {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = sample.title;
        button.setAttribute('aria-current', String(index === selected));
        button.addEventListener('click', () => {
          selected = index;
          showSample();
          if (matchMedia('(max-width: 800px)').matches) setMenuOpen(false);
          document.querySelector('#main').focus();
        });
        section.append(button);
      }
      menu.append(section);
    }
    document.querySelector('#search-count').textContent = `${matches.length}件のサンプル`;
  }

  function showCode() {
    const sample = samples[selected];
    code.textContent = sample[kind] || 'このサンプルでは追加のCSSは不要です。';
    document.querySelector('#code-label').textContent = {html:'HTML',css:'CSS',js:'JavaScript'}[kind];
    tabs.forEach(tab => { tab.setAttribute('aria-selected', String(tab.dataset.kind === kind)); tab.tabIndex = tab.dataset.kind === kind ? 0 : -1; });
    document.querySelector('#copy-status').textContent = '';
  }

  function showSample() {
    const sample = samples[selected];
    for (const [id, value] of Object.entries({category:sample.group,number:`${selected + 1} / ${samples.length}`,title:sample.title,description:sample.description,usage:sample.usage,explanation:sample.explanation,customize:sample.customize})) document.getElementById(id).textContent = value;
    frame.title = `${sample.title}のプレビュー`;
    frame.classList.remove('narrow');
    document.querySelector('#preview-options').replaceChildren();
    if (sample.mobilePreview) {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = 'スマートフォン幅で試す';
      button.addEventListener('click', () => {
        const narrow = frame.classList.toggle('narrow');
        button.textContent = narrow ? 'パソコン幅で試す' : 'スマートフォン幅で試す';
      });
      document.querySelector('#preview-options').append(button);
    }
    // 各見本を独立した文書で動かし、IDやCSSの衝突を避ける。
    frame.srcdoc = `<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font:16px/1.6 system-ui,sans-serif;margin:20px;color:#263446}button,input,textarea{font:inherit}button{cursor:pointer}button:focus-visible,input:focus-visible,textarea:focus-visible{outline:3px solid #76bdd9;outline-offset:2px}${sample.css}</style></head><body>${sample.html}<script>${sample.js.replaceAll('</script', '<\\/script')}<\/script></body></html>`;
    showCode(); renderMenu();
  }

  function setMenuOpen(open) {
    document.querySelector('#sidebar').classList.toggle('open', open);
    const toggle = document.querySelector('#menu-toggle');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'サンプル一覧を閉じる' : 'サンプル一覧を開く';
  }

  document.querySelector('#menu-toggle').addEventListener('click', () => setMenuOpen(!document.querySelector('#sidebar').classList.contains('open')));
  search.addEventListener('input', renderMenu);
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {kind = tab.dataset.kind; showCode();});
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft','ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const next = (index + (event.key === 'ArrowRight' ? 1 : 2)) % tabs.length;
      tabs[next].click(); tabs[next].focus();
    });
  });
  document.querySelector('#copy').addEventListener('click', async () => {
    const value = samples[selected][kind];
    const status = document.querySelector('#copy-status');
    if (!value) {status.textContent = '追加するコードはありません';return;}
    try {
      if (navigator.clipboard?.writeText && window.isSecureContext) await navigator.clipboard.writeText(value);
      else {
        const area = document.createElement('textarea'); area.value = value; area.style.position = 'fixed'; area.style.left = '-9999px'; document.body.append(area); area.select();
        const copied = document.execCommand('copy'); area.remove(); if (!copied) throw new Error('copy failed');
      }
      status.textContent = 'コピーしました';
    } catch { status.textContent = 'コピーできませんでした。コードを選択してコピーしてください。'; }
  });
  showSample();
})();

