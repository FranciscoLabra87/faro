'use client';

import { useEffect } from 'react';

/* Aparición progresiva: observa los elementos .reveal y les agrega
   la clase .in cuando entran en pantalla. */
export default function ScrollReveal() {
  useEffect(() => {
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (!entrada.isIntersecting) continue;
          entrada.target.classList.add('in');
          observador.unobserve(entrada.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observador.observe(el));
    return () => observador.disconnect();
  }, []);

  return null;
}
