import { IconChevron } from '@/components/icons';

const PREGUNTAS = [
  {
    pregunta: '¿De verdad no pago hosting mensual?',
    respuesta:
      'De verdad. Tu web se publica en infraestructura moderna (Cloudflare Pages) sin costo de mensualidad para sitios como el tuyo. Solo pagas el dominio NIC.cl (~$10.000 al año) directamente a NIC Chile.'
  },
  {
    pregunta: '¿El dominio queda a mi nombre?',
    respuesta:
      'Sí, siempre. Tú lo pagas y tú figuras como titular. Nosotros solo lo conectamos. Si algún día te vas, el dominio se va contigo.'
  },
  {
    pregunta: '¿Qué necesito tener listo para las 48 horas?',
    respuesta:
      'Para el plan Presencia necesitas una descripción de tu negocio, tus servicios o productos con precios si aplica, fotos o logo si tienes, y el dominio comprado. Con eso partimos; los textos los pulimos nosotros. Los demás planes tienen plazos propios.'
  },
  {
    pregunta: '¿Puedo editar la web yo mismo después?',
    respuesta:
      'Sí. Te entregamos una guía simple para cambios de texto e imágenes. Para cambios mayores puedes contratarnos por hora o por etapa, sin contratos amarrados.'
  },
  {
    pregunta: '¿Qué pasa si necesito tienda o reservas?',
    respuesta:
      'Ese es el plan Expansión: definimos alcance por etapas (catálogo, pagos, reservas) partiendo de una base sólida, para que crezcas sin rehacer la web.'
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
