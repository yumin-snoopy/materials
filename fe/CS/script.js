const terms = [
  {"category":"基本概念","term":"アクセス制御","jis":"資産へのアクセスが、事実上及びセキュリティ要求事項に基づいて許可及び制限されることを確実にする手段","explanation":"誰がどのデータを見られるかをルール化すること。鍵のかかった部屋への入室管理と同じイメージ","syllabus":true},
  {"category":"基本概念","term":"エンティティ","jis":"JIS Q 27000:2019「認証」の注記（独立した用語定義ではありません）：エンティティは，“実体”，“主体”などともいう。情報セキュリティの文脈においては，情報を使用する組織及び人，情報を扱う設備，ソフトウェア及び物理的媒体などを意味する。","explanation":"情報セキュリティで扱う人・組織・設備・ソフトウェア・媒体などのこと。","syllabus":true},
  {"category":"基本概念","term":"認証","jis":"エンティティの主張する特性が正しいという保証の提供","explanation":"「本当にあなたですか？」を確認すること。パスワード入力・指紋認証などがこれにあたる","syllabus":false},
  {"category":"基本概念","term":"真正性","jis":"エンティティは、それが主張するとおりのものであるという特性","explanation":"「本物であること」を示す性質。なりすましがないことを保証する","syllabus":false},
  {"category":"基本概念","term":"否認防止","jis":"主張された事象又は処置の発生、及びそれを引き起こしたエンティティを証明する能力","explanation":"「やった・やってない」を言えなくすること。電子署名で操作の証拠を残すイメージ","syllabus":true},
  {"category":"セキュリティ3要素","term":"機密性","jis":"認可されていない個人、エンティティ、又はプロセスに対して情報を使用させず、また、開示しない特性","explanation":"許可された人だけが情報を見られること。秘密を守ること","syllabus":true},
  {"category":"セキュリティ3要素","term":"完全性","jis":"正確さ及び完全さの特性","explanation":"情報が改ざん・破損されていないこと。データが正しい状態に保たれていること","syllabus":true},
  {"category":"セキュリティ3要素","term":"可用性","jis":"認可されたエンティティが要求したときに、アクセス及び使用が可能である特性","explanation":"必要な時に情報やシステムをいつでも使えること。サーバーが止まらないようにすること","syllabus":true},
  {"category":"攻撃・リスク","term":"攻撃","jis":"資産の破壊、暴露、改ざん、無効化、盗用、又は認可されていないアクセス若しくは使用の試み","explanation":"システムや情報に対して悪意ある行為を試みること。ハッキングや不正アクセスなど","syllabus":true},
  {"category":"攻撃・リスク","term":"脅威","jis":"システム又は組織に損害を与える可能性のある、望ましくないインシデントの潜在的な原因","explanation":"危険になりうるもの・状況のこと。マルウェア・地震・悪意ある内部者など","syllabus":true},
  {"category":"攻撃・リスク","term":"ぜい弱性","jis":"一つ以上の脅威によって付け込まれる可能性のある、資産又は管理策の弱点","explanation":"攻撃者に突かれる「弱点」のこと。パスワード未設定・古いソフトウェアなどが該当","syllabus":true},
  {"category":"攻撃・リスク","term":"リスク","jis":"目的に対する不確かさの影響","explanation":"目標の達成を妨げる可能性のある「不確かさ」のこと。ゼロではないが確実でもない出来事","syllabus":false},
  {"category":"攻撃・リスク","term":"残留リスク","jis":"リスク対応後に残っているリスク","explanation":"対策をとった後も残るリスクのこと。完全にゼロにはできないリスク","syllabus":true},
  {"category":"インシデント管理","term":"情報セキュリティ事象","jis":"情報セキュリティ方針への違反若しくは管理策の不具合の可能性、又はセキュリティに関係し得る未知の状況を示すシステム、サービス若しくはネットワークの状態に関連する事象","explanation":"「何かおかしいかも？」という気になる出来事。インシデントかどうかはまだわからない段階","syllabus":true},
  {"category":"インシデント管理","term":"情報セキュリティインシデント","jis":"望まない単独若しくは一連の情報セキュリティ事象であって、経営運営を危うくする確率及び情報セキュリティを脅かす確率及び情報セキュリティを脅かす確率が高いもの","explanation":"実際に被害が出た・出そうな「問題発生！」な出来事。不正アクセス成功・情報漏えいなど","syllabus":true},
  {"category":"インシデント管理","term":"情報セキュリティインシデント管理","jis":"情報セキュリティインシデントを検出し、報告し、評価し、応対し、対処し、更にそこから学習するための一連のプロセス","explanation":"インシデントが起きたときの一連の対応手順。発見→報告→対応→再発防止のサイクル","syllabus":false},
  {"category":"インシデント管理","term":"情報セキュリティ継続","jis":"継続した情報セキュリティの運用を確実にするためのプロセス及び手順","explanation":"災害や障害があってもセキュリティを維持し続けるための取り組み","syllabus":false},
  {"category":"リスク管理","term":"リスクアセスメント","jis":"リスク特定、リスク分析及びリスク評価のプロセス全体","explanation":"リスクを洗い出して、大きさを測り、許容できるか判断する一連の作業","syllabus":true},
  {"category":"リスク管理","term":"リスク特定","jis":"リスクを発見、認識及び記述するプロセス","explanation":"どんなリスクがあるかを見つけて書き出すこと。リスクの棚卸し","syllabus":true},
  {"category":"リスク管理","term":"リスク分析","jis":"リスクの特質を理解し、リスクレベルを決定するプロセス","explanation":"リスクがどれくらい大きいか（可能性×影響度）を数値化・評価すること","syllabus":true},
  {"category":"リスク管理","term":"リスク評価","jis":"リスク及び/又はその大きさが受容可能か又は許容可能かを決定するために、リスク分析の結果をリスク基準と比較するプロセス","explanation":"分析したリスクを「許せるか・許せないか」の基準と比べること","syllabus":true},
  {"category":"リスク管理","term":"リスク対応","jis":"リスクを修正するプロセス","explanation":"リスクに対して何らかの手を打つこと。回避・低減・移転・受容などの選択肢がある","syllabus":true},
  {"category":"リスク管理","term":"リスク受容","jis":"ある特定のリスクをとるという情報に基づいた意思決定","explanation":"そのリスクを「仕方ない、受け入れよう」と判断すること。コストと見合わない場合など","syllabus":true},
  {"category":"リスク管理","term":"リスク基準","jis":"リスクの重大性を評価するための目安とする条件","explanation":"リスクが「大・中・小」のどれかを決めるためのモノサシ・基準値","syllabus":false},
  {"category":"リスク管理","term":"リスクレベル","jis":"結果とその起こりやすさの組み合わせとして表現される、リスクの大きさ","explanation":"リスクの大きさ。「影響度×発生確率」で表すことが多い","syllabus":false},
  {"category":"リスク管理","term":"リスク所有者","jis":"リスクを運用管理することについて、アカウンタビリティ及び権限をもつ人又は主体","explanation":"そのリスクの「担当責任者」。対策や判断をする権限を持つ人","syllabus":false},
  {"category":"リスク管理","term":"リスクマネジメント","jis":"リスクについて、組織を指揮統制するための調整された活動","explanation":"組織全体でリスクをコントロールする活動・仕組みのこと","syllabus":true},
  {"category":"リスク管理","term":"リスクマネジメントプロセス","jis":"コミュニケーション、協議及び組織の状況の確定の活動、並びにリスクの特定、分析、評価、対応、監視及びレビューの活動に対する、運用管理方針、手順及び実務の体系的な適用","explanation":"リスク管理を回すための一連の手順。PDCAサイクルのようなもの","syllabus":false},
  {"category":"リスク管理","term":"リスクコミュニケーション及び協議","jis":"リスクの運用管理について、情報の提供・共有又は取得、及びステークホルダーとの対話を行うために、組織が継続的に及び繰り返し行う一連のプロセス","explanation":"リスクについて関係者と情報共有・相談し続けること","syllabus":false},
  {"category":"管理・組織","term":"情報セキュリティ","jis":"情報の機密性、完全性、及び可用性を維持すること\n注記（さらに真正性、責任追跡性、否認防止、信頼性などの特性を維持することを含めることもある）","explanation":"情報を守るための総合的な取り組み。CIAの3要素を中心に情報資産を守ること","syllabus":true},
  {"category":"管理・組織","term":"情報セキュリティガバナンス","jis":"組織の情報セキュリティ活動を指導し、管理するシステム","explanation":"経営層がセキュリティを正しく管理・監督する仕組み。トップダウンの管理体制","syllabus":false},
  {"category":"管理・組織","term":"管理策","jis":"リスクを修正（modifying）する対策","explanation":"リスクを減らすための具体的な手段・対策。パスワード設定・ファイアウォール設置など","syllabus":false},
  {"category":"管理・組織","term":"管理目的","jis":"管理策を実施した結果として、達成することを求められる事項を記載したもの","explanation":"管理策を導入することで達成したい目標。「不正アクセスを防ぐ」など","syllabus":false},
  {"category":"管理・組織","term":"マネジメントシステム","jis":"方針、目的及びその目的を達成するためのプロセスを確立するための、相互に関連する又は相互に作用する一連の活動","explanation":"組織を管理するための仕組みのセット。ISOの管理システムがこれにあたる","syllabus":true},
  {"category":"管理・組織","term":"方針","jis":"トップマネジメントによって正式に表明された組織の意図及び方向付け","explanation":"経営トップが「うちはこうする」と公式に宣言したもの。セキュリティポリシーのこと","syllabus":false},
  {"category":"管理・組織","term":"経営陣","jis":"組織のパフォーマンス及び適合性について説明責任を負う個人又はグループ","explanation":"組織のトップ・幹部のこと。セキュリティの最終責任を負う人たち","syllabus":false},
  {"category":"その他","term":"力量","jis":"意図した結果を達成するために、知識及び技能を適用する能力","explanation":"業務をこなすために必要な知識とスキルを実際に使える能力のこと","syllabus":false},
  {"category":"その他","term":"適合","jis":"要求事項を満たしていること","explanation":"ルールや基準を守れている状態のこと","syllabus":false},
  {"category":"その他","term":"不適合","jis":"要求事項を満たしていないこと","explanation":"ルールや基準を守れていない状態。「違反」のこと","syllabus":false},
  {"category":"その他","term":"修正","jis":"検出された不適合を除去するための処置","explanation":"見つかった問題を直すこと。その場の応急処置","syllabus":false},
  {"category":"その他","term":"是正処置","jis":"不適合の原因を除去し、再発を防止するための処置","explanation":"「なぜ問題が起きたか」を調べ、二度と起きないようにすること。根本対策","syllabus":false},
  {"category":"その他","term":"有効性","jis":"計画した活動を実行し、計画した結果を達成した程度","explanation":"やったことが計画通りに効果を出せたかどうかの度合い","syllabus":false},
  {"category":"その他","term":"事象","jis":"ある一連の周辺状況の出現又は変化","explanation":"何かが起きたこと・状況が変わったこと。「イベント」とも言う","syllabus":false},
  {"category":"その他","term":"監視","jis":"システム、プロセス又は活動の状況を明確にすること","explanation":"システムや活動の状態を継続的に見張ること。ログ監視・カメラ監視など","syllabus":false},
  {"category":"その他","term":"プロセス","jis":"インプットをアウトプットに変換する、相互に関連する又は相互に作用する一連の活動","explanation":"入力を受け取って出力を生み出す一連の作業手順のこと","syllabus":false},
  {"category":"その他","term":"外部状況","jis":"組織が自らの目的を達成しようとする場合の外部環境","explanation":"組織の外にある、影響を受ける環境。法律・市場・社会情勢など","syllabus":false},
  {"category":"その他","term":"内部状況","jis":"組織が自らの目的を達成しようとする場合の内部環境","explanation":"組織の中にある環境。社員・文化・システム・経営資源など","syllabus":false},
  {"category":"その他","term":"文書化した情報","jis":"組織が管理し、維持するよう要求されている情報、及びそれが含まれる媒体","explanation":"記録・文書として残し管理される情報のこと。手順書・ログ・証跡など","syllabus":false},
  {"category":"その他","term":"情報ニーズ","jis":"目的、目標、リスク及び問題点を管理するために必要となる見解","explanation":"組織の目標を達成するために必要な情報のこと","syllabus":false},
  {"category":"その他","term":"情報処理施設、情報処理設備","jis":"あらゆる情報処理のシステム、サービス若しくは基盤、又はこれらを収納する物理的場所","explanation":"情報を処理するサーバー・PC・建物などの施設・設備全般","syllabus":false},
  {"category":"その他","term":"情報システム","jis":"アプリケーション、サービス、IT資産、又は情報を取り扱う他の構成要素等の組合せ","explanation":"情報を処理・管理するためのシステム全体。ソフト・ハード・データを含む","syllabus":false},
  {"category":"その他","term":"利害関係者（ステークホルダー）","jis":"ある決定事項若しくは活動に影響を与え得るか、その影響を受け得るか、又はその影響を受けると認識している、個人又は組織","explanation":"組織の活動に関わる・影響を受けるすべての人・組織。顧客・社員・株主・行政など","syllabus":false},
  {"category":"その他","term":"情報共有コミュニティ","jis":"情報を共有することに合意した組織のグループ","explanation":"セキュリティ情報などを共有し合う組織の集まり。ISAC（情報共有分析センター）など","syllabus":false}
];
const names = [...new Set(terms.map(x => x.category))];
const search = document.getElementById('search'), only = document.getElementById('syllabus-only'), tabs = document.getElementById('categories'), results = document.getElementById('results'), count = document.getElementById('result-count'), empty = document.getElementById('empty');
let selected = 'すべて';
function highlighted(value, query) { const frag = document.createDocumentFragment(); if (!query) { frag.append(document.createTextNode(value)); return frag; } const lower = value.toLocaleLowerCase('ja'), needle = query.toLocaleLowerCase('ja'); let pos = 0, at; while ((at = lower.indexOf(needle, pos)) !== -1) { frag.append(document.createTextNode(value.slice(pos, at))); const mark = document.createElement('mark'); mark.textContent = value.slice(at, at + query.length); frag.append(mark); pos = at + query.length; } frag.append(document.createTextNode(value.slice(pos))); return frag; }
function cell(label, value, query) { const td = document.createElement('td'); td.append(highlighted(value, query)); return td; }
function draw() { const q = search.value.trim(), filtered = terms.filter(x => (!only.checked || x.syllabus) && (selected === 'すべて' || x.category === selected) && (!q || [x.term, x.jis, x.explanation].some(v => v.toLocaleLowerCase('ja').includes(q.toLocaleLowerCase('ja'))))); results.replaceChildren(); empty.hidden = filtered.length > 0; count.textContent = `${filtered.length} / ${terms.length} 用語`; for (const name of names) { const entries = filtered.filter(x => x.category === name); if (!entries.length) continue; const section = document.createElement('section'); section.className = 'group'; const heading = document.createElement('h2'); heading.textContent = name; const sub = document.createElement('span'); sub.textContent = `　${entries.length}件`; heading.append(sub); const wrap = document.createElement('div'); wrap.className = 'table-wrap'; const table = document.createElement('table'); const thead = document.createElement('thead'); const hr = document.createElement('tr'); for (const title of ['用語', 'JIS定義', 'わかりやすい解説']) { const th = document.createElement('th'); th.scope = 'col'; th.textContent = title; hr.append(th); } thead.append(hr); const body = document.createElement('tbody'); for (const x of entries) { const tr = document.createElement('tr'), first = document.createElement('td'), line = document.createElement('div'), word = document.createElement('span'); line.className = 'term-line'; word.className = 'term'; word.append(highlighted(x.term, q)); line.append(word); if (x.syllabus) { const badge = document.createElement('span'); badge.className = 'badge'; badge.textContent = 'CS検定シラバス'; line.append(badge); } first.append(line); tr.append(first, cell('JIS定義', x.jis, q), cell('わかりやすい解説', x.explanation, q)); body.append(tr); } table.append(thead, body); wrap.append(table); section.append(heading, wrap); results.append(section); } }
for (const name of ['すべて', ...names]) { const button = document.createElement('button'); button.type = 'button'; button.className = 'category'; button.textContent = name; button.setAttribute('aria-pressed', String(name === selected)); button.addEventListener('click', () => { selected = name; for (const b of tabs.children) b.setAttribute('aria-pressed', String(b === button)); draw(); }); tabs.append(button); }
search.addEventListener('input', draw); only.addEventListener('change', draw); draw();
document.addEventListener('contextmenu', e => { if (!e.target.closest('input,textarea,[contenteditable="true"]')) e.preventDefault(); });
document.addEventListener('keydown', e => { const k = e.key.toLowerCase(), mod = e.ctrlKey || e.metaKey; if (e.key === 'F12' || (mod && ((e.shiftKey && ['i','j','c'].includes(k)) || k === 'u')) || (e.metaKey && e.altKey && ['i','j','c'].includes(k))) e.preventDefault(); });
document.addEventListener('dragstart', e => { if (!e.target.closest('input,textarea,[contenteditable="true"]')) e.preventDefault(); });
