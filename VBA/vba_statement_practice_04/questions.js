window.PRACTICE_SET = {
  "number": 4,
  "title": "VBA エキスパート 練習問題④",
  "description": "If・For...Next・Withを使い、セルのコピー、表示形式、範囲指定、シート追加を読み解く10問です。",
  "pageUrl": "https://yumin-snoopy.github.io/materials/VBA/vba_statement_practice_04/",
  "questions": [
    {
      "id": 1,
      "title": "2行2列の範囲をコピーする",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q1()\nRange(\"B2\").Value = \"★\"\nRange(\"A1:B2\").Copy Destination:=Range(\"D4\")\nMsgBox Range(\"E5\").Value\nEnd Sub",
      "choices": [
        "空白",
        "9",
        "★",
        "エラー"
      ],
      "answers": [
        2
      ],
      "explanation": "A1:B2をD4を左上としてコピーします。元のB2は右下のセルなので、コピー先のE5に「印」が入ります。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 2,
      "title": "表示形式とセルの値を区別する",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q2()\nRange(\"A1\").Value = 0.25\nRange(\"A1\").NumberFormat = \"0%\"\nMsgBox Range(\"A1\").Value * 100\nEnd Sub",
      "choices": [
        "25",
        "0.25",
        "100",
        "0%"
      ],
      "answers": [
        0
      ],
      "explanation": "表示形式を0%にしても、セルの値は0.25のままです。0.25×100で25が表示されます。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 3,
      "title": "定数をForの終了値に使う",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q3()\nConst LIMIT As Long = 4\nDim i As Long\nFor i = 1 To LIMIT\n    Range(\"B1\").Value = i * 2\nNext i\nMsgBox Range(\"B1\").Value\nEnd Sub",
      "choices": [
        "2",
        "4",
        "6",
        "8"
      ],
      "answers": [
        3
      ],
      "explanation": "LIMITは4です。B1は各回で上書きされ、最後のi=4のとき4×2=8が残ります。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 4,
      "title": "1行のIfステートメントを読む",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q4()\nRange(\"A1\").Value = 4\nIf Range(\"A1\").Value Mod 2 = 0 Then Range(\"A1\").Value = Range(\"A1\").Value * 3\nMsgBox Range(\"A1\").Value\nEnd Sub",
      "choices": [
        "4",
        "12",
        "3",
        "8"
      ],
      "answers": [
        1
      ],
      "explanation": "4 Mod 2は0なので、1行のIfの後半が実行されます。A1は4×3=12になります。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 5,
      "title": "With内のCellsは範囲を基準にする",
      "prompt": "9が入力されるセルはどれですか。",
      "code": "Sub Q5()\nWith Range(\"B2:D2\")\n    .Cells(1, 2).Value = 9\nEnd With\nEnd Sub",
      "choices": [
        "B2",
        "C2",
        "D2",
        "C3"
      ],
      "answers": [
        1
      ],
      "explanation": "Withの範囲はB2から始まります。.Cells(1, 2)はその1行目・2列目なのでC2です。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 6,
      "title": "内側のForの終了値が変わる",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q6()\nDim r As Long\nDim c As Long\nFor r = 1 To 3\n    For c = 1 To r\n        Cells(r, c).Value = r * 10 + c\n    Next c\nNext r\nMsgBox Cells(3, 2).Value\nEnd Sub",
      "choices": [
        "32",
        "23",
        "33",
        "6"
      ],
      "answers": [
        0
      ],
      "explanation": "r=3のとき内側のForはc=1、2、3です。Cells(3, 2)には3×10+2=32が入ります。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 7,
      "title": "Resizeで広げた範囲へ書き込む",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q7()\nRange(\"C2\").Resize(2, 3).Value = \"済\"\nMsgBox Range(\"E3\").Value\nEnd Sub",
      "choices": [
        "空白",
        "C2",
        "3",
        "済"
      ],
      "answers": [
        3
      ],
      "explanation": "C2から2行×3列はC2:E3です。E3もこの範囲内なので「済」が表示されます。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 8,
      "title": "Forで作った値をまとめてコピーする",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q8()\nDim i As Long\nFor i = 2 To 4\n    Cells(i, 1).Value = i * 2\nNext i\nRange(\"A2:A4\").Copy Destination:=Range(\"C2\")\nMsgBox Range(\"C4\").Value\nEnd Sub",
      "choices": [
        "6",
        "8",
        "4",
        "0"
      ],
      "answers": [
        1
      ],
      "explanation": "A2、A3、A4には4、6、8が入ります。C2からコピーされるので、C4はA4と同じ8です。",
      "tags": [
        "loop",
        "other"
      ]
    },
    {
      "id": 9,
      "title": "セルの値をIfで判定して別のセルへ書く",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q9()\nRange(\"A1\").Value = 5\nRange(\"A2\").Value = 7\nIf Range(\"A1\").Value + Range(\"A2\").Value >= 12 Then\n    Range(\"B1\").Value = \"達成\"\nElse\n    Range(\"B1\").Value = \"未達\"\nEnd If\nMsgBox Range(\"B1\").Value\nEnd Sub",
      "choices": [
        "達成",
        "未達",
        "12",
        "7"
      ],
      "answers": [
        0
      ],
      "explanation": "A1とA2の合計は12です。12以上という条件がTrueなので、B1に「達成」を入れます。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 10,
      "title": "シートを1枚追加したときの枚数",
      "prompt": "表示される結果はどれですか。",
      "code": "Sub Q10()\nDim beforeCount As Long\nbeforeCount = Worksheets.Count\nWorksheets.Add\nMsgBox Worksheets.Count - beforeCount\nEnd Sub",
      "choices": [
        "0",
        "2",
        "1",
        "シート数による"
      ],
      "answers": [
        2
      ],
      "explanation": "追加前の枚数を保存してから1枚追加します。追加後との差は、元の枚数に関係なく1です。",
      "tags": [
        "other"
      ]
    }
  ]
};

