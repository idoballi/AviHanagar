export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "consultation-cost",
    question: "האם הייעוץ הראשוני עולה כסף?",
    answer:
      "הייעוץ הראשוני נועד להבין את הצורך שלכם. TODO: אבי – עדכן מידע על תשלום או חינם.",
  },
  {
    id: "photo-without-measures",
    question: "האם אפשר לשלוח רק תמונה בלי מידות?",
    answer:
      "בהחלט. תמונה של החלל או תמונת השראה עוזרת לנו להבין את הכיוון, ואפשר להשלים מידות בהמשך.",
  },
  {
    id: "home-measurement",
    question: "האם אתם מגיעים למדידה בבית?",
    answer:
      "מדידה בבית הלקוח היא חלק מתהליך העבודה. TODO: אבי – עדכן פרטים על אזורים ותנאים.",
  },
  {
    id: "inspiration-photo",
    question: "האם ניתן לבצע עבודה לפי תמונת השראה?",
    answer:
      "כן. תמונות השראה עוזרות לנו להבין את הסגנון והציפיות, ואנחנו מתאימים את הפתרון לחלל שלכם.",
  },
  {
    id: "service-areas",
    question: "באילו אזורים אתם עובדים?",
    answer: "TODO: אבי – עדכן אזורי שירות.",
  },
  {
    id: "quote-time",
    question: "כמה זמן לוקח לקבל הצעה?",
    answer:
      "זמן ההצעה תלוי בפרטים שתשלחו. TODO: אבי – עדכן זמן משוער לחזרה.",
  },
];
