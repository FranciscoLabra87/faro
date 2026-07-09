import { IconArrow, IconCheck, IconLock } from '@/components/icons';

const STATS = [
  { n: '48 hrs', l: 'de brief a sitio en vivo' },
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
            <span className="dot"></span>deploy time · 48:00:00 · sin hosting mensual
          </span>
          <h1 className="hero-h">
            Tu web, <em>encendida</em> en 48 horas.
          </h1>
          <p className="hero-copy">
            Faro diseña, monta y despliega el sitio de tu negocio en 2 días: dominio .cl a tu
            nombre, correo corporativo, SEO inicial y SSL sobre Cloudflare + GitHub. Sin hosting
            mensual, sin letra chica — todo queda tuyo y funcionando.
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
            Respondemos en 24 h · sin compromiso · agenda limitada
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

        {/* Mockup: navegador con sitio esquemático + terminal de deploy */}
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
                tunegocio.cl
              </span>
            </div>
            <div className="win-body">
              <div className="ms">
                <div className="ms-nav">
                  <span className="ms-logo">
                    <span className="d"></span>Tu Marca
                  </span>
                  <span className="ms-links">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div className="ms-hero">
                  <div className="ms-eyebrow"></div>
                  <div className="ms-t1"></div>
                  <div className="ms-t2"></div>
                  <div className="ms-p"></div>
                  <div className="ms-p s"></div>
                  <div className="ms-btn"></div>
                </div>
                <div className="ms-cards">
                  <div className="ms-card"></div>
                  <div className="ms-card"></div>
                  <div className="ms-card"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="term">
            <div className="term-bar">
              <span className="g"></span>faro — deploy
            </div>
            <div className="term-body">
              <div className="tline">
                <span className="c">$</span> faro deploy tunegocio.cl
              </div>
              <div className="tline">
                <span className="ar">→</span> conectando dominio .cl
              </div>
              <div className="tline">
                <span className="ok">✓</span> SSL emitido · TLS activo
              </div>
              <div className="tline">
                <span className="ok">✓</span> correo @tunegocio.cl
              </div>
              <div className="tline">
                <span className="ar">→</span> push a Cloudflare + GitHub
              </div>
              <div className="tline">
                <span className="ok">✓</span> sitio en vivo<span className="caret"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
