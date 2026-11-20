import React from "react";
import OtherTripsIntro, { DEFAULT_COMMUNITY_IMAGES } from "./OtherTripsIntro";
import OtherTripsGrid, { OtherTripItem } from "./OtherTripsGrid";

export interface OtherTripsSectionProps {
  id?: string;
  title?: string;
  introImages?: string[];
  trips?: OtherTripItem[];
  className?: string;
}

export default function OtherTripsSection({
  id = "otras-experiencias",
  title = "Otras Experiencias",
  introImages = DEFAULT_COMMUNITY_IMAGES,
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
