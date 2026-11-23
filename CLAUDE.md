# Faro — contexto del proyecto

Landing comercial de **Faro**: servicio de diseño y publicación de webs en 48 horas,
sin hosting mensual, orientado a emprendedores, profesionales y comercios locales de Chile.

## Stack

- Next.js 14 (App Router) + React 18 + TypeScript
- Exportación estática: `output: 'export'` → `npm run build` genera `out/`
- Deploy: Cloudflare Pages (build command `npm run build`, output `out`)
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
- Los textos y datos viven en arrays (`PLANES`, `CASOS`, `PREGUNTAS`…) — editar ahí, no en el JSX
- Tokens de marca en `:root` de `globals.css`: teal `#0d8a7d`, menta `#5eead4`,
  oscuro `#04120f`, radio base 16px
- Copy en español de Chile, tono directo, minúsculas en eyebrows/nav (estilo dev: `cotizar_gratis()`)

## Pendientes conocidos

1. **Configurar `lib/config.ts`** con el WhatsApp real (formato `569XXXXXXXX`) y correo definitivo
2. Correr el primer `npm run build` y corregir cualquier error de tipos si aparece
3. Los **testimonios son de ejemplo** (así se declara en la sección) — reemplazar por reales
4. Los números de Lighthouse en `Rendimiento.tsx` son objetivo de entrega — actualizar con la medición real del sitio publicado
5. Portafolio: verificar las URLs marcadas en `lib/proyectos.ts` (varias `*.workers.dev` se infirieron del nombre en wrangler); `url: null` = se muestra como privado
6. Opcional: `sitemap.xml` y `robots.txt`
