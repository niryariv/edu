const totalStages = 6;
const completedStages = new Set();

const stageKnowledge = {
  1: {
    known: "נקודה מסמנת מקום מדויק. הגודל של הסימון על המסך אינו הגודל של הנקודה המתמטית.",
    next: "איך מתארים קיר שמוגבל בין שני מקומות?",
    result: "כדי להציב שחקן היינו צריכים מיקום, לא אורך.",
    concept: "נקודה · מקום מדויק",
  },
  2: {
    known: "לקטע יש שתי נקודות קצה.",
    next: "איך מתארים דרך שממשיכה בשני הכיוונים?",
    result: "הקיר התחיל ב־A והסתיים ב־B, ולכן הוא קטע.",
    concept: "קטע · שתי נקודות קצה",
  },
  3: {
    known: "ישר ממשיך ללא סוף בשני הכיוונים.",
    next: "מה מתאים ללייזר שמתחיל במקום אחד וממשיך קדימה?",
    result: "שני חצים מסמנים המשך בשני הכיוונים.",
    concept: "ישר · אפס נקודות קצה",
  },
  4: {
    known: "קרן מתחילה בנקודה אחת וממשיכה בכיוון אחד.",
    next: "האם נוכל לבחור לבד את הכלי המתאים לכל צורך בזירה?",
    result: "הלייזר מתחיל במשגר C וממשיך רק קדימה.",
    concept: "קרן · נקודת קצה אחת",
  },
  5: {
    known: "אפשר לבחור כלי גיאומטרי לפי מספר נקודות הקצה והכיוון.",
    next: "האם אותו כלל יעבוד גם מחוץ למשחק?",
    result: "תכננו זירה שלמה בלי לקבל כל תשובה בנפרד.",
    concept: "כלל בחירה · בודקים קצוות וחצים",
  },
  6: {
    known: "נקודה, קטע, קרן וישר מתארים גם מפה עירונית ולא רק משחק.",
    next: "המשימה הושלמה. נסו להסביר את הכלל במילים שלכם.",
    result: "השתמשנו בכלל במקרה חדש — זו ראיה להבנה, לא רק לזכירת צעדים.",
    concept: "העברה · אותו כלל במצב חדש",
  },
};

const hintSequences = {
  1: [
    "מה צריך לדעת כדי להציב דמות: כמה היא ארוכה, או היכן היא נמצאת?",
    "חפשו מקום אחד מדויק בזירה ולחצו עליו.",
  ],
  2: [
    "הסתכלו על A ועל B. האם הקיר נעצר בשתיהן?",
    "לקיר יש התחלה וסוף — ספרו את שתי נקודות הקצה.",
    "בחרו ‘שתיים’, חברו את A ל־B, ואז הסבירו לפי הקצוות.",
  ],
  3: [
    "חץ מסמן שהציור ממשיך מעבר למה שרואים.",
    "הדרך ממשיכה ימינה וגם שמאלה. חפשו שני חצים.",
  ],
  4: [
    "האם ללייזר יש מקום שממנו הוא יוצא?",
    "יש התחלה אחת, אבל אין סוף בכיוון הירי.",
    "הסימון עם נקודת קצה אחת והמשך קדימה נקרא קרן.",
  ],
  5: [
    "בדקו בכל שורה: האם צריך מקום, שני קצוות, קצה אחד או אפס קצוות?",
    "אוצר=מקום; גדר=שני קצוות; פנס=קצה אחד; כביש אינסופי=אפס קצוות.",
  ],
  6: [
    "עזבו לרגע את שמות החפצים. הסתכלו רק על הקצוות והחצים.",
    "תחנה היא מקום; גשר מחבר שתי גדות; הכביש ממשיך בשני הצדדים.",
    "בראיה המסכמת בחרו ‘מספר נקודות הקצה והחצים’.",
  ],
};

const hintIndexes = {};

function byId(id) {
  return document.getElementById(id);
}

function setFeedback(id, message, kind) {
  const element = byId(id);
  element.textContent = message;
  element.classList.remove("is-success", "is-error");
  if (kind) element.classList.add("is-" + kind);
}

function markPressed(group, selectedButton) {
  group.querySelectorAll("button").forEach((button) => {
    button.setAttribute("aria-pressed", button === selectedButton ? "true" : "false");
  });
}

