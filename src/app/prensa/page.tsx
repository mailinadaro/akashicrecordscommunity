import Link from "next/link";
import HeroFullWindow from "@/components/sections/excursiones/HeroFullWindow";
import FinalCTA from "@/components/sections/excursiones/FinalCTA";
import SplitContentSection from "@/components/sections/globales/SplitContentSection";
import ItinerariesListing, { ItineraryItem } from "@/components/sections/excursiones/ItinerariesListing";
import OtherTripsGrid, { OtherTripItem } from "@/components/sections/excursiones/OtherTripsGrid";
import OtherTripsIntro from "@/components/sections/excursiones/OtherTripsIntro";

const pressAngles = [
  { title: "El antropólogo que propone conocer Jujuy con más tiempo", description: "Después de más de cuatro décadas recorriendo la provincia, ¿qué cambia cuando dejamos de mirar Jujuy como una sucesión de lugares y empezamos a observar el territorio?" },
  { title: "Emprender a los 71: cuando la experiencia se convierte en un nuevo comienzo", description: "Una historia sobre reinventarse, compartir lo aprendido y convertir una vida de recorridos y experiencias en un nuevo proyecto." },
  { title: "¿Qué se pierde cuando recorremos la Quebrada con apuro?", description: "Paisajes, historias, conversaciones y detalles que difícilmente aparecen cuando el objetivo es simplemente llegar al próximo destino." },
  { title: "Viajar con calma: otra manera de conocer un territorio", description: "Una conversación sobre tiempo, observación y la diferencia entre visitar un lugar y realmente acercarse a él." },
  { title: "Más allá del paisaje: las historias detrás de las rutas jujeñas", description: "La cultura, la memoria y las personas que forman parte de los territorios que recorremos." },
];

const pressItineraries: ItineraryItem[] = [
  {
    id: "press-angle-time",
    title: pressAngles[0].title,
    description: pressAngles[0].description,
    href: "#contacto-prensa",
    image: "/generales/quebrada_yacoraite_contexto.jpg",
    imageAlt: "Paisaje de la Quebrada de Humahuaca",
  },
  {
    id: "press-angle-beginning",
    title: pressAngles[1].title,
    description: pressAngles[1].description,
    href: "#contacto-prensa",
    image: "/generales/salta-and-jujuy-beauties-1-1200x700.webp",
    imageAlt: "Paisaje de Jujuy",
  },
  {
    id: "press-angle-pace",
    title: pressAngles[2].title,
    description: pressAngles[2].description,
    href: "#contacto-prensa",
    image: "/generales/norte-Slide-01_1.jpg",
    imageAlt: "Paisaje del norte argentino",
  },
  {
    id: "press-angle-travel",
    title: pressAngles[3].title,
    description: pressAngles[3].description,
    href: "#contacto-prensa",
    image: "/generales/pexels-hector-perez-1148818-4161813.jpg",
    imageAlt: "Paisaje jujeño",
  },
  {
    id: "press-angle-landscape",
    title: pressAngles[4].title,
    description: pressAngles[4].description,
    href: "#contacto-prensa",
    image: "/generales/valle-la-luna-jujuyjpg.webp",
    imageAlt: "Paisaje de Jujuy",
  },
];

const pressMaterials = [
  { title: "Fotografías de Sergio", description: "Retratos y fotografías del anfitrión." },
  { title: "Jujuy y sus paisajes", description: "Una selección de paisajes, rutas, pueblos y territorios vinculados a las experiencias." },
  { title: "Identidad de marca", description: "Logotipo, isotipo y versiones para medios digitales e impresos." },
  { title: "Bio + ficha", description: "Biografía breve, información sobre Sergio y datos esenciales del proyecto." },
  { title: "Press kit", description: "La información esencial de Sergio y Jujuy con calma reunida en un único documento." },
];

