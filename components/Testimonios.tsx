import type { ReactNode } from 'react';

const TESTIMONIOS: Array<{ iniciales: string; nombre: string; rol: string; cita: ReactNode }> = [
  {
    iniciales: 'MC',
    nombre: 'María Contreras',
    rol: 'abogada independiente',
    cita: (
      <>
        “En dos días tenía web, correo propio y dominio a mi nombre. <em>No pago hosting</em> y me
        llegan consultas.”
      </>
    )
  },
  {
    iniciales: 'JR',
    nombre: 'Javier Rojas',
    rol: 'cafetería de especialidad',
    cita: (
      <>
        “Me entregaron <em>todos los accesos</em> y una guía simple. Por fin no dependo de nadie
        para mi propia web.”
      </>
    )
  },
  {
    iniciales: 'PT',
    nombre: 'Paula Tapia',
    rol: 'terapias y bienestar',
    cita: (
      <>
        “El botón de WhatsApp llegó configurado. <em>La misma semana</em> que publiqué empecé a
        recibir pedidos.”
      </>
    )
  }
];

const DELAY = ['', ' d1', ' d2'];

export default function Testimonios() {
  return (
    <section className="sec dark" id="testimonios">
      <div className="wrap">
        <div className="head reveal">
          <p className="eyebrow light">testimonios</p>
          <h2 className="h2">
            Lo que dicen al <em>encender</em> su web.
          </h2>
          <p className="lead">
            Testimonios de ejemplo — los reemplazamos por los reales de tus primeros clientes.
          </p>
        </div>
        <div className="tgrid">
          {TESTIMONIOS.map((testimonio, i) => (
            <figure key={testimonio.iniciales} className={`tcard reveal${DELAY[i]}`}>
              <blockquote>{testimonio.cita}</blockquote>
              <figcaption className="who">
                <span className="av">{testimonio.iniciales}</span>
                <div>
                  <b>{testimonio.nombre}</b>
                  <span>{testimonio.rol}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
