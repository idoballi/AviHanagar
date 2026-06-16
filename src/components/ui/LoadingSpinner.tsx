export function LoadingSpinner({ label = "טוען..." }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12" role="status">
      <div
        className="h-10 w-10 animate-spin rounded-full border-4 border-wood-200 border-t-forest"
        aria-hidden="true"
      />
      <p className="text-charcoal/70">{label}</p>
    </div>
  );
}
