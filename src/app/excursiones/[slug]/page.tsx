import { notFound } from "next/navigation";
import { getAllExcursiones, getExcursionBySlug } from "@/lib/excursiones";
import StickyActionNav from "@/components/sections/excursiones/StickyActionNav";
import ExcursionAnalyticsTracker from "@/components/sections/excursiones/ExcursionAnalyticsTracker";
import HeroFullWindow from "@/components/sections/excursiones/HeroFullWindow";
import SplitContentSection from "@/components/sections/globales/SplitContentSection";
import FinalCTA from "@/components/sections/excursiones/FinalCTA";
import TimelineItinerary from "@/components/sections/excursiones/TimelineItinerary";
import OtherTripsSection from "@/components/sections/excursiones/OtherTripsSection";
import FAQAccordion from "@/components/sections/excursiones/FAQAccordion";
import ImageFeatureParallax from "@/components/ui/_ImageFeatureSection";
import RouteMapSection from "@/components/sections/excursiones/RouteMapSection";
import InvestmentSection from "@/components/sections/excursiones/InvestmentSection";

// 1. Generación de rutas estáticas en tiempo de compilación
export async function generateStaticParams() {
  const excursiones = await getAllExcursiones();
  return excursiones.map((excursion) => ({
    slug: excursion.slug,
  }));
}

// 2. Metadatos dinámicos para SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const excursion = await getExcursionBySlug(slug);

  if (!excursion) return { title: "Excursión no encontrada" };

  return {
    title: `${excursion.meta.title} | Jujuy Adentro`,
    description: excursion.meta.description,
  };
}

