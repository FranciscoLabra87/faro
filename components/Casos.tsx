import { existsSync } from 'node:fs';
import path from 'node:path';
import { IconExternal, IconLock } from '@/components/icons';
import { CAPACIDAD_LABEL, CATEGORIAS, PROYECTOS, type Proyecto } from '@/lib/proyectos';

/* Las capturas viven en public/casos/<slug>.webp. Si falta alguna, la tarjeta
   muestra un placeholder con el dominio en vez de una imagen rota. */
function captura(slug: string) {
  const archivo = path.join(process.cwd(), 'public', 'casos', `${slug}.webp`);
  return existsSync(archivo) ? `/casos/${slug}.webp` : null;
}

function Shot({ p, eager = false }: { p: Proyecto; eager?: boolean }) {
  const src = captura(p.slug);
  const contenido = (
    <>
      <span className="ph">{p.dominio}</span>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="shot-img"
          src={src}
          alt={`Captura de ${p.nombre}`}
          loading={eager ? 'eager' : 'lazy'}
          width={1280}
          height={960}
        />
      ) : null}
      {p.url ? <span className="shot-cta">abrir ↗</span> : null}
    </>
  );

  return p.url ? (
    <a
      className="case-shot"
      href={p.url}
      target="_blank"
      rel="noopener"
      aria-label={`Abrir ${p.nombre} en una pestaña nueva`}
    >
      {contenido}
    </a>
  ) : (
    <div className="case-shot">{contenido}</div>
  );
}

function Caps({ p }: { p: Proyecto }) {
  if (!p.capacidades?.length) return null;
  return (
    <ul className="caps" aria-label="Qué incluye">
      {p.capacidades.map((c) => (
        <li key={c}>{CAPACIDAD_LABEL[c]}</li>
      ))}
    </ul>
  );
}

function Chrome({ p }: { p: Proyecto }) {
  return (
    <div className="case-chrome">
      <span className="cd">
        <i></i>
        <i></i>
        <i></i>
      </span>
      <span className="cu">
        <IconLock />
        {p.dominio}
      </span>
      {p.url ? (
        <span className="live">
          <span className="ld"></span>en vivo
        </span>
      ) : (
        <span className="live off">privado</span>
      )}
    </div>
  );
}

export default function Casos() {
  const destacados = PROYECTOS.filter((p) => p.destacado);
  const resto = PROYECTOS.filter((p) => !p.destacado);
  const cuenta = (id: string) =>
    id === 'todos' ? resto.length : resto.filter((p) => p.categoria === id).length;

  return (
    <section className="sec" id="casos">
      <div className="wrap">
        <div className="pf-head reveal">
          <div>
            <p className="eyebrow">portafolio</p>
            <h2 className="h2">
              {PROYECTOS.length} proyectos reales, <em>hechos acá.</em>
            </h2>
            <p className="lead">
              Tiendas con carro y pedidos, sistemas con base de datos, paneles, correos automáticos
              y asistentes con IA. Todos diseñados, programados y publicados por nosotros — la
              mayoría puedes abrirlos ahora mismo.
            </p>
          </div>
          <dl className="pf-stats">
            <div>
              <dt>{PROYECTOS.filter((p) => p.url).length}</dt>
              <dd>sitios en vivo</dd>
            </div>
            <div>
              <dt>{PROYECTOS.filter((p) => p.categoria === 'tiendas').length}</dt>
              <dd>tiendas y comercios</dd>
            </div>
            <div>
              <dt>{PROYECTOS.filter((p) => p.capacidades?.includes('datos')).length}</dt>
              <dd>con base de datos</dd>
            </div>
          </dl>
        </div>

        <div className="featured">
          {destacados.map((p, i) => (
            <article key={p.slug} className={`case fcase reveal${i ? ` d${i}` : ''}`}>
              <Chrome p={p} />
              <Shot p={p} eager={i === 0} />
              <div className="case-body">
                <span className="tag">{p.tipo}</span>
                <h3>{p.nombre}</h3>
                <p>{p.texto}</p>
                <Caps p={p} />
                <div className="case-foot">
                  <ul className="stackl">
                    {p.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  {p.url ? (
                    <a className="visit" href={p.url} target="_blank" rel="noopener">
                      ver sitio
                      <IconExternal />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Filtro sin JavaScript: radios + :has() en CSS */}
        <div className="pf">
          <div className="pf-filters reveal" role="radiogroup" aria-label="Filtrar proyectos">
            {CATEGORIAS.map((c) => (
              <label key={c.id} className="chip">
                <input
                  type="radio"
                  name="pf"
                  value={c.id}
                  id={`pf-${c.id}`}
                  defaultChecked={c.id === 'todos'}
                />
                <span>
                  {c.label} <small>{cuenta(c.id)}</small>
                </span>
              </label>
            ))}
          </div>

          <div className="pgrid">
            {resto.map((p) => (
              <article key={p.slug} className="case pcard" data-cat={p.categoria}>
                <Shot p={p} />
                <div className="case-body">
                  <div className="pmeta">
                    <span className="tag">{p.tipo}</span>
                    {p.url ? (
                      <span className="live">
                        <span className="ld"></span>en vivo
                      </span>
                    ) : null}
                  </div>
                  <h3>{p.nombre}</h3>
                  <p>{p.texto}</p>
                  <Caps p={p} />
                  {p.url ? (
                    <a className="visit" href={p.url} target="_blank" rel="noopener">
                      ver sitio
                      <IconExternal />
                    </a>
                  ) : (
                    <span className="visit muted">proyecto privado · demo a pedido</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="pf-cta reveal">
          <p>¿Tu negocio es el próximo?</p>
          <a className="btn btn-primary" href="#contacto">
            Cotiza tu web gratis
          </a>
        </div>
      </div>
    </section>
  );
}
