import type { LeadFormData } from "@/types/form";

export interface SubmitResult {
  success: boolean;
  referenceNumber: string;
  message?: string;
}

export async function submitLeadForm(data: LeadFormData): Promise<SubmitResult> {
  const formData = new FormData();

  const textFields: (keyof LeadFormData)[] = [
    "fullName", "phone", "email", "contactMethod", "workType", "workDescription",
    "roomOrSpace", "projectContext", "hasPlan", "width", "height", "depth",
    "noDimensions", "city", "fullAddress", "floor", "hasElevator",
    "preferredDate", "urgency", "budgetRange", "consentContact", "consentMarketing",
  ];

  for (const key of textFields) {
    const value = data[key];
    if (value !== undefined && value !== null && value !== "") {
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

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "שגיאה בשליחה");
  }

  return {
    success: true,
    referenceNumber: result.referenceNumber,
    message: result.message,
  };
}
