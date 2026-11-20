import type React from "react";
import type {
  RouteMilestone,
  RouteWaypointPhoto,
  CameraKeyframe,
  SpecItem,
  RouteMapDataConfig,
} from "@/types/cartography";

import SalinasMapSvg from "@/components/sections/excursiones/maps/SalinasMapSvg";
import HornocalMapSvg from "@/components/sections/excursiones/maps/HornocalMapSvg";
import MaimaraTilcaraMapSvg from "@/components/sections/excursiones/maps/MaimaraTilcaraMapSvg";
import CarnavalMapSvg from "@/components/sections/excursiones/maps/CarnavalMapSvg";

// =============================================================================
// 1. UTILIDADES MATEMÁTICAS (Piecewise Linear Interpolation)
// =============================================================================

/**
 * Piecewise Linear Interpolation (PWLI) para altimetría continua a trozos.
 * Calcula con precisión milimétrica la cota en metros para cualquier progreso p ∈ [0, 1]
 * sobre una secuencia arbitraria de hitos ordenados de menor a mayor progreso.
 *
 * @param milestones Lista de hitos geográficos con progress (0 a 1) y altitude (msnm).
 * @param progress Progreso actual del scroll normalizado (0.0 a 1.0).
 * @returns Altitud estimada en metros sobre el nivel del mar.
 */
export function interpolateElevation(
  milestones: RouteMilestone[],
  progress: number
): number {
  if (!milestones || milestones.length === 0) return 0;
  if (milestones.length === 1) return milestones[0].altitude;

  const clamped = Math.max(0, Math.min(1, progress));

  // Si está en o antes del primer hito
  if (clamped <= milestones[0].progress) {
    return milestones[0].altitude;
  }

  // Si está en o después del último hito
  const lastIndex = milestones.length - 1;
  if (clamped >= milestones[lastIndex].progress) {
    return milestones[lastIndex].altitude;
  }

  // Búsqueda del segmento activo [i, i + 1]
  for (let i = 0; i < lastIndex; i++) {
    const current = milestones[i];
    const next = milestones[i + 1];

    if (clamped >= current.progress && clamped <= next.progress) {
      const span = next.progress - current.progress;
      if (span === 0) return current.altitude;
      const factor = (clamped - current.progress) / span;
      return Math.round(
        current.altitude + (next.altitude - current.altitude) * factor
      );
    }
  }

  return milestones[lastIndex].altitude;
}

/**
 * Formatea un valor numérico de altitud con separador de miles local es-AR.
 */
export function formatAltitude(meters: number): string {
  return meters.toLocaleString("es-AR") + " m";
}

// =============================================================================
// 2. CONFIGURACIÓN: SALINAS GRANDES (Ruta Nacional 9 + RN 52)
// =============================================================================

export const SALINAS_GRANDES_MILESTONES: RouteMilestone[] = [
  { id: "ss-jujuy", name: "San Salvador de Jujuy", progress: 0.0, altitude: 1259 },
  { id: "purmamarca", name: "Purmamarca", progress: 0.493, altitude: 2324 },
  { id: "cuesta-lipan", name: "Cuesta de Lipán", progress: 0.664, altitude: 4170 },
  { id: "salinas-grandes", name: "Salinas Grandes", progress: 1.0, altitude: 3450 },
];

export const SALINAS_GRANDES_WAYPOINTS: RouteWaypointPhoto[] = [
  {
    id: "ss-jujuy",
    title: "San Salvador de Jujuy",
    subtitle: "Valle de partida · 1.259 msnm",
    src: "/excursiones/city-tour/DSC_6639-scaled.jpg",
  },
  {
    id: "purmamarca",
    title: "Purmamarca",
    subtitle: "Cerro de los Siete Colores · 2.324 msnm",
    src: "/excursiones/maimara-tilcara/Hill-Of-Seven-Colors-Purmamarca-Argentina_th-767x512.jpg",
  },
  {
    id: "cuesta-lipan",
    title: "Cuesta de Lipán",
    subtitle: "Paso de alta montaña · 4.170 msnm",
    src: "/excursiones/salinas/cuesta-de-lipan-mountain-road-2400x1400-f50_50.avif",
  },
  {
    id: "salinas-grandes",
    title: "Salinas Grandes",
    subtitle: "Altiplano de sal · 3.450 msnm",
    src: "/excursiones/salinas/salinas-hero.avif",
  },
];

export const SALINAS_GRANDES_SPECS: SpecItem[] = [
  { id: "duracion", label: "Duración", value: "9,5 – 10 horas" },
  { id: "recorrido", label: "Salida y regreso", value: "San Salvador de Jujuy" },
  { id: "modalidad", label: "Modalidad", value: "Excursión privada" },
  { id: "pasajeros", label: "Pasajeros", value: "Hasta 4 personas" },
  {
    id: "altitud",
    label: "Altitud actual",
    value: "1.259 m",
    isDynamicAltitude: true,
  },
  { id: "km", label: "Km Recorridos", value: "260 km" },
  { id: "horario", label: "Horario Excursión", value: "08:00 – 18:00 hs" },
];

