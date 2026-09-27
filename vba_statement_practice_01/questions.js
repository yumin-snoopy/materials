window.PRACTICE_SET = {
  "number": 1,
  "title": "① VBA 初級ステートメント 4択問題 BASIC",
  "description": "If、For、Do While、文字列結合、Select Case、計算式の読み方を確認する10問です。コードを上から順番に追い、MsgBoxに表示される結果を選びます。",
  "pageUrl": "https://yumin-snoopy.github.io/materials/vba_statement_practice_01/",
  "questions": [
    {
      "id": 1,
      "tags": ["if"],
      "title": "Ifで加算する",
      "code": "Sub Q1()\nDim a As Long\na = 5\nIf a > 3 Then\na = a + 2\nEnd If\nMsgBox a\nEnd Sub",
      "prompt": "表示される結果はどれですか。",
      "choices": ["3", "5", "7", "エラー"],
      "answers": [2],
      "explanation": "aは5です。a > 3はTrueなのでa = a + 2が実行され、7が表示されます。"
    },
    {
      "id": 2,
      "tags": ["if"],
      "title": "IfとElseの分岐",
      "code": "Sub Q2()\nDim x As Long\nx = 10\nIf x >= 10 Then\nMsgBox \"OK\"\nElse\nMsgBox \"NG\"\nEnd If\nEnd Sub",
      "prompt": "表示される結果はどれですか。",
      "choices": ["NG", "10", "エラー", "OK"],
      "answers": [3],
      "explanation": "xは10です。x >= 10はTrueなので、Then側のMsgBox \"OK\"が実行されます。"
    },
    {
      "id": 3,
      "tags": ["loop"],
      "title": "Forで合計する",
      "code": "Sub Q3()\nDim i As Long\nDim s As Long\nFor i = 1 To 3\ns = s + i\nNext i\nMsgBox s\nEnd Sub",
      "prompt": "表示される結果はどれですか。",
      "choices": ["3", "6", "1", "5"],
      "answers": [1],
      "explanation": "Long型のsの初期値は0です。iは1、2、3の順に変化するため、合計は6になります。"
    },
    {
      "id": 4,
      "tags": ["loop"],
      "title": "Do Whileで増やす",
      "code": "Sub Q4()\nDim n As Long\nn = 1\nDo While n < 5\nn = n + 1\nLoop\nMsgBox n\nEnd Sub",
      "prompt": "表示される結果はどれですか。",
      "choices": ["5", "4", "6", "無限ループ"],
      "answers": [0],
      "explanation": "nは1から始まり、2、3、4、5と増えます。nが5になるとn < 5がFalseになり、5が表示されます。"
    },
    {
      "id": 5,
      "tags": ["other"],
      "title": "文字列を結合する",
      "code": "Sub Q5()\nDim txt As String\ntxt = \"ABC\"\ntxt = txt & \"D\"\nMsgBox txt\nEnd Sub",
      "prompt": "表示される結果はどれですか。",
      "choices": ["ABC", "ABD", "ACD", "ABCD"],
      "answers": [3],
      "explanation": "文字列は&で結合します。\"ABC\"の後ろに\"D\"が付くので、ABCDが表示されます。"
    },
    {
      "id": 6,
      "tags": ["if"],
      "title": "Modで偶数を判定する",
      "code": "Sub Q6()\nDim a As Long\na = 2\nIf a Mod 2 = 0 Then\nMsgBox \"偶数\"\nElse\nMsgBox \"奇数\"\nEnd If\nEnd Sub",
      "prompt": "表示される結果はどれですか。",
      "choices": ["偶数", "奇数", "2", "エラー"],
      "answers": [0],
      "explanation": "2 Mod 2は0です。条件がTrueになるので、偶数と表示されます。"
    },
    {
      "id": 7,
      "tags": ["loop", "other"],
      "title": "Forで文字列を連結する",
      "code": "Sub Q7()\nDim i As Long\nDim s As String\nFor i = 1 To 4\ns = s & i\nNext i\nMsgBox s\nEnd Sub",
      "prompt": "表示される結果はどれですか。",
      "choices": ["123", "4321", "1234", "14"],
      "answers": [2],
      "explanation": "String型のsの初期値は空文字です。iが1から4まで順に連結されるので、1234になります。"
    },
    {
      "id": 8,
      "tags": ["other"],
      "title": "Select Caseで分岐する",
      "code": "Sub Q8()\nDim x As Long\nx = 3\nSelect Case x\nCase 1\nMsgBox \"A\"\nCase 2\nMsgBox \"B\"\nCase 3\nMsgBox \"C\"\nCase Else\nMsgBox \"D\"\nEnd Select\nEnd Sub",
      "prompt": "表示される結果はどれですか。",
      "choices": ["A", "B", "C", "D"],
      "answers": [2],
      "explanation": "xは3です。Case 3に一致するため、MsgBox \"C\"が実行されます。"
    },
    {
      "id": 9,
      "tags": ["if", "loop"],
      "title": "条件に合う回数を数える",
      "code": "Sub Q9()\nDim i As Long\nDim cnt As Long\nFor i = 1 To 5\nIf i >= 3 Then\ncnt = cnt + 1\nEnd If\nNext i\nMsgBox cnt\nEnd Sub",
      "prompt": "表示される結果はどれですか。",
      "choices": ["3", "2", "4", "5"],
      "answers": [0],
      "explanation": "Long型のcntの初期値は0です。i >= 3になるのは3、4、5の3回なので、cntは3になります。"
    },
    {
      "id": 10,
      "tags": ["other"],
      "title": "代入と計算の順番",
      "code": "Sub Q10()\nDim a As Long\na = 5\na = a * 2\na = a - 3\nMsgBox a\nEnd Sub",
      "prompt": "表示される結果はどれですか。",
      "choices": ["10", "7", "5", "3"],
      "answers": [1],
      "explanation": "aは5から始まり、a * 2で10、そこから3を引いて7になります。"
    }
  ]
};
