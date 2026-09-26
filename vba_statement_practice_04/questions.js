window.PRACTICE_SET = {
  "number": 4,
  "title": "④ VBA 中級ステートメント 4択問題 BASIC",
  "description": "配列、Offset、文字列関数、Exit For、Select Case Trueを扱う10問です。",
  "pageUrl": "https://yumin-snoopy.github.io/materials/vba_statement_practice_04/",
  "questions": [
    {
      "id": 1,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q1()\nDim i As Long\nDim total As Long\nFor i = 1 To 6\nIf i Mod 2 = 0 Then\ntotal = total + i * 2\nElse\ntotal = total + i\nEnd If\nNext i\nMsgBox total\nEnd Sub",
      "choices": [
        "21",
        "27",
        "33",
        "39"
      ],
      "answers": [
        2
      ],
      "explanation": "偶数は×2、奇数はそのまま合計。",
      "tags": [
        "if",
        "loop"
      ]
    },
    {
      "id": 2,
      "title": "If文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q2()\nDim a As Long\nDim b As Long\na = 3\nb = 8\nIf Not (a >= 5 And b < 10) Then\nMsgBox \"X\"\nElseIf a < 5 Or b = 8 Then\nMsgBox \"Y\"\nElse\nMsgBox \"Z\"\nEnd If\nEnd Sub",
      "choices": [
        "Y",
        "Z",
        "エラー",
        "X"
      ],
      "answers": [
        3
      ],
      "explanation": "Not 条件が真になり最初の If が実行。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 3,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q3()\nDim txt As String\nDim i As Long\ntxt = \"ABCDE\"\nFor i = 2 To 4\nMid(txt, i, 1) = \"*\"\nNext i\nMsgBox txt\nEnd Sub",
      "choices": [
        "A***E",
        "A*E",
        "ABCE",
        "ADE"
      ],
      "answers": [
        0
      ],
      "explanation": "Mid で 2〜4 文字目を書き換え。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 4,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q4()\nDim i As Long\nDim s As String\nFor i = 1 To 6\nIf i Mod 3 = 1 Then\ns = s & \"A\"\nElseIf i Mod 3 = 2 Then\ns = s & \"B\"\nElse\ns = s & \"C\"\nEnd If\nNext i\nMsgBox s\nEnd Sub",
      "choices": [
        "ACBABC",
        "ABCABC",
        "ABABAB",
        "ACBACB"
      ],
      "answers": [
        1
      ],
      "explanation": "i Mod 3 の結果で A→B→C を繰り返す。",
      "tags": [
        "if",
        "loop"
      ]
    },
    {
      "id": 5,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q5()\nDim arr(1 To 5) As Long\nDim i As Long\nDim t As Long\nFor i = 1 To 5\narr(i) = i * 2\nNext i\nFor i = 1 To 5\nIf arr(i) > 5 Then\nt = t + arr(i)\nEnd If\nNext i\nMsgBox t\nEnd Sub",
      "choices": [
        "14",
        "18",
        "24",
        "6"
      ],
      "answers": [
        2
      ],
      "explanation": "6・8・10 のみ加算。",
      "tags": [
        "if",
        "loop"
      ]
    },
    {
      "id": 6,
      "title": "セル操作を確認する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q6()\nRange(\"A1\").Value = 3\nRange(\"A2\").Value = 5\nRange(\"A3\").Value = 2\nRange(\"A1\").Offset(1).Value = Range(\"A1\").Value + Range(\"A1\").Offset(1).Value\nRange(\"A1\").Offset(2).Value = Range(\"A1\").Offset(1).Value * Range(\"A1\").Offset(2).Value\nMsgBox Range(\"A3\").Value\nEnd Sub",
      "choices": [
        "20",
        "2",
        "10",
        "16"
      ],
      "answers": [
        3
      ],
      "explanation": "Offset を使ったセル参照の連鎖計算。",
      "tags": [
        "cell"
      ]
    },
    {
      "id": 7,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q7()\nDim i As Long\nDim n As Long\nn = 1\nFor i = 1 To 4\nn = n * i\nIf n > 5 Then Exit For\nNext i\nMsgBox n\nEnd Sub",
      "choices": [
        "6",
        "24",
        "1",
        "2"
      ],
      "answers": [
        0
      ],
      "explanation": "n>5 になった時点で Exit For。",
      "tags": [
        "if",
        "loop"
      ]
    },
    {
      "id": 8,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q8()\nDim txt As String\nDim i As Long\ntxt = \"ABCDEFG\"\nFor i = Len(txt) To 1 Step -2\ntxt = Left(txt, i - 1) & \"*\" & Mid(txt, i + 1)\nNext i\nMsgBox txt\nEnd Sub",
      "choices": [
        "ACE*G",
        "*B*D*F*",
        "ABDEG",
        "ACE*"
      ],
      "answers": [
        1
      ],
      "explanation": "文字列を後ろから Step -2 で処理。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 9,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q9()\nDim i As Long\nDim cnt As Long\nFor i = 1 To 10\nSelect Case True\nCase i Mod 4 = 0\ncnt = cnt + 2\nCase i Mod 2 = 0\ncnt = cnt + 1\nEnd Select\nNext i\nMsgBox cnt\nEnd Sub",
      "choices": [
        "12",
        "15",
        "7",
        "10"
      ],
      "answers": [
        2
      ],
      "explanation": "Select Case True の評価順がポイント。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 10,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q10()\nDim i As Long\nDim s As String\ns = \"\"\nFor i = 1 To 5\ns = s & i\nIf Len(s) >= 3 Then\ns = Replace(s, \"3\", \"X\")\nEnd If\nNext i\nMsgBox s\nEnd Sub",
      "choices": [
        "12345",
        "1X345",
        "12X4X",
        "12X45"
      ],
      "answers": [
        3
      ],
      "explanation": "3文字以上になった時点で Replace 実行。",
      "tags": [
        "if",
        "loop"
      ]
    }
  ]
};
