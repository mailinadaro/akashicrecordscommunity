# 🗺️ Web de Excursiones y Viajes a Medida — Arquetipo "Fábrica de Webs"

> **Arquetipo de Referencia en Producción**: Sitio web de alto impacto visual (estilo Awwwards) y rendimiento extremo, construido sobre **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, **Shadcn/ui (Base UI)**, **GSAP con Lenis** y un **Centro de Mando Directivo Narrative-Driven** con telemetría en vivo vía Google Analytics 4 Data API.

El proyecto implementa una arquitectura desacoplada **RSC-First (React Server Components)**: el catálogo de excursiones se pre-renderiza estáticamente (SSG) mediante un único template dinámico alimentado por datos estructurados, mientras que el portal ejecutivo opera de forma dinámica bajo autenticación sin estado en el Edge.

---

## ⚡ Inicio Rápido (Quick Path)

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env.local

# 3. Iniciar entorno de desarrollo
npm run dev

# 4. Generar Magic Link para acceder al Portal Directivo
npm run portal:link
```

---

## 🛠️ Stack Tecnológico

| Capa / Módulo | Tecnología | Rol en la Arquitectura |
| :--- | :--- | :--- |
| **Core Framework** | Next.js 16.3.4 (App Router) + React 19 | Server Components por defecto, Async Params, SSG y dynamic rendering. |
| **Estilos & Diseño** | Tailwind CSS v4 + Tokens Semánticos | Variables nativas `@theme` en `src/styles/tokens.css` y `globals.css`. |
| **Primitivos UI** | Base UI (`@base-ui/react`) + CVA | Componentes accesibles, 100% agnósticos a la marca. |
| **Cinemática & Scroll** | GSAP 3.15 + Lenis + ScrollTrigger | Desacoplamiento cinemático en `components/animations/` con `useGSAP`. |
| **Formularios & CRO** | React Hook Form + Zod + Resend | Server Actions (`'use server'`) con honeypot anti-spam y fallback HTML. |
| **Portal & Analytics** | GA4 Data API (`@google-analytics/data`) | Telemetría cuantitativa traducida a pipeline comercial y narrativa directiva. |
| **Seguridad de Acceso** | `jose` (JWT firmado con HS256) | Edge Middleware sin base de datos ni sesión pesada (`/portal`). |

---

## 📁 Estructura del Proyecto (Taxonomía en 5 Capas)

```text
src/
├── app/
│   ├── actions/                 # Server Actions ('use server') con tipado Zod y Resend
│   ├── contacto/                # Página de contacto HUD (RSC + Client Form)
│   ├── excursiones/
│   │   ├── [slug]/              # Template dinámico único de expediciones (SSG con generateStaticParams)
│   │   └── page.tsx             # Catálogo general de excursiones
│   ├── portal/                  # 🔒 Centro de Mando Directivo (RSC protegido en Edge)
│   │   ├── layout.tsx           # Layout administrativo soberano (aislado de la web pública)
│   │   ├── page.tsx             # Server Component maestro que consume getCachedPortalMetrics()
│   │   ├── loading.tsx          # Skeleton de carga cinemático con tokens semánticos
│   │   └── error.tsx            # Error boundary ('use client') con acción de reintento
│   ├── sobre-nosotros/          # Página biográfica y territorial
│   ├── viajes-a-medida/         # Propuesta de experiencias a medida
│   ├── globals.css              # Tokens @theme de Tailwind v4 y estilos globales
│   ├── layout.tsx               # Shell global de la web pública (Nav, SmoothScroll, Footer, GTM)
│   └── page.tsx                 # Home con video background editorial y revelado cinemático
├── components/
│   ├── animations/              # 100% Client Components con GSAP / useGSAP (Patrón de Composición)
│   ├── forms/                   # Organismos de formulario interactivos (React Hook Form + Zod)
│   ├── layout/                  # Contenedores de maquetación puros (MainContainer, SplitSection)
│   ├── providers/               # Contextos de cliente (SmoothScrollProvider, GSAPRouteWatcher)
│   ├── sections/
│   │   ├── globales/            # Navigation y Footer de la web pública
│   │   ├── portal/              # Secciones de negocio del Centro de Mando (Executive, Value, Intent, NextSteps)
│   │   └── [feature]/           # Secciones específicas por dominio
│   └── ui/                      # 100% Server Components puros y agnósticos (HealthBadge, Botones, Cards)
├── config/
│   └── site.config.ts           # Manifest central de marca, SEO, contacto, navegación y GA4 Property ID
├── data/
│   └── excursionesData.json     # Base de datos estática para las experiencias
├── lib/
│   ├── analytics/
│   │   ├── auth.ts              # Validación de tokens JWT en Edge Middleware (jose)
│   │   ├── dispatcher.ts        # Dispatcher de eventos GTM / dataLayer tipado
│   │   └── ga4.ts               # Cliente GA4 Data API, unstable_cache (15 min) y telemetría estricta
│   ├── excursiones.ts           # Consultas de excursiones tipadas (getAllExcursiones)
│   └── utils.ts                 # Helper cn() con clsx y tailwind-merge
├── middleware.ts                # Edge Middleware de autenticación para la ruta /portal
└── types/
    ├── excursion.ts             # Tipado TripPageData y componentes de excursiones
    ├── global.d.ts              # Declaración tipada de Window (window.lenis)
    └── portal.ts                # Contratos de dominio de salud comercial, telemetría y storytelling
