const progressKey = "two-variable-equations-progress-v1";
const stations = ["pairs", "system", "substitution", "elimination", "text", "review"];

const drillData = {
  "one-equation": {
    type: "choice",
    intro: "בדקו אם הזוג מתאים למשוואה אחת. הציבו את המספרים במקום האותיות.",
    questions: [
      {
        prompt: "האם הזוג (4, 1) פותר את x + y = 5?",
        choices: ["כן", "לא"],
        answer: "כן",
        explain: "4 + 1 = 5, לכן הזוג מתאים למשוואה.",
      },
      {
        prompt: "האם הזוג (3, 2) פותר את 2x + y = 8?",
        choices: ["כן", "לא"],
        answer: "כן",
        explain: "2 × 3 + 2 = 8.",
      },
      {
        prompt: "האם הזוג (5, 1) פותר את x - y = 3?",
        choices: ["כן", "לא"],
        answer: "לא",
        explain: "5 - 1 = 4, לא 3.",
      },
      {
        prompt: "איזה זוג פותר את x + y = 7?",
        choices: ["(2, 5)", "(4, 4)", "(8, 1)"],
        answer: "(2, 5)",
        explain: "2 + 5 = 7. בשני הזוגות האחרים הסכום אינו 7.",
      },
    ],
  },
  "two-equations": {
    type: "choice",
    intro: "הפעם הזוג צריך להתאים לשתי המשוואות, לא רק לאחת.",
    questions: [
      {
        prompt: "האם (4, 3) פותר את x + y = 7 וגם את x - y = 1?",
        choices: ["כן", "לא"],
        answer: "כן",
        explain: "4 + 3 = 7 וגם 4 - 3 = 1.",
      },
      {
        prompt: "האם (5, 2) פותר את x + y = 7 וגם את x - y = 1?",
        choices: ["כן", "לא"],
        answer: "לא",
        explain: "5 + 2 = 7 נכון, אבל 5 - 2 = 3 ולא 1.",
      },
      {
        prompt: "איזה זוג פותר את שתי המשוואות: x + y = 9, x - y = 3?",
        choices: ["(6, 3)", "(5, 4)", "(7, 2)"],
        answer: "(6, 3)",
        explain: "6 + 3 = 9 וגם 6 - 3 = 3.",
      },
      {
        prompt: "איזה זוג פותר את שתי המשוואות: a + b = 12, a - b = 4?",
        choices: ["(8, 4)", "(7, 5)", "(6, 6)"],
        answer: "(8, 4)",
        explain: "8 + 4 = 12 וגם 8 - 4 = 4.",
      },
    ],
  },
  substitution: {
    type: "pair",
    intro: "פתרו בהצבה. כדאי להתחיל מהמשוואה שבה אחד הנעלמים כבר לבד.",
    questions: [
      {
        prompt: "y = x + 1,  x + y = 9",
        answer: { x: 4, y: 5 },
        hint: "הציבו x + 1 במקום y: x + (x + 1) = 9.",
        explain: "x + x + 1 = 9, לכן 2x = 8 ו־x = 4. מציבים: y = 5.",
      },
      {
        prompt: "y = 2x,  x + y = 12",
        answer: { x: 4, y: 8 },
        hint: "הציבו 2x במקום y.",
        explain: "x + 2x = 12, לכן 3x = 12 ו־x = 4. לכן y = 8.",
      },
      {
        prompt: "x = y + 3,  x + y = 11",
        answer: { x: 7, y: 4 },
        hint: "הציבו y + 3 במקום x.",
        explain: "y + 3 + y = 11, לכן 2y = 8 ו־y = 4. לכן x = 7.",
      },
      {
        prompt: "y = 10 - x,  2x + y = 14",
        answer: { x: 4, y: 6 },
        hint: "הציבו 10 - x במקום y.",
        explain: "2x + 10 - x = 14, לכן x = 4. מציבים: y = 6.",
      },
    ],
  },
  elimination: {
    type: "pair",
    intro: "פתרו בעזרת חיבור או חיסור משוואות. חפשו נעלם שאפשר להעלים.",
    questions: [
      {
        prompt: "x + y = 8,  x - y = 2",
        answer: { x: 5, y: 3 },
        hint: "חברו את שתי המשוואות: y ו־-y נעלמים.",
        explain: "בחיבור מקבלים 2x = 10, לכן x = 5. מציבים ומקבלים y = 3.",
      },
      {
        prompt: "2x + y = 13,  x + y = 8",
        answer: { x: 5, y: 3 },
        hint: "חסרו את המשוואה השנייה מהראשונה.",
        explain: "בחיסור מקבלים x = 5. מציבים ב־x + y = 8 ומקבלים y = 3.",
      },
      {
        prompt: "3x + y = 16,  x + y = 8",
        answer: { x: 4, y: 4 },
        hint: "חסרו את המשוואה השנייה מהראשונה.",
        explain: "2x = 8, לכן x = 4. מציבים ומקבלים y = 4.",
      },
      {
        prompt: "2x + 3y = 18,  2x + y = 10",
        answer: { x: 3, y: 4 },
        hint: "חסרו את המשוואה השנייה מהראשונה כדי להעלים את 2x.",
        explain: "2y = 8, לכן y = 4. מציבים ב־2x + y = 10 ומקבלים x = 3.",
      },
    ],
  },
  "word-problems": {
    type: "translate",
    intro: "קודם בחרו את מערכת המשוואות, אחר כך פתרו.",
    questions: [
      {
        prompt: "שני מספרים שסכומם 20 וההפרש ביניהם 4. נסמן את המספר הגדול x ואת הקטן y.",
        equations: "x + y = 20; x - y = 4",
        choices: ["x + y = 20; x - y = 4", "x + y = 4; x - y = 20", "xy = 20; x + y = 4"],
        answer: { x: 12, y: 8 },
        hint: "סכום פירושו חיבור. הפרש פירושו חיסור.",
        explain: "מחברים את המשוואות ומקבלים 2x = 24, לכן x = 12 ו־y = 8.",
      },
      {
        prompt: "כרטיס ילד עולה 20 ש״ח וכרטיס מבוגר עולה 35 ש״ח. נמכרו 10 כרטיסים בסך 275 ש״ח. x ילדים, y מבוגרים.",
        equations: "x + y = 10; 20x + 35y = 275",
        choices: ["x + y = 275; 20x + 35y = 10", "x + y = 10; 20x + 35y = 275", "20 + 35 = 275; x + y = 10"],
        answer: { x: 5, y: 5 },
        hint: "משוואה אחת סופרת כרטיסים. משוואה שנייה סופרת כסף.",
        explain: "אם x + y = 10, אז x = 10 - y. מציבים ומקבלים 200 + 15y = 275, לכן y = 5 וגם x = 5.",
      },
      {
        prompt: "במבחן יש שאלות של 5 נקודות ושל 10 נקודות. תלמיד פתר 8 שאלות וקיבל 55 נקודות. x שאלות של 5, y שאלות של 10.",
        equations: "x + y = 8; 5x + 10y = 55",
        choices: ["x + y = 8; 5x + 10y = 55", "5x + 10y = 8; x + y = 55", "x + y = 55; 5x + 10y = 8"],
        answer: { x: 5, y: 3 },
        hint: "משוואה אחת היא מספר שאלות. השנייה היא מספר נקודות.",
        explain: "x = 8 - y. מציבים: 5(8 - y) + 10y = 55, לכן y = 3 ו־x = 5.",
      },
      {
        prompt: "2 עטים ו־3 מחברות עולים 31 ש״ח. 2 עטים ומחברת אחת עולים 17 ש״ח. x מחיר עט, y מחיר מחברת.",
        equations: "2x + 3y = 31; 2x + y = 17",
        choices: ["2x + 3y = 31; 2x + y = 17", "x + y = 31; 2x + 3y = 17", "3x + 2y = 31; x + 2y = 17"],
        answer: { x: 5, y: 7 },
        hint: "חסרו את המשוואה השנייה מהראשונה.",
        explain: "בחיסור מקבלים 2y = 14, לכן y = 7. מציבים ומקבלים x = 5.",
      },
    ],
  },
  review: {
    type: "mixed",
    intro: "תרגול מעורב. בחלק מהשאלות צריך לפתור, ובחלק צריך רק לזהות אם הטענה נכונה.",
    questions: [
      {
        kind: "pair",
        prompt: "y = x - 4,  x + y = 18",
        answer: { x: 11, y: 7 },
        hint: "הציבו x - 4 במקום y.",
        explain: "x + x - 4 = 18, לכן 2x = 22 ו־x = 11. לכן y = 7.",
      },
      {
        kind: "pair",
        prompt: "x + y = 15,  2x + y = 24",
        answer: { x: 9, y: 6 },
        hint: "חסרו את המשוואה הראשונה מהשנייה.",
        explain: "מתקבל x = 9, ואז y = 6.",
      },
      {
        kind: "pair",
        prompt: "3x - y = 5,  x + y = 7",
        answer: { x: 3, y: 4 },
        hint: "חברו את שתי המשוואות כדי להעלים את y.",
        explain: "4x = 12, לכן x = 3. מציבים ומקבלים y = 4.",
      },
      {
        kind: "choice",
        prompt: "האם (2, 5) פותר את x + y = 7 וגם את 2x + y = 9?",
        choices: ["כן", "לא"],
        answer: "כן",
        explain: "2 + 5 = 7 וגם 2 × 2 + 5 = 9.",
      },
      {
        kind: "choice",
        prompt: "תלמיד קיבל מחיר מחברת y = -1. מה הכי נכון לומר?",
        choices: ["כנראה יש טעות, כי מחיר לא יכול להיות שלילי", "זו תשובה תקינה תמיד", "צריך לעגל ל־0"],
        answer: "כנראה יש טעות, כי מחיר לא יכול להיות שלילי",
        explain: "בבעיות מציאותיות בודקים הגיון. מחיר שלילי מסמן טעות בבנייה או בחישוב.",
      },
    ],
  },
};

