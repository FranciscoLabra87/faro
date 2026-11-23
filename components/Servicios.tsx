import { PROYECTOS, type Capacidad } from '@/lib/proyectos';

/* Qué hace Faro, más allá de "una página". Cada servicio muestra en qué
   proyectos reales del portafolio se usó (campo `capacidades` en lib/proyectos.ts). */
const SERVICIOS: {
  idx: string;
  icono: string;
  titulo: string;
  texto: string;
  detalle: string;
  capacidad?: Capacidad;
}[] = [
  {
    idx: '01',
    icono: 'M4 5.5h16v13H4zM4 9h16M8 15h4',
    titulo: 'Diseño web que vende',
    texto:
      'Landings y sitios completos pensados para explicar tu oferta, generar confianza y llevar a WhatsApp o a la compra.',
    detalle: 'responsive · SEO · velocidad'
  },
  {
    idx: '02',
    icono: 'M12 3l2.6 5.6L20 9.4l-4 4 1 5.6-5-2.8-5 2.8 1-5.6-4-4 5.4-.8z',
    titulo: 'Identidad visual',
    texto:
      'Guía de marca con logo, paleta, tipografías y reglas de uso, aplicada al sitio para que todo se vea de una sola marca.',
    detalle: 'guía de marca · design system',
    capacidad: 'identidad'
  },
  {
    idx: '03',
    icono: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 16.5h7M16.5 13v7',
    titulo: 'Aplicaciones web integradas',
    texto:
      'Carro de compras, reservas, panel de administración, bolsa de empleo o dashboards: la app vive dentro de tu sitio.',
    detalle: 'carro · reservas · panel · login',
    capacidad: 'app'
  },
  {
    idx: '04',
    icono: 'M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3zM5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3',
    titulo: 'Bases de datos en Cloudflare',
    texto:
      'Productos, pedidos, socios y fotos guardados en Cloudflare D1 y R2: rápido, seguro y sin servidor que mantener.',
    detalle: 'D1 · R2 · Workers · API',
    capacidad: 'datos'
  },
  {
    idx: '05',
    icono: 'M4 6.5h16v11H4zM4 7l8 6 8-6',
    titulo: 'Correos automáticos con Resend',
    texto:
      'Comprobantes de pedido, avisos de formulario y confirmaciones que salen solos desde tu dominio y llegan a la bandeja.',
    detalle: 'transaccionales · DKIM · tu dominio',
    capacidad: 'correo'
  },
  {
    idx: '06',
    icono: 'M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0z',
    titulo: 'Inteligencia artificial',
    texto:
      'Asistentes que responden con la información de tu negocio, y flujos con IA para redactar, ordenar y ahorrar horas.',
    detalle: 'asistentes · automatización',
    capacidad: 'ia'
  }
];

const DELAY = ['', ' d1', ' d2', '', ' d1', ' d2'];

export default function Servicios() {
  return (
    <section className="sec" id="servicios">
      <div className="wrap">
        <div className="head reveal">
          <p className="eyebrow">qué hacemos</p>
          <h2 className="h2">
            Mucho más que una página: <em>tu negocio funcionando en la web.</em>
          </h2>
          <p className="lead">
            Diseñamos la marca, construimos el sitio y le conectamos lo que lo hace trabajar por
            ti: base de datos, panel, correos automáticos e IA. Todo sobre Cloudflare, sin hosting
            mensual.
          </p>
        </div>
        <div className="svc">
          {SERVICIOS.map((s, i) => {
            const usados = s.capacidad
              ? PROYECTOS.filter((p) => p.capacidades?.includes(s.capacidad!)).slice(0, 3)
              : PROYECTOS.filter((p) => p.destacado);
            return (
              <article key={s.idx} className={`card svcc reveal${DELAY[i]}`}>
                <div className="top">
                  <span className="iconbox">
                    <svg className="svgico" viewBox="0 0 24 24">
                      <path d={s.icono} />
                    </svg>
                  </span>
                  <span className="idx">{s.idx}</span>
                </div>
                <h3>{s.titulo}</h3>
                <p>{s.texto}</p>
                <span className="svc-det">{s.detalle}</span>
                {usados.length ? (
                  <p className="svc-en">
                    visto en{' '}
                    {usados.map((p, j) => (
                      <span key={p.slug}>
                        <a href="#casos">{p.nombre}</a>
                        {j < usados.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
