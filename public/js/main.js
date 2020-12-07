const Problems = [
  { title: 'AOJに慣れよう' },
  { id: 'ITP1_1_A', title: 'Hello, World' },
  { id: 'ITP1_1_B', title: 'xの3乗' },
  { id: '0335', title: 'ワード' },
  { id: '0380', title: '華氏と摂氏' },
  { id: '0315', title: '参加者数' },
  { id: 'ITP1_1_C', title: '長方形の面積と周の長さ' },
  { id: 'ITP1_2_A', title: '大小関係', hint: 'if文を使うよ' },
  { id: 'ITP1_2_B', title: '範囲' },
  { id: '0357', title: 'お年玉' },
  { id: '0381', title: '赤とんぼ' },

  { title: '入力と出力をマスターしよう' },
  { id: '0257', title: '乗車券' },
  { id: 'ITP1_1_D', title: '時計', hint: '「書式」の使い方を調べてみよう' },
  { id: 'ITP1_4_A', title: 'A/B Problem(割り算)', hint: '「有効桁数の表示」法を調べてみよう' },
  { id: 'ITP1_4_B', title: '円の面積と円周' },
  { id: '0094', title: '坪面積の計算' },
  { id: 'ITP1_2_C', title: '3つの数の整列', hint: 'これはよい問題' },
  { id: 'ITP1_2_D', title: '長方形の中の円', hint: '図を書いて落ち着いて考えてみよう' },
  { id: '0345', title: '長方形' },
  { id: '0641', title: 'ペンシル', cite: '情報オリンピック2017' },
  { id: '0652', title: 'ソーシャルゲーム', hint: '繰り返しを用いても解けます' },
  
  { title: '繰り返し' },
  { id: 'ITP1_3_A', title: '複数のHelloWorld' },
  { id: '0277', title: 'チケットの売り上げ' },
  { id: '0276', title: '気温の差' },
  { id: '0173', title: 'お化け屋敷' },
  { id: '0256', title: '10問解いたら何点取れる？' },
  { id: 'ITP1_3_B', title: 'テストケースの出力' },
  { id: 'ITP1_3_C', title: '2つの数の交換' },
  { id: '0003', title: '直角三角形' },
  { id: '0007', title: '借金' },
  { id: '0521', title: 'おつり', cite: 'JOI' },
  { id: 'ITP1_3_D', title: '約数の数' },

  { title: '繰り返しと関数' },
  { id: '0000', title: '九九', hint: '９９個書くより、ループを使おう' },
  { id: 'ITP1_5_A', title: '長方形の描画' },
  { id: 'ITP1_5_B', title: 'フレームの描画' },
  { id: 'ITP1_5_C', title: 'チェスボードの描画' },
  { id: 'ITP1_4_C', title: '簡単な計算機' },
  { id: 'ITP1_4_D', title: '最小値、最大値、合計値' },
  { id: '1147', title: 'ICPC 得点集計ソフトウェア', cite: '国内予選2007A' },
  { id: '0052', title: '階乗の0個数' },
  { id: 'ALDS1_10_A', title: 'フィボナッチ数列' },
  { id: 'ALDS1_5_C', title: 'コッホ曲線', hint: '再帰関数に挑戦' },
  
  { title: 'リスト' },
  { id: 'ITP1_6_A', title: '数列の反転' },
  { id: '0592', title: '平均点', cite: 'JOI', hint: 'リストを活用しよう' },
  { id: '0619', title: '科目選択', cite: 'JOI', hint: 'リストをうまく使おう' },
  { id: '0533', title: 'コンテスト', cite: 'JOI' },
  { id: '0511', title: '未提出者は誰だ？', cite: 'JOI' },
  { id: '0407', title: '集会所' },
  { id: '0516', title: '最大の和' },
  { id: '0001', title: '山の高さ'  },
  { id: '0028', title: '最頻値', hint: 'input()は例外(try/except)を使って止める' },
  { id: '0219', title: 'ヒストグラム' },

  { title: '文字と文字列' },
  { id: '0020', title: '大文字変換', hint: '文字列メソッドを覚えよう' },
  { id: 'ITP1_8_A', title: '大文字と小文字の入れ替え' },
  { id: 'ITP1_8_C', title: '文字のカウント', hint: 'ord(c)で文字コードに' },
  { id: 'ITP1_8_B', title: '数字の和' },
  { id: '2271', title: 'KUPC', cite: '(KUPC2011)' },
  { id: 'ITP1_9_A', title: '単語の検索' },
  { id: 'ITP1_8_D', title: 'リング' },
  { id: 'ALDS1_14_A', title: '文字列の探索' },
  { id: 'ITP1_9_B', title: 'シャッフル', hint: '部分文字列を取り出します' },
  { id: 'ITP1_9_C', title: 'カードゲーム' },
  { id: '0174', title: 'バドミントン' },
  

  { title: 'いよいよITP入門からの卒業' },
  { id: 'ITP1_10_A', title: '距離' },
  { id: 'ITP1_10_B', title: '三角形' },
  { id: 'ITP1_10_C', title: '標準偏差' },
  { id: 'ITP1_7_A', title: '成績' },
  { id: 'ITP1_7_B', title: '組み合わせの数' },
  { id: 'ITP1_6_B', title: '不足しているカードの発見' },
  { id: 'ITP1_6_D', title: 'ベクトル積' },
  { id: 'ITP1_7_D', title: '行列積' },
  { id: 'ITP1_7_C', title: '表計算' },
  { id: 'ITP1_10_D', title: 'リミンコフスキー距離' },

  { title: '整数と数値計算' },
  { id: 'NTL_1_A', title: '素因数分解' },
  { id: 'NTL_1_B', title: 'べき乗' },
  { id: '0197', title: 'ユークリッドの互除法' },
  { id: 'NTL_1_C', title: '最小公倍数' },
  { id: 'ALDS1_1_B', title: '最大公約数', hint: '典型問題' },
  { id: 'ALDS1_1_C', title: '素数', hint: '典型問題' },
  { id: '0009', title: '素数の数' },
  { id: '1200', title: 'ゴールドバッハの予想' },
  { id: '0158', title: 'コラッツの予想' },
  { id: '0014', title: '数値積分' },
  { id: '0004', title: '連立方程式' },
  { id: '0080', title: '3乗根', hint: 'ニュートン法' },
  { id: '2220', title: '根の個数', hint: '解けそうで解けない' },

  { title: '文字列に慣れよう' },
  { id: '0084', title: 'サーチエンジン', cite: 'PCK2005', hint: '文字列の長さは？' },
  { id: '0006', title: '文字列反転', cite: 'PCK2003', hint: 'メソッドを調べてみて' },
  { id: '1042', title: 'Yes, I have a number', cite: 'UAPC2009)', hint: '日本人には無理だね' },
  { id: '1044', title: 'CamlCase', cite: 'UPAC2009', hint: '変数名をつける流儀' },
  { id: '0522', title: 'JOIとIOI', cite: '情報オリンピック2007', hint: '少し頭を使います' },
  { id: '0063', title: '回文', cite: 'PCK2004', hint: 'スタックを使う典型問題だが..' },
  { id: '0512', title: 'カイザー暗号', cite: 'JOI2006', hint: '暗号アルゴリズムの基礎' },
  { id: '0029', title: '英語の文章', cite: 'PCK2004', hint: '辞書の練習' },
  { id: '0050', title: 'りんごともも', cite: 'PCK2004', hint: '便利なメソッドを探してください' },
  { id: '0064', title: '秘密の番号', cite: 'PCK2004', hint: '正規表現を試してみると' },
  { id: '0025', title: 'Hit and Blow', cite: '(PCK 2003)' },

  { title: 'プログラミング・コンテストA問題' },
  { id: '1153', title: '等しい合計点', cite: '	国内予選2008A' },
  { id: '2197', title: '連続する整数の和', cite: '	模擬国内2010A' },
  { id: '1192', title: '税率変更 (☆)', cite: '	国内予選2014A' },
  { id: '1616', title: '太郎君の買物', cite: '	国内予選2017A' },
  { id: '1624', title: '所得格差', cite: '	国内予選2018A' },
  { id: '1172', title: 'チェビシェフの定理', cite: '	国内予選2011A' },
  { id: '2406', title: 'アルデンテ', cite: '(KUPC2012)' },
  { id: '2331', title: '友達の誘い方', cite: '(JAG2010)' },
  { id: '1141', title: 'ディリクレの算術級数定理', cite: '	国内予選2006A' },

  { title: 'シミュレーション' },
  { id: '0208', title: '病院の部屋番号' },
  { id: '2298', title: 'Starting Line' },
  { id: '0317', title: 'カエルはまっすぐ帰る' },
  { id: '1165', title: '角角画伯，かく悩みき', cite: '	国内予選2010A' },
  { id: '1186', title: '整長方形', cite: ' 国内予選2013A' },
  { id: '1142', title: '列車の編成パートII (☆)', cite: '	国内予選2006B' },
  { id: '1601', title: '短句', cite: '	国内予選2015B' },
  { id: '1609', title: '当選者を探せ！', cite: '	国内予選2016B' },
  { id: '1193', title: '連鎖消滅パズル', cite: '	国内予選2014B' },
  { id: '2013', title: '大崎 (☆)', cite: '	模擬国内2007B' },
  { id: '1173', title: '世界の天秤', cite: '	国内予選2011B' },

  { title: '文字列の復習' },
  { id: '2522', title: 'パスワードの安全性', cite: '(UECPC2013)' },
  { id: '2772', title: 'マイナンバー', cite: '(HUPC2016)' },
  { id: '0176', title: '何色？', cite: 'PCK2008', hint: '実用的なよい問題' },
  { id: '0287', title: '塵劫記', cite: 'PCK2013', hint: '実用的なよい問題' },
  { id: '0109', title: 'スマート計算機', cite: 'PCK2005', hint: '構文解析の入門と卒業' },
  { id: '0506', title: '文字列', cite: 'JOI2005', hint: 'もうパズル' },
  { id: '0040', title: 'アフィン暗号', cite: 'PCK2004', hint: '有名な暗号アルゴリズム' },
  { id: '0077', title: 'ランレングス', cite: 'PCK2005', hint: '有名な圧縮アルゴリズム' },
  { id: 'ALDS1_10_C', title: '最長共通部分列(LCS)' },

  { title: '探索問題' },
  { id: '0393', title: 'マンションの設計' },
  { id: '0033', title: 'ボール' },
  { id: '1045', title: 'Split Up!' },
  { id: '0008', title: 'Sum of 4 Integers' },
  { id: '0096', title: 'Sum of 4 Integers II' },
  { id: '0030', title: 'Sum of Integers' },
  { id: '0097', title: 'Sum of Integers II' },
  { id: '0092', title: '正方形探索' },

  { title: 'アルゴリズム' },
  { id: 'ALDS1_1_D', title: '最大の利益' },
  { id: 'ALDS1_3_A', title: '逆ポーランド記法（典型問題）' },
  { id: 'ALDS1_3_B', title: 'ラウンドロビン（キュー）' },
  { id: 'ALDS1_4_A', title: '線形探索(典型問題)' },
  { id: 'ALDS1_4_B', title: '二分探索(典型問題)' },
  { id: 'ALDS1_4_D', title: '最大積載量(Allocation)' },
  { id: 'ALDS1_3_D', title: '洪水の被害状況' },
  { id: 'ALDS1_5_A', title: '総当たり' },
  { id: '0118', title: '財産分与' },
  { id: 'ALDS1_13_A', title: '８クイーン' },
  { id: 'ALDS1_13_B', title: '８パズル' },
  { id: '0168', title: '観音堂' },
  { id: 'DPL_1_A', title: 'コインの問題' },
  { id: 'DPL_1_B', title: '0-1ナップサックの問題' },
  { id: '2272', title: '蝉' },

  { title: '上級アルゴリズム' },
  { id: '1130', title: 'Red and Black', cite: '	国内予選2004B' },
  { id: '1160', title: '島はいくつある？', cite: '	国内予選2009B' },
  { id: '1610', title: '竹の花', cite: '	国内予選2016C' },
  { id: '1626', title: '超高層ビル「みなとハルカス」', cite: '	国内予選2018C' },
  { id: '1167', title: 'ポロック予想', cite: '	国内予選2010C' },
  { id: '1625', title: '折り紙', cite: '	国内予選2018B' },
  { id: '1161', title: '覆面算', cite: '	国内予選2009C' },
  { id: '1611', title: 'ダルマ落とし ', cite: '	国内予選2016D' },
  { id: '1131', title: 'Unit Fraction Partition', cite: '	国内予選2004C' },
  { id: '1194', title: 'バンパイア', cite: '	国内予選2014C' },
  { id: '1144', title: 'カーリング 2.0', cite: '	国内予選2006D' },
  { id: '1156', title: 'ちょろちょろロボット', cite: '	国内予選2008D' },
]