```

---

## 📊 Centro de Mando Directivo: Storytelling Narrative-Driven (GA4)

El portal (`/portal`) reemplaza los dashboards analíticos genéricos por un **storytelling narrativo orientado a decisiones de negocio**, respondiendo directamente a la pregunta directiva: *"The So What?"* (¿Qué significa esto para el negocio?).

### 1. Autenticación Soberana sin Estado (Magic Links)
- **Edge Middleware (`src/middleware.ts`):** Intercepta cualquier acceso a `/portal`.
- Valida tokens JWT firmados criptográficamente con `jose` (algoritmo `HS256`) contra la clave `PORTAL_JWT_SECRET`.
- El token puede pasarse por query param (`?token=...`) al abrir el Magic Link o guardarse en una cookie de sesión segura `portal_session`.
- **Cero dependencias de bases de datos:** Permite accesos rápidos y revocables para socios, inversores o directores.

```bash
# Generar un Magic Link para desarrollo local (localhost:3000):
npm run portal:link

# Generar un Magic Link para producción (excursiones.adaroviajes.com):
npm run portal:link -- --prod
```

### 2. Dualidad de Telemetría: Estricta en Vivo vs Fallback Defensivo
La función `getCachedPortalMetrics()` en `src/lib/analytics/ga4.ts` implementa una arquitectura defensiva e isomórfica:

| Modo | Condición de Activación | Comportamiento en Pantalla |
| :--- | :--- | :--- |
| **Telemetría Estricta (En Vivo)** | Service Account de GCP conectada exitosamente a la API de GA4. | **Cero datos simulados**: Si la propiedad registra 0 visitas en 28 días, muestra honestamente `0 activos`, `0 sesiones`, `$0 USD` y aviso formal de espera de tráfico. Si hay tráfico (>0), calcula dinámicamente conversión, pipeline y retención. |
| **Fallback Defensivo (Demo)** | Ausencia de credenciales de GCP en local o fallo de red. | Despliega un modelo sintético estructurado de referencia con distintivo visual en ocre para permitir el desarrollo y auditoría visual de la interfaz. |

### 3. Caché de Servidor
- Envuelta en `unstable_cache` de Next.js con ventana de revalidación de **15 minutos (900s)** y etiqueta `"portal-metrics"`.
- Protege los límites de cuota de Google Cloud y garantiza tiempos de respuesta instantáneos (<50ms).

---

## ⚡ Backend Serverless: Server Actions (`'use server'`)

El proyecto prescinde de Route Handlers `/api/` en favor de Server Actions directas:

- **Orquestador (`src/app/actions/contact.ts`):** Valida entradas con Zod (`contactSchema.safeParseAsync`), implementa campo honeypot anti-spam (`websiteTrap`) y despacha correos mediante Resend.
- **Plantilla Modular HTML (`src/emails/lead-notification.tsx`):** Renderiza correos enriquecidos con la paleta editorial corporativa (arena `#f5f0e7`, ocre `#b68a4a`, tierra `#292621`) y enlaces directos a WhatsApp del lead.

