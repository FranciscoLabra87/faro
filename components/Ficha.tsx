import type { ReactNode } from 'react';

const FICHA: Array<{ k: string; v: ReactNode }> = [
  { k: 'Dominio', v: '.cl a tu nombre · NIC Chile' },
  {
    k: 'Hosting',
    v: (
      <>
        <span className="ok">$0/mes</span> · Cloudflare Pages
      </>
    )
  },
  { k: 'Código', v: 'versionado en GitHub · tuyo' },
  { k: 'Seguridad', v: 'SSL/TLS · auto-renovado' },
  { k: 'Correo', v: '@tudominio.cl configurado' },
  { k: 'SEO', v: 'meta · sitemap · indexación' },
  { k: 'Entrega Presencia', v: '48 h con contenido listo · accesos documentados' },
  { k: 'Responsive', v: 'móvil · tablet · escritorio' }
];

export default function Ficha() {
  return (
    <section className="sec" id="ficha">
      <div className="wrap split">
        <div className="stick reveal">
          <p className="eyebrow">ficha técnica</p>
          <h2 className="h2">
            Tu entrega, <em>sin letra chica.</em>
          </h2>
          <p className="lead">
            Lo mismo que verías en un contrato de agencia, pero claro y en una tabla. Esto es
            exactamente lo que queda funcionando y a tu nombre cuando entregamos.
          </p>
        </div>
        <div className="specs reveal">
          <div className="specs-h">
            <span className="t">entrega_faro.spec</span>
            <span className="st">
              <span className="d"></span>en vivo
            </span>
          </div>
          {FICHA.map((fila) => (
            <div key={fila.k} className="specrow">
              <span className="k">{fila.k}</span>
              <span className="v">{fila.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
