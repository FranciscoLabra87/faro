import { IconCheck } from '@/components/icons';

const PLANES = [
  {
    no: '01',
    nombre: 'Presencia',
    para: 'Para existir en internet esta semana y empezar a recibir contactos.',
    precio: '$90.000',
    detalle: 'CLP · pago único · publicada en 48 h',
    incluye: [
      'Landing de hasta 5 secciones',
      'Redacción base de tu oferta',
      'Botón de WhatsApp o formulario',
      'SEO inicial, SSL y dominio conectado',
      '$0 de hosting mensual'
    ],
    ejemplo: 'Grecia Rojas',
    cta: 'Quiero Presencia',
    destacado: false
  },
  {
    no: '02',
    nombre: 'Profesional',
    para: 'Para explicar bien lo que vendes, mostrar tu catálogo y aparecer en Google.',
    precio: '$250.000',
    detalle: 'CLP · pago único · entrega en 5-7 días',
    incluye: [
      'Todo lo de Presencia',
      'Hasta 6 páginas: catálogo, carta o servicios',
      'Blog o páginas SEO por búsqueda',
      'Paleta y tipografías de tu marca',
      'Analítica y correo corporativo'
    ],
    ejemplo: 'SM Caballero',
    cta: 'Quiero Profesional',
    destacado: true
  },
  {
    no: '03',
    nombre: 'Tienda / Reservas',
    para: 'Para recibir pedidos o reservas y administrar tus productos tú mismo.',
    precio: 'Desde $450.000',
    detalle: 'CLP · por etapas · 2-3 semanas',
    incluye: [
      'Todo lo de Profesional',
      'Carro de compras o reservas',
      'Base de datos en Cloudflare D1 / R2',
      'Panel para editar productos y precios',
      'Correos automáticos con Resend'
    ],
    ejemplo: 'El Huevón de Puente Alto',
    cta: 'Quiero mi tienda',
    destacado: false
  },
  {
    no: '04',
    nombre: 'Sistema a medida',
    para: 'Para plataformas con usuarios, socios, datos o procesos propios.',
    precio: 'Desde $800.000',
    detalle: 'CLP · proyecto por etapas',
    incluye: [
      'Login, roles y cuentas de usuario',
      'Dashboards, API e integraciones',
      'Asistente o flujos con IA',
      'Arquitectura para crecer sin rehacer',
      'Roadmap y documentación'
    ],
    ejemplo: 'Barrio Casco Histórico',
    cta: 'Evaluar mi proyecto',
    destacado: false
  }
];

const EXTRAS = [
  { nombre: 'Identidad visual · guía de marca', precio: '$150.000' },
  { nombre: 'Asistente con IA', precio: 'desde $150.000' },
  { nombre: 'Soporte y cambios', precio: '$20.000/mes · opcional' }
];

const DELAY = ['', ' d1', ' d2', ' d3'];

export default function Planes() {
  return (
    <section className="sec" id="planes">
      <div className="wrap">
        <div className="head reveal">
          <p className="eyebrow">planes y precios</p>
          <h2 className="h2">
            Elige cuánta luz <em>necesitas.</em>
          </h2>
          <p className="lead">
            Precios únicos y sin hosting mensual. Desde una landing en 48 horas hasta un sistema
            completo con base de datos, panel y correos automáticos. Cada plan tiene un proyecto
            real que puedes revisar.
          </p>
        </div>
        <div className="plans">
          {PLANES.map((plan, i) => (
            <article key={plan.no} className={`plan${plan.destacado ? ' mid' : ''} reveal${DELAY[i]}`}>
              {plan.destacado && <div className="pbadge">el más elegido</div>}
              <div className="pk">
                <span className="no">{plan.no}</span>
              </div>
              <h3>{plan.nombre}</h3>
              <p className="ptag">{plan.para}</p>
              <div className="price">
                {plan.precio}
                <small>{plan.detalle}</small>
              </div>
              <ul className="checks">
                {plan.incluye.map((item) => (
                  <li key={item}>
                    <IconCheck />
                    {item}
                  </li>
                ))}
              </ul>
              <a className="pej" href="#casos">
                ejemplo: {plan.ejemplo} ↗
              </a>
              <a className={`btn ${plan.destacado ? 'btn-primary' : 'btn-outline'}`} href="#contacto">
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
        <div className="extras reveal">
          <span className="lbl">se suman a cualquier plan</span>
          {EXTRAS.map((extra) => (
            <span key={extra.nombre} className="extra">
              {extra.nombre} <b>{extra.precio}</b>
            </span>
          ))}
        </div>
        <p className="plannote reveal">
          // todos incluyen dominio conectado, SSL y accesos a tu nombre. NIC.cl (~$10.000/año) lo
          pagas tú, directo.
        </p>
      </div>
    </section>
  );
}
