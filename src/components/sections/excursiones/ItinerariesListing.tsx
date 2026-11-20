import React from "react";
import Image from "next/image";
import Link from "next/link";
import ItinerariesKinematicWrapper from "@/components/animations/ItinerariesKinematicWrapper";
import { Button } from "@/components/ui/atoms/button";
import { getAllExcursiones } from "@/lib/excursiones";

export interface ItineraryItem {
  id: string;
  slug?: string;
  href?: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  imageAlt?: string;
  duration?: string;
  modality?: string;
  seasonKey?: "todo-el-ano" | "febrero-2027" | "marzo-2027";
  seasonLabel?: string;
}

/**
 * Obtiene y mapea los itinerarios dinámicamente desde el repositorio JSON
 */
export async function getDynamicItineraries(): Promise<ItineraryItem[]> {
  const excursiones = await getAllExcursiones();

  return excursiones.map((excursion) => {
    const isCarnaval = excursion.slug.includes("carnaval");
    const isSemanaSanta = excursion.slug.includes("semana-santa");
    const isCityTour = excursion.slug.includes("city-tour");

    return {
      id: excursion.id,
      slug: excursion.slug,
      href: `/excursiones/${excursion.slug}`,
      title: excursion.content.hero?.title || excursion.meta.title,
      subtitle: excursion.content.hero?.subtitle || "",
      description:
        excursion.content.hero?.description || excursion.meta.description || "",
      image: excursion.content.hero?.image || "/default.jpg",
      imageAlt: excursion.content.hero?.alt || excursion.meta.title,
      duration: isCarnaval
        ? "4 días / 3 noches"
        : isSemanaSanta
        ? "3 días / 2 noches"
        : isCityTour
        ? "Media jornada"
        : "Jornada completa",
      modality: isCarnaval
        ? "Exclusiva · 5 al 8 Feb"
        : isSemanaSanta
        ? "Exclusiva · 24 al 26 Mar"
        : "Privada · Hasta 4 personas",
      seasonKey: isCarnaval
        ? "febrero-2027"
        : isSemanaSanta
        ? "marzo-2027"
        : "todo-el-ano",
      seasonLabel: isCarnaval
        ? "Febrero 2027"
        : isSemanaSanta
        ? "Marzo 2027"
        : "Todo el año",
    };
  });
}

