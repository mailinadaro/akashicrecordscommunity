import Image, { StaticImageData } from "next/image";
import { TimelineItineraryCinematicWrapper } from "@/components/animations/TimelineItineraryCinematicWrapper";

export interface ItineraryStep {
  dayNumber: string | number;
  title: string;
  description: string;
  image: string | StaticImageData;
  imageAlt?: string;
}

interface TimelineItineraryProps {
  heading: string;
  subheading?: string;
  noteTitle?: string;
  noteText?: string;
  steps: ItineraryStep[];
}

export default function TimelineItinerary({
  heading,
  subheading,
  noteTitle,
  noteText,
  steps = [],
}: TimelineItineraryProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <TimelineItineraryCinematicWrapper>
      <section
        id="itinerario"
        data-itinerary-section
        className="w-full  bg-earth-950 text-warm-50 relative selection:bg-ochre-500 selection:text-earth-900"
      >
        <div
          data-itinerary-layout
          style={{ height: `calc(75svh * ${steps.length})` }}
          className="w-full grid grid-cols-1 lg:grid-cols-12 relative"
        >
          {/* Pilar 1: Columna Lateral Sticky en Desktop (4 columnas) */}
          <aside className="lg:col-span-4 p-8 lg:p-12 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between z-20">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif uppercase tracking-tight text-warm-50 leading-[1.15]">
                {heading}
              </h2>
              {subheading && (
                <p className="mt-4 text-xs uppercase tracking-widest font-sans font-medium">
                  {subheading}
                </p>
              )}
            </div>

            {(noteTitle || noteText) && (
              <div className="mt-10 lg:mt-0 pt-8 border-t border-earth-700/40">
                {noteTitle && (
                  <h4 className="text-sm font-serif italic text-warm-50/90 mb-2">
                    {noteTitle}
                  </h4>
                )}
                {noteText && (
                  <p className="text-xs sm:text-sm text-warm-50/60 leading-relaxed font-light">
                    {noteText}
                  </p>
                )}
              </div>
            )}
          </aside>

          {/* Pilar 2: Marco Unificado Sticky en Desktop (8 columnas) */}
          <div className="lg:col-span-8 lg:sticky lg:top-0 lg:h-screen flex items-center z-10">
            <div
              data-itinerary-frame
              className="w-full overflow-hidden flex flex-col lg:flex-row lg:h-screen relative"
            >
              {/* Sub-columna 1: Riel de Narrativa de Texto (50% en desktop) */}
              <div
                data-itinerary-text-column
                className="w-full lg:w-1/2 h-auto lg:h-full relative overflow-hidden flex flex-col"
              >
                <div
                  data-itinerary-track
                  className="m-2 w-full flex flex-col gap-2"
                >
                  {steps.map((step, idx) => {
                    const formattedDay = String(step.dayNumber).padStart(
                      2,
                      "0",
                    );

                    return (
                      <article
                        key={`step-${step.dayNumber}-${idx}`}
                        data-itinerary-item={idx}
                        className="w-full p-6 sm:p-8 lg:p-10 flex flex-col justify-center min-h-auto lg:min-h-[39vh] relative bg-earth-900"
                      >
                        <span
                          data-step-number
                          className="text-4xl pb-50 lg:text-6xl font-serif italic select-none block mb-3 tracking-tight"
                        >
                          {formattedDay}
                        </span>

                        <h3 className="text-lg lg:text-xl font-serif italic text-warm-50 pb-2 leading-snug">
                          {step.title}
                        </h3>

                        <p className="pb-10 text-xs sm:text-sm text-warm-50/70 font-light leading-relaxed max-w-[45ch]">
                          {step.description}
                        </p>
                      </article>
                    );
                  })}
                </div>
              </div>

              {/* Sub-columna 2: Stack Fotográfico Absoluto (50% en desktop) */}
              <div
                data-itinerary-media-column
                className="lg:block lg:w-1/2 h-full relative overflow-hidden bg-earth-900"
              >
                {steps.map((step, idx) => {
                  return (
                    <div
                      key={`media-${step.dayNumber}-${idx}`}
                      data-media-card={idx}
                      className="absolute inset-0 w-full h-full overflow-hidden"
                      style={{ clipPath: "inset(0% 0px)" }}
                    >
                      <Image
                        src={step.image || "/default.jpg"}
                        alt={step.imageAlt || step.title}
                        fill
                        sizes="(min-width: 1024px) 38vw, 100vw"
                        priority={idx === 0}
                        className="object-cover"
                      />
                      {/* Capa de oscurecimiento suave durante el wipe-out */}
                      <div
                        data-media-overlay
                        className="absolute inset-0 bg-earth-900/60 pointer-events-none opacity-0"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </TimelineItineraryCinematicWrapper>
  );
}