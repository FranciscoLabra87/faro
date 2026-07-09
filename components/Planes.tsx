import { IconCheck } from '@/components/icons';

const PLANES = [
  {
    no: '01',
    nombre: 'Presencia',
    para: 'Para existir en internet esta misma semana y captar tus primeros contactos.',
    precio: '$60.000',
    detalle: 'CLP · pago único · publicada en 48 h',
    incluye: [
      'Landing de hasta 5 secciones',
      'Redacción base de tu oferta',
      'Botón de WhatsApp o formulario',
      'Correo corporativo + SSL + SEO',
      '$0 de hosting mensual'
    ],
    cta: 'Quiero Presencia',
    destacado: false
  },
  {
    no: '02',
    nombre: 'Impulso',
    para: 'Para explicar tus servicios, mostrar casos y convertir visitas en clientes.',
    precio: '$120.000',
    detalle: 'CLP · pago único · entrega en 4-5 días',
    incluye: [
      'Todo lo de Presencia',
      'Hasta 4 páginas o secciones extra',
      'Galería, casos, FAQ o catálogo base',
      'Estructura de conversión y analítica',
      'Revisión de textos con foco en venta'
    ],
    cta: 'Quiero Impulso',
    destacado: true
  },
  {
    no: '03',
    nombre: 'Expansión',
    para: 'Para catálogos grandes, reservas, pagos o flujos de venta a medida.',
    precio: 'Desde $200.000',
    detalle: 'CLP · proyecto por etapas · a medida',
    incluye: [
      'Todo lo de Impulso',
      'Catálogo, reservas o integraciones',
      'Flujo simple para actualizar contenido',
      'Analítica con eventos y metas',
      'Roadmap para crecer sin rehacer'
    ],
    cta: 'Evaluar mi proyecto',
    destacado: false
  }
];

const DELAY = ['', ' d1', ' d2'];

export default function Planes() {
  return (
    <section className="sec" id="planes">
      <div className="wrap">
        <div className="head reveal">
          <p className="eyebrow">planes y precios</p>
          <h2 className="h2">Elige cuánta luz necesitas.</h2>
          <p className="lead">
            Precios únicos, sin mensualidades escondidas. La entrega en 48 horas aplica al plan
            Presencia con contenido base listo; los demás se planifican por etapas cortas.
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
              <a className={`btn ${plan.destacado ? 'btn-primary' : 'btn-outline'}`} href="#contacto">
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
        <p className="plannote reveal">
          // todos incluyen dominio conectado, SSL, correo y accesos. NIC.cl (~$10.000/año) lo pagas
          tú, a tu nombre.
        </p>
      </div>
    </section>
  );
}