---

## 🎬 Cinemática GSAP & ScrollTrigger (`src/components/animations/`)

Todos los efectos visuales respetan el **Patrón de Composición**: componentes servidores inyectan el HTML semántico pasivo y los Wrappers clientes aplican la cinemática acotada con `useGSAP` y `ScrollTrigger`.

- **`HeroRevealWrapper`**: Zoom in de fondo y revelado en cascada (stagger) de títulos.
- **`ParallaxRevealWrapper`**: Parallax vertical suave con scrub y revelado mediante `clipPath`.
- **`TimelineItineraryCinematicWrapper`**: Fijación de columna lateral y tarjetas fotográficas apiladas según el scroll.
- **`MenuRevealWrapper`**: Menú HUD de pantalla completa con proyección 3D y hover swap de imágenes.
- **`StickyNavCinematicWrapper`**: Transición fluida entre barra de navegación desktop y píldora colapsada flotante.
- **`GSAPRouteWatcher` & `SmoothScrollProvider`**: Limpieza de triggers entre rutas y control de scroll inercial con Lenis fuertemente tipado.

---

## 🔐 Variables de Entorno (`.env.local`)

Copia `.env.example` a `.env.local` y completa las credenciales según tu entorno:

| Variable | Requerido | Descripción |
| :--- | :---: | :--- |
| `PORTAL_JWT_SECRET` | **Sí** | Clave secreta (mínimo 32 caracteres) para firmar y verificar tokens de acceso al portal. |
| `GA4_PROPERTY_ID` | **Sí** | ID numérico de la propiedad de Google Analytics 4 (ej: `560524900`). |
| `GA4_CLIENT_EMAIL` | **Sí** | Email de la Service Account de Google Cloud vinculada con rol "Lector" en GA4. |
| `GA4_PRIVATE_KEY` | **Sí** | Clave privada PEM completa de la Service Account de Google Cloud (con `\n` escapados). |
| `RESEND_API_KEY` | **Sí** | API Key de Resend para el despacho de leads. |
| `CONTACT_EMAIL_TO` | **Sí** | Casilla de correo receptora de las consultas comerciales. |
| `NEXT_PUBLIC_SITE_URL` | Opcional | URL canónica del sitio (default: `https://excursiones.adaroviajes.com`). |

---

## 🚀 Re-skinning y Clonación a Nuevos Clientes

Para replicar este arquetipo hacia otra industria (hoteles, clínicas, gastronomía, portfolios) en menos de 1 hora:

1. **`src/config/site.config.ts`**: Actualiza el nombre de marca, eslogan, enlaces de contacto, menús y Property ID de GA4.
2. **`src/styles/tokens.css`**: Ajusta la paleta semántica (`--color-surface-*`, `--color-text-*`, `--color-ochre-*`) y las fuentes tipográficas.
3. **`src/data/` & `public/`**: Reemplaza el archivo JSON de catálogo y los recursos multimedia correspondientes.
4. **`.env.local`**: Configura las credenciales de Resend, GCP y JWT del nuevo cliente.

---

## 🛠️ Comandos de Desarrollo & Verificación

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor local de desarrollo con Turbopack. |
| `npm run portal:link` | Genera un Magic Link seguro para acceder a `/portal` en entorno local. |
| `npm run portal:link -- --prod` | Genera un Magic Link apuntando a la URL canónica de producción. |
| `npx tsc --noEmit` | Ejecuta la verificación estricta de tipos de TypeScript sin emitir código. |
| `npm run build` | Compilación de producción y generación estática de páginas (SSG). |
| `npm run start` | Levanta el servidor Node.js de producción localmente para pruebas de rendimiento. |