// 3. El Server Component Principal
export default async function ExcursionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const excursion = await getExcursionBySlug(slug);

  if (!excursion) {
    notFound();
  }

  const { content } = excursion;

  // Resuelve la primera imagen si viene como array o toma directamente el string
  const parallaxImage = Array.isArray(content.imageFeatureParallax?.image)
    ? content.imageFeatureParallax.image[0]
    : content.imageFeatureParallax?.image || "/contacto.jpg";

  return (
    <main className="relative w-full bg-background">
      <StickyActionNav />
      <ExcursionAnalyticsTracker
        slug={slug}
        title={content.hero?.title || excursion.meta.title}
        duration={content.hero?.eyebrow}
        indicativePriceUsd={480}
      />

      {/* 1.Seccion Hero */}
      {content.hero && (
        <HeroFullWindow
          title={content.hero.title}
          subtitle={content.hero.subtitle}
          priceTag={content.hero.eyebrow}
          backgroundImage={content.hero.image}
          ctaLabel="Descubrir experiencia"
          ctaLink="#experiencia"
          priority={true}
        />
      )}

       {/* Transicion de ParallaxImagen */}
      {content.imageFeatureParallax && (
        <ImageFeatureParallax
          id={content.imageFeatureParallax.id || "destacada"}
          image={content.imageFeatureParallax.image[0]}
          alt={
            content.imageFeatureParallax.alt ||
            content.hero?.title ||
            "Imagen destacada"
          }
          insetEffect={true}
        />
      )}

      {/*2. Seccion de Territorio */}
      {content.splitContent && (
        <div id={content.splitContent.id || "experiencia"}>
          <SplitContentSection
            id={content.splitContent.id || "experiencia"}
            heading={content.splitContent.heading}
            description={content.splitContent.description}
          />
        </div>
      )}

     

      {/*3. Seccion de Geografia */}
      {content.splitContent && (
        <div id={content.splitContent.id || "experiencia"}>
          <SplitContentSection
            id={content.splitContent.id || "experiencia"}
            heading={content.splitContent.heading}
            description={content.splitContent.description}
          />
        </div>
      )}

      {/* Transicion de ParallaxImagen */}
      {content.imageFeatureParallax && (
        <ImageFeatureParallax
          id={content.imageFeatureParallax.id || "destacada"}
          image={content.imageFeatureParallax.image[1] || parallaxImage}
          alt={
            content.imageFeatureParallax.alt ||
            content.hero?.title ||
            "Imagen destacada"
          }
          insetEffect={true}
        />
      )}

      {/* 4. Secion el Recorrido */}
      {content.timelineItinerary && (
        <div id={content.sectionHeader?.id || "itinerario"}>
          <TimelineItinerary
            heading={content.sectionHeader?.title || "EL RECORRIDO"}
            subheading={content.sectionHeader?.subtitle || content.hero?.title}
            steps={content.timelineItinerary.days}
          />
        </div>
      )}

        {/* 7. Seccion Cartografía & Información Práctica */}
      <RouteMapSection id="info" slug={slug} />
      

      {/* Transicion de ParallaxImagen */}
      {content.imageFeatureParallax && (
        <ImageFeatureParallax
          id={content.imageFeatureParallax.id || "destacada"}
          image={content.imageFeatureParallax.image[2] || parallaxImage}
          alt={
            content.imageFeatureParallax.alt ||
            content.hero?.title ||
            "Imagen destacada"
          }
          insetEffect={true}
        />
      )}

      {/* 5. Seccion Una Excursion Privada */}
           {content.faq && (
        <FAQAccordion
          id="modalidad"
          title={content.faq.title || "Preguntas frecuentes"}
          items={content.faq.items}
        />
      )}
       

      {/* Transicion de ParallaxImagen */}
      {content.imageFeatureParallax && (
        <ImageFeatureParallax
          id={content.imageFeatureParallax.id || "destacada"}
          image={content.imageFeatureParallax.image[3] }
          alt={
            content.imageFeatureParallax.alt ||
            content.hero?.title ||
            "Imagen destacada"
          }
          insetEffect={true}
        />
      )}

      {/* 6. seccion el Anfitrion */}
      {content.splitContent && (
        <div id={content.splitContent.id || "experiencia"}>
          <SplitContentSection
            id={content.splitContent.id || "experiencia"}
            heading={content.splitContent.heading}
            description={content.splitContent.description}
            image="/nosotros/SergioRetrarto02.jpg"
            imageObjectPosition="center 20%"
            imageScale="scale-100"
            imagePosition={
              content.splitContent.imagePosition as "left" | "right"
            }
            theme={
              content.splitContent.theme as "light" | "dark" | "transparent"
            }
          />
        </div>
      )}

      {/* Transicion de ParallaxImagen */}
      {content.imageFeatureParallax && (
        <ImageFeatureParallax
          id={content.imageFeatureParallax.id || "destacada"}
          image={content.imageFeatureParallax.image[4]}
          alt={
            content.imageFeatureParallax.alt ||
            content.hero?.title ||
            "Imagen destacada"
          }
          insetEffect={true}
        />
      )}



      {/* 8. Seccion Inversion (Precios y Tarifas) */}
      <InvestmentSection
        id="valor"
        title="Inversión de la Expedición"
        description={
          content.hero?.subtitle
            ? `Una travesía 100% privada y personalizada para hasta 4 personas, recorriendo ${content.hero.title} con total intimidad, confort y asistencia de alta montaña.`
            : "Una travesía 100% privada y personalizada para hasta 4 personas, recorriendo la geografía jujeña con total intimidad, confort y asistencia de alta montaña."
        }
        ctaHref={`/contacto?interes=${slug}`}
      />

      {/* 9. Seccion Dossier A FUTURO 
         {content.splitContent && (
        <div id={content.splitContent.id || "experiencia"}>
          <SplitContentSection
            id={content.splitContent.id || "experiencia"}
            heading={content.splitContent.heading}
            description={content.splitContent.description}
            image={content.splitContent.image}
            imagePosition={
              content.splitContent.imagePosition as "left" | "right"
            }
            theme={
              content.splitContent.theme as "light" | "dark" | "transparent"
            }
          />
        </div>
      )}
        */}
      

      {/* 10. Seccion faqs */}
      {content.faq && (
        <FAQAccordion
          id={content.faq.id || "faq"}
          title={content.faq.title || "Preguntas frecuentes"}
          items={content.faq.items}
        />
      )}

      {/* Marcador invisible para ocultar la barra flotante */}
      <div className="hide-nav-trigger h-1 w-full bg-transparent"></div>

      {/* 11. Seccion CTA Final */}
      {content.finalCTA && (
        <div id="consultar">
          <FinalCTA
            title={content.finalCTA.title}
            description={content.finalCTA.description}
            buttonLabel={content.finalCTA.buttonLabel}
            buttonHref={content.finalCTA.buttonHref}
            bgImage={content.finalCTA.bgImage}
          />
        </div>
      )}

      {/* 12. CROSS SELLING */}
      <OtherTripsSection currentSlug={slug} />
    </main>
  );
}