export const SALINAS_GRANDES_CAMERA_KEYFRAMES: CameraKeyframe[] = [
  { progress: 0.0, scale: 1.25, xPercent: -6, yPercent: -8 },
  { progress: 0.493, scale: 1.9, xPercent: -3, yPercent: -4, duration: 0.493 },
  {
    progress: 0.664,
    scale: 1.6,
    xPercent: 1,
    yPercent: 0,
    duration: 0.664 - 0.493,
  },
  { progress: 1.0, scale: 1.32, xPercent: 7, yPercent: 2, duration: 1.0 - 0.664 },
];

export const SALINAS_GRANDES_CONFIG: RouteMapDataConfig = {
  slug: "salinas-grandes",
  eyebrow: "CARTOGRAFÍA & TRAYECTO // RN 9 · RN 52",
  title: "El Camino hacia el Altiplano Blanco",
  milestones: SALINAS_GRANDES_MILESTONES,
  waypoints: SALINAS_GRANDES_WAYPOINTS,
  specs: SALINAS_GRANDES_SPECS,
  cameraKeyframes: SALINAS_GRANDES_CAMERA_KEYFRAMES,
  MapComponent: SalinasMapSvg,
};

// =============================================================================
// 3. CONFIGURACIÓN: HUMAHUACA Y HORNOCAL (Quebrada de Humahuaca + RN 9 + RP 73)
// =============================================================================

export const HUMAHUACA_HORNOCAL_MILESTONES: RouteMilestone[] = [
  { id: "ss-jujuy", name: "San Salvador de Jujuy", progress: 0.0, altitude: 1259 },
  { id: "tilcara", name: "Tilcara", progress: 0.47, altitude: 2465 },
  { id: "humahuaca", name: "Humahuaca", progress: 0.86, altitude: 3012 },
  { id: "hornocal", name: "Serranía del Hornocal", progress: 1.0, altitude: 4350 },
];

export const HUMAHUACA_HORNOCAL_WAYPOINTS: RouteWaypointPhoto[] = [
  {
    id: "ss-jujuy",
    title: "San Salvador de Jujuy",
    subtitle: "Punto de partida · 1.259 msnm",
    src: "/excursiones/city-tour/DSC_6639-scaled.jpg",
  },
  {
    id: "tilcara",
    title: "Tilcara & Maimará",
    subtitle: "Corazón de la Quebrada · 2.465 msnm",
    src: "/excursiones/maimara-tilcara/maimara02.jpg",
  },
  {
    id: "humahuaca",
    title: "Humahuaca Histórica",
    subtitle: "Monumento a los Héroes · 3.012 msnm",
    src: "/excursiones/hornocal/hornocal desde jujuy 1.png",
  },
  {
    id: "hornocal",
    title: "Serranía del Hornocal",
    subtitle: "Cerro de los 14 Colores · 4.350 msnm",
    src: "/excursiones/hornocal/serrania-del-hornocal.webp",
  },
];

export const HUMAHUACA_HORNOCAL_SPECS: SpecItem[] = [
  { id: "duracion", label: "Duración", value: "10 – 11 horas" },
  { id: "recorrido", label: "Salida y regreso", value: "San Salvador de Jujuy" },
  { id: "modalidad", label: "Modalidad", value: "Excursión privada" },
  { id: "pasajeros", label: "Pasajeros", value: "Hasta 4 personas" },
  {
    id: "altitud",
    label: "Altitud actual",
    value: "1.259 m",
    isDynamicAltitude: true,
  },
  { id: "km", label: "Km Recorridos", value: "440 km" },
  { id: "horario", label: "Horario Excursión", value: "07:30 – 18:30 hs" },
];

export const HUMAHUACA_HORNOCAL_CAMERA_KEYFRAMES: CameraKeyframe[] = [
  { progress: 0.0, scale: 1.25, xPercent: -4, yPercent: -6 },
  { progress: 0.47, scale: 1.65, xPercent: -2, yPercent: -1, duration: 0.47 },
  { progress: 0.86, scale: 1.55, xPercent: 1, yPercent: 4, duration: 0.86 - 0.47 },
  { progress: 1.0, scale: 1.4, xPercent: 5, yPercent: 8, duration: 1.0 - 0.86 },
];

