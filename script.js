const angleQuestions = [
  { text: "זווית של 30°", answer: "חדה" },
  { text: "זווית של 90°", answer: "ישרה" },
  { text: "זווית של 120°", answer: "קהה" },
  { text: "זווית של 150°", answer: "קהה" },
  { text: "זווית של 60°", answer: "חדה" },
];

const shapeQuestions = [
  { text: "4 צלעות שוות ו-4 זוויות ישרות", answer: "ריבוע" },
  { text: "זוגות של צלעות נגדיות שוות ו-4 זוויות ישרות", answer: "מלבן" },
  { text: "4 צלעות שוות, זוויות לא ישרות", answer: "מעוין" },
];

const perimeterQuestions = [
  { text: "מלבן באורך 6 וברוחב 4", answer: 20 },
  { text: "מלבן באורך 9 וברוחב 2", answer: 22 },
  { text: "מלבן באורך 5 וברוחב 7", answer: 24 },
];

const anglePrompt = document.getElementById("angle-question");
const angleFeedback = document.getElementById("angle-feedback");
const shapePrompt = document.getElementById("shape-question");
const shapeFeedback = document.getElementById("shape-feedback");
const perimeterPrompt = document.getElementById("perimeter-question");
const perimeterInput = document.getElementById("perimeter-input");
const perimeterFeedback = document.getElementById("perimeter-feedback");
const perimeterCheck = document.getElementById("perimeter-check");
const perimeterNext = document.getElementById("perimeter-next");

let currentAngle = 0;
let currentShape = 0;
let currentPerimeter = 0;

function pickQuestion(list, previous) {
  let next = Math.floor(Math.random() * list.length);
  if (list.length > 1 && next === previous) {
    next = (next + 1) % list.length;
  }
  return next;
}

function setAngleQuestion() {
  currentAngle = pickQuestion(angleQuestions, currentAngle);
  anglePrompt.textContent = angleQuestions[currentAngle].text;
  angleFeedback.textContent = "";
}

function setShapeQuestion() {
  currentShape = pickQuestion(shapeQuestions, currentShape);
  shapePrompt.textContent = shapeQuestions[currentShape].text;
  shapeFeedback.textContent = "";
}

function setPerimeterQuestion() {
  currentPerimeter = pickQuestion(perimeterQuestions, currentPerimeter);
  perimeterPrompt.textContent = perimeterQuestions[currentPerimeter].text;
  perimeterFeedback.textContent = "";
  perimeterInput.value = "";
}

function handleAngleAnswer(event) {
  const choice = event.currentTarget.dataset.answer;
  const isCorrect = choice === angleQuestions[currentAngle].answer;
  angleFeedback.textContent = isCorrect
    ? "נכון!" : "כמעט. נסו שוב או קחו שאלה חדשה.";
  if (isCorrect) {
    setTimeout(setAngleQuestion, 900);
  }
}

function handleShapeAnswer(event) {
  const choice = event.currentTarget.dataset.shape;
  const isCorrect = choice === shapeQuestions[currentShape].answer;
  shapeFeedback.textContent = isCorrect
    ? "מצוין!" : "עוד רגע. חישבו על הזוויות והצלעות.";
  if (isCorrect) {
    setTimeout(setShapeQuestion, 900);
  }
}

function checkPerimeterAnswer() {
  const value = Number(perimeterInput.value);
  if (!Number.isFinite(value)) {
    perimeterFeedback.textContent = "הכניסו מספר.";
    return;
  }
  const correct = perimeterQuestions[currentPerimeter].answer;
  perimeterFeedback.textContent = value === correct
    ? "מעולה!" : `הפעם לא. ההיקף הנכון: ${correct}`;
}

setAngleQuestion();
setShapeQuestion();
setPerimeterQuestion();

Array.from(document.querySelectorAll('[data-quiz="angles"] .button')).forEach(
  (button) => button.addEventListener("click", handleAngleAnswer)
);

Array.from(document.querySelectorAll('[data-quiz="shapes"] .button')).forEach(
  (button) => button.addEventListener("click", handleShapeAnswer)
);

perimeterCheck.addEventListener("click", checkPerimeterAnswer);
perimeterNext.addEventListener("click", setPerimeterQuestion);
