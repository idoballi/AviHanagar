import Link from "next/link";
import { business } from "@/config/business";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/80 py-12" aria-label="כותרת תחתונה">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Logo size="sm" variant="footer" className="mb-4" />
            <p className="text-sm text-white/60">{business.tagline}</p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-3">יצירת קשר</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`tel:${business.phone}`} className="hover:text-white transition-colors">
                  {business.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="hover:text-white transition-colors">
                  {business.email}
                </a>
              </li>
              <li>
                <a
                  href={business.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="text-white/50">{business.hours}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-3">קישורים</h3>
            <ul className="space-y-2 text-sm">
              {business.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  מדיניות פרטיות
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  תנאי שימוש
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © {year} {business.fullName}. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}
