import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import { business } from "@/config/business";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${business.fullName} | נגרות בהתאמה אישית`,
  description: business.hero.subtitle,
  openGraph: {
    title: business.fullName,
    description: business.hero.subtitle,
    locale: "he_IL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className="font-sans wood-texture min-h-screen">{children}</body>
    </html>
  );
}
