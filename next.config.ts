import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Images are served locally from /public/images (no external dependency).
    // Unoptimized keeps the site deployable to any static host; flip this off
    // to let Vercel optimise once hosting is settled.
    unoptimized: true,
  },
  // Security headers applied to every route.
  // NOTE: a Content-Security-Policy is deliberately omitted here. The live site
  // uses an inline theme-toggle script, and a wrong CSP would break it. Adding a
  // CSP is a follow-up that needs to be worked out and tested against that inline
  // script (e.g. via a nonce) before it can be turned on safely.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
