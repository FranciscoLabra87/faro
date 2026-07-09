const AUDIENCIAS = [
  {
    idx: '01',
    titulo: 'Estás partiendo',
    texto:
      'Tienes la idea y los clientes, pero no existes en Google. Te dejamos una web seria para validar y vender desde la primera semana.'
  },
  {
    idx: '02',
    titulo: 'Vives de tu reputación',
    texto:
      'Abogados, médicos, contadores, arquitectos: una web sobria con correo corporativo que respalde tu nombre cuando te busquen.'
  },
  {
    idx: '03',
    titulo: 'Vendes cara a cara',
    texto:
      'Tienda, restaurante, taller: catálogo simple, horarios, mapa y botón de WhatsApp para que el barrio entero te encuentre.'
  }
];

const DELAY = ['', ' d1', ' d2'];

export default function ParaQuien() {
  return (
    <section className="sec" id="paraquien">
      <div className="wrap">
        <div className="head reveal">
          <p className="eyebrow">para quién es Faro</p>
          <h2 className="h2">
            Hecho para negocios que necesitan <em>ser encontrados.</em>
          </h2>
        </div>
        <div className="aud">
          {AUDIENCIAS.map((aud, i) => (
            <article key={aud.idx} className={`audc reveal${DELAY[i]}`}>
              <span className="idx">{aud.idx}</span>
              <h3>{aud.titulo}</h3>
              <p>{aud.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
