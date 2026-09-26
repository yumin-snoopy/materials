window.PRACTICE_SET = {
  "number": 9,
  "title": "⑨ VBAエキスパート BASIC 中級模擬問題",
  "description": "表データを使った集計、抽出、コピー処理を中心に確認する10問です。",
  "pageUrl": "https://yumin-snoopy.github.io/materials/vba_statement_practice_09/",
  "questions": [
    {
      "id": 1,
      "title": "For文を読み解く",
      "prompt": "次のマクロを実行したとき、メッセージボックスに表示される値として正しいものを１つ選択しなさい。",
      "code": "Sub Sample()\nDim total As Long\ntotal = 0\nFor i = 2 To 8\nIf Cells(i, 2).Value >= 80 Then\ntotal = total + Cells(i, 3).Value\nEnd If\nNext i\nMsgBox total\nEnd Sub\n表:\n- | A | B | C\n1 | 商品 | 得点 | 個数\n2 | 商品A | 95 | 12\n3 | 商品B | 72 | 8\n4 | 商品C | 88 | 15\n5 | 商品D | 65 | 20\n6 | 商品E | 90 | 10\n7 | 商品F | 78 | 18\n8 | 商品G | 85 | 25",
      "choices": [
        "87",
        "47",
        "52",
        "62"
      ],
      "answers": [
        3
      ],
      "explanation": "得点>=80の行の「個数」を合計（12+15+10+25）。",
      "tags": [
        "if",
        "loop",
        "cell"
      ]
    },
    {
      "id": 2,
      "title": "For文を読み解く",
      "prompt": "A列にある郵便番号から、ハイフンより前の3桁の数字をB列に抽出するコードとして、正しいものをすべて選択しなさい。",
      "code": "Sub Sample()\nDim i As Long\nFor i = 2 To 6\nCells(i, 2) = 【  】に入るコード\nNext i\nEnd Sub\n表:\n- | A | B\n1 | 郵便番号 | 上3桁\n2 | 100-0001 | -\n3 | 150-0002 | -\n4 | 162-0825 | -\n5 | 101-0047 | -\n6 | 106-0032 | -",
      "choices": [
        "Mid(Cells(i, 1), InStr(Cells(i, 1), \"-\") - 3, 3)",
        "Left(Cells(i, 1), 3)",
        "Right(Cells(i, 1), 3)",
        "Mid(Cells(i, 1), 1, 3)"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "1,3,4（Left / Mid(1,3) / InStrでハイフン位置から3文字前） 上3桁の抽出は複数の書き方で可能。",
      "tags": [
        "loop",
        "cell"
      ]
    },
    {
      "id": 3,
      "title": "For文を読み解く",
      "prompt": "左側の表において、在庫数が安全在庫を下回っている商品を、右側の表にコピーするコードとして【 】に入るコードを１つ選択しなさい。ただし、コピーするときは右側の表の2行目以降にある空白行のうち、一番上から順にコピーするものとする。",
      "code": "Sub Sample()\nDim i As Long\nWith ActiveSheet\nFor i = 2 To .Cells(Rows.Count, 1).End(xlUp).Row\nIf .Cells(i, 2).Value < .Cells(i, 3).Value Then\n【  】\nEnd If\nNext i\nEnd With\nEnd Sub\n表:\n- | A | B | C | D | E | F | G\n1 | 商品 | 在庫数 | 安全在庫 | - | 商品 | 在庫数 | 安全在庫\n2 | 商品A | 150 | 100 | - | - | - | -\n3 | 商品B | 80 | 120 | - | - | - | -\n4 | 商品C | 200 | 150 | - | - | - | -\n5 | 商品D | 60 | 90 | - | - | - | -\n6 | 商品E | 180 | 160 | - | - | - | -",
      "choices": [
        ".Cells(i, 1).Resize(1, 3).Copy .Cells(.Rows.Count, 5).End(xlUp).Offset(1)",
        ".Cells(i, 1).EntireRow.Copy .Cells(.Rows.Count, 5).End(xlUp).Offset(1)",
        ".Range(.Cells(i, 1), .Cells(i, 3)).Copy .Cells(.Rows.Count, 5).End(xlUp)",
        ".Cells(i, 1).Copy .Cells(.Rows.Count, 5).End(xlUp).Offset(1)"
      ],
      "answers": [
        0
      ],
      "explanation": "2（.Cells(i,1).Resize(1,3).Copy …Offset(1)） 3列分（商品～安全在庫）を右表の次の空行へ。",
      "tags": [
        "if",
        "loop",
        "cell"
      ]
    },
    {
      "id": 4,
      "title": "For文を読み解く",
      "prompt": "次のマクロを実行したとき、メッセージボックスに表示される値として正しいものを１つ選択しなさい。",
      "code": "Sub Sample()\nDim count As Long\ncount = 0\nFor i = 2 To 9\nIf Cells(i, 2).Value = \"東京\" And Cells(i, 3).Value >= 100 Then\ncount = count + 1\nEnd If\nNext i\nMsgBox \"条件を満たすのは\" & count & \"件\"\nEnd Sub\n表:\n- | A | B | C\n1 | 店舗ID | 地域 | 売上\n2 | S001 | 東京 | 120\n3 | S002 | 大阪 | 150\n4 | S003 | 東京 | 80\n5 | S004 | 名古屋 | 110\n6 | S005 | 東京 | 200\n7 | S006 | 東京 | 95\n8 | S007 | 大阪 | 130\n9 | S008 | 東京 | 105",
      "choices": [
        "条件を満たすのは2件",
        "条件を満たすのは3件",
        "条件を満たすのは4件",
        "条件を満たすのは5件"
      ],
      "answers": [
        1
      ],
      "explanation": "東京かつ売上100以上：S001,S005,S008。",
      "tags": [
        "if",
        "loop",
        "cell"
      ]
    },
    {
      "id": 5,
      "title": "VBAの基本を確認する",
      "prompt": "年・月・日を別々の数値で指定して、2025年12月15日の日付値を作成するコードはどれですか。",
      "code": "",
      "choices": [
        "SerialDate(2025, 12, 15)",
        "DateValue(\"2025/12/15\")",
        "DateSerial(2025, 12, 15)",
        "SerialValue(2025, 12, 15)"
      ],
      "answers": [
        2
      ],
      "explanation": "DateSerial 関数は、年・月・日を個別の引数として受け取り日付値を返します。",
      "tags": [
        "other"
      ]
    },
    {
      "id": 6,
      "title": "For文を読み解く",
      "prompt": "A列にある社員番号から、ハイフンより後ろの4桁の数字をB列に抽出するコードとして、【 】に入る正しいものをすべて選択しなさい。",
      "code": "Sub Sample()\nDim i As Long\nFor i = 2 To Cells(Rows.Count, 1).End(xlUp).Row\nCells(i, 2) = 【  】\nNext i\nEnd Sub\n表:\n- | A | B\n1 | 社員番号 | 下4桁\n2 | EMP-2301 | -\n3 | EMP-2302 | -\n4 | EMP-2303 | -\n5 | EMP-2304 | -",
      "choices": [
        "Mid(Cells(i, 1), 5, 4)",
        "Left(Cells(i, 1), 4)",
        "Right(Cells(i, 1), 4)",
        "Mid(Cells(i, 1), InStr(Cells(i, 1), \"-\") + 1, 4)"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "“EMP-2301” の末尾4桁抽出。",
      "tags": [
        "loop",
        "cell"
      ]
    },
    {
      "id": 7,
      "title": "For文を読み解く",
      "prompt": "次のマクロを実行したとき、メッセージボックスに表示される値として正しいものを１つ選択しなさい。",
      "code": "Sub Sample()\nDim sum As Long\nsum = 0\nWith ActiveSheet\nFor i = 2 To .Cells(Rows.Count, 1).End(xlUp).Row\nIf .Cells(i, 2).Value = \"A\" And .Cells(i, 3).Value > 50 Then\nsum = sum + .Cells(i, 4).Value\nEnd If\nNext i\nEnd With\nMsgBox sum\nEnd Sub\n表:\n- | A | B | C | D\n1 | 商品名 | ランク | 評価 | 金額\n2 | 商品1 | A | 60 | 1000\n3 | 商品2 | B | 70 | 1500\n4 | 商品3 | A | 45 | 800\n5 | 商品4 | A | 80 | 2000\n6 | 商品5 | C | 55 | 1200\n7 | 商品6 | A | 65 | 1800",
      "choices": [
        "6800",
        "3000",
        "4000",
        "4800"
      ],
      "answers": [
        3
      ],
      "explanation": "ランクA かつ 評価>50 の金額合計（1000+2000+1800）。",
      "tags": [
        "if",
        "loop",
        "cell"
      ]
    },
    {
      "id": 8,
      "title": "For文を読み解く",
      "prompt": "カテゴリー1の商品名と価格を右側の表へ1行ずつコピーするコードとして、正しいものをすべて選んでください。",
      "code": "Sub Sample()\nDim i As Long, j As Long\nj = 2\nFor i = 2 To Cells(Rows.Count, 1).End(xlUp).Row\nIf Cells(i, 3).Value = \"カテゴリー1\" Then\n【  】\nj = j + 1\nEnd If\nNext i\nEnd Sub\n表:\n- | A | B | C | - | E | F\n1 | 商品名 | 価格 | カテゴリー | - | 商品名 | 価格\n2 | 商品A | 1200 | カテゴリー1 | - | - | -\n3 | 商品B | 1800 | カテゴリー2 | - | - | -\n4 | 商品C | 1500 | カテゴリー1 | - | - | -\n5 | 商品D | 2000 | カテゴリー3 | - | - | -\n6 | 商品E | 1600 | カテゴリー1 | - | - | -\nCells(i, 1).Resize(1, 2).Copy Cells(j, 5)\nRange(Cells(i, 1), Cells(i, 2)).Copy Cells(j, 5)\nCells(j, 5).Value = Cells(i, 1).Value\nCells(j, 6).Value = Cells(i, 2).Value\n上記すべて正しい",
      "choices": [
        "Range(Cells(i, 1), Cells(i, 2)).Copy Cells(j, 5)",
        "Cells(j, 5).Value = Cells(i, 1).Value\nCells(j, 6).Value = Cells(i, 2).Value",
        "Cells(i, 1).EntireRow.Copy Cells(j, 5)",
        "Cells(i, 1).Resize(1, 2).Copy Cells(j, 5)"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "A:Bの2列をCopyする2通りと、E:Fへ値を個別代入する方法はいずれも目的を満たします。行全体のコピーは不要です。",
      "tags": [
        "if",
        "loop",
        "cell"
      ]
    },
    {
      "id": 9,
      "title": "For文を読み解く",
      "prompt": "次のマクロを実行したとき、メッセージボックスに表示される値として正しいものを１つ選択しなさい。",
      "code": "Sub Sample()\nDim avg As Double\nDim sum As Long, count As Long\nFor i = 2 To 7\nIf Cells(i, 3).Value >= 70 Then\nsum = sum + Cells(i, 2).Value\ncount = count + 1\nEnd If\nNext i\navg = sum / count\nMsgBox avg\nEnd Sub\n表:\n- | A | B | C\n1 | 氏名 | 数学 | 英語\n2 | 田中 | 85 | 75\n3 | 鈴木 | 60 | 65\n4 | 佐藤 | 90 | 80\n5 | 高橋 | 55 | 68\n6 | 伊藤 | 95 | 90\n7 | 渡辺 | 70 | 72",
      "choices": [
        "85",
        "90",
        "80",
        "82.5"
      ],
      "answers": [
        0
      ],
      "explanation": "英語>=70の人の数学平均：(85+90+95+70)/4=85。",
      "tags": [
        "if",
        "loop",
        "cell"
      ]
    },
    {
      "id": 10,
      "title": "For文を読み解く",
      "prompt": "条件に合う行の配送料を合計するコードとして、正しいものをすべて選んでください。",
      "code": "Sub Sample()\nDim total As Long\nWith ActiveSheet\nFor i = 2 To .Cells(Rows.Count, 1).End(xlUp).Row\nIf .Cells(i, 1).Value = \"大阪\" And .Cells(i, 2).Value >= 80 Then\n【  】\nEnd If\nNext i\nEnd With\nMsgBox total\nEnd Sub\n表:\n- | A | B | C\n1 | 配送先 | 荷物サイズ | 配送料\n2 | 東京 | 60 | 50\n3 | 大阪 | 100 | 80\n4 | 名古屋 | 70 | 40\n5 | 大阪 | 85 | 70\n6 | 福岡 | 90 | 60\n7 | 大阪 | 75 | 55\n8 | 大阪 | 95 | 75",
      "choices": [
        "total = .Cells(i, 3).Value",
        "total = total + .Cells(i, 2).Value",
        "total = total + .Cells(i, 3).Value",
        "total = .Cells(i, 3).Value + total"
      ],
      "answers": [
        2,
        3
      ],
      "explanation": "配送料は3列目にあります。加算の左右を入れ替えても結果は同じなので、2つの式が正解です。",
      "tags": [
        "if",
        "loop",
        "cell"
      ]
    }
  ]
};
