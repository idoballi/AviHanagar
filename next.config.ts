import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    // עוקף בעיות אופטימיזציה עם OneDrive / קבצים מקומיים
    unoptimized: true,
  },
};

export default nextConfig;
