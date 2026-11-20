import HeroFullWindow from "@/components/sections/excursiones/HeroFullWindow";
import FinalCTA from "@/components/sections/excursiones/FinalCTA";
import SplitContentSection from "@/components/sections/globales/SplitContentSection";
import ItinerariesListing from "@/components/sections/excursiones/ItinerariesListing";

export default function AllExcursiones() {
  return (
    <main className="relative w-full bg-background">
      <HeroFullWindow
        title="Nuestras Excursiones"
        backgroundImage="/generales/images (18).jpg"
      />

      <SplitContentSection
        heading="Explorá la belleza de Jujuy con nuestras excursiones"
        description="Descubrí la diversidad de experiencias que Jujuy tiene para ofrecer. Desde la majestuosidad de la Quebrada de Humahuaca hasta los paisajes únicos de la Puna, nuestras excursiones están diseñadas para brindarte una inmersión auténtica en la cultura, historia y naturaleza de esta región. Cada recorrido es una oportunidad para conectar con la esencia de Jujuy y crear recuerdos inolvidables."
      />

      <ItinerariesListing />

      <FinalCTA />
    </main>
  );
}
