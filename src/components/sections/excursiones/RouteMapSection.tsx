import React from "react";
import RouteMapKinematicWrapper from "@/components/animations/RouteMapKinematicWrapper";
import SpecsSheet from "@/components/sections/excursiones/SpecsSheet";
import WaypointPhotoPreview from "@/components/sections/excursiones/WaypointPhotoPreview";
import SalinasMapSvg from "@/components/sections/excursiones/maps/SalinasMapSvg";
import { getRouteMapConfig } from "@/lib/cartography-registry";
import type {
  RouteMilestone,
  RouteWaypointPhoto,
  CameraKeyframe,
  SpecItem,
} from "@/types/cartography";

export interface RouteMapSectionProps {
  id?: string;
  slug?: string;
  className?: string;
  specs?: SpecItem[];
  waypoints?: RouteWaypointPhoto[];
  milestones?: RouteMilestone[];
  cameraKeyframes?: CameraKeyframe[];
  mapComponent?: React.ComponentType<{ className?: string }>;
}

export default function RouteMapSection({
  id = "info",
  slug,
  className = "",
  specs: overrideSpecs,
  waypoints: overrideWaypoints,
  milestones: overrideMilestones,
  cameraKeyframes: overrideKeyframes,
  mapComponent: overrideMapComponent,
}: RouteMapSectionProps) {
  const config = getRouteMapConfig(slug);

  const activeSpecs = overrideSpecs ?? config.specs;
  const activeWaypoints = overrideWaypoints ?? config.waypoints;
  const activeMilestones = overrideMilestones ?? config.milestones;
  const activeKeyframes = overrideKeyframes ?? config.cameraKeyframes ?? [];
  const MapComponent = overrideMapComponent ?? config.MapComponent ?? SalinasMapSvg;

  return (
    <section
      id={id}
      aria-label={`Cartografía y recorrido: ${config.title}`}
      className={`relative w-full min-h-0 lg:min-h-[200vh] h-auto lg:h-[200vh] bg-earth-950 text-warm-50 overflow-x-clip select-none py-10 sm:py-16 lg:py-0 ${className}`}
    >
      <RouteMapKinematicWrapper
        milestones={activeMilestones}
        waypoints={activeWaypoints}
        cameraKeyframes={activeKeyframes}
      >
        {/* Contenedor Cartográfico: sin marco bento ni bordes redondeados, directo sobre el fondo escénico */}
        <div className="relative w-full max-w-xl lg:max-w-none aspect-4/3 sm:aspect-16/10 lg:aspect-auto h-auto lg:h-full lg:absolute lg:inset-0 flex items-center justify-center p-0">
          <div
            data-map-camera
            className="w-full h-full flex items-center justify-center will-change-transform origin-center lg:absolute lg:inset-0 p-2 sm:p-4 lg:p-8 xl:p-14 2xl:p-20 pointer-events-none"
          >
            <MapComponent className="w-full h-full object-contain pointer-events-none drop-shadow-2xl" />
          </div>
        </div>

        {/* Visor Fotográfico Contextual */}
        <WaypointPhotoPreview waypoints={activeWaypoints} />

        {/* Ficha HUD Flotante (Glass White Desert) */}
        <SpecsSheet specs={activeSpecs} />
      </RouteMapKinematicWrapper>
    </section>
  );
}