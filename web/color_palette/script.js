const roles = ['背景向け','メインカラー','アクセント'];
const storeKey = 'color-palette-favorites-v1';
const byId = id => document.getElementById(id);
const state = {family:COLOR_FAMILIES[0],selected:COLOR_FAMILIES[0].palettes[0],colors:[],favorites:new Set(),favoritesOnly:false};
let toastTimer;

try {
  const saved = JSON.parse(localStorage.getItem(storeKey) || '[]');
  if (Array.isArray(saved)) state.favorites = new Set(saved.filter(id => typeof id === 'string'));
} catch { /* 保存できない環境でも教材は使える */ }

function element(tag,className,textValue) {
  const item = document.createElement(tag);
  if (className) item.className = className;
  if (textValue !== undefined) item.textContent = textValue;
  return item;
}

function notify(message) {
  const toast = byId('toast');
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'),2600);
}

async function copyText(value,message) {
  try {
    await navigator.clipboard.writeText(value);
    notify(message);
  } catch {
    notify('コピーできませんでした。カラーコードを選択してコピーしてください。');
  }
}

function codeButton(code) {
  const button = element('button','code-button',code);
  button.type = 'button';
  button.title = `${code} をコピー`;
  button.setAttribute('aria-label',`${code} をコピー`);
  button.addEventListener('click',() => copyText(code,`${code} をコピーしました`));
  return button;
}

function renderTabs() {
  for (const targetId of ['swatch-tabs','palette-tabs']) {
    const target = byId(targetId);
    target.replaceChildren();
    for (const family of COLOR_FAMILIES) {
      const button = element('button','tab',family.label);
      button.type = 'button';
      button.setAttribute('aria-pressed',String(family.id===state.family.id));
      button.addEventListener('click',() => {
        if (family.id===state.family.id) return;
        state.family=family;
        selectPalette(family.palettes[0],false);
        renderTabs();
        renderSwatches();
        renderPalettes();
      });
      target.append(button);
    }
  }
}

function renderSwatches() {
  byId('swatch-heading').textContent=`${state.family.label}｜${state.family.colors.length}色`;
  const grid=byId('swatch-grid');
  grid.replaceChildren();
  for (const [name,code] of state.family.colors) {
    const card=element('article','swatch-card');
    const color=element('div','swatch-color');
    color.style.backgroundColor=code;
    const info=element('div','swatch-info');
    info.append(element('span','swatch-name',name),codeButton(code));
    card.append(color,info);
    grid.append(card);
  }
}

function renderPalettes() {
  byId('palette-heading').textContent=`${state.family.label}｜${state.family.palettes.length}パターン`;
  const grid=byId('palette-grid');
  grid.replaceChildren();
  const palettes=state.family.palettes.filter(palette => !state.favoritesOnly || state.favorites.has(palette.id));
  if (!palettes.length) {
    grid.append(element('p','empty-message','この色系統には、まだお気に入りがありません。☆ を押して登録できます。'));
    return;
  }
  for (const palette of palettes) {
    const card=element('article','palette-card');
    if (palette.id===state.selected.id) card.classList.add('is-selected');
    const heading=element('div','palette-card-heading');
    const text=element('div');
    text.append(element('h3','',palette.name),element('p','palette-subtitle',state.family.label));
    const favorite=element('button','favorite-button',state.favorites.has(palette.id)?'★':'☆');
    favorite.type='button';
    favorite.title=state.favorites.has(palette.id)?'お気に入りを解除':'お気に入りに登録';
    favorite.setAttribute('aria-label',favorite.title);
    favorite.setAttribute('aria-pressed',String(state.favorites.has(palette.id)));
    favorite.addEventListener('click',() => {
      if (state.favorites.has(palette.id)) state.favorites.delete(palette.id);
      else state.favorites.add(palette.id);
      try { localStorage.setItem(storeKey,JSON.stringify([...state.favorites])); }
      catch { notify('お気に入りを保存できませんでした。'); }
      renderPalettes();
    });
    heading.append(text,favorite);
    const strip=element('div','palette-strip');
    const codes=element('div','palette-codes');
    palette.colors.forEach((code,index) => {
      const block=element('span');
      block.style.backgroundColor=code;
      block.title=`${roles[index]} ${code}`;
      strip.append(block);
      const item=element('div');
      item.append(element('small','',roles[index]),codeButton(code));
      codes.append(item);
    });
    const select=element('button','select-button',palette.id===state.selected.id?'プレビュー中':'この配色を試す');
    select.type='button';
    select.addEventListener('click',() => selectPalette(palette,true));
    card.append(heading,strip,codes,select);
    grid.append(card);
  }
}

