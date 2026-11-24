import type { Metadata } from "next";
import HeroFullWindow from "@/components/sections/landing/HeroFullWindow";
import IdentificationIllustratedSection from "@/components/sections/landing/IdentificationIllustratedSection";
import TransformationSection from "@/components/sections/landing/TransformationSection";
import TimelineItinerary from "@/components/sections/landing/TimelineItinerary";
import FounderStory from "@/components/sections/landing/FounderStory";
import ItinerariesListing from "@/components/sections/landing/ItinerariesListing";
import TwentyOneDaysPracticeSection from "@/components/sections/landing/TwentyOneDaysPracticeSection";
import OtherTripsSection from "@/components/sections/landing/OtherTripsSection";
import InvestmentSection from "@/components/sections/landing/InvestmentSection";
import FAQAccordion from "@/components/sections/landing/FAQAccordion";
import FinalCTA from "@/components/sections/landing/FinalCTA";
import VideoTestimonials from "@/components/sections/landing/VideoTestimonials";

export const metadata: Metadata = {
  title: "Iniciación",
  description: "Espacio de formación, lectura e iniciación en Registros Akáshicos.",
};

export default function IniciacionPage() {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      {/* 1. Hero Definitivo (Video Full Window) */}
      <HeroFullWindow />

      {/* 2. Sección de Identificación Ilustrada: ¿Es para ti? */}
      <IdentificationIllustratedSection />

      {/* 3. Sección de Transformación Concreta: De la curiosidad a la experiencia */}
      <TransformationSection />

      {/* 4. Sección de La Propuesta: Un proceso de tres semanas (Timeline Cinemático) */}
      <TimelineItinerary />

      {/* 5. Itineraries Listing (Capítulos I, II y III paso a paso) */}
      <ItinerariesListing />

      {/* 6. Los 21 Días de Práctica: Bitácora de Integración */}
      <TwentyOneDaysPracticeSection />

      {/* 7. Tamara — Founder Story */}
      <FounderStory />

      {/* 8. Video Testimonials */}
      <VideoTestimonials />

      {/* 9. Investment Section */}
      <InvestmentSection />

      {/* 10. FAQ Accordion */}
      <FAQAccordion />

      {/* 11. Final CTA */}
      <FinalCTA />

    </div>
  );
}
