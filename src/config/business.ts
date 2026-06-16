export const business = {
  name: "אבי הנגר",
  tagline: "אומנות בעץ",
  fullName: "אבי הנגר – אומנות בעץ",
  phone: "050-0000000", // TODO: עדכן מספר טלפון אמיתי
  email: "info@avi-hanagar.co.il", // TODO: עדכן כתובת מייל אמיתית
  whatsapp: "https://wa.me/5000000000", // TODO: עדכן קישור WhatsApp
  hours: "TODO: עדכן שעות פעילות", // TODO: עדכן שעות פעילות
  logo: {
    src: "/images/avi-logo.jpg",
    alt: "אבי הנגר – אומנות בעץ",
  },
  images: {
    hero: "/images/work-1.png",
    about: "/images/avi.png",
  },
  hero: {
    title: "נגרות בהתאמה אישית, בדיוק לבית שלכם",
    subtitle:
      "מטבחים, ארונות, ספריות, מזנונים ורהיטים בהתאמה אישית – משלב הרעיון ועד ההתקנה.",
    primaryCta: "קבלת הצעת מחיר",
    secondaryCta: "צפייה בעבודות",
    trustText: "ייעוץ ראשוני ללא התחייבות",
  },
  about: {
    title: "נעים להכיר, אבי",
    text:
      "אבי מתמחה בעבודות נגרות בהתאמה אישית, עם דגש על תכנון מדויק, שירות אישי וגימור איכותי. כל עבודה מתחילה בהבנת הצורך של הלקוח ומסתיימת במוצר שמתאים לחלל ולשימוש היומיומי.",
  },
  form: {
    title: "ספרו לנו על העבודה שלכם",
    subtitle:
      "ככל שנקבל יותר פרטים, נוכל להבין את הבקשה ולחזור אליכם בצורה מדויקת יותר.",
    successTitle: "הבקשה התקבלה בהצלחה",
    successMessage: "אבי יעבור על הפרטים ויחזור אליכם בהקדם",
    imageHelp: "מומלץ לצרף תמונה של החלל, מידות ותמונות השראה",
  },
  nav: [
    { label: "ראשי", href: "#hero" },
    { label: "עבודות", href: "#gallery" },
    { label: "איך זה עובד", href: "#how-it-works" },
    { label: "אודות", href: "#about" },
    { label: "יצירת קשר", href: "#contact" },
  ],
  ctaButton: "ספרו לי על העבודה",
} as const;
