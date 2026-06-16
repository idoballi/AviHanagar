import { howItWorksSteps } from "@/data/howItWorks";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white" aria-labelledby="how-title">
      <div className="container mx-auto px-4">
        <SectionTitle title="איך זה עובד" subtitle="תהליך פשוט וברור מהפנייה ועד ההתקנה" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorksSteps.map((step) => (
            <article key={step.step} className="text-center">
              <div
                className="w-14 h-14 rounded-full bg-forest text-white text-xl font-bold flex items-center justify-center mx-auto mb-4 shadow-soft"
                aria-hidden="true"
              >
                {step.step}
              </div>
              <h3 id="how-title" className="text-lg font-bold text-charcoal mb-2">
                {step.title}
              </h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
