import type { ReactNode } from 'react';
import { IconCheck, IconCross } from '@/components/icons';

const FILAS: Array<{ feature: string; us: string; them: ReactNode }> = [
  { feature: 'Costo mensual', us: '$0', them: '$10k–$40k CLP/mes' },
  { feature: 'Entrega plan Presencia', us: '48 h con contenido listo', them: '2 a 8 semanas' },
  { feature: 'Dominio', us: 'a tu nombre, siempre', them: 'a veces del proveedor' },
  { feature: 'Correo + SSL', us: 'incluidos', them: 'cargo adicional' },
  {
    feature: 'Si te quieres ir',
    us: 'te llevas el código',
    them: (
      <>
        <IconCross className="svgico cross" />
        empiezas de cero
      </>
    )
  }
];

export default function Comparativa() {
  return (
    <section className="sec muted" id="comparativa">
      <div className="wrap">
        <div className="head reveal">
          <p className="eyebrow">por qué Faro</p>
          <h2 className="h2">
            La cuenta es simple: <em>$0 al mes.</em>
          </h2>
          <p className="lead">
            La mayoría de las webs se cobran barato y se rentabilizan con hosting mensual para
            siempre. Faro usa infraestructura moderna que no cuesta mensualidad — y te entrega las
            llaves.
          </p>
        </div>
        <div className="cmp reveal">
          <div className="cmp-row cmp-head">
            <div className="cmp-cell feature" aria-hidden="true"></div>
            <div className="cmp-cell us">Faro</div>
            <div className="cmp-cell">Agencia con hosting</div>
          </div>
          {FILAS.map((fila) => (
            <div key={fila.feature} className="cmp-row">
              <div className="cmp-cell feature">{fila.feature}</div>
              <div className="cmp-cell us">
                <IconCheck className="svgico tick" />
                {fila.us}
              </div>
              <div className="cmp-cell them">{fila.them}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
