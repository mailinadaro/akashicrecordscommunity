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
    readonly address: {
      readonly city: string;
      readonly province: string;
      readonly country: string;
    };
  };
  readonly social: readonly SocialLink[];
  readonly legal: readonly LegalLink[];
  readonly credits: {
    readonly author: {
      readonly name: string;
      readonly url: string;
    };
    readonly photography: {
      readonly name: string;
      readonly url: string;
    };
  };
  readonly navigation: {
    readonly main: readonly (NavMenuItem & { readonly image: string })[];
    readonly footer: readonly NavMenuItem[];
  };
  readonly analytics?: {
    readonly ga4PropertyId: string;
  };
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "Adaro Viajes",
    legalName: "Jujuy Adentro Expediciones Privadas",
    tagline: "Viajes a Medida y Excursiones Privadas",
    watermark: "ADARO VIAJES",
    description: "Disfruta de Jujuy de forma privada y personalizada.",
    logo: {
      src: "/logoADARO.svg",
      alt: "Logo de Jujuy Adentro",
      width: 150,
      height: 50,
    },
  },
  seo: {
    defaultTitle: "Jujuy Adentro — Viajes a Medida y Excursiones Privadas",
    titleTemplate: "%s | Jujuy Adentro",
    defaultDescription:
      "Disfruta de Jujuy de forma privada y personalizada con expediciones exclusivas por la Quebrada de Humahuaca, Puna y Salinas Grandes.",
    siteUrl: "https://excursiones.adaroviajes.com",
    ogImage: "/default.jpg",
    keywords: [
      "Jujuy",
      "Turismo Jujuy",
      "Excursiones Privadas Jujuy",
      "Viajes a Medida",
      "Salinas Grandes",
      "Quebrada de Humahuaca",
      "Purmamarca",
      "Tilcara",
      "Hornocal",
    ],
    locale: "es_AR",
  },
  contact: {
    email: "info@jujuyadentro.com.ar",
    phone: "+5492804292490",
    phoneDisplay: "+54 9 280 429-2490",
    whatsapp:
      "https://api.whatsapp.com/send?phone=+2804292490&text=%C2%A1Hola!%20Acabo%20de%20enviar%20una%20consulta%20desde%20la%20web%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20mi%20viaje%20a%20Jujuy.",
    address: {
      city: "San Salvador de Jujuy",
      province: "Jujuy",
      country: "Argentina",
    },
  },
  social: [
    { label: "Instagram", href: "https://www.instagram.com" },
    { label: "Facebook", href: "https://www.facebook.com" },
  ],
  legal: [
    { label: "Website Terms of Use", href: "/legal/website-terms" },
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Cookies Policy", href: "/legal/cookies-policy" },
  ],
  credits: {
    author: {
      name: "Mailin Adaro",
      url: "https://www.linkedin.com/in/mailinadaro/",
    },
    photography: {
      name: "x.",
      url: "https://www.instagram.com/farfan/",
    },
  },
  navigation: {
    main: [
      { label: "Inicio", href: "/", image: "/default.jpg" },
      { label: "Excursiones", href: "/excursiones", image: "/excursiones.jpg" },
      { label: "Viajes a Medida", href: "/viajes-a-medida", image: "/viajes-a-medida.jpg" },
      { label: "Sobre Nosotros", href: "/sobre-nosotros", image: "/nosotros.jpg" },
      { label: "Contacto", href: "/contacto", image: "/contacto.jpg" },
    ],
    footer: [
      { href: "/", label: "Inicio" },
      { href: "/sobre-nosotros", label: "Sobre Nosotros" },
      { href: "/excursiones", label: "Nuestras Excursiones" },
      { href: "/viajes-a-medida", label: "Diseña tu Viaje a medida" },
      { href: "/contacto", label: "Contacto" },
    ],
  },
  analytics: {
    ga4PropertyId: process.env.GA4_PROPERTY_ID || "560524900",
  },
};

export default siteConfig;
