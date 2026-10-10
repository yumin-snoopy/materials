window.PRACTICE_SET = {
  "number": 10,
  "title": "VBA エキスパート 練習問題⑩",
  "description": "演算、イベント、エラー処理、関数、オブジェクト、表集計を確認する20問です。",
  "pageUrl": "https://yumin-snoopy.github.io/materials/VBA/vba_statement_practice_10/",
  "questions": [
    {
      "id": 1,
      "title": "変数と演算子を確認する",
      "prompt": "次のマクロを実行したとき、変数resultの値はいくつになりますか。",
      "code": "Sub Sample()\nDim x As Integer, y As Integer, result As Integer\nx = 10\ny = 3\nresult = x + y * 2\nEnd Sub",
      "choices": [
        "16",
        "26",
        "13",
        "7"
      ],
      "answers": [
        0
      ],
      "explanation": "乗算を先に計算するので、10 + (3 × 2) = 16です。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 2,
      "title": "マクロ記録を確認する",
      "prompt": "マクロ記録に関する説明として、正しいものを2つ選びなさい。",
      "code": "",
      "choices": [
        "記録したマクロのコードはVBEで編集できる",
        "記録先に個人用マクロブックを選べる",
        "マクロ記録はすべての操作を必ず記録する",
        "相対参照の設定は記録中に変更できない"
      ],
      "answers": [
        0,
        1
      ],
      "explanation": "記録したコードはVBEで編集でき、記録先に個人用マクロブックを選べます。記録されない操作もあり、相対参照の設定は記録中にも切り替えられます。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 3,
      "title": "セル操作を確認する",
      "prompt": "以下のマクロを実行したとき、最後にアクティブになるセルとして正しいものを選択しなさい。",
      "code": "Sub Sample()\nRange(\"B5\").Select\nActiveCell.Offset(2, -1).Select\nActiveCell.Offset(-3, 1).Activate\nEnd Sub",
      "choices": [
        "A7",
        "B4",
        "B7",
        "C4"
      ],
      "answers": [
        1
      ],
      "explanation": "B5 → Offset(2,-1)=A7 → Offset(-3,1)=B4。",
      "tags": [
        "cell"
      ]
    },
    {
      "id": 4,
      "title": "VBAの基本を確認する",
      "prompt": "次のコードを実行したとき、メッセージボックスに表示される値として正しいものを選択しなさい。",
      "code": "Sub Sample()\nDim str As String\nstr = \"VBA Programming\"\nMsgBox Mid(str, 5, 7)\nEnd Sub",
      "choices": [
        "rogramm",
        "Programming",
        "Program",
        "Programm"
      ],
      "answers": [
        2
      ],
      "explanation": "\"VBA␠Programming\" の5文字目から7文字＝Program。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 5,
      "title": "シート名を変更する",
      "prompt": "ワークシート「Sheet1」の名前を「集計」に変更するステートメントはどれですか。正しいものを1つ選びなさい。",
      "code": "",
      "choices": [
        "Worksheets(\"Sheet1\").Name = \"集計\"",
        "Worksheets(\"Sheet1\").Title = \"集計\"",
        "Worksheets(\"Sheet1\").Rename \"集計\"",
        "Worksheets(\"Sheet1\").Name(\"集計\")"
      ],
      "answers": [
        0
      ],
      "explanation": "ワークシート名はNameプロパティに文字列を代入して変更します。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 6,
      "title": "If...Then...Elseを読み解く",
      "prompt": "次のマクロを実行したとき、表示される文字列はどれですか。正しいものを1つ選びなさい。",
      "code": "Sub Sample()\nDim score As Integer\nscore = 75\nIf score >= 80 Then\n    MsgBox \"優\"\nElseIf score >= 60 Then\n    MsgBox \"良\"\nElse\n    MsgBox \"可\"\nEnd If\nEnd Sub",
      "choices": [
        "良",
        "可",
        "エラーが発生する",
        "優"
      ],
      "answers": [
        0
      ],
      "explanation": "75は80以上ではありませんが60以上なので、ElseIfの処理で「良」が表示されます。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 7,
      "title": "For文を読み解く",
      "prompt": "次のループ処理を実行したとき、変数sumの最終的な値として正しいものを選択しなさい。",
      "code": "Sub Sample()\nDim i As Integer, sum As Integer\nsum = 0\nFor i = 1 To 10 Step 2\nsum = sum + i\nNext i\nEnd Sub",
      "choices": [
        "55",
        "25",
        "30",
        "50"
      ],
      "answers": [
        1
      ],
      "explanation": "1+3+5+7+9 = 25。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 8,
      "title": "Offsetでセルに値を入れる",
      "prompt": "次のマクロを実行したとき、セルA2の値はどれですか。正しいものを1つ選びなさい。",
      "code": "Sub Sample()\nRange(\"A1\").Value = 5\nRange(\"A1\").Offset(1, 0).Value = Range(\"A1\").Value * 2\nEnd Sub",
      "choices": [
        "5",
        "8",
        "10",
        "15"
      ],
      "answers": [
        2
      ],
      "explanation": "A1の値5を2倍し、Offset(1, 0)で1行下のA2に10を入れます。",
      "tags": [
        "cell"
      ]
    },
    {
      "id": 9,
      "title": "セル操作を確認する",
      "prompt": "次のコードを実行したとき、セルB2に表示される値として正しいものを選択しなさい。",
      "code": "Sub Sample()\nRange(\"A1\").Value = 100\nRange(\"A2\").Value = 200\nRange(\"B1\").Formula = \"=A1*2\"\nRange(\"B2\").Formula = \"=SUM(A1:A2)\"\nEnd Sub",
      "choices": [
        "エラー値",
        "200",
        "300",
        "400"
      ],
      "answers": [
        2
      ],
      "explanation": "B2は =SUM(A1:A2) なので300。",
      "tags": [
        "cell"
      ]
    },
    {
      "id": 10,
      "title": "WithとOffsetでセルを指定する",
      "prompt": "次のマクロを実行したとき、「済」が入力されるセルはどれですか。正しいものを1つ選びなさい。",
      "code": "Sub Sample()\nWith Range(\"C3\")\n    .Offset(0, 1).Value = \"済\"\nEnd With\nEnd Sub",
      "choices": [
        "B2",
        "C2",
        "C3",
        "D3"
      ],
      "answers": [
        3
      ],
      "explanation": "C3から列方向へ1つ右にずらすので、D3に「済」が入ります。",
      "tags": [
        "cell"
      ]
    },
    {
      "id": 11,
      "title": "VBAの基本を確認する",
      "prompt": "WorkbookオブジェクトとWorksheetオブジェクトについて、正しい記述をすべて選択しなさい。",
      "code": "",
      "choices": [
        "ActiveWorkbook.Worksheets.Countで、アクティブブックのシート数を取得できる。",
        "Worksheets(\"Sheet1\").Nameで、シート名を変更することはできない。",
        "ThisWorkbookは、コードが記述されているワークブックを参照する。",
        "Workbooks(1)は、Workbooksコレクションの1番目のブックを指す。"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "ActiveWorkbook.Worksheets.Countでアクティブブックのワークシート数が分かり、ThisWorkbookはコードを含むブックを参照します。Workbooks(1)はコレクションの1番目のブックです。",
      "tags": [
        "cell"
      ]
    },
    {
      "id": 12,
      "title": "セルの値で空欄を数える",
      "prompt": "次のマクロを実行したとき、表示される値はどれですか。正しいものを1つ選びなさい。",
      "code": "Sub Sample()\nDim i As Long, count As Long\nRange(\"A1\").Value = \"\"\nRange(\"A2\").Value = \"VBA\"\nRange(\"A3\").Value = \"\"\nFor i = 1 To 3\n    If Cells(i, 1).Value = \"\" Then\n        count = count + 1\n    End If\nNext i\nMsgBox count\nEnd Sub",
      "choices": [
        "1",
        "2",
        "3",
        "0"
      ],
      "answers": [
        1
      ],
      "explanation": "A1とA3の値が空文字列なので、countは2になります。",
      "tags": [
        "if",
        "loop",
        "cell"
      ]
    },
    {
      "id": 13,
      "title": "VBAの基本を確認する",
      "prompt": "次のコードを実行したとき、最終的にアクティブになるワークシートとして正しいものを選択しなさい。",
      "code": "Sub Sample()\nWorksheets(\"Sheet2\").Activate\nWorksheets.Add After:=Worksheets(Worksheets.Count)\nActiveSheet.Name = \"NewSheet\"\nEnd Sub",
      "choices": [
        "Sheet2",
        "NewSheet",
        "エラーが発生する",
        "Sheet1"
      ],
      "answers": [
        1
      ],
      "explanation": "Add直後のActiveSheetをNewSheetに改名。",
      "tags": [
        "cell"
      ]
    },
    {
      "id": 14,
      "title": "セル操作を確認する",
      "prompt": "次のコードを実行したとき、セルA1に表示される値として正しいものを選択しなさい。",
      "code": "Sub Sample()\nDim x As Double\nx = 12.567\nRange(\"A1\").Value = Round(x, 1)\nEnd Sub",
      "choices": [
        "12",
        "12.5",
        "12.6",
        "13"
      ],
      "answers": [
        2
      ],
      "explanation": "Round(12.567,1)=12.6。",
      "tags": [
        "cell"
      ]
    },
    {
      "id": 15,
      "title": "WithとResizeで範囲に入力する",
      "prompt": "次のマクロを実行したとき、セルC3の値はどれですか。正しいものを1つ選びなさい。",
      "code": "Sub Sample()\nWith Range(\"B2\").Resize(2, 2)\n    .Value = \"済\"\nEnd With\nMsgBox Range(\"C3\").Value\nEnd Sub",
      "choices": [
        "空白",
        "済",
        "B2",
        "エラー"
      ],
      "answers": [
        1
      ],
      "explanation": "B2から2行2列の範囲はB2:C3です。その全セルに「済」を入れるため、C3も「済」です。",
      "tags": [
        "cell"
      ]
    },
    {
      "id": 16,
      "title": "For文を読み解く",
      "prompt": "次のマクロを実行したとき、表示される値として正しいものを1つ選びなさい。",
      "code": "Sub Sample()\nDim total As Long\nDim i As Long\nFor i = 2 To 7\nIf Cells(i, 2).Value >= 70 And Cells(i, 3).Value = \"A\" Then\ntotal = total + Cells(i, 4).Value\nEnd If\nNext i\nMsgBox total\nEnd Sub",
      "tableImage": "assets/q16-table.png",
      "tableAlt": "氏名、点数、評価、金額の表",
      "tableWidth": 310,
      "choices": [
        "5200",
        "3000",
        "3200",
        "4200"
      ],
      "answers": [
        0
      ],
      "explanation": "1000 + 2000 + 2200 = 5200。",
      "tags": [
        "if",
        "loop",
        "cell"
      ]
    },
    {
      "id": 17,
      "title": "関数と文字列を確認する",
      "prompt": "変数strに文字列「ABC-DEF-GHI」が格納されているとき、「DEF」を取り出すコードとして正しいものはどれか。",
      "code": "",
      "choices": [
        "Mid(str, InStr(str,\"-\"), 3)",
        "Mid(str,5,3)",
        "Right(str,3)",
        "Left(str,3)"
      ],
      "answers": [
        1
      ],
      "explanation": "strの左から数えて5文字目から3文字分抜き出す。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 18,
      "title": "負のStepで数を合計する",
      "prompt": "次のマクロを実行したとき、表示される値はどれですか。正しいものを1つ選びなさい。",
      "code": "Sub Sample()\nDim i As Long, total As Long\nFor i = 5 To 1 Step -2\n    total = total + i\nNext i\nMsgBox total\nEnd Sub",
      "choices": [
        "6",
        "8",
        "9",
        "15"
      ],
      "answers": [
        2
      ],
      "explanation": "iは5、3、1の順に変化するので、合計は9です。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 19,
      "title": "For文を読み解く",
      "prompt": "次のマクロを実行したとき、メッセージボックスに表示される値として正しいものを1つ選びなさい。",
      "code": "Sub Sample()\nDim total As Long\nDim i As Long\nFor i = 2 To 7\nIf Cells(i, 2).Value = \"大阪\" Or Cells(i, 2).Value = \"福岡\" Then\ntotal = total + Cells(i, 3).Value\nEnd If\nNext i\nMsgBox total\nEnd Sub",
      "tableImage": "assets/q19-table.png",
      "tableAlt": "配送先、地域、送料の表",
      "tableWidth": 265,
      "choices": [
        "150",
        "170",
        "200",
        "240"
      ],
      "answers": [
        3
      ],
      "explanation": "80+70+90=240。",
      "tags": [
        "if",
        "loop",
        "cell"
      ]
    },
    {
      "id": 20,
      "title": "For文を読み解く",
      "prompt": "次のマクロを実行したとき、メッセージボックスに表示される値として正しいものを1つ選びなさい。",
      "code": "Sub Sample()\nDim total As Long\nDim i As Long\nFor i = 2 To 7\nIf Cells(i, 2).Value = \"A\" And Cells(i, 4).Value >= 1000 Then\ntotal = total + Cells(i, 4).Value\nEnd If\nNext i\nMsgBox total\nEnd Sub",
      "tableImage": "assets/q20-table.png",
      "tableAlt": "商品、ランク、在庫、金額の表",
      "tableWidth": 310,
      "choices": [
        "4300",
        "5200",
        "2300",
        "3200"
      ],
      "answers": [
        0
      ],
      "explanation": "1200+2000+1100=4300。",
      "tags": [
        "if",
        "loop",
        "cell"
      ]
    }
  ]
};
