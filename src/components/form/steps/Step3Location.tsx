"use client";

import { useFormContext } from "react-hook-form";
import {
  ELEVATOR_OPTIONS,
  URGENCY_LEVELS,
  type LeadFormData,
} from "@/types/form";
import { FormField, inputClassName, selectClassName } from "@/components/ui/FormField";

export function Step3Location() {
  const {
    register,
    formState: { errors },
  } = useFormContext<LeadFormData>();

  return (
    <div className="space-y-5">
      <FormField label="עיר או יישוב" id="city" required error={errors.city?.message}>
        <input id="city" className={inputClassName} {...register("city")} />
      </FormField>

      <FormField label="כתובת מלאה" id="fullAddress">
        <input id="fullAddress" className={inputClassName} {...register("fullAddress")} />
      </FormField>

      <FormField label="קומה" id="floor">
        <input id="floor" className={inputClassName} {...register("floor")} />
      </FormField>

      <FormField label="מעלית" id="hasElevator">
        <select id="hasElevator" className={selectClassName} {...register("hasElevator")}>
          <option value="">בחרו</option>
          {ELEVATOR_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </FormField>

      <FormField label="מועד רצוי לביצוע" id="preferredDate">
        <input id="preferredDate" type="date" className={inputClassName} {...register("preferredDate")} />
      </FormField>

      <FormField label="רמת דחיפות" id="urgency">
        <select id="urgency" className={selectClassName} {...register("urgency")}>
          <option value="">בחרו</option>
          {URGENCY_LEVELS.map((level) => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>
      </FormField>
    </div>
  );
}
