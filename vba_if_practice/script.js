(() => {
  "use strict";

  // ==============================
  // 問題データ
  // ==============================
  const questions = [
  {
    "id": 1,
    "tags": [
      "basic"
    ],
    "title": "最初の If が True ならそこで終了",
    "code": "Sub Q1()\n    Dim x As Integer\n    x = 12\n\n    If x >= 10 Then\n        MsgBox \"A\"\n    ElseIf x >= 5 Then\n        MsgBox \"B\"\n    Else\n        MsgBox \"C\"\n    End If\nEnd Sub",
    "prompt": "表示される文字はどれですか。",
    "choices": [
      "B",
      "何も表示されない",
      "A",
      "C"
    ],
    "answer": 2,
    "explanation": "x は 12 です。最初の x >= 10 が True なので「A」が表示され、それ以降の ElseIf と Else は判定されません。"
  },
  {
    "id": 2,
    "tags": [
      "or"
    ],
    "title": "Or はどちらか一方で成立",
    "code": "Sub Q2()\n    Dim score As Integer\n    Dim passed As Boolean\n    score = 72\n    passed = False\n\n    If score >= 80 Or passed = True Then\n        MsgBox \"合格候補\"\n    Else\n        MsgBox \"再挑戦\"\n    End If\nEnd Sub",
    "prompt": "表示されるメッセージはどれですか。",
    "choices": [
      "再挑戦",
      "score",
      "合格候補",
      "passed"
    ],
    "answer": 0,
    "explanation": "score >= 80 も passed = True も False です。Or は両方が False のときだけ False になるため、Else の「再挑戦」です。"
  },
  {
    "id": 3,
    "tags": [
      "and",
      "or"
    ],
    "title": "And の両方が成立する場合",
    "code": "Sub Q3()\n    Dim qty As Integer\n    Dim price As Integer\n    qty = 6\n    price = 1200\n\n    If qty >= 5 And price >= 1000 Then\n        MsgBox \"割引A\"\n    ElseIf qty >= 3 Or price >= 1500 Then\n        MsgBox \"割引B\"\n    Else\n        MsgBox \"割引なし\"\n    End If\nEnd Sub",
    "prompt": "表示されるメッセージはどれですか。",
    "choices": [
      "割引なし",
      "エラーになる",
      "割引B",
      "割引A"
    ],
    "answer": 3,
    "explanation": "qty >= 5 と price >= 1000 は両方とも True です。最初の And が成立するので「割引A」が表示され、ElseIf は判定されません。"
  },
  {
    "id": 4,
    "tags": [
      "and",
      "or"
    ],
    "title": "文字列条件と数値条件を組み合わせる",
    "code": "Sub Q4()\n    Dim dept As String\n    Dim years As Integer\n    dept = \"Sales\"\n    years = 2\n\n    If dept = \"Sales\" And years >= 3 Then\n        MsgBox \"上級担当\"\n    ElseIf dept = \"Sales\" Or years >= 5 Then\n        MsgBox \"通常担当\"\n    Else\n        MsgBox \"対象外\"\n    End If\nEnd Sub",
    "prompt": "表示されるメッセージはどれですか。",
    "choices": [
      "対象外",
      "通常担当",
      "Sales",
      "上級担当"
    ],
    "answer": 1,
    "explanation": "dept = \"Sales\" は True、years >= 3 は False なので最初の And は False。次の Or は左側が True なので「通常担当」です。"
  },
  {
    "id": 5,
    "tags": [
      "basic"
    ],
    "title": "0 の判定を読み落とさない",
    "code": "Sub Q5()\n    Dim n As Integer\n    n = -3\n\n    If n > 0 Then\n        MsgBox \"正\"\n    ElseIf n = 0 Then\n        MsgBox \"ゼロ\"\n    Else\n        MsgBox \"負\"\n    End If\nEnd Sub",
    "prompt": "表示される文字はどれですか。",
    "choices": [
      "ゼロ",
      "-3",
      "負",
      "正"
    ],
    "answer": 2,
    "explanation": "n > 0 も n = 0 も False です。どの条件にも当てはまらないため、Else の「負」が表示されます。"
  },
  {
    "id": 6,
    "tags": [
      "and",
      "or"
    ],
    "title": "2つの数値を比較する",
    "code": "Sub Q6()\n    Dim a As Integer\n    Dim b As Integer\n    a = 4\n    b = 4\n\n    If a > 5 And b > 5 Then\n        MsgBox \"両方\"\n    ElseIf a > 5 Or b > 5 Then\n        MsgBox \"片方\"\n    Else\n        MsgBox \"なし\"\n    End If\nEnd Sub",
    "prompt": "表示される文字はどれですか。",
    "choices": [
      "なし",
      "a",
      "両方",
      "片方"
    ],
    "answer": 0,
    "explanation": "a > 5 と b > 5 はどちらも False です。And も Or も成立しないので、Else の「なし」が表示されます。"
  },
  {
    "id": 7,
    "tags": [
      "and",
      "or"
    ],
    "title": "最初の Or が成立する場合",
    "code": "Sub Q7()\n    Dim rank As String\n    Dim point As Integer\n    rank = \"B\"\n    point = 97\n\n    If rank = \"A\" Or point >= 95 Then\n        MsgBox \"Gold\"\n    ElseIf rank = \"B\" And point >= 80 Then\n        MsgBox \"Silver\"\n    Else\n        MsgBox \"Bronze\"\n    End If\nEnd Sub",
    "prompt": "表示される文字はどれですか。",
    "choices": [
      "Silver",
      "B",
      "Bronze",
      "Gold"
    ],
    "answer": 3,
    "explanation": "rank = \"A\" は False ですが、point >= 95 は True です。Or は片方が True なら成立するので、最初の If で「Gold」が表示されます。"
  },
  {
    "id": 8,
    "tags": [
      "and",
      "or"
    ],
    "title": "And の両方が条件を満たす場合",
    "code": "Sub Q8()\n    Dim temp As Integer\n    Dim humid As Integer\n    temp = 31\n    humid = 75\n\n    If temp >= 30 And humid >= 70 Then\n        MsgBox \"警戒\"\n    ElseIf temp >= 30 Or humid >= 70 Then\n        MsgBox \"注意\"\n    Else\n        MsgBox \"通常\"\n    End If\nEnd Sub",
    "prompt": "表示されるメッセージはどれですか。",
    "choices": [
      "注意",
      "警戒",
      "通常",
      "31"
    ],
    "answer": 1,
    "explanation": "temp >= 30 と humid >= 70 は両方とも True です。最初の And が成立するので「警戒」が表示されます。"
  },
  {
    "id": 9,
    "tags": [
      "and",
      "or"
    ],
    "title": "Boolean 変数が False の場合",
    "code": "Sub Q9()\n    Dim total As Integer\n    Dim member As Boolean\n    total = 125\n    member = False\n\n    If member = True And total >= 100 Then\n        MsgBox \"会員割引\"\n    ElseIf member = True Or total >= 120 Then\n        MsgBox \"クーポン\"\n    Else\n        MsgBox \"通常価格\"\n    End If\nEnd Sub",
    "prompt": "表示されるメッセージはどれですか。",
    "choices": [
      "クーポン",
      "True",
      "通常価格",
      "会員割引"
    ],
    "answer": 0,
    "explanation": "最初の If は member = True が False なので、And 全体が False です。ElseIf は total >= 120 が True なので、Or 全体が True になり「クーポン」です。"
  },
  {
    "id": 10,
    "tags": [
      "and",
      "or"
    ],
    "title": "And と Or が同じ式にある場合",
    "code": "Sub Q10()\n    Dim dayName As String\n    Dim hour As Integer\n    dayName = \"Sun\"\n    hour = 14\n\n    If dayName = \"Sat\" Or (dayName = \"Sun\" And hour < 12) Then\n        MsgBox \"休日午前\"\n    Else\n        MsgBox \"対象外\"\n    End If\nEnd Sub",
    "prompt": "表示されるメッセージはどれですか。",
    "choices": [
      "休日午前",
      "Sun",
      "対象外",
      "エラーになる"
    ],
    "answer": 2,
    "explanation": "括弧の中を先に読みます。dayName = \"Sun\" は True ですが、hour < 12 は False なので、括弧内の And は False です。dayName = \"Sat\" も False のため、Or 全体も False となり「対象外」です。"
  }
];

  // ==============================
  // 状態
  // ==============================
  const state = {
    filter: "all",
    answers: {}
  };

  // ==============================
  // HTML要素
  // ==============================
  const questionList = document.getElementById("questionList");
  const miniList = document.getElementById("miniList");
  const scoreText = document.getElementById("scoreText");
  const progressBar = document.getElementById("progressBar");
  const summary = document.getElementById("summary");

  // HTMLに表示する文字を安全な形に変換
  function escapeHtml(value) {
    return String(value).replace(/[&<>"]/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    })[char]);
  }

  // タグ名を画面表示用に変換
  function getTagLabel(tag) {
    if (tag === "basic") return "If / ElseIf";
    if (tag === "and") return "And";
    if (tag === "or") return "Or";
    return tag;
  }

  // 現在のフィルターに該当する問題だけを取得
  function getVisibleQuestions() {
    if (state.filter === "all") {
      return questions;
    }

    return questions.filter(question =>
      question.tags.includes(state.filter)
    );
  }

  // ==============================
  // 問題一覧を表示
  // ==============================
  function renderQuestions() {
    questionList.innerHTML = "";

    getVisibleQuestions().forEach(question => {
      const selectedAnswer = state.answers[question.id];
      const answered = selectedAnswer !== undefined;
      const isCorrect = selectedAnswer === question.answer;

      const article = document.createElement("article");
      article.className =
        "question" +
        (answered ? (isCorrect ? " is-correct" : " is-wrong") : "");
      article.id = `q-${question.id}`;

      const choicesHtml = question.choices.map((choice, index) => {
        let className = "choice";

        if (answered && index === question.answer) {
          className += " correct";
        }

        if (
          answered &&
          index === selectedAnswer &&
          index !== question.answer
        ) {
          className += " wrong";
        }

        return `
          <label class="${className}">
            <input
              type="radio"
              name="q${question.id}"
              value="${index}"
              ${selectedAnswer === index ? "checked" : ""}
            >
            <span>${escapeHtml(choice)}</span>
          </label>
        `;
      }).join("");

      article.innerHTML = `
        <div class="q-head">
          <h2>問${question.id}: ${escapeHtml(question.title)}</h2>

          <div class="tags">
            ${question.tags
              .map(tag => `<span class="tag">${getTagLabel(tag)}</span>`)
              .join("")}
          </div>
        </div>

        <pre><code>${escapeHtml(question.code)}</code></pre>

        <p class="prompt">${escapeHtml(question.prompt)}</p>

        <div
          class="choices"
          role="radiogroup"
          aria-label="問${question.id}の選択肢"
        >
          ${choicesHtml}
        </div>

        <div
          class="result${answered ? " show" : ""}"
          aria-live="polite"
        >
          <strong>
            ${answered ? (isCorrect ? "正解" : "不正解") : ""}
          </strong>
          ${answered ? escapeHtml(question.explanation) : ""}
        </div>
      `;

      questionList.appendChild(article);
    });
  }

  // ==============================
  // 右側の問題ナビを表示
  // ==============================
  function renderMiniList() {
    miniList.innerHTML = "";

    questions.forEach(question => {
      const selectedAnswer = state.answers[question.id];

      const button = document.createElement("button");
      button.type = "button";
      button.className = "mini";
      button.textContent = question.id;

      if (selectedAnswer !== undefined) {
        button.classList.add(
          selectedAnswer === question.answer ? "done" : "missed"
        );
      }

      button.setAttribute(
        "aria-label",
        `問${question.id}へ移動`
      );

      button.addEventListener("click", () => {
        state.filter = "all";
        updateFilterButtons();
        renderAll();

        document
          .getElementById(`q-${question.id}`)
          .scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
      });

      miniList.appendChild(button);
    });
  }

  // ==============================
  // 得点と進捗を更新
  // ==============================
  function updateScore() {
    const answeredCount = Object.keys(state.answers).length;

    const correctCount = questions.filter(question =>
      state.answers[question.id] === question.answer
    ).length;

    scoreText.textContent =
      `${correctCount} / ${questions.length}`;

    progressBar.style.width =
      `${(answeredCount / questions.length) * 100}%`;

    if (answeredCount === questions.length) {
      summary.textContent =
        correctCount === questions.length
          ? "全問正解です。IF文の読み順はかなり安定しています。"
          : `${questions.length}問中${correctCount}問正解です。間違えた問題は、条件を True / False に分けてもう一度読み直してみましょう。`;

      summary.classList.add("show");
    } else {
      summary.classList.remove("show");
      summary.textContent = "";
    }
  }

  // フィルターボタンの選択状態を更新
  function updateFilterButtons() {
    document.querySelectorAll(".filter").forEach(button => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.filter === state.filter)
      );
    });
  }

  // 画面をまとめて再描画
  function renderAll() {
    renderQuestions();
    renderMiniList();
    updateScore();
  }

  // ==============================
  // イベント
  // ==============================

  // 回答を選択したとき
  questionList.addEventListener("change", event => {
    if (!event.target.matches("input[type='radio']")) {
      return;
    }

    const questionId = Number(
      event.target.name.replace("q", "")
    );

    state.answers[questionId] =
      Number(event.target.value);

    renderAll();

    document
      .getElementById(`q-${questionId}`)
      .scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
  });

  // フィルター切り替え
  document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      updateFilterButtons();
      renderQuestions();
    });
  });

  // 回答リセット
  document
    .getElementById("resetBtn")
    .addEventListener("click", () => {
      state.answers = {};
      renderAll();

      scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

  // 初期表示
  renderAll();
})();


// ==============================
// QRコード
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const qrCodeArea = document.getElementById("qrCode");
  const qrStatus = document.getElementById("qrStatus");

  const pageUrl =
    "https://yumin-snoopy.github.io/materials/vba_if_practice/";

  if (typeof QRCode === "undefined") {
    qrStatus.textContent =
      "QRコードを読み込めませんでした。ページを更新してください。";
    return;
  }

  new QRCode(qrCodeArea, {
    text: pageUrl,
    width: 92,
    height: 92,
    colorDark: "#18212f",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.M
  });

  qrStatus.textContent =
    "読み取ると、この練習ページを開けます。";
});
