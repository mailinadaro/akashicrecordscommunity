import { StaticImageData } from 'next/image';

////////////////////////////////////////////////////////////////////
// MODELO DE DATOS DE EXCURSIÓN (CMS / JSON)
////////////////////////////////////////////////////////////////////

export interface ExcursionMeta {
  title: string;
  description: string;
}

export interface ExcursionHeroContent {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  videoUrl?: string;
  alt?: string;
}

export interface ExcursionImageFeatureParallax {
  id?: string;
  image: string | string[];
  alt?: string;
}

export interface ExcursionSplitContent {
  id?: string;
  heading: string;
  description: string;
  image?: string;
  imagePosition?: 'left' | 'right' | string;
  theme?: 'light' | 'dark' | 'transparent' | string;
}

export interface ExcursionSectionHeader {
  id?: string;
  title?: string;
  subtitle?: string;
}

export interface ItineraryStepData {
  dayNumber: string | number;
  title: string;
  description: string;
  image: string | StaticImageData;
  imageAlt?: string;
}

export interface ExcursionTimelineItinerary {
  days: ItineraryStepData[];
}

export interface FAQItemData {
  id?: string;
  question: string;
  answer: string | React.ReactNode;
}

export interface ExcursionFAQ {
  id?: string;
  title?: string;
  items: FAQItemData[];
}

export interface ExcursionFinalCTA {
  title: string;
  description?: string;
  buttonLabel: string;
  buttonHref: string;
  bgImage?: string;
}

export interface ExcursionContent {
  hero: ExcursionHeroContent;
  imageFeatureParallax?: ExcursionImageFeatureParallax;
  splitContent?: ExcursionSplitContent;
  sectionHeader?: ExcursionSectionHeader;
  timelineItinerary?: ExcursionTimelineItinerary;
  faq?: ExcursionFAQ;
  finalCTA?: ExcursionFinalCTA;
  quoteBanner?: {
    text?: string;
    author?: string;
    bgImage?: string;
  };
  carouselGallery?: {
    title?: string;
    slides?: Array<{ imageUrl: string; caption?: string }>;
  };
  [key: string]: unknown;
}

export interface Excursion {
  id: string;
  slug: string;
  type: string;
  category?: string;
  meta: ExcursionMeta;
  content: ExcursionContent;
}

/**
 * Alias de conveniencia arquitectónica para la página de viaje
 */
export type TripPageData = Excursion;


////////////////////////////////////////////////////////////////////
// TIPADO DE COMPONENTES DE SECCIÓN (PROPS)
////////////////////////////////////////////////////////////////////

export interface HeroProps {
  title: string;
  subtitle?: string;
  priceTag?: string;
  backgroundImage: string | StaticImageData;
  videoUrl?: string;
  ctaLabel: string;
  ctaLink: string;
}

export interface NavLink {
  label: string;
  target: string;
}

export interface StickyActionNavProps {
  links: NavLink[];
  ctaButton?: {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary';
  };
  logoVisible?: boolean;
}

export interface SplitContentProps {
  heading: string;
  description: string;
  image?: string | StaticImageData;
  imagePosition?: 'left' | 'right';
  theme?: 'light' | 'dark' | 'transparent';
  button?: {
    label: string;
    href: string;
  };
}

export interface ItineraryProps {
  title: string;
  subtitle?: string;
  days: ItineraryStepData[];
}

export interface TripCard {
  title: string;
  location?: string;
  price?: string;
  thumbnail: string | StaticImageData;
  href: string;
}

export interface RelatedContentCardsProps {
  title: string;
  trips: TripCard[];
  layout?: 'grid' | 'slider';
}

export interface FinalCTAProps {
  title: string;
  buttonLabel: string;
  buttonHref: string;
  bgImage: string | StaticImageData;
  isExternal?: boolean;
}

export interface QuoteProps {
  text: string;
  author?: string;
  bgImage: string | StaticImageData;
  overlayOpacity?: number;
}

export interface GalleryProps {
  title: string;
  slides: {
    imageUrl: string | StaticImageData;
    caption?: string;
  }[];
  autoPlay?: boolean;
}

export interface ImageFeatureParallaxProps {
  id?: string;
  image: string | StaticImageData;
  alt: string;
  insetEffect?: boolean;
  priority?: boolean;
}

export interface SectionHeaderProps {
  id?: string;
  title: string;
  subtitle?: string;
  showDivider?: boolean;
  decorationSvg?: 'wave' | 'scribble' | 'straight';
  alignment?: 'left' | 'center';
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string | React.ReactNode;
  imageUrl?: string;
}

export interface FeatureGridProps {
  id?: string;
  title?: string;
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
}
