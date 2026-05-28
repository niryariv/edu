const progressKey = "percentages-course-progress-v2";
const stations = ["idea", "models", "calculate", "change", "practice", "review"];

const drillData = {
  "idea-basic": {
    type: "numeric",
    intro: "כתבו כמה חלקים מתוך 100 מתאימים לאחוז.",
    questions: [
      { prompt: "כמה חלקים מתוך 100 הם 18%?", answer: 18, hint: "האחוז עצמו אומר כמה מתוך 100.", explain: "18% הם 18 מתוך 100." },
      { prompt: "כמה אחוזים הם 64 חלקים מתוך 100?", answer: 64, hint: "כשיש 100 חלקים, מספר החלקים הוא האחוז.", explain: "64 מתוך 100 הם 64%." },
      { prompt: "במבחן יש 100 נקודות. דנה קיבלה 91 נקודות. כמה אחוזים זה?", answer: 91, hint: "השלם הוא 100 נקודות.", explain: "91 נקודות מתוך 100 הן 91%." },
      { prompt: "בציור צבועים 7 חלקים מתוך 100. כמה אחוזים צבועים?", answer: 7, hint: "גם מספר קטן מתוך 100 הוא אחוז.", explain: "7 מתוך 100 הם 7%." },
    ],
  },
  "idea-text": {
    type: "translate",
    intro: "קראו את הטקסט. קודם בחרו את החישוב, ואז כתבו את התשובה.",
    questions: [
      {
        prompt: "בסקר של 100 תלמידים, 43 תלמידים אמרו שהם מעדיפים ללמוד עם מוזיקה. כמה אחוזים העדיפו ללמוד עם מוזיקה?",
        equation: "43 מתוך 100 = 43%",
        choices: ["43 מתוך 100 = 43%", "100 - 43 = 57%", "43 × 100 = 4300%"],
        answer: 43,
        hint: "הטקסט כבר אומר מתוך 100.",
        explain: "השלם הוא 100 תלמידים, ולכן 43 תלמידים הם 43%.",
      },
      {
        prompt: "במשחק מחשב יש 100 שלבים. יואב עבר 72 שלבים. איזה אחוז מהמשחק הוא עבר?",
        equation: "72 מתוך 100 = 72%",
        choices: ["100 ÷ 72", "72 מתוך 100 = 72%", "100 - 72 = 28%"],
        answer: 72,
        hint: "שואלים איזה חלק מתוך כל המשחק כבר הושלם.",
        explain: "72 שלבים מתוך 100 הם 72%.",
      },
      {
        prompt: "באריזה יש 100 מדבקות. 15 מדבקות הן כחולות. איזה אחוז מהמדבקות כחולות?",
        equation: "15 מתוך 100 = 15%",
        choices: ["100 + 15", "15 מתוך 100 = 15%", "100 ÷ 15"],
        answer: 15,
        hint: "השלם הוא כל 100 המדבקות.",
        explain: "15 מתוך 100 מדבקות הן 15%.",
      },
    ],
  },
  "models-convert": {
    type: "choice",
    intro: "בחרו את הייצוג השווה.",
    questions: [
      { prompt: "איזה שבר שווה ל־50%?", choices: ["1/5", "1/2", "1/50"], answer: "1/2", explain: "50% הם חצי מהשלם." },
      { prompt: "איזה אחוז שווה ל־0.25?", choices: ["2.5%", "25%", "250%"], answer: "25%", explain: "0.25 הם 25 מאיות." },
      { prompt: "איזה עשרוני שווה ל־75%?", choices: ["0.75", "7.5", "0.075"], answer: "0.75", explain: "75% הם 75 מתוך 100, כלומר 0.75." },
      { prompt: "איזה שבר שווה ל־20%?", choices: ["1/2", "1/5", "1/20"], answer: "1/5", explain: "20 מתוך 100 מצטמצם ל־1 מתוך 5." },
      { prompt: "איזה אחוז שווה ל־1/10?", choices: ["1%", "10%", "100%"], answer: "10%", explain: "עשירית מהשלם היא 10%." },
    ],
  },
  "models-text": {
    type: "translate",
    intro: "שימו לב למילים כמו חצי, רבע, עשירית ושלושה רבעים.",
    questions: [
      {
        prompt: "רוני שתתה רבע מבקבוק מים. כמה אחוזים מהבקבוק היא שתתה?",
        equation: "1/4 = 25%",
        choices: ["1/4 = 25%", "1/4 = 4%", "100 - 4 = 96%"],
        answer: 25,
        hint: "רבע הוא אחד מתוך ארבעה חלקים שווים.",
        explain: "רבע מהשלם הוא 25%.",
      },
      {
        prompt: "בכיתה חצי מהתלמידים בחרו כדורגל. איזה אחוז בחרו כדורגל?",
        equation: "1/2 = 50%",
        choices: ["1/2 = 20%", "1/2 = 50%", "2 × 100 = 200%"],
        answer: 50,
        hint: "חצי הוא אחד מתוך שני חלקים שווים.",
        explain: "חצי מהשלם הוא 50%.",
      },
      {
        prompt: "שלושה רבעים מהפיצה נאכלו. כמה אחוזים מהפיצה נאכלו?",
        equation: "3/4 = 75%",
        choices: ["3/4 = 34%", "3/4 = 75%", "100 - 3 = 97%"],
        answer: 75,
        hint: "רבע הוא 25%, אז שלושה רבעים הם 3 פעמים 25%.",
        explain: "3/4 מהשלם הם 75%.",
      },
    ],
  },
  "amount-basic": {
    type: "numeric",
    intro: "חשבו אחוז מתוך כמות. אפשר להשתמש בנוסחה: כמות × אחוז ÷ 100.",
    questions: [
      { prompt: "כמה הם 10% מתוך 90?", answer: 9, hint: "10% הם עשירית.", explain: "90 ÷ 10 = 9." },
      { prompt: "כמה הם 25% מתוך 120?", answer: 30, hint: "25% הם רבע.", explain: "רבע מ־120 הוא 30." },
      { prompt: "כמה הם 30% מתוך 80?", answer: 24, hint: "10% מ־80 הם 8.", explain: "30% הם 3 × 8 = 24." },
      { prompt: "כמה הם 15% מתוך 200?", answer: 30, hint: "10% הם 20 ו־5% הם 10.", explain: "20 + 10 = 30." },
      { prompt: "כמה הם 5% מתוך 360?", answer: 18, hint: "5% הם חצי מ־10%.", explain: "10% הם 36, ולכן 5% הם 18." },
      { prompt: "כמה הם 12% מתוך 150?", answer: 18, hint: "אפשר לחשב 150 × 12 ÷ 100.", explain: "150 × 0.12 = 18." },
    ],
  },
  "amount-text": {
    type: "translate",
    intro: "המטרה: לזהות מהי הכמות השלמה ומהו האחוז המבוקש.",
    questions: [
      {
        prompt: "בכיתה יש 30 תלמידים. 10% מהם הגיעו באופניים. כמה תלמידים הגיעו באופניים?",
        equation: "30 × 10 ÷ 100",
        choices: ["30 × 10 ÷ 100", "30 + 10", "30 - 10"],
        answer: 3,
        hint: "מחפשים חלק מתוך 30 תלמידים.",
        explain: "10% מ־30 הם 3 תלמידים.",
      },
      {
        prompt: "בבית ספר יש 240 תלמידים. 25% מהם משתתפים בחוגים אחרי הלימודים. כמה תלמידים משתתפים בחוגים?",
        equation: "240 × 25 ÷ 100",
        choices: ["240 × 25 ÷ 100", "240 + 25", "240 - 25"],
        answer: 60,
        hint: "מחפשים חלק מתוך 240 תלמידים.",
        explain: "25% הם רבע, ורבע מ־240 הוא 60.",
      },
      {
        prompt: "ספר עולה 80 ש\"ח. תמר שילמה מקדמה של 15% מהמחיר. כמה שקלים שילמה כמקדמה?",
        equation: "80 × 15 ÷ 100",
        choices: ["80 ÷ 15", "80 × 15 ÷ 100", "80 + 15"],
        answer: 12,
        hint: "מקדמה היא חלק מהמחיר, לא מחיר חדש.",
        explain: "15% מ־80 הם 12.",
      },
      {
        prompt: "במבחן היו 50 שאלות. עידו ענה נכון על 80% מהשאלות. על כמה שאלות ענה נכון?",
        equation: "50 × 80 ÷ 100",
        choices: ["50 × 80 ÷ 100", "80 - 50", "50 ÷ 80"],
        answer: 40,
        hint: "80% מתוך 50 שאלות.",
        explain: "50 × 0.8 = 40.",
      },
      {
        prompt: "בקבוצה יש 36 שחקנים. 75% הגיעו לאימון. כמה שחקנים הגיעו?",
        equation: "36 × 75 ÷ 100",
        choices: ["36 + 75", "36 × 75 ÷ 100", "75 - 36"],
        answer: 27,
        hint: "75% הם שלושה רבעים.",
        explain: "רבע מ־36 הוא 9, ולכן שלושה רבעים הם 27.",
      },
    ],
  },
  "change-basic": {
    type: "numeric",
    intro: "חשבו מחיר או כמות אחרי הנחה/עלייה.",
    questions: [
      { prompt: "מחיר חולצה הוא 120 ש\"ח. יש 10% הנחה. מה המחיר אחרי ההנחה?", answer: 108, hint: "10% מ־120 הם 12, ואז מחסרים.", explain: "120 - 12 = 108." },
      { prompt: "מנוי עולה 80 ש\"ח. המחיר התייקר ב־10%. מה המחיר החדש?", answer: 88, hint: "10% מ־80 הם 8, ואז מוסיפים.", explain: "80 + 8 = 88." },
      { prompt: "ספר עולה 50 ש\"ח. יש עליו 10% הנחה. מה המחיר אחרי ההנחה?", answer: 45, hint: "10% מ־50 הם 5.", explain: "50 - 5 = 45." },
      { prompt: "כרטיס עולה 60 ש\"ח. המחיר עלה ב־10%. מה המחיר החדש?", answer: 66, hint: "10% מ־60 הם 6.", explain: "60 + 6 = 66." },
      { prompt: "תיק עולה 200 ש\"ח. יש עליו 15% הנחה. מה המחיר אחרי ההנחה?", answer: 170, hint: "15% מ־200 הם 30.", explain: "200 - 30 = 170." },
      { prompt: "כרטיס עולה 60 ש\"ח. המחיר עלה ב־20%. מה המחיר החדש?", answer: 72, hint: "20% מ־60 הם 12.", explain: "60 + 12 = 72." },
      { prompt: "מחיר משחק הוא 150 ש\"ח. יש 40% הנחה. מה המחיר לאחר ההנחה?", answer: 90, hint: "40% מ־150 הם 60.", explain: "150 - 60 = 90." },
    ],
  },
  "change-text": {
    type: "translate",
    intro: "בחרו אם צריך להוסיף, לחסר, או רק למצוא חלק.",
    questions: [
      {
        prompt: "מחיר מחברת הוא 30 ש\"ח. בקופה מקבלים 10% הנחה. כמה משלמים?",
        equation: "30 - (30 × 10 ÷ 100)",
        choices: ["30 × 10 ÷ 100", "30 - (30 × 10 ÷ 100)", "30 + 10"],
        answer: 27,
        hint: "שואלים כמה משלמים אחרי ההנחה, לכן צריך לחסר את ההנחה מהמחיר המקורי.",
        explain: "10% מ־30 הם 3, ולכן משלמים 27.",
      },
      {
        prompt: "מחיר שיעור פרטי היה 100 ש\"ח ועלה ב־10%. מה המחיר החדש?",
        equation: "100 + (100 × 10 ÷ 100)",
        choices: ["100 - 10", "100 + (100 × 10 ÷ 100)", "100 × 10"],
        answer: 110,
        hint: "עלה ב־10% פירושו מוסיפים 10% למחיר המקורי.",
        explain: "10% מ־100 הם 10, ולכן המחיר החדש הוא 110.",
      },
      {
        prompt: "אופניים עלו 900 ש\"ח. לקראת החג המחיר ירד ב־20%. מה המחיר החדש?",
        equation: "900 - (900 × 20 ÷ 100)",
        choices: ["900 + 20", "900 - (900 × 20 ÷ 100)", "900 × 20"],
        answer: 720,
        hint: "ירד ב־20% פירושו מחסרים 20% מהמחיר המקורי.",
        explain: "20% מ־900 הם 180, ולכן 900 - 180 = 720.",
      },
      {
        prompt: "מספר המשתתפים בחוג היה 40. השנה הוא גדל ב־25%. כמה משתתפים יש השנה?",
        equation: "40 + (40 × 25 ÷ 100)",
        choices: ["40 + (40 × 25 ÷ 100)", "40 - 25", "40 × 25"],
        answer: 50,
        hint: "גדל ב־25% פירושו מוסיפים רבע מהכמות המקורית.",
        explain: "25% מ־40 הם 10, ולכן יש 50 משתתפים.",
      },
      {
        prompt: "מחיר אוזניות הוא 240 ש\"ח. בחנות כתוב: 30% הנחה בקופה. כמה משלמים בקופה?",
        equation: "240 - (240 × 30 ÷ 100)",
        choices: ["240 × 30 ÷ 100", "240 - (240 × 30 ÷ 100)", "240 + 30"],
        answer: 168,
        hint: "שואלים כמה משלמים אחרי ההנחה, לא מה גובה ההנחה.",
        explain: "30% מ־240 הם 72, ולכן משלמים 168.",
      },
    ],
  },
  "final-translate": {
    type: "translate",
    intro: "בכל שאלה יש לבחור חישוב מתאים לפני שמקלידים תשובה.",
    questions: [
      {
        prompt: "מחיר עיפרון הוא 10 ש\"ח ויש 10% הנחה. כמה משלמים?",
        equation: "10 - (10 × 10 ÷ 100)",
        choices: ["10 × 10 ÷ 100", "10 - (10 × 10 ÷ 100)", "10 + 10"],
        answer: 9,
        hint: "הנחה אומרת לחסר מהמחיר המקורי.",
        explain: "10% מ־10 הם 1, ולכן משלמים 9.",
      },
      {
        prompt: "בחנות יש מבצע: ספר שמחירו 70 ש\"ח נמכר ב־20% הנחה. כמה משלמים?",
        equation: "70 - (70 × 20 ÷ 100)",
        choices: ["70 × 20 ÷ 100", "70 - (70 × 20 ÷ 100)", "70 + 20"],
        answer: 56,
        hint: "מבקשים מחיר אחרי הנחה.",
        explain: "20% מ־70 הם 14, ולכן משלמים 56.",
      },
      {
        prompt: "בכיתה יש 32 תלמידים. 25% מהם הגיעו באופניים. כמה תלמידים הגיעו באופניים?",
        equation: "32 × 25 ÷ 100",
        choices: ["32 × 25 ÷ 100", "32 - 25", "32 + 25"],
        answer: 8,
        hint: "זו לא הנחה. מחפשים חלק מתוך 32.",
        explain: "25% הם רבע, ורבע מ־32 הוא 8.",
      },
      {
        prompt: "מחיר כרטיס היה 50 ש\"ח ועלה ב־12%. מה המחיר החדש?",
        equation: "50 + (50 × 12 ÷ 100)",
        choices: ["50 - 12", "50 + (50 × 12 ÷ 100)", "50 × 12"],
        answer: 56,
        hint: "עלה ב־12% פירושו להוסיף 12% מהמחיר המקורי.",
        explain: "12% מ־50 הם 6, ולכן המחיר החדש הוא 56.",
      },
      {
        prompt: "במבחן של 80 נקודות, נועה קיבלה 75% מהנקודות. כמה נקודות קיבלה?",
        equation: "80 × 75 ÷ 100",
        choices: ["80 × 75 ÷ 100", "80 - 75", "75 ÷ 80"],
        answer: 60,
        hint: "מחפשים 75% מתוך 80.",
        explain: "75% הם שלושה רבעים, ושלושה רבעים מ־80 הם 60.",
      },
    ],
  },
  "final-challenge": {
    type: "translate",
    intro: "כאן יש נתונים שעלולים לבלבל. סמנו רק את הנתונים שצריך.",
    questions: [
      {
        prompt: "בחוג רובוטיקה היו 50 תלמידים בשנה שעברה. השנה הצטרפו 10 תלמידים חדשים, כלומר עלייה של 20%. כמה תלמידים יש השנה?",
        equation: "50 + (50 × 20 ÷ 100)",
        choices: ["50 + 20", "50 + (50 × 20 ÷ 100)", "50 × 10 ÷ 100"],
        answer: 60,
        hint: "אפשר להשתמש ב־10 תלמידים או ב־20%, אבל לא לערבב לא נכון.",
        explain: "20% מ־50 הם 10, ולכן השנה יש 60 תלמידים.",
      },
      {
        prompt: "מחיר משחק א הוא 80 ש\"ח ויש עליו 25% הנחה. מחיר משחק ב הוא 100 ש\"ח ויש עליו 40% הנחה. מה המחיר של משחק ב אחרי ההנחה?",
        equation: "100 - (100 × 40 ÷ 100)",
        choices: ["80 - (80 × 25 ÷ 100)", "100 - (100 × 40 ÷ 100)", "100 × 25 ÷ 100"],
        answer: 60,
        hint: "שואלים רק על משחק ב.",
        explain: "40% מ־100 הם 40, ולכן משחק ב עולה 60.",
      },
      {
        prompt: "אחרי הנחה של 30%, מחיר תיק הוא 140 ש\"ח. איזה אחוז מהמחיר המקורי משלמים אחרי ההנחה?",
        equation: "100% - 30%",
        choices: ["100% - 30%", "140 × 30 ÷ 100", "100% + 30%"],
        answer: 70,
        hint: "לא שואלים מה היה המחיר המקורי, אלא איזה חלק נשאר.",
        explain: "אם הורידו 30%, נשאר לשלם 70% מהמחיר המקורי.",
      },
      {
        prompt: "במבצע כתוב: קונים מוצר ב־200 ש\"ח ומשלמים רק 160 ש\"ח. כמה אחוזי הנחה קיבלתם?",
        equation: "(200 - 160) ÷ 200 × 100",
        choices: ["160 ÷ 200 × 100", "(200 - 160) ÷ 200 × 100", "200 - 160"],
        answer: 20,
        hint: "קודם מוצאים את גובה ההנחה בשקלים, ואז משווים למחיר המקורי.",
        explain: "ההנחה היא 40 ש\"ח. 40 מתוך 200 הם 20%.",
      },
    ],
  },
  "review-all": {
    type: "translate",
    intro: "30 שאלות מכל הקורס. אם טעיתם, המשיכו: שאלות נוספות מתקנות את האדומים עד שהכול ירוק.",
    questions: [
      {
        prompt: "בציור יש 100 משבצות, ו־12 מהן צבועות. כמה אחוזים צבועים?",
        equation: "12 מתוך 100 = 12%",
        choices: ["12 מתוך 100 = 12%", "100 - 12", "12 × 100"],
        answer: 12,
        hint: "כשהשלם הוא 100, מספר המשבצות הוא האחוז.",
        explain: "12 מתוך 100 הם 12%.",
      },
      {
        prompt: "במשחק יש 100 נקודות. מיה קיבלה 87 נקודות. כמה אחוזים זה?",
        equation: "87 מתוך 100 = 87%",
        choices: ["100 - 87", "87 מתוך 100 = 87%", "87 × 100"],
        answer: 87,
        hint: "השלם הוא 100 נקודות.",
        explain: "87 נקודות מתוך 100 הן 87%.",
      },
      {
        prompt: "בסקר של 100 ילדים, 6 בחרו גלידת וניל. כמה אחוזים בחרו וניל?",
        equation: "6 מתוך 100 = 6%",
        choices: ["100 ÷ 6", "6 מתוך 100 = 6%", "100 - 6"],
        answer: 6,
        hint: "גם מספר קטן מתוך 100 הוא אחוז.",
        explain: "6 מתוך 100 הם 6%.",
      },
      {
        prompt: "איזה אחוז שווה לחצי?",
        equation: "1/2 = 50%",
        choices: ["1/2 = 50%", "1/2 = 20%", "2 × 100 = 200%"],
        answer: 50,
        hint: "חצי הוא אחד מתוך שני חלקים שווים.",
        explain: "חצי מהשלם הוא 50%.",
      },
      {
        prompt: "איזה אחוז שווה לרבע?",
        equation: "1/4 = 25%",
        choices: ["1/4 = 4%", "1/4 = 25%", "100 - 4 = 96%"],
        answer: 25,
        hint: "ארבעה רבעים הם 100%, לכן רבע אחד הוא 25%.",
        explain: "רבע מהשלם הוא 25%.",
      },
      {
        prompt: "איזה אחוז שווה לעשירית?",
        equation: "1/10 = 10%",
        choices: ["1/10 = 1%", "1/10 = 10%", "10 × 100 = 1000%"],
        answer: 10,
        hint: "עשירית היא אחד מתוך 10 חלקים.",
        explain: "עשירית מהשלם היא 10%.",
      },
      {
        prompt: "איזה אחוז שווה ל־0.75?",
        equation: "0.75 = 75%",
        choices: ["0.75 = 75%", "0.75 = 7.5%", "0.75 = 750%"],
        answer: 75,
        hint: "0.75 הם 75 מאיות.",
        explain: "75 מאיות הן 75%.",
      },
      {
        prompt: "כמה הם 10% מתוך 70?",
        equation: "70 × 10 ÷ 100",
        choices: ["70 × 10 ÷ 100", "70 + 10", "70 - 10"],
        answer: 7,
        hint: "10% הם עשירית.",
        explain: "70 ÷ 10 = 7.",
      },
      {
        prompt: "כמה הם 50% מתוך 36?",
        equation: "36 × 50 ÷ 100",
        choices: ["36 ÷ 50", "36 × 50 ÷ 100", "36 + 50"],
        answer: 18,
        hint: "50% הם חצי.",
        explain: "חצי מ־36 הוא 18.",
      },
      {
        prompt: "כמה הם 25% מתוך 80?",
        equation: "80 × 25 ÷ 100",
        choices: ["80 × 25 ÷ 100", "80 - 25", "80 + 25"],
        answer: 20,
        hint: "25% הם רבע.",
        explain: "רבע מ־80 הוא 20.",
      },
      {
        prompt: "כמה הם 20% מתוך 45?",
        equation: "45 × 20 ÷ 100",
        choices: ["45 + 20", "45 × 20 ÷ 100", "45 - 20"],
        answer: 9,
        hint: "20% הם חמישית.",
        explain: "חמישית מ־45 היא 9.",
      },
      {
        prompt: "כמה הם 15% מתוך 60?",
        equation: "60 × 15 ÷ 100",
        choices: ["60 × 15 ÷ 100", "60 ÷ 15", "60 + 15"],
        answer: 9,
        hint: "10% מ־60 הם 6, ו־5% הם 3.",
        explain: "6 + 3 = 9.",
      },
      {
        prompt: "כמה הם 75% מתוך 48?",
        equation: "48 × 75 ÷ 100",
        choices: ["48 + 75", "48 × 75 ÷ 100", "75 - 48"],
        answer: 36,
        hint: "75% הם שלושה רבעים.",
        explain: "רבע מ־48 הוא 12, ושלושה רבעים הם 36.",
      },
      {
        prompt: "מחיר מחברת הוא 20 ש\"ח ויש 10% הנחה. כמה משלמים?",
        equation: "20 - (20 × 10 ÷ 100)",
        choices: ["20 × 10 ÷ 100", "20 - (20 × 10 ÷ 100)", "20 + 10"],
        answer: 18,
        hint: "הנחה אומרת לחסר מהמחיר המקורי.",
        explain: "10% מ־20 הם 2, ולכן משלמים 18.",
      },
      {
        prompt: "מחיר כרטיס הוא 40 ש\"ח ועלה ב־10%. מה המחיר החדש?",
        equation: "40 + (40 × 10 ÷ 100)",
        choices: ["40 - 10", "40 + (40 × 10 ÷ 100)", "40 × 10"],
        answer: 44,
        hint: "עלה ב־10% אומר להוסיף 10% למחיר המקורי.",
        explain: "10% מ־40 הם 4, ולכן המחיר החדש הוא 44.",
      },
      {
        prompt: "חולצה עולה 120 ש\"ח ויש עליה 25% הנחה. מה המחיר אחרי ההנחה?",
        equation: "120 - (120 × 25 ÷ 100)",
        choices: ["120 - (120 × 25 ÷ 100)", "120 × 25 ÷ 100", "120 + 25"],
        answer: 90,
        hint: "25% הם רבע, ואחרי הנחה מחסרים.",
        explain: "רבע מ־120 הוא 30, ולכן 120 - 30 = 90.",
      },
      {
        prompt: "מספר המשתתפים בחוג היה 30 וגדל ב־20%. כמה משתתפים יש עכשיו?",
        equation: "30 + (30 × 20 ÷ 100)",
        choices: ["30 + 20", "30 + (30 × 20 ÷ 100)", "30 × 20"],
        answer: 36,
        hint: "גדל ב־20% אומר להוסיף 20% מהכמות המקורית.",
        explain: "20% מ־30 הם 6, ולכן יש 36 משתתפים.",
      },
      {
        prompt: "מחיר תיק הוא 150 ש\"ח ויש 40% הנחה. כמה משלמים?",
        equation: "150 - (150 × 40 ÷ 100)",
        choices: ["150 × 40 ÷ 100", "150 - (150 × 40 ÷ 100)", "150 + 40"],
        answer: 90,
        hint: "שואלים מחיר אחרי הנחה, לא את גובה ההנחה.",
        explain: "40% מ־150 הם 60, ולכן משלמים 90.",
      },
      {
        prompt: "ספר עלה 80 ש\"ח והתייקר ב־15%. מה המחיר החדש?",
        equation: "80 + (80 × 15 ÷ 100)",
        choices: ["80 + (80 × 15 ÷ 100)", "80 - 15", "80 × 15"],
        answer: 92,
        hint: "התייקרות אומרת להוסיף.",
        explain: "15% מ־80 הם 12, ולכן 80 + 12 = 92.",
      },
      {
        prompt: "בכיתה יש 28 תלמידים. 25% מהם הגיעו ברגל. כמה תלמידים הגיעו ברגל?",
        equation: "28 × 25 ÷ 100",
        choices: ["28 × 25 ÷ 100", "28 - 25", "28 + 25"],
        answer: 7,
        hint: "זו לא הנחה. מחפשים חלק מתוך 28.",
        explain: "25% הם רבע, ורבע מ־28 הוא 7.",
      },
      {
        prompt: "במבחן של 60 נקודות, רוני קיבל 80% מהנקודות. כמה נקודות קיבל?",
        equation: "60 × 80 ÷ 100",
        choices: ["60 - 80", "60 × 80 ÷ 100", "80 ÷ 60"],
        answer: 48,
        hint: "מחפשים 80% מתוך 60.",
        explain: "60 × 0.8 = 48.",
      },
      {
        prompt: "בחנות יש 50 כדורים. 30% מהם אדומים. כמה כדורים אדומים יש?",
        equation: "50 × 30 ÷ 100",
        choices: ["50 × 30 ÷ 100", "50 + 30", "50 - 30"],
        answer: 15,
        hint: "מחפשים חלק מהכדורים.",
        explain: "30% מ־50 הם 15.",
      },
      {
        prompt: "מחיר משחק הוא 90 ש\"ח. בקופה יש 20% הנחה. כמה משלמים?",
        equation: "90 - (90 × 20 ÷ 100)",
        choices: ["90 × 20 ÷ 100", "90 - (90 × 20 ÷ 100)", "90 + 20"],
        answer: 72,
        hint: "הנחה בקופה מורידה מהמחיר.",
        explain: "20% מ־90 הם 18, ולכן משלמים 72.",
      },
      {
        prompt: "בבית ספר היו 200 תלמידים. השנה המספר גדל ב־5%. כמה תלמידים יש השנה?",
        equation: "200 + (200 × 5 ÷ 100)",
        choices: ["200 + 5", "200 + (200 × 5 ÷ 100)", "200 × 5"],
        answer: 210,
        hint: "גדל ב־5% אומר מוסיפים 5% מהכמות המקורית.",
        explain: "5% מ־200 הם 10, ולכן יש 210 תלמידים.",
      },
      {
        prompt: "בבקבוק היו 1000 מ\"ל מים. דנה שתתה 35%. כמה מ\"ל שתתה?",
        equation: "1000 × 35 ÷ 100",
        choices: ["1000 - 35", "1000 × 35 ÷ 100", "1000 + 35"],
        answer: 350,
        hint: "שואלים כמה שתתה, כלומר חלק מתוך 1000.",
        explain: "35% מ־1000 הם 350.",
      },
      {
        prompt: "אחרי הנחה של 20%, איזה אחוז מהמחיר המקורי עדיין משלמים?",
        equation: "100% - 20%",
        choices: ["100% - 20%", "100% + 20%", "20 × 100"],
        answer: 80,
        hint: "לא שואלים מחיר בשקלים, אלא איזה חלק נשאר.",
        explain: "אם הורידו 20%, נשאר לשלם 80%.",
      },
      {
        prompt: "במבצע כתוב: מחיר רגיל 100 ש\"ח, מחיר בקופה 75 ש\"ח. כמה אחוזי הנחה קיבלתם?",
        equation: "(100 - 75) ÷ 100 × 100",
        choices: ["75 ÷ 100 × 100", "(100 - 75) ÷ 100 × 100", "100 + 75"],
        answer: 25,
        hint: "קודם מוצאים כמה ירד המחיר.",
        explain: "ההנחה היא 25 ש\"ח מתוך 100, כלומר 25%.",
      },
      {
        prompt: "מחיר מוצר עלה מ־50 ש\"ח ל־60 ש\"ח. בכמה אחוזים הוא עלה?",
        equation: "(60 - 50) ÷ 50 × 100",
        choices: ["(60 - 50) ÷ 50 × 100", "60 ÷ 50", "60 - 50"],
        answer: 20,
        hint: "משווים את השינוי למחיר המקורי.",
        explain: "השינוי הוא 10 ש\"ח. 10 מתוך 50 הם 20%.",
      },
      {
        prompt: "מחיר משחק א הוא 80 ש\"ח אחרי 10% הנחה. מחיר משחק ב הוא 60 ש\"ח אחרי 25% הנחה. כמה משלמים על משחק ב?",
        equation: "60",
        choices: ["80 × 10 ÷ 100", "60", "60 × 25 ÷ 100"],
        answer: 60,
        hint: "שימו לב: שואלים כמה משלמים על משחק ב, והמחיר אחרי הנחה כבר נתון.",
        explain: "זו שאלת מלכודת: לא צריך לחשב, כי כתוב שמשחק ב עולה 60 ש\"ח אחרי ההנחה.",
      },
      {
        prompt: "אחרי עלייה של 10%, מחיר מחברת הוא 22 ש\"ח. איזה אחוז מהמחיר המקורי הוא המחיר החדש?",
        equation: "100% + 10%",
        choices: ["100% + 10%", "100% - 10%", "22 × 10 ÷ 100"],
        answer: 110,
        hint: "לא שואלים מה המחיר המקורי, אלא איזה אחוז הוא המחיר החדש.",
        explain: "אחרי עלייה של 10%, המחיר החדש הוא 110% מהמקורי.",
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

function initHundredGrid() {
  const hundredGrid = document.getElementById("hundredGrid");
  const percentSlider = document.getElementById("percentSlider");
  const percentValue = document.getElementById("percentValue");
  const percentSentence = document.getElementById("percentSentence");
  if (!hundredGrid || !percentSlider || !percentValue || !percentSentence) return;

  for (let i = 0; i < 100; i += 1) {
    hundredGrid.append(document.createElement("span"));
  }

  const update = () => {
    const value = Number(percentSlider.value);
    percentValue.textContent = value;
    percentSentence.textContent = `${value} מתוך 100 חלקים צבועים.`;
    Array.from(hundredGrid.children).forEach((cell, index) => {
      cell.classList.toggle("active", index < value);
    });
  };

  percentSlider.addEventListener("input", update);
  update();
}

function initDiscountModel() {
  const discountSlider = document.getElementById("discountSlider");
  const discountValue = document.getElementById("discountValue");
  const discountSentence = document.getElementById("discountSentence");
  const priceAfterBar = document.getElementById("priceAfterBar");
  if (!discountSlider || !discountValue || !discountSentence || !priceAfterBar) return;

  const update = () => {
    const discount = Number(discountSlider.value);
    const after = 120 * (1 - discount / 100);
    discountValue.textContent = discount;
    priceAfterBar.style.height = `${100 - discount}%`;
    discountSentence.textContent = `מחיר של 120 ש"ח אחרי ${discount}% הנחה: ${after.toFixed(0)} ש"ח.`;
  };

  discountSlider.addEventListener("input", update);
  update();
}

function setFeedback(element, text, isGood) {
  element.innerHTML = formatMathText(text);
  element.className = `feedback ${isGood ? "good" : "try"}`;
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatMathText(value) {
  return escapeHTML(value).replace(
    /\b(\d+)\/(\d+)\b/g,
    '<span class="fraction" aria-label="$1 חלקי $2"><span>$1</span><span>$2</span></span>',
  );
}

function normalizeAnswer(value) {
  return String(value).trim().replace(/\s+/g, " ");
}

function isNumericCorrect(input, answer) {
  const userValue = Number(input);
  return Number.isFinite(userValue) && Math.abs(userValue - Number(answer)) < 0.01;
}

function ensureDrillState(data, state) {
  if (!Array.isArray(state.results) || state.results.length !== data.questions.length) {
    state.results = Array(data.questions.length).fill("pending");
  }
}

function resultLabel(result) {
  if (result === "correct") return "נכון";
  if (result === "wrong") return "צריך תיקון";
  return "עוד לא נפתר";
}

function renderQuizProgressHTML(data, state) {
  ensureDrillState(data, state);
  const correctCount = state.results.filter((result) => result === "correct").length;
  const steps = state.results
    .map((result, index) => {
      const active = index === state.index ? " active" : "";
      return `<span class="quiz-step ${result}${active}" role="listitem" aria-label="שאלה ${index + 1}: ${resultLabel(result)}"></span>`;
    })
    .join("");

  return `
    <div class="quiz-progress-wrap" aria-live="polite">
      <p class="quiz-progress-label">התקדמות: ${correctCount} מתוך ${data.questions.length} נכונות</p>
      <div class="quiz-progress" role="list" style="--step-count: ${data.questions.length}">${steps}</div>
    </div>
  `;
}

function updateQuizProgress(root, data, state) {
  const progress = root.querySelector(".quiz-progress-wrap");
  if (progress) progress.outerHTML = renderQuizProgressHTML(data, state);
}

function advanceQuestion(data, state) {
  if (state.index === data.questions.length - 1) {
    state.hasPassedOriginalSet = true;
  }
  state.index = (state.index + 1) % data.questions.length;
}

function triggerQuizCompleteEffect(root, state) {
  const box = root.querySelector(".question-box");
  if (!box) return;

  const effects = ["burst", "sweep", "stack"];
  let effect = effects[Math.floor(Math.random() * effects.length)];
  if (effects.length > 1 && effect === state.lastEffect) {
    effect = effects[(effects.indexOf(effect) + 1) % effects.length];
  }
  state.lastEffect = effect;

  box.querySelector(".quiz-celebration")?.remove();
  box.classList.remove("celebrate-burst", "celebrate-sweep", "celebrate-stack");
  box.classList.add(`celebrate-${effect}`);

  const celebration = document.createElement("div");
  celebration.className = `quiz-celebration ${effect}`;
  celebration.setAttribute("aria-hidden", "true");

  const colors = ["#2266d2", "#16805c", "#d95b43", "#f2b84b", "#7d5cc6"];
  const stripCount = effect === "stack" ? 8 : 18;
  celebration.innerHTML = Array.from({ length: stripCount }, (_, index) => {
    const tx = Math.round((Math.random() - 0.5) * 520);
    const ty = Math.round(-80 - Math.random() * 160);
    const rotate = Math.round(Math.random() * 280 - 140);
    const delay = Math.round(index * 18);
    const color = colors[index % colors.length];
    return `<span style="--tx:${tx}px; --ty:${ty}px; --rotate:${rotate}deg; --delay:${delay}ms; --color:${color}"></span>`;
  }).join("");

  box.append(celebration);
  window.setTimeout(() => {
    celebration.remove();
    box.classList.remove("celebrate-burst", "celebrate-sweep", "celebrate-stack");
  }, 1400);
}

function recordQuestionResult(root, data, state, isCorrect) {
  ensureDrillState(data, state);
  const wasComplete = state.results.every((result) => result === "correct");

  if (state.hasPassedOriginalSet) {
    const redIndex = state.results.indexOf("wrong");
    const pendingIndex = state.results.indexOf("pending");
    if (isCorrect && redIndex !== -1) {
      state.results[redIndex] = "correct";
    } else if (isCorrect && pendingIndex !== -1) {
      state.results[pendingIndex] = "correct";
    } else if (!isCorrect && pendingIndex !== -1) {
      state.results[pendingIndex] = "wrong";
    } else if (!isCorrect && state.results[state.index] !== "correct") {
      state.results[state.index] = "wrong";
    }
  } else {
    state.results[state.index] = isCorrect ? "correct" : "wrong";
  }

  updateQuizProgress(root, data, state);

  const isComplete = state.results.every((result) => result === "correct");
  if (isCorrect && isComplete && !wasComplete) {
    triggerQuizCompleteEffect(root, state);
  }
}

function renderChoiceDrill(root, data, state) {
  ensureDrillState(data, state);
  const question = data.questions[state.index];
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
      setFeedback(feedback, isCorrect ? `נכון. ${question.explain}` : "עוד ניסיון. בדקו איזה ייצוג מתאר אותו חלק.", isCorrect);
    });
    row.append(button);
  });

  root.querySelector(".next-button").addEventListener("click", () => {
    advanceQuestion(data, state);
    renderDrill(root, data, state);
  });
}

function renderNumericDrill(root, data, state) {
  ensureDrillState(data, state);
  const question = data.questions[state.index];
  root.innerHTML = `
      <p class="drill-intro">${formatMathText(data.intro)}</p>
    <div class="question-box">
      <p class="question-count">שאלה ${state.index + 1} מתוך ${data.questions.length}</p>
      ${renderQuizProgressHTML(data, state)}
      <h3>${formatMathText(question.prompt)}</h3>
      <label>תשובה במספר בלבד:<input class="numeric-answer" type="number" inputmode="decimal" /></label>
      <div class="button-row">
        <button class="primary check-button" type="button">בדיקה</button>
        <button class="secondary hint-button" type="button">רמז</button>
        <button class="secondary next-button" type="button">שאלה חדשה</button>
      </div>
      <p class="feedback" role="status"></p>
    </div>
  `;

  const input = root.querySelector(".numeric-answer");
  const feedback = root.querySelector(".feedback");
  root.querySelector(".check-button").addEventListener("click", () => {
    const isCorrect = isNumericCorrect(input.value, question.answer);
    recordQuestionResult(root, data, state, isCorrect);
    setFeedback(feedback, isCorrect ? `נכון. ${question.explain}` : `לא בדיוק. ${question.explain}`, isCorrect);
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

function renderTranslateDrill(root, data, state) {
  ensureDrillState(data, state);
  const question = data.questions[state.index];
  root.innerHTML = `
      <p class="drill-intro">${formatMathText(data.intro)}</p>
    <div class="question-box">
      <p class="question-count">שאלה ${state.index + 1} מתוך ${data.questions.length}</p>
      ${renderQuizProgressHTML(data, state)}
      <h3>${formatMathText(question.prompt)}</h3>
      <div class="read-check" aria-label="בדיקת קריאה">
        <span>1. מה השלם?</span>
        <span>2. מה האחוז?</span>
        <span>3. מה מבקשים?</span>
      </div>
      <p class="sub-label">בחרו את החישוב המתאים:</p>
      <div class="answer-row equation-row"></div>
      <label>תשובה במספר בלבד:<input class="numeric-answer" type="number" inputmode="decimal" /></label>
      <div class="button-row">
        <button class="primary check-button" type="button">בדיקה</button>
        <button class="secondary hint-button" type="button">רמז</button>
        <button class="secondary next-button" type="button">שאלה חדשה</button>
      </div>
      <p class="feedback" role="status"></p>
    </div>
  `;

  const row = root.querySelector(".answer-row");
  const input = root.querySelector(".numeric-answer");
  const feedback = root.querySelector(".feedback");
  let selected = "";

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

  root.querySelector(".check-button").addEventListener("click", () => {
    const equationCorrect = normalizeAnswer(selected) === normalizeAnswer(question.equation);
    const answerCorrect = isNumericCorrect(input.value, question.answer);
    const isCorrect = equationCorrect && answerCorrect;
    recordQuestionResult(root, data, state, isCorrect);
    if (equationCorrect && answerCorrect) {
      setFeedback(feedback, `נכון. ${question.explain}`, true);
    } else if (!equationCorrect && answerCorrect) {
      setFeedback(feedback, "התשובה המספרית נכונה, אבל החישוב שבחרתם לא מתאים לטקסט.", false);
    } else if (equationCorrect) {
      setFeedback(feedback, `בחרתם חישוב נכון. עכשיו בדקו את החישוב המספרי. ${question.hint}`, false);
    } else {
      setFeedback(feedback, `צריך להתחיל מבחירת החישוב. ${question.hint}`, false);
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

function renderDrill(root, data, state) {
  if (data.type === "choice") renderChoiceDrill(root, data, state);
  if (data.type === "numeric") renderNumericDrill(root, data, state);
  if (data.type === "translate") renderTranslateDrill(root, data, state);
}

function initDrills() {
  document.querySelectorAll("[data-drill]").forEach((root) => {
    const data = drillData[root.dataset.drill];
    if (!data) return;
    renderDrill(root, data, { index: 0 });
  });
}

renderProgress();
initProgressButtons();
initHundredGrid();
initDiscountModel();
initDrills();
