interface SectionTitleProps {
  title: string;
  subtitle?: string;
  id?: string;
  className?: string;
}

export function SectionTitle({ title, subtitle, id, className = "" }: SectionTitleProps) {
  return (
    <div className={`text-center mb-12 ${className}`} id={id}>
      <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
