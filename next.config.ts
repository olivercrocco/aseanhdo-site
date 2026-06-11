import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Images are served locally from /public/images (no external dependency).
    // Unoptimized keeps the site deployable to any static host; flip this off
    // to let Vercel optimise once hosting is settled.
    unoptimized: true,
  },
};

export default nextConfig;
