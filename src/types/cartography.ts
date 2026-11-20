import type React from "react";

/**
 * Hito geográfico en la ruta con su progreso normalizado (0.0 a 1.0) y altitud.
 */
export interface RouteMilestone {
  id: string;
  name: string;
  progress: number; // 0.0 (inicio) a 1.0 (destino final)
  altitude: number; // Metros sobre el nivel del mar (msnm)
  coordinates?: { x: number; y: number };
}

/**
 * Fotografía y metadatos contextuales para el visor de etapas de la ruta.
 */
export interface RouteWaypointPhoto {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  alt?: string;
}

/**
 * Fotograma clave para la cámara 2D (pan & zoom) sincronizado con el scroll.
 */
export interface CameraKeyframe {
  progress: number; // 0.0 a 1.0
  scale: number;
  xPercent: number;
  yPercent: number;
  duration?: number;
  ease?: string;
}

/**
 * Elemento de metadato técnico para la ficha de telemetría (SpecsSheet).
 */
export interface SpecItem {
  id: string;
  label: string;
  value: string;
  isDynamicAltitude?: boolean;
}

/**
 * Contrato integral de configuración cartográfica por excursión.
 */
export interface RouteMapDataConfig {
  slug: string;
  eyebrow?: string;
  title?: string;
  milestones: RouteMilestone[];
  waypoints: RouteWaypointPhoto[];
  specs: SpecItem[];
  cameraKeyframes?: CameraKeyframe[];
  MapComponent?: React.ComponentType<{ className?: string }>;
}
