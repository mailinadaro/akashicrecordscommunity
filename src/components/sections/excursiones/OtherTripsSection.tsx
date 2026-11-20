import { getAllExcursiones } from "@/lib/excursiones";
import OtherTripsGrid, { OtherTripItem } from "./OtherTripsGrid";
import OtherTripsIntro from "./OtherTripsIntro";

export interface OtherTripsSectionProps {
  currentSlug: string;
  id?: string;
  title?: string;
  introImages?: [string, string, string];
  className?: string;
}

export default async function OtherTripsSection({
  currentSlug,
  id = "other-trips",
  title = "Otras Expediciones",
  introImages,
  className = "",
}: OtherTripsSectionProps) {
  const excursions = await getAllExcursiones();

  const trips: OtherTripItem[] = excursions
    .filter((excursion) => excursion.slug !== currentSlug)
    .map((excursion) => ({
      id: excursion.id,
      title: excursion.content.hero.title,
      summary: excursion.content.hero.description || excursion.meta.description || "",
      href: `/excursiones/${excursion.slug}`,
      image: excursion.content.hero.image,
      imageAlt: excursion.content.hero.alt,
    }))
    .slice(0, 4);

  return (
    <section
      id={id}
      aria-label={title}
      className={`relative w-full bg-earth-900 ${className}`}
    >
      <OtherTripsIntro title={title} images={introImages} />
      <OtherTripsGrid trips={trips} />
    </section>
  );
}