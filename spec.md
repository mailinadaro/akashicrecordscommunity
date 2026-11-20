# 📋 Especificación Técnica (spec-v2.md) - Web de Turismo Jujuy & Centro de Mando

Este documento es la **fuente de verdad absoluta** para el desarrollo del sitio web y el arquetipo base de nuestra "Fábrica de Webs". Define el comportamiento esperado, la arquitectura desacoplada de componentes, las restricciones técnicas y los criterios de aceptación para que las herramientas de IA (Antigravity, Cursor, Copilot, etc.) implementen el código con precisión quirúrgica, sin alucinaciones ni sobreingeniería.

---

## 1. Contexto del Proyecto y Stack Tecnológico

*   **Objetivo:** Crear un sitio web de alto impacto visual (estilo Awwwards) y rendimiento óptimo para una agencia de excursiones privadas y viajes a medida en Jujuy ("Jujuy Adentro / Adaro Viajes"), complementado con un **Centro de Mando Directivo Narrative-Driven** para toma de decisiones tácticas.
*   **Enfoque Arquitectónico:** DRY (Don't Repeat Yourself), YAGNI (You Aren't Gonna Need It) y **RSC-First (React Server Components)**.
*   **Métricas Core Web Vitals:** Optimización extrema de LCP (Largest Contentful Paint) y CLS (Cumulative Layout Shift) mediante el renderizado de la estructura visual e imágenes en el servidor, desacoplando los scripts de movimiento pesados (GSAP).
*   **Stack:**
    *   **Next.js 16.3.4 (App Router, React 19, TypeScript Estricto):** Async Params en rutas dinámicas y Server Components por defecto.
    *   **Tailwind CSS v4:** Variables nativas con directivas `@theme` en `src/app/globals.css` y tokens semánticos en `src/styles/tokens.css`.
    *   **Shadcn/ui:** Componentes primitivos accesibles e interactivos basados en Base UI (`@base-ui/react`).
    *   **GSAP 3.15 + `@gsap/react` + Lenis:** Suavizado de scroll y transiciones cinemáticas mediante el Patrón de Composición.
    *   **React Hook Form + Zod:** Gestión de formularios en cliente y validación isomórfica tipada.
    *   **Backend Serverless (Server Actions):** Estándar de Next.js Server Actions (`'use server'`) en `src/app/actions/contact.ts` integrado con Resend SDK y generación de correos mediante plantilla modular HTML en `src/emails/lead-notification.tsx`.
    *   **Analítica & Inteligencia Comercial:** Google Analytics 4 Data API (`@google-analytics/data`) en servidor con `unstable_cache` a 15 minutos (900s).
    *   **Seguridad y Autenticación:** Edge Middleware (`src/middleware.ts`) con tokens firmados vía `jose` (HS256).

---

## 2. Estructura de Directorios y Categorización de Componentes (Innegociable)

Para industrializar el desarrollo y permitir una escalabilidad infinita sin clonación visual repetitiva, la jerarquía se divide estrictamente de la siguiente forma:

### 2.1. Átomos y Moléculas (`src/components/ui/`)
Componentes puramente presentacionales (Server Components por defecto, sin `'use client'`).
*   **Regla:** Son agnósticos de layouts y de lógica de negocio. Consumen variables semánticas de Tailwind v4 y no acoplan colores directos de marca.
*   **Ejemplos:**
    *   `SectionHeader.tsx`: Encabezado de sección que recibe título, subtítulo y children.
    *   `HealthBadge.tsx`: Indicador semáforo de salud comercial con estados visuales semánticos.
    *   Botones (`button.tsx`), inputs (`input.tsx`), labels base (`label.tsx`) y áreas de texto (`textarea.tsx`).

