(() => {
  const lessons = window.LESSONS;
  const $ = id => document.getElementById(id);
  const list = $('step-list');
  let current = 0;
  let view = 'addition';

  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function highlight(s) {
    let result = '';
    let last = 0;
    const re = /<!--[^]*?-->|<[^>]*>/g;
    for (const m of s.matchAll(re)) {
      result += '<span class="syntax-text">' + escapeHtml(s.slice(last, m.index)) + '</span>';
      if (m[0].startsWith('<!--')) {
        result += '<span class="syntax-comment">' + escapeHtml(m[0]) + '</span>';
      } else {
        const tag = escapeHtml(m[0]).replace(/([\w:-]+)(=)(&quot;[^]*?&quot;)/g,
          '<span class="syntax-attr">$1</span>$2<span class="syntax-value">$3</span>');
        result += '<span class="syntax-tag">' + tag + '</span>';
      }
      last = m.index + m[0].length;
    }
    result += '<span class="syntax-text">' + escapeHtml(s.slice(last)) + '</span>';
    return result;
  }
  function fillItems(id, items) {
    const host = $(id);
    host.replaceChildren();
    for (const item of items) {
      const li = document.createElement('li');
      li.textContent = item;
      host.append(li);
    }
  }
  function renderDiagram(step) {
    const d = $('diagram');
    d.replaceChildren();
    if (step === 3) d.innerHTML = '<strong>ページの領域</strong><div class="diagram-tree"><span>header：タイトルと案内</span><span class="indent">nav：ページ内の案内</span><span>main：中心の内容</span><span class="indent">section：話題ごとのまとまり</span><span class="deep">article：独立した記事</span><span class="indent">aside：補足</span><span>footer：末尾の情報</span></div>';
    if (step === 5) d.innerHTML = '<strong>ページ内リンクの対応</strong><div class="diagram-row"><span class="diagram-box">href="#table"</span><span class="diagram-arrow">→ #を除いた文字が一致 →</span><span class="diagram-box">id="table"</span></div><p>クリックすると、同じページの「比較表」へ移動します。</p>';
    if (step === 6) d.innerHTML = '<strong>表の行と列</strong><div class="diagram-tree"><span>table：表全体</span><span class="indent">thead → tr → th（見出しの横1行）</span><span class="indent">tbody → tr → td（データの横1行）</span></div><p>同じ位置のセルが縦の列になります。</p>';
    if (step === 7) d.innerHTML = '<strong>画像の相対パス</strong><div class="diagram-tree"><span>index.html</span><span>images フォルダ</span><span class="indent">sample1.jpg / sample2.jpg / sample3.jpg</span></div><p>src="images/sample1.jpg" は、index.html の隣の images フォルダにある画像を指します。</p>';
  }
  function render() {
    const lesson = lessons[current];
    $('step-count').textContent = `STEP ${lesson.step} / ${lessons.length}`;
    $('step-title').textContent = lesson.title;
    $('goal').textContent = lesson.goal;
    $('placement').textContent = lesson.placement;
    $('extra-note').textContent = lesson.note;
    $('extra-note').hidden = !lesson.note;
    $('progress').value = lesson.step;
    $('progress-label').textContent = `全${lessons.length}ステップ中 ${lesson.step}ステップ目`;
    $('code').innerHTML = highlight(view === 'addition' ? lesson.snippet : lesson.source);
    $('copy-status').textContent = '';
    $('addition-tab').classList.toggle('selected', view === 'addition');
    $('whole-tab').classList.toggle('selected', view === 'whole');
    $('addition-tab').setAttribute('aria-pressed', String(view === 'addition'));
    $('whole-tab').setAttribute('aria-pressed', String(view === 'whole'));
    $('terms').replaceChildren();
    for (const [name, desc] of lesson.terms) {
      const dt = document.createElement('dt'); dt.textContent = name;
      const dd = document.createElement('dd'); dd.textContent = desc;
      $('terms').append(dt, dd);
    }
    fillItems('tasks', lesson.tasks);
    fillItems('answer-list', lesson.answers);
    fillItems('mistakes', lesson.mistakes);
    $('answers').open = false;
    // srcdoc resolves #links against the parent page URL. Keep navigation
    // inside the preview without changing the code students type.
    const previewNavigation = `<script>document.addEventListener('click', event => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;
      const target = document.getElementById(link.getAttribute('href').slice(1));
      if (target) { event.preventDefault(); target.scrollIntoView(); }
    });<\/script>`;
    $('preview').srcdoc = lesson.source.replace('</body>', previewNavigation + '</body>');
    renderDiagram(lesson.step);
    $('prev').disabled = current === 0;
    $('next').disabled = current === lessons.length - 1;
    for (const [i, button] of [...list.querySelectorAll('button')].entries()) {
      button.classList.toggle('active', i === current);
      if (i === current) button.setAttribute('aria-current', 'step');
      else button.removeAttribute('aria-current');
    }
  }
  function go(index) {
    current = Math.max(0, Math.min(lessons.length - 1, index));
    view = 'addition';
    render();
    history.replaceState(null, '', `#step-${current + 1}`);
    $('main-content').scrollIntoView({block: 'start'});
  }
  lessons.forEach((lesson, i) => {
    const li = document.createElement('li');
    const b = document.createElement('button');
    b.type = 'button'; b.textContent = `${lesson.step}. ${lesson.title}`;
    b.addEventListener('click', () => go(i));
    li.append(b); list.append(li);
  });
  $('prev').addEventListener('click', () => go(current - 1));
  $('next').addEventListener('click', () => go(current + 1));
  $('addition-tab').addEventListener('click', () => { view = 'addition'; render(); });
  $('whole-tab').addEventListener('click', () => { view = 'whole'; render(); });
  $('copy-code').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(view === 'addition' ? lessons[current].snippet : lessons[current].source);
      $('copy-status').textContent = 'コードをコピーしました。手入力での確認にも使ってください。';
    } catch {
      $('copy-status').textContent = 'コピーできませんでした。コードを選択してコピーしてください。';
    }
  });
  const hashStep = Number(location.hash.match(/^#step-(\d+)$/)?.[1]);
  current = hashStep >= 1 && hashStep <= lessons.length ? hashStep - 1 : 0;
  render();
})();
