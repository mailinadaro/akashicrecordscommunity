import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Footer from "@/components/sections/globales/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import GSAPRouteWatcher from "@/components/providers/GSAPRouteWatcher";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { siteConfig } from "@/config/site.config";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: [...siteConfig.seo.keywords],
  openGraph: {
    type: "website",
    locale: siteConfig.seo.locale,
    url: siteConfig.seo.siteUrl,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    siteName: siteConfig.brand.name,
    ...(siteConfig.seo.ogImage
      ? {
          images: [
            {
              url: siteConfig.seo.ogImage,
              width: 1200,
              height: 630,
              alt: siteConfig.brand.name,
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    ...(siteConfig.seo.ogImage ? { images: [siteConfig.seo.ogImage] } : {}),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="es" className={`${cormorantGaramond.variable} ${montserrat.variable}`} data-scroll-behavior="smooth">
      {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      <body className="antialiased">
        <SmoothScrollProvider>
          <div className="relative w-full">
            <main
              id="site-content"
              className="flex flex-col items-center justify-center w-full min-h-screen"
            >
              <GSAPRouteWatcher />
              {children}
            </main>
          </div>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
