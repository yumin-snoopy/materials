window.PRACTICE_SET = {
  "number": 6,
  "title": "⑥ VBAエキスパート BASIC 総合問題30問",
  "description": "マクロ記録、セル・ブック操作、変数、関数、条件分岐、ループを横断する30問です。",
  "pageUrl": "https://yumin-snoopy.github.io/materials/vba_statement_practice_06/",
  "questions": [
    {
      "id": 1,
      "title": "VBAの基本を確認する",
      "prompt": "マクロの記録に関する説明として、誤っているものはどれか。次の中から誤っているものを選びなさい。",
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
      "explanation": "記録マクロはVBEで編集できる。 また取り消した内容などは記録されない",
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
        "Range(\"F3\").Value = \"=AVERAGE(C3:E3)\"",
        "Range(\"F3\").Formula = \"=AVERAGE(C3:E3)\"",
        "Range(\"F3\").Format = \"=AVERAGE(C3:E3)\"",
        "Range(\"F3\").Formula = AVERAGE(C3:E3)"
      ],
      "answers": [
        1
      ],
      "explanation": "3（Range(\"F3\").Formula = \"=AVERAGE(C3:E3)\"） Formula は「=から始まる文字列」。",
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
      "title": "変数を確認する",
      "prompt": "次のコードのうち、プロシージャレベル変数はどれか。正しいものを1つ選びなさい。",
      "code": "Dim X As Integer\nSub Sample()\nDim Y As Integer\nStatic Z As Integer\nEnd Sub",
      "choices": [
        "YとZ",
        "X",
        "Y",
        "Z"
      ],
      "answers": [
        0
      ],
      "explanation": "どちらもプロシージャ内宣言。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 8,
      "title": "関数と文字列を確認する",
      "prompt": "次のステートメントを実行したとき、メッセージボックスに表示される文字列はどれか。正しいものを1つ選びなさい。 ただし、RTrim関数の引数「\" ABCDEFGH \"」には、「A」の前、「H」の後にそれぞれ半角スペースが2つずつ含まれているものとする。",
      "code": "MsgBox Mid(RTrim(\"  ABCDEFGH 　\"), 3, 4)",
      "choices": [
        "DEFG",
        "ABCD",
        "BCDE",
        "CDEF"
      ],
      "answers": [
        1
      ],
      "explanation": "RTrimで右の空白削除→Midで抽出。→左の空白は2つ残っている！",
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
      "title": "変数を確認する",
      "prompt": "VBAの変数に関する説明として、正しいものはどれか。次の中から2つ選びなさい。",
      "code": "",
      "choices": [
        "Dimステートメントで宣言した変数は、プロシージャが終了すると値が保持されない",
        "Staticステートメントで宣言した変数は、プロシージャが終了しても値が保持される",
        "Publicステートメントで宣言した変数は、同じモジュール内でのみ使用できる",
        "変数を宣言せずに使用することはできない"
      ],
      "answers": [
        0,
        1
      ],
      "explanation": "スコープと寿命の基本。",
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
      "explanation": "1,4 値のみのコピーはvalueで。Copyメソッドは書式等もコピーされてしまう。",
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
      "title": "VBAの基本を確認する",
      "prompt": "For...Nextステートメントに関する説明として、誤っているものはどれか。次の中から２つ選びなさい。",
      "code": "",
      "choices": [
        "Stepに負の値を指定することはできない",
        "Exit Forステートメントでループを途中で抜けることができる",
        "Nextの後にカウンタ変数名を記述することは必須である",
        "Stepを省略すると、増分値は1となる"
      ],
      "answers": [
        0,
        2
      ],
      "explanation": "2,4（負のStepは不可／Next後の変数名は必須） どちらも誤り（負のStepは可能・変数名は任意）。",
      "tags": [
        "other"
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
      "prompt": "If...Then...Elseステートメントに関する説明として、正しいものはどれか。次の中から選びなさい。",
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
      "title": "VBAの基本を確認する",
      "prompt": "セルA1が空白かどうかを判定する条件式はどれか。正しいものを2つ選びなさい。",
      "code": "",
      "choices": [
        "IsEmpty(Range(\"A1\"))",
        "Range(\"A1\") = Null",
        "Range(\"A1\").IsEmpty = True",
        "Range(\"A1\").Value = \"\""
      ],
      "answers": [
        0,
        3
      ],
      "explanation": "空文字・未入力セルの判定。",
      "tags": [
        "other"
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
      "prompt": "アクティブセルの1つ下のセルを選択するステートメントはどれか。正しいものを2つ選びなさい。",
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
      "title": "VBAの基本を確認する",
      "prompt": "Do...Loopステートメントに関する説明として、正しいものはどれか。次の中から2つ選びなさい。",
      "code": "",
      "choices": [
        "Stepキーワードで増分値を指定できる",
        "While条件を使用すると、条件がTrueの間ループを繰り返す",
        "Until条件を使用すると、条件がTrueの間ループを繰り返す",
        "Exit Doステートメントでループを途中で抜けることができる"
      ],
      "answers": [
        1,
        3
      ],
      "explanation": "Untilは「Trueになるまで」。",
      "tags": [
        "loop"
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
      "prompt": "現在のブックを名前を付けて保存するステートメントはどれか。正しいものを1つ選びなさい。",
      "code": "",
      "choices": [
        "ActiveWorkbook.SaveAs Path:=\"C:\\Desktop\\NewBook.xlsx\"",
        "ThisWorkbook.Close Filename:=\"C:\\Desktop\\NewBook.xlsx\"",
        "ThisWorkbook.SaveAs Filename:=\"C:\\Desktop\\NewBook.xlsx\"",
        "ThisWorkbook.Save Filename:=\"C:\\Desktop\\NewBook.xlsx\""
      ],
      "answers": [
        2
      ],
      "explanation": "別名保存は SaveAs メソッドを使い、Filename にドライブ記号を含む完全なパスを指定します。",
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
