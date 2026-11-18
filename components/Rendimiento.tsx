import type { CSSProperties } from 'react';

const METRICAS = [
  { valor: 98, nombre: 'Rendimiento' },
  { valor: 100, nombre: 'SEO' },
  { valor: 96, nombre: 'Accesibilidad' },
  { valor: 100, nombre: 'Buenas prácticas' }
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
            Una web lenta pierde visitas. Antes de entregar, revisamos carga, SEO, accesibilidad y
            buenas prácticas con Google Lighthouse. Estos puntajes son metas de trabajo; la medición
            real depende del contenido final.
          </p>
        </div>
        <div className="gauges reveal">
          {METRICAS.map((metrica) => (
            <figure key={metrica.nombre} className="gauge">
              <span className="gauge-target">meta</span>
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
          // metas de entrega, no mediciones de los proyectos mostrados. El resultado final se
          verifica con cada cliente.
        </p>
      </div>
    </section>
  );
}
