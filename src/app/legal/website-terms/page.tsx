import HeroFullWindow from "@/components/sections/excursiones/HeroFullWindow";
import Link from "next/link";

export default function WebsiteTerms() {
  return (
    <main className="flex w-full flex-col items-center bg-surface-page">
      <HeroFullWindow
        title="Términos y Condiciones"
        subtitle="Condiciones de uso del sitio web y de los servicios ofrecidos por Jujuy con calma"
        backgroundImage="/generales/images (14).jpg"
      />

      <article className="w-full max-w-3xl px-5 py-16 text-base leading-7 text-text-secondary md:px-8 md:py-24">
        <header className="border-b border-border-default pb-8">
          <p className="mt-0 text-sm text-text-secondary">
            <strong className="font-semibold text-text-primary">
              Última actualización:
            </strong>{" "}
            [FECHA]
          </p>
        </header>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">
            1. Información general
          </h2>

          <p>
            Bienvenido/a a{" "}
            <strong className="font-semibold text-text-primary">
              Jujuy Adentro
            </strong>
            .
          </p>

          <p>
            Estos Términos y Condiciones regulan el acceso y uso del sitio web
            [DOMINIO], así como las condiciones aplicables a las consultas,
            solicitudes de información y solicitudes de presupuestos realizadas
            a través del sitio.
          </p>

          <p>
            Al acceder y utilizar este sitio, aceptas estos Términos y
            Condiciones. Si no estás de acuerdo con ellos, te recomendamos no
            utilizar el sitio.
          </p>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">
            2. Responsable del sitio
          </h2>

          <p>El sitio web es gestionado por:</p>

          <ul className="mt-4 space-y-2 [&>li]:ml-5 [&>li]:list-disc [&>li]:pl-2">
            <li>
              <strong className="font-semibold text-text-primary">
                Responsable:
              </strong>
              [NOMBRE COMPLETO / RAZÓN SOCIAL]
            </li>

            <li>
              <strong className="font-semibold text-text-primary">
                Domicilio:
              </strong>
              [DOMICILIO]
            </li>

            <li>
              <strong className="font-semibold text-text-primary">
                Localidad:
              </strong>
              San Salvador de Jujuy, Jujuy, Argentina
            </li>

            <li>
              <strong className="font-semibold text-text-primary">
                Correo electrónico:
              </strong>
              <a href="mailto:[EMAIL]">[EMAIL]</a>
            </li>

            <li>
              <strong className="font-semibold text-text-primary">
                Sitio web:
              </strong>
              [DOMINIO]
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">
            3. Sobre Jujuy Adentro
          </h2>

          <p>
            Jujuy con calma ofrece experiencias privadas y propuestas de viajes
            a medida en la provincia de Jujuy, Argentina.
          </p>

          <p>
            El sitio web tiene como finalidad presentar información sobre las
            experiencias, destinos y servicios ofrecidos, facilitar el contacto
            con potenciales viajeros y permitir la solicitud de información o
            presupuestos.
          </p>

          <p>
            Las características, disponibilidad, duración, itinerarios, precios,
            condiciones y demás aspectos de cada servicio pueden variar según la
            propuesta solicitada y las condiciones existentes al momento de la
            contratación.
          </p>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">
            4. Información publicada en el sitio
          </h2>

          <p>
            Procuramos que la información publicada en este sitio sea clara,
            actualizada y precisa.
          </p>

          <p>
            Sin embargo, determinados aspectos de las experiencias pueden estar
            sujetos a cambios debido a condiciones operativas, climáticas,
            geográficas, de accesibilidad, disponibilidad de prestadores o
            circunstancias ajenas a nuestra voluntad.
          </p>

          <p>
            Las fotografías utilizadas en el sitio tienen finalidad ilustrativa
            y editorial. Las condiciones reales de un paisaje, camino, destino,
            alojamiento, vehículo u otro elemento pueden variar según la época
            del año y las condiciones existentes durante cada viaje.
          </p>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">
            5. Consultas y solicitudes de presupuesto
          </h2>

          <p>
            El sitio permite realizar consultas y solicitar información o
            presupuestos sobre las experiencias y viajes a medida ofrecidos por
            Jujuy con calma.
          </p>

          <p>
            El envío de un formulario, correo electrónico o mensaje a través de
            los canales de contacto disponibles en el sitio constituye una
            solicitud de información y no implica por sí mismo la contratación
            de un servicio ni garantiza la disponibilidad de una experiencia,
            fecha, vehículo, alojamiento o actividad.
          </p>

          <p>
            Las solicitudes serán evaluadas de acuerdo con la información
            proporcionada y las condiciones disponibles en cada caso.
          </p>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">
            6. Presupuestos y propuestas
          </h2>

          <p>
            Cuando corresponda, Jujuy con calma podrá elaborar y enviar una
            propuesta o presupuesto de acuerdo con las características del viaje
            solicitado.
          </p>

          <p>
            Cada propuesta podrá incluir información específica sobre el
            servicio, itinerario, duración, cantidad de viajeros, precio,
            servicios incluidos, servicios no incluidos y demás condiciones
            aplicables.
          </p>

          <p>
            La propuesta enviada al viajero constituirá la referencia para la
            contratación cuando sea aceptada conforme a las condiciones
            indicadas en ella.
          </p>

          <p>
            La disponibilidad y las condiciones indicadas en una propuesta
            estarán sujetas al plazo de vigencia que se especifique en la misma.
          </p>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">
            7. Contratación de servicios
          </h2>

          <p>
            Actualmente, este sitio web no permite realizar reservas ni efectuar
            pagos en línea.
          </p>

          <p>
            La solicitud de información, el envío de un formulario o el contacto
            mediante WhatsApp o correo electrónico no constituyen por sí mismos
            una reserva confirmada.
          </p>

          <p>
            Cuando corresponda contratar una experiencia, las condiciones
            particulares de la contratación serán informadas previamente al
            viajero y deberán ser aceptadas antes de confirmar el servicio.
          </p>

          <p>
            Las condiciones particulares de cada contratación podrán prevalecer
            sobre estas condiciones generales cuando así se indique
            expresamente.
          </p>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">
            8. Precios
          </h2>

          <p>
            Los precios publicados en el sitio, cuando existan, tienen carácter
            informativo y pueden estar sujetos a modificaciones.
          </p>

          <p>
            El precio aplicable a una experiencia o viaje a medida será el
            informado en la propuesta correspondiente, junto con las
            condiciones, servicios incluidos y cualquier costo adicional que
            corresponda.
          </p>

          <p>
            Antes de la contratación se informarán las condiciones económicas
            aplicables al servicio solicitado.
          </p>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">
            9. Itinerarios y condiciones del viaje
          </h2>

          <p>
            Los itinerarios publicados en el sitio representan propuestas de
            viaje y pueden adaptarse de acuerdo con las características de cada
            experiencia.
          </p>

          <p>
            En los viajes a medida, el itinerario será definido conjuntamente
            con el viajero de acuerdo con sus intereses, tiempos, preferencias y
            condiciones de viaje.
          </p>

          <p>
            Las condiciones climáticas, el estado de los caminos, restricciones
            de acceso, situaciones de fuerza mayor u otras circunstancias
            operativas pueden requerir modificaciones razonables del itinerario.
          </p>

          <p>
            Cuando una modificación resulte necesaria para preservar la
            seguridad o viabilidad de la experiencia, se procurará informar al
            viajero y ofrecer una alternativa adecuada cuando sea posible.
          </p>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">
            10. Responsabilidad del viajero
          </h2>

          <p>
            El viajero es responsable de proporcionar información correcta y
            completa que resulte necesaria para organizar adecuadamente su
            experiencia.
          </p>

          <p>
            También deberá comunicar con anticipación cualquier circunstancia
            relevante que pueda afectar la realización del viaje o las
            actividades previstas.
          </p>

          <p>
            El viajero deberá seguir las indicaciones razonables relacionadas
            con seguridad, circulación, acceso a determinados lugares y
            condiciones de las actividades durante la experiencia.
          </p>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">
            11. Terceros y servicios complementarios
          </h2>

          <p>
            Algunas experiencias pueden incluir o requerir servicios prestados
            por terceros, tales como alojamientos, restaurantes, actividades,
            entradas, transportes u otros servicios complementarios.
          </p>

          <p>
            Cuando corresponda, las condiciones particulares de estos servicios
            serán informadas previamente.
          </p>

          <p>
            Los servicios prestados directamente por terceros pueden estar
            sujetos además a sus propias condiciones de contratación.
          </p>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">
            12. Enlaces a sitios externos
          </h2>

          <p>
            Este sitio puede contener enlaces a sitios web, redes sociales u
            otros servicios externos.
          </p>

          <p>
            Dichos enlaces se proporcionan para facilitar el acceso a
            información o servicios complementarios. Jujuy con calma no controla
            necesariamente el contenido, disponibilidad o políticas de esos
            sitios externos.
          </p>

          <p>
            El acceso y uso de dichos sitios estará sujeto a sus propios
            términos y condiciones y políticas de privacidad.
          </p>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">
            13. Propiedad intelectual
          </h2>

          <p>
            Los contenidos publicados en este sitio, incluyendo textos,
            fotografías, imágenes, logotipos, elementos gráficos, identidad
            visual y otros materiales, pertenecen a Jujuy con calma o se
            utilizan con las autorizaciones correspondientes.
          </p>

          <p>
            Salvo autorización previa y expresa, no está permitido reproducir,
            distribuir, modificar, publicar, comercializar o utilizar dichos
            contenidos con fines comerciales.
          </p>

          <p>
            El uso de materiales destinados específicamente a prensa o uso
            editorial estará sujeto a las condiciones indicadas en la
            correspondiente sección del sitio.
          </p>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">
            14. Uso permitido del sitio
          </h2>

          <p>
            El usuario se compromete a utilizar el sitio de forma lícita y de
            acuerdo con estos Términos y Condiciones.
          </p>

          <p>No está permitido utilizar el sitio para:</p>

          <ul className="mt-4 space-y-2 [&>li]:ml-5 [&>li]:list-disc [&>li]:pl-2">
            <li>Realizar actividades contrarias a la legislación vigente.</li>

            <li>
              Intentar acceder sin autorización a sistemas, servidores o
              información del sitio.
            </li>

            <li>
              Introducir código malicioso, virus u otros elementos que puedan
              afectar el funcionamiento del sitio.
            </li>

            <li>
              Utilizar los formularios para enviar información falsa,
              fraudulenta o no relacionada con su finalidad.
            </li>

            <li>
              Reproducir o utilizar contenidos protegidos sin autorización.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">
            15. Disponibilidad del sitio
          </h2>

          <p>
            Procuramos mantener el sitio disponible y funcionando correctamente.
            Sin embargo, no podemos garantizar que estará disponible de manera
            permanente o libre de errores.
          </p>

          <p>
            El sitio puede ser temporalmente suspendido por tareas de
            mantenimiento, actualizaciones, problemas técnicos, fallas de
            proveedores o circunstancias ajenas a nuestro control.
          </p>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">
            16. Protección de datos personales
          </h2>

          <p>
            El tratamiento de los datos personales proporcionados a través del
            sitio se encuentra regulado por nuestra
            <Link href="/legal/privacy-policy">Política de Privacidad</Link>.
          </p>

          <p>
            El uso de cookies y tecnologías similares se encuentra regulado por
            nuestra
            <Link href="/legal/cookies-policy">Política de Cookies</Link>.
          </p>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">
            17. Modificaciones de estos Términos y Condiciones
          </h2>

          <p>
            Jujuy con calma podrá actualizar estos Términos y Condiciones cuando
            resulte necesario para reflejar cambios en el sitio, en los
            servicios ofrecidos o en la normativa aplicable.
          </p>

          <p>
            La versión vigente será la publicada en esta página, indicando su
            fecha de última actualización.
          </p>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">
            18. Legislación aplicable
          </h2>

          <p>
            Estos Términos y Condiciones se regirán por las leyes aplicables de
            la República Argentina.
          </p>

          <p>
            Las relaciones de consumo que puedan surgir entre Jujuy con calma y
            sus clientes estarán sujetas a las normas de protección de los
            consumidores que resulten aplicables.
          </p>

          <p>
            Ninguna disposición de estos Términos y Condiciones pretende limitar
            los derechos que correspondan a los consumidores conforme a la
            legislación vigente.
          </p>
        </section>

        <section>
          <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">
            19. Contacto
          </h2>

          <p>
            Si tienes alguna consulta relacionada con estos Términos y
            Condiciones, puedes comunicarte con nosotros mediante:
          </p>

          <ul className="mt-4 space-y-2 [&>li]:ml-5 [&>li]:list-disc [&>li]:pl-2">
            <li>
              <strong className="font-semibold text-text-primary">
                Email:
              </strong>
              <a href="mailto:[EMAIL]">[EMAIL]</a>
            </li>

            <li>
              <strong className="font-semibold text-text-primary">
                WhatsApp:
              </strong>
              [NÚMERO]
            </li>

            <li>
              <strong className="font-semibold text-text-primary">
                Dirección:
              </strong>
              San Salvador de Jujuy, Jujuy, Argentina
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
