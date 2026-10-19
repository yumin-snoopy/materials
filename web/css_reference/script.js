"use strict";
// Item records keep the reference easy to expand. Text and examples are original explanations.
const categories = [];
function add(title, group, rows) {
  categories.push({title, group, items: rows.map(row => {
    const [name, description, usage, values, initial, note] = row.split("|");
    return {name, description, usage, values: values.split("、"), initial, note: note || "", group, category: title};
  })});
}
add("エンコード・外部CSS", "at", [
  '@charset|CSSファイルの文字コードを示します。|日本語などの文字を正しく読むために使います。|utf-8|"UTF-8"|ファイルの先頭に記述します。HTMLの文字コード指定とは別です。',
  '@import|別のCSSファイルを読み込みます。|共通の見た目を別ファイルに分けたいときに使います。|url("common.css")、"common.css"|url("common.css")|CSSの先頭付近に記述します。表示前の読み込みが増える点にも注意します。'
]);
add("背景", "background", [
  'background|背景画像・繰り返し・位置・色を一度に指定します。|背景をまとめて整えたいときに使います。|画像 位置 / サイズ 繰り返し 色、複数背景はカンマで区切る|url("assets/pattern.svg") no-repeat center #eaf7ff|複数背景の背景色は最後の層だけに書きます。',
  'background-image|要素の背景に画像を置きます。|模様やイラストを敷きたいときに使います。|url(...)、none、複数画像はカンマで区切る|url("assets/pattern.svg")|背景画像は内容の大きさを決めません。',
  'background-repeat|背景画像をどの方向に繰り返すか決めます。|タイル模様の広がり方を変えるときに使います。|repeat、repeat-x、repeat-y、no-repeat、横 縦|repeat|繰り返しの差は小さな画像で確かめましょう。',
  'background-position|背景画像を置く位置を決めます。|背景を中央や右下へ寄せたいときに使います。|left、center、right、top、bottom、px、%|center center|横・縦の順に指定します。',
  'background-size|背景画像の大きさを決めます。|背景画像を箱に合わせたいときに使います。|32px、64px、96px、cover、contain|64px|PDFには載っていない補足項目です。coverは箱を覆い、containは画像全体を収めます。',
  'background-color|背景を単色で塗ります。|画像がない部分にも色を付けたいときに使います。|色名、#RGB、#RRGGBB、rgb()、rgba()、hsl()、hsla()、transparent|#dff3fb|透明も指定できます。'
]);
add("ボーダー", "border", [
  'border-width|四辺の枠線の太さを指定します。|枠線の強さを変えたいときに使います。|px、thin、medium、thick、1～4個の値|6px|線の種類がnoneのままだと太さは見えません。',
  'border-top-width|上の枠線だけを太くします。|上だけ強調したいときに使います。|px、thin、medium、thick|10px|対象は上辺です。',
  'border-right-width|右の枠線だけを太くします。|右だけ強調したいときに使います。|px、thin、medium、thick|10px|対象は右辺です。',
  'border-bottom-width|下の枠線だけを太くします。|下線のように見せたいときに使います。|px、thin、medium、thick|10px|対象は下辺です。',
  'border-left-width|左の枠線だけを太くします。|左端を強調したいときに使います。|px、thin、medium、thick|10px|対象は左辺です。',
  'border-style|四辺の枠線の形を指定します。|実線や点線を選ぶときに使います。|solid、dashed、dotted、double、groove、ridge、inset、outset、none、hidden|dashed|1～4個の値なら上・右・下・左に割り当てます。',
  'border-top-style|上の枠線の形を指定します。|上だけ線種を変えたいときに使います。|solid、dashed、dotted、double、groove、ridge、inset、outset、none、hidden|dashed|対象は上辺です。',
  'border-right-style|右の枠線の形を指定します。|右だけ線種を変えたいときに使います。|solid、dashed、dotted、double、groove、ridge、inset、outset、none、hidden|dashed|対象は右辺です。',
  'border-bottom-style|下の枠線の形を指定します。|下だけ線種を変えたいときに使います。|solid、dashed、dotted、double、groove、ridge、inset、outset、none、hidden|dashed|対象は下辺です。',
  'border-left-style|左の枠線の形を指定します。|左だけ線種を変えたいときに使います。|solid、dashed、dotted、double、groove、ridge、inset、outset、none、hidden|dashed|対象は左辺です。',
  'border-color|四辺の枠線の色を指定します。|枠線にアクセントを付けたいときに使います。|色名、#RGB、rgb()、transparent、1～4個の色|#e07b9d|1～4個の値なら上・右・下・左に割り当てます。',
  'border-top-color|上の枠線の色を指定します。|上だけ色を変えたいときに使います。|色名、#RGB、rgb()、transparent|#e07b9d|対象は上辺です。',
  'border-right-color|右の枠線の色を指定します。|右だけ色を変えたいときに使います。|色名、#RGB、rgb()、transparent|#e07b9d|対象は右辺です。',
  'border-bottom-color|下の枠線の色を指定します。|下だけ色を変えたいときに使います。|色名、#RGB、rgb()、transparent|#e07b9d|対象は下辺です。',
  'border-left-color|左の枠線の色を指定します。|左だけ色を変えたいときに使います。|色名、#RGB、rgb()、transparent|#e07b9d|対象は左辺です。',
  'border|太さ・形・色をまとめて指定します。|四辺に同じ枠線を付けるときに使います。|太さ 形 色|6px solid #e07b9d|形を省くと線が見えない場合があります。',
  'border-top|上の枠線をまとめて指定します。|上だけ目立たせたいときに使います。|太さ 形 色|8px solid #e07b9d|対象は上辺です。',
  'border-right|右の枠線をまとめて指定します。|右だけ目立たせたいときに使います。|太さ 形 色|8px solid #e07b9d|対象は右辺です。',
  'border-bottom|下の枠線をまとめて指定します。|下だけ目立たせたいときに使います。|太さ 形 色|8px solid #e07b9d|対象は下辺です。',
  'border-left|左の枠線をまとめて指定します。|左だけ目立たせたいときに使います。|太さ 形 色|8px solid #e07b9d|対象は左辺です。'
]);
add("カラー", "color", [
  'color|文字の色を変えます。|見出しや本文の色を整えるときに使います。|色名、#RGB、#RRGGBB、rgb()、rgba()、hsl()、hsla()、transparent|#2563eb|背景との明暗差にも気を配りましょう。',
  'opacity|要素全体の透明度を変えます。|画像やカードを薄く見せるときに使います。|0～1|0.6|中の文字や子要素もまとめて透明になります。'
]);
add("テキストとフォント", "text", [
  'text-align|行の中の文字を左右・中央へ揃えます。|見出しや文章の位置を揃えるときに使います。|left、center、right|center|ブロック内の行に効きます。',
  'text-decoration|文字に線を付けたり消したりします。|リンクの下線や取り消し線に使います。|underline、overline、line-through、none|underline|リンクの見分けやすさを保ちましょう。',
  'text-indent|段落の最初の行を字下げします。|文章の書き出しを整えるときに使います。|px、em、%|2em|段落の一行目に効きます。',
  'vertical-align|行内の要素や表セルの縦位置を揃えます。|小さな印や画像を文字と揃えるときに使います。|baseline、sub、super、top、text-top、middle、bottom、text-bottom|middle|通常のブロック要素の縦中央揃えには使えません。PDFのautoは通常このプロパティの有効値ではありません。',
  'font|文字の傾き・太さ・大きさ・行高・書体をまとめます。|文字の設定を一行で書くときに使います。|style weight size/line-height family|italic bold 24px/1.5 sans-serif|font-sizeとfont-familyは必要です。省いた関連設定は初期値に戻ります。',
  'font-style|文字を斜めにします。|引用や強調に使います。|normal、italic、oblique|italic|italicは斜体の字形、obliqueは傾けた表示です。',
  'font-weight|文字の太さを変えます。|見出しを目立たせるときに使います。|normal、bold、bolder、lighter|bold|実際の太さは書体によって異なります。',
  'font-size|文字の大きさを変えます。|見出しと本文の差を作るときに使います。|px、em、%、xx-small、x-small、small、medium、large、x-large、xx-large、larger、smaller|24px|emと%は親の文字サイズを基準にします。',
  'line-height|一行の高さを変えます。|複数行の読みやすさを調整するときに使います。|数値、px、%、normal|1.8|単位なしの数値は文字サイズに対する倍率です。',
  'font-family|使う書体を選びます。|文章の雰囲気を変えたいときに使います。|serif、sans-serif、cursive、fantasy、monospace、書体名|serif|書体が端末にない場合は次の候補が使われます。'
]);
add("マージンとパディング", "boxmodel", [
  'margin|枠線の外側に余白を作ります。|隣の要素との間を空けたいときに使います。|px、%、auto、1～4個の値|24px|上下のmarginは隣と相殺されることがあります。',
  'margin-top|上側の外余白を作ります。|上の要素と離したいときに使います。|px、%、auto|28px|枠線の外側です。',
  'margin-right|右側の外余白を作ります。|右の要素と離したいときに使います。|px、%、auto|28px|枠線の外側です。',
  'margin-bottom|下側の外余白を作ります。|下の要素と離したいときに使います。|px、%、auto|28px|枠線の外側です。',
  'margin-left|左側の外余白を作ります。|左の要素と離したいときに使います。|px、%、auto|28px|枠線の外側です。',
  'padding|枠線の内側に余白を作ります。|文字と枠を離したいときに使います。|px、%、1～4個の値|24px|paddingに負の値は使えません。',
  'padding-top|上側の内余白を作ります。|文字と上の枠を離したいときに使います。|px、%|28px|枠線の内側です。',
  'padding-right|右側の内余白を作ります。|文字と右の枠を離したいときに使います。|px、%|28px|枠線の内側です。',
  'padding-bottom|下側の内余白を作ります。|文字と下の枠を離したいときに使います。|px、%|28px|枠線の内側です。',
  'padding-left|左側の内余白を作ります。|文字と左の枠を離したいときに使います。|px、%|28px|枠線の内側です。'
]);
add("リスト", "list", [
  'list-style|記号の種類・画像・位置をまとめます。|リストを一行で整えるときに使います。|type image position|square inside|画像が使われない場合、typeが代わりに表示されます。',
  'list-style-type|箇条書きの記号を変えます。|丸・四角・番号を選ぶときに使います。|disc、circle、square、decimal、none|square|liを含むリストで試しましょう。',
  'list-style-image|記号に画像を使います。|オリジナルの箇条書きに使います。|url(...)、none|url("assets/marker.svg")|画像が読めない場合に備えてtypeも指定できます。',
  'list-style-position|記号を行の内側・外側へ置きます。|折り返した文章との位置を比べるときに使います。|inside、outside|inside|長い項目で違いが見やすくなります。'
]);
add("ボックス", "size", [
  'width|箱の横幅を決めます。|カードの幅を調整するときに使います。|px、%、auto|220px|通常は内容領域の幅です。',
  'min-width|箱の最小の横幅を決めます。|親が狭くても一定幅を保ちたいときに使います。|px、%|220px|親より大きい最小幅ならはみ出すことがあります。',
  'max-width|箱の最大の横幅を決めます。|大きな画面で広がり過ぎるのを防ぐときに使います。|px、%、none|220px|親の幅と合わせて確かめましょう。',
  'height|箱の高さを決めます。|一定の高さの領域を作るときに使います。|px、%、auto|120px|内容が多いとあふれることがあります。',
  'min-height|箱の最小の高さを決めます。|内容が少なくても高さを保ちたいときに使います。|px、%|120px|内容が増えればさらに高くなれます。',
  'max-height|箱の最大の高さを決めます。|縦に広がり過ぎるのを防ぐときに使います。|px、%、none|120px|内容があふれたらoverflowも検討します。'
]);
add("表示と配置", "layout", [
  'display|要素の並び方や表示を切り替えます。|横並びや非表示を試すときに使います。|block、inline、inline-block、none|inline-block|noneは表示だけでなく場所もなくなります。',
  'overflow|はみ出た内容の扱いを決めます。|小さな箱に長い文章を入れるときに使います。|visible、hidden、scroll、auto|auto|visibleは箱の大きさを無視する意味ではなく、内容を外へ見せます。',
  'overflow-x|横にはみ出た内容の扱いを決めます。|横方向のスクロールを制御するときに使います。|visible、hidden、scroll、auto|auto|片方の軸だけvisibleでも組み合わせによりautoとして計算されます。',
  'overflow-y|縦にはみ出た内容の扱いを決めます。|縦方向のスクロールを制御するときに使います。|visible、hidden、scroll、auto|auto|片方の軸だけvisibleでも組み合わせによりautoとして計算されます。',
  'position|要素を基準から動かす方法を選びます。|重ねたり位置を固定したりするときに使います。|static、relative、absolute、fixed|relative|absoluteは位置指定された祖先、fixedは通常ビューポートが基準です。',
  'top|配置の上側からの距離を決めます。|位置指定した箱を下へ動かすときに使います。|px、%、auto|30px|position: staticには効きません。',
  'right|配置の右側からの距離を決めます。|箱を右から配置するときに使います。|px、%、auto|30px|position: staticには効きません。',
  'bottom|配置の下側からの距離を決めます。|箱を下から配置するときに使います。|px、%、auto|30px|position: staticには効きません。',
  'left|配置の左側からの距離を決めます。|位置指定した箱を右へ動かすときに使います。|px、%、auto|30px|position: staticには効きません。',
  'z-index|重なった要素の前後を変えます。|重ねたカードの順を調整するときに使います。|整数、auto|2|位置指定された要素などで働きます。重なりのグループを越えられない場合もあります。',
  'float|要素を左右へ寄せ、後の文章を回り込ませます。|画像の横に文章を流すときに使います。|left、right、none|left|通常の横並び全般には別のレイアウト方法もあります。',
  'clear|指定した側のfloatの回り込みを終えます。|次の文章を画像の下から始めるときに使います。|left、right、both、none|both|clearを指定するのは後続の要素です。'
]);
add("テーブル", "table", [
  'table-layout|表の列幅の決め方を変えます。|列の幅を揃えたいときに使います。|auto、fixed|fixed|fixedでも明示した列幅は優先されます。表の幅も指定します。',
  'border-collapse|隣のセルの枠線を重ねるか決めます。|表の線をすっきり見せるときに使います。|collapse、separate|collapse|border-spacingはseparateのときに効きます。',
  'border-spacing|セルとセルの枠線の間隔を変えます。|表のセル間に隙間を作るときに使います。|px、横 縦|8px|セル内の余白はpaddingで指定します。'
]);
add("基本書式・セレクター", "selector", [
  'CSSの基本書式|セレクター・プロパティ・値を組にして書きます。|対象に見た目を指定するときに使います。|セレクター { プロパティ: 値; }|p { color: #2563eb; }|波括弧の中は「名前: 値;」の形です。',
  '複数のプロパティ指定|一つの対象にいくつも設定を書けます。|文字色と背景色を同時に変えるときに使います。|宣言を改行して複数記述|p { color: #2563eb; background: #eaf7ff; }|後に書いた同じプロパティが優先される場合があります。',
  '複数のセレクター指定|対象をカンマで並べます。|見出しと段落を同じ色にするときに使います。|h3、p|h3, p { color: #2563eb; }|カンマを忘れると子孫セレクターになります。',
  'inherit|親の値を子へ明示的に引き継ぎます。|継承しないプロパティも親に合わせたいときに使います。|inherit|color: inherit|すべてのプロパティが自動で継承されるわけではありません。',
  '!important|その宣言の優先度を強くします。|上書きが必要な特別な場合に使います。|値 !important|color: #2563eb !important|乱用すると後から直しにくくなります。',
  'タイプセレクター|タグ名で要素を選びます。|すべての段落などを揃えるときに使います。|p、h3|p|HTMLのタグ名を指定します。',
  'ユニバーサルセレクター|すべての要素を選びます。|共通の基本設定に使います。|*|*|広い範囲に効くので指定内容に気を付けます。',
  '子孫セレクター|親の内側にある要素を選びます。|カード内の段落だけ変えたいときに使います。|.card p|.card p|直接の子だけでなく、さらに内側の子孫も含みます。',
  'IDセレクター|id属性の値で要素を選びます。|特定の一つを選びたいときに使います。|#id、p#id|#special|同じidは一ページ内で重複させません。',
  'クラスセレクター|class属性の値で要素を選びます。|同じ役割の複数要素を揃えるときに使います。|.class、p.class、.a.b|.pick|.a.bは両方のクラスを持つ一要素です。',
  'IDとクラスの組み合わせ|idとclassの両方が一致する要素を選びます。|対象をさらに絞るときに使います。|#id.class、p#id.class|#special.pick|両条件を同時に満たす必要があります。',
  '属性セレクター|属性の有無や値で要素を選びます。|リンク先などに応じて変えるときに使います。|[title]、[title="hint"]|[title="hint"]|属性名や値の一致を確かめましょう。'
]);
add("疑似クラス", "pseudo", [
  ':link|まだ訪れていないリンクを選びます。|未訪問リンクの色を変えるときに使います。|a:link|a:link|訪問状態はブラウザの履歴によります。',
  ':visited|訪問済みのリンクを選びます。|訪問済みリンクを区別するときに使います。|a:visited|a:visited|プライバシー保護のため変更できる見た目が限られます。',
  ':hover|ポインターが乗った要素を選びます。|ボタンに反応を付けるときに使います。|button:hover|button:hover|タッチ操作には常時hoverがない場合があります。',
  ':focus|キーボードなどで選ばれた要素を選びます。|入力欄やボタンの位置を示すときに使います。|button:focus|button:focus|Tabキーで移動して試せます。',
  ':active|押している間の要素を選びます。|クリック中の反応を付けるときに使います。|button:active|button:active|押している間だけ変わります。',
  ':nth-child()|兄弟全体の先頭から数えて選びます。|交互の行などを装飾するときに使います。|2、2n+1、odd、even|:nth-child(2)|種類が違うタグも番号に含まれます。',
  ':nth-last-child()|兄弟全体の末尾から数えて選びます。|最後から何番目かを選ぶときに使います。|2、2n+1、odd、even|:nth-last-child(2)|タグの種類を問わず数えます。',
  ':first-child|兄弟全体で最初の要素を選びます。|先頭だけ装飾するときに使います。|なし|:first-child|最初の兄弟でなければ一致しません。',
  ':last-child|兄弟全体で最後の要素を選びます。|末尾だけ装飾するときに使います。|なし|:last-child|最後の兄弟でなければ一致しません。',
  ':nth-of-type()|同じタグの兄弟を先頭から数えます。|同じ種類の2番目などを選ぶときに使います。|2、2n+1、odd、even|:nth-of-type(2)|異なるタグは数に含みません。',
  ':nth-last-of-type()|同じタグの兄弟を末尾から数えます。|同じ種類の最後から2番目を選ぶときに使います。|2、2n+1、odd、even|:nth-last-of-type(2)|異なるタグは数に含みません。',
  ':first-of-type|同じタグの中で最初を選びます。|最初の段落だけ変えるときに使います。|なし|:first-of-type|兄弟全体の最初とは限りません。',
  ':last-of-type|同じタグの中で最後を選びます。|最後の段落だけ変えるときに使います。|なし|:last-of-type|兄弟全体の最後とは限りません。'
]);
add("単位", "unit", [
  'px|画面上のCSSピクセルを表す単位です。|細かい寸法を指定するときに使います。|例: 24px|24px|端末の物理ピクセルと必ず同じではありません。',
  'em|この要素の文字サイズなどを基準にする単位です。|文字に合わせて余白や寸法を変えるときに使います。|例: 1.5em|1.5em|font-sizeに使うときは親の文字サイズを基準にします。',
  'pt|印刷で使われるポイント単位です。|印刷用の文字サイズなどに使います。|例: 18pt|18pt|画面向けにはpxやemの方が扱いやすい場合があります。'
]);

