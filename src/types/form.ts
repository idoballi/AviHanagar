import { z } from "zod";

export const WORK_TYPES = [
  "מטבח",
  "ארון",
  "חדר ארונות",
  "ספרייה",
  "מזנון",
  "שולחן",
  "ריהוט לחדר ילדים",
  "תיקון או שדרוג",
  "עבודה אחרת",
] as const;

export const CONTACT_METHODS = ["טלפון", "WhatsApp", "מייל"] as const;

export const PROJECT_CONTEXTS = [
  "בית חדש",
  "שיפוץ",
  "החלפת רהיט קיים",
] as const;

export const HAS_PLAN_OPTIONS = ["יש תוכנית או סקיצה", "יש תמונת השראה", "אין עדיין"] as const;

export const URGENCY_LEVELS = [
  "גמיש",
  "בחודש הקרוב",
  "דחוף",
  "רק בודק אפשרויות",
] as const;

export const BUDGET_RANGES = [
  "עד 5,000 ש\"ח",
  "5,000–10,000 ש\"ח",
  "10,000–20,000 ש\"ח",
  "20,000–40,000 ש\"ח",
  "מעל 40,000 ש\"ח",
  "עדיין לא יודע",
] as const;

export const ELEVATOR_OPTIONS = ["יש מעלית", "אין מעלית", "לא רלוונטי"] as const;

export const leadFormSchema = z.object({
  // Step 1
  fullName: z.string().min(2, "נא להזין שם מלא"),
  phone: z
    .string()
    .min(9, "נא להזין מספר טלפון תקין")
    .regex(/^[\d\-+() ]+$/, "מספר טלפון לא תקין"),
  email: z.string().email("כתובת מייל לא תקינה").or(z.literal("")).optional(),
  contactMethod: z.enum(CONTACT_METHODS, {
    required_error: "נא לבחור דרך חזרה",
  }),
  // Hidden for future use
  idNumber: z.string().optional(),

  // Step 2
  workType: z.enum(WORK_TYPES, { required_error: "נא לבחור סוג עבודה" }),
  workDescription: z.string().min(10, "נא לתאר את העבודה (לפחות 10 תווים)"),
  roomOrSpace: z.string().optional(),
  projectContext: z.enum(PROJECT_CONTEXTS).optional().or(z.literal("")),
  hasPlan: z.enum(HAS_PLAN_OPTIONS).optional().or(z.literal("")),
  width: z.string().optional(),
  height: z.string().optional(),
  depth: z.string().optional(),
  noDimensions: z.boolean().default(false),

  // Step 3
  city: z.string().min(2, "נא להזין עיר או יישוב"),
  fullAddress: z.string().optional(),
  floor: z.string().optional(),
  hasElevator: z.enum(ELEVATOR_OPTIONS).optional().or(z.literal("")),
  preferredDate: z.string().optional(),
  urgency: z.enum(URGENCY_LEVELS).optional().or(z.literal("")),

  // Step 4
  budgetRange: z.enum(BUDGET_RANGES).optional().or(z.literal("")),
  images: z.array(z.instanceof(File)).max(8, "מקסימום 8 תמונות").default([]),

  // Step 5
  consentContact: z
    .boolean()
    .refine((val) => val === true, { message: "נדרש אישור לחזרה" }),
  consentMarketing: z.boolean().default(false),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;

export const step1Schema = leadFormSchema.pick({
  fullName: true,
  phone: true,
  email: true,
  contactMethod: true,
});

export const step2Schema = leadFormSchema.pick({
  workType: true,
  workDescription: true,
  roomOrSpace: true,
  projectContext: true,
  hasPlan: true,
  width: true,
  height: true,
  depth: true,
  noDimensions: true,
});

export const step3Schema = leadFormSchema.pick({
  city: true,
  fullAddress: true,
  floor: true,
  hasElevator: true,
  preferredDate: true,
  urgency: true,
});

export const step4Schema = leadFormSchema.pick({
  budgetRange: true,
  images: true,
});

export const step5Schema = leadFormSchema.pick({
  consentContact: true,
  consentMarketing: true,
});

export const FORM_STORAGE_KEY = "avi-hanagar-lead-form";
