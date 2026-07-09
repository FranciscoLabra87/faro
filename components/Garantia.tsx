import { IconCheck } from '@/components/icons';

const GARANTIAS = [
  {
    titulo: 'Ves el diseño antes de pagar',
    texto: 'Te mostramos la primera propuesta y recién ahí decides si avanzamos.'
  },
  {
    titulo: 'Dos rondas de ajustes incluidas',
    texto: 'Afinamos textos, colores y secciones sin costos sorpresa.'
  },
  {
    titulo: 'Dominio, código y accesos tuyos',
    texto: 'Todo queda a tu nombre. Si algún día te vas, te llevas todo.'
  }
];

export default function Garantia() {
  return (
    <section className="sec muted" id="garantia">
      <div className="wrap">
        <div className="guarantee reveal">
          <div>
            <p className="eyebrow">garantía</p>
            <h2 className="gtitle">
              Sin riesgo <em>para ti.</em>
            </h2>
            <p className="lead" style={{ marginTop: 14 }}>
              Empezamos con una propuesta de diseño antes de cualquier cobro. Si no te convence, no
              avanzas y no pagas nada.
            </p>
          </div>
          <ul className="glist">
            {GARANTIAS.map((garantia) => (
              <li key={garantia.titulo}>
                <span className="gi">
                  <IconCheck />
                </span>
                <div>
                  <b>{garantia.titulo}</b>
                  <p>{garantia.texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
