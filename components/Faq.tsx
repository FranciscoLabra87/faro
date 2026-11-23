import { IconChevron } from '@/components/icons';

const PREGUNTAS = [
  {
    pregunta: '¿De verdad no pago hosting mensual?',
    respuesta:
      'De verdad. Tu web se publica en infraestructura moderna (Cloudflare) sin costo de mensualidad para sitios como el tuyo. El soporte mensual es opcional: si no lo quieres, no pagas nada al mes. Solo pagas el dominio NIC.cl (~$10.000 al año) directamente a NIC Chile.'
  },
  {
    pregunta: '¿El dominio queda a mi nombre?',
    respuesta:
      'Sí, siempre. Tú lo pagas y tú figuras como titular. Nosotros solo lo conectamos. Si algún día te vas, el dominio se va contigo.'
  },
  {
    pregunta: '¿Qué necesito tener listo para las 48 horas?',
    respuesta:
      'Una descripción de tu negocio, tus servicios o productos con precios si aplica, fotos o logo si tienes, y el dominio comprado. Con eso partimos; los textos los pulimos nosotros.'
  },
  {
    pregunta: '¿Puedo editar la web yo mismo después?',
    respuesta:
      'Sí. Te entregamos una guía simple para cambios de texto e imágenes. Para cambios mayores puedes contratarnos por hora o por etapa, sin contratos amarrados.'
  },
  {
    pregunta: '¿También hacen el logo y la marca?',
    respuesta:
      'Sí. Armamos tu identidad visual (logo, paleta, tipografías y una guía de uso) y la aplicamos al sitio, para que todo se vea de una sola marca. Se suma a cualquier plan.'
  },
  {
    pregunta: '¿Qué pasa si necesito tienda o reservas?',
    respuesta:
      'Ese es el plan Tienda / Reservas: carro o reservas, base de datos en Cloudflare, panel para que edites tus productos y correos automáticos con Resend. Si necesitas usuarios, socios o IA, lo vemos como Sistema a medida, por etapas.'
  }
];

export default function Faq() {
  return (
    <section className="sec muted" id="faq">
      <div className="wrap split">
        <div className="stick reveal">
          <p className="eyebrow">preguntas frecuentes</p>
          <h2 className="h2">
            Lo que conviene aclarar <em>antes de partir.</em>
          </h2>
          <p className="lead">¿Queda alguna duda? Escríbenos por WhatsApp y la resolvemos al tiro.</p>
        </div>
        <div className="faq reveal">
          {PREGUNTAS.map((item) => (
            <details key={item.pregunta}>
              <summary>
                {item.pregunta}
                <IconChevron />
              </summary>
              <p>{item.respuesta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