export const HUMAHUACA_HORNOCAL_CONFIG: RouteMapDataConfig = {
  slug: "humahuaca-hornocal",
  eyebrow: "CARTOGRAFÍA & TRAYECTO // RN 9 · RP 73",
  title: "Ascenso a la Serranía de los 14 Colores",
  milestones: HUMAHUACA_HORNOCAL_MILESTONES,
  waypoints: HUMAHUACA_HORNOCAL_WAYPOINTS,
  specs: HUMAHUACA_HORNOCAL_SPECS,
  cameraKeyframes: HUMAHUACA_HORNOCAL_CAMERA_KEYFRAMES,
  MapComponent: HornocalMapSvg,
};

// =============================================================================
// 4. CONFIGURACIÓN: MAIMARÁ Y TILCARA (Quebrada de Humahuaca · RN 9)
// =============================================================================

export const MAIMARA_TILCARA_MILESTONES: RouteMilestone[] = [
  { id: "ss-jujuy", name: "San Salvador de Jujuy", progress: 0.0, altitude: 1259 },
  { id: "volcan", name: "Volcán", progress: 0.29, altitude: 2078 },
  { id: "maimara", name: "Maimará", progress: 0.73, altitude: 2383 },
  { id: "tilcara", name: "Tilcara", progress: 1.0, altitude: 2465 },
];

export const MAIMARA_TILCARA_WAYPOINTS: RouteWaypointPhoto[] = [
  {
    id: "ss-jujuy",
    title: "San Salvador de Jujuy",
    subtitle: "Punto de partida · 1.259 msnm",
    src: "/excursiones/city-tour/DSC_6639-scaled.jpg",
  },
  {
    id: "volcan",
    title: "Volcán",
    subtitle: "Pórtico a la Quebrada · 2.078 msnm",
    src: "/excursiones/maimara-tilcara/pexels-mluiseze-18810163.jpg",
  },
  {
    id: "maimara",
    title: "Maimará",
    subtitle: "Paleta del Pintor · 2.383 msnm",
    src: "/excursiones/maimara-tilcara/maimara02.jpg",
  },
  {
    id: "tilcara",
    title: "Tilcara",
    subtitle: "Pucará y tradición andina · 2.465 msnm",
    src: "/excursiones/maimara-tilcara/pexels-facu-tachu-311818446-13555611.jpg",
  },
];

export const MAIMARA_TILCARA_SPECS: SpecItem[] = [
  { id: "duracion", label: "Duración", value: "8 – 9 horas" },
  { id: "recorrido", label: "Salida y regreso", value: "San Salvador de Jujuy" },
  { id: "modalidad", label: "Modalidad", value: "Excursión privada" },
  { id: "pasajeros", label: "Pasajeros", value: "Hasta 4 personas" },
  {
    id: "altitud",
    label: "Altitud actual",
    value: "1.259 m",
    isDynamicAltitude: true,
  },
  { id: "km", label: "Km Recorridos", value: "175 km" },
  { id: "horario", label: "Horario Excursión", value: "08:30 – 17:30 hs" },
];

export const MAIMARA_TILCARA_CAMERA_KEYFRAMES: CameraKeyframe[] = [
  { progress: 0.0, scale: 1.25, xPercent: -5, yPercent: -7 },
  { progress: 0.29, scale: 1.6, xPercent: -3, yPercent: -4, duration: 0.29 },
  { progress: 0.73, scale: 1.75, xPercent: -1, yPercent: -1, duration: 0.73 - 0.29 },
  { progress: 1.0, scale: 1.5, xPercent: 2, yPercent: 2, duration: 1.0 - 0.73 },
];

export const MAIMARA_TILCARA_CONFIG: RouteMapDataConfig = {
  slug: "maimara-tilcara",
  eyebrow: "CARTOGRAFÍA & TRAYECTO // RN 9",
  title: "Cultura y Paisajes de la Quebrada",
  milestones: MAIMARA_TILCARA_MILESTONES,
  waypoints: MAIMARA_TILCARA_WAYPOINTS,
  specs: MAIMARA_TILCARA_SPECS,
  cameraKeyframes: MAIMARA_TILCARA_CAMERA_KEYFRAMES,
  MapComponent: MaimaraTilcaraMapSvg,
};

// =============================================================================
// 5. CONFIGURACIÓN: CARNAVAL QUEBRADEÑO (RN 9)
// =============================================================================

export const CARNAVAL_MILESTONES: RouteMilestone[] = [
  { id: "ss-jujuy", name: "San Salvador de Jujuy", progress: 0.0, altitude: 1259 },
  { id: "purmamarca", name: "Purmamarca", progress: 0.28, altitude: 2324 },
  { id: "maimara", name: "Maimará", progress: 0.31, altitude: 2383 },
  { id: "tilcara", name: "Tilcara", progress: 0.40, altitude: 2465 },
  { id: "uquia", name: "Uquía", progress: 0.56, altitude: 2824 },
  { id: "humahuaca", name: "Humahuaca", progress: 0.60, altitude: 3012 },
  { id: "abra-pampa", name: "Abra Pampa", progress: 1.0, altitude: 3484 },
];

