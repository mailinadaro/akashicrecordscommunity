<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# 🏛️ FÁBRICA DE WEBS — Reglas de Arquitectura y Guía para Agentes de IA

Este repositorio implementa la arquitectura **Gentle AI / Fábrica de Webs** (RSC-First, Atomic Design puro, Desacoplamiento Cinemático y Configuración Declarativa Centralizada). Cualquier agente de IA, desarrollador o proceso automatizado **debe cumplir estrictamente estas reglas antes de inspeccionar, refactorizar o crear cualquier componente o ruta**.

---

## 1. 📂 Taxonomía Innegociable en 5 Capas (Frontera Server / Client)

Toda la jerarquía de componentes en `src/components/` debe respetar sin excepciones las siguientes fronteras arquitectónicas:

1. **`src/components/ui/` (Átomos y Moléculas Puras):**
   - **100% Server Components (RSC):** Prohibido incluir la directiva `'use client'`, hooks de estado (`useState`, `useEffect`) o importar librerías de cliente como GSAP o Lenis.
   - **Agnósticos a la marca:** Cero colores o paddings harcodeados (ej: prohibido `#0A1724` o `bg-earth-900` directo en primitivos base).
   - Consumen exclusivamente variables y clases semánticas de Tailwind v4 (`bg-surface-page`, `text-text-primary`, `border-border-default`, `bg-surface-action`, `text-state-*`).

2. **`src/components/animations/` (Wrappers Cinemáticos de Interactividad):**
   - **Client Components obligatorios (`'use client'`):** Único directorio del proyecto autorizado a importar `gsap`, `ScrollTrigger` y hooks de animación.
   - **Patrón de Composición Puro (`children`):** Nunca generan HTML semántico pesado ni textos de negocio; envuelven nodos pasivos y aplican animaciones basadas en contratos de clases selectoras (ej: `.parallax-img`, `.hero-title`).
   - Uso obligatorio de `@gsap/react` con hook `useGSAP` acotado a `{ scope: containerRef }` y reversión de contexto al desmontar (`mm.revert()`).

3. **`src/components/layout/` (Estructura de Maquetación Pura):**
   - Contenedores estructurales de grilla CSS y flexbox (`MainContainer`, `SplitSection`).
   - **Sin contenido de negocio:** Prohibido renderizar textos, imágenes, llamadas a la acción o tarjetas dentro de `layout/`. Exclusivamente reciben y distribuyen `children` con gutters y anchos máximos responsive.

4. **`src/components/forms/` (Organismos Interactivos y CRO):**
   - **Client Components (`'use client'`):** Diseñados para captura de leads y flujos de conversión progresivos.
   - Integración obligatoria de **React Hook Form + Zod** para validación isomórfica tipada de extremo a extremo.
   - Envío y mutaciones mediante **Server Actions** (`src/app/actions/`), prescindiendo de Route Handlers `/api/` obsoletos.

5. **`src/components/sections/` (Secciones de Negocio y Ensamblado):**
   - Ensamblan la interfaz combinando layout estructural, átomos UI y wrappers cinemáticos.
   - Consumen datos dinámicos inyectados desde JSONs estructurados (`src/data/`), contratos de dominio (`src/types/`) o desde el manifest central `@/config/site.config.ts`.
   - Incluye tanto las secciones públicas (`sections/globales/`, `sections/excursiones/`) como las del Centro de Mando (`sections/portal/`).

---

## 2. ⚠️ Reglas Técnicas de Oro

- **Next.js 16 Async Params:** En todas las rutas dinámicas (ej: `src/app/excursiones/[slug]/page.tsx`), las propiedades `params` y `searchParams` son Promesas asíncronas. Es obligatorio resolverlas mediante:
  ```typescript
  const { slug } = await params;
  const { intent } = await searchParams;
  ```
