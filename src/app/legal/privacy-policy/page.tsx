import HeroFullWindow from "@/components/sections/excursiones/HeroFullWindow";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="flex w-full flex-col items-center bg-surface-page">
  
  <HeroFullWindow
        title="Política de Privacidad"
        subtitle="Información sobre cómo recopilamos, usamos y protegemos tus datos personales"
        backgroundImage="/generales/images (19).jpg"
      />

    <article className="w-full max-w-3xl px-5 py-16 text-base leading-7 text-text-secondary md:px-8 md:py-24">
  <header className="border-b border-border-default pb-8">
    <p className="mt-0 text-sm text-text-secondary"><strong className="font-semibold text-text-primary">Última actualización:</strong> [FECHA]</p>
  </header>

  <section>
    <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">1. Introducción</h2>

    <p>
      En <strong className="font-semibold text-text-primary">Jujuy Adentro</strong> nos comprometemos a proteger la
      privacidad de las personas que visitan nuestro sitio web y se
      comunican con nosotros.
    </p>

    <p>
      Esta Política de Privacidad explica qué datos personales podemos
      recopilar a través de nuestro sitio web, para qué los utilizamos,
      cómo los protegemos y cuáles son los derechos que puedes ejercer
      sobre tus datos.
    </p>

    <p>
      El tratamiento de los datos personales se realiza de acuerdo con la
      normativa argentina aplicable en materia de protección de datos
      personales, incluyendo la Ley N.º 25.326 y sus normas
      complementarias.
    </p>
  </section>

  <section>
    <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">2. Responsable del tratamiento</h2>

    <p>
      El responsable del tratamiento de los datos personales recopilados
      a través de este sitio web es:
    </p>

    <ul className="mt-4 space-y-2 [&>li]:ml-5 [&>li]:list-disc [&>li]:pl-2">
      <li className="ml-5 list-disc pl-2">
        <strong className="font-semibold text-text-primary">Responsable:</strong>
        [NOMBRE COMPLETO / RAZÓN SOCIAL]
      </li>

      <li className="ml-5 list-disc pl-2">
        <strong className="font-semibold text-text-primary">Domicilio:</strong>
        [DOMICILIO]
      </li>

      <li className="ml-5 list-disc pl-2">
        <strong className="font-semibold text-text-primary">Localidad:</strong>
        San Salvador de Jujuy, Jujuy, Argentina
      </li>

      <li className="ml-5 list-disc pl-2">
        <strong className="font-semibold text-text-primary">Correo electrónico:</strong>
        <a href="mailto:[EMAIL]">[EMAIL]</a>
      </li>

      <li className="ml-5 list-disc pl-2">
        <strong className="font-semibold text-text-primary">Sitio web:</strong>
        [DOMINIO]
      </li>
    </ul>
  </section>

  <section>
    <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">3. ¿Qué datos personales recopilamos?</h2>

    <p>
      Dependiendo de cómo utilices el sitio, podemos recopilar los
      siguientes datos personales:
    </p>

    <ul className="mt-4 space-y-2 [&>li]:ml-5 [&>li]:list-disc [&>li]:pl-2">
      <li className="ml-5 list-disc pl-2">Nombre y apellido.</li>
      <li className="ml-5 list-disc pl-2">Dirección de correo electrónico.</li>
      <li className="ml-5 list-disc pl-2">Número de teléfono o WhatsApp.</li>
      <li className="ml-5 list-disc pl-2">Información relacionada con el viaje que deseas realizar.</li>
      <li className="ml-5 list-disc pl-2">Fechas aproximadas de viaje.</li>
      <li className="ml-5 list-disc pl-2">Cantidad de viajeros.</li>
      <li className="ml-5 list-disc pl-2">Preferencias o intereses relacionados con el viaje.</li>
      <li className="ml-5 list-disc pl-2">Información que decidas incluir voluntariamente en un mensaje.</li>
      <li className="ml-5 list-disc pl-2">Información técnica relacionada con la navegación del sitio.</li>
    </ul>

    <p>
      No solicitamos datos personales sensibles a través de nuestros
      formularios.
    </p>
  </section>

  <section>
    <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">4. ¿Cómo recopilamos tus datos?</h2>

    <p>
      Podemos recopilar información cuando:
    </p>

    <ul className="mt-4 space-y-2 [&>li]:ml-5 [&>li]:list-disc [&>li]:pl-2">
      <li>
        Completas un formulario de contacto.
      </li>

      <li>
        Solicitas información sobre una excursión.
      </li>

      <li>
        Solicitas un presupuesto para un viaje a medida.
      </li>

      <li>
        Solicitas o descargas material editorial o informativo.
      </li>

      <li>
        Te comunicas con nosotros por correo electrónico o WhatsApp.
      </li>

      <li>
        Te suscribes voluntariamente a comunicaciones o contenidos.
      </li>

      <li>
        Navegas e interactúas con nuestro sitio web mediante tecnologías
        como cookies y herramientas de análisis.
      </li>
    </ul>
  </section>

  <section>
    <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">5. ¿Para qué utilizamos tus datos?</h2>

    <p>
      Utilizamos los datos personales únicamente para las finalidades
      relacionadas con la interacción que mantienes con Jujuy con calma.
    </p>

    <p>Estas finalidades pueden incluir:</p>

    <ul className="mt-4 space-y-2 [&>li]:ml-5 [&>li]:list-disc [&>li]:pl-2">
      <li>
        Responder consultas realizadas a través del sitio web.
      </li>

      <li>
        Preparar y enviar presupuestos solicitados.
      </li>

      <li>
        Diseñar propuestas de viajes a medida.
      </li>

      <li>
        Contactarte para dar seguimiento a una solicitud.
      </li>

      <li>
        Coordinar entrevistas, colaboraciones o solicitudes de prensa,
        cuando corresponda.
      </li>

      <li>
        Enviar el material solicitado, como dossiers, fichas o documentos.
      </li>

      <li>
        Gestionar suscripciones a comunicaciones cuando hayas dado tu
        consentimiento para recibirlas.
      </li>

      <li>
        Mejorar el contenido, funcionamiento y experiencia de navegación
        del sitio.
      </li>

      <li>
        Analizar de forma estadística el uso del sitio web.
      </li>

      <li>
        Cumplir con obligaciones legales que resulten aplicables.
      </li>
    </ul>

    <p>
      No utilizaremos tus datos personales para finalidades incompatibles
      con aquellas para las que fueron recopilados.
    </p>
  </section>

  <section>
    <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">6. Formularios y solicitudes de contacto</h2>

    <p>
      Cuando completas un formulario en nuestro sitio, solicitamos
      únicamente la información necesaria para poder responder a tu
      solicitud.
    </p>

    <p>
      Algunos campos pueden ser obligatorios para poder procesar la
      solicitud. Otros pueden ser opcionales.
    </p>

    <p>
      Si decides no proporcionar información necesaria para atender una
      solicitud, es posible que no podamos responderla adecuadamente o
      preparar la propuesta solicitada.
    </p>
  </section>

  <section>
    <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">7. Comunicaciones comerciales</h2>

    <p>
      Si solicitas información, un presupuesto o realizas una consulta,
      podremos utilizar tus datos de contacto para responder y realizar
      las comunicaciones necesarias relacionadas con dicha solicitud.
    </p>

    <p>
      El envío de comunicaciones comerciales o contenidos promocionales
      estará sujeto a las condiciones y consentimientos que correspondan.
    </p>

    <p>
      Si te suscribes voluntariamente a nuestra lista de comunicaciones,
      podrás solicitar dejar de recibirlas en cualquier momento mediante
      el mecanismo de cancelación incluido en dichas comunicaciones o
      contactándonos directamente.
    </p>
  </section>

  <section>
    <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">8. Proveedores y servicios externos</h2>

    <p>
      Para operar nuestro sitio web y gestionar determinadas funciones,
      podemos utilizar proveedores tecnológicos que procesen información
      en nuestro nombre o presten servicios relacionados con la
      infraestructura del sitio.
    </p>

    <p>
      Entre ellos pueden encontrarse:
    </p>

    <ul className="mt-4 space-y-2 [&>li]:ml-5 [&>li]:list-disc [&>li]:pl-2">
      <li>
        <strong className="font-semibold text-text-primary">Vercel:</strong> alojamiento y distribución del sitio web.
      </li>

      <li>
        <strong className="font-semibold text-text-primary">Resend:</strong> envío y gestión técnica de correos
        electrónicos.
      </li>

      <li>
        <strong className="font-semibold text-text-primary">Kit:</strong> gestión de contactos y comunicaciones,
        cuando corresponda.
      </li>

      <li>
        <strong className="font-semibold text-text-primary">Google Analytics:</strong> análisis estadístico de
        navegación, si se encuentra implementado.
      </li>

      <li>
        <strong className="font-semibold text-text-primary">Otros proveedores tecnológicos:</strong>
        [AGREGAR SI CORRESPONDE].
      </li>
    </ul>

    <p>
      Estos servicios podrán procesar determinados datos de acuerdo con
      sus propias políticas de privacidad y con las condiciones
      contractuales aplicables.
    </p>
  </section>

  <section>
    <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">9. Transferencias de datos</h2>

    <p>
      Algunos de los proveedores tecnológicos utilizados para operar el
      sitio pueden encontrarse fuera de Argentina o utilizar
      infraestructura ubicada en otros países.
    </p>

    <p>
      Cuando corresponda, la utilización de estos servicios puede implicar
      el almacenamiento o procesamiento de datos personales fuera del
      territorio argentino.
    </p>

    <p>
      Procuramos utilizar proveedores que implementen medidas adecuadas
      para proteger la información y limitar el tratamiento de los datos
      a las finalidades para las cuales fueron recopilados.
    </p>
  </section>

  <section>
    <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">10. Cookies y tecnologías similares</h2>

    <p>
      Nuestro sitio puede utilizar cookies y tecnologías similares para
      garantizar su funcionamiento, recordar determinadas preferencias,
      analizar la navegación y mejorar nuestros servicios.
    </p>

    <p>
      Para obtener información detallada sobre las cookies utilizadas,
      sus finalidades y las opciones disponibles para gestionarlas,
      consulta nuestra
      <Link href="/legal/cookies-policy">Política de Cookies</Link>.
    </p>
  </section>

  <section>
    <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">11. Conservación de los datos</h2>

    <p>
      Conservaremos los datos personales durante el tiempo necesario para
      cumplir con las finalidades para las cuales fueron recopilados y,
      cuando corresponda, durante los períodos necesarios para cumplir
      obligaciones legales o resolver posibles responsabilidades.
    </p>

    <p>
      Cuando los datos ya no sean necesarios para las finalidades
      correspondientes, serán eliminados, anonimizados o conservados
      únicamente cuando exista una obligación legal que lo requiera.
    </p>
  </section>

  <section>
    <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">12. Seguridad de la información</h2>

    <p>
      Adoptamos medidas técnicas y organizativas razonables destinadas a
      proteger los datos personales contra pérdida, acceso no autorizado,
      alteración, divulgación o utilización indebida.
    </p>

    <p>
      Sin embargo, ningún sistema de almacenamiento o transmisión de
      información a través de Internet puede garantizar una seguridad
      absoluta.
    </p>
  </section>

  <section>
    <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">13. Confidencialidad</h2>

    <p>
      Las personas que intervengan en el tratamiento de datos personales
      deberán mantener la confidencialidad de la información a la que
      tengan acceso, de acuerdo con la normativa aplicable.
    </p>
  </section>

  <section>
    <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">14. Tus derechos</h2>

    <p>
      Como titular de tus datos personales, puedes ejercer los derechos
      reconocidos por la legislación aplicable, incluyendo el derecho a:
    </p>

    <ul className="mt-4 space-y-2">
      <li>
        Solicitar información sobre la existencia de datos personales
        relacionados contigo.
      </li>

      <li>
        Solicitar acceso a tus datos personales.
      </li>

      <li>
        Solicitar la rectificación de datos inexactos o incompletos.
      </li>

      <li>
        Solicitar la actualización de tus datos.
      </li>

      <li>
        Solicitar la supresión de tus datos cuando corresponda.
      </li>

      <li>
        Solicitar el cese de determinadas comunicaciones comerciales.
      </li>
    </ul>

    <p>
      La legislación argentina reconoce el derecho de acceso y los
      derechos de rectificación, actualización y supresión de los datos
      personales. :
    </p>
  </section>

  <section>
    <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">15. ¿Cómo puedes ejercer tus derechos?</h2>

    <p>
      Para realizar una consulta o solicitar el acceso, rectificación,
      actualización o supresión de tus datos personales, puedes
      comunicarte con nosotros mediante:
    </p>

    <ul className="mt-4 space-y-2">
      <li>
        <strong className="font-semibold text-text-primary">Correo electrónico:</strong>
        <a href="mailto:[EMAIL]">[EMAIL]</a>
      </li>

      <li>
        <strong className="font-semibold text-text-primary">Asunto:</strong>
        Solicitud de datos personales
      </li>
    </ul>

    <p>
      Para proteger la información personal, podremos solicitar datos
      adicionales que permitan verificar razonablemente la identidad de
      quien realiza la solicitud.
    </p>

    <p>
      Responderemos las solicitudes dentro de los plazos establecidos por
      la normativa aplicable.
    </p>
  </section>

  <section>
    <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">16. Autoridad de aplicación</h2>

    <p>
      La Agencia de Acceso a la Información Pública (AAIP) es el órgano
      de control y autoridad de aplicación de la Ley N.º 25.326 de
      Protección de los Datos Personales en Argentina.
    </p>

    <p>
      Si consideras que tus derechos no han sido adecuadamente atendidos,
      puedes recurrir a la autoridad de control correspondiente.
    </p>
  </section>

  <section>
    <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">17. Enlaces a sitios de terceros</h2>

    <p>
      Nuestro sitio puede contener enlaces hacia sitios web, redes
      sociales u otros servicios pertenecientes a terceros.
    </p>

    <p>
      Esta Política de Privacidad no se aplica a esos sitios externos.
      Recomendamos consultar sus respectivas políticas de privacidad antes
      de proporcionar información personal.
    </p>
  </section>

  <section>
    <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">18. Menores de edad</h2>

    <p>
      Nuestros servicios y formularios están dirigidos principalmente a
      personas adultas.
    </p>

    <p>
      No recopilamos intencionalmente datos personales de menores de edad
      para finalidades comerciales o de marketing.
    </p>
  </section>

  <section>
    <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">19. Actualizaciones de esta Política de Privacidad</h2>

    <p>
      Podemos actualizar esta Política de Privacidad cuando sea necesario
      para reflejar cambios en nuestros servicios, en las tecnologías que
      utilizamos o en la normativa aplicable.
    </p>

    <p>
      La versión vigente será siempre la publicada en esta página.
      Recomendamos revisarla periódicamente para conocer cualquier
      modificación.
    </p>
  </section>

  <section>
    <h2 className="mt-14 font-display text-3xl leading-tight text-text-primary">20. Contacto</h2>

    <p>
      Si tienes preguntas sobre esta Política de Privacidad o sobre el
      tratamiento de tus datos personales, puedes contactarnos:
    </p>

    <ul className="mt-4 space-y-2">
      <li>
        <strong className="font-semibold text-text-primary">Jujuy Adentro</strong>
      </li>

      <li>
        <strong className="font-semibold text-text-primary">Correo electrónico:</strong>
        <a href="mailto:[EMAIL]">[EMAIL]</a>
      </li>

      <li>
        <strong className="font-semibold text-text-primary">WhatsApp:</strong>
        [NÚMERO]
      </li>

      <li>
        <strong className="font-semibold text-text-primary">Ubicación:</strong>
        San Salvador de Jujuy, Jujuy, Argentina
      </li>
    </ul>
  </section>
</article>
    </main>
  );
}
