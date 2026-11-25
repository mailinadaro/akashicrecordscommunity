/**
 * Site Configuration Manifest
 * Boilerplate v1.0 — Architecture Standard
 *
 * Centralized, type-safe configuration object containing brand identity,
 * SEO defaults, contact details, legal references, and global navigation menus.
 */

export interface NavMenuItem {
  readonly label: string;
  readonly href: string;
  readonly image?: string;
}

export interface SocialLink {
  readonly label: string;
  readonly href: string;
}

export interface LegalLink {
  readonly label: string;
  readonly href: string;
}

export interface SiteConfig {
  readonly brand: {
    readonly name: string;
    readonly legalName: string;
    readonly tagline: string;
    readonly watermark: string;
    readonly description: string;
    readonly logo: {
      readonly src: string;
      readonly alt: string;
      readonly width: number;
      readonly height: number;
    };
  };
  readonly seo: {
    readonly defaultTitle: string;
    readonly titleTemplate: string;
    readonly defaultDescription: string;
    readonly siteUrl: string;
    readonly ogImage: string;
    readonly keywords: readonly string[];
    readonly locale: string;
  };
  readonly contact: {
    readonly email: string;
    readonly phone: string;
    readonly phoneDisplay: string;
    readonly whatsapp: string;
    readonly hotmart: string;
    readonly address: {
      readonly city: string;
      readonly province: string;
      readonly country: string;
    };
  };
  readonly bookingUrl: string;
  readonly hotmartUrl: string;
  readonly social: readonly SocialLink[];
  readonly legal: readonly LegalLink[];
  readonly credits: {
    readonly author: {
      readonly name: string;
      readonly url: string;
    };
    readonly photography?: {
      readonly name: string;
      readonly url: string;
    };
  };
  readonly navigation: {
    readonly main: readonly NavMenuItem[];
    readonly footer: readonly NavMenuItem[];
  };
  readonly analytics?: {
    readonly ga4PropertyId: string;
  };
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "Iniciación Akáshica",
    legalName: "Iniciación Akáshica",
    tagline: "Iniciación y Lectura en Registros Akáshicos",
    watermark: "INICIACIÓN AKÁSHICA",
    description: "Espacio de formación, lectura e iniciación en Registros Akáshicos.",
    logo: {
      src: "",
      alt: "Iniciación Akáshica",
      width: 150,
      height: 50,
    },
  },
  seo: {
    defaultTitle: "Iniciación Akáshica — Registros Akáshicos",
    titleTemplate: "%s | Iniciación Akáshica",
    defaultDescription:
      "Espacio de formación, lectura e iniciación en Registros Akáshicos.",
    siteUrl: (
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://akashicrecordscommunity.vercel.app"
    ).replace(/\/$/, ""),
    ogImage: "/og/entre-dos-ciclos.jpg",
    keywords: [
      "Iniciación Akáshica",
      "Registros Akáshicos",
      "Lectura de Registros Akáshicos",
      "Espiritualidad",
      "Akashic Records Community",
    ],
    locale: "es_MX",
  },
  contact: {
    email: "akashicrecordscommunity@gmail.com",
    phone: "+525559465126",
    phoneDisplay: "+52 55 5946 5126",
    whatsapp: "https://wa.me/525559465126",
    hotmart: "https://pay.hotmart.com/K108578931R?bid=1795209625313",
    address: {
      city: "Tepoztlán",
      province: "México",
      country: "México",
    },
  },
  bookingUrl: "https://pay.hotmart.com/K108578931R?bid=1795209625313",
  hotmartUrl: "https://pay.hotmart.com/K108578931R?bid=1795209625313",
  social: [
    { label: "Instagram", href: "https://www.instagram.com/akashicrecordscommunity/" },
    { label: "Facebook", href: "https://www.facebook.com/akashicrecordscommunity" },
    { label: "YouTube", href: "https://www.youtube.com/@akashicrecordscommunity" },
    { label: "Spotify", href: "https://open.spotify.com/show/1Y8lvG7EDuPstSoVitWyDs" },
  ],
  legal: [],
  credits: {
    author: {
      name: "Diseño y Desarrollo por: Mailin Adaro",
      url: "https://www.linkedin.com/in/mailinadaro/",
    },
  },
  navigation: {
    main: [],
    footer: [],
  },
  analytics: {
    ga4PropertyId: process.env.GA4_PROPERTY_ID || "",
  },
};

export default siteConfig;
