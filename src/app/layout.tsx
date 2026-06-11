import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE } from "@/content/site";

const fraunces = Fraunces({
  // Variable font: opsz + wght axes. Do not also pin `weight` (Next.js rejects that combo).
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  variable: "--font-display",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aseanhdo.com"),
  title: {
    default: `${SITE.name} — AHDO`,
    template: "%s — AHDO",
  },
  description:
    "The ASEAN Human Development Organisation (AHDO) advances the potential and well-being of people across Southeast Asia through research, the ASEAN Human Development Index, certification, and advocacy.",
  keywords: [
    "ASEAN",
    "human development",
    "Southeast Asia",
    "AHDO",
    "ASEAN Human Development Index",
    "AHDI",
  ],
  openGraph: {
    title: `${SITE.name} — AHDO`,
    description:
      "Advancing the potential and well-being of people across Southeast Asia.",
    type: "website",
    locale: "en_SG",
  },
  // Pre-launch preview: keep it out of search engines. Remove before going public.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f1e8" },
    { media: "(prefers-color-scheme: dark)", color: "#12181c" },
  ],
  colorScheme: "light dark",
};

// Set theme class before paint to avoid a flash.
const themeScript = `(function(){try{var t=localStorage.getItem('ahdo-theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t!=='light'&&m)){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${jakarta.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