### 2.2. Wrappers de Animación (`src/components/animations/`)
Componentes exclusivos para interacciones y movimiento (Client Components, usan `'use client'`).
*   **Regla:** No generan HTML estructural pesado ni etiquetas semánticas propias. Reciben un `children` por medio del **Patrón de Composición** y aplican animaciones acotadas a través de clases selectoras específicas (ej: `.parallax-img`, `.hero-content-item`).
*   **Catálogo Activo:**
    *   `HeroRevealWrapper.tsx`: Control cinemático de zooms, reveals y fade del Hero.
    *   `ParallaxRevealWrapper.tsx`: Controla el efecto parallax de imágenes y revelado de `clipPath`.
    *   `TimelineItineraryCinematicWrapper.tsx`: Orquesta el stack de tarjetas fotográficas y texto del itinerario cronológico.
    *   `CTARevealWrapper.tsx`: Revelado progresivo con escalado para llamadas a la acción.
    *   `SplitContentWrapper.tsx`: Parallax fluido para secciones editoriales divididas.
    *   `MenuRevealWrapper.tsx`: Menú HUD de pantalla completa con transiciones fotográficas en hover.
    *   `StickyNavCinematicWrapper.tsx`: Barra de navegación inferior flotante con transiciones adaptadas a mobile y desktop.
    *   `ContactFormKinematicWrapper.tsx`: Transición animada entre los 4 pasos del formulario y pantalla de éxito.
    *   `RouteMapKinematicWrapper.tsx`: Sincronización del recorrido vectorial SVG y elevación con el scroll.
    *   `OtherTripsIntroWrapper.tsx` & `OtherTripsGridWrapper.tsx`: Mosaico escalonado de cross-selling.

