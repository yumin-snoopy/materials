(() => {
  "use strict";

  const questions = [
    {
      id: 1,
      tags: ["basic"],
      title: "1から5まで足す",
      code: "Sub Q1()\n    Dim i As Integer\n    Dim total As Integer\n    total = 0\n\n    For i = 1 To 5\n        total = total + i\n    Next i\n\n    MsgBox total\nEnd Sub",
      prompt: "表示される数値はどれですか。",
      choices: ["5", "10", "15", "20"],
      answer: 2,
      explanation: "total は 1 + 2 + 3 + 4 + 5 で 15 になります。For は終了値の 5 も含めて実行されます。"
    },
    {
      id: 2,
      tags: ["basic"],
      title: "Step 2で増える",
      code: "Sub Q2()\n    Dim i As Integer\n    Dim count As Integer\n    count = 0\n\n    For i = 2 To 10 Step 2\n        count = count + 1\n    Next i\n\n    MsgBox count\nEnd Sub",
      prompt: "表示される数値はどれですか。",
      choices: ["4", "5", "8", "10"],
      answer: 1,
      explanation: "i は 2, 4, 6, 8, 10 の5回です。処理のたびに count が 1 増えるので、表示は 5 です。"
    },
    {
      id: 3,
      tags: ["basic"],
      title: "Step -1で減る",
      code: "Sub Q3()\n    Dim i As Integer\n    Dim text As String\n    text = \"\"\n\n    For i = 3 To 1 Step -1\n        text = text & i\n    Next i\n\n    MsgBox text\nEnd Sub",
      prompt: "表示される文字列はどれですか。",
      choices: ["123", "321", "31", "エラーになる"],
      answer: 1,
      explanation: "Step -1 なので i は 3, 2, 1 の順番です。文字列として連結するため「321」が表示されます。"
    },
    {
      id: 4,
      tags: ["basic"],
      title: "開始値と終了値が同じ",
      code: "Sub Q4()\n    Dim i As Integer\n    Dim total As Integer\n    total = 100\n\n    For i = 4 To 4\n        total = total + i\n    Next i\n\n    MsgBox total\nEnd Sub",
      prompt: "表示される数値はどれですか。",
      choices: ["100", "104", "108", "0"],
      answer: 1,
      explanation: "開始値と終了値が同じ場合も1回だけ実行されます。total は 100 + 4 で 104 です。"
    },
    {
      id: 5,
      tags: ["basic"],
      title: "ループ後の変数",
      code: "Sub Q5()\n    Dim i As Integer\n\n    For i = 1 To 3\n    Next i\n\n    MsgBox i\nEnd Sub",
      prompt: "表示される数値はどれですか。",
      choices: ["1", "3", "4", "何も表示されない"],
      answer: 2,
      explanation: "i は 1, 2, 3 で実行され、次に 4 へ増えた時点で終了します。そのためループ後の i は 4 です。"
    },
    {
      id: 6,
      tags: ["if"],
      title: "偶数だけ足す",
      code: "Sub Q6()\n    Dim i As Integer\n    Dim total As Integer\n    total = 0\n\n    For i = 1 To 6\n        If i Mod 2 = 0 Then\n            total = total + i\n        End If\n    Next i\n\n    MsgBox total\nEnd Sub",
      prompt: "表示される数値はどれですか。",
      choices: ["6", "9", "12", "21"],
      answer: 2,
      explanation: "1から6のうち偶数は 2, 4, 6 です。これらを足すと 12 になります。"
    },
    {
      id: 7,
      tags: ["if"],
      title: "条件に合う回数を数える",
      code: "Sub Q7()\n    Dim i As Integer\n    Dim count As Integer\n    count = 0\n\n    For i = 1 To 5\n        If i >= 3 Then\n            count = count + 1\n        End If\n    Next i\n\n    MsgBox count\nEnd Sub",
      prompt: "表示される数値はどれですか。",
      choices: ["2", "3", "4", "5"],
      answer: 1,
      explanation: "i >= 3 になるのは 3, 4, 5 の3回です。したがって count は 3 になります。"
    },
    {
      id: 8,
      tags: ["if"],
      title: "IfとElseで文字を分ける",
      code: "Sub Q8()\n    Dim i As Integer\n    Dim text As String\n    text = \"\"\n\n    For i = 1 To 4\n        If i < 3 Then\n            text = text & \"A\"\n        Else\n            text = text & \"B\"\n        End If\n    Next i\n\n    MsgBox text\nEnd Sub",
      prompt: "表示される文字列はどれですか。",
      choices: ["AABB", "ABAB", "BBAA", "AAAA"],
      answer: 0,
      explanation: "i が 1, 2 のときは A、3, 4 のときは B を連結します。結果は「AABB」です。"
    },
    {
      id: 9,
      tags: ["if"],
      title: "途中で条件を満たす値",
      code: "Sub Q9()\n    Dim i As Integer\n    Dim result As Integer\n    result = 0\n\n    For i = 1 To 5\n        If i * 2 > 6 Then\n            result = i\n        End If\n    Next i\n\n    MsgBox result\nEnd Sub",
      prompt: "表示される数値はどれですか。",
      choices: ["0", "3", "4", "5"],
      answer: 3,
      explanation: "i * 2 > 6 が True になるのは i が 4 と 5 のときです。最後に代入された値が残るため、result は 5 です。"
    },
    {
      id: 10,
      tags: ["nested"],
      title: "Forの入れ子",
      code: "Sub Q10()\n    Dim i As Integer\n    Dim j As Integer\n    Dim count As Integer\n    count = 0\n\n    For i = 1 To 2\n        For j = 1 To 3\n            count = count + 1\n        Next j\n    Next i\n\n    MsgBox count\nEnd Sub",
      prompt: "表示される数値はどれですか。",
      choices: ["2", "3", "5", "6"],
      answer: 3,
      explanation: "外側の For は2回、内側の For は毎回3回実行されます。2 × 3 で count は 6 です。"
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
    if (tag === "basic") return "基本For";
    if (tag === "if") return "IfとFor";
    if (tag === "nested") return "入れ子";
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
          ? "全問正解です。For文の回数と変数の変化を正確に追えています。"
          : `${questions.length}問中${correctCount}問正解です。間違えた問題は、i の値を1行ずつ書き出して読み直してみましょう。`;

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
    "https://yumin-snoopy.github.io/materials/vba_for_practice/";

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
