window.PRACTICE_SET = {
  "number": 8,
  "title": "⑧ VBAエキスパート BASIC 上級練習問題",
  "description": "二重ループ、Range、Offset、Resize、Exit Subなどを扱う20問です。",
  "pageUrl": "https://yumin-snoopy.github.io/materials/vba_statement_practice_08/",
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
      "title": "セル操作を確認する",
      "prompt": "以下のコードの実行結果として正しいものはどれか。",
      "code": "Sub Test4()\nDim rng As Range\nSet rng = Range(\"A1:C3\")\nSet rng = rng.Resize(2, 2)\nrng.Value = \"X\"\nEnd Sub",
      "choices": [
        "A1～C3に\"X\"が入力される",
        "A1～B2に\"X\"が入力される",
        "エラーが発生する",
        "何も実行されない"
      ],
      "answers": [
        1
      ],
      "explanation": "Resize(2,2)で範囲がA1:B2へ。",
      "tags": [
        "cell"
      ]
    },
    {
      "id": 5,
      "title": "Do...Loopを読み解く",
      "prompt": "以下のコードの動作として正しいものはどれか。",
      "code": "Sub Test5()\nDim i As Integer\ni = 1\nDo While i < 10\nCells(i, 1).Value = i\ni = i - 1\nLoop\nEnd Sub",
      "choices": [
        "A1～A9に1～9が入力される",
        "無限ループになる",
        "エラーが発生する",
        "何も実行されない"
      ],
      "answers": [
        2
      ],
      "explanation": "iが0になり Cells(0,1) 参照で実行時エラー。",
      "tags": [
        "loop",
        "cell"
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
      "title": "For文を読み解く",
      "prompt": "以下のコードの動作として正しいものはどれか。",
      "code": "Sub Test8()\nDim i As Integer, j As Integer\nFor i = 1 To 3\nFor j = 1 To 3\nIf i = j Then Exit Sub\nCells(i, j).Value = \"O\"\nNext j\nNext i\nEnd Sub",
      "choices": [
        "すべてのセルに\"O\"が入力される",
        "何も実行されない",
        "A1のみ処理されて終了する",
        "エラーが発生する"
      ],
      "answers": [
        1
      ],
      "explanation": "i=1,j=1で即 Exit Sub。",
      "tags": [
        "if",
        "loop",
        "cell"
      ]
    },
    {
      "id": 9,
      "title": "セル操作を確認する",
      "prompt": "以下のコードでエラーが発生するのはどれか。",
      "code": "Sub Test9()\nDim rng As Range\nSet rng = Range(\"A1:B2\")\nSet rng = rng.Offset(1, 1).Resize(3, 3)\nrng.Interior.Color = vbYellow\nEnd Sub",
      "choices": [
        "Resizeでエラーが発生する",
        "Interior.Colorでエラーが発生する",
        "エラーは発生しない",
        "Offsetでエラーが発生する"
      ],
      "answers": [
        2
      ],
      "explanation": "Offset→Resize後の範囲に色付けできる。",
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
      "title": "Do...Loopを読み解く",
      "prompt": "以下のコードの動作として正しいものはどれか。",
      "code": "Sub Test11()\nDim i As Integer\ni = 10\nDo Until i = 0\nCells(i, 1).Value = i\ni = i + 1\nLoop\nEnd Sub",
      "choices": [
        "エラーが発生する",
        "i=0で停止する",
        "正常に動作する",
        "無限ループになる"
      ],
      "answers": [
        0
      ],
      "explanation": "i は 10 から増え続けて 0 にはなりません。Integer の上限を超えた時点でオーバーフローエラーになります。",
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
      "title": "Do...Loopを読み解く",
      "prompt": "以下のコードの動作として正しいものはどれか。",
      "code": "Sub Test13()\nDim i As Integer\ni = 5\nDo\nCells(i, 1).Value = i\ni = i + 1\nLoop While i <= 5\nEnd Sub",
      "choices": [
        "無限ループになる",
        "エラーが発生する",
        "A5に5が入力される",
        "A5～A10に5～10が入力される"
      ],
      "answers": [
        2
      ],
      "explanation": "1回実行後、条件がFalseで終了。",
      "tags": [
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
      "title": "For文を読み解く",
      "prompt": "以下のコードで最終的に色が付くセル範囲はどれか。",
      "code": "Sub Test15()\nDim i As Integer\nFor i = 1 To 5\nRange(\"A1\").Resize(i, i).Interior.Color = vbRed\nNext i\nEnd Sub",
      "choices": [
        "A1:E5",
        "A1:A5",
        "A1:E1",
        "A1"
      ],
      "answers": [
        0
      ],
      "explanation": "最後のi=5で5×5が塗られる。",
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
      "title": "セル操作を確認する",
      "prompt": "以下のコードでエラーが発生する理由として正しいものはどれか。",
      "code": "Sub Test17()\nDim rng As Range\nrng = Range(\"A1:C3\")\nrng.Value = \"Test\"\nEnd Sub",
      "choices": [
        "エラーは発生しない",
        "Rangeオブジェクトの指定が間違っている",
        "Setステートメントが必要",
        "Valueプロパティの使い方が間違っている"
      ],
      "answers": [
        2
      ],
      "explanation": "Rangeオブジェクト代入に Set が必要。",
      "tags": [
        "cell"
      ]
    },
    {
      "id": 18,
      "title": "For文を読み解く",
      "prompt": "以下のコードでB2セルの値はどうなるか。",
      "code": "Sub Test18()\nDim i As Integer, j As Integer\nFor i = 1 To 3\nFor j = 1 To 3\nCells(i, j).Value = Cells(i, j).Offset(1, 1).Address\nNext j\nNext i\nEnd Sub",
      "choices": [
        "エラーが発生する",
        "B2のまま",
        "$B$2",
        "$C$3"
      ],
      "answers": [
        3
      ],
      "explanation": "B2のOffset(1,1)はC3、そのAddress。",
      "tags": [
        "loop",
        "cell"
      ]
    },
    {
      "id": 19,
      "title": "セル操作を確認する",
      "prompt": "以下のコードの実行結果として正しいものはどれか。",
      "code": "Sub Test19()\nDim rng As Range\nSet rng = Range(\"B2:D4\")\nSet rng = rng.Offset(-1, -1).Resize(rng.Rows.Count + 2, rng.Columns.Count + 2)\nrng.Interior.Color = vbRed\nEnd Sub",
      "choices": [
        "A1:E5に色が塗られる",
        "A1:E6に色が塗られる",
        "B2:D4に色が塗られる",
        "エラーが発生する"
      ],
      "answers": [
        0
      ],
      "explanation": "Offset(-1,-1)でA1起点、Resize(5,5)。",
      "tags": [
        "cell"
      ]
    },
    {
      "id": 20,
      "title": "Do...Loopを読み解く",
      "prompt": "以下のコードの動作として正しいものはどれか。",
      "code": "Sub Test20()\nDim i As Integer\ni = 1\nDo While i <> 10\nCells(i, 1).Value = i\ni = i + 2\nLoop\nEnd Sub",
      "choices": [
        "無限ループになる",
        "エラーが発生する",
        "A1～A9に奇数が入力される",
        "A1～A5に奇数が入力される"
      ],
      "answers": [
        1
      ],
      "explanation": "i は奇数のまま増えるため 10 にはなりません。Integer の上限を超えた時点でオーバーフローエラーになります。",
      "tags": [
        "loop",
        "cell"
      ]
    }
  ]
};
