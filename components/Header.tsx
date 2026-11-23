'use client';

import { useEffect, useState } from 'react';
import { IconBurger } from '@/components/icons';

const ENLACES = [
  { href: '#servicios', label: 'servicios' },
  { href: '#casos', label: 'portafolio' },
  { href: '#comparativa', label: 'por-qué' },
  { href: '#planes', label: 'planes' },
  { href: '#faq', label: 'preguntas' }
];

export default function Header() {
  const [solido, setSolido] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const alScroll = () => setSolido(window.scrollY > 16);
    alScroll();
    window.addEventListener('scroll', alScroll, { passive: true });
    return () => window.removeEventListener('scroll', alScroll);
  }, []);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className={`hdr${solido ? ' solid' : ''}${menuAbierto ? ' navopen' : ''}`}>
      <div className="wrap hdrin">
        <a className="brand" href="#inicio">
          <span className="mark">
            <span className="ring"></span>
            <span className="beacon"></span>
          </span>
          Faro
          <small className="brand-sub">estudio web</small>
        </a>
        <button
          className="burger"
          type="button"
          aria-label="Abrir menú"
          onClick={() => setMenuAbierto((abierto) => !abierto)}
        >
          <IconBurger />
        </button>
        <nav className="nav">
          {ENLACES.map((enlace) => (
            <a key={enlace.href} href={enlace.href} onClick={cerrarMenu}>
              {enlace.label}
            </a>
          ))}
          <a className="navcta" href="#contacto" onClick={cerrarMenu}>
            Cotizar gratis
          </a>
        </nav>
      </div>
    </header>
  );
}
