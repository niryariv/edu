const exam = document.getElementById("exam");
const cards = [...exam.querySelectorAll(".question-card")];
const result = document.getElementById("result");
const formMessage = document.getElementById("form-message");

function unansweredInputs() {
  return cards
    .map((card) => card.querySelector("input"))
    .filter((input) => input.value.trim() === "");
}

exam.addEventListener("submit", (event) => {
  event.preventDefault();

  const unanswered = unansweredInputs();
  if (unanswered.length > 0) {
    formMessage.textContent = `נשארו ${unanswered.length} שאלות ללא תשובה. השלימו אותן כדי לקבל ציון.`;
    unanswered[0].focus();
    return;
  }

  let correctAnswers = 0;

  cards.forEach((card, index) => {
    const input = card.querySelector("input");
    const feedback = card.querySelector(".feedback");
    const isCorrect = Number(input.value) === Number(card.dataset.answer);

    card.classList.remove("is-correct", "is-incorrect");
    card.classList.add(isCorrect ? "is-correct" : "is-incorrect");
    feedback.textContent = isCorrect
      ? "נכון · 4 נקודות"
      : `התשובה הנכונה: ${card.dataset.answer} · 0 נקודות`;
    input.disabled = true;
    input.setAttribute("aria-invalid", isCorrect ? "false" : "true");
    input.setAttribute("aria-label", `תשובה לשאלה ${index + 1}, ${isCorrect ? "נכונה" : "שגויה"}`);

    if (isCorrect) correctAnswers += 1;
  });

  const score = correctAnswers * 4;
  document.getElementById("score").textContent = String(score);
  document.getElementById("result-summary").textContent =
    `ענית נכון על ${correctAnswers} מתוך 25 שאלות. אפשר לעבור על הסימון ליד כל שאלה או להתחיל מבחן חדש.`;
  formMessage.textContent = "המבחן הוגש ונבדק.";
  result.hidden = false;
  result.focus();
  result.scrollIntoView({ behavior: "smooth", block: "center" });
});

document.getElementById("restart").addEventListener("click", () => {
  exam.reset();
  cards.forEach((card, index) => {
    const input = card.querySelector("input");
    card.classList.remove("is-correct", "is-incorrect");
    card.querySelector(".feedback").textContent = "";
    input.disabled = false;
    input.removeAttribute("aria-invalid");
    input.removeAttribute("aria-label");
  });
  formMessage.textContent = "ודאו שעניתם על כל 25 השאלות לפני ההגשה.";
  result.hidden = true;
  exam.scrollIntoView({ behavior: "smooth", block: "start" });
  document.getElementById("q1").focus({ preventScroll: true });
});
