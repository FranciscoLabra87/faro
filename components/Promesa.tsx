const ENTREGABLES = [
  {
    idx: '01',
    titulo: 'Web publicada y probada',
    texto: 'Dominio conectado, SSL activo y revisión en celular antes de entregar.'
  },
  {
    idx: '02',
    titulo: 'Correo profesional andando',
    texto: 'Tu casilla @tunegocio.cl configurada en tu teléfono y computador.'
  },
  {
    idx: '03',
    titulo: 'Accesos documentados',
    texto: 'Cada cuenta explicada: qué es, para qué sirve y cómo entrar.'
  },
  {
    idx: '04',
    titulo: 'Guía + recomendaciones',
    texto: 'Cómo editar textos y qué mejorar después: contenido, fotos y oferta.'
  }
];

export default function Promesa() {
  return (
    <section className="sec dark" id="promesa">
      <div className="wrap split">
        <div className="stick reveal">
          <p className="eyebrow light">nuestra promesa</p>
          <h2 className="h2">
            Te entregamos <em>el control,</em> no una dependencia.
          </h2>
          <p className="lead">
            El modelo clásico te amarra: hosting mensual, dominio ajeno, cambios cobrados. El de
            Faro es al revés — montamos todo, te enseñamos a usarlo y quedas libre.
          </p>
        </div>
        <div className="ops reveal">
          {ENTREGABLES.map((entregable) => (
            <div key={entregable.idx} className="ops-row">
              <span className="ops-i">{entregable.idx}</span>
              <div>
                <h3>{entregable.titulo}</h3>
                <p>{entregable.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
