"use strict";
(() => {
  const $ = id => document.getElementById(id);
  const names = {button:"ボタン",card:"カード",heading:"見出し",nav:"ナビゲーション",image:"画像付きカード"};
  const defaults = {
    button:{text:"はじめてみる",bg:"#d85d95",color:"#ffffff",borderColor:"#d85d95",fontSize:17,weight:700,align:"center",lineHeight:1.5,padding:16,margin:8,width:210,radius:14,border:0,shadow:1,hover:true,hoverColor:"#b93d79"},
    card:{text:"わたしの好きなこと",body:"好きな色や趣味を紹介するカードです。文章を変えて、自分らしいデザインにしましょう。",bg:"#fff4f8",color:"#423446",borderColor:"#f4c6da",fontSize:17,weight:500,align:"left",lineHeight:1.7,padding:26,margin:8,width:340,radius:20,border:1,shadow:2,hover:false,hoverColor:"#fce4ef"},
    heading:{text:"お気に入りを紹介",bg:"#fff4f8",color:"#8d3667",borderColor:"#d85d95",fontSize:30,weight:700,align:"left",lineHeight:1.4,padding:14,margin:8,width:380,radius:8,border:0,shadow:0,hover:false,hoverColor:"#fff4f8",underline:true},
    nav:{text:"ホーム,作品,プロフィール,お問い合わせ",bg:"#e8f6fc",color:"#24556e",borderColor:"#b8dce9",fontSize:15,weight:700,align:"center",lineHeight:1.5,padding:14,margin:8,width:560,radius:14,border:1,shadow:1,hover:true,hoverColor:"#b8e4f5",gap:18},
    image:{text:"週末の小さな旅",body:"お気に入りの景色を見つけに、少し遠くまで出かけました。",bg:"#ffffff",color:"#2d4352",borderColor:"#dde8eb",fontSize:17,weight:500,align:"left",lineHeight:1.7,padding:20,margin:8,width:390,radius:18,border:1,shadow:2,hover:false,hoverColor:"#edf7fa",image:"landscape",layout:"top"}
  };
  const themes = {
    pink:{bg:"#fff0f6",color:"#6c284d",borderColor:"#edb3d0",hoverColor:"#f9cde1",button:"#d85d95"},
    blue:{bg:"#eaf8ff",color:"#174b69",borderColor:"#9dd3eb",hoverColor:"#c9eaff",button:"#2386b5"},
    green:{bg:"#edf7ed",color:"#285b3f",borderColor:"#afd9bc",hoverColor:"#cbeaca",button:"#438e65"},
    beige:{bg:"#f8f2e9",color:"#5e4b3c",borderColor:"#d9c8ae",hoverColor:"#ecdfca",button:"#9e7655"},
    mono:{bg:"#f3f4f6",color:"#252b33",borderColor:"#9ba3ad",hoverColor:"#dfe3e8",button:"#333b46"}
  };
  const numeric = [
    ["fontSize","文字サイズ","font-size：文字の大きさ",12,52,1,"px"],
    ["lineHeight","行間","line-height：行と行の間隔",1,2.5,.1,""],
    ["padding","内側の余白","padding：枠の内側にあける余白",0,64,1,"px"],
    ["margin","外側の余白","margin：パーツの外側にあける余白",0,64,1,"px"],
    ["width","幅","width：パーツの横幅。狭い画面では自動で収めます",120,800,1,"px"],
    ["radius","角の丸み","border-radius：角を丸くする大きさ",0,60,1,"px"],
    ["border","枠線の太さ","border：枠線の太さ。0なら枠線なし",0,10,1,"px"],
    ["shadow","影の強さ","box-shadow：影をつけて浮いた印象にする",0,4,1,""]
  ];
  const colors = [["bg","背景色","background-color：パーツの背景の色"],["color","文字色","color：文字の色"],["borderColor","枠線の色","border-color：枠線の色"],["hoverColor","ホバー時の色","hover：マウスを乗せたときの色"]];
  /* お題モードを再開するときに戻します。
  const challenges = [
    {part:"button",title:"ピンクの角丸ボタンを作ろう",description:"ピンク色、丸い角、白い文字のボタンを作ってみましょう。",hint:"背景色と文字色、角の丸みを調整します。",answer:{bg:"#d85d95",color:"#ffffff",radius:24},keys:["bg","color","radius"]},
    {part:"card",title:"影のあるカードを作ろう",description:"やさしい背景色と影を組み合わせます。",hint:"影の強さを3にし、内側の余白を広げます。",answer:{bg:"#fff4f8",shadow:3,padding:36},keys:["bg","shadow","padding"]},
    {part:"heading",title:"下線付きの見出しを作ろう",description:"下線と少し大きな文字で目立つ見出しにします。",hint:"下線をオンにして文字サイズを調整します。",answer:{underline:true,fontSize:40,color:"#8d3667"},keys:["underline","fontSize","color"]},
    {part:"nav",title:"横並びのナビゲーションを作ろう",description:"項目の間に余裕のある横並びのメニューを作ります。",hint:"項目の間隔と背景色を調整します。",answer:{gap:24,bg:"#e8f6fc",hover:true},keys:["gap","bg","hover"]},
    {part:"image",title:"画像付きの紹介カードを作ろう",description:"画像を左に置いた紹介カードを作ります。",hint:"画像と配置、角の丸みを確認します。",answer:{image:"flower",layout:"side",radius:30},keys:["image","layout","radius"]}
  ];
  */
  const deepCopy = value => JSON.parse(JSON.stringify(value));
  // お題モード再開時：mode = "free", challengeIndex = 0 も追加します。
  let designs = deepCopy(defaults), part = "button", device = "pc";
  const current = () => designs[part];
  const escapeHtml = value => String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[ch]);
  const safeColor = value => /^#[0-9a-f]{6}$/i.test(value) ? value.toLowerCase() : null;
  const clamp = (value,min,max,step) => Math.round(Math.min(max,Math.max(min,Number(value)||0))/step)*step;
  const imageSvg = kind => {
    const palettes={landscape:["#a8dbec","#f9d79f","#7dbfa1"],flower:["#fbd6e5","#ffeab1","#d77ea6"],city:["#bfd9f2","#f9d4bc","#718fae"]};
    const p=palettes[kind]||palettes.landscape;
    const scene=kind==="flower"?`<circle cx="300" cy="118" r="42" fill="${p[1]}"/><path d="M0 240 Q150 120 300 230 T600 210 V320 H0" fill="${p[2]}"/>`:kind==="city"?`<rect x="55" y="140" width="120" height="180" fill="${p[2]}"/><rect x="210" y="95" width="140" height="225" fill="${p[2]}"/><rect x="395" y="155" width="145" height="165" fill="${p[2]}"/>`:`<circle cx="470" cy="75" r="42" fill="${p[1]}"/><path d="M0 250 L160 95 290 220 385 120 600 300 V320 H0" fill="${p[2]}"/>`;
    return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 320"><rect width="600" height="320" fill="${p[0]}"/>${scene}</svg>`)}`;
  };
  const field = (key,label,help,input) => `<div class="field"><label class="field-label" for="field-${key}">${label}</label><small>${help}</small>${input}</div>`;
  function renderControls(){
    const s=current();
    let html=`<div class="control-group"><h3>内容</h3>`;
    html+=field("text",part==="nav"?"メニュー項目":"表示する文字",part==="nav"?"項目をカンマで区切って入力します。":"画面とHTMLの両方に反映されます。",`<input class="text-input" id="field-text" data-key="text" type="text" maxlength="120" value="${escapeHtml(s.text)}">`);
    if(part==="card"||part==="image") html+=field("body","説明文","カード内の文章です。",`<input class="text-input" id="field-body" data-key="body" type="text" maxlength="180" value="${escapeHtml(s.body)}">`);
    if(part==="image"){
      html+=field("image","画像","用意したイラストから選べます。",`<select id="field-image" data-key="image"><option value="landscape">風景</option><option value="flower">花</option><option value="city">街</option></select>`);
      html+=field("layout","画像の配置","上か左に配置します。狭い画面では上に並びます。",`<select id="field-layout" data-key="layout"><option value="top">上</option><option value="side">左</option></select>`);
    }
    html+=`</div><div class="control-group"><h3>色</h3>`;
    for(const [key,label,help] of colors) html+=field(key,label,help,`<div class="color-row"><input id="field-${key}" data-key="${key}" type="color" value="${s[key]}"><input aria-label="${label}のカラーコード" data-color-text="${key}" type="text" maxlength="7" value="${s[key]}" pattern="#[0-9a-fA-F]{6}"></div>`);
    html+=`</div><div class="control-group"><h3>文字・配置</h3>`;
    html+=field("weight","文字の太さ","font-weight：数字が大きいほど太い文字です。",`<select id="field-weight" data-key="weight"><option value="400">標準</option><option value="500">やや太い</option><option value="700">太字</option><option value="800">とても太い</option></select>`);
    html+=field("align","文字揃え","text-align：文字を左・中央・右に揃えます。",`<select id="field-align" data-key="align"><option value="left">左揃え</option><option value="center">中央揃え</option><option value="right">右揃え</option></select>`);
    if(part==="heading") html+=field("underline","下線","見出しの下に線を引きます。",`<label class="check-row"><input id="field-underline" data-key="underline" type="checkbox">下線を付ける</label>`);
    if(part==="nav") html+=field("gap","項目の間隔","gap：メニュー項目の間にあける幅です。",`<div class="number-row"><input id="field-gap" data-key="gap" type="range" min="0" max="60" step="1"><input aria-label="項目の間隔の数値" data-number="gap" type="number" min="0" max="60" step="1"><span class="unit">px</span></div>`);
    for(const [key,label,help,min,max,step,unit] of numeric) html+=field(key,label,help,`<div class="number-row"><input id="field-${key}" data-key="${key}" type="range" min="${min}" max="${max}" step="${step}"><input aria-label="${label}の数値" data-number="${key}" type="number" min="${min}" max="${max}" step="${step}"><span class="unit">${unit}</span></div>`);
    html+=field("hover","マウスを乗せた時の変化","hover：マウスを乗せた時に背景色が変わります。",`<label class="check-row"><input id="field-hover" data-key="hover" type="checkbox">色を変える</label>`);
    html+=`</div>`;
    $("controls").innerHTML=html;
    $("controls").querySelectorAll("[data-key]").forEach(el=>{const key=el.dataset.key;if(el.type==="checkbox")el.checked=!!s[key];else el.value=s[key];});
    $("controls").querySelectorAll("[data-number]").forEach(el=>el.value=s[el.dataset.number]);
  }
  function cssFor(type,s){
    const selector=`.sample-${type}`;
    const lines=[`  background-color: ${s.bg};`,`  color: ${s.color};`,`  font-size: ${s.fontSize}px;`,`  font-weight: ${s.weight};`,`  line-height: ${s.lineHeight};`,`  text-align: ${s.align};`,`  padding: ${s.padding}px;`,`  margin: ${s.margin}px;`,`  width: ${s.width}px;`,`  max-width: calc(100% - ${s.margin*2}px);`,`  border-radius: ${s.radius}px;`];
    lines.push(s.border?`  border: ${s.border}px solid ${s.borderColor};`:`  border: 0;`);
    if(s.shadow) lines.push(`  box-shadow: 0 ${s.shadow*3}px ${s.shadow*8}px #24354926;`);
    if(type==="button") lines.push("  display: inline-block;","  cursor: pointer;");
    if(type==="heading" && s.underline) lines.push(`  border-bottom: 3px solid ${s.borderColor};`);
    if(type==="nav") lines.push("  display: flex;","  flex-wrap: wrap;",`  justify-content: ${{left:"flex-start",center:"center",right:"flex-end"}[s.align]};`,`  gap: ${s.gap}px;`);
    if(type==="image" && s.layout==="side") lines.push("  display: flex;","  align-items: center;", "  gap: 16px;");
    let css=`${selector} {\n${lines.join("\n")}\n}`;
    if(type==="nav") css+=`\n\n${selector} a {\n  color: inherit;\n  text-decoration: none;\n  padding: 4px 8px;\n  border-radius: 6px;\n}`;
    if(type==="image") css+=`\n\n${selector} img {\n  display: block;\n  width: ${s.layout==="side"?"42%":"100%"};\n  height: auto;\n  border-radius: ${Math.max(0,s.radius-6)}px;\n}`;
    if(type==="image" && s.layout==="side") css+=`\n\n${selector} .sample-content {\n  flex: 1;\n}`;
    if(type==="card"||type==="image") css+=`\n\n${selector} h2 {\n  margin: 0 0 8px;\n  font-size: 1.25em;\n}\n\n${selector} p {\n  margin: 0;\n}`;
    if(s.hover) css+=`\n\n${type==="nav"?`${selector} a:hover,\n${selector} a:focus-visible`:`${selector}:hover`} {\n  background-color: ${s.hoverColor};\n}`;
    if(type==="image" && s.layout==="side") css+=`\n\n@media (max-width: 600px) {\n  ${selector} { flex-direction: column; }\n  ${selector} img { width: 100%; }\n}`;
    return css;
  }
  function htmlFor(type,s){
    const title=escapeHtml(s.text),body=escapeHtml(s.body||"");
    if(type==="button")return `<button class="sample-button" type="button">${title}</button>`;
    if(type==="card")return `<article class="sample-card">\n  <h2>${title}</h2>\n  <p>${body}</p>\n</article>`;
    if(type==="heading")return `<h2 class="sample-heading">${title}</h2>`;
    if(type==="nav")return `<nav class="sample-nav" aria-label="メインメニュー">\n${s.text.split(",").map(item=>`  <a href="#">${escapeHtml(item.trim())}</a>`).join("\n")}\n</nav>`;
    return `<article class="sample-image">\n  <img src="${imageSvg(s.image)}" alt="${{landscape:"山の風景",flower:"花のイラスト",city:"街のイラスト"}[s.image]||"風景のイラスト"}">\n  <div class="sample-content">\n    <h2>${title}</h2>\n    <p>${body}</p>\n  </div>\n</article>`;
  }
  function documentFor(type,s){
    const html=htmlFor(type,s),css=cssFor(type,s);
    return `<!doctype html>\n<html lang="ja">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>${names[type]}のデザイン</title>\n  <style>\n    * { box-sizing: border-box; }\n    body { margin: 0; padding: 24px; font-family: system-ui, sans-serif; background: #ffffff; }\n${css.split("\n").map(line=>"    "+line).join("\n")}\n  </style>\n</head>\n<body>\n${html.split("\n").map(line=>"  "+line).join("\n")}\n</body>\n</html>\n`;
  }
  function render(){
    const s=current();
    $("preview").srcdoc=documentFor(part,s);
    $("html-code").textContent=htmlFor(part,s);
    $("css-code").textContent=cssFor(part,s);
    // お題モード再開時：if(mode==="challenge") updateChallengeResult();
  }
  function updateValue(key,value){
    const s=current();
    if(key in s){
      if(numeric.some(def=>def[0]===key)||key==="gap"){
        const def=numeric.find(item=>item[0]===key)||[key,"","",0,60,1];value=clamp(value,def[3],def[4],def[5]);
      }else if(colors.some(item=>item[0]===key)){value=safeColor(value);if(!value)return;}
      else if(key==="weight") value=[400,500,700,800].includes(Number(value))?Number(value):700;
      else if(key==="align") value=["left","center","right"].includes(value)?value:"left";
      else if(key==="image") value=["landscape","flower","city"].includes(value)?value:"landscape";
      else if(key==="layout") value=["top","side"].includes(value)?value:"top";
      s[key]=value;
      if($("field-"+key) && $("field-"+key).type!=="text") $("field-"+key).value=value;
      $("controls").querySelectorAll(`[data-number="${key}"],[data-color-text="${key}"]`).forEach(el=>el.value=value);
      render();
    }
  }
  /* お題モードを再開するときに戻します。
  function colorDistance(a,b){const x=[1,3,5].map(i=>parseInt(a.slice(i,i+2),16)),y=[1,3,5].map(i=>parseInt(b.slice(i,i+2),16));return Math.sqrt(x.reduce((sum,n,i)=>sum+(n-y[i])**2,0));}
  function updateChallengeResult(){
    const c=challenges[challengeIndex],s=current();
    const passed=c.keys.every(key=>{const a=s[key],b=c.answer[key];return typeof b==="number"?Math.abs(a-b)<=(key==="shadow"?0:Math.max(2,Math.round(b*.12))):typeof b==="string"&&b.startsWith("#")?colorDistance(a,b)<45:a===b;});
    $("challenge-result").textContent=passed?"クリア！":"設定を変えてみよう";
  }
  function showChallenge(){
    const c=challenges[challengeIndex];part=c.part;$("part").value=part;renderControls();render();
    $("challenge-title").textContent=`${challengeIndex+1}. ${c.title}`;
    $("challenge-description").textContent=c.description;
    $("challenge-help").textContent="";
    $("target").srcdoc=documentFor(c.part,{...deepCopy(defaults[c.part]),...c.answer});
  }
  */
  function setStatus(message){$("status").textContent=message;}
  async function copyText(value,label){
    try{await navigator.clipboard.writeText(value);setStatus(`${label}をコピーしました。`);}catch{
      const input=document.createElement("textarea");input.value=value;input.style.position="fixed";input.style.opacity="0";document.body.append(input);input.select();
      const success=document.execCommand("copy");input.remove();setStatus(success?`${label}をコピーしました。`:"コピーできませんでした。コードを選択してコピーしてください。");
    }
  }
  $("controls").addEventListener("input",event=>{
    const el=event.target;
    if(el.dataset.colorText){const color=safeColor(el.value);if(color)updateValue(el.dataset.colorText,color);return;}
    if(el.dataset.number)return;
    if(el.dataset.key && (el.type==="range"||el.type==="text"))updateValue(el.dataset.key,el.value);
  });
  $("controls").addEventListener("change",event=>{
    const el=event.target;
    if(el.dataset.colorText){const color=safeColor(el.value);if(color)updateValue(el.dataset.colorText,color);else el.value=current()[el.dataset.colorText];return;}
    if(el.dataset.number){updateValue(el.dataset.number,el.value);return;}
    if(el.dataset.key)updateValue(el.dataset.key,el.type==="checkbox"?el.checked:el.value);
  });
  $("part").addEventListener("change",event=>{part=event.target.value;renderControls();render();setStatus(`${names[part]}を選びました。`);});
  $("theme").addEventListener("change",event=>{
    const t=themes[event.target.value];if(!t)return;
    const s=current();s.bg=part==="button"?t.button:t.bg;s.color=part==="button"?"#ffffff":t.color;s.borderColor=t.borderColor;s.hoverColor=part==="button"?t.color:t.hoverColor;
    renderControls();render();setStatus("配色を適用しました。");
  });
  /* お題モードを再開するときに戻します。
  document.querySelectorAll("[data-mode]").forEach(button=>button.addEventListener("click",()=>{
    mode=button.dataset.mode;$("part").disabled=mode==="challenge";document.querySelectorAll("[data-mode]").forEach(b=>{b.classList.toggle("active",b===button);b.setAttribute("aria-pressed",b===button);});
    $("challenge").hidden=mode!=="challenge";if(mode==="challenge")showChallenge();else render();setStatus(mode==="challenge"?"お題モードを開始しました。":"自由作成モードです。");
  }));
  */
  document.querySelectorAll("[data-device]").forEach(button=>button.addEventListener("click",()=>{
    device=button.dataset.device;$("preview-shell").dataset.device=device;document.querySelectorAll("[data-device]").forEach(b=>b.setAttribute("aria-pressed",b===button));
  }));
  document.querySelectorAll("[data-copy]").forEach(button=>button.addEventListener("click",()=>copyText(button.dataset.copy==="html"?htmlFor(part,current()):cssFor(part,current()),button.dataset.copy.toUpperCase())));
  $("copy-all").addEventListener("click",()=>copyText(documentFor(part,current()),"完成コード"));
  $("download").addEventListener("click",()=>{const blob=new Blob([documentFor(part,current())],{type:"text/html;charset=utf-8"});const url=URL.createObjectURL(blob);const link=document.createElement("a");link.href=url;link.download=`design-${part}.html`;link.click();setTimeout(()=>URL.revokeObjectURL(url),60000);setStatus("HTMLファイルをダウンロードしました。総合コードが含まれます。");});
  $("save").addEventListener("click",()=>{try{localStorage.setItem("design-studio-v1",JSON.stringify({part,designs}));setStatus("このブラウザに保存しました。");}catch{setStatus("保存できませんでした。ブラウザの空き容量を確認してください。");}});
  $("load").addEventListener("click",()=>{try{const saved=JSON.parse(localStorage.getItem("design-studio-v1"));if(!saved){setStatus("保存したデザインがありません。");return;}if(!names[saved.part]||!saved.designs)throw Error();const next=deepCopy(defaults);for(const type of Object.keys(next)){const source=saved.designs[type];if(!source||typeof source!=="object")throw Error();for(const key of Object.keys(next[type])){const value=source[key];if(typeof value===typeof next[type][key])next[type][key]=value;}}designs=next;part=saved.part;$("part").value=part;renderControls();render();setStatus("保存したデザインを読み込みました。");}catch{setStatus("保存データを読み込めませんでした。");}});
  $("reset").addEventListener("click",()=>{designs[part]=deepCopy(defaults[part]);renderControls();render();setStatus(`${names[part]}を初期状態に戻しました。`);});
  /* お題モードを再開するときに戻します。
  $("hint-button").addEventListener("click",()=>{$("challenge-help").textContent=challenges[challengeIndex].hint;});
  $("answer-button").addEventListener("click",()=>{const c=challenges[challengeIndex];Object.assign(current(),c.answer);renderControls();render();$("challenge-help").textContent=`答えの設定値：${c.keys.map(key=>`${key} = ${c.answer[key]}`).join("、")}`;});
  $("next-button").addEventListener("click",()=>{challengeIndex=(challengeIndex+1)%challenges.length;showChallenge();});
  */
  renderControls();render();$("preview-shell").dataset.device=device;
})();
