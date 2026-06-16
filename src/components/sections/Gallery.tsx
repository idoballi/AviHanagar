"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/data/gallery";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedImage = galleryImages.find((img) => img.id === selected);

  return (
    <section id="gallery" className="py-20 bg-cream" aria-labelledby="gallery-title">
      <div className="container mx-auto px-4">
        <SectionTitle title="עבודות אחרונות" id="gallery-title" />

        {galleryImages.length === 0 ? (
          <div className="text-center py-12 text-charcoal/60">
            <p>אין תמונות להצגה. הוסף תמונות ב־src/data/gallery.ts</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
                onClick={() => setSelected(image.id)}
                aria-label={`הגדל תמונה: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={index < 3 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors" />
              </button>
            ))}
          </div>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label="תצוגה מוגדלת"
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white text-3xl z-10 p-2"
            onClick={() => setSelected(null)}
            aria-label="סגור"
          >
            ×
          </button>
          <div className="relative w-full max-w-4xl aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