const ACCEPTED = 4;
const PRESENTATIONERROR = 8;

const GREEN = '#72af68';
const YELLOW = '#f9e169';
const RED = '#f48876';

const StatusIcons = [
  '<img src="images/ce@3x.png">',
  '<img src="images/wa@3x.png">', 
  '<img src="images/tl@3x.png">', 
  '<img src="images/ml@3x.png">', 
  '<img src="images/ac@3x.png">', 
  '<img src="images/w@3x.png">', 
  '<img src="images/ol@3x.png">', 
  '<img src="images/re@3x.png">', 
  '<img src="images/pe@3x.png">', 
  '<img src="images/sr@3x.png">',
]

function colors(status, prev){
  if (status === ACCEPTED || prev === GREEN) {
    return GREEN;
  }
  if (status === PRESENTATIONERROR || prev === YELLOW) {
    return YELLOW;
  }
  return RED;
}

function records (status, prev= '') {
  return StatusIcons[status] + prev;
}

function uname (){
  return sessionStorage.getItem('aoj_uname') || '';
}

var pdb = {};

//check関数
function check(data) {
  pdb = {};
  const dd = [];
  var submit = 0;
  var prevId = '';
  for (const d of data){
    if (d.language !== 'Python3') { //言語がPython3でなかったら飛ばす
      continue;
    }
    if (d.submissionDate < 1587915078539) { //日付が1587915078539より前だったら飛ばす
      continue;
    }
    if (d.status !== 4 && !d.accuracy.startsWith('0')) { //statusが4以外、かつaccuracyが0から始まってたらd.statusをPEにする
      d.status = PRESENTATIONERROR;
    }
    dd.push({//dd配列に下記のオブジェクトを格納していく
      'key': d.judgeId,
      'problemId': d.problemId,
      'time': d.submissionDate,
      'status': d.status,
      'message': `${d.problemId} ${new Date(d.submissionDate)}`
    })
    solved(d);//pdbオブジェクトを作っていく
    if (prevId !== d.problemId) {//前のデータと今のデータのIDが違かったらsubmitをプラスしていく
      submit += 1;
    }
    prevId = d.problemId;//prevIdを更新する
  }
  checkList();
}

