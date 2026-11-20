import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import Navigation from "@/components/sections/globales/Navigation";
import Footer from "@/components/sections/globales/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import GSAPRouteWatcher from "@/components/providers/GSAPRouteWatcher";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google';
import { siteConfig } from "@/config/site.config";

// const lenis = new Lenis();

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
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
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.brand.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [siteConfig.seo.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${lora.variable} ${sourceSans3.variable}`} data-scroll-behavior="smooth">
      <GoogleTagManager gtmId="GTM-TVL9CDTK" /> 
      <body className="antialiased">
        <SmoothScrollProvider>
          <Navigation />
       <div className="relative w-full">
          <main
            id="site-content"
            className="flex flex-col items-center justify-center w-full"
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

