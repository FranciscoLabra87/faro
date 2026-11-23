'use client';

import { useState, type FormEvent } from 'react';
import { CONTACTO, WHATSAPP_MENSAJE } from '@/lib/config';
import { IconChat, IconMail, IconSend } from '@/components/icons';

const NOTA_INICIAL = '// te contactamos por WhatsApp o correo. Sin compromiso.';

export default function Contacto() {
  const [nota, setNota] = useState(NOTA_INICIAL);

  const enviar = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const form = evento.currentTarget;
    if (!form.reportValidity()) return;

    const datos = new FormData(form);
    const whatsapp = CONTACTO.whatsapp.replace(/\D/g, '');
    const mensaje = [
      WHATSAPP_MENSAJE,
      '',
      `Nombre: ${datos.get('nombre') ?? ''}`,
      `Negocio: ${datos.get('negocio') ?? ''}`,
      `Plan: ${datos.get('plan') ?? ''}`,
      '',
      `Necesito: ${datos.get('mensaje') ?? ''}`
    ].join('\n');

    if (whatsapp.length >= 8) {
      const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, '_blank', 'noopener');
      setNota('// abrimos WhatsApp con tu mensaje listo para enviar.');
    } else {
      const asunto = encodeURIComponent('Cotización web Faro');
      window.location.href = `mailto:${CONTACTO.email}?subject=${asunto}&body=${encodeURIComponent(mensaje)}`;
      setNota('// preparamos un correo con tu mensaje.');
    }
  };

  const whatsapp = CONTACTO.whatsapp.replace(/\D/g, '');
  const tieneWhatsapp = whatsapp.length >= 8;
  const waHref = tieneWhatsapp ? `https://wa.me/${whatsapp}` : '#contacto';

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
              target={tieneWhatsapp ? '_blank' : undefined}
              rel={tieneWhatsapp ? 'noopener' : undefined}
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
            <label htmlFor="f-negocio">Tu negocio o proyecto (opcional)</label>
            <input id="f-negocio" name="negocio" type="text" autoComplete="organization" />
          </div>
          <div className="frow">
            <label htmlFor="f-plan">Plan que te interesa (opcional)</label>
            <select id="f-plan" name="plan" defaultValue="">
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option>Presencia — $60.000</option>
              <option>Impulso — $120.000</option>
              <option>App a medida — desde $200.000</option>
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
