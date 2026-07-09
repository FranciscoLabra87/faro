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
            Una web lenta no vende. Cada sitio Faro se entrega optimizado para superar 90 en Google
            Lighthouse: carga instantánea sobre CDN global, mejor posición en Google y menos gente
            que se va antes de ver tu oferta.
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
          // objetivo de entrega medido en Google Lighthouse. El resultado final varía según
          contenido e imágenes.
        </p>
      </div>
    </section>
  );
}
