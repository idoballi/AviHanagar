export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "kitchens",
    title: "מטבחים בהתאמה אישית",
    description: "תכנון וייצור מטבחים שמתאימים לחלל, לסגנון ולשימוש היומיומי.",
    icon: "kitchen",
  },
  {
    id: "closets",
    title: "ארונות קיר וחדרי ארונות",
    description: "פתרונות אחסון חכמים שמנצלים כל סנטימטר בחלל.",
    icon: "closet",
  },
  {
    id: "buffets",
    title: "מזנונים וספריות",
    description: "רהיטים שמשלבים פונקציונליות עם עיצוב נקי ואלגנטי.",
    icon: "buffet",
  },
  {
    id: "kids",
    title: "נגרות לחדרי ילדים",
    description: "רהיטים מותאמים לחדרי ילדים – בטיחותיים, פרקטיים ומעוצבים.",
    icon: "kids",
  },
  {
    id: "custom",
    title: "ריהוט בהתאמה אישית",
    description: "כל רהיט שדורש תכנון מיוחד – משולחנות ועד פתרונות ייחודיים.",
    icon: "custom",
  },
  {
    id: "repairs",
    title: "תיקונים ושדרוגים",
    description: "שדרוג, תיקון והתאמה של רהיטים קיימים לצרכים חדשים.",
    icon: "repair",
  },
];
