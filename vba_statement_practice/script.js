(() => {
  "use strict";

  const questions = [
    {
      id: 1,
      tags: ["if"],
      title: "Ifで加算する",
      code: "Sub Q1()\n    Dim a As Long\n    a = 5\n    If a > 3 Then\n        a = a + 2\n    End If\n    MsgBox a\nEnd Sub",
      prompt: "表示される結果はどれですか。",
      choices: ["3", "5", "7", "エラー"],
      answer: 2,
      explanation: "a は 5 です。a > 3 は True なので a = a + 2 が実行され、7 が表示されます。"
    },
    {
      id: 2,
      tags: ["if"],
      title: "IfとElseの分岐",
      code: "Sub Q2()\n    Dim x As Long\n    x = 10\n    If x >= 10 Then\n        MsgBox \"OK\"\n    Else\n        MsgBox \"NG\"\n    End If\nEnd Sub",
      prompt: "表示される結果はどれですか。",
      choices: ["OK", "NG", "10", "エラー"],
      answer: 0,
      explanation: "x は 10 です。x >= 10 は True なので Then 側の MsgBox \"OK\" が実行されます。"
    },
    {
      id: 3,
      tags: ["loop"],
      title: "Forで合計する",
      code: "Sub Q3()\n    Dim i As Long\n    Dim s As Long\n    For i = 1 To 3\n        s = s + i\n    Next i\n    MsgBox s\nEnd Sub",
      prompt: "表示される結果はどれですか。",
      choices: ["3", "6", "1", "5"],
      answer: 1,
      explanation: "i は 1, 2, 3 の順に変化します。s は 1 + 2 + 3 の合計で 6 になります。"
    },
    {
      id: 4,
      tags: ["loop"],
      title: "Do Whileで増やす",
      code: "Sub Q4()\n    Dim n As Long\n    n = 1\n    Do While n < 5\n        n = n + 1\n    Loop\n    MsgBox n\nEnd Sub",
      prompt: "表示される結果はどれですか。",
      choices: ["4", "5", "6", "無限ループ"],
      answer: 1,
      explanation: "n は 1 から始まり、2, 3, 4, 5 と増えます。n が 5 になると n < 5 が False になり、5 が表示されます。"
    },
    {
      id: 5,
      tags: ["other"],
      title: "文字列を結合する",
      code: "Sub Q5()\n    Dim txt As String\n    txt = \"ABC\"\n    txt = txt & \"D\"\n    MsgBox txt\nEnd Sub",
      prompt: "表示される結果はどれですか。",
      choices: ["ABC", "ABCD", "ABD", "ACD"],
      answer: 1,
      explanation: "文字列は & で結合します。\"ABC\" の後ろに \"D\" がつくので、ABCD が表示されます。"
    },
    {
      id: 6,
      tags: ["if"],
      title: "Modで偶数を判定する",
      code: "Sub Q6()\n    Dim a As Long\n    a = 2\n    If a Mod 2 = 0 Then\n        MsgBox \"偶数\"\n    Else\n        MsgBox \"奇数\"\n    End If\nEnd Sub",
      prompt: "表示される結果はどれですか。",
      choices: ["偶数", "奇数", "2", "エラー"],
      answer: 0,
      explanation: "2 Mod 2 は 0 です。条件が True になるので、偶数 が表示されます。"
    },
    {
      id: 7,
      tags: ["loop", "other"],
      title: "Forで文字列を連結する",
      code: "Sub Q7()\n    Dim i As Long\n    Dim s As String\n\n    For i = 1 To 4\n        s = s & i\n    Next i\n\n    MsgBox s\nEnd Sub",
      prompt: "表示される結果はどれですか。",
      choices: ["123", "1234", "4321", "14"],
      answer: 1,
      explanation: "For 文で i は 1 から 4 まで順に変化します。s に順番に連結されるので 1234 になります。"
    },
    {
      id: 8,
      tags: ["other"],
      title: "Select Caseで分岐する",
      code: "Sub Q8()\n    Dim x As Long\n    x = 3\n    Select Case x\n        Case 1\n            MsgBox \"A\"\n        Case 2\n            MsgBox \"B\"\n        Case 3\n            MsgBox \"C\"\n        Case Else\n            MsgBox \"D\"\n    End Select\nEnd Sub",
      prompt: "表示される結果はどれですか。",
      choices: ["A", "B", "C", "D"],
      answer: 2,
      explanation: "x は 3 です。Case 3 に一致するため、MsgBox \"C\" が実行されます。"
    },
    {
      id: 9,
      tags: ["if", "loop"],
      title: "条件に合う回数を数える",
      code: "Sub Q9()\n    Dim i As Long\n    Dim cnt As Long\n    For i = 1 To 5\n        If i >= 3 Then\n            cnt = cnt + 1\n        End If\n    Next i\n    MsgBox cnt\nEnd Sub",
      prompt: "表示される結果はどれですか。",
      choices: ["2", "3", "4", "5"],
      answer: 1,
      explanation: "i >= 3 になるのは 3, 4, 5 の 3 回です。cnt は 3 まで増えます。"
    },
    {
      id: 10,
      tags: ["other"],
      title: "代入と計算の順番",
      code: "Sub Q10()\n    Dim a As Long\n    a = 5\n    a = a * 2\n    a = a - 3\n    MsgBox a\nEnd Sub",
      prompt: "表示される結果はどれですか。",
      choices: ["7", "10", "5", "3"],
      answer: 0,
      explanation: "a は 5 から始まり、a * 2 で 10、そこから 3 を引いて 7 になります。"
    }
  ];

  const state = {
    filter: "all",
    answers: {}
  };

  const questionList = document.getElementById("questionList");
  const miniList = document.getElementById("miniList");
  const scoreText = document.getElementById("scoreText");
  const progressBar = document.getElementById("progressBar");
  const summary = document.getElementById("summary");

  function escapeHtml(value) {
    return String(value).replace(/[&<>"]/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    })[char]);
  }

  function getTagLabel(tag) {
    if (tag === "if") return "If";
    if (tag === "loop") return "繰り返し";
    if (tag === "other") return "その他";
    return tag;
  }

  function getVisibleQuestions() {
    if (state.filter === "all") {
      return questions;
    }

    return questions.filter(question =>
      question.tags.includes(state.filter)
    );
  }

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
          ? "全問正解です。基本ステートメントを上から正確に追えています。"
          : `${questions.length}問中${correctCount}問正解です。間違えた問題は、変数の値を1行ずつ書き出して読み直してみましょう。`;

      summary.classList.add("show");
    } else {
      summary.classList.remove("show");
      summary.textContent = "";
    }
  }

  function updateFilterButtons() {
    document.querySelectorAll(".filter").forEach(button => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.filter === state.filter)
      );
    });
  }

  function renderAll() {
    renderQuestions();
    renderMiniList();
    updateScore();
  }

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

  document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      updateFilterButtons();
      renderQuestions();
    });
  });

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

  renderAll();
})();

function initializeQrCode() {
  const qrCodeArea = document.getElementById("qrCode");
  const qrStatus = document.getElementById("qrStatus");

  if (!qrCodeArea || !qrStatus) {
    return;
  }

  const pageUrl =
    "https://yumin-snoopy.github.io/materials/vba_statement_practice/";

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
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeQrCode);
} else {
  initializeQrCode();
}
