import { IconExternal, IconLock } from '@/components/icons';

const CASOS = [
  {
    dominio: 'cotaclara.cl',
    url: 'https://www.cotaclara.cl',
    tag: 'inmobiliaria',
    titulo: 'Cota Clara',
    texto:
      'Web inmobiliaria con buscador de propiedades, servicios de tasación y asesoría patrimonial, y contacto directo.',
    imagen: '/casos/cota-clara.webp',
    alt: 'Captura de la página de inicio de Cota Clara'
  },
  {
    dominio: 'smcaballero.cl',
    url: 'https://smcaballero.cl',
    tag: 'ecommerce',
    titulo: 'SM Caballero',
    texto:
      'Tienda de andadores y movilidad para adulto mayor: ficha técnica, confianza y compra directa por WhatsApp.',
    imagen: '/casos/smcaballero.webp',
    alt: 'Captura de SM Caballero'
  },
  {
    dominio: 'chbeta.pages.dev',
    url: 'https://chbeta.pages.dev',
    tag: 'comunidad',
    titulo: 'Barrio Casco Histórico',
    texto:
      'Sitio de una agrupación vecinal patrimonial: historia, hitos y comunidad. Publicado en Cloudflare Pages.',
    imagen: '/casos/barrio-casco-historico.webp',
    alt: 'Captura de Barrio Casco Histórico'
  },
  {
    dominio: 'aprendiendojs.workers.dev',
    url: 'https://aprendiendojs.franciscolabra87.workers.dev',
    tag: 'web app',
    titulo: 'JavaScript Lab',
    texto:
      'App educativa para aprender JavaScript escribiendo código real en el navegador, con ejercicios interactivos.',
    imagen: '/casos/javascript-lab.webp',
    alt: 'Captura de JavaScript Lab'
  }
];

const DELAY = ['', ' d1', ' d2'];

export default function Casos() {
  return (
    <section className="sec" id="casos">
      <div className="wrap">
        <div className="head reveal">
          <p className="eyebrow">casos</p>
          <h2 className="h2">
            Proyectos reales, <em>en vivo.</em>
          </h2>
          <p className="lead">
            Proyectos publicados para negocios y comunidades reales. Entra a cada sitio y conoce
            cómo resolvimos necesidades distintas.
          </p>
        </div>
        <div className="cases">
          {CASOS.map((caso, i) => (
            <article key={caso.dominio} className={`case reveal${DELAY[i % DELAY.length]}`}>
              <div className="case-chrome">
                <span className="cd">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span className="cu">
                  <IconLock />
                  {caso.dominio}
                </span>
                <span className="live">
                  <span className="ld"></span>en vivo
                </span>
              </div>
              <a
                className="case-shot"
                href={caso.url}
                target="_blank"
                rel="noopener"
                aria-label={`Abrir ${caso.dominio} en una pestaña nueva`}
              >
                <span className="ph">{caso.dominio}</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="shot-img"
                  src={caso.imagen}
                  alt={caso.alt}
                  loading="lazy"
                />
                <span className="shot-cta">abrir ↗</span>
              </a>
              <div className="case-body">
                <span className="tag">{caso.tag}</span>
                <h3>{caso.titulo}</h3>
                <p>{caso.texto}</p>
                <a className="visit" href={caso.url} target="_blank" rel="noopener">
                  ver sitio en vivo
                  <IconExternal />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
