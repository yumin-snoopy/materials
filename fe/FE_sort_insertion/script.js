const LESSON = {
  "name": "挿入ソート",
  "idea": "左側の並んだ部分に、取り出した値を挿入します。大きい値を1つずつ右へずらします。",
  "code": [
    "for i ← 1 to n − 1",
    "  key ← A[i]; j ← i − 1",
    "  while j ≥ 0",
    "    if A[j] ≤ key: break",
    "    A[j + 1] ← A[j]; j ← j − 1",
    "  A[j + 1] ← key",
    "  A[0..i] が整列済み"
  ]
};
"use strict";
// 位置は0から数える。各ステップに配列・色・疑似コード行を保存する。
// 再生中にアルゴリズムを変更せず、保存した状態を1つずつ描画する。
function trace(values) {
  const t={a:values.map((value,id)=>({value,id})), steps:[], comparisons:0, swaps:0, moves:0,
    meta:{sorted:[],compare:[],range:[0,values.length-1],temp:null,buffer:[],candidate:null,pivot:null,boundary:null,tree:[],groups:null,detail:''}};
  t.emit=function(line,message,change={}) {
    Object.assign(this.meta,change);
    this.steps.push(JSON.parse(JSON.stringify({a:this.a,line,message,...this.meta,comparisons:this.comparisons,swaps:this.swaps,moves:this.moves})));
  };
  t.swap=function(i,j){[this.a[i],this.a[j]]=[this.a[j],this.a[i]];this.swaps++;};
  t.finish=function(){this.emit(-1,'完了！すべての値が小さい順に並びました。',{sorted:this.a.map((_,i)=>i),compare:[],range:[0,this.a.length-1],temp:null,buffer:[],pivot:null,candidate:null,boundary:null,groups:null,detail:''});return this.steps;};
  t.emit(-1,'「1ステップ進む」で、比較する値と疑似コードの行を確認しましょう。');
  return t;
}
// アルゴリズム：比較・交換・代入ごとに説明付きの状態を記録する。
function buildSteps(values) {
  const t=trace(values);const a=t.a;t.meta.sorted=[0];t.steps[0].sorted=[0];
  for(let i=1;i<a.length;i++) {
    t.emit(0,'左の整列済み部分に、位置 '+i+' の値を入れます。',{range:[0,i],compare:[]});
    const key=a[i]; a[i]=null;let j=i-1;t.moves++;
    t.emit(1,key.value+' を一時置き場に取り出しました。空いた場所は「空」です。',{temp:key});
    while(j>=0) {
      t.emit(2,'空いた位置の左側に、比べる値があります。',{compare:[j]});
      t.comparisons++;const stop=a[j].value<=key.value;
      t.emit(3,a[j].value+' ≤ '+key.value+' は'+(stop?'成り立ちます。これ以上ずらさず、右隣へ挿入します。':'成り立ちません。左の値の方が大きいので右へずらします。'));
      if(stop) break;
      a[j+1]=a[j];a[j]=null;t.moves++;j--;
      t.emit(4,'大きい値を1つ右へ移動しました。空きが左へ移ります。',{compare:[]});
    }
    if(j<0)t.emit(2,'左端まで調べました。先頭の空きに挿入します。',{compare:[]});
    a[j+1]=key;t.moves++;t.emit(5,key.value+' を空いた位置に挿入しました。',{temp:null,compare:[j+1]});
    t.emit(6,'位置 0 ～ '+i+' が小さい順に並びました（次の挿入で動くことがあります）。',{sorted:Array.from({length:i+1},(_,k)=>k),compare:[]});
  }
  return t.finish();
}

