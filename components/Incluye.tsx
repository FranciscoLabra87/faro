const SERVICIOS = [
  {
    idx: '01',
    icono: 'M4 5.5h16v13H4zM4 9h16M8 15h4',
    titulo: 'Diseño que vende',
    texto: 'Secciones pensadas para explicar tu oferta, generar confianza y convertir visitas en contactos.'
  },
  {
    idx: '02',
    icono: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18',
    titulo: 'Dominio .cl a tu nombre',
    texto: 'Tú pagas el NIC.cl y queda bajo tu control. Nosotros conectamos DNS, SSL y publicación.'
  },
  {
    idx: '03',
    icono: 'M4 6.5h16v11H4zM4 7l8 6 8-6',
    titulo: 'Correo corporativo',
    texto: 'contacto@tunegocio.cl en vez de un Gmail: la diferencia entre parecer hobby y parecer empresa.'
  },
  {
    idx: '04',
    icono: 'M5 17.5 10.5 12 14 15.5 19 8M19 8h-5M19 8v5',
    titulo: 'SEO inicial + velocidad',
    texto: 'Títulos, descripciones y estructura optimizada para que Google te indexe desde el día uno.'
  }
];

const DELAY = ['', ' d1', ' d2', ' d3'];

export default function Incluye() {
  return (
    <section className="sec muted" id="incluye">
      <div className="wrap split">
        <div className="stick reveal">
          <p className="eyebrow">siempre incluido</p>
          <h2 className="h2">
            La base que viene en <em>todos los proyectos.</em>
          </h2>
          <p className="lead">
            Una web no es solo diseño: es dominio, correo, seguridad y aparecer en Google. Faro
            entrega el paquete completo funcionando — no una maqueta ni una carpeta de archivos.
          </p>
        </div>
        <div className="feat">
          {SERVICIOS.map((servicio, i) => (
            <article key={servicio.idx} className={`card featc reveal${DELAY[i]}`}>
              <div className="top">
                <span className="iconbox">
                  <svg className="svgico" viewBox="0 0 24 24">
                    <path d={servicio.icono} />
                  </svg>
                </span>
                <span className="idx">{servicio.idx}</span>
              </div>
              <h3>{servicio.titulo}</h3>
              <p>{servicio.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
