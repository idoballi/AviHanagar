"use client";

import { useFormContext } from "react-hook-form";
import { business } from "@/config/business";
import { BUDGET_RANGES, type LeadFormData } from "@/types/form";
import { FormField, selectClassName } from "@/components/ui/FormField";
import { ImageUploader } from "@/components/form/ImageUploader";

export function Step4Budget() {
  const { register, setValue, watch } = useFormContext<LeadFormData>();
  const images = watch("images") || [];

  return (
    <div className="space-y-5">
      <FormField label="טווח תקציב משוער" id="budgetRange">
        <select id="budgetRange" className={selectClassName} {...register("budgetRange")}>
          <option value="">בחרו</option>
          {BUDGET_RANGES.map((range) => (
            <option key={range} value={range}>{range}</option>
          ))}
        </select>
      </FormField>

      <FormField label="תמונות" id="images">
        <ImageUploader
          images={images}
          onChange={(files) => setValue("images", files, { shouldValidate: true })}
          helpText={business.form.imageHelp}
        />
      </FormField>
    </div>
  );
}
