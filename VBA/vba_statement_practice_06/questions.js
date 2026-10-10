window.PRACTICE_SET = {
  "number": 6,
  "title": "VBA エキスパート 練習問題⑥",
  "description": "マクロ記録、セル・ブック操作、変数、関数、条件分岐、ループを横断する30問です。",
  "pageUrl": "https://yumin-snoopy.github.io/materials/VBA/vba_statement_practice_06/",
  "questions": [
    {
      "id": 1,
      "title": "VBAの基本を確認する",
      "prompt": "マクロの記録に関する説明として、誤っているものを2つ選びなさい。",
      "code": "",
      "choices": [
        "マクロ記録で作成されたコードは編集できない",
        "マクロ記録は標準モジュールに保存される",
        "マクロ記録中に実行した操作はすべてVBAコードとして記録される",
        "マクロ記録中でも相対参照と絶対参照を切り替えることができる"
      ],
      "answers": [
        0,
        2
      ],
      "explanation": "記録したマクロのコードはVBEで編集できます。また、マクロ記録中に行ったすべての操作がコードになるわけではありません。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 2,
      "title": "VBAの基本を確認する",
      "prompt": "セルB2からD10までを選択するステートメントはどれか。正しいものを2つ選びなさい。",
      "code": "",
      "choices": [
        "Range(\"B2:D10\").Select",
        "Range(\"B2, D10\").Select",
        "Range(\"B2\").Range(\"D10\").Select",
        "Range(\"B2\", \"D10\").Select"
      ],
      "answers": [
        0,
        3
      ],
      "explanation": "1,4（Range(\"B2:D10\").Select / Range(\"B2\",\"D10\").Select） 範囲指定の代表2パターン。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 3,
      "title": "VBAの基本を確認する",
      "prompt": "セルC5が選択されているとき、セルC5:G8の範囲をクリアするステートメントはどれか。正しいものを1つ選びなさい。",
      "code": "",
      "choices": [
        "Selection.Resize(4, 5).ClearContents",
        "Selection.Offset(3, 4).ClearContents",
        "Selection.CurrentRegion.Clear",
        "Selection.Resize(3, 4).ClearContents"
      ],
      "answers": [
        0
      ],
      "explanation": "C5:G8 は4行×5列。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 4,
      "title": "VBAの基本を確認する",
      "prompt": "セルF3に、セルC3:E3の平均を求める数式を入力するステートメントはどれか。正しいものを1つ選びなさい。",
      "code": "",
      "choices": [
        "Range(\"F3\").Value = \"AVERAGE(C3:E3)\"",
        "Range(\"F3\").Formula = \"=AVERAGE(C3:E3)\"",
        "Range(\"F3\").Format = \"=AVERAGE(C3:E3)\"",
        "Range(\"F3\").Formula = AVERAGE(C3:E3)"
      ],
      "answers": [
        1
      ],
      "explanation": "Formulaプロパティには、=から始まる数式を文字列として指定します。Valueへ代入する選択肢は先頭に=がないため、数式ではなく文字列が入力されます。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 5,
      "title": "VBAの基本を確認する",
      "prompt": "2枚目のシートの右側に新規シートを挿入する場合、【１】に入る引数はどれか。正しいものを1つ選びなさい。",
      "code": "Worksheets.Add 【１】:=Sheets(2)",
      "choices": [
        "Right",
        "Before",
        "After",
        "Left"
      ],
      "answers": [
        2
      ],
      "explanation": "Sheets(2) の右側に追加。",
      "tags": [
        "cell"
      ]
    },
    {
      "id": 6,
      "title": "VBAの基本を確認する",
      "prompt": "「Test.xlsx」を保存せずに閉じるステートメントはどれか。正しいものを1つ選びなさい。",
      "code": "",
      "choices": [
        "Workbooks(\"Test.xlsx\").Close Save:=False",
        "Workbooks(\"Test.xlsx\").Save Changes:=False",
        "Workbooks(\"Test.xlsx\").Exit SaveChanges:=False",
        "Workbooks(\"Test.xlsx\").Close SaveChanges:=False"
      ],
      "answers": [
        3
      ],
      "explanation": "保存せず閉じる指定。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 7,
      "title": "変数の適用範囲を確認する",
      "prompt": "次のコードで、プロシージャレベルの変数はどれですか。正しいものを1つ選びなさい。",
      "code": "Dim x As Integer\nSub Sample()\n    Dim y As Integer\nEnd Sub",
      "choices": [
        "y",
        "x",
        "xとy",
        "どちらも該当しない"
      ],
      "answers": [
        0
      ],
      "explanation": "yはSampleプロシージャ内で宣言されているため、このプロシージャ内で使用する変数です。xはプロシージャの外で宣言され、同じモジュール内で使用できます。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 8,
      "title": "関数と文字列を確認する",
      "prompt": "次のステートメントを実行したとき、メッセージボックスに表示される文字列はどれか。正しいものを1つ選びなさい。 ただし、RTrim関数の引数「\" ABCDEFGH \"」には、「A」の前、「H」の後にそれぞれ半角スペースが2つずつ含まれているものとする。",
      "code": "MsgBox Mid(RTrim(\"  ABCDEFGH  \"), 3, 4)",
      "choices": [
        "DEFG",
        "ABCD",
        "BCDE",
        "CDEF"
      ],
      "answers": [
        1
      ],
      "explanation": "RTrimで右側の半角スペースだけが削除され、左側の2文字分のスペースは残ります。3文字目のAから4文字を取り出すため、ABCDです。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 9,
      "title": "For文を読み解く",
      "prompt": "次のマクロを実行したとき、メッセージボックスに表示される値はどれか。正しいものを1つ選びなさい。",
      "code": "Sub LoopTest()\nDim sum As Integer, i As Integer\nFor i = 2 To 10 Step 3\nsum = sum + i\nNext i\nMsgBox sum\nEnd Sub",
      "choices": [
        "20",
        "12",
        "15",
        "18"
      ],
      "answers": [
        2
      ],
      "explanation": "i=2,5,8 の合計＝15。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 10,
      "title": "変数と定数を確認する",
      "prompt": "変数と定数に関する説明として、正しいものを2つ選びなさい。",
      "code": "",
      "choices": [
        "Dimステートメントで変数を宣言できる",
        "Constステートメントで宣言した定数には、後から別の値を代入できる",
        "宣言した変数には、後から値を代入できる",
        "As Stringは整数型の変数を宣言するときに使う"
      ],
      "answers": [
        0,
        2
      ],
      "explanation": "Dimは変数の宣言に使い、変数には値を代入できます。Constで宣言した定数の値は変更できず、As Stringは文字列型です。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 11,
      "title": "VBAの基本を確認する",
      "prompt": "セルA1の値のみをセルB1にコピーするステートメントはどれか。正しいものを2つ選びなさい。",
      "code": "",
      "choices": [
        "Range(\"B1\").Copy Range(\"A1\")",
        "Range(\"A1\").Copy Destination:=Range(\"B1\")",
        "Range(\"B1\") = Range(\"A1\")",
        "Range(\"B1\").Value = Range(\"A1\").Value"
      ],
      "answers": [
        2,
        3
      ],
      "explanation": "Rangeの既定プロパティを使う代入と、Valueを明記する代入は、どちらも値だけをコピーします。Copyメソッドは書式などもコピーします。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 12,
      "title": "VBAの基本を確認する",
      "prompt": "ワークシート「Sheet1」の名前を「データ」に変更するステートメントはどれか。正しいものを1つ選びなさい。",
      "code": "",
      "choices": [
        "Worksheets(\"Sheet1\").Rename \"データ\"",
        "Sheets(\"Sheet1\").Title = \"データ\"",
        "Sheets(\"Sheet1\").ChangeName \"データ\"",
        "Worksheets(\"Sheet1\").Name = \"データ\""
      ],
      "answers": [
        3
      ],
      "explanation": "名前変更は Name プロパティ。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 13,
      "title": "関数と文字列を確認する",
      "prompt": "次のステートメントを実行したとき、変数strに格納される文字列はどれか。正しいものを1つ選びなさい。",
      "code": "Dim str As String\nstr = Left(\"VBA Programming\", 3)",
      "choices": [
        "VBA",
        "VB",
        "Pro",
        "Programming"
      ],
      "answers": [
        0
      ],
      "explanation": "Leftで左3文字。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 14,
      "title": "VBAの基本を確認する",
      "prompt": "A列のデータが入っている最終行の行番号を、下端から上方向に検索して取得するステートメントはどれですか。",
      "code": "",
      "choices": [
        "Range(\"A1\").Row",
        "Cells(Rows.Count, 1).End(xlUp).Row",
        "Range(\"A1:A1\").End(xlDown).Row",
        "Range(\"A1\").End(xlUp).Row"
      ],
      "answers": [
        1
      ],
      "explanation": "Cells(Rows.Count, 1) でA列の最下行を基点にし、End(xlUp) でデータのある最終行まで上がります。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 15,
      "title": "For...Nextの繰り返しを確認する",
      "prompt": "For...Nextステートメントに関する説明として、誤っているものを2つ選びなさい。",
      "code": "",
      "choices": [
        "Stepに負の値を指定することはできない",
        "For i = 1 To 3 の繰り返しでは、iは1、2、3の順に変化する",
        "Nextの後にカウンタ変数名を記述することは必須である",
        "Stepを省略すると、増分値は1となる"
      ],
      "answers": [
        0,
        2
      ],
      "explanation": "Stepには負の値も指定でき、Nextの後のカウンタ変数名は省略できます。Step省略時の増分値は1です。",
      "tags": [
        "loop"
      ]
    },
    {
      "id": 16,
      "title": "VBAの基本を確認する",
      "prompt": "次のステートメントを実行したとき、メッセージボックスに表示される値はどれか。正しいものを1つ選びなさい。",
      "code": "MsgBox Len(\"Excel VBA\")",
      "choices": [
        "11",
        "8",
        "9",
        "10"
      ],
      "answers": [
        2
      ],
      "explanation": "スペースも1文字。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 17,
      "title": "VBAの基本を確認する",
      "prompt": "Cドライブのデータフォルダにある「Book1.xlsx」を開くステートメントはどれか。正しいものを2つ選びなさい。",
      "code": "",
      "choices": [
        "Workbooks.Add \"C:\\Data\\Book1.xlsx\"",
        "Workbooks.Open \"C:\\Data\\Book1.xlsx\"",
        "Workbooks.Open Filename:=\"C:\\Data\\Book1.xlsx\"",
        "Workbooks(\"C:\\Data\\Book1.xlsx\").Open"
      ],
      "answers": [
        1,
        2
      ],
      "explanation": "引数名あり/なしの違い。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 18,
      "title": "VBAの基本を確認する",
      "prompt": "複数行形式のIf...Then...Elseステートメントに関する説明として、正しいものを2つ選びなさい。",
      "code": "",
      "choices": [
        "Else節は省略できる",
        "ElseIf節を使用すると、複数の条件分岐が可能になる",
        "Then節は省略できる",
        "End Ifは省略できる"
      ],
      "answers": [
        0,
        1
      ],
      "explanation": "Else は省略でき、ElseIf を使えば複数条件に分岐できます。複数行形式では Then と End If が必要です。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 19,
      "title": "セルの値とIfを読み解く",
      "prompt": "次のマクロを実行したとき、メッセージボックスに表示される文字列はどれですか。正しいものを1つ選びなさい。",
      "code": "Sub CheckCell()\n    Range(\"A1\").Value = 8\n    If Range(\"A1\").Value >= 5 Then\n        MsgBox \"合格\"\n    Else\n        MsgBox \"再確認\"\n    End If\nEnd Sub",
      "choices": [
        "合格",
        "再確認",
        "8",
        "何も表示されない"
      ],
      "answers": [
        0
      ],
      "explanation": "A1には8が入ります。8は5以上なのでIfの条件がTrueとなり、「合格」が表示されます。",
      "tags": [
        "if"
      ]
    },
    {
      "id": 20,
      "title": "VBAの基本を確認する",
      "prompt": "次のマクロを実行したとき、メッセージボックスに表示される値はどれか。正しいものを1つ選びなさい。",
      "code": "Sub CalcTest()\nDim x As Integer\nx = 10 Mod 3\nMsgBox x\nEnd Sub",
      "choices": [
        "3",
        "10",
        "0",
        "1"
      ],
      "answers": [
        3
      ],
      "explanation": "10 Mod 3 の余り。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 21,
      "title": "VBAの基本を確認する",
      "prompt": "セル範囲A1:C5を削除して、下のセルを上にシフトするステートメントはどれか。正しいものを1つ選びなさい。",
      "code": "",
      "choices": [
        "Range(\"A1:C5\").Delete Shift:=xlShiftUp",
        "Range(\"A1:C5\").ClearContents",
        "Range(\"A1:C5\").Delete Shift:=xlShiftDown",
        "Range(\"A1:C5\").Clear Shift:=xlShiftUp"
      ],
      "answers": [
        0
      ],
      "explanation": "Delete メソッドに Shift:=xlShiftUp を指定すると、範囲を削除して下のセルを上へ移動します。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 22,
      "title": "VBAの基本を確認する",
      "prompt": "アクティブセルだけが選択されているとき、その1つ下のセルを選択するステートメントはどれか。正しいものを2つ選びなさい。",
      "code": "",
      "choices": [
        "ActiveCell.Offset(1, 0).Select",
        "ActiveCell.Offset(0, 1).Select",
        "ActiveCell.Next.Select",
        "Selection.Offset(1).Select"
      ],
      "answers": [
        0,
        3
      ],
      "explanation": "どちらも「1行下」。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 23,
      "title": "VBAの基本を確認する",
      "prompt": "ワークシート「Sheet1」を削除するステートメントはどれか。正しいものを1つ選びなさい。",
      "code": "",
      "choices": [
        "Sheets(\"Sheet1\").Erase",
        "Worksheets(\"Sheet1\").Delete",
        "Worksheets(\"Sheet1\").Remove",
        "Sheets(\"Sheet1\").Clear"
      ],
      "answers": [
        1
      ],
      "explanation": "シート削除は Delete。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 24,
      "title": "関数と文字列を確認する",
      "prompt": "次のステートメントを実行したとき、メッセージボックスに表示される文字列はどれか。正しいものを1つ選びなさい。",
      "code": "MsgBox Right(\"20241206\", 4)",
      "choices": [
        "0612",
        "2024",
        "1206",
        "4120"
      ],
      "answers": [
        2
      ],
      "explanation": "Rightで右4文字。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 25,
      "title": "WithとOffsetでセルを指定する",
      "prompt": "次のコードの実行結果として正しいものを2つ選びなさい。",
      "code": "With Range(\"B2\")\n    .Value = 5\n    .Offset(1, 0).Value = 8\nEnd With",
      "choices": [
        "セルB2の値は5になる",
        "セルB3の値は8になる",
        "セルC2の値は8になる",
        "セルB2の値は8になる"
      ],
      "answers": [
        0,
        1
      ],
      "explanation": "Withの基準はB2です。.ValueでB2に5を入れ、.Offset(1, 0)で1行下のB3に8を入れます。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 26,
      "title": "VBAの基本を確認する",
      "prompt": "セルA1に入力されている数式を取得するプロパティはどれか。正しいものを1つ選びなさい。",
      "code": "",
      "choices": [
        "Range(\"A1\").Value",
        "Range(\"A1\").Text",
        "Range(\"A1\").Expression",
        "Range(\"A1\").Formula"
      ],
      "answers": [
        3
      ],
      "explanation": "数式そのものを取得。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 27,
      "title": "VBAの基本を確認する",
      "prompt": "次のマクロを実行したとき、メッセージボックスに表示される値はどれか。正しいものを1つ選びなさい。",
      "code": "Sub StringTest()\nDim txt As String\ntxt = \"Hello\"\nMsgBox txt & \" \" & \"World\"\nEnd Sub",
      "choices": [
        "Hello World",
        "HelloWorld",
        "World",
        "Hello"
      ],
      "answers": [
        0
      ],
      "explanation": "\" \" を挟んで連結。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 28,
      "title": "変数を確認する",
      "prompt": "変数の宣言に関する説明として、誤っているものはどれか。次の中から1つ選びなさい。",
      "code": "",
      "choices": [
        "As Stringで文字列型の変数を宣言する",
        "Dimステートメントで宣言した変数は、すべてのプロシージャから参照できる",
        "Option Explicitを指定すると、変数の宣言が必須になる",
        "As Integerで整数型の変数を宣言する"
      ],
      "answers": [
        1
      ],
      "explanation": "プロシージャ内Dimはその中だけ。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 29,
      "title": "VBAの基本を確認する",
      "prompt": "このマクロが保存されているマクロ有効ブックを、別名のマクロ有効ブックとして保存するステートメントはどれか。正しいものを1つ選びなさい。",
      "code": "",
      "choices": [
        "ActiveWorkbook.SaveAs Path:=\"C:\\Data\\NewBook.xlsm\"",
        "ThisWorkbook.Close Filename:=\"C:\\Data\\NewBook.xlsm\"",
        "ThisWorkbook.SaveAs Filename:=\"C:\\Data\\NewBook.xlsm\"",
        "ThisWorkbook.Save Filename:=\"C:\\Data\\NewBook.xlsm\""
      ],
      "answers": [
        2
      ],
      "explanation": "ThisWorkbookは、このマクロが保存されているブックを指します。別名保存はSaveAsメソッドのFilenameに、保存先とマクロ有効ブックのファイル名を指定します。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 30,
      "title": "セル操作を確認する",
      "prompt": "次のコードを実行したとき、セルA1に表示される値はどれか。正しいものを1つ選びなさい。",
      "code": "Sub DateTest()\nDim d As Date\nd = #12/6/2024#\nRange(\"A1\").Value = Month(d)\nEnd Sub",
      "choices": [
        "2024",
        "12/6/2024",
        "6",
        "12"
      ],
      "answers": [
        3
      ],
      "explanation": "Month(#12/6/2024#)=12",
      "tags": [
        "cell"
      ]
    }
  ]
};
