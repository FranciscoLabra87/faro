import { IconArrow, IconCheck, IconLock } from '@/components/icons';

/* Capturas del portafolio que rotan en el navegador del hero (public/casos). */
const SLIDES = [
  { slug: 'smcaballero', dominio: 'smcaballero.cl', nombre: 'SM Caballero' },
  { slug: 'cotaclara', dominio: 'cotaclara.cl', nombre: 'Cota Clara' },
  { slug: 'aeb', dominio: 'octavia · agua purificada', nombre: 'OCTAVIA' },
  { slug: 'huevon', dominio: 'elhuevondepuentealto.cl', nombre: 'El Huevón de Puente Alto' }
];

const STATS = [
  { n: '48 hrs', l: 'una landing en vivo' },
  { n: '$0/mes', l: 'hosting mensual' },
  { n: '20+', l: 'proyectos publicados' }
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
            <span className="dot"></span>diseño · apps web · cloudflare · ia
          </span>
          <h1 className="hero-h">
            Webs y apps que <em>hacen andar</em> tu negocio.
          </h1>
          <p className="hero-copy">
            Identidad visual, sitio web y las aplicaciones que lo hacen trabajar: tienda,
            reservas, panel de administración, base de datos en Cloudflare, correos automáticos
            con Resend e IA. Una landing queda en vivo en 48 horas; un sistema completo, por
            etapas. Sin hosting mensual y todo a tu nombre.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contacto">
              <IconArrow />
              Cotiza gratis tu web
            </a>
            <a className="btn btn-ghost" href="#casos">
              Ver 20 proyectos reales
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

        {/* Navegador que rota capturas reales del portafolio + terminal de deploy */}
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
                <span className="urls">
                  {SLIDES.map((slide, i) => (
                    <span key={slide.slug} style={{ animationDelay: `${i * 4}s` }}>
                      {slide.dominio}
                    </span>
                  ))}
                </span>
              </span>
            </div>
            <div className="win-body slides">
              {SLIDES.map((slide, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={slide.slug}
                  className="slide"
                  src={`/casos/${slide.slug}.webp`}
                  srcSet={`/casos/${slide.slug}-640.webp 640w, /casos/${slide.slug}.webp 1280w`}
                  sizes="(max-width: 980px) 90vw, 520px"
                  alt={`Sitio de ${slide.nombre} hecho por Faro`}
                  width={1280}
                  height={960}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  style={{ animationDelay: `${i * 4}s` }}
                />
              ))}
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
                <span className="ar">→</span> base de datos D1 creada
              </div>
              <div className="tline">
                <span className="ok">✓</span> panel /admin listo
              </div>
              <div className="tline">
                <span className="ok">✓</span> correos vía Resend · DKIM ok
              </div>
              <div className="tline">
                <span className="ar">→</span> SSL + dominio .cl conectados
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
