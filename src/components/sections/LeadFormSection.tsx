import { business } from "@/config/business";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MultiStepForm } from "@/components/form/MultiStepForm";

export function LeadFormSection() {
  return (
    <section id="contact" className="py-20 bg-cream" aria-labelledby="contact-title">
      <div className="container mx-auto px-4 max-w-2xl">
        <SectionTitle
          title={business.form.title}
          subtitle={business.form.subtitle}
          id="contact-title"
        />
        <div className="bg-white rounded-2xl shadow-card p-6 md:p-8">
          <MultiStepForm />
        </div>
      </div>
    </section>
  );
}