function selectPalette(palette,refreshCards) {
  state.selected=palette;
  state.colors=[...palette.colors];
  renderControls();
  updatePreview();
  if (refreshCards) renderPalettes();
}

function renderControls() {
  byId('selected-title').textContent=state.selected.name;
  byId('selected-family').textContent=state.family.label;
  const controls=byId('color-controls');
  controls.replaceChildren();
  roles.forEach((role,index) => {
    const control=element('label','color-control');
    const picker=document.createElement('input');
    picker.type='color';
    picker.value=state.colors[index];
    picker.setAttribute('aria-label',`${role}の色を変更`);
    const detail=element('div');
    const updateDetail=() => detail.replaceChildren(element('span','',role),codeButton(state.colors[index]));
    picker.addEventListener('input',() => {
      state.colors[index]=picker.value.toUpperCase();
      updateDetail();
      updatePreview();
    });
    updateDetail();
    control.append(picker,detail);
    controls.append(control);
  });
}

function rgb(hex) { return [1,3,5].map(index => parseInt(hex.slice(index,index+2),16)); }
function luminance(hex) {
  const channels=rgb(hex).map(value => {
    const s=value/255;
    return s<=.04045?s/12.92:((s+.055)/1.055)**2.4;
  });
  return channels[0]*.2126+channels[1]*.7152+channels[2]*.0722;
}
function contrast(a,b) {
  const values=[luminance(a),luminance(b)].sort((x,y)=>y-x);
  return (values[0]+.05)/(values[1]+.05);
}
function textOn(background) { return contrast(background,'#17232B')>=contrast(background,'#FFFFFF')?'#17232B':'#FFFFFF'; }

function updatePreview() {
  const [background,main,accent]=state.colors;
  const preview=byId('site-preview');
  const bodyText=textOn(background);
  const cardBackground=contrast(background,'#FFFFFF')>1.5?'#FFFFFF':(luminance(background)>.5?'#F5F6F7':'#24313B');
  preview.style.setProperty('--page',background);
  preview.style.setProperty('--main',main);
  preview.style.setProperty('--accent',accent);
  preview.style.setProperty('--body',bodyText);
  preview.style.setProperty('--button-text',textOn(accent));
  preview.style.setProperty('--card',cardBackground);
  preview.style.setProperty('--card-text',textOn(cardBackground));
  const low=[];
  if (contrast(main,background)<4.5) low.push('見出しと背景');
  if (contrast(main,cardBackground)<4.5) low.push('カードの見出しとカード背景');
  const warning=byId('contrast-warning');
  warning.hidden=low.length===0;
  warning.textContent=low.length?`読みやすさの注意：${low.join('・')}の色の差が小さく、文字が読みにくい可能性があります。色を変更して試してください。`:'';
}

byId('favorites-filter').addEventListener('click',event => {
  state.favoritesOnly=!state.favoritesOnly;
  event.currentTarget.setAttribute('aria-pressed',String(state.favoritesOnly));
  event.currentTarget.textContent=state.favoritesOnly?'★ すべて表示する':'☆ お気に入りだけ表示';
  renderPalettes();
});
byId('copy-all').addEventListener('click',() => copyText(state.colors.map((code,index)=>`${roles[index]}: ${code}`).join('\n'),'3色のコードをコピーしました'));
byId('reset-colors').addEventListener('click',() => {state.colors=[...state.selected.colors];renderControls();updatePreview();notify('元の配色に戻しました');});

// 教材の基本操作を妨げない範囲で、指定されたブラウザ操作を抑止します。
document.addEventListener('contextmenu',event => event.preventDefault());
document.addEventListener('keydown',event => {
  const key=event.key.toLowerCase();
  const ctrl=event.ctrlKey&&!event.metaKey;
  const mac=event.metaKey&&!event.ctrlKey;
  const devtools=(ctrl&&event.shiftKey&&['i','j','c'].includes(key)) || (mac&&event.altKey&&['i','j','c'].includes(key));
  const source=(ctrl&&key==='u') || (mac&&key==='u');
  if (key==='f12'||devtools||source) event.preventDefault();
});

renderTabs();
renderSwatches();
selectPalette(state.selected,false);
renderPalettes();
