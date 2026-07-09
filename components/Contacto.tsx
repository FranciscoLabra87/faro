'use client';

import { useState, type FormEvent } from 'react';
import { CONTACTO } from '@/lib/config';
import { IconChat, IconMail, IconSend } from '@/components/icons';

const NOTA_INICIAL = '// te contactamos por WhatsApp o correo. Sin compromiso.';

export default function Contacto() {
  const [nota, setNota] = useState(NOTA_INICIAL);

  const enviar = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const form = evento.currentTarget;
    if (!form.reportValidity()) return;

    const datos = new FormData(form);
    const mensaje = [
      'Hola, quiero cotizar mi web con Faro.',
      '',
      `Nombre: ${datos.get('nombre') ?? ''}`,
      `Negocio: ${datos.get('negocio') ?? ''}`,
      `Plan: ${datos.get('plan') ?? ''}`,
      '',
      `Necesito: ${datos.get('mensaje') ?? ''}`
    ].join('\n');

    if (CONTACTO.whatsapp) {
      const url = `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, '_blank', 'noopener');
      setNota('// abrimos WhatsApp con tu mensaje listo para enviar.');
    } else {
      const asunto = encodeURIComponent('Cotización web Faro');
      window.location.href = `mailto:${CONTACTO.email}?subject=${asunto}&body=${encodeURIComponent(mensaje)}`;
      setNota('// preparamos un correo con tu mensaje.');
    }
  };

  const waHref = CONTACTO.whatsapp ? `https://wa.me/${CONTACTO.whatsapp}` : '#contacto';

  return (
    <section className="sec contact" id="contacto">
      <div className="lightbeam"></div>
      <div className="wrap split" style={{ alignItems: 'center' }}>
        <div className="reveal">
          <p className="eyebrow light">contacto</p>
          <h2 className="h2">
            Enciende tu web <em>esta semana.</em>
          </h2>
          <p className="lead">
            Cuéntanos qué haces, qué quieres vender o mostrar, y si ya tienes dominio. Te
            respondemos el mismo día con propuesta y fecha de entrega.
          </p>
          <div className="cmeth">
            <a
              className="clink"
              href={waHref}
              target={CONTACTO.whatsapp ? '_blank' : undefined}
              rel={CONTACTO.whatsapp ? 'noopener' : undefined}
            >
              <IconChat />
              WhatsApp directo
            </a>
            <a className="clink" href={`mailto:${CONTACTO.email}`}>
              <IconMail />
              {CONTACTO.email}
            </a>
          </div>
        </div>
        <form className="cform reveal d1" noValidate onSubmit={enviar}>
          <div className="frow">
            <label htmlFor="f-nombre">Nombre</label>
            <input id="f-nombre" name="nombre" type="text" autoComplete="name" required />
          </div>
          <div className="frow">
            <label htmlFor="f-negocio">Tu negocio o proyecto</label>
            <input id="f-negocio" name="negocio" type="text" autoComplete="organization" required />
          </div>
          <div className="frow">
            <label htmlFor="f-plan">Plan que te interesa</label>
            <select id="f-plan" name="plan" defaultValue="" required>
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option>Presencia — $60.000</option>
              <option>Impulso — $120.000</option>
              <option>Expansión — desde $200.000</option>
              <option>Aún no lo sé</option>
            </select>
          </div>
          <div className="frow">
            <label htmlFor="f-msg">¿Qué necesitas?</label>
            <textarea id="f-msg" name="mensaje" rows={4} required></textarea>
          </div>
          <button className="btn btn-primary" type="submit">
            <IconSend />
            Pedir mi cotización gratis
          </button>
          <p className="fnote">{nota}</p>
        </form>
      </div>
    </section>
  );
}
