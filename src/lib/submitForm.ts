import type { LeadFormData } from "@/types/form";

export interface SubmitResult {
  success: boolean;
  referenceNumber: string;
  message?: string;
}

const ALL_FIELDS: (keyof LeadFormData)[] = [
  "fullName", "phone", "email", "contactMethod",
  "workType", "workDescription", "roomOrSpace", "projectContext", "hasPlan",
  "width", "height", "depth", "noDimensions",
  "city", "fullAddress", "floor", "hasElevator", "preferredDate", "urgency",
  "budgetRange", "consentContact", "consentMarketing",
];

export async function submitLeadForm(data: LeadFormData): Promise<SubmitResult> {
  const formData = new FormData();

  for (const key of ALL_FIELDS) {
    const value = data[key];
    if (value !== undefined && value !== null) {
      formData.append(key, String(value));
    }
  }

  data.images?.forEach((file, index) => {
    formData.append(`image_${index}`, file);
  });

  const response = await fetch("/api/submit-lead", {
    method: "POST",
    body: formData,
  });

  let result: SubmitResult & { message?: string };
  try {
    result = await response.json();
  } catch {
    throw new Error("שגיאה בתקשורת עם השרת");
  }

  if (!response.ok || !result.success) {
    throw new Error(result.message || "שגיאה בשליחה");
  }

  return {
    success: true,
    referenceNumber: result.referenceNumber,
    message: result.message,
  };
}
