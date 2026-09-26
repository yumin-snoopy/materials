window.PRACTICE_SET = {
  "number": 7,
  "title": "⑦ VBA 中級ステートメント 4択問題 BASIC",
  "description": "複合条件、ループ、セル参照、配列、文字列処理を読み解く20問です。",
  "pageUrl": "https://yumin-snoopy.github.io/materials/vba_statement_practice_07/",
  "questions": [
    {
      "id": 1,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q1()\nDim i As Long\nDim total As Long\ntotal = 0\nFor i = 1 To 5\nIf i Mod 2 = 0 Then\ntotal = total + i * 2\nElse\ntotal = total + i\nEnd If\nNext i\nMsgBox total\nEnd Sub",
      "choices": [
        "18",
        "21",
        "24",
        "15"
      ],
      "answers": [
        1
      ],
      "explanation": "偶数だけ×2、奇数はそのまま加算。",
      "tags": [
        "if",
        "loop"
      ]
    },
    {
      "id": 2,
      "title": "If文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q2()\nDim a As Integer\nDim b As Integer\nDim msg As String\na = 3\nb = 8\nIf Not (a >= 5 Or b <= 5) Then\nmsg = \"A\"\nElseIf a < 5 And b > 5 Then\nmsg = \"B\"\nElse\nmsg = \"C\"\nEnd If\nMsgBox msg\nEnd Sub",
      "choices": [
        "C",
        "エラーになる",
        "A",
        "B"
      ],
      "answers": [
        2
      ],
      "explanation": "(a>=5 Or b<=5) が偽 → Not で真。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 3,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q3()\nDim i As Long\nDim total As Long\nFor i = 1 To 10\ntotal = total + i\nIf total >= 15 Then\nExit For\nEnd If\nNext i\nMsgBox \"i=\" & i & \", total=\" & total\nEnd Sub",
      "choices": [
        "i=6, total=21",
        "i=10, total=55",
        "i=4, total=10",
        "i=5, total=15"
      ],
      "answers": [
        3
      ],
      "explanation": "合計が15に達した瞬間に Exit For。",
      "tags": [
        "if",
        "loop"
      ]
    },
    {
      "id": 4,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q4()\nDim i As Long\nDim count As Long\nFor i = 1 To 12\nIf i Mod 2 = 0 Then\nIf i Mod 3 = 0 Then\ncount = count + 1\nEnd If\nEnd If\nNext i\nMsgBox count\nEnd Sub",
      "choices": [
        "2",
        "3",
        "4",
        "1"
      ],
      "answers": [
        0
      ],
      "explanation": "2条件（偶数かつ3の倍数）に当てはまるのは 6 と 12。",
      "tags": [
        "if",
        "loop"
      ]
    },
    {
      "id": 5,
      "title": "Select Caseを読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q5()\nDim score As Integer\nDim msg As String\nscore = 70\nSelect Case score\nCase Is >= 80\nmsg = \"A\"\nCase 60 To 79\nmsg = \"B\"\nCase 0 To 59\nmsg = \"C\"\nCase Else\nmsg = \"D\"\nEnd Select\nMsgBox msg\nEnd Sub",
      "choices": [
        "A",
        "B",
        "C",
        "D"
      ],
      "answers": [
        1
      ],
      "explanation": "70点は 60～79 の範囲。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 6,
      "title": "セル操作を確認する",
      "prompt": "セルの初期状態は次のとおりです。",
      "code": "A1 = 5\nB1 = 3\nSub Q6()\nWith Range(\"A1\")\n.Value = .Value + 2\nEnd With\nWith Range(\"B1\")\n.Value = Range(\"A1\").Value + .Value\nEnd With\nMsgBox Range(\"B1\").Value\nEnd Sub",
      "choices": [
        "8",
        "9",
        "10",
        "7"
      ],
      "answers": [
        2
      ],
      "explanation": "A1を先に+2してから、B1に A1+B1 を入れる。",
      "tags": [
        "cell"
      ]
    },
    {
      "id": 7,
      "title": "For文を読み解く",
      "prompt": "セルの初期状態は次のとおりです。",
      "code": "A1 = 5\nA2 = 10\nA3 = 15\nA4 = 8\nA5 = 12\nSub Q7()\nDim c As Range\nDim cnt As Long\nFor Each c In Range(\"A1:A5\")\nIf c.Value >= 10 Then\ncnt = cnt + 1\nEnd If\nNext c\nMsgBox cnt\nEnd Sub",
      "choices": [
        "4",
        "5",
        "2",
        "3"
      ],
      "answers": [
        3
      ],
      "explanation": "10以上は 10,15,12 の3個。",
      "tags": [
        "if",
        "loop",
        "cell"
      ]
    },
    {
      "id": 8,
      "title": "Do...Loopを読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q8()\nDim n As Long\nn = 1\nDo While n < 20\nn = n * 3\nLoop\nMsgBox n\nEnd Sub",
      "choices": [
        "27",
        "無限ループになる",
        "9",
        "18"
      ],
      "answers": [
        0
      ],
      "explanation": "1→3→9→27 で条件を満たして終了。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 9,
      "title": "Do...Loopを読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q9()\nDim n As Long\nDim i As Long\nn = 0\ni = 1\nDo\nn = n + i\ni = i + 2\nLoop Until n >= 15\nMsgBox n\nEnd Sub",
      "choices": [
        "15",
        "16",
        "9",
        "14"
      ],
      "answers": [
        1
      ],
      "explanation": "1+3+5+7=16 で 15以上に到達。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 10,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q10()\nDim s As String\nDim i As Long\ns = \"VBAEXPERT\"\nFor i = 1 To Len(s)\nIf Mid(s, i, 1) = \"E\" Then\ns = Left(s, i - 1) & \"e\" & Mid(s, i + 1)\nEnd If\nNext i\nMsgBox s\nEnd Sub",
      "choices": [
        "VBAeXPERT",
        "VBAeXeRT",
        "VBAeXPeRT",
        "VBAEXPERT"
      ],
      "answers": [
        2
      ],
      "explanation": "Eを見つけた位置だけ順に小文字化（2箇所）。",
      "tags": [
        "if",
        "loop"
      ]
    },
    {
      "id": 11,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q11()\nDim i As Long\nDim txt As String\nFor i = 10 To 2 Step -3\ntxt = txt & i & \",\"\nNext i\nMsgBox txt\nEnd Sub",
      "choices": [
        "10,7,4,2,",
        "10,9,8,7,",
        "10,7,4,1,",
        "10,7,4,"
      ],
      "answers": [
        3
      ],
      "explanation": "10→7→4 の3回（次は1で範囲外）。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 12,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q12()\nDim i As Long\nDim total As Long\nFor i = 1 To 6\nIf i Mod 3 = 0 Then\nElse\ntotal = total + i\nEnd If\nNext i\nMsgBox total\nEnd Sub",
      "choices": [
        "12",
        "15",
        "9",
        "10"
      ],
      "answers": [
        0
      ],
      "explanation": "3と6を除外して 1+2+4+5。",
      "tags": [
        "if",
        "loop"
      ]
    },
    {
      "id": 13,
      "title": "If文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q13()\nDim n As Long\nDim msg As String\nn = 5\nIf n > 0 Then\nmsg = \"A\"\nElseIf n > 3 Then\nmsg = \"B\"\nElse\nmsg = \"C\"\nEnd If\nMsgBox msg\nEnd Sub",
      "choices": [
        "エラーになる",
        "A",
        "B",
        "C"
      ],
      "answers": [
        1
      ],
      "explanation": "最初の If（n>0）で確定し、ElseIfは見ない。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 14,
      "title": "Select Caseを読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q14()\nDim d As String\nDim msg As String\nd = \"水\"\nSelect Case d\nCase \"月\", \"火\"\nmsg = \"前半\"\nCase \"水\", \"木\"\nmsg = \"中日\"\nCase \"金\"\nmsg = \"花金\"\nCase Else\nmsg = \"週末\"\nEnd Select\nMsgBox msg\nEnd Sub",
      "choices": [
        "週末",
        "前半",
        "中日",
        "花金"
      ],
      "answers": [
        2
      ],
      "explanation": "\"水\" は Case \"水\",\"木\" に一致。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 15,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q15()\nDim i As Long\nDim s As String\ns = \"\"\nFor i = 1 To 5\nIf i Mod 2 = 1 Then\ns = s & \"A\"\nElse\ns = s & \"B\"\nIf Len(s) >= 4 Then\nExit For\nEnd If\nEnd If\nNext i\nMsgBox s\nEnd Sub",
      "choices": [
        "AABB",
        "ABABB",
        "ABABA",
        "ABAB"
      ],
      "answers": [
        3
      ],
      "explanation": "Len(s)>=4 になった偶数回で Exit For。",
      "tags": [
        "if",
        "loop"
      ]
    },
    {
      "id": 16,
      "title": "Do...Loopを読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q16()\nDim n As Long\nn = 0\nDo While Not (n >= 5 And n Mod 2 = 0)\nn = n + 1\nLoop\nMsgBox n\nEnd Sub",
      "choices": [
        "6",
        "7",
        "4",
        "5"
      ],
      "answers": [
        0
      ],
      "explanation": "「5以上かつ偶数」になったらループ終了。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 17,
      "title": "セル操作を確認する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q17()\nRange(\"A1\").Value = 1\nRange(\"A2\").Value = 2\nRange(\"A3\").Value = 3\nWith Range(\"A1\")\n.Offset(1, 0).Value = .Value + .Offset(1, 0).Value\n.Offset(2, 0).Value = .Offset(1, 0).Value * 2\nEnd With\nMsgBox Range(\"A3\").Value\nEnd Sub",
      "choices": [
        "5",
        "6",
        "3",
        "4"
      ],
      "answers": [
        1
      ],
      "explanation": "A2=1+2=3、A3=3×2=6。",
      "tags": [
        "cell"
      ]
    },
    {
      "id": 18,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q18()\nDim arr(1 To 5) As Integer\nDim i As Long\nDim x As Variant\nDim found As Integer\nFor i = 1 To 5\narr(i) = i * 2\nNext i\nFor Each x In arr\nIf x >= 6 Then\nfound = x\nExit For\nEnd If\nNext x\nMsgBox found\nEnd Sub",
      "choices": [
        "2",
        "4",
        "6",
        "8"
      ],
      "answers": [
        2
      ],
      "explanation": "配列を先頭から見て、最初に6以上になるのが6。",
      "tags": [
        "if",
        "loop"
      ]
    },
    {
      "id": 19,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q19()\nDim i As Long\nDim cnt As Long\nFor i = 1 To 6\nSelect Case i Mod 3\nCase 0\ncnt = cnt + 2\nCase 1\ncnt = cnt + 1\nCase Else\n' 何もしない\nEnd Select\nNext i\nMsgBox cnt\nEnd Sub",
      "choices": [
        "8",
        "4",
        "5",
        "6"
      ],
      "answers": [
        3
      ],
      "explanation": "mod3=1で+1、mod3=0で+2 を合計。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 20,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q20()\nDim i As Long\nDim s As String\ns = \"\"\nFor i = 1 To 4\nSelect Case i\nCase 1, 4\ns = s & \"X\"\nCase 2\ns = s & \"Y\"\nCase 3\ns = s & \"Z\"\nEnd Select\nIf s = \"XY\" Then\ns = s & \"!\"\nExit For\nEnd If\nNext i\nMsgBox s\nEnd Sub",
      "choices": [
        "XY!",
        "XYZ",
        "XXYZ",
        "XY"
      ],
      "answers": [
        0
      ],
      "explanation": "i=2で \"XY\" になった瞬間に \"!\" を付けて Exit For。",
      "tags": [
        "if",
        "loop"
      ]
    }
  ]
};