//solved関数
function solved(d){
  if (d.problemId in pdb) { //pdbオブジェクトにd.problemIdがあったら、更新していく
    const entry = pdb[d.problemId];
    entry.color = colors(d.status, entry.color);
    entry.record = records(d.status, entry.record);
  } else {
    const entry = { //なかったらentryオブジェクトを定義し、pdbオブジェクトに格納
      problemId: d.problemId,
      color: colors(d.status),
      record: records(d.status),
      date: new Date(d.submissionDate / 1000),
    }
    pdb[d.problemId] = entry;
  }
}

function checkList(){
  var titleList = '';
  var count = 1;
  const item = {};
  const ps = [];
  for (const p of Problems){
    if(!p.id){

      titleList += `<h2 id="${p.title}">${p.title}</h2>`;
    }else {
      const url = `http://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=${p.id}&lang=jp`;
      item.key = p.id;
      item.title = `(${count}) ${p.title}`;
      item.color = 'white';
      item.record = p.hint || '';
      if (p.id in pdb) {
        const entry = pdb[p.id];
        item.color = entry.color;
        item.record = entry.record;
      }
      titleList += `
        <div style="background: ${item.color}">
          <p><a href=${url}>(${count}) ${p.title}</a><span>${item.record}</span></p>
        </div>
        `;
      count += 1;
    }
  }
  document.getElementById('solvedList').innerHTML = titleList;
}

