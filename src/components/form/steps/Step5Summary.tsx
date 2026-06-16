"use client";

import { useFormContext, useWatch } from "react-hook-form";
import type { LeadFormData } from "@/types/form";
import { FormField } from "@/components/ui/FormField";

export function Step5Summary() {
  const { register, formState: { errors }, control } = useFormContext<LeadFormData>();
  const data = useWatch({ control });

  const fields: { label: string; value: string | undefined }[] = [
    { label: "שם", value: data.fullName },
    { label: "טלפון", value: data.phone },
    { label: "מייל", value: data.email },
    { label: "חזרה", value: data.contactMethod },
    { label: "סוג עבודה", value: data.workType },
    { label: "תיאור", value: data.workDescription },
    { label: "חדר/חלל", value: data.roomOrSpace },
    { label: "סוג פרויקט", value: data.projectContext },
    { label: "עיר", value: data.city },
    { label: "תקציב", value: data.budgetRange },
    { label: "דחיפות", value: data.urgency },
    { label: "תמונות", value: data.images?.length ? `${data.images.length} תמונות` : "ללא" },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-cream rounded-xl p-6 space-y-3">
        <h3 className="font-bold text-charcoal mb-4">סיכום הבקשה</h3>
        {fields
          .filter((f) => f.value)
          .map((field) => (
            <div key={field.label} className="flex justify-between text-sm gap-4">
              <span className="text-charcoal/60 shrink-0">{field.label}</span>
              <span className="text-charcoal text-right">{field.value}</span>
            </div>
          ))}
      </div>

      <FormField
        label=""
        id="consentContact"
        error={errors.consentContact?.message}
      >
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("consentContact")}
            className="w-4 h-4 mt-1 text-forest rounded focus:ring-forest"
          />
          <span>אני מאשר/ת שאבי הנגר יחזור אליי בנוגע לפנייה</span>
        </label>
      </FormField>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          {...register("consentMarketing")}
          className="w-4 h-4 mt-1 text-forest rounded focus:ring-forest"
        />
        <span>אשמח לקבל עדכונים והצעות בעתיד</span>
      </label>
    </div>
  );
}
