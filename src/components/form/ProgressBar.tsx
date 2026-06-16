interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  labels?: string[];
}

export function ProgressBar({ currentStep, totalSteps, labels }: ProgressBarProps) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="mb-8" aria-label={`שלב ${currentStep + 1} מתוך ${totalSteps}`}>
      <div className="flex justify-between text-sm text-charcoal/60 mb-2">
        <span>שלב {currentStep + 1} מתוך {totalSteps}</span>
        {labels?.[currentStep] && <span>{labels[currentStep]}</span>}
      </div>
      <div className="h-2 rounded-full bg-wood-100 overflow-hidden">
        <div
          className="h-full bg-forest transition-all duration-300 rounded-full"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={currentStep + 1}
          aria-valuemin={1}
          aria-valuemax={totalSteps}
        />
      </div>
    </div>
  );
}