const pressServiceTrips: OtherTripItem[] = [
  {
    id: "press-interviews",
    title: "Entrevistas",
    summary: "Conversaciones con Sergio sobre Jujuy, territorio, cultura, viajes y su historia personal.",
    href: "#contacto-prensa",
    image: "/generales/quebrada_yacoraite_contexto.jpg",
    imageAlt: "Paisaje de la Quebrada de Humahuaca",
  },
  {
    id: "press-photography",
    title: "Material fotográfico",
    summary: "Retratos, paisajes y fotografías de las experiencias para notas, entrevistas y reportajes.",
    href: "#contacto-prensa",
    image: "/generales/salta-and-jujuy-beauties-1-1200x700.webp",
    imageAlt: "Paisaje de Jujuy",
  },
  {
    id: "press-information",
    title: "Información",
    summary: "Contexto y datos sobre Sergio, el proyecto y su manera de acercarse al territorio.",
    href: "#contacto-prensa",
    image: "/generales/norte-Slide-01_1.jpg",
    imageAlt: "Paisaje del norte argentino",
  },
  {
    id: "press-collaborations",
    title: "Colaboraciones",
    summary: "Disponibilidad para contenidos relacionados con turismo, cultura y territorio.",
    href: "#contacto-prensa",
    image: "/generales/pexels-hector-perez-1148818-4161813.jpg",
    imageAlt: "Paisaje jujeño",
  },
];

