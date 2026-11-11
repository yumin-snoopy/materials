/* Browser-only glossary. No external requests, dependencies, or account. */
'use strict';
(() => {
  const $ = (id) => document.getElementById(id);
  const normalize = (value) => value.normalize('NFKC').toLowerCase().replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0)-0x60)).replace(/[\s・･\-–—ー_（）()]/g, '');
  const terms = [...document.querySelectorAll('.term')].map((node) => ({ node, id:node.id, chapter:Number(node.dataset.chapter), category:node.dataset.category, core:node.dataset.core==='true', search:normalize(node.dataset.search) }));
  const storageKey = 'ai-passport-glossary-v1-bookmarks';
  let marked = new Set();
  let saved = true;
  try { const parsed=JSON.parse(localStorage.getItem(storageKey)||'[]'); if(Array.isArray(parsed)) marked=new Set(parsed.filter((id)=>terms.some((t)=>t.id===id))); } catch { saved=false; }
  let chapter=0;
  let expanded=false;
  let printSnapshot=[];
  function storageNotice(){ if(!saved && $('storage-note')) $('storage-note').textContent='このブラウザーでは保存機能を利用できません。復習マークは、この画面を開いている間だけ使えます。'; }
  function syncMarks(){
    for (const t of terms){ const b=t.node.querySelector('.bookmark');const yes=marked.has(t.id);b.setAttribute('aria-pressed',String(yes));b.textContent=yes?'復習に登録済み':'あとで復習';b.setAttribute('aria-label',t.node.querySelector('h3').textContent+(yes?'をあとで復習から外す':'をあとで復習に登録')); }
    $('marked-count').textContent=String(marked.size);
  }
  function setCategories(){
    const previous=$('category').value;
    const categories=[...new Set(terms.filter((t)=>!chapter||t.chapter===chapter).map((t)=>t.category))];
    $('category').replaceChildren(new Option('すべてのテーマ',''),...categories.map((c)=>new Option(c,c)));
    if(categories.includes(previous)) $('category').value=previous;
  }
  function applyFilters(){
    const words=$('search').value.trim().split(/\s+/u).filter(Boolean).map(normalize);
    const category=$('category').value;
    let total=0;
    for(const t of terms){
      const visible=(!chapter||t.chapter===chapter)&&(!category||t.category===category)&&(!$('core-only').checked||t.core)&&(!$('marked-only').checked||marked.has(t.id))&&words.every((word)=>t.search.includes(word));
      t.node.hidden=!visible;if(visible) total++;
    }
    let visibleGroupIndex=0;
    for(const group of document.querySelectorAll('.chapter-group')){
      const count=terms.filter((t)=>t.chapter===Number(group.dataset.group)&&!t.node.hidden).length;
      group.hidden=count===0;group.querySelector('.group-count').textContent=count+'項目';
      group.dataset.firstVisible=String(count>0&&visibleGroupIndex===0);if(count>0)visibleGroupIndex++;
    }
    const scope=chapter?'第'+chapter+'章':'すべての章';
    $('result-status').textContent=scope+'：'+total+' / '+terms.length+'項目を表示';
    $('print-scope').textContent=scope+' / '+(category||'すべてのテーマ')+($('core-only').checked?' / はじめの一歩':'')+($('marked-only').checked?' / あとで復習':'')+($('search').value.trim()?' / 検索：'+$('search').value.trim():'')+' / '+total+'項目';
    $('empty').hidden=total!==0;
    if($('print')) $('print').disabled=total===0;
    for(const b of document.querySelectorAll('[data-chapter-filter]')) b.setAttribute('aria-pressed',String(Number(b.dataset.chapterFilter)===chapter));
  }
  for(const b of document.querySelectorAll('[data-chapter-filter]')) b.addEventListener('click',()=>{chapter=Number(b.dataset.chapterFilter);$('category').value='';setCategories();applyFilters();});
  $('search').addEventListener('input',applyFilters);
  for(const id of ['category','core-only','marked-only']) $(id).addEventListener('change',applyFilters);
  $('clear-search').addEventListener('click',()=>{$('search').value='';applyFilters();$('search').focus();});
  $('reset-all').addEventListener('click',()=>{chapter=0;$('search').value='';$('category').value='';$('core-only').checked=false;$('marked-only').checked=false;setCategories();applyFilters();$('search').focus();});
  $('results').addEventListener('click',(event)=>{
    const button=event.target.closest('[data-bookmark]');if(!button)return;
    const id=button.dataset.bookmark;if(marked.has(id))marked.delete(id);else marked.add(id);
    try{localStorage.setItem(storageKey,JSON.stringify([...marked]));}catch{saved=false;storageNotice();}
    syncMarks();applyFilters();
  });
  $('expand-all')?.addEventListener('click',()=>{expanded=!expanded;for(const t of terms) t.node.querySelector('details').open=expanded;$('expand-all').textContent=expanded?'ポイントをすべて閉じる':'ポイントをすべて開く';$('expand-all').setAttribute('aria-pressed',String(expanded));});
  window.addEventListener('beforeprint',()=>{printSnapshot=terms.map((t)=>t.node.querySelector('details').open);for(const t of terms)t.node.querySelector('details').open=true;});
  window.addEventListener('afterprint',()=>{terms.forEach((t,i)=>t.node.querySelector('details').open=Boolean(printSnapshot[i]));});
  $('print')?.addEventListener('click',()=>window.print());
  document.addEventListener('keydown',(event)=>{if(event.key==='/'&&!/input|textarea|select/i.test(document.activeElement.tagName)){event.preventDefault();$('search').focus();}});
  storageNotice();syncMarks();setCategories();applyFilters();
})();
