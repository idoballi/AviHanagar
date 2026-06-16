"use client";

import Image from "next/image";
import { business } from "@/config/business";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center bg-cream"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={business.images.hero}
          alt="עבודת נגרות מותאמת אישית"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {business.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            {business.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {business.hero.primaryCta}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="!border-white/40 !text-white hover:!bg-white/10 hover:!border-white"
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
            >
              {business.hero.secondaryCta}
            </Button>
          </div>

          <p className="text-white/70 text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-forest" aria-hidden="true" />
            {business.hero.trustText}
          </p>
        </div>
      </div>
    </section>
  );
}
