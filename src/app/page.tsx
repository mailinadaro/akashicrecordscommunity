import HeroFullWindow from "@/components/sections/landing/HeroFullWindow";
import FounderStory from "@/components/sections/landing/FounderStory";
import ItinerariesListing from "@/components/sections/landing/ItinerariesListing";
import TimelineItinerary from "@/components/sections/landing/TimelineItinerary";
import OtherTripsSection from "@/components/sections/landing/OtherTripsSection";
import InvestmentSection from "@/components/sections/landing/InvestmentSection";
import FAQAccordion from "@/components/sections/landing/FAQAccordion";
import FinalCTA from "@/components/sections/landing/FinalCTA";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-start overflow-hidden">
      {/* 1. Hero Full Window */}
      <HeroFullWindow />


      {/* 3. Itineraries Listing */}
      <ItinerariesListing />

      {/* 4. Timeline Itinerary */}
      <TimelineItinerary />

      
      {/* 2. TAMARA */}
      <FounderStory />

  {/* 6. TESTIMONIOS */}

      {/* 6. Investment Section */}
      <InvestmentSection />

      {/* 7. FAQ Accordion */}
      <FAQAccordion />

         {/* 8. Final CTA */}
      <FinalCTA />

    {/* otros */}
      <OtherTripsSection />
   
    </div>
  );
}
