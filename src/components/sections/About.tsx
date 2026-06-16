import Image from "next/image";
import { business } from "@/config/business";

export function About() {
  return (
    <section id="about" className="py-20 bg-cream" aria-labelledby="about-title">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-card">
            <Image
              src={business.images.about}
              alt="אבי הנגר – נגרות בהתאמה אישית"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>

          <div>
            <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              {business.about.title}
            </h2>
            <p className="text-lg text-charcoal/80 leading-relaxed">{business.about.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
