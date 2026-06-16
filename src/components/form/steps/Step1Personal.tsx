"use client";

import { useFormContext } from "react-hook-form";
import {
  CONTACT_METHODS,
  type LeadFormData,
} from "@/types/form";
import { FormField, inputClassName } from "@/components/ui/FormField";

export function Step1Personal() {
  const {
    register,
    formState: { errors },
  } = useFormContext<LeadFormData>();

  return (
    <div className="space-y-5">
      <FormField label="שם מלא" id="fullName" required error={errors.fullName?.message}>
        <input
          id="fullName"
          className={inputClassName}
          {...register("fullName")}
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
        />
      </FormField>

      <FormField label="מספר טלפון" id="phone" required error={errors.phone?.message}>
        <input
          id="phone"
          type="tel"
          dir="ltr"
          className={inputClassName}
          {...register("phone")}
          aria-invalid={!!errors.phone}
        />
      </FormField>

      <FormField label="כתובת מייל" id="email" error={errors.email?.message}>
        <input
          id="email"
          type="email"
          dir="ltr"
          className={inputClassName}
          {...register("email")}
        />
      </FormField>

      <FormField label="דרך מועדפת לחזרה" id="contactMethod" required error={errors.contactMethod?.message}>
        <div className="flex flex-wrap gap-3" role="group" aria-labelledby="contactMethod-label">
          {CONTACT_METHODS.map((method) => (
            <label key={method} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value={method}
                {...register("contactMethod")}
                className="w-4 h-4 text-forest focus:ring-forest"
              />
              <span>{method}</span>
            </label>
          ))}
        </div>
      </FormField>

      {/* Hidden for future use */}
      <input type="hidden" {...register("idNumber")} />
    </div>
  );
}
