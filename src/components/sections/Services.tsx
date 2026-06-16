import { services } from "@/data/services";
import { SectionTitle } from "@/components/ui/SectionTitle";

const icons: Record<string, React.ReactNode> = {
  kitchen: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M5 10V7a2 2 0 012-2h10a2 2 0 012 2v3M5 10v9h14v-9M9 14h6" />
    </svg>
  ),
  closet: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16v14H4z M12 6v14 M8 10h2 M14 10h2" />
    </svg>
  ),
  buffet: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16v10H4z M6 18v2 M18 18v2 M4 12h16" />
    </svg>
  ),
  kids: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4a3 3 0 100 6 3 3 0 000-6z M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
    </svg>
  ),
  custom: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4H4a1 1 0 00-1 1v15a1 1 0 001 1h15a1 1 0 001-1v-7 M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
  repair: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
};

export function Services() {
  return (
    <section id="services" className="py-20 bg-white" aria-labelledby="services-title">
      <div className="container mx-auto px-4">
        <SectionTitle title="השירותים שלנו" subtitle="פתרונות נגרות מותאמים אישית לכל חלל בבית" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="group p-6 rounded-xl bg-cream border border-wood-100 hover:shadow-card hover:border-wood-200 transition-all duration-300"
            >
              <div className="text-forest mb-4 group-hover:scale-110 transition-transform duration-300">
                {icons[service.icon]}
              </div>
              <h3 id="services-title" className="text-xl font-bold text-charcoal mb-2">
                {service.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
