// 色見本は「名前,HEX」の順です。1系統12色。配色は下の paletteRecipes で追加できます。
const COLOR_FAMILIES = [
  {id:'pink',label:'ピンク',partner:'#4D786B',colors:[
    ['桜色','#FDECF1'],['ベビーピンク','#FADCE6'],['シェルピンク','#F6CBD9'],['ローズミルク','#EFB4CA'],['コーラルピンク','#F5A6B8'],['スモーキーピンク','#D99AAF'],['ピーチローズ','#E88EA8'],['ポップピンク','#EE729D'],['ローズピンク','#D85B87'],['ラズベリー','#BE4D78'],['ダスティローズ','#9E526D'],['ワインピンク','#743A55']
  ]},
  {id:'red',label:'レッド',partner:'#417B81',colors:[
    ['淡い赤','#FCE9E7'],['ペールレッド','#F8D4D0'],['サーモン','#F4B9B2'],['コーラルレッド','#EF9A91'],['朱色','#E97767'],['トマト','#E85D4E'],['スカーレット','#DC4C43'],['クリムゾン','#CA3941'],['ルビーレッド','#B63243'],['レンガ色','#A84D47'],['ボルドー','#883A48'],['深紅','#682D3D']
  ]},
  {id:'orange',label:'オレンジ',partner:'#3F7186',colors:[
    ['クリームオレンジ','#FFF0DF'],['アプリコット','#FCE1C4'],['ペールオレンジ','#F9D0A8'],['ピーチ','#F6BD90'],['サーモンオレンジ','#F3A876'],['みかん色','#F2995C'],['マンダリン','#ED8548'],['オレンジ','#E97636'],['テラコッタ','#D16B43'],['キャラメル','#B8764B'],['ブリックオレンジ','#9C5B3A'],['焦げ茶オレンジ','#75452F']
  ]},
  {id:'yellow',label:'イエロー',partner:'#4C668D',colors:[
    ['バニラ','#FFF9DE'],['レモンクリーム','#FFF3C5'],['淡い黄色','#FCEBA8'],['バターイエロー','#F8DD82'],['ミモザ','#F4D261'],['レモンイエロー','#F1D544'],['サンイエロー','#E9C739'],['マスタードライト','#DBB837'],['ゴールド','#C9A52F'],['マスタード','#AA8A2B'],['オリーブイエロー','#87782D'],['ダークオリーブ','#645D2B']
  ]},
  {id:'green',label:'グリーン',partner:'#C87976',colors:[
    ['ミントホワイト','#EAF7EF'],['ペールミント','#D4EEDD'],['若草色','#BBE3C9'],['セージライト','#A5CDB3'],['ミントグリーン','#8BCDA8'],['リーフグリーン','#71B58D'],['エメラルド','#4FA77C'],['フォレストライト','#3F956D'],['グリーン','#31845F'],['セージグリーン','#638C70'],['深緑','#376B52'],['森の緑','#27523F']
  ]},
  {id:'blue',label:'ブルー',partner:'#D79064',colors:[
    ['アイスブルー','#EAF5FB'],['ペールブルー','#D7ECF8'],['空色ライト','#BDDCF2'],['スカイブルー','#9ACBED'],['アクアブルー','#78B9DD'],['デニムライト','#6BA5CC'],['マリンブルー','#4D94C5'],['ブルー','#367EB3'],['コバルト','#2E6DA5'],['スレートブルー','#527995'],['ネイビー','#365C7C'],['ディープネイビー','#263F5E']
  ]},
  {id:'purple',label:'パープル',partner:'#80A56C',colors:[
    ['ラベンダーホワイト','#F3EFFA'],['ペールラベンダー','#E5DBF3'],['ライラック','#D4C4EB'],['藤色','#BEAADE'],['ラベンダー','#AB91CF'],['オーキッド','#9D7FC0'],['すみれ色','#8E6EAF'],['パープル','#7C5B9E'],['アメジスト','#6E4E91'],['モーブ','#765E86'],['プラム','#594369'],['ダークプラム','#40344F']
  ]},
  {id:'brown',label:'ブラウン',partner:'#7C9E9A',colors:[
    ['ミルクベージュ','#F7EFE6'],['サンド','#EEDDC9'],['ライトベージュ','#DFC9AF'],['カフェラテ','#CFB394'],['キャメルライト','#C49C73'],['キャメル','#B68C61'],['シナモン','#A97850'],['モカ','#98694D'],['ココア','#865C49'],['ウォルナット','#765542'],['チョコレート','#614536'],['ダークブラウン','#49372F']
  ]},
  {id:'gray',label:'グレー・モノトーン',partner:'#6B91A5',colors:[
    ['ホワイトグレー','#F7F8F9'],['オフホワイト','#F0F2F3'],['ペールグレー','#E4E8EA'],['ライトグレー','#D3D9DD'],['シルバー','#BDC6CC'],['ミディアムグレー','#9CA9B1'],['スレートライト','#7E8D98'],['グレー','#687985'],['スレート','#536674'],['チャコールライト','#46535C'],['チャコール','#333E47'],['ブラックグレー','#232C33']
  ]},
  {id:'white',label:'ホワイト・ベージュ',partner:'#638E80',colors:[
    ['ピュアホワイト','#FFFFFF'],['スノーホワイト','#FAFAF8'],['アイボリー','#F8F5ED'],['ミルクホワイト','#F5F0E6'],['シェルホワイト','#F3ECE3'],['クリーム','#F1E7D5'],['エクリュ','#EBDCC5'],['リネン','#E2CFB5'],['ベージュ','#D5BA98'],['トープ','#AF9477'],['グレージュ','#927E6D'],['ウォームブラウン','#6F5D50']
  ]}
];

