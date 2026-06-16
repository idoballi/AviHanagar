import Image from "next/image";
import { business } from "@/config/business";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: { width: 120, height: 48, className: "h-10 w-auto" },
  md: { width: 160, height: 64, className: "h-14 w-auto" },
  lg: { width: 200, height: 80, className: "h-16 w-auto" },
};

export function Logo({ size = "md", className = "" }: LogoProps) {
  const s = sizes[size];
  return (
    <Image
      src={business.logo.src}
      alt={business.logo.alt}
      width={s.width}
      height={s.height}
      className={`object-contain ${s.className} ${className}`}
      priority={size !== "sm"}
    />
  );
}
