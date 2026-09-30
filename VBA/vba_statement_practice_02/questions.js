window.PRACTICE_SET = {
  "number": 2,
  "title": "② VBA 初級ステートメント 4択問題 BASIC",
  "description": "If、For、文字列結合など、Excel VBA ベーシックの基本処理を確認する10問です。",
  "pageUrl": "https://yumin-snoopy.github.io/materials/VBA/vba_statement_practice_02/",
  "questions": [
    {
      "id": 1,
      "title": "If文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q1()\nDim a As Long\na = 8\nIf a > 5 Then\na = a - 3\nEnd If\nMsgBox a\nEnd Sub",
      "choices": [
        "5",
        "8",
        "3",
        "エラー"
      ],
      "answers": [
        0
      ],
      "explanation": "8 − 3 の計算結果。If条件は真。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 2,
      "title": "If文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q2()\nDim x As Long\nx = 7\nIf x < 10 Then\nMsgBox \"小さい\"\nElse\nMsgBox \"大きい\"\nEnd If\nEnd Sub",
      "choices": [
        "エラー",
        "小さい",
        "大きい",
        "7"
      ],
      "answers": [
        1
      ],
      "explanation": "x = 7 は 10 より小さいため If 側。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 3,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q3()\nDim i As Long\nDim total As Long\nFor i = 2 To 5\ntotal = total + i\nNext i\nMsgBox total\nEnd Sub",
      "choices": [
        "15",
        "10",
        "14",
        "12"
      ],
      "answers": [
        2
      ],
      "explanation": "2＋3＋4＋5 の合計。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 4,
      "title": "For文で4回加算する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q4()\nDim i As Long\nDim n As Long\nn = 0\nFor i = 1 To 4\nn = n + 1\nNext i\nMsgBox n\nEnd Sub",
      "choices": [
        "5",
        "0",
        "3",
        "4"
      ],
      "answers": [
        3
      ],
      "explanation": "nは0から始まり、For文で4回1を足すので、4が表示されます。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 5,
      "title": "VBAの基本を確認する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q5()\nDim txt As String\ntxt = \"Hello\"\ntxt = txt & \"　World\"\nMsgBox txt\nEnd Sub",
      "choices": [
        "Hello　World",
        "HelloWorld",
        "Hello",
        "World"
      ],
      "answers": [
        0
      ],
      "explanation": "文字列結合。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 6,
      "title": "If文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q6()\nDim a As Long\na = 9\nIf a Mod 2 = 0 Then\nMsgBox \"偶数\"\nElse\nMsgBox \"奇数\"\nEnd If\nEnd Sub",
      "choices": [
        "偶数",
        "奇数",
        "9",
        "エラー"
      ],
      "answers": [
        1
      ],
      "explanation": "9 Mod 2 = 1。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 7,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q7()\nDim i As Long\nDim s As String\nFor i = 5 To 8\ns = s & i\nNext i\nMsgBox s\nEnd Sub",
      "choices": [
        "58",
        "567",
        "5678",
        "8765"
      ],
      "answers": [
        2
      ],
      "explanation": "5〜8を順に文字列連結。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 8,
      "title": "IfとElseIfで範囲を判定する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q8()\nDim x As Long\nx = 5\nIf x <= 3 Then\nMsgBox \"小\"\nElseIf x <= 6 Then\nMsgBox \"中\"\nElseIf x <= 9 Then\nMsgBox \"大\"\nElse\nMsgBox \"範囲外\"\nEnd If\nEnd Sub",
      "choices": [
        "大",
        "範囲外",
        "小",
        "中"
      ],
      "answers": [
        3
      ],
      "explanation": "xは5です。x <= 3はFalse、次のx <= 6はTrueなので、中が表示されます。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 9,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q9()\nDim i As Long\nDim cnt As Long\nFor i = 1 To 10\nIf i Mod 2 = 0 Then\ncnt = cnt + 1\nEnd If\nNext i\nMsgBox cnt\nEnd Sub",
      "choices": [
        "5",
        "6",
        "10",
        "4"
      ],
      "answers": [
        0
      ],
      "explanation": "1〜10 の偶数は 5個。",
      "tags": [
        "if",
        "loop"
      ]
    },
    {
      "id": 10,
      "title": "VBAの基本を確認する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q10()\nDim a As Long\na = 3\na = a * 3\na = a + 1\nMsgBox a\nEnd Sub",
      "choices": [
        "9",
        "10",
        "12",
        "7"
      ],
      "answers": [
        1
      ],
      "explanation": "3×3＋1 の計算。",
      "tags": [
        "other"
      ]
    }
  ]
};