function addConcept(text) {
  const list = byId("conceptList");
  const empty = list.querySelector(".is-empty");
  if (empty) empty.remove();
  if ([...list.children].some((item) => item.textContent === text)) return;
  const item = document.createElement("li");
  item.textContent = "✓ " + text;
  list.appendChild(item);
}

function completeStage(stage) {
  if (completedStages.has(stage)) return;
  completedStages.add(stage);

  const knowledge = stageKnowledge[stage];
  const section = byId("mission-" + stage);
  section.classList.add("is-complete");
  section.querySelector(".stage-badge").textContent = "הושלם ✓";

  byId("progressCount").textContent = String(completedStages.size);
  byId("progressFill").style.width = (completedStages.size / totalStages) * 100 + "%";
  byId("knownState").textContent = knowledge.known;
  byId("nextState").textContent = knowledge.next;
  byId("resultState").textContent = knowledge.result;
  addConcept(knowledge.concept);

  const nextButton = section.querySelector(".next-button");
  if (nextButton) nextButton.hidden = false;
}

function unlockStage(stage) {
  const nextSection = byId("mission-" + stage);
  nextSection.hidden = false;
  window.setTimeout(() => nextSection.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
}

byId("startCourse").addEventListener("click", () => {
  byId("mission-1").scrollIntoView({ behavior: "smooth", block: "start" });
});

byId("resetCourse").addEventListener("click", () => {
  window.location.reload();
});

document.querySelectorAll(".next-button").forEach((button) => {
  button.addEventListener("click", () => unlockStage(Number(button.dataset.next)));
});

function placeSpawn(event) {
  const arena = byId("spawnArena");
  const rect = arena.getBoundingClientRect();
  const pointerX = event.clientX || rect.left + rect.width / 2;
  const pointerY = event.clientY || rect.top + rect.height / 2;
  const x = Math.max(22, Math.min(rect.width - 22, pointerX - rect.left));
  const y = Math.max(22, Math.min(rect.height - 22, pointerY - rect.top));
  const marker = byId("spawnMarker");
  marker.style.left = x + "px";
  marker.style.top = y + "px";
  marker.hidden = false;
  byId("spawnPrompt").hidden = true;
  byId("pointReflection").hidden = false;
  setFeedback("spawnFeedback", "השחקן A יופיע כאן. בחרתם מקום אחד מדויק בתוך הזירה.", "success");
}

byId("spawnArena").addEventListener("click", placeSpawn);
byId("spawnArena").addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    const rect = byId("spawnArena").getBoundingClientRect();
    placeSpawn({ clientX: rect.left + rect.width / 2, clientY: rect.top + rect.height / 2 });
  }
});

document.querySelector('[data-group="point-reflection"]').addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  markPressed(event.currentTarget, button);
  if (button.dataset.value === "location") {
    setFeedback("pointReflectionFeedback", "בדיוק. נקודה מציינת מיקום מדויק — לא אורך ולא שטח.", "success");
    completeStage(1);
  } else {
    setFeedback("pointReflectionFeedback", "הסימון נראה גדול כדי שנוכל לראות אותו, אבל לא מדדנו אורך. מה כן בחרנו?", "error");
  }
});

document.querySelector('[data-group="segment-prediction"]').addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  markPressed(event.currentTarget, button);
  if (button.dataset.value === "2") {
    setFeedback("segmentPredictionFeedback", "ניבוי טוב: הקיר מתחיל ב־A ומסתיים ב־B, ולכן יש לו שני קצוות.", "success");
    byId("wallAction").hidden = false;
  } else {
    setFeedback("segmentPredictionFeedback", "בדקו שוב: האם אפשר להצביע גם על המקום שבו הקיר מתחיל וגם על המקום שבו הוא מסתיים?", "error");
  }
});

byId("buildWall").addEventListener("click", () => {
  byId("wallBoard").classList.add("is-drawn");
  byId("segmentExplanation").hidden = false;
  setFeedback("wallFeedback", "הקיר נבנה בין שתי נקודות הקצה. הפעולה הצליחה — עכשיו מסבירים למה.", "success");
});

document.querySelector('[data-group="segment-explanation"]').addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  markPressed(event.currentTarget, button);
  if (button.dataset.value === "bounded") {
    setFeedback("segmentExplanationFeedback", "נכון. הצבע יכול להשתנות; שתי נקודות הקצה הן הראיה שזה קטע.", "success");
    completeStage(2);
  } else {
    setFeedback("segmentExplanationFeedback", "צבע אינו תכונה גיאומטרית. אילו סימנים יישארו גם אם נצבע את הקיר אחרת?", "error");
  }
});

