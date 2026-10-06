window.PRACTICE_SET = {
  "number": 7,
  "title": "VBA エキスパート 練習問題⑦",
  "description": "If・For...Next・With、セル参照、文字列処理を読み解く20問です。",
  "pageUrl": "https://yumin-snoopy.github.io/materials/VBA/vba_statement_practice_07/",
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
      "code": "Sub Q3()\nDim i As Long\nDim total As Long\nDim lastI As Long\nFor i = 1 To 10\nIf total < 15 Then\ntotal = total + i\nlastI = i\nEnd If\nNext i\nMsgBox \"i=\" & lastI & \", total=\" & total\nEnd Sub",
      "choices": [
        "i=6, total=21",
        "i=10, total=55",
        "i=4, total=10",
        "i=5, total=15"
      ],
      "answers": [
        3
      ],
      "explanation": "i=1から5まで足すと合計が15になります。その後は条件を満たさず加算しないため、lastIは5、totalは15です。",
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
      "title": "If文で点数を判定する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q5()\nDim score As Integer\nDim msg As String\nscore = 70\nIf score >= 80 Then\nmsg = \"A\"\nElseIf score >= 60 Then\nmsg = \"B\"\nElse\nmsg = \"C\"\nEnd If\nMsgBox msg\nEnd Sub",
      "choices": [
        "A",
        "B",
        "C",
        "D"
      ],
      "answers": [
        1
      ],
      "explanation": "70は80以上ではありませんが60以上なので、ElseIfの処理で「B」になります。",
      "tags": [
        "if"
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
      "title": "For文で条件に合うセルを数える",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q7()\nDim i As Long\nDim cnt As Long\nRange(\"A1\").Value = 5\nRange(\"A2\").Value = 10\nRange(\"A3\").Value = 15\nRange(\"A4\").Value = 8\nRange(\"A5\").Value = 12\nFor i = 1 To 5\nIf Cells(i, 1).Value >= 10 Then\ncnt = cnt + 1\nEnd If\nNext i\nMsgBox cnt\nEnd Sub",
      "choices": [
        "4",
        "5",
        "2",
        "3"
      ],
      "answers": [
        3
      ],
      "explanation": "A1:A5のうち10以上の値は10、15、12の3個です。",
      "tags": [
        "if",
        "loop",
        "cell"
      ]
    },
    {
      "id": 8,
      "title": "For文で数を3倍ずつにする",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q8()\nDim i As Long\nDim n As Long\nn = 1\nFor i = 1 To 3\nn = n * 3\nNext i\nMsgBox n\nEnd Sub",
      "choices": [
        "27",
        "無限ループになる",
        "9",
        "18"
      ],
      "answers": [
        0
      ],
      "explanation": "For文は3回実行され、nは1→3→9→27と変わります。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 9,
      "title": "Stepを使って奇数を合計する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q9()\nDim n As Long\nDim i As Long\nFor i = 1 To 7 Step 2\nn = n + i\nNext i\nMsgBox n\nEnd Sub",
      "choices": [
        "15",
        "16",
        "9",
        "14"
      ],
      "answers": [
        1
      ],
      "explanation": "iは1、3、5、7と変わるので、合計は1+3+5+7=16です。",
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
      "title": "If文で曜日を分類する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q14()\nDim d As String\nDim msg As String\nd = \"水\"\nIf d = \"月\" Or d = \"火\" Then\nmsg = \"前半\"\nElseIf d = \"水\" Or d = \"木\" Then\nmsg = \"中日\"\nElseIf d = \"金\" Then\nmsg = \"花金\"\nElse\nmsg = \"週末\"\nEnd If\nMsgBox msg\nEnd Sub",
      "choices": [
        "週末",
        "前半",
        "中日",
        "花金"
      ],
      "answers": [
        2
      ],
      "explanation": "「水」は2番目の条件に当てはまるので、「中日」が表示されます。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 15,
      "title": "For文を読み解く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q15()\nDim i As Long\nDim s As String\ns = \"\"\nFor i = 1 To 5\nIf Len(s) < 4 Then\nIf i Mod 2 = 1 Then\ns = s & \"A\"\nElse\ns = s & \"B\"\nEnd If\nEnd If\nNext i\nMsgBox s\nEnd Sub",
      "choices": [
        "AABB",
        "ABABB",
        "ABABA",
        "ABAB"
      ],
      "answers": [
        3
      ],
      "explanation": "i=1から4で順にA、B、A、Bを連結します。5回目は文字数が4なので追加しません。",
      "tags": [
        "if",
        "loop"
      ]
    },
    {
      "id": 16,
      "title": "For文で最初の条件一致を記録する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q16()\nDim n As Long\nDim found As Long\nFor n = 1 To 10\nIf found = 0 And n >= 5 And n Mod 2 = 0 Then\nfound = n\nEnd If\nNext n\nMsgBox found\nEnd Sub",
      "choices": [
        "6",
        "7",
        "4",
        "5"
      ],
      "answers": [
        0
      ],
      "explanation": "5以上で最初の偶数は6です。foundに6が入ると、その後はfound=0が偽なので値は変わりません。",
      "tags": [
        "if",
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
      "title": "For文で条件に合う最初の値を記録する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q18()\nDim i As Long\nDim found As Long\nFor i = 1 To 5\nCells(i, 1).Value = i * 2\nIf found = 0 And Cells(i, 1).Value >= 6 Then\nfound = Cells(i, 1).Value\nEnd If\nNext i\nMsgBox found\nEnd Sub",
      "choices": [
        "2",
        "4",
        "6",
        "8"
      ],
      "answers": [
        2
      ],
      "explanation": "A列には2、4、6、8、10が入り、最初に6以上となる値6をfoundに記録します。",
      "tags": [
        "if",
        "loop",
        "cell"
      ]
    },
    {
      "id": 19,
      "title": "If文で余りに応じて加算する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q19()\nDim i As Long\nDim cnt As Long\nFor i = 1 To 6\nIf i Mod 3 = 0 Then\ncnt = cnt + 2\nElseIf i Mod 3 = 1 Then\ncnt = cnt + 1\nEnd If\nNext i\nMsgBox cnt\nEnd Sub",
      "choices": [
        "8",
        "4",
        "5",
        "6"
      ],
      "answers": [
        3
      ],
      "explanation": "iが3と6のとき2ずつ、1と4のとき1ずつ加えるので、合計は6です。",
      "tags": [
        "if",
        "loop"
      ]
    },
    {
      "id": 20,
      "title": "For文とIf文で文字列を作る",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q20()\nDim i As Long\nDim s As String\ns = \"\"\nFor i = 1 To 4\nIf Len(s) < 2 Then\nIf i Mod 2 = 1 Then\ns = s & \"X\"\nElse\ns = s & \"Y\"\nEnd If\nEnd If\nNext i\nIf s = \"XY\" Then\ns = s & \"!\"\nEnd If\nMsgBox s\nEnd Sub",
      "choices": [
        "XY!",
        "XYZ",
        "XXYZ",
        "XY"
      ],
      "answers": [
        0
      ],
      "explanation": "1回目にX、2回目にYを連結します。文字数が2になった後は追加せず、最後に「!」を付けるため「XY!」です。",
      "tags": [
        "if",
        "loop"
      ]
    }
  ]
};
