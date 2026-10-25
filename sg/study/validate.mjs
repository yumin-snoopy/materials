import fs from 'node:fs';
import path from 'node:path';

const data = path.join(import.meta.dirname, 'data');
const read = name => JSON.parse(fs.readFileSync(path.join(data,name), 'utf8'));
const official=read('official.json'), original=read('original.json'), law=read('law.json'), cards=read('law_cards.json'), keys=read('answer_keys.json');
const errors=[], ids=new Set(), texts=new Set();
const fail=(condition,message)=>{if(!condition)errors.push(message)};
const allowed=new Set(['リスク管理','インシデント対応','ネットワーク','認証','脆弱性対策','アクセス制御','法令','監査','サービス管理','データ活用','監視・検知','セキュリティ方針','不正対策','経営戦略','情報管理','マルウェア対策','攻撃手法','暗号・PKI','内部統制','業務改善','品質管理','メール対策','Webセキュリティ','科目B 事例',...read('terms.json').map(t=>t.area)]);
for(const q of [...official,...original,...law]){
  fail(typeof q.id==='string' && q.id.length>0,'empty id');
  fail(!ids.has(q.id),`duplicate id ${q.id}`);ids.add(q.id);
  fail(typeof q.question==='string' && q.question.trim().length>5,`empty question ${q.id}`);
  const normalized=q.question.replace(/\s/g,'').replace(/[。、，．]/g,'');
  fail(!texts.has(normalized),`duplicate text ${q.id}`);texts.add(normalized);
  const isLaw=law.includes(q), options=isLaw?['正しい','誤り']:q.options;
  const optionCount=isLaw?2:4;
  fail(Array.isArray(options) && options.length===optionCount,`option count ${q.id}`);
  fail(Number.isInteger(q.answer) && q.answer>=0 && q.answer<optionCount,`answer range ${q.id}`);
  fail(options?.every(x=>typeof x==='string'&&x.trim()),`empty option ${q.id}`);
  fail(typeof q.explanation==='string'&&q.explanation.trim(),`empty explanation ${q.id}`);
  if(q.area)fail(allowed.has(q.area),`unknown area ${q.id}`);
  fail(!/〔\s*メ\s*モ\s*用\s*紙\s*〕/.test(q.question+options.join('')),`page artifact ${q.id}`);
}
for(const q of official){
  fail(q.sourceType==='official'&&q.year&&q.number,`source metadata ${q.id}`);
  fail(q.sourceUrl?.startsWith('https://www.ipa.go.jp/')&&q.answerUrl?.startsWith('https://www.ipa.go.jp/'),`source URL ${q.id}`);
  fail(q.verifiedOn==='2026-10-25',`verification date ${q.id}`);
  fail(keys[String(q.year)]?.[String(q.number)]==='アイウエ'[q.answer],`answer-key mismatch ${q.id}`);
}
for(const q of law)fail(q.sourceUrl?.startsWith('https://')&&q.verifiedOn,`law source ${q.id}`);
for(const c of cards){fail(!ids.has(c.id),`duplicate card id ${c.id}`);ids.add(c.id);fail(c.sourceUrl?.startsWith('https://')&&c.verifiedOn,`card source ${c.id}`)}
const counts={official:official.length,originalA:original.filter(q=>q.kind==='A').length,originalB:original.filter(q=>q.kind==='B').length,lawTF:law.length,cards:cards.length};
console.log(counts);
if(errors.length){console.error(errors.join('\n'));process.exitCode=1}else console.log('Data validation passed.');
