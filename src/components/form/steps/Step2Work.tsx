"use client";

import { useFormContext, useWatch } from "react-hook-form";
import {
  HAS_PLAN_OPTIONS,
  PROJECT_CONTEXTS,
  WORK_TYPES,
  type LeadFormData,
} from "@/types/form";
import { FormField, inputClassName, selectClassName } from "@/components/ui/FormField";

export function Step2Work() {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<LeadFormData>();

  const noDimensions = useWatch({ control, name: "noDimensions" });

  return (
    <div className="space-y-5">
      <FormField label="סוג העבודה" id="workType" required error={errors.workType?.message}>
        <select id="workType" className={selectClassName} {...register("workType")}>
          <option value="">בחרו סוג עבודה</option>
          {WORK_TYPES.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </FormField>

      <FormField label="תיאור העבודה" id="workDescription" required error={errors.workDescription?.message}>
        <textarea
          id="workDescription"
          rows={4}
          className={inputClassName}
          {...register("workDescription")}
          placeholder="תארו את העבודה שאתם מחפשים..."
        />
      </FormField>

      <FormField label="עבור איזה חדר או חלל" id="roomOrSpace">
        <input id="roomOrSpace" className={inputClassName} {...register("roomOrSpace")} />
      </FormField>

      <FormField label="סוג פרויקט" id="projectContext">
        <select id="projectContext" className={selectClassName} {...register("projectContext")}>
          <option value="">בחרו</option>
          {PROJECT_CONTEXTS.map((ctx) => (
            <option key={ctx} value={ctx}>{ctx}</option>
          ))}
        </select>
      </FormField>

      <FormField label="תוכנית / סקיצה / השראה" id="hasPlan">
        <select id="hasPlan" className={selectClassName} {...register("hasPlan")}>
          <option value="">בחרו</option>
          {HAS_PLAN_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </FormField>

      <div className="space-y-3">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            {...register("noDimensions")}
            className="w-4 h-4 text-forest rounded focus:ring-forest"
          />
          <span>עדיין אין לי מידות</span>
        </label>

        {!noDimensions && (
          <div className="grid grid-cols-3 gap-3">
            <FormField label="רוחב (ס״מ)" id="width">
              <input id="width" className={inputClassName} {...register("width")} dir="ltr" />
            </FormField>
            <FormField label="גובה (ס״מ)" id="height">
              <input id="height" className={inputClassName} {...register("height")} dir="ltr" />
            </FormField>
            <FormField label="עומק (ס״מ)" id="depth">
              <input id="depth" className={inputClassName} {...register("depth")} dir="ltr" />
            </FormField>
          </div>
        )}
      </div>
    </div>
  );
}
