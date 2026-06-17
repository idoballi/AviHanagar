export interface MakePayload {
  מספר_פנייה: string;
  תאריך_שליחה: string;

  // שלב 1 – פרטים אישיים
  שם_מלא: string;
  טלפון: string;
  מייל: string;
  דרך_חזרה_מועדפת: string;

  // שלב 2 – פרטי העבודה
  סוג_עבודה: string;
  תיאור_העבודה: string;
  חדר_או_חלל: string;
  סוג_פרויקט: string;
  תוכנית_או_השראה: string;
  רוחב_סמ: string;
  גובה_סמ: string;
  עומק_סמ: string;
  אין_מידות: string;

  // שלב 3 – מיקום וזמנים
  עיר: string;
  כתובת: string;
  קומה: string;
  מעלית: string;
  מועד_רצוי: string;
  רמת_דחיפות: string;

  // שלב 4 – תקציב ותמונות
  טווח_תקציב: string;
  מספר_תמונות: number;
  שמות_תמונות: string;

  // שלב 5 – אישורים
  אישור_יצירת_קשר: string;
  אישור_עדכונים: string;
}

function getField(formData: FormData, key: string): string {
  const value = formData.get(key);
  if (value === null || value instanceof File) return "";
  return String(value);
}

export function buildMakePayload(
  formData: FormData,
  referenceNumber: string
): MakePayload {
  const imageFiles: string[] = [];

  for (const [key, value] of formData.entries()) {
    if (value instanceof File) {
      imageFiles.push(value.name);
    }
  }

  return {
    מספר_פנייה: referenceNumber,
    תאריך_שליחה: new Date().toISOString(),

    שם_מלא: getField(formData, "fullName"),
    טלפון: getField(formData, "phone"),
    מייל: getField(formData, "email"),
    דרך_חזרה_מועדפת: getField(formData, "contactMethod"),

    סוג_עבודה: getField(formData, "workType"),
    תיאור_העבודה: getField(formData, "workDescription"),
    חדר_או_חלל: getField(formData, "roomOrSpace"),
    סוג_פרויקט: getField(formData, "projectContext"),
    תוכנית_או_השראה: getField(formData, "hasPlan"),
    רוחב_סמ: getField(formData, "width"),
    גובה_סמ: getField(formData, "height"),
    עומק_סמ: getField(formData, "depth"),
    אין_מידות: getField(formData, "noDimensions") === "true" ? "כן" : "לא",

    עיר: getField(formData, "city"),
    כתובת: getField(formData, "fullAddress"),
    קומה: getField(formData, "floor"),
    מעלית: getField(formData, "hasElevator"),
    מועד_רצוי: getField(formData, "preferredDate"),
    רמת_דחיפות: getField(formData, "urgency"),

    טווח_תקציב: getField(formData, "budgetRange"),
    מספר_תמונות: imageFiles.length,
    שמות_תמונות: imageFiles.join(", "),

    אישור_יצירת_קשר: getField(formData, "consentContact") === "true" ? "כן" : "לא",
    אישור_עדכונים: getField(formData, "consentMarketing") === "true" ? "כן" : "לא",
  };
}