// 画面と再生操作：アルゴリズムが作った記録を順に表示する。
const $=id=>document.getElementById(id);
let original=[7,3,5,1,8,4], steps=[],current=0,timer=null,busy=false,unlockTimer=null;
const tiles=new Map();
function makeTile(item,key) {
  if(!tiles.has(key)) {const el=document.createElement('div');el.className='tile';el.textContent=item.value;$('stage').append(el);tiles.set(key,el);}
  return tiles.get(key);
}
function paint() {
  const s=steps[current],width=$('stage').clientWidth,unit=width/original.length;
  const present=new Set();
  function place(item,key,index,y,kind='') {
    if(!item)return;present.add(key);const el=makeTile(item,key);
    el.className='tile '+kind;el.style.width=Math.min(86,unit-12)+'px';el.style.left=(unit*index+(unit-Math.min(86,unit-12))/2)+'px';el.style.top=y+'px';
  }
  s.a.forEach((item,i)=> {
    let kind=s.sorted.includes(i)?'sorted':'';
    if(i<s.range[0]||i>s.range[1])kind+=' outside';
    if(s.compare.includes(i))kind+=' comparing';
    if(i===s.candidate)kind+=' candidate';if(i===s.pivot)kind+=' pivot';
    place(item,'a'+item?.id,i,38,kind);
  });
  if(s.temp)place(s.temp,'a'+s.temp.id,0,156,'held');
  s.buffer.forEach((item,i)=> {
    const key='b'+item.id;
    if(!tiles.has(key)){const el=makeTile(item,key);const source=tiles.get('a'+item.id);el.style.left=source?.style.left||'0px';el.style.top='38px';el.getBoundingClientRect();}
    place(item,key,i,156,'buffer');
  });
  for(const [key,el] of tiles)if(!present.has(key)){el.remove();tiles.delete(key);}
  $('slots').innerHTML=s.a.map((item,i)=>'<div style="width:'+unit+'px"><small>位置 '+i+'</small><span>'+(!item?'空':'')+'</span></div>').join('');
  $('message').textContent=s.message;$('comparison').textContent=s.comparisons;$('swaps').textContent=s.swaps;$('moves').textContent=s.moves;
  $('progress').textContent=current+' / '+(steps.length-1)+' ステップ';
  $('range').textContent='処理範囲：位置 '+s.range.join(' ～ ')+(s.boundary!==null?' ／ 次の置き場所 p = '+s.boundary:'');
  $('detail').textContent=s.detail;
  document.querySelectorAll('#code li').forEach((el,i)=>{el.classList.toggle('active',i===s.line);if(i===s.line)el.setAttribute('aria-current','step');else el.removeAttribute('aria-current');});
  $('tree').replaceChildren();
  if(s.tree.length){const heading=document.createElement('h3');heading.textContent='分割の記録（上から深さ順）';$('tree').append(heading);
    for(let depth=0;depth<=Math.max(...s.tree.map(x=>x.depth));depth++) {const row=document.createElement('div');row.className='tree-row';const label=document.createElement('span');label.textContent='深さ '+depth;row.append(label);
      s.tree.filter(x=>x.depth===depth).forEach(group=>{const box=document.createElement('span');box.className='tree-group';box.textContent='['+group.left+'～'+group.right+'] '+group.values.join(' ');row.append(box);});$('tree').append(row);}
  }
  $('groups').textContent=s.groups?'左の組：位置 '+s.groups[0].join('～')+' ／ 右の組：位置 '+s.groups[1].join('～')+' → 作業領域へ結合':'';
  $('step').disabled=busy||current===steps.length-1||timer!==null;
  $('play').disabled=current===steps.length-1||timer!==null;$('pause').disabled=timer===null;
  $('status').textContent=current===steps.length-1?'完了':timer!==null?'自動再生中':'停止中';
}
function delay(){return Number($('speed').value);}
function advance(){
  if(busy||current>=steps.length-1)return;
  current++;busy=true;$('stage').style.setProperty('--duration',Math.min(420,delay()*0.65)+'ms');paint();
  unlockTimer=setTimeout(()=>{busy=false;paint();},Math.min(420,delay()*0.65));
}
function stop(){clearTimeout(timer);timer=null;paint();}
function schedule(){timer=setTimeout(()=>{timer=null;advance();if(current<steps.length-1)schedule();else stop();},delay());paint();}
// 選んだ値を候補から取り除き、重複しない6個の数値を作る。
function createRandomData() {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const values = [];
  for (let count = 0; count < 6; count++) {
    const index = Math.floor(Math.random() * candidates.length);
    values.push(candidates.splice(index, 1)[0]);
  }
  return values;
}
function reset(newData=false){stop();clearTimeout(unlockTimer);busy=false;current=0;
  if(newData){original=createRandomData();}
  for(const el of tiles.values())el.remove();tiles.clear();steps=buildSteps(original);paint();
}
function init(){
  $('code').replaceChildren(...LESSON.code.map(line=>{const li=document.createElement('li');li.textContent=line;return li;}));
  $('step').addEventListener('click',advance);$('play').addEventListener('click',()=>{if(timer===null&&current<steps.length-1)schedule();});$('pause').addEventListener('click',stop);
  $('reset').addEventListener('click',()=>reset());$('new').addEventListener('click',()=>reset(true));
  $('speed').addEventListener('change',()=>{if(timer!==null){clearTimeout(timer);schedule();}});
  window.addEventListener('resize',paint);steps=buildSteps(original);paint();
}
if(typeof document!=='undefined')init();
