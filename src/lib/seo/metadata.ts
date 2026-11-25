import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

export interface PageOgImage {
  readonly url: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
}

export interface PageMetadataInput {
  readonly title: string;
  readonly absoluteTitle?: boolean;
  readonly description: string;
  readonly path: string;
  readonly image?: PageOgImage;
  readonly noIndex?: boolean;
}

/**
 * Builds consistent, type-safe Next.js Metadata (canonical, OpenGraph, Twitter, robots)
 * for every route in src/app/.
 */
export function buildPageMetadata({
  title,
  absoluteTitle = false,
  description,
  path,
  image,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const canonicalUrl = new URL(path, siteConfig.seo.siteUrl).toString();

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.seo.locale,
      url: canonicalUrl,
      siteName: "Akashic Records Community",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      ...(image ? { images: [image.url] } : {}),
    },
    ...(noIndex
      ? {
          robots: {
            index: false,
            follow: false,
            nocache: true,
            googleBot: {
              index: false,
              follow: false,
              noimageindex: true,
            },
          },
        }
      : {
          robots: {
            index: true,
            follow: true,
          },
        }),
  };
}
