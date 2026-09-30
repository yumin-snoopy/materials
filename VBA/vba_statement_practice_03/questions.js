window.PRACTICE_SET = {
  "number": 3,
  "title": "VBA エキスパート 練習問題③",
  "description": "Withによるセル範囲の指定と、If・For...Next・Stepを組み合わせたコードを読む10問です。",
  "pageUrl": "https://yumin-snoopy.github.io/materials/VBA/vba_statement_practice_03/",
  "questions": [
    {
      "id": 1,
      "title": "WithとResizeで範囲を広げる",
      "prompt": "選択されるセル範囲はどれですか。",
      "code": "Sub Q1()\nWith Range(\"B3\")\n    .Resize(2, 3).Select\nEnd With\nEnd Sub",
      "choices": [
        "B3:C5",
        "B3:D4",
        "B3:D5",
        "C3:D4"
      ],
      "answers": [
        1
      ],
      "explanation": "B3を起点に2行×3列へ広げると、B3:D4が選択されます。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 2,
      "title": "Withで同じシートのセルを参照する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q2()\nWith ActiveSheet\n    .Cells(2, 1).Value = 4\n    .Cells(2, 2).Value = 7\n    MsgBox .Cells(2, 1).Value * .Cells(2, 2).Value\nEnd With\nEnd Sub",
      "choices": [
        "11",
        "14",
        "47",
        "28"
      ],
      "answers": [
        3
      ],
      "explanation": "Cells(2, 1)はA2、Cells(2, 2)はB2です。設定した4と7を掛けて28になります。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 3,
      "title": "ElseIfで在庫の状態を分ける",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q3()\nDim stock As Long\nDim orderCount As Long\nstock = 4\norderCount = 5\nIf stock >= orderCount Then\n    MsgBox \"出荷\"\nElseIf stock > 0 Then\n    MsgBox \"一部出荷\"\nElse\n    MsgBox \"在庫なし\"\nEnd If\nEnd Sub",
      "choices": [
        "一部出荷",
        "出荷",
        "在庫なし",
        "4"
      ],
      "answers": [
        0
      ],
      "explanation": "在庫4は注文5に足りませんが、0より大きいのでElseIf側の一部出荷になります。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 4,
      "title": "負のStepで最後の値を記録する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q4()\nDim i As Long\nDim lastValue As Long\nFor i = 8 To 2 Step -2\n    lastValue = i\nNext i\nMsgBox lastValue\nEnd Sub",
      "choices": [
        "0",
        "1",
        "2",
        "4"
      ],
      "answers": [
        2
      ],
      "explanation": "iは8、6、4、2の順です。最後に代入される値は2です。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 5,
      "title": "StepとIfを組み合わせて合計する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q5()\nDim i As Long\nDim total As Long\nFor i = 2 To 10 Step 2\n    If i >= 6 Then\n        total = total + i\n    End If\nNext i\nMsgBox total\nEnd Sub",
      "choices": [
        "18",
        "24",
        "30",
        "10"
      ],
      "answers": [
        1
      ],
      "explanation": "iは2、4、6、8、10です。条件を満たす6、8、10だけを足すので24です。",
      "tags": [
        "if",
        "loop"
      ]
    },
    {
      "id": 6,
      "title": "入れ子のIfと代入順を追う",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q6()\nDim balance As Long\nDim cost As Long\nDim coupon As Long\nbalance = 1000\ncost = 700\ncoupon = 200\nIf balance >= cost Then\n    balance = balance - cost\n    If coupon > 0 Then\n        balance = balance + coupon\n    End If\nEnd If\nMsgBox balance\nEnd Sub",
      "choices": [
        "100",
        "300",
        "700",
        "500"
      ],
      "answers": [
        3
      ],
      "explanation": "1000から700を引いて300です。内側のIfもTrueなので200を足し、500になります。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 7,
      "title": "Withの中でForを使いセルへ書く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q7()\nDim i As Long\nWith Range(\"A1\")\n    For i = 1 To 3\n        .Offset(i - 1, 0).Value = i * 10\n    Next i\n    MsgBox .Offset(2, 0).Value\nEnd With\nEnd Sub",
      "choices": [
        "10",
        "20",
        "30",
        "60"
      ],
      "answers": [
        2
      ],
      "explanation": "A1、A2、A3に10、20、30を書きます。A1から2行下のA3を読むので30です。",
      "tags": [
        "other",
        "loop"
      ]
    },
    {
      "id": 8,
      "title": "Forの各回で文字を選ぶ",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q8()\nDim i As Long\nDim result As String\nFor i = 1 To 4\n    If i = 3 Then\n        result = result & \"X\"\n    Else\n        result = result & \"-\"\n    End If\nNext i\nMsgBox result\nEnd Sub",
      "choices": [
        "--X-",
        "-X--",
        "---X",
        "XX--"
      ],
      "answers": [
        0
      ],
      "explanation": "iが3のときだけX、それ以外は-を追加します。順に並べると--X-です。",
      "tags": [
        "if",
        "loop"
      ]
    },
    {
      "id": 9,
      "title": "等しい値から片方だけ変更する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q9()\nDim a As Long\nDim b As Long\na = 3\nb = 3\nIf a = b Then\n    a = a + 4\nElse\n    b = b + 4\nEnd If\nMsgBox a & \",\" & b\nEnd Sub",
      "choices": [
        "3,7",
        "7,3",
        "7,7",
        "3,3"
      ],
      "answers": [
        1
      ],
      "explanation": "最初はaとbが同じなのでIf側だけ実行します。aは7、bは3のままです。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 10,
      "title": "With内のIfでセルを比較する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q10()\nWith ActiveSheet\n    .Range(\"B2\").Value = 3\n    .Range(\"C2\").Value = 2\n    If .Range(\"B2\").Value > .Range(\"C2\").Value Then\n        MsgBox \"B2\"\n    Else\n        MsgBox \"C2\"\n    End If\nEnd With\nEnd Sub",
      "choices": [
        "C2",
        "5",
        "3",
        "B2"
      ],
      "answers": [
        3
      ],
      "explanation": "B2には3、C2には2を入れます。3 > 2がTrueなのでB2が表示されます。",
      "tags": [
        "if",
        "other"
      ]
    }
  ]
};

