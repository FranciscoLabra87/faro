import { IconExternal, IconLock } from '@/components/icons';

const CASOS = [
  {
    dominio: 'smcaballero.cl',
    url: 'https://smcaballero.cl',
    tag: 'ecommerce',
    titulo: 'SM Caballero',
    texto:
      'Tienda de andadores y movilidad para adulto mayor: ficha técnica, confianza y compra directa por WhatsApp.',
    alt: 'Captura de SM Caballero'
  },
  {
    dominio: 'chbeta.pages.dev',
    url: 'https://chbeta.pages.dev',
    tag: 'comunidad',
    titulo: 'Barrio Casco Histórico',
    texto:
      'Sitio de una agrupación vecinal patrimonial: historia, hitos y comunidad. Publicado en Cloudflare Pages.',
    alt: 'Captura de Barrio Casco Histórico'
  },
  {
    dominio: 'aprendiendojs.workers.dev',
    url: 'https://aprendiendojs.franciscolabra87.workers.dev',
    tag: 'web app',
    titulo: 'JavaScript Lab',
    texto:
      'App educativa para aprender JavaScript escribiendo código real en el navegador, con ejercicios interactivos.',
    alt: 'Captura de JavaScript Lab'
  }
];

const DELAY = ['', ' d1', ' d2'];

/* Miniatura generada por el servicio mShots de WordPress */
const captura = (url: string) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1280&h=960`;

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
            Sitios que diseñamos, montamos y publicamos. Haz clic para visitarlos — y sí, cargan al
            instante.
          </p>
        </div>
        <div className="cases">
          {CASOS.map((caso, i) => (
            <article key={caso.dominio} className={`case reveal${DELAY[i]}`}>
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
                  src={captura(caso.url)}
                  alt={caso.alt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
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
