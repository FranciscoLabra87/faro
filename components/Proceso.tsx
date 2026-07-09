const PASOS = [
  {
    st: '01 · brief',
    titulo: 'Brief de 30 minutos',
    texto: 'Revisamos tu negocio, tu oferta, el contenido disponible y el dominio.'
  },
  {
    st: '02 · diseño',
    titulo: 'Día 1 — Diseño',
    texto: 'Ordenamos textos, proponemos mejoras y armamos la web responsive.'
  },
  {
    st: '03 · deploy',
    titulo: 'Día 2 — Conexión',
    texto: 'Correo corporativo, SEO, SSL, dominio y formularios configurados.'
  },
  {
    st: '04 · entrega',
    titulo: 'Entrega con llaves',
    texto: 'Probamos en celular, te pasamos accesos y una guía simple para editar.'
  }
];

const DELAY = ['', ' d1', ' d2', ' d3'];

export default function Proceso() {
  return (
    <section className="sec" id="proceso">
      <div className="wrap">
        <div className="head reveal">
          <p className="eyebrow">proceso</p>
          <h2 className="h2">
            De brief a web publicada, <em>en 4 pasos.</em>
          </h2>
        </div>
        <div className="beamline reveal"></div>
        <div className="tl">
          {PASOS.map((paso, i) => (
            <article key={paso.st} className={`reveal${DELAY[i]}`}>
              <div className="st">{paso.st}</div>
              <h3>{paso.titulo}</h3>
              <p>{paso.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
