window.PRACTICE_SET = {
  "number": 1,
  "title": "VBA エキスパート 練習問題①",
  "description": "Ifによる分岐、For...NextとStep、Withによるセル参照をコードから読み解く10問です。",
  "pageUrl": "https://yumin-snoopy.github.io/materials/VBA/vba_statement_practice_01/",
  "questions": [
    {
      "id": 1,
      "title": "If...Then...Elseで合否を決める",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q1()\nDim score As Long\nDim result As String\nscore = 68\nIf score >= 70 Then\n    result = \"合格\"\nElse\n    result = \"再挑戦\"\nEnd If\nMsgBox result\nEnd Sub",
      "choices": [
        "合格",
        "保留",
        "再挑戦",
        "エラー"
      ],
      "answers": [
        2
      ],
      "explanation": "scoreは68なので、score >= 70はFalseです。Else側が実行され、再挑戦と表示されます。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 2,
      "title": "ElseIfで点数を分類する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q2()\nDim points As Long\npoints = 82\nIf points >= 90 Then\n    MsgBox \"A\"\nElseIf points >= 80 Then\n    MsgBox \"B\"\nElse\n    MsgBox \"C\"\nEnd If\nEnd Sub",
      "choices": [
        "B",
        "A",
        "C",
        "82"
      ],
      "answers": [
        0
      ],
      "explanation": "82は90以上ではありませんが、80以上です。2番目の条件がTrueになり、Bが表示されます。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 3,
      "title": "Andで2つの条件を確認する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q3()\nDim age As Long\nDim hasTicket As Boolean\nage = 19\nhasTicket = True\nIf age >= 18 And hasTicket = True Then\n    MsgBox \"入場可\"\nElse\n    MsgBox \"入場不可\"\nEnd If\nEnd Sub",
      "choices": [
        "入場不可",
        "年齢確認",
        "True",
        "入場可"
      ],
      "answers": [
        3
      ],
      "explanation": "19歳は18歳以上で、hasTicketもTrueです。Andの両側がTrueなので入場可です。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 4,
      "title": "Orで販売停止を判定する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q4()\nDim stock As Long\nDim isClosed As Boolean\nstock = 0\nisClosed = False\nIf stock = 0 Or isClosed = True Then\n    MsgBox \"販売停止\"\nElse\n    MsgBox \"販売中\"\nEnd If\nEnd Sub",
      "choices": [
        "販売中",
        "販売停止",
        "休業日",
        "0"
      ],
      "answers": [
        1
      ],
      "explanation": "stock = 0がTrueです。Orは片方がTrueなら成立するため、販売停止が表示されます。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 5,
      "title": "入れ子のIfを順に追う",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q5()\nDim member As Boolean\nDim total As Long\nmember = True\ntotal = 1800\nIf member = True Then\n    If total >= 2000 Then\n        MsgBox \"会員割引\"\n    Else\n        MsgBox \"通常料金\"\n    End If\nElse\n    MsgBox \"非会員\"\nEnd If\nEnd Sub",
      "choices": [
        "会員割引",
        "非会員",
        "通常料金",
        "1800"
      ],
      "answers": [
        2
      ],
      "explanation": "外側のIfはTrueですが、内側のtotal >= 2000はFalseです。内側のElseに進みます。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 6,
      "title": "For...Nextで合計する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q6()\nDim i As Long\nDim total As Long\nFor i = 1 To 4\n    total = total + i\nNext i\nMsgBox total\nEnd Sub",
      "choices": [
        "10",
        "6",
        "11",
        "4"
      ],
      "answers": [
        0
      ],
      "explanation": "totalの初期値は0です。iが1、2、3、4と変わり、合計は10になります。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 7,
      "title": "Step 2の繰り返し回数",
      "prompt": "Countの値はいくつですか。",
      "code": "Sub Q7()\nDim i As Long\nDim count As Long\nFor i = 2 To 8 Step 2\n    count = count + 1\nNext i\nMsgBox count\nEnd Sub",
      "choices": [
        "3",
        "5",
        "8",
        "4"
      ],
      "answers": [
        3
      ],
      "explanation": "iは2、4、6、8の4つの値を取ります。countは4回増えるため、4が表示されます。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 8,
      "title": "負のStepで逆順に並べる",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q8()\nDim i As Long\nDim result As String\nFor i = 5 To 1 Step -2\n    result = result & i\nNext i\nMsgBox result\nEnd Sub",
      "choices": [
        "135",
        "531",
        "54321",
        "51"
      ],
      "answers": [
        1
      ],
      "explanation": "iは5、3、1の順です。文字列にこの順でつなぐので、531が表示されます。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 9,
      "title": "Forの中でIfを使い分ける",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q9()\nDim i As Long\nDim total As Long\nFor i = 1 To 4\n    If i >= 3 Then\n        total = total + 10\n    Else\n        total = total + 1\n    End If\nNext i\nMsgBox total\nEnd Sub",
      "choices": [
        "12",
        "21",
        "22",
        "40"
      ],
      "answers": [
        2
      ],
      "explanation": "iが1、2のときは1ずつ、3、4のときは10ずつ加えます。1+1+10+10で22です。",
      "tags": [
        "if",
        "loop"
      ]
    },
    {
      "id": 10,
      "title": "WithとOffsetで隣のセルを使う",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q10()\nWith Range(\"B2\")\n    .Value = 6\n    .Offset(0, 1).Value = .Value * 2\n    MsgBox .Offset(0, 1).Value\nEnd With\nEnd Sub",
      "choices": [
        "12",
        "6",
        "8",
        "2"
      ],
      "answers": [
        0
      ],
      "explanation": "Withの基準はB2です。右隣のC2に6×2の12を入れ、そのC2の値を表示します。",
      "tags": [
        "other"
      ]
    }
  ]
};

