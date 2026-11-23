# Faro · estudio web — contexto del proyecto

Sitio comercial de **Faro · estudio web**: diseño web, identidad visual y aplicaciones
integradas (tiendas, reservas, paneles, bases de datos en Cloudflare D1/R2, correos con
Resend, IA). Sin hosting mensual. Clientes: emprendedores, profesionales y comercios de Chile.

## Stack

- Next.js 14 (App Router) + React 18 + TypeScript
- Exportación estática: `output: 'export'` → `npm run build` genera `out/`
- Deploy: Cloudflare Workers con assets estáticos (`wrangler.jsonc`, worker `faro-estudio-web`): build `npm run build`, deploy `npx wrangler deploy`
- Sin librerías de UI. CSS global en `app/globals.css` con variables de marca
- Fuentes autoalojadas con `next/font`: Instrument Serif (títulos), Instrument Sans (texto), JetBrains Mono (detalles técnicos)

## Comandos

```bash
npm install
npm run dev        # desarrollo, localhost:3000
npm run build      # exporta a out/
```

## Estructura

- `app/layout.tsx` — metadata SEO/OG, fuentes, html raíz
- `app/page.tsx` — compone las secciones en orden
- `components/` — un componente por sección; contenido en arrays constantes al inicio de cada archivo
- `components/icons.tsx` — iconos SVG compartidos (heredan estilo de la clase `.svgico`)
- `lib/config.ts` — WhatsApp y correo de contacto
- `lib/proyectos.ts` — portafolio (`PROYECTOS`): agregar proyectos ahí + captura en `public/casos/<slug>.webp` (1280×960)

## Convenciones

- Componentes de servidor por defecto; `'use client'` solo en Header (scroll/menú),
  Contacto (formulario) y ScrollReveal (IntersectionObserver para la clase `.reveal`)
- Los textos y datos viven en arrays (`PLANES`, `EXTRAS`, `SERVICIOS`, `PROYECTOS`, `PREGUNTAS`…) — editar ahí, no en el JSX
- Planes: Presencia $90.000 · Profesional $250.000 · Tienda/Reservas desde $450.000 · Sistema a medida desde $800.000; extras: identidad visual, asistente IA, soporte mensual opcional. Si cambian, actualizar también `Contacto.tsx` (select) y `app/layout.tsx` (JSON-LD)
- Tokens de marca en `:root` de `globals.css`: teal `#0d8a7d`, menta `#5eead4`,
  oscuro `#04120f`, radio base 16px
- Copy en español de Chile, tono directo, minúsculas en eyebrows/nav (estilo dev: `cotizar_gratis()`)

## Pendientes conocidos

1. Los **testimonios son de ejemplo**: `Testimonios.tsx` no se renderiza hasta tener reales
2. Los números de Lighthouse en `Rendimiento.tsx` son objetivo — actualizar con la medición real
3. Portafolio: verificar las URLs de `lib/proyectos.ts` (varias `*.workers.dev` se infirieron del nombre en wrangler); `url: null` = se muestra como privado
4. Tras el primer deploy, confirmar `SITE_URL` (`lib/config.ts`, `robots.txt`, `sitemap.xml`)