function loadProgress() {
  try {
    const stored = JSON.parse(localStorage.getItem(progressKey));
    return stored && typeof stored === "object" ? stored : {};
  } catch {
    return {};
  }
}

function saveProgress(progress) {
  localStorage.setItem(progressKey, JSON.stringify(progress));
}

function renderProgress() {
  const progress = loadProgress();
  const completeCount = stations.filter((station) => progress[station]).length;
  const percent = Math.round((completeCount / stations.length) * 100);
  const fill = document.getElementById("progressFill");
  const text = document.getElementById("progressText");
  if (fill) fill.style.width = `${percent}%`;
  if (text) text.textContent = `${completeCount} מתוך ${stations.length} תחנות הושלמו`;

  document.querySelectorAll(".complete-button").forEach((button) => {
    const station = button.dataset.complete;
    const isDone = Boolean(progress[station]);
    button.classList.toggle("done", isDone);
    button.textContent = isDone ? "הושלם" : "סיימתי";
  });
}

function initProgressButtons() {
  document.querySelectorAll(".complete-button").forEach((button) => {
    button.addEventListener("click", () => {
      const progress = loadProgress();
      const station = button.dataset.complete;
      progress[station] = !progress[station];
      saveProgress(progress);
      renderProgress();
    });
  });
}

