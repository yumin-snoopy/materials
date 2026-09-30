window.PRACTICE_SET = {
  "number": 2,
  "title": "② VBA 初級ステートメント 4択問題 BASIC",
  "description": "Notや複合条件、Step、実行されないFor、二重ループ、WithとOffsetを確認する10問です。",
  "pageUrl": "https://yumin-snoopy.github.io/materials/VBA/vba_statement_practice_02/",
  "questions": [
    {
      "id": 1,
      "title": "NotでFalseを反転する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q1()\nDim ready As Boolean\nready = False\nIf Not ready Then\n    MsgBox \"準備中\"\nElse\n    MsgBox \"作業中\"\nEnd If\nEnd Sub",
      "choices": [
        "作業中",
        "True",
        "準備中",
        "False"
      ],
      "answers": [
        2
      ],
      "explanation": "readyはFalseですが、Notで反転するとTrueです。準備中が表示されます。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 2,
      "title": "最初に成立した分岐だけ実行する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q2()\nDim n As Long\nn = 12\nIf n Mod 2 = 0 Then\n    MsgBox \"偶数\"\nElseIf n > 10 Then\n    MsgBox \"大きい\"\nElse\n    MsgBox \"その他\"\nEnd If\nEnd Sub",
      "choices": [
        "偶数",
        "大きい",
        "その他",
        "12"
      ],
      "answers": [
        0
      ],
      "explanation": "12は偶数なので最初のIfがTrueです。n > 10も成立しますが、ElseIfは実行されません。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 3,
      "title": "括弧を含む複合条件",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q3()\nDim x As Long\nDim y As Long\nx = 2\ny = 7\nIf (x > 3 And y > 5) Or y < 5 Then\n    MsgBox \"A\"\nElse\n    MsgBox \"B\"\nEnd If\nEnd Sub",
      "choices": [
        "A",
        "B",
        "2",
        "7"
      ],
      "answers": [
        1
      ],
      "explanation": "括弧内はx > 3がFalseなのでFalseです。y < 5もFalseで、全体はFalseになります。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 4,
      "title": "Step 3で加える値を追う",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q4()\nDim i As Long\nDim total As Long\nFor i = 1 To 10 Step 3\n    total = total + i\nNext i\nMsgBox total\nEnd Sub",
      "choices": [
        "10",
        "18",
        "20",
        "22"
      ],
      "answers": [
        3
      ],
      "explanation": "iは1、4、7、10と変わります。合計は1+4+7+10=22です。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 5,
      "title": "Stepを省略したForの実行回数",
      "prompt": "Stepを書かないとき、countはいくつ表示されますか。",
      "code": "Sub Q5()\nDim i As Long\nDim count As Long\ncount = 0\nFor i = 5 To 1\n    count = count + 1\nNext i\nMsgBox count\nEnd Sub",
      "choices": [
        "0",
        "1",
        "5",
        "15"
      ],
      "answers": [
        0
      ],
      "explanation": "Stepを省略するとStep 1と同じです。最初の判定で5 <= 1はFalseなので、本体は0回でcountは0のままです。5から1へ減らして繰り返すにはStep -1が必要です。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 6,
      "title": "WithとOffsetで選択セルを移す",
      "prompt": "選択されるセルはどれですか。",
      "code": "Sub Q6()\nWith Range(\"D5\")\n    .Offset(-2, 1).Select\nEnd With\nEnd Sub",
      "choices": [
        "D3",
        "E5",
        "E3",
        "F3"
      ],
      "answers": [
        2
      ],
      "explanation": "D5から2行上、1列右へ移動するとE3です。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 7,
      "title": "二重のForで実行回数を数える",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q7()\nDim r As Long\nDim c As Long\nDim count As Long\nFor r = 1 To 2\n    For c = 1 To 3\n        count = count + 1\n    Next c\nNext r\nMsgBox count\nEnd Sub",
      "choices": [
        "5",
        "6",
        "3",
        "9"
      ],
      "answers": [
        1
      ],
      "explanation": "外側が2回、内側が毎回3回なので、countは2×3=6回増えます。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 8,
      "title": "Forの前半と後半を分けて集計する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q8()\nDim i As Long\nDim firstPart As Long\nDim lastPart As Long\nFor i = 1 To 5\n    If i < 3 Then\n        firstPart = firstPart + i\n    Else\n        lastPart = lastPart + i\n    End If\nNext i\nMsgBox lastPart - firstPart\nEnd Sub",
      "choices": [
        "3",
        "7",
        "12",
        "9"
      ],
      "answers": [
        3
      ],
      "explanation": "firstPartは1+2=3、lastPartは3+4+5=12です。差の12-3で9になります。",
      "tags": [
        "if",
        "loop"
      ]
    },
    {
      "id": 9,
      "title": "空文字をIfで判定する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q9()\nDim userName As String\nuserName = \"\"\nIf userName = \"\" Then\n    MsgBox \"未入力\"\nElse\n    MsgBox \"入力済み\"\nEnd If\nEnd Sub",
      "choices": [
        "未入力",
        "入力済み",
        "空白",
        "エラー"
      ],
      "answers": [
        0
      ],
      "explanation": "userNameには空文字が代入されています。条件がTrueなので未入力が表示されます。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 10,
      "title": "Forの終了後のカウンターを読む",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q10()\nDim i As Long\nDim count As Long\nFor i = 1 To 3\n    count = count + 1\nNext i\nMsgBox count & \",\" & i\nEnd Sub",
      "choices": [
        "3,3",
        "3,4",
        "4,3",
        "4,4"
      ],
      "answers": [
        1
      ],
      "explanation": "本体は3回実行されます。最後のNext iでiは4となるので、countとiは3,4です。",
      "tags": [
        "loop"
      ]
    }
  ]
};

