'use client';

import { useEffect, useState } from 'react';
import { IconBurger } from '@/components/icons';

const ENLACES = [
  { href: '#incluye', label: 'incluye' },
  { href: '#ficha', label: 'ficha' },
  { href: '#comparativa', label: 'por-qué' },
  { href: '#planes', label: 'planes' },
  { href: '#casos', label: 'casos' }
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
        </a>
        <button
          className="burger"
          type="button"
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuAbierto}
          aria-controls="navegacion-principal"
          onClick={() => setMenuAbierto((abierto) => !abierto)}
        >
          <IconBurger />
        </button>
        <nav className="nav" id="navegacion-principal">
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