function formatMathText(text) {
  return String(text).replace(/[xyab]/g, (variable) => `<span class="math">${variable}</span>`);
}

function normalizeAnswer(value) {
  return String(value).trim().replace(/\s+/g, " ");
}

function isNumericCorrect(value, answer) {
  if (value === "") return false;
  return Math.abs(Number(value) - Number(answer)) < 0.001;
}

function setFeedback(element, text, isGood) {
  element.className = `feedback ${isGood ? "good" : "bad"}`;
  element.innerHTML = formatMathText(text);
}

function ensureDrillState(data, state) {
  if (!Array.isArray(state.results)) {
    state.results = Array(data.questions.length).fill(null);
  }
}

function recordQuestionResult(root, data, state, isCorrect) {
  state.results[state.index] = isCorrect;
  const steps = root.querySelectorAll(".quiz-step");
  const step = steps[state.index];
  if (step) {
    step.classList.toggle("correct", isCorrect);
    step.classList.toggle("wrong", !isCorrect);
  }
}

function advanceQuestion(data, state) {
  state.index = (state.index + 1) % data.questions.length;
}

function renderQuizProgressHTML(data, state) {
  const steps = data.questions
    .map((_, index) => {
      const status = state.results[index] === true ? " correct" : state.results[index] === false ? " wrong" : "";
      const active = index === state.index ? " active" : "";
      return `<span class="quiz-step${status}${active}"></span>`;
    })
    .join("");
  return `
    <div class="quiz-progress-wrap">
      <p class="quiz-progress-label">פס התקדמות לשאלות בתרגול הזה</p>
      <div class="quiz-progress" style="--step-count: ${data.questions.length}">${steps}</div>
    </div>
  `;
}

