window.PRACTICE_SET = {
  "number": 8,
  "title": "VBA エキスパート 練習問題⑧",
  "description": "For...Next、If、WithとRange・Offset・Resize・Copyを扱う20問です。",
  "pageUrl": "https://yumin-snoopy.github.io/materials/VBA/vba_statement_practice_08/",
  "questions": [
    {
      "id": 1,
      "title": "For文を読み解く",
      "prompt": "以下のコードの実行結果として正しいものはどれか。",
      "code": "Sub Test1()\nDim i As Integer, j As Integer\nFor i = 1 To 3\nFor j = 1 To 2\nCells(i, j).Value = i * j\nNext i\nNext j\nEnd Sub",
      "choices": [
        "A1～C2に計算結果が入力される",
        "A1～B3に計算結果が入力される",
        "エラーが発生する",
        "無限ループになる"
      ],
      "answers": [
        2
      ],
      "explanation": "Next i / Next j の対応が崩れていてコンパイルエラー。",
      "tags": [
        "loop",
        "cell"
      ]
    },
    {
      "id": 2,
      "title": "For文を読み解く",
      "prompt": "以下のコードで最終的にA1セルに表示される値はどれか。",
      "code": "Sub Test2()\nDim i As Integer\nRange(\"A1\").Value = 0\nFor i = 1 To 5\nRange(\"A1\").Offset(0, 0).Value = Range(\"A1\").Value + i\nNext i\nEnd Sub",
      "choices": [
        "0",
        "エラーになる",
        "5",
        "15"
      ],
      "answers": [
        3
      ],
      "explanation": "0に1〜5を順に加算（合計15）。",
      "tags": [
        "loop",
        "cell"
      ]
    },
    {
      "id": 3,
      "title": "For文を読み解く",
      "prompt": "以下のコードでB5セルに入力される値はどれか。",
      "code": "Sub Test3()\nDim i As Integer, j As Integer\nFor i = 1 To 5\nFor j = 1 To 3\nRange(\"A1\").Offset(i - 1, j - 1).Value = i + j\nNext j\nNext i\nEnd Sub",
      "choices": [
        "7",
        "8",
        "5",
        "6"
      ],
      "answers": [
        0
      ],
      "explanation": "B5は(i=5, j=2)なので 5+2。",
      "tags": [
        "loop",
        "cell"
      ]
    },
    {
      "id": 4,
      "title": "Resizeで書き込む範囲を変える",
      "prompt": "以下のコードの実行結果として正しいものはどれか。",
      "code": "Sub Test4()\nRange(\"A1:C3\").Resize(2, 2).Value = \"X\"\nEnd Sub",
      "choices": [
        "A1～C3に\"X\"が入力される",
        "A1～B2に\"X\"が入力される",
        "エラーが発生する",
        "何も実行されない"
      ],
      "answers": [
        1
      ],
      "explanation": "A1を起点とする2行2列はA1:B2です。この範囲に「X」が入力されます。",
      "tags": [
        "cell"
      ]
    },
    {
      "id": 5,
      "title": "For文で奇数を合計する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Test5()\nDim i As Long\nDim total As Long\nFor i = 1 To 9 Step 2\ntotal = total + i\nNext i\nMsgBox total\nEnd Sub",
      "choices": [
        "20",
        "25",
        "15",
        "9"
      ],
      "answers": [
        1
      ],
      "explanation": "iは1、3、5、7、9と変わるので、合計は25です。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 6,
      "title": "For文を読み解く",
      "prompt": "以下のコードでE10セルに入力される値はどれか。",
      "code": "Sub Test6()\nDim i As Integer, j As Integer\nFor i = 1 To 10\nFor j = 1 To 5\nCells(i, j).Value = i * 10 + j\nNext j\nNext i\nEnd Sub",
      "choices": [
        "50",
        "150",
        "100",
        "105"
      ],
      "answers": [
        3
      ],
      "explanation": "E10は(10,5)なので 10*10+5。",
      "tags": [
        "loop",
        "cell"
      ]
    },
    {
      "id": 7,
      "title": "For文を読み解く",
      "prompt": "以下のコードの実行結果として正しいものはどれか。",
      "code": "Sub Test7()\nDim i As Integer\nFor i = 1 To 5\nRange(\"A1\").Offset(i, 0).Value = i\nNext i\nEnd Sub",
      "choices": [
        "A2～A6に1～5が入力される",
        "エラーが発生する",
        "A1～A6に0～5が入力される",
        "A1～A5に1～5が入力される"
      ],
      "answers": [
        0
      ],
      "explanation": "Offset(i,0)なのでA2スタート。",
      "tags": [
        "loop",
        "cell"
      ]
    },
    {
      "id": 8,
      "title": "If文で対角線のセルを分ける",
      "prompt": "実行後、B2セルの値はどれですか。",
      "code": "Sub Test8()\nDim i As Long, j As Long\nFor i = 1 To 3\nFor j = 1 To 3\nIf i = j Then\nCells(i, j).Value = \"X\"\nElse\nCells(i, j).Value = \"O\"\nEnd If\nNext j\nNext i\nEnd Sub",
      "choices": [
        "O",
        "空白",
        "X",
        "エラー"
      ],
      "answers": [
        2
      ],
      "explanation": "B2は2行目・2列目なのでiとjがともに2です。条件がTrueとなり「X」が入ります。",
      "tags": [
        "if",
        "loop",
        "cell"
      ]
    },
    {
      "id": 9,
      "title": "OffsetとResizeで範囲を指定する",
      "prompt": "「済」が入力される範囲はどれですか。",
      "code": "Sub Test9()\nRange(\"A1:B2\").Offset(1, 1).Resize(3, 3).Value = \"済\"\nEnd Sub",
      "choices": [
        "A1:C3",
        "B2:C3",
        "B2:D4",
        "C3:E5"
      ],
      "answers": [
        2
      ],
      "explanation": "Offset(1, 1)で左上がB2になり、Resize(3, 3)でB2:D4の3行3列になります。",
      "tags": [
        "cell"
      ]
    },
    {
      "id": 10,
      "title": "For文を読み解く",
      "prompt": "以下のコードで最終的にA1に入力される値はどれか。",
      "code": "Sub Test10()\nDim i As Integer, sum As Integer\nsum = 0\nFor i = 2 To 10 Step 2\nsum = sum + i\nNext i\nRange(\"A1\").Value = sum\nEnd Sub",
      "choices": [
        "55",
        "25",
        "20",
        "30"
      ],
      "answers": [
        3
      ],
      "explanation": "2+4+6+8+10=30。",
      "tags": [
        "loop",
        "cell"
      ]
    },
    {
      "id": 11,
      "title": "負のStepでセルに値を書き込む",
      "prompt": "実行後、A3セルの値はどれですか。",
      "code": "Sub Test11()\nDim i As Long\nFor i = 5 To 1 Step -2\nCells(i, 1).Value = i\nNext i\nEnd Sub",
      "choices": [
        "5",
        "1",
        "3",
        "空白"
      ],
      "answers": [
        2
      ],
      "explanation": "iは5、3、1と変わります。i=3の回にA3へ3を書き込みます。",
      "tags": [
        "loop",
        "cell"
      ]
    },
    {
      "id": 12,
      "title": "For文を読み解く",
      "prompt": "以下のコードでC3セルに入力される値はどれか。",
      "code": "Sub Test12()\nDim i As Integer, j As Integer\nFor i = 1 To 3\nFor j = 1 To 3\nRange(\"A1\").Offset(i - 1, j - 1).Value = (i - 1) * 3 + j\nNext j\nNext i\nEnd Sub",
      "choices": [
        "6",
        "9",
        "3",
        "7"
      ],
      "answers": [
        1
      ],
      "explanation": "C3は(3,3)：(2*3)+3=9。",
      "tags": [
        "loop",
        "cell"
      ]
    },
    {
      "id": 13,
      "title": "For文とIf文で一部のセルに入力する",
      "prompt": "実行後、A4セルの値はどれですか。",
      "code": "Sub Test13()\nDim i As Long\nFor i = 1 To 5\nIf i >= 3 Then\nCells(i, 1).Value = i * 2\nEnd If\nNext i\nEnd Sub",
      "choices": [
        "4",
        "6",
        "8",
        "空白"
      ],
      "answers": [
        2
      ],
      "explanation": "i=4は3以上なので、A4には4×2=8が入ります。",
      "tags": [
        "if",
        "loop",
        "cell"
      ]
    },
    {
      "id": 14,
      "title": "For文を読み解く",
      "prompt": "以下のコードの実行結果として正しいものはどれか。",
      "code": "Sub Test14()\nDim i As Integer, j As Integer\nFor i = 1 To 5\nFor j = 1 To 3\nCells(i, j).Value = i * j\nNext i\nNext j\nEnd Sub",
      "choices": [
        "無限ループになる",
        "何も実行されない",
        "A1～C5に計算結果が入力される",
        "エラーが発生する"
      ],
      "answers": [
        3
      ],
      "explanation": "問題1と同じく Next の対応ミス。",
      "tags": [
        "loop",
        "cell"
      ]
    },
    {
      "id": 15,
      "title": "Resizeで広げた範囲へ値を入れる",
      "prompt": "実行後、E5セルの値はどれですか。",
      "code": "Sub Test15()\nDim i As Long\nFor i = 1 To 5\nRange(\"A1\").Resize(i, i).Value = i\nNext i\nEnd Sub",
      "choices": [
        "5",
        "4",
        "1",
        "空白"
      ],
      "answers": [
        0
      ],
      "explanation": "最後のi=5ではA1:E5の全セルに5が入るため、E5も5です。",
      "tags": [
        "loop",
        "cell"
      ]
    },
    {
      "id": 16,
      "title": "For文を読み解く",
      "prompt": "以下のコードの動作として正しいものはどれか。",
      "code": "Sub Test16()\nDim i As Integer, j As Integer\nFor i = 10 To 1 Step -1\nFor j = 1 To i\nCells(i, j).Value = j\nNext j\nNext i\nEnd Sub",
      "choices": [
        "無限ループになる",
        "A10を直角に持つ三角形型に数値が入力される",
        "A1を直角に持つ三角形型に数値が入力される",
        "エラーが発生する"
      ],
      "answers": [
        1
      ],
      "explanation": "下の行ほど入力セル数が多い。",
      "tags": [
        "loop",
        "cell"
      ]
    },
    {
      "id": 17,
      "title": "Withでセル範囲に値を入れる",
      "prompt": "「Test」が入力される範囲はどれですか。",
      "code": "Sub Test17()\nWith Range(\"A1:C3\")\n.Value = \"Test\"\nEnd With\nEnd Sub",
      "choices": [
        "A1のみ",
        "A1:C3",
        "C3のみ",
        "何も入力されない"
      ],
      "answers": [
        1
      ],
      "explanation": "Withで指定したA1:C3の各セルに、.Valueで「Test」を入力します。",
      "tags": [
        "cell"
      ]
    },
    {
      "id": 18,
      "title": "For文で作った値をコピーする",
      "prompt": "実行後、C4セルの値はどれですか。",
      "code": "Sub Test18()\nDim i As Long\nFor i = 1 To 3\nCells(i, 1).Value = i * 10\nNext i\nRange(\"A1:A3\").Copy Destination:=Range(\"C2\")\nEnd Sub",
      "choices": [
        "10",
        "20",
        "30",
        "空白"
      ],
      "answers": [
        2
      ],
      "explanation": "A1:A3には10、20、30が入り、C2から縦にコピーされます。A3の30がC4に入ります。",
      "tags": [
        "loop",
        "cell"
      ]
    },
    {
      "id": 19,
      "title": "OffsetとResizeで5行5列を指定する",
      "prompt": "「済」が入力される範囲はどれですか。",
      "code": "Sub Test19()\nRange(\"B2:D4\").Offset(-1, -1).Resize(5, 5).Value = \"済\"\nEnd Sub",
      "choices": [
        "A1:E5",
        "A1:E6",
        "B2:D4",
        "エラーが発生する"
      ],
      "answers": [
        0
      ],
      "explanation": "B2から1行上・1列左へずらしてA1を起点とし、5行5列へ広げるのでA1:E5です。",
      "tags": [
        "cell"
      ]
    },
    {
      "id": 20,
      "title": "For文とOffsetでセルに値を入れる",
      "prompt": "実行後、B6セルの値はどれですか。",
      "code": "Sub Test20()\nDim i As Long\nFor i = 1 To 5\nRange(\"B2\").Offset(i - 1, 0).Value = i\nNext i\nEnd Sub",
      "choices": [
        "5",
        "4",
        "1",
        "空白"
      ],
      "answers": [
        0
      ],
      "explanation": "i=5の回にB2から4行下のB6へ5を入力します。",
      "tags": [
        "loop",
        "cell"
      ]
    }
  ]
};
