window.PRACTICE_SET = {
  "number": 3,
  "title": "③ VBA 初級ステートメント 4択問題 BASIC",
  "description": "条件分岐、繰り返し、文字列、整数除算をコードから読み解く10問です。",
  "pageUrl": "https://yumin-snoopy.github.io/materials/VBA/vba_statement_practice_03/",
  "questions": [
    {
      "id": 1,
      "title": "If文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q1()\nDim x As Long\nDim y As Long\nx = 4\ny = 6\nIf x < y Then\nMsgBox x + y\nElse\nMsgBox x - y\nEnd If\nEnd Sub",
      "choices": [
        "2",
        "10",
        "-2",
        "エラー"
      ],
      "answers": [
        1
      ],
      "explanation": "x < y が真なので加算。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 2,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q2()\nDim i As Long\nDim sum As Long\nsum = 0\nFor i = 1 To 4\nsum = sum + i * 2\nNext i\nMsgBox sum\nEnd Sub",
      "choices": [
        "10",
        "16",
        "20",
        "24"
      ],
      "answers": [
        2
      ],
      "explanation": "(1×2)+(2×2)+(3×2)+(4×2)。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 3,
      "title": "VBAの基本を確認する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q3()\nDim txt As String\ntxt = \"VBA\"\ntxt = \"Excel \" & txt\nMsgBox txt\nEnd Sub",
      "choices": [
        "VBAExcel",
        "VBA",
        "Excel",
        "Excel VBA"
      ],
      "answers": [
        3
      ],
      "explanation": "文字列の前後結合。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 4,
      "title": "If文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q4()\nDim n As Long\nn = 15\nIf n Mod 3 = 0 Then\nMsgBox \"3の倍数\"\nElse\nMsgBox \"違う\"\nEnd If\nEnd Sub",
      "choices": [
        "3の倍数",
        "違う",
        "15",
        "エラー"
      ],
      "answers": [
        0
      ],
      "explanation": "15 Mod 3 = 0。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 5,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q5()\nDim i As Long\nDim result As String\nFor i = 1 To 3\nresult = result & \"X\"\nNext i\nMsgBox result\nEnd Sub",
      "choices": [
        "XX",
        "XXX",
        "3",
        "X"
      ],
      "answers": [
        1
      ],
      "explanation": "For文で3回「X」を連結。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 6,
      "title": "For文で2ずつ減らす",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q6()\nDim i As Long\nDim a As Long\na = 20\nFor i = 1 To 3\na = a - 2\nNext i\nMsgBox a\nEnd Sub",
      "choices": [
        "16",
        "18",
        "14",
        "15"
      ],
      "answers": [
        2
      ],
      "explanation": "For文で3回2を引きます。aは20→18→16→14となり、14が表示されます。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 7,
      "title": "IfとElseIfで値を判定する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q7()\nDim x As Long\nx = 7\nIf x < 5 Then\nMsgBox \"小さい\"\nElseIf x < 10 Then\nMsgBox \"中くらい\"\nElse\nMsgBox \"大きい\"\nEnd If\nEnd Sub",
      "choices": [
        "大きい",
        "エラー",
        "小さい",
        "中くらい"
      ],
      "answers": [
        3
      ],
      "explanation": "xは7です。x < 5はFalse、次のx < 10はTrueなので、中くらいが表示されます。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 8,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q8()\nDim i As Long\nDim count As Long\nFor i = 5 To 10\nIf i >= 8 Then\ncount = count + 1\nEnd If\nNext i\nMsgBox count\nEnd Sub",
      "choices": [
        "3",
        "4",
        "5",
        "2"
      ],
      "answers": [
        0
      ],
      "explanation": "8・9・10 の3回カウント。",
      "tags": [
        "if",
        "loop"
      ]
    },
    {
      "id": 9,
      "title": "VBAの基本を確認する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q9()\nDim a As Long\nDim b As Long\na = 12\nb = a ¥ 5\nMsgBox b\nEnd Sub",
      "choices": [
        "エラー",
        "2",
        "2.4",
        "3"
      ],
      "answers": [
        1
      ],
      "explanation": "「¥」はVBAの整数除算です。12を5で割った整数部分の2が表示されます。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 10,
      "title": "VBAの基本を確認する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q10()\nDim txt As String\ntxt = \"123\"\ntxt = txt & txt\nMsgBox txt\nEnd Sub",
      "choices": [
        "123",
        "246",
        "123123",
        "エラー"
      ],
      "answers": [
        2
      ],
      "explanation": "文字列を自分自身と結合。",
      "tags": [
        "other"
      ]
    }
  ]
};