document.querySelector('[data-group="line-choice"]').addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  markPressed(event.currentTarget, button);
  if (button.dataset.value === "line") {
    setFeedback("lineFeedback", "נכון. שני החצים הם הראיה שהישר ממשיך בשני הכיוונים ואין לו נקודות קצה.", "success");
    completeStage(3);
  } else if (button.dataset.value === "ray") {
    setFeedback("lineFeedback", "האפשרות הזאת ממשיכה רק בכיוון אחד. הדרך שלנו צריכה להמשיך בשניהם.", "error");
  } else {
    setFeedback("lineFeedback", "כאן רואים שני קצוות, ולכן המסלול נעצר. חפשו אפשרות שממשיכה משני הצדדים.", "error");
  }
});

document.querySelector('[data-group="ray-choice"]').addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  markPressed(event.currentTarget, button);
  if (button.dataset.value === "ray") {
    setFeedback("rayFeedback", "בדיוק. קרן מתחילה בנקודה C וממשיכה בכיוון אחד — כמו הלייזר.", "success");
    completeStage(4);
  } else {
    setFeedback("rayFeedback", "בדקו את הראיות: יש מקום התחלה אחד, והלייזר אינו נעצר במטרה שבתמונה.", "error");
  }
});

function checkSelectGroup(containerId) {
  const selects = [...byId(containerId).querySelectorAll("select")];
  const unanswered = selects.filter((select) => !select.value);
  const incorrect = selects.filter((select) => select.value && select.value !== select.dataset.answer);
  selects.forEach((select) => {
    select.dataset.state = !select.value ? "empty" : select.value === select.dataset.answer ? "correct" : "incorrect";
  });
  return { unanswered, incorrect, total: selects.length };
}

byId("checkArena").addEventListener("click", () => {
  const result = checkSelectGroup("arenaMatching");
  if (result.unanswered.length) {
    setFeedback("arenaFeedback", "נשארו " + result.unanswered.length + " בחירות פתוחות. השלימו אותן ואז בדקו שוב.", "error");
    return;
  }
  if (result.incorrect.length) {
    setFeedback("arenaFeedback", "יש " + result.incorrect.length + " התאמות שעדיין אינן מתאימות. בדקו בכל אחת את מספר הקצוות.", "error");
    return;
  }
  setFeedback("arenaFeedback", "כל התכנון נכון. הפעם בחרתם ארבעה כלים בעצמכם לפי הראיות.", "success");
  completeStage(5);
});

byId("checkTransfer").addEventListener("click", () => {
  const result = checkSelectGroup("cityMatching");
  const reason = document.querySelector('input[name="transfer-reason"]:checked');
  if (result.unanswered.length || !reason) {
    setFeedback("transferFeedback", "השלימו את שלוש ההתאמות ואת שאלת הראיה, ואז בדקו שוב.", "error");
    return;
  }
  if (result.incorrect.length || reason.value !== "endpoints") {
    setFeedback("transferFeedback", "עוד לא. שמות המקומות והצבעים השתנו, אבל הכלל נשאר: בדקו קצוות וחצים.", "error");
    return;
  }
  setFeedback("transferFeedback", "הצלחתם להעביר את הכלל מזירת משחק למפה עירונית. זו ראיה להבנה אמיתית.", "success");
  byId("certificate").hidden = false;
  completeStage(6);
  window.setTimeout(() => byId("certificate").scrollIntoView({ behavior: "smooth", block: "center" }), 120);
});

document.querySelectorAll("select").forEach((select) => {
  select.addEventListener("change", () => select.removeAttribute("data-state"));
});

document.querySelectorAll(".hint-button").forEach((button) => {
  button.addEventListener("click", () => {
    const stage = Number(button.dataset.hint);
    const sequence = hintSequences[stage];
    const index = hintIndexes[stage] || 0;
    byId("hint-" + stage).textContent = sequence[Math.min(index, sequence.length - 1)];
    hintIndexes[stage] = Math.min(index + 1, sequence.length - 1);
    button.textContent = hintIndexes[stage] >= sequence.length - 1 ? "הרמז המפורש" : "עוד רמז";
  });
});
