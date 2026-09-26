window.PRACTICE_SET = {
  "number": 5,
  "title": "⑤ VBA 中級ステートメント 4択問題 BASIC",
  "description": "配列、With、Replace、Mid、複合条件を扱う10問です。",
  "pageUrl": "https://yumin-snoopy.github.io/materials/vba_statement_practice_05/",
  "questions": [
    {
      "id": 1,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q1()\nDim i As Long\nDim t As Long\nFor i = 2 To 8 Step 2\nIf i Mod 4 = 0 Then\nt = t + i * 2\nElse\nt = t + i\nEnd If\nNext i\nMsgBox t\nEnd Sub",
      "choices": [
        "20",
        "24",
        "28",
        "32"
      ],
      "answers": [
        3
      ],
      "explanation": "4と8のみ条件により×2。",
      "tags": [
        "if",
        "loop"
      ]
    },
    {
      "id": 2,
      "title": "If文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q2()\nDim a As Long\nDim b As Long\na = 5\nb = 12\nIf (a + b > 10) And Not (b Mod 3 = 0) Then\nMsgBox \"OK\"\nElse\nMsgBox \"NG\"\nEnd If\nEnd Sub",
      "choices": [
        "NG",
        "12",
        "エラー",
        "OK"
      ],
      "answers": [
        0
      ],
      "explanation": "And 条件は両方真でないと成立しない。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 3,
      "title": "VBAの基本を確認する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q3()\nDim txt As String\ntxt = \"12345\"\ntxt = Left(txt, 3) & Right(txt, 1)\nMsgBox txt\nEnd Sub",
      "choices": [
        "12345",
        "1235",
        "1245",
        "135"
      ],
      "answers": [
        1
      ],
      "explanation": "Left と Right の組み合わせ。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 4,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q4()\nDim i As Long\nDim s As String\ns = \"\"\nFor i = 1 To 5\nIf i Mod 2 = 1 Then\ns = s & \"*\"\nElse\ns = s & i\nEnd If\nNext i\nMsgBox s\nEnd Sub",
      "choices": [
        "12345",
        "*****",
        "*2*4*",
        "1*3*5"
      ],
      "answers": [
        2
      ],
      "explanation": "i が 1, 3, 5 のときは *、2, 4 のときは数値を連結するため、*2*4* になります。",
      "tags": [
        "if",
        "loop"
      ]
    },
    {
      "id": 5,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q5()\nDim arr(1 To 4) As Long\nDim i As Long\nDim t As Long\narr(1) = 2\narr(2) = 5\narr(3) = 3\narr(4) = 8\nFor i = 1 To 4\nIf arr(i) < 5 Then\nt = t + arr(i)\nElse\nt = t + arr(i) * 2\nEnd If\nNext i\nMsgBox t\nEnd Sub",
      "choices": [
        "26",
        "27",
        "29",
        "31"
      ],
      "answers": [
        3
      ],
      "explanation": "配列＋If分岐の合計処理。",
      "tags": [
        "if",
        "loop"
      ]
    },
    {
      "id": 6,
      "title": "セル操作を確認する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q6()\nRange(\"A1\").Value = 4\nRange(\"A2\").Value = 6\nRange(\"A3\").Value = 2\nWith Range(\"A1\")\n.Offset(1).Value = .Offset(1).Value - .Value\n.Offset(2).Value = .Offset(2).Value + .Offset(1).Value\nEnd With\nMsgBox Range(\"A3\").Value\nEnd Sub",
      "choices": [
        "4",
        "-2",
        "0",
        "2"
      ],
      "answers": [
        0
      ],
      "explanation": "Offset は列省略＝Offset(行,0)。",
      "tags": [
        "cell"
      ]
    },
    {
      "id": 7,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q7()\nDim i As Long\nDim n As Long\nn = 10\nFor i = 1 To 5\nn = n - i\nIf n Mod 3 = 0 Then Exit For\nNext i\nMsgBox n\nEnd Sub",
      "choices": [
        "3",
        "9",
        "6",
        "4"
      ],
      "answers": [
        1
      ],
      "explanation": "Exit For による早期終了。",
      "tags": [
        "if",
        "loop"
      ]
    },
    {
      "id": 8,
      "title": "VBAの基本を確認する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q8()\nDim txt As String\ntxt = \"HELLO\"\ntxt = Replace(txt, \"L\", \"*\")\nMsgBox txt\nEnd Sub",
      "choices": [
        "HELL*",
        "HE*LO",
        "HE**O",
        "H*LLO"
      ],
      "answers": [
        2
      ],
      "explanation": "Replace は指定した文字をすべて置換します。HELLO に含まれる2つの L が * になり、HE**O です。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 9,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q9()\nDim i As Long\nDim c As Long\nFor i = 1 To 9\nSelect Case i Mod 4\nCase 0\nc = c + 3\nCase 1\nc = c + 1\nCase Else\nc = c + 0\nEnd Select\nNext i\nMsgBox c\nEnd Sub",
      "choices": [
        "10",
        "5",
        "7",
        "9"
      ],
      "answers": [
        3
      ],
      "explanation": "Select Case i Mod 4 の加算ルール。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 10,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q10()\nDim s As String\nDim i As Long\ns = \"ABCDE\"\nFor i = 1 To Len(s)\nIf i Mod 2 = 0 Then\nMid(s, i, 1) = LCase(Mid(s, i, 1))\nEnd If\nNext i\nMsgBox s\nEnd Sub",
      "choices": [
        "AbCdE",
        "ABCDE",
        "abcde",
        "AbcDE"
      ],
      "answers": [
        0
      ],
      "explanation": "偶数位置のみ LCase で変換。",
      "tags": [
        "if",
        "loop"
      ]
    }
  ]
};
