import Image from "next/image";
import { business } from "@/config/business";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?: "default" | "footer";
}

const sizes = {
  sm: "h-10",
  md: "h-14",
  lg: "h-16",
};

export function Logo({ size = "md", className = "", variant = "default" }: LogoProps) {
  return (
    <Image
      src={business.logo.src}
      alt={business.logo.alt}
      width={400}
      height={160}
      className={`w-auto object-contain object-left ${sizes[size]} ${className} ${
        variant === "footer" ? "brightness-0 invert" : ""
      }`}
      style={{ width: "auto", maxHeight: size === "sm" ? "40px" : size === "md" ? "56px" : "64px" }}
      priority={size !== "sm"}
    />
  );
}
