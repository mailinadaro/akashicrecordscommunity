import HeroFullWindow from "@/components/sections/excursiones/HeroFullWindow";
import Link from "next/link";

export default function CookiesPolicy() {
  return (
    <div className="flex w-full flex-col items-center bg-surface-page">
   
  <HeroFullWindow
        title="Política de Cookies"
        subtitle="Información sobre el uso de cookies y tecnologías similares en nuestro sitio web"
        backgroundImage="/generales/images (16).jpg"
      />

      <article className="w-full max-w-3xl px-5 py-16 text-base leading-7 text-text-secondary md:px-8 md:py-24">
        
        <header className="border-b border-border-default pb-8">
          <p className="mt-0 text-sm text-text-secondary">
            <strong className="font-semibold text-text-primary">Última actualización:</strong> [FECHA]
          </p>
        </header>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">1. ¿Qué son las cookies?</h2>

          <p>
            Las cookies son pequeños archivos de texto que se almacenan en el
            dispositivo desde el que accedes a un sitio web cuando lo visitas.
            Permiten que el sitio recuerde determinada información y ayudan a
            garantizar su correcto funcionamiento, mejorar la experiencia de
            navegación y obtener información sobre el uso del sitio.
          </p>

          <p>
            En <strong className="font-semibold text-text-primary">Jujuy Adentro</strong> utilizamos cookies y tecnologías
            similares de acuerdo con las finalidades descritas en esta política.
          </p>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">2. ¿Quién es el responsable?</h2>

          <p>
            El responsable del sitio web y del tratamiento de la información
            obtenida mediante cookies es:
          </p>

          <ul className="mt-4 space-y-2">
            <li className="ml-5 list-disc pl-2">
              <strong className="font-semibold text-text-primary">Responsable:</strong> [NOMBRE COMPLETO / RAZÓN SOCIAL]
            </li>
            <li className="ml-5 list-disc pl-2">
              <strong className="font-semibold text-text-primary">Domicilio:</strong> [DOMICILIO]
            </li>
            <li className="ml-5 list-disc pl-2">
              <strong className="font-semibold text-text-primary">Ciudad:</strong> San Salvador de Jujuy, Jujuy, Argentina
            </li>
            <li className="ml-5 list-disc pl-2">
              <strong className="font-semibold text-text-primary">Correo electrónico:</strong> [EMAIL]
            </li>
            <li className="ml-5 list-disc pl-2">
              <strong className="font-semibold text-text-primary">Sitio web:</strong> https://[DOMINIO]
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">3. ¿Qué tipos de cookies utilizamos?</h2>

          <p>
            Las cookies que pueden utilizarse en este sitio se clasifican según
            su finalidad.
          </p>

          <h3 className="mt-10 font-display text-xl text-text-primary">3.1. Cookies estrictamente necesarias</h3>

          <p>
            Son aquellas necesarias para que el sitio web pueda funcionar
            correctamente y para proporcionar determinadas funcionalidades
            solicitadas por el usuario.
          </p>

          <p>
            Estas cookies pueden utilizarse, por ejemplo, para mantener
            determinadas preferencias técnicas o garantizar el funcionamiento de
            formularios y otros elementos del sitio.
          </p>

          <h3 className="mt-10 font-display text-xl text-text-primary">3.2. Cookies de preferencias</h3>

          <p>
            Permiten recordar determinadas preferencias del usuario para mejorar
            su experiencia de navegación, como determinadas configuraciones o
            elecciones realizadas durante la visita.
          </p>

          <h3 className="mt-10 font-display text-xl text-text-primary">3.3. Cookies analíticas o estadísticas</h3>

          <p>
            Podemos utilizar herramientas de análisis para comprender cómo los
            visitantes utilizan nuestro sitio web, qué páginas consultan y cómo
            interactúan con sus contenidos.
          </p>

          <p>
            Esta información se utiliza con fines estadísticos y para mejorar el
            funcionamiento, contenido y experiencia de navegación del sitio.
          </p>

          <p>
            Cuando corresponda, estas herramientas pueden utilizar cookies o
            tecnologías similares proporcionadas por terceros.
          </p>

          <h3 className="mt-10 font-display text-xl text-text-primary">3.4. Cookies de marketing o publicidad</h3>

          <p>
            Actualmente [NO UTILIZAMOS / UTILIZAMOS] cookies destinadas a crear
            perfiles de navegación o mostrar publicidad personalizada.
          </p>

          <p>
            Si en el futuro incorporamos este tipo de tecnologías,
            actualizaremos esta Política de Cookies y, cuando corresponda,
            solicitaremos el consentimiento previo del usuario.
          </p>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">4. Cookies de terceros</h2>

          <p>
            Algunos servicios de terceros que utilizamos para operar, analizar o
            mejorar el sitio pueden utilizar sus propias cookies o tecnologías
            similares.
          </p>

          <p>
            Estos terceros pueden procesar determinada información de acuerdo
            con sus propias políticas de privacidad y cookies.
          </p>

          <p>
            Entre los servicios que pueden estar integrados en nuestro sitio se
            encuentran:
          </p>

          <ul className="mt-4 space-y-2">
            <li className="ml-5 list-disc pl-2">[Google Analytics, si corresponde]</li>
            <li className="ml-5 list-disc pl-2">[Google Tag Manager, si corresponde]</li>
            <li className="ml-5 list-disc pl-2">[Meta Pixel, si corresponde]</li>
            <li className="ml-5 list-disc pl-2">[Kit, si corresponde]</li>
            <li className="ml-5 list-disc pl-2">[Otros servicios]</li>
          </ul>

          <p>
            La lista anterior deberá mantenerse actualizada de acuerdo con las
            herramientas efectivamente instaladas y utilizadas en el sitio.
          </p>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">5. ¿Para qué utilizamos las cookies?</h2>

          <p>Las cookies pueden utilizarse para las siguientes finalidades:</p>

          <ul className="mt-4 space-y-2">
            <li className="ml-5 list-disc pl-2">Garantizar el funcionamiento técnico del sitio.</li>
            <li className="ml-5 list-disc pl-2">Recordar determinadas preferencias de navegación.</li>
            <li className="ml-5 list-disc pl-2">Comprender cómo se utiliza el sitio.</li>
            <li className="ml-5 list-disc pl-2">Analizar el rendimiento de las diferentes páginas.</li>
            <li className="ml-5 list-disc pl-2">Mejorar nuestros contenidos y servicios.</li>
            <li className="ml-5 list-disc pl-2">Detectar errores y mejorar la seguridad.</li>
            <li className="ml-5 list-disc pl-2">
              [Realizar mediciones de campañas publicitarias, si corresponde].
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">6. Gestión y desactivación de cookies</h2>

          <p>
            Puedes configurar tu navegador para aceptar, rechazar o eliminar
            determinadas cookies.
          </p>

          <p>
            Ten en cuenta que la desactivación de algunas cookies puede afectar
            el funcionamiento de determinadas características del sitio.
          </p>

          <p>
            Las opciones disponibles para gestionar cookies dependen del
            navegador que utilices. Puedes consultar la configuración de
            privacidad y seguridad de tu navegador para obtener más información.
          </p>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">7. Consentimiento</h2>

          <p>
            Cuando una cookie requiera consentimiento, solicitaremos dicho
            consentimiento antes de instalarla, mediante el mecanismo
            correspondiente disponible en el sitio.
          </p>

          <p>
            Las cookies estrictamente necesarias para el funcionamiento del
            sitio pueden utilizarse cuando resulten indispensables para prestar
            el servicio solicitado.
          </p>

          <p>
            Cuando corresponda, podrás modificar o retirar tu consentimiento
            mediante las opciones de configuración de cookies disponibles en el
            sitio.
          </p>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">8. Protección de datos personales</h2>

          <p>
            El uso de cookies puede implicar el tratamiento de determinada
            información relacionada con la navegación y, dependiendo de la
            tecnología utilizada, información que pueda asociarse con un
            usuario.
          </p>

          <p>
            El tratamiento de datos personales se realiza de acuerdo con la
            legislación aplicable en materia de protección de datos personales.
          </p>

          <p>
            Para conocer cómo recopilamos, utilizamos, almacenamos y protegemos
            los datos personales obtenidos a través de este sitio, puedes
            consultar nuestra
            <Link href="/legal/privacy-policy">Política de Privacidad</Link>.
          </p>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">9. Actualizaciones de esta Política de Cookies</h2>

          <p>
            Podemos actualizar esta Política de Cookies cuando resulte
            necesario, por ejemplo, cuando incorporemos nuevas funcionalidades,
            servicios o tecnologías que impliquen el uso de cookies.
          </p>

          <p>
            La versión vigente será siempre la publicada en esta página.
            Recomendamos consultar periódicamente esta política para conocer
            cualquier modificación.
          </p>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">10. Contacto</h2>

          <p>
            Si tienes alguna consulta relacionada con el uso de cookies en este
            sitio web, puedes contactarnos a través de:
          </p>

          <ul className="mt-4 space-y-2">
            <li className="ml-5 list-disc pl-2">
              <strong className="font-semibold text-text-primary">Email:</strong>
              <a href="mailto:[EMAIL]">[EMAIL]</a>
            </li>
            <li className="ml-5 list-disc pl-2">
              <strong className="font-semibold text-text-primary">WhatsApp:</strong>
              [NÚMERO]
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
