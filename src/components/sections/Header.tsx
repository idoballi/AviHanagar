"use client";

import { useState } from "react";
import Link from "next/link";
import { business } from "@/config/business";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-charcoal/5 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href="#hero" aria-label="חזרה לראש הדף">
          <Logo size="md" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6" aria-label="ניווט ראשי">
          {business.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-charcoal/80 hover:text-forest transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            {business.ctaButton}
          </Button>

          <button
            type="button"
            className="lg:hidden p-2 text-charcoal"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="תפריט"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden border-t border-charcoal/5 bg-white px-4 py-4 space-y-3" aria-label="ניווט מובייל">
          {business.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2 text-charcoal/80 hover:text-forest font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button
            size="sm"
            className="w-full"
            onClick={() => {
              setMenuOpen(false);
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {business.ctaButton}
          </Button>
        </nav>
      )}
    </header>
  );
}