const learningOrder = {
 "背景":["background-color","background-image","background-repeat","background-position","background-size","background"],
 "ボーダー":["border-style","border-width","border-color","border-top-style","border-right-style","border-bottom-style","border-left-style","border-top-width","border-right-width","border-bottom-width","border-left-width","border-top-color","border-right-color","border-bottom-color","border-left-color","border-top","border-right","border-bottom","border-left","border"],
 "テキストとフォント":["font-size","font-weight","font-style","font-family","line-height","text-align","text-decoration","text-indent","vertical-align","font"],
 "マージンとパディング":["margin","padding","margin-top","margin-right","margin-bottom","margin-left","padding-top","padding-right","padding-bottom","padding-left"],
 "リスト":["list-style-type","list-style-image","list-style-position","list-style"],
 "ボックス":["width","height","min-width","max-width","min-height","max-height"],
 "表示と配置":["display","overflow","overflow-x","overflow-y","position","top","right","bottom","left","z-index","float","clear"],
 "テーブル":["border-collapse","border-spacing","table-layout"],
 "単位":["px","em","pt"]
};
categories.forEach(c => {const order=learningOrder[c.title];if(order)c.items.sort((a,b)=>order.indexOf(a.name)-order.indexOf(b.name));});
const items = categories.flatMap(c => c.items);
const meanings = {
 "@charset":"文字コードの指定","@import":"別のCSSの読み込み",
 "background-color":"背景の色","background-image":"背景の画像","background-repeat":"背景画像の繰り返し","background-position":"背景画像の位置","background-size":"背景画像の大きさ","background":"背景の一括指定",
 "border-style":"枠線の種類","border-width":"枠線の太さ","border-color":"枠線の色","border":"枠線の一括指定",
 "color":"文字の色","opacity":"透明度",
 "text-align":"文字の横方向の揃え方","text-decoration":"文字の線や装飾","text-indent":"段落の一行目の字下げ","vertical-align":"行内や表セルの縦方向の揃え方",
 "font-size":"文字の大きさ","font-weight":"文字の太さ","font-style":"文字の傾き","font-family":"書体","line-height":"一行の高さ","font":"文字設定の一括指定",
 "margin":"枠線の外側の余白","padding":"枠線の内側の余白",
 "list-style-type":"リストの記号","list-style-image":"記号に使う画像","list-style-position":"記号の位置","list-style":"リスト記号の一括指定",
 "width":"横幅","height":"高さ","min-width":"横幅の下限","max-width":"横幅の上限","min-height":"高さの下限","max-height":"高さの上限",
 "display":"表示と並び方","overflow":"はみ出した内容の扱い","overflow-x":"横方向のはみ出し","overflow-y":"縦方向のはみ出し",
 "position":"配置方法","top":"上からの距離","right":"右からの距離","bottom":"下からの距離","left":"左からの距離","z-index":"重なりの前後","float":"要素を左右に寄せて文章を回り込ませる","clear":"回り込みの解除",
 "table-layout":"表の列幅の決め方","border-collapse":"表の枠線の重ね方","border-spacing":"表のセル間の距離",
 "CSSの基本書式":"CSSの書き方","複数のプロパティ指定":"一つの対象に複数の設定","複数のセレクター指定":"複数の対象をまとめて選ぶ",
 "inherit":"親の値を引き継ぐ","!important":"宣言の優先度を強くする",
 "タイプセレクター":"タグ名で選ぶ","ユニバーサルセレクター":"すべてを選ぶ","子孫セレクター":"内側の要素を選ぶ","IDセレクター":"idで選ぶ","クラスセレクター":"classで選ぶ","IDとクラスの組み合わせ":"idとclassの両方で選ぶ","属性セレクター":"属性で選ぶ",
 ":link":"未訪問のリンク",":visited":"訪問済みのリンク",":hover":"ポインターが乗った状態",":focus":"操作対象になった状態",":active":"押している状態",
 ":nth-child()":"兄弟全体の先頭から数えて選ぶ",":nth-last-child()":"兄弟全体の末尾から数えて選ぶ",":first-child":"兄弟全体の最初",":last-child":"兄弟全体の最後",
 ":nth-of-type()":"同じタグの先頭から数えて選ぶ",":nth-last-of-type()":"同じタグの末尾から数えて選ぶ",":first-of-type":"同じタグの最初",":last-of-type":"同じタグの最後",
 "px":"CSSピクセル","em":"文字サイズを基準にした単位","pt":"印刷用のポイント"
};
const directions={top:"上",right:"右",bottom:"下",left:"左"};
function meaningFor(item){
 const n=item.name;if(meanings[n])return meanings[n];
 const match=n.match(/^(border|margin|padding)-(top|right|bottom|left)(?:-(width|style|color))?$/);
 if(match){const side=directions[match[2]],part=match[3];if(match[1]==="border")return side+"の枠線"+(part?{"width":"の太さ","style":"の種類","color":"の色"}[part]:"の一括指定");return side+"の"+(match[1]==="margin"?"外側":"内側")+"の余白";}
 return item.description;
}
const valueMeanings={
 "repeat":"縦にも横にも画像を繰り返す","repeat-x":"横方向だけ画像を繰り返す","repeat-y":"縦方向だけ画像を繰り返す","no-repeat":"画像を繰り返さず1回だけ表示する","repeat no-repeat":"横に繰り返し、縦には繰り返さない",
 "cover":"箱が画像で埋まるまで拡大する。画像の一部は切れることがある","contain":"画像全体が箱に入る大きさにする。空きが残ることがある",
 "solid":"実線","dashed":"破線","dotted":"点線","double":"二重線","groove":"溝のような線","ridge":"盛り上がった線","inset":"内側に沈んで見える線","outset":"外側に浮いて見える線",
 "thin":"細い線","medium":"標準的な太さ","thick":"太い線",
 "block":"前後で改行され、幅いっぱいに広がる形式","inline":"文章の途中に並ぶ形式。幅と高さの指定は基本的に効かない","inline-block":"横に並びながら幅と高さも指定できる形式",
 "visible":"箱の外にはみ出しても見せる","hidden":"はみ出した部分を隠す","scroll":"常にスクロールできる領域にする","auto":"必要な場合だけ自動でスクロールなどを決める",
 "static":"通常の位置。topなどによる移動はできない","relative":"通常の位置を基準に動かす。元の場所は残る","absolute":"位置指定された祖先を基準に置く。通常の並びから外れる","fixed":"画面の表示領域を基準に固定する",
 "left":"左側に寄せる","center":"中央に寄せる","right":"右側に寄せる","top":"上側に寄せる","bottom":"下側に寄せる",
 "underline":"文字の下に線を引く","overline":"文字の上に線を引く","line-through":"文字の中央に取り消し線を引く",
 "baseline":"文字の基準線に揃える","sub":"下付きにする","super":"上付きにする","text-top":"文字の上端に揃える","middle":"中央付近に揃える","text-bottom":"文字の下端に揃える",
 "normal":"通常の表示に戻す","italic":"斜体の字形にする","oblique":"文字を傾けて表示する","bold":"太字にする","bolder":"親より太くする","lighter":"親より細くする",
 "serif":"文字の端に飾りのある書体","sans-serif":"飾りの少ない書体","cursive":"手書き風の書体","fantasy":"装飾的な書体","monospace":"文字幅が揃った書体",
 "xx-small":"非常に小さい文字","x-small":"小さい文字","small":"やや小さい文字","large":"やや大きい文字","x-large":"大きい文字","xx-large":"非常に大きい文字","larger":"親より大きい文字","smaller":"親より小さい文字",
 "disc":"黒丸","circle":"白丸","square":"四角","decimal":"1、2、3の番号","inside":"記号を文章の行の内側に置く","outside":"記号を文章の外側に置く",
 "collapse":"隣り合うセルの枠線を重ねる","separate":"セルごとに枠線を分ける",
 "both":"左右両方の回り込みを終える",
 "odd":"1、3、5番目など奇数番目","even":"2、4、6番目など偶数番目","2n+1":"1、3、5番目など2つおき","3n+1":"1、4、7番目など3つおき",
 "1個":"四辺に同じ値を使う","2個":"上・下／左・右の順に使う","3個":"上／左・右／下の順に使う","4個":"上／右／下／左の順に使う",
 "#RGB":"短い16進数の色指定","#RRGGBB":"6桁の16進数の色指定","色名":"redなどの色の名前","rgb()":"赤・緑・青の量で色を指定","rgba()":"赤・緑・青と透明度で色を指定","hsl()":"色相・鮮やかさ・明るさで指定","hsla()":"HSLと透明度で指定","transparent":"透明",
 "px":"CSSピクセル単位の長さ","em":"文字サイズを基準にした長さ","%":"基準となる親などに対する割合","none":"指定しない、または表示しない",
 "2":"2番目を選ぶ","1～4個の値":"1個なら四辺共通。2～4個なら順に各辺へ割り当てる",
 "複数画像はカンマで区切る":"カンマで区切った画像を前から順に重ねる",
 "横 縦":"1つ目が横方向、2つ目が縦方向の設定",
 "画像 位置 / サイズ 繰り返し 色":"画像、位置と大きさ、繰り返し、色を一行にまとめる",
 "複数背景はカンマで区切る":"カンマで区切って背景を複数重ねる",
 "1～4個の色":"上・右・下・左の順に色を割り当てる",
 "太さ 形 色":"枠線の太さ・線の種類・色をまとめて指定する",
 "0～1":"0が透明、1が不透明。間の数値で透明度を調整する",
 "書体名":"端末に入っている書体の名前を指定する",
 "数値":"単位を付けない行高の倍率。例：1.5は文字サイズの1.5倍",
 "style weight size/line-height family":"傾き・太さ・サイズと行高・書体の順にまとめる",
 "type image position":"記号の種類・画像・位置をまとめる",
 "整数":"重なり順を整数で指定する。大きいほど手前",
 "inherit":"親の要素で使われている値を引き継ぐ",
 "値 !important":"指定値の後ろに付け、宣言の優先度を強くする"
};
function valueHelp(item,raw){
 const v=String(raw).trim(),n=item.name,g=item.group;
 if(n==="@charset")return "このCSSファイルをUTF-8として読むように示す";
 if(n==="@import")return "指定した別のCSSファイルを読み込む";
 if(n==="background"&&v.includes(" "))return "背景画像・繰り返し・位置・色をまとめて指定する";
 if(n==="background-position"&&v.includes(" "))return "1つ目が横方向、2つ目が縦方向の位置";
 if(n==="font"&&v.includes(" "))return "文字の傾き・太さ・サイズと行高・書体をまとめて指定する";
 if(n==="list-style"&&v.includes(" "))return "記号の種類・画像・位置をまとめて指定する";
 if((n==="border"||/^border-(top|right|bottom|left)$/.test(n))&&v.includes(" "))return "枠線の太さ・種類・色をまとめて指定する";
 if(n==="border-spacing"&&v.includes(" "))return "1つ目が横方向、2つ目が縦方向のセル間隔";
 if(g==="selector"){
   const syntaxHelp={
    "CSSの基本書式":"左に対象、波括弧の中にプロパティ名と値を書く",
    "複数のプロパティ指定":"波括弧の中に「名前: 値;」を複数行書く",
    "複数のセレクター指定":"カンマで区切ったタグを同じ設定の対象にする",
    "inherit":"親の値を引き継ぐ",
    "!important":"値の後ろに付けて宣言の優先度を強くする",
    "タイプセレクター":"その名前のHTMLタグを選ぶ",
    "ユニバーサルセレクター":"すべての要素を選ぶ",
    "子孫セレクター":"左の要素の内側にある右の要素を選ぶ",
    "IDセレクター":"指定したidの要素を選ぶ",
    "クラスセレクター":"指定したclassの要素を選ぶ",
    "IDとクラスの組み合わせ":"idとclassの両方が一致する要素を選ぶ",
    "属性セレクター":"属性の有無、または属性値が一致する要素を選ぶ"
   };
   return syntaxHelp[n];
 }
 if(g==="pseudo"){
   if(valueMeanings[v])return valueMeanings[v];
   if(v==="なし")return "括弧内の値は不要。疑似クラス名だけを付ける";
   if(/^a:/.test(v))return n===":link"?"まだ訪問していないリンクを選ぶ":"訪問済みのリンクを選ぶ";
   if(/^button:/.test(v))return meaningFor(item)+"ボタンを選ぶ";
 }
 if(g==="unit")return "例として "+v.replace(/^例:\s*/,"")+" を指定する。"+meaningFor(item)+"で大きさを表す";
 if(v==="none"&&g==="border")return "枠線を表示しない";
 if(v==="hidden"&&g==="border")return "枠線を表示しない。表の枠線ではnoneと扱いが異なる";
 if(v==="none"&&n==="display")return "要素を表示せず、その場所もなくす";
 if(v==="none"&&g==="list")return "記号や画像を表示しない";
 if(v==="none"&&n==="max-width"||v==="none"&&n==="max-height")return "上限を設けない";
 if(v==="auto"&&g==="size")return "内容や親の幅に合わせて自動で決める";
 if(v==="auto"&&g==="boxmodel")return "利用できる外側の空きを自動で割り当てる";
 if(v==="auto"&&["top","right","bottom","left"].includes(n))return "この方向の距離を自動で決める";
 if(v==="left"&&n==="float")return "箱を左へ寄せ、文章を右に回り込ませる";
 if(v==="right"&&n==="float")return "箱を右へ寄せ、文章を左に回り込ませる";
 if(v==="none"&&n==="float")return "左右へ寄せず、通常の位置に置く";
 if(v==="left"&&n==="clear"||v==="right"&&n==="clear")return v==="left"?"左側の回り込みを終える":"右側の回り込みを終える";
 if(v==="none"&&n==="clear")return "回り込みを解除しない";
 if(v==="fixed"&&n==="table-layout")return "表の幅と指定された列幅を使って列を配置する";
 if(v==="auto"&&n==="table-layout")return "内容を見て列幅を調整する";
 if(valueMeanings[v])return valueMeanings[v];
 if(/^#|^rgb|^hsl/.test(v))return "この色を使う";
 if(/^url\(/.test(v))return "指定した画像ファイルを使う";
 if(v==="2n+1"||v==="3n+1")return valueMeanings[v];
 if(/^\d+(?:\.\d+)?$/.test(v))return n==="opacity"?"0は透明、1は不透明。値が大きいほど濃くなる":n==="z-index"?"大きい整数ほど手前に表示される":"数値を指定する";
 if(/^[-\d.]+(?:px|em|pt|%)$/.test(v))return (g==="text"&&n==="font-size"?"文字の大きさ":g==="boxmodel"?"余白の幅":g==="background"?"背景画像の大きさや位置":g==="size"?"箱の大きさ":"距離や大きさ")+"をこの値で指定する";
 if(v.includes(" "))return "複数の値を順番に組み合わせて指定する";
 return "この指定で表示を変える";
}
const exampleTargets={background:"カード",border:"見出しの枠",color:"見出し",text:"段落",boxmodel:"カード",list:"箇条書き",size:"カード",layout:"見本の箱",table:"表",selector:"見本のHTML",pseudo:"見本の要素",unit:"見本の文字",at:"CSSファイル"};
function exampleFor(i){
 const specialExamples={
 "@charset":"例：CSSファイルの先頭に @charset \"UTF-8\"; と書く。",
 "@import":"例：CSSファイルの先頭付近に @import url(\"common.css\"); と書く。",
 "background-color":"例：お知らせカードの背景を淡い水色にする。",
 "background-repeat":"例：小さな模様を横方向だけに並べる。",
 "background-size":"例：背景の模様を64pxの大きさで表示する。",
 "margin":"例：カードの外側に余白を作り、隣のカードと離す。",
 "padding":"例：カードの文字と枠線の間を広げる。",
 "opacity":"例：カード全体を少し透かして見せる。",
 "display":"例：横に並べたい箱をinline-blockにする。",
 "position":"例：見本の箱を通常の位置から少し動かす。",
 "z-index":"例：重なった2枚のカードのうち、桃色のカードを前に出す。",
 "float":"例：画像を左へ寄せ、その右に文章を流す。",
 "clear":"例：画像の下から次の段落を始める。",
 ":nth-child()":"例：兄弟全体で3番目の段落を選ぶ。",
 ":nth-of-type()":"例：段落の中で2番目を選ぶ。"
 };
 return specialExamples[i.name]||"例："+exampleTargets[i.group]+"に「"+(i.group==="selector"||i.group==="pseudo"?syntax(i):i.name+": "+i.initial+";")+"」を使う。";
}
const $ = id => document.getElementById(id);
let current = items[0], value = current.initial, extra = {}, selectedValue=current.initial;
const special = new Set(["at","selector","pseudo","unit"]);
const sideName = name => /-(top|right|bottom|left)(-|$)/.test(name) ? name.match(/-(top|right|bottom|left)(-|$)/)[1] : "";
const groupProp = item => item.group === "unit" ? "font-size" : item.name;
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function cssSafe(s){return String(s).replace(/<\/style/gi,"<\\/style");}
function menu(filter=""){
  let total=0; $("menu").innerHTML="";
  categories.forEach(cat=>{
    const found=cat.items.filter(i=>(i.name+" "+meaningFor(i)+" "+i.description+" "+i.usage+" "+i.values.join(" ")+" "+i.values.map(v=>valueHelp(i,v)).join(" ")+" "+i.note).toLowerCase().includes(filter.toLowerCase()));
    if(!found.length)return;
    total+=found.length;
    const d=document.createElement("details"); d.open=!!filter || cat.items.includes(current);
    d.innerHTML='<summary>'+escapeHtml(cat.title)+' <small>'+found.length+'</small></summary><div class="menu-items"></div>';
    found.forEach(item=>{
      const b=document.createElement("button");b.type="button";b.textContent=item.name;b.className=item===current?"active":"";
      b.addEventListener("click",()=>select(item));d.querySelector(".menu-items").append(b);
    }); $("menu").append(d);
  });
  $("search-count").textContent=total+" 件の項目";
}
function select(item){
  current=item;value=item.initial;selectedValue=item.initial;extra=item.group==="boxmodel"&&!sideName(item.name)?{count:"1個"}:{};$("category-tag").textContent=item.category;
  $("item-index").textContent=(items.indexOf(item)+1)+" / "+items.length;
  $("item-title").textContent=item.name;$("item-meaning").textContent="日本語の意味： "+meaningFor(item);
  // $("supplement-tag").hidden=item.name!=="background-size"; // バッジを復活するときに使用
  $("values-title").textContent=["selector","pseudo"].includes(item.group)?"代表的な書き方と意味":"代表的な値と意味";
  $("description").textContent=item.description;
  $("values").innerHTML=item.values.map(v=>'<div class="value-row"><dt>'+escapeHtml(v)+'</dt><dd>'+escapeHtml(valueHelp(item,v))+'</dd></div>').join("");
  $("status").textContent="";
  $("lab-title").textContent=item.group==="at"?"書き方と役割を確認":"値を変えて見比べる";
  $("lab-hint").textContent=item.group==="at"?"この項目は画面上の見た目を直接変えません":"操作すると見本とコードが変わります";
  $("edit-panel").hidden=special.has(item.group);
  renderControls();update();menu($("search").value);
  if(innerWidth<=800){$("sidebar").classList.remove("open");$("menu-toggle").setAttribute("aria-expanded","false");}
  $("main").scrollTop=0;
  document.querySelector(".explain-column").scrollTop=0;
  document.querySelector(".try-column").scrollTop=0;
}
function syntax(i){
 if(i.group==="at")return i.name==="@charset"?'@charset "UTF-8";':'@import url("common.css");';
 if(i.group==="selector")return i.initial;
 if(i.group==="pseudo")return i.initial+' { color: #d83f75; }';
 return '.sample { '+groupProp(i)+': '+i.initial+'; }';
}
function control(label, values, selected, callback){
 const wrap=document.createElement("div");wrap.className="control";const id="control-"+$("controls").children.length;
 const lab=document.createElement("label");lab.htmlFor=id;lab.textContent=label;wrap.append(lab);
 const sel=document.createElement("select");sel.id=id;
 values.forEach(v=>{const o=document.createElement("option");o.value=v;o.textContent=v;sel.append(o)});
 if(!values.includes(selected)){const o=document.createElement("option");o.value=selected;o.textContent=selected;sel.prepend(o)}
 sel.value=selected;sel.addEventListener("change",()=>{selectedValue=sel.value;callback(sel.value)});wrap.append(sel);$("controls").append(wrap);
}
function range(label,min,max,step,initial,callback){
 const wrap=document.createElement("div");wrap.className="control";const lab=document.createElement("label");lab.textContent=label+"：";const output=document.createElement("strong");output.textContent=initial;lab.append(output);wrap.append(lab);
 const input=document.createElement("input");input.type="range";input.min=min;input.max=max;input.step=step;input.value=initial;input.addEventListener("input",()=>{output.textContent=input.value;selectedValue=input.value;callback(input.value)});wrap.append(input);$("controls").append(wrap);
}
function renderControls(){
 $("controls").innerHTML="";
 const i=current, n=i.name, g=i.group;
 if(g==="at"){ $("controls").textContent="読み込み指定は、書き方と関係図で確認します。";return; }
 if(g==="selector"){ if(!["inherit","!important","CSSの基本書式","複数のプロパティ指定","複数のセレクター指定"].includes(n))control("試すセレクター",[i.initial,"p",".pick","#special",".card p","[title]"],i.initial,v=>{value=v;update()});return; }
 if(g==="pseudo"){
   if(n.includes("nth-"))control("番号の式",["2","odd","even","2n+1","3n+1"],"2",v=>{extra.expr=v;update()});
   return;
 }
 if(g==="unit"){range("値",n==="em"?.5:8,n==="em"?3:50,n==="em"?.1:1,parseFloat(value),v=>{value=v+n;update()});return;}
 if(g==="boxmodel"){
   if(sideName(n)){const index=["top","right","bottom","left"].indexOf(sideName(n));range(["上","右","下","左"][index],0,50,1,28,v=>{extra[index]=v;extra.direct=null;update()});}
   else{control("値の個数",["1個","2個","3個","4個"],extra.count||"1個",v=>{extra.count=v;extra.direct=null;renderControls();update()});["上","右","下","左"].slice(0,Number((extra.count||"1個")[0])).forEach((s,index)=>range(s,0,50,1,extra[index]??24,v=>{extra[index]=v;extra.direct=null;update()}));}
   return;
 }
 if(g==="background"){
   if(n==="background-repeat")control("繰り返し",["repeat","repeat-x","repeat-y","no-repeat","repeat no-repeat"],value,v=>{value=v;update()});
   else if(n==="background-position")control("位置",["left top","center center","right bottom","25% 70%","20px 30px"],value,v=>{value=v;update()});
   else if(n==="background-size")control("画像の大きさ",["32px","64px","96px","cover","contain"],value,v=>{value=v;update()});
   else if(n==="background-color")colorInput(value,v=>{value=v;update()});
   else control("背景画像",["url(\"assets/pattern.svg\")","none","url(\"assets/pattern.svg\"), url(\"assets/marker.svg\")"],n==="background"?"url(\"assets/pattern.svg\")":"url(\"assets/pattern.svg\")",v=>{if(n==="background")value=v+" no-repeat center #eaf7ff";else value=v;update()});
   return;
 }
 if(g==="border"){
   if(n.includes("style"))control("線の種類",["solid","dashed","dotted","double","groove","ridge","inset","outset","none","hidden"],value,v=>{value=v;update()});
   else if(n.includes("color"))colorInput(value,v=>{value=v;update()});
   else if(n.includes("width"))range("太さ(px)",0,24,1,parseFloat(value),v=>{value=v+"px";update()});
   else {control("線の種類",["solid","dashed","dotted","double","groove","ridge","inset","outset","none","hidden"],"solid",v=>{extra.style=v;value="8px "+v+" #e07b9d";update()});}
   if(["border-width","border-style","border-color"].includes(n))control("四辺の例",["同じ値","上・右・下・左を別々"],"同じ値",v=>{extra.sides=v;update()});
   return;
 }
 if(g==="color"){if(n==="color")colorInput(value,v=>{value=v;update()});else range("透明度",0,1,.05,value,v=>{value=v;update()});return;}
 if(g==="text"){
   if(["text-align","text-decoration","vertical-align","font-style","font-weight","font-family"].includes(n))control("指定値",i.values.filter(v=>!v.includes("、") && !v.includes("名") && !v.includes("px")),value,v=>{value=v;update()});
   else if(n==="font")control("書き方",["italic bold 24px/1.5 sans-serif","normal 20px/1.8 serif","bold 28px monospace"],value,v=>{value=v;update()});
   else if(n==="line-height")range("行高（倍）",.8,3,.1,parseFloat(value),v=>{value=v;update()});
   else range(n==="font-size"?"文字サイズ(px)":"字下げ(px)",0,60,1,parseFloat(value)||24,v=>{value=v+"px";update()});
   return;
 }
 if(g==="list"){control("指定値",n==="list-style-type"?["disc","circle","square","decimal","none"]:n==="list-style-position"?["inside","outside"]:n==="list-style-image"?['url("assets/marker.svg")',"none"]:["square inside","disc outside",'square url("assets/marker.svg") inside'],value,v=>{value=v;update()});return;}
 if(g==="size"){
   range("指定値(px)",40,350,10,parseFloat(value),v=>{value=v+"px";update()});
   if(n.includes("width"))range("親の幅(px)",160,370,10,280,v=>{extra.parent=v;update()});
   return;
 }
 if(g==="layout"){
   if(["display","position","float","clear","overflow","overflow-x","overflow-y"].includes(n))control("指定値",i.values,value,v=>{value=v;update()});
   else range(n==="z-index"?"重なり順":"距離(px)",n==="z-index"?-2:-40,n==="z-index"?5:80,1,parseFloat(value),v=>{value=v+(n==="z-index"?"":"px");update()});
   return;
 }
 if(g==="table"){if(n==="border-spacing")range("間隔(px)",0,24,1,parseFloat(value),v=>{value=v+"px";update()});else control("指定値",i.values,value,v=>{value=v;update()});}
}
function colorInput(initial,callback){const w=document.createElement("div");w.className="control";const l=document.createElement("label");l.textContent="色を選ぶ";const x=document.createElement("input");x.type="color";x.value=initial;x.addEventListener("input",()=>{selectedValue=x.value;callback(x.value)});w.append(l,x);$("controls").append(w);}
function boxValue(){if(extra.direct)return extra.direct;const a=[0,1,2,3].map(j=>(extra[j]??(sideName(current.name)?j===["top","right","bottom","left"].indexOf(sideName(current.name))?28:0:24))+"px");return extra.count==="2個"?a[0]+" "+a[1]:extra.count==="3個"?a[0]+" "+a[1]+" "+a[2]:extra.count==="4個"?a.join(" "):a[0];}
function declaration(){
 const i=current;
 if(i.group==="boxmodel")return i.name+": "+(extra.direct|| (sideName(i.name)?((extra[["top","right","bottom","left"].indexOf(sideName(i.name))]??28)+"px"):boxValue()));
 if(i.group==="border"&&extra.sides==="上・右・下・左を別々"){const vals=i.name==="border-width"?[value,"3px","9px","14px"]:i.name==="border-style"?[value,"solid","dotted","double"]:[value,"#5ba5bc","#e9a25c","#7fbc83"];return i.name+": "+vals.join(" ")}
 if(i.group==="unit")return "font-size: "+value;
 return i.name+": "+value;
}
function codeText(){
 const i=current;
 if(i.group==="at")return syntax(i)+(i.name==="@import"?"\n/* common.css に別のスタイルを書く */":"");
 if(i.group==="selector")return selectorCode(i);
 if(i.group==="pseudo")return pseudoSelector(i)+" {\n  color: #c83371;\n  background-color: #ffe7f0;\n}";
 if(i.name==="float")return ".photo {\n  float: "+value+";\n}";
 if(i.name==="clear")return ".next {\n  clear: "+value+";\n}";
 if(i.name==="position")return ".sample {\n  position: "+value+";\n}";
 if(["top","right","bottom","left","z-index"].includes(i.name))return ".sample {\n  "+i.name+": "+value+";\n}";
 return ".sample {\n  "+declaration()+";\n}";
}
function supportCode(i){
 const n=i.name,g=i.group;
 if(g==="at")return "";
 if(n==="background-color")return ".sample {\n  background-image: none;\n}";
 if(n==="background-image")return ".sample {\n  background-repeat: no-repeat;\n  background-size: 64px;\n}";
 if(n==="background-repeat")return '.sample {\n  background-image: url("assets/pattern.svg");\n  background-size: 64px;\n}';
 if(n==="background-position"||n==="background-size")return '.sample {\n  background-image: url("assets/pattern.svg");\n  background-repeat: no-repeat;\n}';
 if(g==="border"&&n.includes("style"))return ".sample {\n  border-width: 6px;\n  border-color: #5ba5bc;\n}";
 if(g==="border"&&(n.includes("width")||n.includes("color")))return ".sample {\n  border-style: solid;\n}";
 if(n==="vertical-align")return ".sample {\n  display: inline-block;\n}";
 if(n==="z-index")return ".sample {\n  position: absolute;\n}";
 if(n==="position")return ".sample {\n  top: 30px;\n  left: 65px;\n}";
 if(["top","right","bottom","left"].includes(n))return ".sample {\n  position: absolute;\n}";
 if(n==="clear")return ".photo {\n  float: left;\n}";
 if(n==="border-spacing")return "table {\n  border-collapse: separate;\n}";
 if(g==="boxmodel")return ".sample {\n  border: 8px solid #ad8bcb;\n}";
 return "/* 見本の読みやすさのため、背景色・余白・枠などを補助的に設定しています。 */";
}
function selectorCode(i){
 const n=i.name;
 if(n==="CSSの基本書式"||n==="複数のプロパティ指定"||n==="複数のセレクター指定")return i.initial.replace("; ",";\n  ").replace("{ ","{\n  ").replace(" }","\n}");
 if(n==="inherit")return ".card { color: #2563eb; }\n.card p { color: inherit; }";
 if(n==="!important")return "p { color: #768898; }\np { color: #2563eb !important; }";
 return value+" {\n  color: #c83371;\n  background-color: #ffe7f0;\n}";
}
function pseudoSelector(i){const n=i.name;if(n.startsWith(":nth-"))return "p"+n.replace("()", "("+(extra.expr||"2")+")");if(n.includes("child")||n.includes("type"))return "p"+n;return n.startsWith(":link")||n.startsWith(":visited")?"a"+n:"button"+n;}
function update(){
 const code=codeText();$("code").textContent=code;
 $("value-explain").hidden=current.group==="at";
 $("value-explain").textContent=current.group==="at"?"":"今の値： "+selectedValue+" — "+valueHelp(current,selectedValue);
 $("editor").value=special.has(current.group)?"":current.group==="boxmodel"?(extra.direct|| (sideName(current.name)?declaration().split(": ")[1]:boxValue())):value;
 $("preview").innerHTML="";
 if(current.group==="at"){$("preview").innerHTML='<div class="explanation"><strong>ファイルのつながり</strong><p>HTML → style.css → common.css</p><p>HTMLがCSSを読み込み、@import はCSSから別のCSSを読み込みます。@charset はそのCSSファイルの文字を正しく読むための宣言です。</p></div>';return;}
 const f=document.createElement("iframe");f.title=current.name+" の動作見本";f.setAttribute("sandbox","allow-same-origin");f.srcdoc=frameHtml(current,code);$("preview").append(f);
}
function frameHtml(item,code){
 let html="", base="", css="";
 const g=item.group,n=item.name,decl=declaration();
 if(g==="background"){const label={"background-color":"背景色","background-image":"背景画像","background-repeat":"画像の繰り返し","background-position":"画像の位置","background-size":"画像の大きさ","background":"背景のまとめ指定"}[n];html='<div class="sample">'+label+'の見本</div>';base='.sample{width:100%;height:235px;border:2px solid #aacbd8;border-radius:12px;padding:18px;background-color:#eaf7ff;background-image:url("assets/pattern.svg");background-repeat:no-repeat;background-position:center;background-size:64px;color:#244c61;font-weight:bold}';}
 if(g==="border"){html='<div class="sample">四辺の線を見比べよう</div>';base='.sample{margin:35px auto;width:220px;min-height:150px;padding:25px;background:#fff6fa;border:6px solid #5ba5bc;text-align:center;font-weight:bold}';}
 if(g==="color"){html='<div class="sample">文字も <span>子要素も</span> 変わる</div><p>下の背景が透けて見えます</p>';base='body{background:repeating-linear-gradient(45deg,#fff,#fff 14px,#e7f2f5 14px,#e7f2f5 28px)}.sample{margin:35px auto;width:75%;padding:26px;background:#ffe2ed;color:#274c65;font-size:25px;font-weight:bold;text-align:center}.sample span{display:inline-block;padding:8px;background:#fff}';}
 if(g==="text"){html=n==="vertical-align"?'<p class="line">基準の文字 <span class="sample">小さな箱</span> 基準の文字</p><table><tr><td>表セル</td><td class="sample">縦位置</td></tr></table>':'<div class="sample">一行目の文章をここに書きます。読みやすい間隔と文字の見え方を確かめましょう。<br>二行目にも文章を置きます。<br>三行目で行高の差を確認します。</div>';base=n==="vertical-align"?'.line{font-size:25px;line-height:85px}.sample{display:inline-block;font-size:14px;background:#ffe2ed;padding:4px}table{border-collapse:collapse;width:80%;height:85px}td{border:1px solid #8eb6c4}':'.sample{margin:20px auto;width:90%;padding:16px;background:#eaf7ff;color:#244b60;font-size:22px;line-height:1.5;border-radius:9px}';}
 if(g==="boxmodel"){const margin=item.name.startsWith("margin"), side=sideName(n);let vals=[0,1,2,3].map(j=>extra[j]??(side?j===["top","right","bottom","left"].indexOf(side)?28:0:24));if(!side&&extra.count!=="4個"){const count=extra.count==="2個"?2:extra.count==="3個"?3:1;vals=count===1?[vals[0],vals[0],vals[0],vals[0]]:count===2?[vals[0],vals[1],vals[0],vals[1]]:[vals[0],vals[1],vals[2],vals[1]]}const q=extra.direct||vals.join("px ")+"px";html='<div class="key"><span>外側の余白 margin</span><span>枠線 border</span><span>内側の余白 padding</span><span>内容 content</span></div><div class="outer"><div class="sample"><div class="inside">内容 content</div></div></div><p>1個: 四辺同じ　2個: 上下 / 左右　3個: 上 / 左右 / 下　4個: 上 / 右 / 下 / 左</p>';base='.key{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px}.key span{padding:4px 7px;border-radius:5px;font-size:12px}.key span:nth-child(1),.outer{background:#fce3ed}.key span:nth-child(2){background:#dac9e9}.key span:nth-child(3){background:#dff2de}.key span:nth-child(4),.inside{background:#d9effa}.outer{min-height:160px;overflow:auto}.sample{display:inline-block;background:#dff2de;border:8px solid #ad8bcb;'+(margin?'margin:'+q+';padding:16px':'margin:14px;padding:'+q)+'}.inside{padding:14px;color:#24566b;font-weight:bold}p{font-size:13px}';}
 if(g==="list"){html='<ul class="sample"><li>最初の項目は長い文章です。折り返したとき、記号の位置を確かめます。</li><li>二番目の項目</li><li>三番目の項目</li></ul>';base='.sample{margin:25px 15px;padding-left:42px;width:85%;font-size:20px;line-height:1.6;background:#eef9fc}.sample li{padding:4px}';}
 if(g==="size"){html='<div class="parent"><div class="sample">箱の内容<br>折り返しと親幅を比べる</div></div><p>水色の枠が親の幅です。親の幅も動かしてみましょう。</p>';const baseWidth=n==="min-width"?"120px":n==="max-width"?"100%":"150px",baseHeight=n==="min-height"?"55px":n==="max-height"?"175px":"80px";base='.parent{width:'+Number(extra.parent||280)+'px;max-width:100%;height:205px;border:3px dashed #83b5c5;background:#eff9fc;overflow:auto}.sample{width:'+baseWidth+';height:'+baseHeight+';padding:12px;border:2px solid #4b98b2;background:#ffe7ef;box-sizing:border-box}p{font-size:14px}';}
 if(g==="layout"){
   if(n==="display"){html='<div class="row"><span class="sample">A</span><span class="sample">B</span><span class="sample">C</span></div><p>none にすると対象の A の場所もなくなります。</p>';base='.row{border:2px dashed #9fc4d0;padding:18px}.sample{width:95px;height:65px;margin:5px;padding:13px;background:#ffe4ed;border:2px solid #d77c9b}p{font-size:14px}';}
   else if(n.startsWith("overflow")){html='<div class="sample"><div class="wide">幅の広い内容　幅の広い内容　幅の広い内容</div>一行目の文章です。二行目の文章です。三行目の文章です。四行目の文章です。五行目の文章です。</div>';base='.sample{width:220px;height:105px;margin:25px;border:3px solid #6caac0;background:#eaf7ff}.wide{width:360px;white-space:nowrap;background:#ffe4ed}';}
   else if(n==="z-index"){html='<div class="stack"><div class="back">青：z-index 1</div><div class="sample">桃：前後を変更</div></div>';base='.stack{position:relative;height:220px}.back,.sample{position:absolute;width:155px;height:115px;padding:15px;font-weight:bold}.back{top:30px;left:45px;background:#b7e5f4;z-index:1}.sample{top:75px;left:105px;background:#ffc9de}';}
   else if(n==="float"||n==="clear"){html='<div class="photo">画像の見本</div><p>文章が画像の横に回り込みます。文字を十分に長くすると、回り込みの形が見えてきます。文章が画像の横に回り込みます。</p><p class="sample next">この段落で回り込みを終える</p>';base='.photo{width:110px;height:105px;background:#bde9f5;margin:0 12px 10px 0;padding:13px;font-weight:bold;border-radius:8px}p{font-size:17px;line-height:1.5}.sample{background:#ffe5ee}'+(n==="clear"?'.photo{float:left}':'');}
   else{html='<div class="position-area"><span>基準の親（position: relative）</span><div class="ghost">通常の位置</div><div class="sample">動く箱</div><div class="other">後続の要素</div></div><p>fixed はこの見本フレームの表示領域を基準にします。</p>';base='.position-area{position:relative;height:200px;border:2px dashed #90bdcc;background:#eff9fc;padding:12px}.position-area>span{font-size:13px}.ghost{position:absolute;top:55px;left:30px;border:2px dashed #d894ac;color:#a45d77;padding:12px}.sample{width:115px;height:70px;padding:14px;background:#ffcfe0;border:2px solid #d782a2;font-weight:bold}.other{background:#d3f0f7;padding:7px;width:130px}p{font-size:13px}';}
 }
 if(g==="table"){html='<table class="sample"><tr><th>品名</th><th>説明がとても長い商品</th><th>価格</th></tr><tr><td>ノート</td><td>書きやすいノートです</td><td>300円</td></tr><tr><td>ペン</td><td>青いインク</td><td>120円</td></tr></table>';base='.sample{width:100%;table-layout:auto;border-collapse:separate;border-spacing:4px}th,td{border:2px solid #80aeca;padding:12px;background:#ecf9fc;overflow:hidden;text-overflow:ellipsis}';}
 if(g==="selector"||g==="pseudo"){return selectorFrame(item,code);}
 if(g==="unit"){html='<div class="sample">文字サイズを比較</div><p>基準の文字は 16px です。<br>1em はこの例では約 16px、1pt は約 1.33px です。</p>';base='.sample{background:#e8f7fc;padding:20px}p{font-size:16px}';}
 if(g==="layout"&&n!=="position")html=html.replace("<p>fixed はこの見本フレームの表示領域を基準にします。</p>","");
 if(g==="background"){css=n==="background-color"||n==="background-image"||n==="background"?'.sample{background-image:none;height:150px}':'.sample{height:150px}';}
 if(g==="border")css='.sample{margin:12px auto;min-height:115px}';
 if(g==="boxmodel")css='.outer{min-height:115px}.key{margin-bottom:5px}';
 if(g==="size")css='.parent{height:155px}';
 if(g==="layout"&&["position","top","right","bottom","left"].includes(n))css='.position-area{height:155px}';
 let custom=decl+";";if(g==="boxmodel")custom="";if(g==="layout"&&(n==="float"||n==="clear"))custom=n==="float"?".photo{float:"+value+"}":".next{clear:"+value+"}";
 else if(g==="layout"&&["position","top","right","bottom","left"].includes(n))custom=".sample{position:"+(n==="position"?value:"absolute")+";"+(n==="position"?"top:30px;left:65px":n+":"+value)+"}";
 else custom=".sample{"+decl+"}";
 if(g==="background"&&n==="background")custom='.sample{'+decl+';background-size:64px}';
 if(g==="background"&&n==="background-image")custom='.sample{'+decl+';background-size:64px,32px}';
 if(g==="boxmodel")custom="";
 const frameBase='*{box-sizing:border-box}body{margin:0;padding:16px;font-family:system-ui,"Yu Gothic",sans-serif;color:#294b5c;overflow:auto}';
 return '<!doctype html><html lang="ja"><head><meta charset="utf-8"><base href="'+location.href.replace(/[^/]*$/,"")+'"><style>'+frameBase+base+css+cssSafe(custom)+'</style></head><body>'+html+'</body></html>';
}
function selectorFrame(item,code){
 const n=item.name, pseudo=item.group==="pseudo";
 let html=pseudo?'<div class="demo"><div class="siblings"><p>段落 p ①</p><span>span（種類の違う要素）</span><p>段落 p ②</p><p>段落 p ③</p></div><a href="#sample-visit">試せるリンク</a><button type="button">ボタン：hover / focus / active</button></div>':'<div class="demo card"><h3>見出し h3</h3><p class="pick" title="hint">段落 p：class=pick、title=hint</p><div><p id="special" class="pick">内側の段落 p：id=special、class=pick</p></div><span>span 要素</span><p>通常の段落 p</p></div>';
 let rule="",sel="";
 if(pseudo){sel=pseudoSelector(item);rule=sel+'{color:#c83371;background:#ffe7f0}';}
 else if(n==="inherit"){rule='.demo{color:#2563eb}.demo p{color:inherit}';}
 else if(n==="!important"){rule='p{color:#768898}p{color:#2563eb!important}';}
 else if(n==="CSSの基本書式"){rule='p{color:#2563eb}';}
 else if(n==="複数のプロパティ指定"){rule='p{color:#2563eb;background:#eaf7ff}';}
 else if(n==="複数のセレクター指定"){rule='h3,p{color:#2563eb}';}
 else{sel=value;rule=sel+'{color:#c83371;background:#ffe7f0}';}
 const src=escapeHtml(html.replace(/></g,">\n<"));
 const base='*{box-sizing:border-box}body{font-family:system-ui,"Yu Gothic",sans-serif;color:#294b5c;margin:0;padding:12px}.samples{display:grid;grid-template-columns:1fr 1fr;gap:12px}.source{white-space:pre-wrap;overflow-wrap:anywhere;background:#eef7fa;padding:12px;border-radius:8px;font:12px/1.5 monospace}.demo{border:2px solid #9bc4d0;padding:10px;border-radius:8px}.demo>*{display:block;margin:4px;padding:5px;border:1px solid #cbdde3}.demo .siblings>*{display:block;margin:4px;padding:5px;border:1px solid #cbdde3}.demo div{padding:4px}.demo button{font:inherit;cursor:pointer}.demo a{color:#375cb0}@media(max-width:480px){.samples{grid-template-columns:1fr}}';
 const note=pseudo?'<p>右の要素を操作してください。Tabキーでボタンへ移動できます。訪問状態は履歴に依存します。2番目の兄弟は span なので、p:nth-child(2) は一致しません。p:nth-of-type(2) は2番目の p に一致します。</p>':'<p>左がHTML、右が実際にCSSを適用した見本です。色の付いた要素が対象です。</p>';
 return '<!doctype html><html lang="ja"><head><meta charset="utf-8"><style>'+base+cssSafe(rule)+'</style></head><body><div class="samples"><pre class="source">'+src+'</pre>'+html+'</div>'+note+'</body></html>';
}
$("search").addEventListener("input",e=>menu(e.target.value));
$("menu-toggle").addEventListener("click",()=>{const open=$("sidebar").classList.toggle("open");$("menu-toggle").setAttribute("aria-expanded",String(open));if(open)$("search").focus()});
$("reset").addEventListener("click",()=>select(current));
$("copy").addEventListener("click",async()=>{try{await navigator.clipboard.writeText($("code").textContent);$("status").textContent="コードをコピーしました。"}catch{$("status").textContent="コピーできませんでした。コードを選択してコピーしてください。"}});
$("apply-code").addEventListener("click",()=>{const raw=$("editor").value.trim();const prop=groupProp(current);if(!raw||raw.length>180||/[{};]/.test(raw)||!CSS.supports(prop,raw)){$("status").textContent="このCSS値は使えません。値だけを入力してください。";return}value=raw;selectedValue=raw;extra=current.group==="boxmodel"?{direct:raw,count:"1個"}:{};$("status").textContent="入力した値を適用しました。";renderControls();update()});
select(items[0]);