//問題リストを表示
function solvedList(){
  var titleList = '';
  var count = 1;
  const ps = [];
  for (const p of Problems){
    if(!p.id){
      titleList += `<h2 id="${p.title}">${p.title}</h2>`;
    }else {
      const url = `http://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=${p.id}&lang=jp`;
      const item = {
        key: p.id,
        title: `(${count}) ${p.title}`,
        color: 'white',
        record: p.hint || '',
      }
      titleList += `
        <div style="background: ${item.color}">
          <p><a href=${url}>(${count}) ${p.title}</a><span>${item.record}</span></p>
        </div>
        `;
      count += 1;
    }
  }
  document.getElementById('solvedList').innerHTML = titleList;
}

window.onload = solvedList();



var userID;

//inputタグに入力した値を格納
function handleOnChange(){
  userID = document.getElementById("inputID").value;
}

document.getElementById("inputID").onchange = handleOnChange;

//XMLHttpRequestを生成する
function createXMLHttpRequest() {
  if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    try {
      return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        return new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e2) {
        return null;
      }
    }
  } else {
    return null;
  }
}

//UserのページにGETリクエストを送り、checkして別の画面を返す
function handleClick(){
  var url = `https://judgeapi.u-aizu.ac.jp/submission_records/users/${userID}?size=2000`;
  var request = createXMLHttpRequest();
  request.open("GET", url, false);
  request.send("");
  if (request.readyState == 4 && request.status == 200){
    data = JSON.parse(request.response);
    check(data);
  }else{
    alert('err');
  }
}

document.getElementById("checkButton").onclick = handleClick;

