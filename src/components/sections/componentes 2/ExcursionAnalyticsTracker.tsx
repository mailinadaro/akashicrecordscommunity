'use client';

import { useEffect, useRef } from 'react';
import { trackExperienceDetailView } from '@/lib/analytics';

export interface ExcursionAnalyticsTrackerProps {
  slug: string;
  title: string;
  duration?: string;
  modality?: string;
  indicativePriceUsd?: number;
}

/**
 * Componente cliente sin representación visual (headless).
 * Dispara el evento analítico 'experience_detail_view' con el scope 'excursiones'
 * cuando el usuario visita la ficha de una expedición privada.
 */
export default function ExcursionAnalyticsTracker({
  slug,
  title,
  duration,
  modality,
  indicativePriceUsd = 480,
}: ExcursionAnalyticsTrackerProps) {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (!hasTracked.current) {
      hasTracked.current = true;
      trackExperienceDetailView({
        experience_slug: slug,
        experience_title: title,
        duration,
        modality,
        indicative_price_usd: indicativePriceUsd,
      });
    }
  }, [slug, title, duration, modality, indicativePriceUsd]);

  return null;
}