### 2.3. Estructuras de Rejilla (`src/components/layout/`)
Esqueletos estructurales vacíos (Server Components).
*   **Regla:** No contienen textos, copies ni lógica de negocio. Solo manejan grillas, contenedores y anchos máximos usando la propiedad `children`.
*   **Ejemplos:**
    *   `MainContainer.tsx`: Contenedor responsive estándar (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`).
    *   `SplitSection.tsx`: Contenedor de dos columnas flexible sin contenido intrínseco.

### 2.4. Formularios Autónomos (`src/components/forms/`)
Organismos dinámicos del cliente (Client Components).
*   **Regla:** Contienen la lógica pesada de captura de datos en pasos (HUD), esquemas de Zod, estado de carga y envíos a la Server Action `sendContactAction`.
*   **Ejemplo:** `ContactForm.tsx`.

### 2.5. Secciones de Negocio (`src/components/sections/`)
Componentes integradores con contenido real de negocio.
*   **Regla:** Es la "carrocería" del auto. Combinan layouts estructurales, átomos de UI, wrappers de animación y consumen datos tipados.
*   **Módulos:**
    *   `sections/globales/`: `Navigation.tsx` (Navbar HUD) y `Footer.tsx` (Directorio SEO).
    *   `sections/excursiones/`: `ItinerariesListing.tsx`, `TimelineItinerary.tsx`, `RouteMapSection.tsx`.
    *   `sections/portal/`: Secciones de negocio del Centro de Mando: `ExecutiveSummarySection.tsx`, `ValueTranslatorSection.tsx`, `IntentTabsSection.tsx`, `ActionableNextStepsSection.tsx`.

---

## 3. Modelo de Datos: Excursiones (`src/data/excursionesData.json`)

Cada una de las excursiones se almacena en `src/data/excursionesData.json` bajo la interfaz declarativa `TripPageData` en `src/types/excursion.ts`:

```typescript
export interface Excursion {
  id: string;             // ID único (ej: "excursion-salinas-grandes-001")
  slug: string;           // Keyword de la URL (ej: "salinas-grandes")
  type: string;           // "excursion" | "experiencia-privada"
  category?: string;
  meta: {
    title: string;        // Título comercial indexable
    description: string;  // Descripción SEO
  };
  content: {
    hero: ExcursionHeroContent;
    imageFeatureParallax?: ExcursionImageFeatureParallax;
    splitContent?: ExcursionSplitContent;
    sectionHeader?: ExcursionSectionHeader;
    timelineItinerary?: ExcursionTimelineItinerary;
    faq?: ExcursionFAQ;
    finalCTA?: ExcursionFinalCTA;
    [key: string]: unknown;
  };
}

export type TripPageData = Excursion;
```

---

## 4. Especificaciones de Navegación, SEO y Serverless

### 4.1. Regla Innegociable de UI/UX: Menú de Navegación vs Footer
*   **Menú de Navegación Principal (`Navigation.tsx`):**
    *   Diseñado con fines editoriales e inmersivos (Awwwards style).
    *   **Prohibición estricta:** NO lista ni desglosa las 6 excursiones individuales para evitar sobrecarga visual y preservar la limpieza de las transiciones GSAP de fondo.
    *   Utiliza exclusivamente un **Hub General** con `href="/excursiones"`, acompañado de `Inicio`, `Viajes a Medida`, `Sobre Nosotros` y `Contacto`.
*   **Footer (`Footer.tsx`):**
    *   Actúa como directorio de rastreo para SEO (`crawl depth` = 1). Mapea dinámicamente las 6 excursiones mediante enlaces `<a href="...">` físicos pre-renderizados en el servidor.

### 4.2. Plantilla de Excursiones (`src/app/excursiones/[slug]/page.tsx`)
*   **Generación Estática (SSG):** Exporta obligatoriamente `generateStaticParams` mapeando los slugs del JSON para generar físicamente los archivos HTML listos en el servidor.
*   **Next.js 16 Async Params:** `params` debe tratarse asíncronamente:
    ```typescript
    const { slug } = await params;
    ```

### 4.3. Backend Serverless: Server Action & Fallback HTML
*   **Ubicación:** `src/app/actions/contact.ts` (`'use server'`).
*   **Seguridad y Validación:**
    1.  **Honeypot Anti-Spam:** Detección invisible mediante campo `websiteTrap`. Si viene con valor, retorna éxito simulado sin consumir cuota de envío de Resend.
    2.  **Validación en Servidor:** Ejecución con `contactSchema.safeParseAsync(data)` antes de cualquier operación.
*   **Fallback de Plantilla HTML (`src/emails/lead-notification.tsx`):**
    *   La Server Action delega el formateo del correo a la función modular `renderLeadNotificationHtml`, generando HTML responsive con estilos inline en los tonos de marca de la empresa (`#292621`, `#b68a4a`, `#f5f0e7`), sin dependencias pesadas en tiempo de ejecución.

---

## 5. Centro de Mando Directivo Narrative-Driven (`/portal`)

El módulo del portal es un centro de inteligencia para socios y directores, diseñado para traducir métricas cuantitativas de analítica a valor económico y toma de decisiones tácticas.

### 5.1. Arquitectura de Rutas (`src/app/portal/`)
*   **`layout.tsx` (Layout Soberano):** Aísla por completo el portal del menú y pie de página de turismo. Proporciona cabecera institucional, indicador de período y enlace de retorno a la web pública.
*   **`page.tsx` (100% Server Component):** Orquestador maestro que invoca `getCachedPortalMetrics()` en servidor y distribuye los contratos de dominio a las secciones de negocio.
*   **`loading.tsx`:** Esqueleto de carga cinemático alineado con los tokens semánticos de `tokens.css`.
*   **`error.tsx` (`'use client'`):** Error boundary de recuperación con acción de reintento (`reset()`).

### 5.2. Contratos de Dominio (`src/types/portal.ts`)
*   **`BusinessHealthStatus`:** Semáforo de salud comercial (`healthy` | `attention` | `critical`) con puntuación 0-100 e indicadores de telemetría operativa con marco comparativo (`comparisonPeriod`).
*   **`ExecutiveSummaryData`:** Diagnóstico "The So What?", conclusión estratégica y 3 impulsores clave de crecimiento.
*   **`ValueTranslationMetric`:** Traducción de telemetría técnica (visitas, clics, envíos de formulario) a valor económico proyectado en USD en pipeline y tasa de conversión.
*   **`CommercialIntentGroup`:** Segmentación del viaje del usuario en 3 pestañas: *Descubrimiento & Visitas* (`captacion`), *Intención de Compra* (`conversion`) y *Audiencia Exclusiva* (`alta_gama`), navegables vía URL searchParams.
*   **`ActionableStep`:** Priorización de acciones recomendadas con fundamento técnico e impacto esperado.

---

## 6. Autenticación Soberana Magic Link (`src/middleware.ts`)

*   **Tecnología:** `jose` (algoritmo `HS256`) sobre Edge Runtime. Cero dependencias de base de datos o sesiones pesadas.
*   **Flujo de Acceso:**
    1. El usuario accede mediante Magic Link firmado: `/portal?token=<JWT>`.
    2. El middleware verifica criptográficamente el token contra `PORTAL_JWT_SECRET`.
    3. Si es válido, emite una cookie segura `portal_session` (`httpOnly`, `sameSite: "lax"`, `secure` en producción) y reescribe la URL limpiando el token de la barra de direcciones.
    4. Si el token es inválido o no existe, redirige de forma preventiva a la página de inicio `/`.
*   **Generador CLI (`scripts/generate-portal-link.mjs`):**
    ```bash
    npm run portal:link            # Genera enlace para desarrollo (localhost:3000)
    npm run portal:link -- --prod   # Genera enlace para producción
    ```

---

## 7. Telemetría GA4: Modo Estricto vs Fallback Defensivo

Implementada en `src/lib/analytics/ga4.ts` mediante `BetaAnalyticsDataClient` y `unstable_cache`:

*   **Modo Telemetría Estricta (`dataSource: "ga4_live"`):**
    *   Activo cuando la Service Account de GCP se conecta con éxito a la propiedad GA4 (`560524900`).
    *   **Principio de Veracidad:** Cero datos sintéticos. Si la propiedad registra 0 visitas en los últimos 28 días, el portal muestra `0 activos`, `0 sesiones`, `$0 USD` y diagnóstico formal de espera de eventos.
    *   Cuando se registran visitas reales (`activeUsers > 0`), calcula dinámicamente conversiones, proyecciones de pipeline y tasas de engagement sobre la data real.
*   **Modo Fallback Defensivo (`dataSource: "synthetic_demo"`):**
    *   Activo cuando no existen credenciales de GCP en local o en caso de indisponibilidad de red.
    *   Despliega un modelo estructurado de referencia con distintivo visual en ocre para garantizar la operatividad de desarrollo.
*   **Caché en Servidor:** `unstable_cache` a 15 minutos (900s) con clave `portal-metrics-cache-v5` y tag de invalidación `"portal-metrics"`.

---

## 8. Dispatcher de Eventos de Intención Comercial

*   **Ubicación:** `src/lib/analytics/dispatcher.ts` (`trackEvent`, `trackTripInteraction`, `trackFormSubmission`).
*   **Mecanismo:** Despacho tipado hacia el `dataLayer` de Google Tag Manager (`GTM-TVL9CDTK`) asegurando la medición de interacciones de alto valor comercial (clics en itinerarios, descargas de dossier y envíos de formularios).

---

## 9. Criterios de Aceptación y Arnés de Calidad (Innegociable)

1.  **Cero Fugas de Memoria en GSAP:** Toda inicialización de GSAP debe realizarse exclusivamente dentro del hook `useGSAP` de `@gsap/react`, limitando el contexto a través de la propiedad `scope` (con referencias de `useRef`).
2.  **Next.js Image Optimization:** Está prohibido usar etiquetas `<img>` directas. El uso de `<Image>` de `next/image` es obligatorio con tamaños explícitos o la prop `fill`, agregando `priority` al Hero inicial para evitar penalizaciones de LCP.
3.  **Seguridad de Enlaces Externos:** Todos los enlaces externos (`target="_blank"`) deben llevar por diseño `rel="noopener noreferrer"`.
4.  **Cero Any en TypeScript:** Uso estricto de tipos e interfaces declarativas. Tipado global y casteo seguro de `window.lenis` en `src/types/global.d.ts` y proveedores cinemáticos.
5.  **Aislamiento del Portal:** La ruta `/portal` no debe renderizar el menú ni el pie de página de turismo; opera bajo su propio layout administrativo soberano.
