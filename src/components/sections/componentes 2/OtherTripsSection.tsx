import React from "react";
import OtherTripsGrid, { OtherTripItem } from "./OtherTripsGrid";
import OtherTripsIntro from "./OtherTripsIntro";

export interface OtherTripsSectionProps {
  currentSlug?: string;
  id?: string;
  title?: string;
  introImages?: string[];
  trips?: OtherTripItem[];
  className?: string;
}

export default async function OtherTripsSection({
  id = "recursos",
  title = "Materiales y Recursos",
  introImages,
  trips,
  className = "",
}: OtherTripsSectionProps) {
  return (
    <section
      id={id}
      aria-label={title}
      className={`relative w-full bg-plum-950 ${className}`}
    >
      <OtherTripsIntro title={title} images={introImages} />
      <OtherTripsGrid trips={trips} />
    </section>
  );
}