function renderChoiceDrill(root, data, state, questionOverride = null) {
  ensureDrillState(data, state);
  const question = questionOverride || data.questions[state.index];
  root.innerHTML = `
    <p class="drill-intro">${formatMathText(data.intro)}</p>
    <div class="question-box">
      <p class="question-count">שאלה ${state.index + 1} מתוך ${data.questions.length}</p>
      ${renderQuizProgressHTML(data, state)}
      <h3>${formatMathText(question.prompt)}</h3>
      <div class="answer-row"></div>
      <p class="feedback" role="status"></p>
      <button class="secondary next-button" type="button">שאלה חדשה</button>
    </div>
  `;

  const row = root.querySelector(".answer-row");
  const feedback = root.querySelector(".feedback");
  question.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.innerHTML = formatMathText(choice);
    button.addEventListener("click", () => {
      const isCorrect = normalizeAnswer(choice) === normalizeAnswer(question.answer);
      recordQuestionResult(root, data, state, isCorrect);
      setFeedback(feedback, isCorrect ? `נכון. ${question.explain}` : `עוד ניסיון. ${question.explain}`, isCorrect);
    });
    row.append(button);
  });

  root.querySelector(".next-button").addEventListener("click", () => {
    advanceQuestion(data, state);
    renderDrill(root, data, state);
  });
}