export const CARNAVAL_WAYPOINTS: RouteWaypointPhoto[] = [
  {
    id: "ss-jujuy",
    title: "San Salvador de Jujuy",
    subtitle: "Punto de encuentro · 1.259 msnm",
    src: "/excursiones/city-tour/DSC_6639-scaled.jpg",
  },
  {
    id: "purmamarca",
    title: "Purmamarca",
    subtitle: "Colores y coplas · 2.324 msnm",
    src: "/excursiones/maimara-tilcara/Hill-Of-Seven-Colors-Purmamarca-Argentina_th-767x512.jpg",
  },
  {
    id: "maimara",
    title: "Maimará",
    subtitle: "Paleta del Pintor · 2.383 msnm",
    src: "/excursiones/maimara-tilcara/maimara02.jpg",
  },
  {
    id: "tilcara",
    title: "Tilcara",
    subtitle: "Comparsas y desentierro · 2.465 msnm",
    src: "/excursiones/carnaval/pexels-mluiseze-21337282.jpg",
  },
  {
    id: "uquia",
    title: "Uquía",
    subtitle: "Bajada de los Diablos · 2.824 msnm",
    src: "/excursiones/carnaval/pexels-mluiseze-26705851.jpg",
  },
  {
    id: "humahuaca",
    title: "Humahuaca",
    subtitle: "Fiesta mayor de la Quebrada · 3.012 msnm",
    src: "/excursiones/carnaval/pexels-mluiseze-21337283.jpg",
  },
  {
    id: "abra-pampa",
    title: "Abra Pampa",
    subtitle: "Celebración en la Puna Alta · 3.484 msnm",
    src: "/excursiones/carnaval/pexels-mluiseze-36227382.jpg",
  },
];

export const CARNAVAL_SPECS: SpecItem[] = [
  { id: "duracion", label: "Duración", value: "10 – 11 horas" },
  { id: "recorrido", label: "Salida y regreso", value: "San Salvador de Jujuy" },
  { id: "modalidad", label: "Modalidad", value: "Excursión privada festiva" },
  { id: "pasajeros", label: "Pasajeros", value: "Hasta 4 personas" },
  {
    id: "altitud",
    label: "Altitud actual",
    value: "1.259 m",
    isDynamicAltitude: true,
  },
  { id: "km", label: "Km Recorridos", value: "250 km" },
  { id: "horario", label: "Horario Excursión", value: "08:00 – 19:00 hs" },
];

export const CARNAVAL_CAMERA_KEYFRAMES: CameraKeyframe[] = [
  { progress: 0.0, scale: 1.25, xPercent: -5, yPercent: -6 },
  { progress: 0.28, scale: 1.6, xPercent: -3, yPercent: -3, duration: 0.28 },
  { progress: 0.40, scale: 1.65, xPercent: -1, yPercent: 0, duration: 0.40 - 0.28 },
  { progress: 0.60, scale: 1.6, xPercent: 1, yPercent: 3, duration: 0.60 - 0.40 },
  { progress: 1.0, scale: 1.45, xPercent: 3, yPercent: 6, duration: 1.0 - 0.60 },
];

export const CARNAVAL_CONFIG: RouteMapDataConfig = {
  slug: "carnaval-2027",
  eyebrow: "CARTOGRAFÍA & TRAYECTO // RUTA DEL CARNAVAL",
  title: "La Celebración Ancestral de la Quebrada",
  milestones: CARNAVAL_MILESTONES,
  waypoints: CARNAVAL_WAYPOINTS,
  specs: CARNAVAL_SPECS,
  cameraKeyframes: CARNAVAL_CAMERA_KEYFRAMES,
  MapComponent: CarnavalMapSvg,
};

// =============================================================================
// 6. REGISTRO CENTRAL Y FALLBACK UNIVERSAL
// =============================================================================

export const cartographyRegistry: Record<string, RouteMapDataConfig> = {
  "salinas-grandes": SALINAS_GRANDES_CONFIG,
  "humahuaca-hornocal": HUMAHUACA_HORNOCAL_CONFIG,
  "maimara-tilcara": MAIMARA_TILCARA_CONFIG,
  "carnaval": CARNAVAL_CONFIG,
  "carnaval-2027": CARNAVAL_CONFIG,
};

/**
 * Resuelve la configuración cartográfica para un slug dado.
 * Si el slug no se encuentra registrado o es nulo/inválido, devuelve de manera
 * transparente y defensiva la configuración calibrada de Salinas Grandes.
 */
export function getRouteMapConfig(slug?: string): RouteMapDataConfig {
  if (!slug) return SALINAS_GRANDES_CONFIG;
  return cartographyRegistry[slug] ?? SALINAS_GRANDES_CONFIG;
}