export default function Prensa() {
  return (
    <main className="w-full overflow-hidden bg-surface-page">
      <HeroFullWindow
        title="El antropólogo que conoce Jujuy desde adentro"
        subtitle="Más de 40 años recorriendo, observando y escuchando un territorio."
        priceTag="Prensa · Entrevistas · Colaboraciones"
        backgroundImage="/generales/quebrada_yacoraite_contexto.jpg"
        ctaLabel="Solicitar entrevista"
        ctaLink="#contacto-prensa"
        priority
      />

      <section className="bg-surface-page px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.3fr_0.7fr] lg:gap-24">
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-ochre-500">La historia detrás del proyecto</span>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl leading-tight text-earth-900 md:text-5xl">Una historia que empezó mucho antes del viaje</h2>
            <p className="mt-8 whitespace-pre-line text-lg leading-relaxed text-earth-700">{`Sergio [Apellido] es antropólogo y trabajador social. Desde hace más de cuatro décadas recorre Jujuy, observa sus paisajes y transformaciones, se acerca a sus comunidades y construye vínculos con un territorio que conoce profundamente.

Hoy, todo ese recorrido se encuentra en Jujuy con calma.

Una propuesta de experiencias privadas y viajes a medida para quienes quieren descubrir la provincia más allá de los itinerarios habituales.

No se trata solamente de llegar a un lugar.

Se trata de tener tiempo para mirar, escuchar, comprender y descubrir.`}</p>
            <Link href="/sobre-nosotros" className="mt-8 inline-block border-b border-earth-900 pb-1 text-xs font-bold uppercase tracking-[0.2em] text-earth-900 hover:border-ochre-500 hover:text-ochre-500">Leer la historia completa de Sergio →</Link>
          </div>
        </div>
      </section>


      <section id="mirada" className="bg-surface-secondary px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.3fr_0.7fr] lg:gap-24">
            <div>
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-ochre-500">
                La experiencia detrás de la propuesta
              </span>
            </div>
            <div>
              <h2 className="max-w-3xl font-display text-3xl leading-tight text-earth-900 md:text-5xl">
                Una mirada construida en el territorio
              </h2>
              <div className="mt-12 grid border-y border-earth-900/20 sm:grid-cols-2 lg:grid-cols-4">
                <div className="border-b border-earth-900/20 py-8 sm:border-r sm:pr-6 lg:border-b-0">
                  <p className="font-display text-5xl text-earth-900 md:text-6xl">40+</p>
                  <p className="mt-3 text-sm text-earth-700">años recorriendo Jujuy</p>
                </div>
                <div className="border-b border-earth-900/20 py-8 sm:pl-6 lg:border-b-0 lg:border-r lg:pr-6">
                  <p className="font-display text-5xl text-earth-900 md:text-6xl">71</p>
                  <p className="mt-3 text-sm text-earth-700">años de experiencia y recorrido</p>
                </div>
                <div className="border-b border-earth-900/20 py-8 sm:border-r sm:pr-6 lg:border-b-0 lg:pl-6">
                  <p className="font-display text-2xl leading-tight text-earth-900">Antropólogo</p>
                  <p className="mt-3 text-sm text-earth-700">y trabajador social</p>
                </div>
                <div className="py-8 sm:pl-6">
                  <p className="font-display text-2xl leading-tight text-earth-900">Jujuy</p>
                  <p className="mt-3 text-sm text-earth-700">base de operaciones</p>
                </div>
              </div>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-earth-700">
                Una mirada centrada en las personas, la cultura y el territorio. Experiencias privadas, grupos reducidos y atención personalizada atravesados por cultura, territorio, paisaje e historia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ItinerariesListing
        id="historias"
        items={pressItineraries}
        showSeasonSidebar={false}
        sectionEyebrow="Ideas para notas y entrevistas"
        sectionTitle="Cinco historias que Jujuy tiene para contar"
        sectionDescription="Jujuy con calma puede ser el punto de partida para conversaciones que van mucho más allá del turismo."
      />

      <section id="press-kit" className="bg-earth-900 px-6 py-20 text-warm-50 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-ochre-500">Recursos para medios</span>
            <h2 className="mt-4 font-display text-3xl leading-tight md:text-5xl">Material para prensa</h2>
            <p className="mt-6 text-lg leading-relaxed text-warm-50/70">Imágenes, información y recursos para contar la historia. Hemos reunido aquí los materiales necesarios para notas, entrevistas, reportajes y publicaciones sobre Sergio y Jujuy con calma.</p>
          </div>
          <div className="mt-14 border-y border-warm-50/20">
            {pressMaterials.map((material) => (
              <article key={material.title} className="grid gap-4 border-b border-warm-50/20 py-7 md:grid-cols-[0.8fr_1.5fr_auto] md:items-center md:gap-10">
                <h3 className="font-display text-2xl text-warm-50">{material.title}</h3>
                <p className="max-w-xl text-sm leading-relaxed text-warm-50/65">{material.description}</p>
                <a href="#contacto-prensa" className="w-fit text-[10px] font-bold uppercase tracking-[0.2em] text-ochre-500 hover:text-warm-50">Solicitar material →</a>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-warm-50/60">Cada recurso incluye formato, resolución, peso y crédito fotográfico. Las fotografías están disponibles para uso editorial con el crédito correspondiente.</p>
        </div>
      </section>

      <SplitContentSection
        id="proyecto"
        heading="El proyecto que nació de ese recorrido"
        description="Jujuy con calma diseña experiencias privadas y viajes a medida para quienes buscan descubrir la provincia con comodidad, flexibilidad y atención personal. La propuesta nace de una idea sencilla: el tiempo también forma parte del viaje."
        image="/generales/salta-and-jujuy-beauties-1-1200x700.webp"
        imagePosition="right"
        theme="light"
      />

      <section id="colaboraciones">
        <OtherTripsIntro
          title="Prensa y colaboraciones"
          images={[
            "/generales/norte-Slide-01_1.jpg",
            "/generales/quebrada_yacoraite_contexto.jpg",
            "/generales/salta-and-jujuy-beauties-1-1200x700.webp",
          ]}
        />
        <OtherTripsGrid trips={pressServiceTrips} />
      </section>

      <section id="uso-editorial" className="bg-surface-page px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.3fr_0.7fr] lg:gap-24">
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-ochre-500">Condiciones de uso</span>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl text-earth-900 md:text-5xl">Uso editorial</h2>
            <p className="mt-8 text-lg leading-relaxed text-earth-700">Las fotografías, logotipos y materiales disponibles en esta página pueden utilizarse para notas, entrevistas y publicaciones editoriales relacionadas con Sergio [Apellido] y Jujuy con calma.</p>
            <h3 className="mt-10 font-display text-2xl text-earth-900">Para fotografías</h3>
            <p className="mt-4 text-earth-700">Foto: [Nombre del fotógrafo] / Jujuy con calma</p>
            <p className="mt-6 text-earth-700">Para usos comerciales, campañas publicitarias, publicaciones patrocinadas o solicitudes especiales, consultar previamente:</p>
            <a href="mailto:prensa@jujuyconcalma.com" className="mt-5 inline-block border-b border-earth-900 pb-1 font-medium text-earth-900 hover:border-ochre-500 hover:text-ochre-500">prensa@jujuyconcalma.com</a>
          </div>
        </div>
      </section>

      <section id="contacto-prensa">
        <FinalCTA
          title="Hablemos."
          description="Si estás preparando una nota, necesitas material o quieres conversar con Sergio, escríbenos. Prensa y coordinación de entrevistas, lunes a viernes · 9:00–18:00 ART."
          buttonLabel="Solicitar entrevista"
          buttonHref="mailto:prensa@jujuyconcalma.com"
          bgImage="/generales/quebrada_yacoraite_contexto.jpg"
          tagline="Contacto de prensa · prensa@jujuyconcalma.com"
        />
      </section>
    </main>
  );
}
