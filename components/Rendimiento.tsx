import type { CSSProperties } from 'react';

/* Medición real de este mismo sitio con Lighthouse 12, perfil móvil (nov 2026).
   Volver a medir tras cambios grandes: npx lighthouse <url> --form-factor=mobile */
const METRICAS = [
  { valor: 95, nombre: 'Rendimiento' },
  { valor: 100, nombre: 'Accesibilidad' },
  { valor: 100, nombre: 'Buenas prácticas' },
  { valor: 100, nombre: 'SEO' }
];

export default function Rendimiento() {
  return (
    <section className="sec dark" id="rendimiento">
      <div className="wrap">
        <div className="head reveal">
          <p className="eyebrow light">rendimiento</p>
          <h2 className="h2">
            Rápidas de verdad, <em>no solo bonitas.</em>
          </h2>
          <p className="lead">
            Una web lenta no vende. Estos son los puntajes de Google Lighthouse de esta misma página,
            medidos en celular: carga rápida sobre la red global de Cloudflare, mejor posición en
            Google y menos gente que se va antes de ver tu oferta.
          </p>
        </div>
        <div className="gauges reveal">
          {METRICAS.map((metrica) => (
            <figure key={metrica.nombre} className="gauge">
              <div
                className="dial"
                style={{ '--v': metrica.valor, '--c': 'var(--mint)' } as CSSProperties}
              >
                <span>{metrica.valor}</span>
              </div>
              <figcaption>{metrica.nombre}</figcaption>
            </figure>
          ))}
        </div>
        <p className="gaugenote reveal">
          // medido en este sitio con Google Lighthouse, perfil móvil. En escritorio: 100 en las
          cuatro. Cada proyecto se entrega con su propia medición.
        </p>
      </div>
    </section>
  );
}
