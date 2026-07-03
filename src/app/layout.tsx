import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE } from "@/content/site";

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
  themeColor: "#f5f1e8",
  colorScheme: "light dark",
};

// Set theme class before paint to avoid a flash. Brand default is light: dark is
// only applied when the visitor has explicitly chosen it via the toggle.
const themeScript = `(function(){try{if(localStorage.getItem('ahdo-theme')==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full"
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
