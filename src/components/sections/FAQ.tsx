"use client";

import { useState } from "react";
import { faqItems } from "@/data/faq";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="py-20 bg-white" aria-labelledby="faq-title">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionTitle title="שאלות נפוצות" id="faq-title" />

        <div className="space-y-3">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border border-wood-100 rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-5 text-left font-medium text-charcoal hover:bg-cream transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-forest"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${item.id}`}
                >
                  <span>{item.question}</span>
                  <span className="text-forest text-xl shrink-0 mr-4" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={`faq-${item.id}`}
                    className="px-5 pb-5 text-charcoal/70 leading-relaxed"
                    role="region"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
