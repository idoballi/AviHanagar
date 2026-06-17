"use client";

import { useCallback, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  leadFormSchema,
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
  step5Schema,
  type LeadFormData,
} from "@/types/form";
import { saveFormToStorage, loadFormFromStorage, clearFormStorage } from "@/lib/formStorage";
import { submitLeadForm } from "@/lib/submitForm";
import { ProgressBar } from "@/components/form/ProgressBar";
import { Button } from "@/components/ui/Button";
import { Step1Personal } from "@/components/form/steps/Step1Personal";
import { Step2Work } from "@/components/form/steps/Step2Work";
import { Step3Location } from "@/components/form/steps/Step3Location";
import { Step4Budget } from "@/components/form/steps/Step4Budget";
import { Step5Summary } from "@/components/form/steps/Step5Summary";

const STEPS = [
  { schema: step1Schema, component: Step1Personal, label: "פרטים אישיים" },
  { schema: step2Schema, component: Step2Work, label: "פרטי העבודה" },
  { schema: step3Schema, component: Step3Location, label: "מיקום וזמנים" },
  { schema: step4Schema, component: Step4Budget, label: "תקציב ותמונות" },
  { schema: step5Schema, component: Step5Summary, label: "אישור ושליחה" },
];

const defaultValues: Partial<LeadFormData> = {
  fullName: "",
  phone: "",
  email: "",
  contactMethod: undefined,
  idNumber: "",
  workType: undefined,
  workDescription: "",
  roomOrSpace: "",
  projectContext: undefined,
  hasPlan: undefined,
  width: "",
  height: "",
  depth: "",
  noDimensions: false,
  city: "",
  fullAddress: "",
  floor: "",
  hasElevator: undefined,
  preferredDate: "",
  urgency: undefined,
  budgetRange: undefined,
  images: [],
  consentContact: undefined,
  consentMarketing: false,
};

interface SuccessStateProps {
  referenceNumber: string;
  onReset: () => void;
}

function SuccessState({ referenceNumber, onReset }: SuccessStateProps) {
  return (
    <div className="text-center py-12 animate-fade-in" role="status">
      <div className="w-16 h-16 rounded-full bg-forest/10 text-forest flex items-center justify-center mx-auto mb-6 text-3xl">
        ✓
      </div>
      <h3 className="text-2xl font-bold text-charcoal mb-3">הבקשה התקבלה בהצלחה</h3>
      <p className="text-charcoal/70 mb-2">אבי יעבור על הפרטים ויחזור אליכם בהקדם</p>
      <p className="text-sm text-charcoal/50 mb-8">
        מספר פנייה: <span className="font-mono font-bold">{referenceNumber}</span>
      </p>
      <Button variant="outline" onClick={onReset}>שליחת בקשה נוספת</Button>
    </div>
  );
}

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [success, setSuccess] = useState<{ referenceNumber: string } | null>(null);

  const methods = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues,
    mode: "onTouched",
  });

  const { watch, trigger, handleSubmit, reset } = methods;
  const formData = watch();

  useEffect(() => {
    const stored = loadFormFromStorage();
    if (Object.keys(stored).length > 0) {
      reset({ ...defaultValues, ...stored, images: [] });
    }
  }, [reset]);

  useEffect(() => {
    const timer = setTimeout(() => {
      saveFormToStorage(formData);
    }, 500);
    return () => clearTimeout(timer);
  }, [formData]);

  const validateStep = useCallback(async () => {
    const stepFields = Object.keys(STEPS[currentStep].schema.shape) as (keyof LeadFormData)[];
    return trigger(stepFields);
  }, [currentStep, trigger]);

  const goNext = async () => {
    const valid = await validateStep();
    if (valid) setCurrentStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const goBack = () => setCurrentStep((s) => Math.max(s - 1, 0));

  const onSubmit = async (data: LeadFormData) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const result = await submitLeadForm(data);
      if (result.success) {
        clearFormStorage();
        setSuccess({ referenceNumber: result.referenceNumber });
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "שגיאה בשליחה. נסו שוב או צרו קשר בטלפון.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    reset(defaultValues);
    clearFormStorage();
    setSuccess(null);
    setCurrentStep(0);
  };

  if (success) {
    return <SuccessState referenceNumber={success.referenceNumber} onReset={handleReset} />;
  }

  const StepComponent = STEPS[currentStep].component;
  const isLastStep = currentStep === STEPS.length - 1;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="טופס בקשה להצעת מחיר">
        <ProgressBar
          currentStep={currentStep}
          totalSteps={STEPS.length}
          labels={STEPS.map((s) => s.label)}
        />

        <div className="mb-8">
          <StepComponent />
        </div>

        {submitError && (
          <p className="text-red-600 text-sm mb-4" role="alert">{submitError}</p>
        )}

        <div className="flex justify-between gap-4">
          {currentStep > 0 ? (
            <Button type="button" variant="outline" onClick={goBack} disabled={isSubmitting}>
              חזרה
            </Button>
          ) : (
            <div />
          )}

          {isLastStep ? (
            <Button type="submit" isLoading={isSubmitting} disabled={isSubmitting}>
              שליחת הבקשה
            </Button>
          ) : (
            <Button type="button" onClick={goNext}>
              המשך
            </Button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