- **TypeScript Estricto (Cero `any`):** Prohibido el uso de `any`, castings no seguros o aserciones de escape como `window as any`. Todas las entidades deben tiparse exhaustivamente en `src/types/` (ej: `src/types/global.d.ts`, `src/types/excursion.ts`, `src/types/portal.ts`, `src/types/analytics.ts`).
- **Tokens Semánticos Tailwind v4:** La interfaz se estiliza mediante tokens semánticos definidos en `src/styles/tokens.css` y consumidos en `src/app/globals.css`. Los componentes reutilizables deben emplear utilidades semánticas (`bg-surface-page`, `text-text-primary`, `bg-surface-action`, `text-accent`) para permitir el re-skinning completo de cualquier cliente sin tocar código `.tsx`.
- **Manifest Centralizado (`@/config/site.config.ts`):** Toda la identidad de marca, logotipos, eslóganes, metadatos SEO por defecto, canales de contacto (teléfono, WhatsApp, emails), redes sociales y enlaces de navegación se leen declarativamente desde `siteConfig`. Prohibido hardcodear datos de cliente en componentes visuales o layouts.
- **Rendimiento de Imágenes:** Uso obligatorio del componente `<Image />` de `next/image` con atributos `sizes`, `priority` (en heroes sobre el pliegue) y carga lazy automática.
- **Aislamiento Soberano del Portal (`/portal`):** La ruta `/portal` posee su propio `layout.tsx` administrativo. Está estrictamente prohibido importar la barra de navegación pública (`Navigation.tsx`) o el pie de página de turismo (`Footer.tsx`) dentro del portal.
- **Compatibilidad Edge Runtime en Middleware:** `src/middleware.ts` opera en el Edge. Debe utilizar exclusivamente APIs web estándares y `jose` para verificación de JWT. Prohibido importar módulos de Node.js como `fs`, `path`, `crypto` o SDKs pesadas en el middleware.
- **Veracidad de Telemetría (Cero Datos Falsos en Vivo):** Cuando la conexión con GA4 esté activa (`dataSource: "ga4_live"`), está terminantemente prohibido inventar o inyectar métricas sintéticas. Si la propiedad registra 0 visitas en 28 días, el portal debe reflejar con total transparencia `0 activos`, `0 sesiones` y `$0 USD`, desplegando el aviso formal de espera de eventos.
- **Aislamiento de SDK de GA4:** El paquete `@google-analytics/data` y la inicialización de `BetaAnalyticsDataClient` se ejecutan exclusivamente en Node.js Server Runtime (`src/lib/analytics/ga4.ts`). Jamás deben importarse en componentes de cliente ni en el middleware.

---

## 3. 🎯 Definición del Proyecto: Boilerplate Aplicado en Producción

- **`jujuy-web`** es el **Boilerplate de Referencia Aplicado en Producción** para la Fábrica de Webs.
- Mantiene las rutas, datos e itinerarios reales de Jujuy como caso de uso testigo, pero su arquitectura interna debe preservarse **100% agnóstica y desacoplada** para permitir su clonación inmediata hacia otras industrias (hoteles, gastronomía, clínicas, agencias, portfolios) modificando únicamente:
  1. `src/config/site.config.ts` (marca, SEO, navegación, GA4 Property ID)
  2. `src/styles/tokens.css` (paleta de colores y variables semánticas)
  3. `.env.local` (credenciales de GCP, Resend, JWT secret)
  4. Los datos estructurados de `src/data/` y multimedia en `public/`.

---

## 🔍 Protocolo de Verificación para Agentes (Checklist Previo a Commit)

Antes de dar por finalizada cualquier tarea o cambio en el repositorio:
1. Revisa que el componente resida en la carpeta y nivel correcto según las 5 capas de la Fábrica.
2. Comprueba que no se introduzcan directivas `'use client'` en `src/components/ui/` ni en `src/components/layout/`.
3. Verifica que `src/app/portal/layout.tsx` se mantenga intacto si fue personalizado por el usuario.
4. Ejecuta `cmd /c npx tsc --noEmit` para confirmar **0 errores de TypeScript**.
5. Ejecuta `cmd /c npm run build` para garantizar que la compilación de producción y la generación estática (SSG) de todas las rutas termine con código 0.
