import excursionesData from '@/data/excursionesData.json';
import type { Excursion, TripPageData } from '@/types/excursion';

export type { Excursion, TripPageData };

/**
 * Obtiene todas las experiencias y excursiones tipadas estrictamente desde el JSON estático.
 */
export async function getAllExcursiones(): Promise<TripPageData[]> {
  return excursionesData.experiences as unknown as TripPageData[];
}

/**
 * Busca una excursión por su slug único.
 */
export async function getExcursionBySlug(slug: string): Promise<TripPageData | undefined> {
  const excursiones = await getAllExcursiones();
  return excursiones.find((excursion) => excursion.slug === slug);
}
