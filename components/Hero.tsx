import { IconArrow, IconCheck, IconLock } from '@/components/icons';

const STATS = [
  { n: '48 h', l: 'landing Presencia con contenido listo' },
  { n: '$0/mes', l: 'hosting mensual' },
  { n: '100%', l: 'dominio y accesos tuyos' }
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="gridbg"></div>
      <div className="lightbeam"></div>
      <div className="orb a"></div>
      <div className="orb b"></div>

      <div className="wrap hero-in">
        <div>
          <span className="badge">
            <span className="dot"></span>plan Presencia · 48 h con contenido listo
          </span>
          <h1 className="hero-h">
            Tu web, <em>encendida</em> en 48 horas.
          </h1>
          <p className="hero-copy">
            Diseñamos y publicamos la web de tu negocio. Tu primera landing puede estar lista en
            48 horas; los proyectos más completos se trabajan por etapas. Dominio .cl a tu nombre,
            correo, SEO inicial y SSL. Sin mensualidad de hosting.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contacto">
              <IconArrow />
              Cotiza gratis tu web
            </a>
            <a className="btn btn-ghost" href="#planes">
              Ver planes → $60.000
            </a>
          </div>
          <p className="herourg">
            <IconCheck />
            Respondemos en 24 h · sin compromiso
          </p>
          <div className="hstat">
            {STATS.map((stat) => (
              <div key={stat.n}>
                <div className="n">{stat.n}</div>
                <div className="l">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Una web publicada, en vez de un mockup genérico. */}
        <div className="stack">
          <div className="win">
            <div className="win-bar">
              <span className="dots">
                <i></i>
                <i></i>
                <i></i>
              </span>
              <span className="win-url">
                <IconLock />
                cotaclara.cl
              </span>
            </div>
            <a
              className="hero-preview"
              href="https://www.cotaclara.cl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver el proyecto real Cota Clara en una pestaña nueva"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/casos/cota-clara.webp" alt="Portada del sitio de Cota Clara" />
              <span className="hero-preview-label">
                proyecto real · Cota Clara <span aria-hidden="true">↗</span>
              </span>
            </a>
          </div>

          <div className="stack-caption">
            <span>
              <strong>04</strong> sitios reales para explorar
            </span>
            <a href="#casos">
              Ver proyectos <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