function renderPairInputs(root, data, state, question, includeEquationChoices = false) {
  root.innerHTML = `
    <p class="drill-intro">${formatMathText(data.intro)}</p>
    <div class="question-box">
      <p class="question-count">שאלה ${state.index + 1} מתוך ${data.questions.length}</p>
      ${renderQuizProgressHTML(data, state)}
      <h3>${formatMathText(question.prompt)}</h3>
      ${includeEquationChoices ? '<p class="sub-label">בחרו את מערכת המשוואות המתאימה:</p><div class="answer-row equation-row"></div>' : ""}
      <div class="pair-answer">
        <label>x <input class="answer-x" type="number" inputmode="decimal" /></label>
        <label>y <input class="answer-y" type="number" inputmode="decimal" /></label>
      </div>
      <div class="button-row">
        <button class="primary check-button" type="button">בדיקה</button>
        <button class="secondary hint-button" type="button">רמז</button>
        <button class="secondary next-button" type="button">שאלה חדשה</button>
      </div>
      <p class="feedback" role="status"></p>
    </div>
  `;

  const feedback = root.querySelector(".feedback");
  let selected = "";
  if (includeEquationChoices) {
    const row = root.querySelector(".equation-row");
    question.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.type = "button";
      button.innerHTML = formatMathText(choice);
      button.addEventListener("click", () => {
        selected = choice;
        row.querySelectorAll("button").forEach((item) => item.classList.remove("selected"));
        button.classList.add("selected");
      });
      row.append(button);
    });
  }

  root.querySelector(".check-button").addEventListener("click", () => {
    const xCorrect = isNumericCorrect(root.querySelector(".answer-x").value, question.answer.x);
    const yCorrect = isNumericCorrect(root.querySelector(".answer-y").value, question.answer.y);
    const equationsCorrect = !includeEquationChoices || normalizeAnswer(selected) === normalizeAnswer(question.equations);
    const isCorrect = xCorrect && yCorrect && equationsCorrect;
    recordQuestionResult(root, data, state, isCorrect);

    if (isCorrect) {
      setFeedback(feedback, `נכון. ${question.explain}`, true);
    } else if (includeEquationChoices && !equationsCorrect) {
      setFeedback(feedback, `התחילו מתרגום נכון של הטקסט. ${question.hint}`, false);
    } else if (xCorrect || yCorrect) {
      setFeedback(feedback, `אחד הערכים נכון. בדקו את הערך השני בהצבה. ${question.hint}`, false);
    } else {
      setFeedback(feedback, `לא בדיוק. ${question.hint}`, false);
    }
  });

  root.querySelector(".hint-button").addEventListener("click", () => {
    feedback.className = "feedback";
    feedback.innerHTML = formatMathText(question.hint);
  });

  root.querySelector(".next-button").addEventListener("click", () => {
    advanceQuestion(data, state);
    renderDrill(root, data, state);
  });
}

function renderPairDrill(root, data, state) {
  ensureDrillState(data, state);
  renderPairInputs(root, data, state, data.questions[state.index], false);
}

function renderTranslateDrill(root, data, state) {
  ensureDrillState(data, state);
  renderPairInputs(root, data, state, data.questions[state.index], true);
}

function renderMixedDrill(root, data, state) {
  ensureDrillState(data, state);
  const question = data.questions[state.index];
  if (question.kind === "choice") {
    renderChoiceDrill(root, data, state, question);
  } else {
    renderPairInputs(root, data, state, question, false);
  }
}

function renderDrill(root, data, state) {
  if (data.type === "choice") renderChoiceDrill(root, data, state);
  if (data.type === "pair") renderPairDrill(root, data, state);
  if (data.type === "translate") renderTranslateDrill(root, data, state);
  if (data.type === "mixed") renderMixedDrill(root, data, state);
}

function initDrills() {
  document.querySelectorAll("[data-drill]").forEach((root) => {
    const data = drillData[root.dataset.drill];
    if (!data) return;
    renderDrill(root, data, { index: 0 });
  });
}

function initPairTester() {
  const xInput = document.getElementById("pairX");
  const yInput = document.getElementById("pairY");
  const result = document.getElementById("pairResult");
  if (!xInput || !yInput || !result) return;

  const update = () => {
    const x = Number(xInput.value);
    const y = Number(yInput.value);
    const sum = x + y;
    const ok = sum === 7;
    result.textContent = `${x} + ${y} = ${sum}. ${ok ? "זה מתאים למשוואה." : "זה עדיין לא מתאים למשוואה."}`;
    result.style.background = ok ? "#eaf7f1" : "#fff0ec";
    result.style.color = ok ? "var(--green)" : "var(--coral)";
  };

  xInput.addEventListener("input", update);
  yInput.addEventListener("input", update);
  update();
}

renderProgress();
initProgressButtons();
initPairTester();
initDrills();
