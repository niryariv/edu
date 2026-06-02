const progressKey = "decimals-course-progress-v1";
const stations = ["principles", "convert", "add-subtract", "multiply", "divide", "review"];

const drillData = {
  "place-basic": {
    type: "numeric",
    intro: "זהו מה מייצגת הספרה או כתבו את המספר כשבר מתוך 10, 100 או 1000.",
    questions: [
      { prompt: "במספר 4.7, כמה עשיריות יש אחרי הנקודה?", answer: 7, hint: "הספרה הראשונה אחרי הנקודה היא עשיריות.", explain: "4.7 הוא 4 שלמים ו־7 עשיריות." },
      { prompt: "במספר 2.38, כמה מאיות יש בספרה 8?", answer: 8, hint: "הספרה השנייה אחרי הנקודה היא מאיות.", explain: "8 נמצאת במקום המאיות." },
      { prompt: "כמה מאיות הן 0.42?", answer: 42, hint: "שתי ספרות אחרי הנקודה הן מאיות.", explain: "0.42 הם 42 מאיות." },
      { prompt: "כמה אלפיות הן 0.125?", answer: 125, hint: "שלוש ספרות אחרי הנקודה הן אלפיות.", explain: "0.125 הם 125 אלפיות." },
      { prompt: "איזה מספר שווה ל־5 עשיריות? כתבו כעשרוני.", answer: 0.5, hint: "עשיריות נמצאות ספרה אחת אחרי הנקודה.", explain: "5 עשיריות הן 0.5." },
      { prompt: "איזה מספר שווה ל־9 מאיות? כתבו כעשרוני.", answer: 0.09, hint: "9 מאיות צריכות שתי ספרות אחרי הנקודה.", explain: "9 מאיות הן 0.09." },
      { prompt: "כמה שווה 0.50? כתבו בלי אפס מיותר.", answer: 0.5, hint: "אפס מימין אחרי ספרות עשרוניות לא משנה את הערך.", explain: "0.50 = 0.5." },
      { prompt: "כמה שווה 3.040? כתבו בלי אפס מיותר.", answer: 3.04, hint: "האפס באמצע חשוב. האפס האחרון מימין לא משנה.", explain: "3.040 = 3.04." },
    ],
  },
  "place-compare": {
    type: "choice",
    intro: "בחרו את הטענה הנכונה. שימו לב: יותר ספרות אחרי הנקודה לא אומר מספר גדול יותר.",
    questions: [
      { prompt: "מה גדול יותר?", choices: ["0.6", "0.58", "שווים"], answer: "0.6", explain: "0.6 = 0.60, ו־60 מאיות גדולות מ־58 מאיות." },
      { prompt: "מה גדול יותר?", choices: ["0.09", "0.1", "שווים"], answer: "0.1", explain: "0.1 = 0.10, ו־10 מאיות גדולות מ־9 מאיות." },
      { prompt: "מה נכון?", choices: ["0.40 = 0.4", "0.40 > 0.4", "0.40 < 0.4"], answer: "0.40 = 0.4", explain: "אפס מימין לא משנה את הערך." },
      { prompt: "מה הכי קטן?", choices: ["0.44", "0.404", "0.4"], answer: "0.4", explain: "0.4 = 0.400, והוא קטן מ־0.404 ומ־0.44." },
      { prompt: "מה הכי גדול?", choices: ["2.03", "2.3", "2.003"], answer: "2.3", explain: "2.3 = 2.300, ולכן הוא הגדול ביותר." },
      { prompt: "איזו כתיבה שווה ל־7.2?", choices: ["7.02", "7.20", "7.2001"], answer: "7.20", explain: "7.20 שווה ל־7.2." },
    ],
  },
  "convert-choice": {
    type: "choice",
    intro: "בחרו את הייצוג השווה.",
    questions: [
      { prompt: "איזה שבר שווה ל־0.7?", choices: ["7/10", "7/100", "10/7"], answer: "7/10", explain: "0.7 הם 7 עשיריות." },
      { prompt: "איזה עשרוני שווה ל־3/4?", choices: ["0.34", "0.75", "3.4"], answer: "0.75", explain: "3 ÷ 4 = 0.75." },
      { prompt: "איזה שבר מצומצם שווה ל־0.6?", choices: ["6/100", "3/5", "6/5"], answer: "3/5", explain: "0.6 = 6/10 = 3/5." },
      { prompt: "איזה עשרוני שווה ל־1/8?", choices: ["0.125", "0.18", "0.8"], answer: "0.125", explain: "1 ÷ 8 = 0.125." },
      { prompt: "איזה שבר מצומצם שווה ל־0.45?", choices: ["9/20", "45/10", "4/5"], answer: "9/20", explain: "0.45 = 45/100 = 9/20." },
      { prompt: "איזה מספר מעורב שווה ל־2.75?", choices: ["2 3/4", "2 7/5", "2 75/10"], answer: "2 3/4", explain: "0.75 = 3/4, לכן 2.75 = 2 3/4." },
    ],
  },
  "fraction-to-decimal": {
    type: "numeric",
    intro: "המירו שבר לעשרוני. אם המכנה לא נוח, חשבו מונה חלקי מכנה.",
    questions: [
      { prompt: "7/10 = ?", answer: 0.7, hint: "עשיריות הן ספרה אחת אחרי הנקודה.", explain: "7/10 = 0.7." },
      { prompt: "19/100 = ?", answer: 0.19, hint: "מאיות הן שתי ספרות אחרי הנקודה.", explain: "19/100 = 0.19." },
      { prompt: "7/20 = ?", answer: 0.35, hint: "הכפילו מונה ומכנה פי 5 כדי להגיע ל־100.", explain: "7/20 = 35/100 = 0.35." },
      { prompt: "2/5 = ?", answer: 0.4, hint: "חמישיות אפשר להפוך לעשיריות.", explain: "2/5 = 4/10 = 0.4." },
      { prompt: "3/4 = ?", answer: 0.75, hint: "רבעים אפשר להפוך למאיות.", explain: "3/4 = 75/100 = 0.75." },
      { prompt: "1/8 = ?", answer: 0.125, hint: "אפשר לחשב 1 ÷ 8.", explain: "1/8 = 0.125." },
      { prompt: "5/2 = ?", answer: 2.5, hint: "5 חלקי 2 הם 2 וחצי.", explain: "5/2 = 2.5." },
      { prompt: "11/4 = ?", answer: 2.75, hint: "8/4 הם 2, ונשאר 3/4.", explain: "11/4 = 2.75." },
    ],
  },
  "add-subtract-basic": {
    type: "numeric",
    intro: "יישרו לפי הנקודה. אפשר להוסיף אפסים מימין כדי שהעמודות יתאימו.",
    questions: [
      { prompt: "0.4 + 0.3 = ?", answer: 0.7, hint: "4 עשיריות ועוד 3 עשיריות.", explain: "0.4 + 0.3 = 0.7." },
      { prompt: "1.25 + 0.5 = ?", answer: 1.75, hint: "כתבו 0.5 כ־0.50.", explain: "1.25 + 0.50 = 1.75." },
      { prompt: "3.08 + 2.7 = ?", answer: 5.78, hint: "כתבו 2.7 כ־2.70.", explain: "3.08 + 2.70 = 5.78." },
      { prompt: "5.6 - 2.1 = ?", answer: 3.5, hint: "חסרו עשיריות מעשיריות.", explain: "5.6 - 2.1 = 3.5." },
      { prompt: "4 - 1.35 = ?", answer: 2.65, hint: "כתבו 4 כ־4.00.", explain: "4.00 - 1.35 = 2.65." },
      { prompt: "10.2 - 0.78 = ?", answer: 9.42, hint: "כתבו 10.2 כ־10.20.", explain: "10.20 - 0.78 = 9.42." },
      { prompt: "6.05 + 3.9 = ?", answer: 9.95, hint: "כתבו 3.9 כ־3.90.", explain: "6.05 + 3.90 = 9.95." },
      { prompt: "8.4 - 5.67 = ?", answer: 2.73, hint: "כתבו 8.4 כ־8.40.", explain: "8.40 - 5.67 = 2.73." },
    ],
  },
  "add-subtract-text": {
    type: "translate",
    intro: "קראו את הטקסט, בחרו פעולה, ואז כתבו תשובה.",
    questions: [
      { prompt: "בקבוק מכיל 1.5 ליטר. הוסיפו אליו 0.35 ליטר. כמה ליטרים יש עכשיו?", equation: "1.5 + 0.35", choices: ["1.5 + 0.35", "1.5 - 0.35", "1.5 × 0.35"], answer: 1.85, hint: "המילה הוסיפו מרמזת על חיבור.", explain: "1.50 + 0.35 = 1.85 ליטר." },
      { prompt: "מסלול הוא 4.2 ק״מ. דנה הלכה 1.75 ק״מ. כמה נשאר לה?", equation: "4.2 - 1.75", choices: ["4.2 + 1.75", "4.2 - 1.75", "4.2 ÷ 1.75"], answer: 2.45, hint: "כמה נשאר הוא חיסור מהשלם.", explain: "4.20 - 1.75 = 2.45 ק״מ." },
      { prompt: "מחיר מחברת הוא 6.90 ש״ח ומחק עולה 2.35 ש״ח. כמה עולים שניהם?", equation: "6.90 + 2.35", choices: ["6.90 + 2.35", "6.90 - 2.35", "6.90 × 2.35"], answer: 9.25, hint: "שניהם יחד פירושו סכום.", explain: "6.90 + 2.35 = 9.25 ש״ח." },
      { prompt: "בקופה היו 20 ש״ח. שילמתם 7.85 ש״ח. כמה עודף נשאר?", equation: "20 - 7.85", choices: ["20 + 7.85", "20 - 7.85", "7.85 - 20"], answer: 12.15, hint: "עודף הוא מה שנשאר מהכסף המקורי.", explain: "20.00 - 7.85 = 12.15 ש״ח." },
      { prompt: "גובה צמח היה 12.4 ס״מ וגדל ל־15.05 ס״מ. בכמה ס״מ גדל?", equation: "15.05 - 12.4", choices: ["15.05 + 12.4", "15.05 - 12.4", "12.4 - 15.05"], answer: 2.65, hint: "שינוי הוא חדש פחות ישן.", explain: "15.05 - 12.40 = 2.65 ס״מ." },
    ],
  },
  "multiply-basic": {
    type: "numeric",
    intro: "כפלו כמו שלמים ואז החזירו את הנקודה לפי מספר הספרות העשרוניות.",
    questions: [
      { prompt: "0.2 × 0.3 = ?", answer: 0.06, hint: "2 × 3 = 6, ויש שתי ספרות אחרי הנקודה.", explain: "0.2 × 0.3 = 0.06." },
      { prompt: "1.5 × 4 = ?", answer: 6, hint: "15 × 4 = 60, ואז ספרה אחת אחרי הנקודה.", explain: "1.5 × 4 = 6.0 = 6." },
      { prompt: "2.4 × 0.5 = ?", answer: 1.2, hint: "כפל בחצי.", explain: "חצי מ־2.4 הוא 1.2." },
      { prompt: "0.08 × 10 = ?", answer: 0.8, hint: "כפל ב־10 מזיז נקודה מקום אחד ימינה.", explain: "0.08 × 10 = 0.8." },
      { prompt: "3.7 × 100 = ?", answer: 370, hint: "כפל ב־100 מזיז נקודה שני מקומות ימינה.", explain: "3.7 × 100 = 370." },
      { prompt: "0.6 × 0.7 = ?", answer: 0.42, hint: "6 × 7 = 42, ויש שתי ספרות עשרוניות.", explain: "0.6 × 0.7 = 0.42." },
      { prompt: "1.25 × 0.4 = ?", answer: 0.5, hint: "125 × 4 = 500, ויש שלוש ספרות עשרוניות.", explain: "1.25 × 0.4 = 0.500 = 0.5." },
      { prompt: "2.03 × 3 = ?", answer: 6.09, hint: "203 × 3 = 609, ויש שתי ספרות עשרוניות.", explain: "2.03 × 3 = 6.09." },
    ],
  },
  "multiply-text": {
    type: "translate",
    intro: "כפל מתאים כשיש קבוצות שוות, מחיר כפול כמות או חצי/רבע מכמות.",
    questions: [
      { prompt: "קניתם 3 מחברות. כל מחברת עולה 4.75 ש״ח. כמה שילמתם?", equation: "3 × 4.75", choices: ["3 + 4.75", "3 × 4.75", "4.75 ÷ 3"], answer: 14.25, hint: "אותו מחיר חוזר 3 פעמים.", explain: "3 × 4.75 = 14.25 ש״ח." },
      { prompt: "בקבוק מכיל 1.5 ליטר. כמה ליטרים יש ב־4 בקבוקים?", equation: "4 × 1.5", choices: ["4 × 1.5", "4 - 1.5", "1.5 ÷ 4"], answer: 6, hint: "4 בקבוקים שווים.", explain: "4 × 1.5 = 6 ליטרים." },
      { prompt: "אורך מסלול הוא 2.4 ק״מ. תלמיד עבר חצי ממנו. כמה עבר?", equation: "2.4 × 0.5", choices: ["2.4 + 0.5", "2.4 × 0.5", "2.4 ÷ 0.5"], answer: 1.2, hint: "חצי הוא כפל ב־0.5.", explain: "2.4 × 0.5 = 1.2 ק״מ." },
      { prompt: "שטח מלבן שאורכו 3.5 מטר ורוחבו 2 מטר. מה השטח?", equation: "3.5 × 2", choices: ["3.5 + 2", "3.5 × 2", "3.5 ÷ 2"], answer: 7, hint: "שטח מלבן הוא אורך כפול רוחב.", explain: "3.5 × 2 = 7 מ״ר." },
      { prompt: "חבילה אחת שוקלת 0.25 ק״ג. כמה שוקלות 8 חבילות?", equation: "8 × 0.25", choices: ["8 × 0.25", "8 - 0.25", "0.25 ÷ 8"], answer: 2, hint: "0.25 ק״ג חוזר 8 פעמים.", explain: "8 × 0.25 = 2 ק״ג." },
    ],
  },
  "divide-basic": {
    type: "numeric",
    intro: "אם המחלק עשרוני, הזיזו נקודה במחלק ובמחולק באותו מספר מקומות.",
    questions: [
      { prompt: "0.8 ÷ 2 = ?", answer: 0.4, hint: "8 עשיריות לחלק ל־2.", explain: "0.8 ÷ 2 = 0.4." },
      { prompt: "4.5 ÷ 5 = ?", answer: 0.9, hint: "45 עשיריות לחלק ל־5.", explain: "4.5 ÷ 5 = 0.9." },
      { prompt: "3.6 ÷ 0.6 = ?", answer: 6, hint: "הכפילו את שני המספרים פי 10.", explain: "3.6 ÷ 0.6 = 36 ÷ 6 = 6." },
      { prompt: "7.2 ÷ 0.9 = ?", answer: 8, hint: "72 ÷ 9.", explain: "7.2 ÷ 0.9 = 72 ÷ 9 = 8." },
      { prompt: "0.25 ÷ 5 = ?", answer: 0.05, hint: "25 מאיות לחלק ל־5.", explain: "0.25 ÷ 5 = 0.05." },
      { prompt: "6 ÷ 0.3 = ?", answer: 20, hint: "60 ÷ 3.", explain: "6 ÷ 0.3 = 60 ÷ 3 = 20." },
      { prompt: "1.44 ÷ 0.12 = ?", answer: 12, hint: "144 ÷ 12.", explain: "1.44 ÷ 0.12 = 144 ÷ 12 = 12." },
      { prompt: "9.6 ÷ 0.04 = ?", answer: 240, hint: "960 ÷ 4.", explain: "9.6 ÷ 0.04 = 960 ÷ 4 = 240." },
    ],
  },
  "divide-text": {
    type: "translate",
    intro: "חילוק מתאים כשמחלקים שווה בשווה או שואלים כמה פעמים כמות אחת נכנסת באחרת.",
    questions: [
      { prompt: "חבל באורך 6.3 מטר נחתך ל־3 חלקים שווים. מה אורך כל חלק?", equation: "6.3 ÷ 3", choices: ["6.3 × 3", "6.3 ÷ 3", "6.3 - 3"], answer: 2.1, hint: "חלקים שווים מרמזים על חילוק.", explain: "6.3 ÷ 3 = 2.1 מטר." },
      { prompt: "2.4 ק״ג אורז חולקו לשקיות של 0.3 ק״ג. כמה שקיות?", equation: "2.4 ÷ 0.3", choices: ["2.4 ÷ 0.3", "2.4 × 0.3", "2.4 - 0.3"], answer: 8, hint: "שואלים כמה פעמים 0.3 נכנס ב־2.4.", explain: "2.4 ÷ 0.3 = 24 ÷ 3 = 8." },
      { prompt: "נסיעה אחת עולה 5.90 ש״ח. שילמתם 35.40 ש״ח. כמה נסיעות קניתם?", equation: "35.40 ÷ 5.90", choices: ["35.40 + 5.90", "35.40 ÷ 5.90", "5.90 ÷ 35.40"], answer: 6, hint: "מחיר כולל חלקי מחיר ליחידה.", explain: "35.40 ÷ 5.90 = 6 נסיעות." },
      { prompt: "בקנקן יש 1.2 ליטר. מוזגים כוסות של 0.2 ליטר. כמה כוסות אפשר למלא?", equation: "1.2 ÷ 0.2", choices: ["1.2 × 0.2", "1.2 ÷ 0.2", "1.2 - 0.2"], answer: 6, hint: "כמה פעמים 0.2 נכנס ב־1.2?", explain: "1.2 ÷ 0.2 = 12 ÷ 2 = 6." },
      { prompt: "4.8 מטר סרט חולקו שווה בשווה בין 12 תלמידים. כמה מטר קיבל כל תלמיד?", equation: "4.8 ÷ 12", choices: ["4.8 × 12", "4.8 ÷ 12", "12 ÷ 4.8"], answer: 0.4, hint: "מחלקים את כל הסרט בין כל התלמידים.", explain: "4.8 ÷ 12 = 0.4 מטר." },
    ],
  },
  "review-text": {
    type: "translate",
    intro: "בכל שאלה בחרו קודם את החישוב המתאים. זה מונע טעויות פעולה.",
    questions: [
      { prompt: "דנה קנתה עיפרון ב־2.50 ש״ח ומחברת ב־7.90 ש״ח. כמה שילמה?", equation: "2.50 + 7.90", choices: ["2.50 + 7.90", "7.90 - 2.50", "2.50 × 7.90"], answer: 10.4, hint: "שני מחירים יחד.", explain: "2.50 + 7.90 = 10.40 ש״ח." },
      { prompt: "במיכל היו 8.5 ליטר. השתמשו ב־2.75 ליטר. כמה נשאר?", equation: "8.5 - 2.75", choices: ["8.5 + 2.75", "8.5 - 2.75", "8.5 ÷ 2.75"], answer: 5.75, hint: "נשאר הוא חיסור.", explain: "8.50 - 2.75 = 5.75 ליטר." },
      { prompt: "כל חטיף עולה 3.25 ש״ח. כמה עולים 4 חטיפים?", equation: "4 × 3.25", choices: ["4 × 3.25", "4 + 3.25", "3.25 ÷ 4"], answer: 13, hint: "אותו מחיר חוזר 4 פעמים.", explain: "4 × 3.25 = 13." },
      { prompt: "9.6 ק״מ חולקו ל־4 מקטעים שווים. מה אורך כל מקטע?", equation: "9.6 ÷ 4", choices: ["9.6 × 4", "9.6 ÷ 4", "9.6 - 4"], answer: 2.4, hint: "מקטעים שווים הם חילוק.", explain: "9.6 ÷ 4 = 2.4 ק״מ." },
      { prompt: "איזה שבר שווה ל־0.125?", equation: "0.125 = 1/8", choices: ["0.125 = 1/8", "0.125 = 1/5", "0.125 = 12/5"], answer: 0.125, hint: "כאן החישוב הוא זיהוי המרה, לא פעולה בין כמויות.", explain: "0.125 = 125/1000 = 1/8." },
    ],
  },
  "review-all": {
    type: "numeric",
    intro: "36 שאלות מעורבות. בכל פעם פתרו שאלה אחת וקראו את ההסבר אחרי הבדיקה.",
    questions: [
      { prompt: "0.6 + 0.25 = ?", answer: 0.85, hint: "0.6 = 0.60.", explain: "0.60 + 0.25 = 0.85." },
      { prompt: "3 - 1.47 = ?", answer: 1.53, hint: "3 = 3.00.", explain: "3.00 - 1.47 = 1.53." },
      { prompt: "0.9 × 0.4 = ?", answer: 0.36, hint: "9 × 4 = 36, שתי ספרות אחרי הנקודה.", explain: "0.9 × 0.4 = 0.36." },
      { prompt: "5.6 ÷ 0.7 = ?", answer: 8, hint: "56 ÷ 7.", explain: "5.6 ÷ 0.7 = 8." },
      { prompt: "3/5 = ?", answer: 0.6, hint: "3/5 = 6/10.", explain: "3/5 = 0.6." },
      { prompt: "0.75 כשבר פשוט הוא 3/4. כתבו את הערך העשרוני של 3/4.", answer: 0.75, hint: "זו אותה עובדה בכיוון ההפוך.", explain: "3/4 = 0.75." },
      { prompt: "2.08 + 0.7 = ?", answer: 2.78, hint: "0.7 = 0.70.", explain: "2.08 + 0.70 = 2.78." },
      { prompt: "7.5 - 2.86 = ?", answer: 4.64, hint: "7.5 = 7.50.", explain: "7.50 - 2.86 = 4.64." },
      { prompt: "1.2 × 0.5 = ?", answer: 0.6, hint: "חצי מ־1.2.", explain: "1.2 × 0.5 = 0.6." },
      { prompt: "0.48 ÷ 0.06 = ?", answer: 8, hint: "48 ÷ 6.", explain: "0.48 ÷ 0.06 = 8." },
      { prompt: "7/20 = ?", answer: 0.35, hint: "7/20 = 35/100.", explain: "7/20 = 0.35." },
      { prompt: "0.09 × 100 = ?", answer: 9, hint: "נקודה זזה שני מקומות ימינה.", explain: "0.09 × 100 = 9." },
      { prompt: "4.05 + 6.9 = ?", answer: 10.95, hint: "6.9 = 6.90.", explain: "4.05 + 6.90 = 10.95." },
      { prompt: "12.1 - 0.56 = ?", answer: 11.54, hint: "12.1 = 12.10.", explain: "12.10 - 0.56 = 11.54." },
      { prompt: "2.5 × 0.2 = ?", answer: 0.5, hint: "25 × 2 = 50, שתי ספרות עשרוניות.", explain: "2.5 × 0.2 = 0.50 = 0.5." },
      { prompt: "3.75 ÷ 0.25 = ?", answer: 15, hint: "375 ÷ 25.", explain: "3.75 ÷ 0.25 = 15." },
      { prompt: "1/4 = ?", answer: 0.25, hint: "רבע הוא 25 מאיות.", explain: "1/4 = 0.25." },
      { prompt: "0.125 × 8 = ?", answer: 1, hint: "0.125 הוא שמינית.", explain: "שמינית כפול 8 שווה 1." },
      { prompt: "9.99 + 0.01 = ?", answer: 10, hint: "מאית אחת משלימה ל־10.", explain: "9.99 + 0.01 = 10." },
      { prompt: "6 - 0.06 = ?", answer: 5.94, hint: "6 = 6.00.", explain: "6.00 - 0.06 = 5.94." },
      { prompt: "0.04 × 0.5 = ?", answer: 0.02, hint: "חצי מ־0.04.", explain: "0.04 × 0.5 = 0.02." },
      { prompt: "0.72 ÷ 0.09 = ?", answer: 8, hint: "72 ÷ 9.", explain: "0.72 ÷ 0.09 = 8." },
      { prompt: "9/4 = ?", answer: 2.25, hint: "8/4 הם 2 ונשאר 1/4.", explain: "9/4 = 2.25." },
      { prompt: "0.3 + 0.03 + 0.003 = ?", answer: 0.333, hint: "עשיריות, מאיות ואלפיות.", explain: "0.300 + 0.030 + 0.003 = 0.333." },
      { prompt: "5.05 - 2.5 = ?", answer: 2.55, hint: "2.5 = 2.50.", explain: "5.05 - 2.50 = 2.55." },
      { prompt: "4.2 × 1.5 = ?", answer: 6.3, hint: "42 × 15 = 630, שתי ספרות עשרוניות.", explain: "4.2 × 1.5 = 6.30 = 6.3." },
      { prompt: "8.4 ÷ 0.12 = ?", answer: 70, hint: "840 ÷ 12.", explain: "8.4 ÷ 0.12 = 840 ÷ 12 = 70." },
      { prompt: "0.45 כשבר מצומצם הוא 9/20. כתבו את העשרוני של 9/20.", answer: 0.45, hint: "זו אותה המרה בכיוון ההפוך.", explain: "9/20 = 45/100 = 0.45." },
      { prompt: "0.8 ÷ 10 = ?", answer: 0.08, hint: "חילוק ב־10 מזיז נקודה שמאלה.", explain: "0.8 ÷ 10 = 0.08." },
      { prompt: "13.2 + 0.88 = ?", answer: 14.08, hint: "13.2 = 13.20.", explain: "13.20 + 0.88 = 14.08." },
      { prompt: "20 - 3.75 = ?", answer: 16.25, hint: "20 = 20.00.", explain: "20.00 - 3.75 = 16.25." },
      { prompt: "0.15 × 6 = ?", answer: 0.9, hint: "15 × 6 = 90, שתי ספרות עשרוניות.", explain: "0.15 × 6 = 0.90 = 0.9." },
      { prompt: "2.1 ÷ 0.3 = ?", answer: 7, hint: "21 ÷ 3.", explain: "2.1 ÷ 0.3 = 7." },
      { prompt: "11/8 = ?", answer: 1.375, hint: "1 + 3/8.", explain: "11/8 = 1.375." },
      { prompt: "0.4, 0.04 ו־0.004 יחד שווים?", answer: 0.444, hint: "כתבו 0.400 + 0.040 + 0.004.", explain: "0.4 + 0.04 + 0.004 = 0.444." },
      { prompt: "2.4 × 0.25 = ?", answer: 0.6, hint: "0.25 הוא רבע.", explain: "רבע מ־2.4 הוא 0.6." },
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

function initDecimalGrid() {
  const grid = document.getElementById("decimalGrid");
  const slider = document.getElementById("decimalSlider");
  const value = document.getElementById("decimalValue");
  const sentence = document.getElementById("decimalSentence");
  if (!grid || !slider || !value || !sentence) return;

  for (let i = 0; i < 100; i += 1) grid.append(document.createElement("span"));

  const update = () => {
    const amount = Number(slider.value);
    value.textContent = amount;
    sentence.textContent = `${amount} מאיות הן ${(amount / 100).toFixed(2)}.`;
    Array.from(grid.children).forEach((cell, index) => {
      cell.classList.toggle("active", index < amount);
    });
  };

  slider.addEventListener("input", update);
  update();
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
  if (state.index === data.questions.length - 1) state.hasPassedOriginalSet = true;
  state.index = (state.index + 1) % data.questions.length;
}

function recordQuestionResult(root, data, state, isCorrect) {
  ensureDrillState(data, state);

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
}

function setFeedback(element, text, isGood) {
  element.innerHTML = formatMathText(text);
  element.className = `feedback ${isGood ? "good" : "try"}`;
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
      setFeedback(feedback, isCorrect ? `נכון. ${question.explain}` : "עוד ניסיון. בדקו את ערך המקום או את ההמרה.", isCorrect);
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
      <label>תשובה במספר בלבד:<input class="numeric-answer" type="number" inputmode="decimal" step="any" /></label>
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
        <span>1. מה הנתון השלם?</span>
        <span>2. איזו פעולה מתאימה?</span>
        <span>3. מה מבקשים למצוא?</span>
      </div>
      <p class="sub-label">בחרו את החישוב המתאים:</p>
      <div class="answer-row equation-row"></div>
      <label>תשובה במספר בלבד:<input class="numeric-answer" type="number" inputmode="decimal" step="any" /></label>
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
    if (isCorrect) {
      setFeedback(feedback, `נכון. ${question.explain}`, true);
    } else if (!equationCorrect && answerCorrect) {
      setFeedback(feedback, "התשובה המספרית נכונה, אבל החישוב שבחרתם לא מתאים לטקסט.", false);
    } else if (equationCorrect) {
      setFeedback(feedback, `בחרתם חישוב נכון. עכשיו בדקו את החישוב המספרי. ${question.hint}`, false);
    } else {
      setFeedback(feedback, `צריך להתחיל מבחירת הפעולה. ${question.hint}`, false);
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
initDecimalGrid();
initDrills();
