window.PRACTICE_SET = {
  "number": 5,
  "title": "VBA エキスパート 練習問題⑤",
  "description": "If・For...Next・Withを使い、最終セル、シートのコピーと移動、表データの処理を確認する10問です。",
  "pageUrl": "https://yumin-snoopy.github.io/materials/VBA/vba_statement_practice_05/",
  "questions": [
    {
      "id": 1,
      "title": "新しいシートの最終行を調べる",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q1()\nWorksheets.Add\nRange(\"A2\").Value = \"開始\"\nRange(\"A5\").Value = \"終了\"\nMsgBox Cells(Rows.Count, 1).End(xlUp).Row\nEnd Sub",
      "choices": [
        "2",
        "5",
        "4",
        "1048576"
      ],
      "answers": [
        1
      ],
      "explanation": "追加した新しいシートのA列で、値が入っている最も下のセルはA5です。最終行は5です。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 2,
      "title": "シート追加とコピーによる枚数の変化",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q2()\nDim beforeCount As Long\nbeforeCount = Worksheets.Count\nWorksheets.Add\nActiveSheet.Copy After:=ActiveSheet\nMsgBox Worksheets.Count - beforeCount\nEnd Sub",
      "choices": [
        "0",
        "1",
        "3",
        "2"
      ],
      "answers": [
        3
      ],
      "explanation": "Worksheets.Addで1枚、ActiveSheet.Copyでさらに1枚増えるため、差は2です。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 3,
      "title": "追加したシートを最後へ移動する",
      "prompt": "追加したシートは移動後にどこにありますか。",
      "code": "Sub Q3()\nWorksheets.Add\nActiveSheet.Move After:=Worksheets(Worksheets.Count)\nEnd Sub",
      "choices": [
        "最後",
        "最初",
        "2番目",
        "削除される"
      ],
      "answers": [
        0
      ],
      "explanation": "追加直後のシートを、移動前に最後にあるシートの後ろへ移すので、追加したシートが最後になります。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 4,
      "title": "Step -1でセルの並びを逆にする",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q4()\nDim i As Long\nRange(\"A1\").Value = \"A\"\nRange(\"A2\").Value = \"B\"\nRange(\"A3\").Value = \"C\"\nFor i = 3 To 1 Step -1\n    Cells(1, 4 - i).Value = Cells(i, 1).Value\nNext i\nMsgBox Range(\"C1\").Value\nEnd Sub",
      "choices": [
        "C",
        "B",
        "A",
        "空白"
      ],
      "answers": [
        2
      ],
      "explanation": "i=3、2、1の順にA1、B1、C1へC、B、Aを書きます。C1に残るのはAです。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 5,
      "title": "定数を使って超過分を求める",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q5()\nConst LIMIT As Long = 10\nRange(\"A1\").Value = 12\nIf Range(\"A1\").Value > LIMIT Then\n    Range(\"B1\").Value = Range(\"A1\").Value - LIMIT\nElse\n    Range(\"B1\").Value = 0\nEnd If\nMsgBox Range(\"B1\").Value\nEnd Sub",
      "choices": [
        "2",
        "10",
        "12",
        "0"
      ],
      "answers": [
        0
      ],
      "explanation": "A1の12は定数LIMITの10より大きいため、超過分の12-10=2をB1に入れます。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 6,
      "title": "WithのセルをIfで分類する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q6()\nWith Range(\"B2\")\n    .Value = 8\n    If .Value Mod 2 = 0 Then\n        .Offset(0, 1).Value = \"偶数\"\n    Else\n        .Offset(0, 1).Value = \"奇数\"\n    End If\n    MsgBox .Offset(0, 1).Value\nEnd With\nEnd Sub",
      "choices": [
        "奇数",
        "偶数",
        "8",
        "エラー"
      ],
      "answers": [
        1
      ],
      "explanation": "B2の値8は2で割り切れます。Withの基準から右隣のC2に「偶数」を入れて表示します。",
      "tags": [
        "if",
        "other"
      ]
    },
    {
      "id": 7,
      "title": "Ifの結果でコピー元を選ぶ",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q7()\nRange(\"A1\").Value = 4\nRange(\"B1\").Value = 9\nIf Range(\"B1\").Value > Range(\"A1\").Value Then\n    Range(\"B1\").Copy Destination:=Range(\"C1\")\nElse\n    Range(\"A1\").Copy Destination:=Range(\"C1\")\nEnd If\nMsgBox Range(\"C1\").Value\nEnd Sub",
      "choices": [
        "4",
        "5",
        "13",
        "9"
      ],
      "answers": [
        3
      ],
      "explanation": "B1の9がA1の4より大きいので、B1がC1へコピーされます。C1の値は9です。",
      "tags": [
        "if",
        "other"
      ]
    },
    {
      "id": 8,
      "title": "Withの中でIfとOffsetをつなぐ",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q8()\nWith Range(\"A1\")\n    .Value = 3\n    .Offset(1, 0).Value = 7\n    If .Offset(1, 0).Value > 5 Then\n        .Offset(2, 0).Value = .Offset(1, 0).Value - .Value\n    End If\n    MsgBox .Offset(2, 0).Value\nEnd With\nEnd Sub",
      "choices": [
        "3",
        "7",
        "4",
        "10"
      ],
      "answers": [
        2
      ],
      "explanation": "A1は3、A2は7です。条件はTrueなのでA3に7-3=4を書き、その値を表示します。",
      "tags": [
        "if",
        "other"
      ]
    },
    {
      "id": 9,
      "title": "Forで行の右方向へ値を書き込む",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q9()\nDim i As Long\nFor i = 1 To 4\n    Cells(1, i).Value = i * i\nNext i\nMsgBox Range(\"D1\").Value\nEnd Sub",
      "choices": [
        "4",
        "16",
        "8",
        "10"
      ],
      "answers": [
        1
      ],
      "explanation": "i=1、2、3、4をA1、B1、C1、D1へ対応させます。D1には4×4=16が入ります。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 10,
      "title": "RangeとCellsで同じセルを指定する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q10()\nWith ActiveSheet\n    .Range(\"B2\").Value = 2\n    .Cells(2, 2).Value = .Cells(2, 2).Value + 3\n    MsgBox .Range(\"B2\").Value\nEnd With\nEnd Sub",
      "choices": [
        "5",
        "2",
        "3",
        "7"
      ],
      "answers": [
        0
      ],
      "explanation": "Range(\"B2\")とCells(2, 2)は同じB2です。2に3を足して5が表示されます。",
      "tags": [
        "other"
      ]
    }
  ]
};

