interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  id: string;
}

export function FormField({ label, error, required, children, id }: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-charcoal">
        {label}
        {required && <span className="text-forest mr-1" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-sm text-red-600" role="alert" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}

export const inputClassName =
  "w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20 transition-colors";

export const selectClassName = inputClassName;