export default async function ItinerariesListing({
  id = "itineraries-listing",
  className = "",
  items,
  showSeasonSidebar = true,
  sectionEyebrow,
  sectionTitle,
  sectionDescription,
}: {
  id?: string;
  className?: string;
  items?: ItineraryItem[];
  showSeasonSidebar?: boolean;
  sectionEyebrow?: string;
  sectionTitle?: string;
  sectionDescription?: string;
}) {
  const displayItems = items ?? (await getDynamicItineraries());

  return (
    <section
      id={id}
      aria-label="Listado de Itinerarios y Expediciones"
      className={`relative w-full bg-warm-50 py-16 lg:py-24 ${className}`}
    >
      {(sectionEyebrow || sectionTitle || sectionDescription) && (
        <div className="mx-auto mb-14 max-w-7xl px-6 md:px-12">
          {sectionEyebrow && (
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-ochre-500">
              {sectionEyebrow}
            </span>
          )}
          {sectionTitle && (
            <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight text-earth-900 md:text-5xl">
              {sectionTitle}
            </h2>
          )}
          {sectionDescription && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-earth-700">
              {sectionDescription}
            </p>
          )}
        </div>
      )}
      <div className="mx-auto w-full px-2 lg:px-0">
        <ItinerariesKinematicWrapper>
          <div className="relative grid grid-cols-1 lg:grid-cols-12 items-start w-full">
            
            {/* COLUMNA IZQUIERDA: Filtro visual de temporadas */}
            {showSeasonSidebar && (
              <aside
                data-itineraries-sidebar
                className="max-lg:hidden lg:col-span-2 relative h-full pl-8 xl:pl-14 pr-6"
              >
                <div
                  data-sidebar-inner
                  className="sticky top-24 pt-8 flex flex-col gap-6"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ochre-600 font-bold block">
                    Temporadas
                  </span>

                  <nav className="flex flex-col gap-3">
                    <div
                      data-season-label="todo-el-ano"
                      className="transition-all duration-300 font-display italic text-lg lg:text-xl leading-snug select-none text-earth-950 font-semibold opacity-100"
                    >
                      Todo el año
                    </div>
                    <div
                      data-season-label="febrero-2027"
                      className="transition-all duration-300 font-display italic text-lg lg:text-xl leading-snug select-none text-earth-900 opacity-30"
                    >
                      Febrero 2027
                    </div>
                    <div
                      data-season-label="marzo-2027"
                      className="transition-all duration-300 font-display italic text-lg lg:text-xl leading-snug select-none text-earth-900 opacity-30"
                    >
                      Marzo 2027
                    </div>
                  </nav>
                </div>
              </aside>
            )}

            {/* COLUMNA DERECHA: Listado de Tarjetas */}
            <div
              className={`${
                showSeasonSidebar ? "lg:col-span-10" : "lg:col-span-12"
              } col-span-1 relative w-full flex flex-col gap-6 sm:gap-8 lg:gap-0`}
            >
              {displayItems.map((item, index) => (
                <article
                  key={item.id}
                  data-itinerary-card
                  data-season-key={item.seasonKey}
                  className="relative w-full lg:sticky lg:top-16"
                  style={{ zIndex: index + 1 }}
                >
                  <Link
                    href={item.href ?? `/excursiones/${item.slug}`}
                    className="group block relative w-full h-150 lg:h-[75vh] min-h-145 overflow-hidden rounded-none bg-earth-950"
                    aria-label={`Explorar: ${item.title}`}
                  >
                    {/* Imagen de fondo limpia */}
                    <div className="absolute inset-0 w-full h-full">
                      <Image
                        src={item.image}
                        alt={item.imageAlt || item.title}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 85vw"
                        className="object-cover object-center"
                      />
                    </div>

                    {/* Gradiente cinemático para legibilidad editorial */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

                    {/* Capa de textos sincronizada con GSAP */}
                    <div data-card-layer className="contents">
                      {/* TÍTULO SUPERIOR */}
                      <div className="absolute top-8 left-8 lg:top-12 lg:left-12 max-w-xl z-10 pointer-events-none">
                        <h3 className="font-display italic text-3xl sm:text-5xl lg:text-6xl text-warm-50 font-normal leading-[1.05] tracking-tight">
                          {item.title}
                        </h3>
                      </div>

                      {/* METADATOS Y EXTRACTO INFERIOR */}
                      <div
                        data-card-content
                        className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 w-[calc(100%-4rem)] lg:w-110 max-w-[34vw] flex flex-col justify-end text-left z-10"
                      >
                        {/* Eyebrow */}
                        {(item.duration || item.modality) && (
                          <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-text-on-action font-medium mb-3">
                            {item.duration && <span>{item.duration}</span>}
                            {item.duration && item.modality && (
                              <span className="text-white/40">|</span>
                            )}
                            {item.modality && <span>{item.modality}</span>}
                          </div>
                        )}

                        {/* Extracto editorial */}
                        <p className="font-sans text-xs sm:text-sm lg:text-[14.5px] text-warm-50/85 font-light leading-relaxed mb-6 line-clamp-3">
                          {item.description}
                        </p>

                        <Button
                          variant="glass"
                          size="default"
                          tabIndex={-1}
                          className="pointer-events-none group/cta w-fit px-8 py-3.5 h-auto text-xs font-medium tracking-widest uppercase hover:bg-warm-50 hover:text-earth-900 transition-all duration-300 shadow-xl gap-2"
                        >
                          <span>Explorar experiencia</span>
                          <span
                            className="transform transition-transform duration-300 group-hover/cta:translate-x-1"
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </Button>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

          </div>
        </ItinerariesKinematicWrapper>
      </div>
    </section>
  );
}
