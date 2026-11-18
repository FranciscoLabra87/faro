'use client';

import { useEffect, useMemo, useState } from 'react';
import { CONTACTO, WHATSAPP_MENSAJE } from '@/lib/config';

export default function BotonWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alScroll = () => setVisible(window.scrollY > 400);
    alScroll();
    window.addEventListener('scroll', alScroll, { passive: true });
    return () => window.removeEventListener('scroll', alScroll);
  }, []);

  const href = useMemo(() => {
    const numero = CONTACTO.whatsapp.replace(/\D/g, '');
    if (numero.length < 8) return null;
    return `https://wa.me/${numero}?text=${encodeURIComponent(WHATSAPP_MENSAJE)}`;
  }, []);

  if (!href) return null;

  return (
    <a
      className={`wafloat${visible ? ' on' : ''}`}
      href={href}
      target="_blank"
      rel="noopener"
      aria-label="Cotizar por WhatsApp"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <svg className="waico" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 3.4A12.4 12.4 0 0 0 5.4 22.2L4 28l6-1.5A12.4 12.4 0 1 0 16 3.4Z" />
        <path d="M12.2 9.7c-.3-.8-.6-.8-.9-.8h-.8c-.3 0-.8.1-1.2.6-.4.4-1.5 1.5-1.5 3.6s1.5 4.1 1.8 4.4c.2.3 3 4.8 7.4 6.5 3.6 1.4 4.4 1.1 5.2 1 .8-.1 2.5-1 2.9-2 .4-1 .4-1.8.3-2-.1-.2-.4-.3-.8-.5l-2.9-1.4c-.4-.2-.7-.2-1 .2l-1.3 1.6c-.3.4-.6.4-1 .2-.4-.2-1.9-.7-3.6-2.2-1.3-1.2-2.2-2.7-2.5-3.1-.3-.5 0-.7.2-.9l.7-.8c.2-.3.3-.5.5-.8.2-.3.1-.6 0-.9l-1.3-2.9Z" />
      </svg>
    </a>
  );
}