// 各行は [テーマ名, 背景, メイン, アクセント]。
// 数字はその色系統の色見本の位置、HEXはほかの色です。
const paletteRecipes = [
  ['やさしい・かわいい',1,9,4],
  ['ナチュラル','#F8F6F1',10,5],
  ['シンプル・上品','#FFFFFF',11,3],
  ['明るい・元気',0,8,7],
  ['落ち着いた・大人っぽい','#F1F2F0',11,6],
  ['おしゃれ・モダン','#FFFFFF',9,'partner'],
  ['やわらかな休日',2,10,5],
  ['きりっと洗練','#F4F5F6',11,8]
];

function paletteContrast(a,b) {
  const luminance = hex => {
    const rgb=[1,3,5].map(i => parseInt(hex.slice(i,i+2),16)/255);
    const channels=rgb.map(value => value<=.04045 ? value/12.92 : ((value+.055)/1.055)**2.4);
    return channels[0]*.2126+channels[1]*.7152+channels[2]*.0722;
  };
  const values=[luminance(a),luminance(b)].sort((x,y)=>y-x);
  return (values[0]+.05)/(values[1]+.05);
}

for (const family of COLOR_FAMILIES) {
  family.palettes = paletteRecipes.map(([name,background,main,accent],index) => {
    const backgroundCode=typeof background==='number' ? family.colors[background][1] : background;
    // 見出しが背景とカードの両方で読めるよう、必要な場合だけ濃い色へ進めます。
    let mainIndex=main;
    while (mainIndex<family.colors.length-1 &&
      (paletteContrast(backgroundCode,family.colors[mainIndex][1])<4.5 ||
       paletteContrast('#FFFFFF',family.colors[mainIndex][1])<4.5 ||
       paletteContrast('#F5F6F7',family.colors[mainIndex][1])<4.5)) mainIndex++;
    return {
      id:`${family.id}-${index+1}`,
      name,
      colors:[backgroundCode,family.colors[mainIndex][1],accent==='partner' ? family.partner : family.colors[accent][1]]
    };
  });
}
