window.PRACTICE_SET = {
  "number": 10,
  "title": "⑩ VBAエキスパート BASIC 練習問題",
  "description": "演算、イベント、エラー処理、関数、オブジェクト、表集計を確認する20問です。",
  "pageUrl": "https://yumin-snoopy.github.io/materials/vba_statement_practice_10/",
  "questions": [
    {
      "id": 1,
      "title": "変数を確認する",
      "prompt": "次のマクロを実行したとき、変数resultの値はいくつになるか。",
      "code": "Sub Sample()\nDim x As Integer, y As Integer, result As Integer\nx = 10\ny = 3\nresult = x / y + x Mod y\nEnd Sub",
      "choices": [
        "4",
        "6",
        "7",
        "3"
      ],
      "answers": [
        0
      ],
      "explanation": "/ は実数除算。10/3=3.33…＋(10 Mod 3)=1 → 4.33… を Integer に代入で4。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 2,
      "title": "VBAの基本を確認する",
      "prompt": "ワークシートのイベントプロシージャについて、正しい記述を2つ選択しなさい。",
      "code": "",
      "choices": [
        "Worksheet_Changeイベントは、セルの値が変更されたときに発生する。",
        "Worksheet_SelectionChangeイベントは、セルが選択されるたびに発生する。",
        "ワークシートのイベントプロシージャは、標準モジュールに記述する。",
        "Worksheet_Activateイベントは、ワークブックを開いたときに必ず発生する。"
      ],
      "answers": [
        0,
        1
      ],
      "explanation": "1,2（Worksheet_Change / Worksheet_SelectionChange） どちらもワークシートイベント。③は標準モジュールではない。",
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
      "title": "VBAの基本を確認する",
      "prompt": "次のコードのエラー処理について、正しい記述を選択しなさい。",
      "code": "Sub Sample()\nOn Error GoTo ErrorHandler\nDim x As Integer\nx = 100 / 0\nExit Sub\nErrorHandler:\nMsgBox \"エラーが発生しました\"\nEnd Sub",
      "choices": [
        "エラーが発生し、プログラムが強制終了する。",
        "Exit Subが実行され、ErrorHandlerには到達しない。",
        "エラーが発生せず、xには0が代入される。",
        "エラーが発生し、メッセージボックスが表示される。"
      ],
      "answers": [
        3
      ],
      "explanation": "0除算で ErrorHandler に飛ぶ。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 6,
      "title": "Select Caseを読み解く",
      "prompt": "Select Case文について、次のコードと同じ結果になるものを選択しなさい。",
      "code": "Sub Sample()\nDim score As Integer\nscore = 75\nSelect Case score\nCase Is >= 80\nMsgBox \"優\"\nCase Is >= 60\nMsgBox \"良\"\nCase Else\nMsgBox \"可\"\nEnd Select\nEnd Sub",
      "choices": [
        "メッセージボックスに「良」と表示される",
        "メッセージボックスに「可」と表示される",
        "エラーが発生する",
        "メッセージボックスに「優」と表示される"
      ],
      "answers": [
        0
      ],
      "explanation": "75は80以上ではないが60以上。",
      "tags": [
        "other"
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
      "title": "関数と文字列を確認する",
      "prompt": "ユーザー定義関数について、正しい記述をすべて選択しなさい。",
      "code": "",
      "choices": [
        "Functionプロシージャの名前に計算結果を代入することで、値を返すことができる。",
        "Functionプロシージャは引数を持つことができない。",
        "Functionプロシージャで作成した関数は、ワークシート上でも使用できる。",
        "Functionプロシージャは必ず戻り値を返す必要がある。"
      ],
      "answers": [
        0,
        2
      ],
      "explanation": "1,3（正しいものすべて） シートで使える／関数名に代入で返せる。④は誤り（引数は持てる）。",
      "tags": [
        "other"
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
      "title": "Do...Loopを読み解く",
      "prompt": "Do...Loop文について、無限ループにならないものはどれですか。",
      "code": "1\nSub Sample()\nDim i As Integer\ni = 1\nDo While i < 10\nMsgBox i\nLoop\nEnd Sub\n2\nSub Sample()\nDim i As Integer\ni = 1\nDo While i < 10\nMsgBox i\ni = i + 1\nLoop\nEnd Sub\n3\nSub Sample()\nDim i As Integer\ni = 1\nDo\nMsgBox i\nLoop While i < 10\nEnd Sub\n4\nSub Sample()\nDim i As Integer\ni = 1\nDo Until i = 10\nMsgBox i\nLoop\nEnd Sub",
      "choices": [
        "Do\n    MsgBox i\nLoop While i < 10",
        "Do Until i = 10\n    MsgBox i\nLoop",
        "Do While i < 10\n    MsgBox i\nLoop",
        "Do While i < 10\n    MsgBox i\n    i = i + 1\nLoop"
      ],
      "answers": [
        3
      ],
      "explanation": "2番だけがループ内で i を増やすため、i が 10 になると条件が False になって終了します。",
      "tags": [
        "loop"
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
        "Workbooks(1)は、現在開いているなかで、最初に開いたワークブックを指す。"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "Workbooks(1) はコレクション先頭のブック、Worksheets.Count はシート数、ThisWorkbook はコードを含むブックを参照します。",
      "tags": [
        "cell"
      ]
    },
    {
      "id": 12,
      "title": "For文を読み解く",
      "prompt": "次のコードで、セルA1からA10までの空白セルの個数をカウントするために【 】に入るコードとして正しいものを選択しなさい。",
      "code": "Sub Sample()\nDim i As Integer, count As Integer\ncount = 0\nFor i = 1 To 10\nIf 【 】 Then\ncount = count + 1\nEnd If\nNext i\nMsgBox count\nEnd Sub",
      "choices": [
        "すべて正しい",
        "IsEmpty(Cells(i, 1))",
        "Cells(i, 1).Value = \"\"",
        "Len(Cells(i, 1).Value) = 0"
      ],
      "answers": [
        0
      ],
      "explanation": "空白判定は目的次第で3つとも使える（未入力・空文字・長さ0）。",
      "tags": [
        "if",
        "loop"
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
      "title": "If文を読み解く",
      "prompt": "以下のマクロを実行したとき、メッセージボックスに表示される値として正しいものを選択しなさい。",
      "code": "Sub Sample()\nDim result As String\nresult = Test(10, 5)\nMsgBox result\nEnd Sub\nFunction Test(a As Integer, b As Integer) As String\nIf a > b Then\nTest = \"大きい\"\nElse\nTest = \"小さい\"\nEnd If\nEnd Function",
      "choices": [
        "小さい",
        "True",
        "エラーが発生する",
        "大きい"
      ],
      "answers": [
        3
      ],
      "explanation": "Test(10,5) は a>b が真なので「大きい」。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 16,
      "title": "For文を読み解く",
      "prompt": "次のマクロを実行したとき、表示される値として正しいものを1つ選びなさい。",
      "code": "Sub Sample()\nDim total As Long\nDim i As Long\nFor i = 2 To 7\nIf Cells(i, 2).Value >= 70 And Cells(i, 3).Value = \"A\" Then\ntotal = total + Cells(i, 4).Value\nEnd If\nNext i\nMsgBox total\nEnd Sub",
      "tableImage": "assets/q16-table.png",
      "tableAlt": "氏名、点数、評価、金額の表",
      "tableWidth": 390,
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
      "prompt": "文字列「ABC-DEF-GHI」から「DEF」を取り出すコードとして正しいものはどれか。",
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
      "title": "VBAの基本を確認する",
      "prompt": "Do While ループが1回も実行されない条件はどれか。",
      "code": "",
      "choices": [
        "Exit Do がある",
        "条件がTrue",
        "条件がFalse",
        "カウンタが0"
      ],
      "answers": [
        2
      ],
      "explanation": "Whileは最初に判断する条件がFalseの場合は処理を行わない。",
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
      "tableWidth": 330,
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
      "tableWidth": 390,
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
