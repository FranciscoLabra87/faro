# Faro · estudio web

Sitio comercial de **Faro**, estudio web en Chile: diseño web, identidad visual y
aplicaciones integradas (tiendas, reservas, paneles, bases de datos en Cloudflare,
correos con Resend e IA). Sin hosting mensual.

- **Stack:** Next.js 14 (App Router) · React 18 · TypeScript · CSS propio
- **Salida:** sitio 100 % estático (`output: 'export'` → carpeta `out/`)
- **Deploy:** Cloudflare Workers con assets estáticos (`wrangler.jsonc`)

## Empezar

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # genera out/
npm run preview    # sirve out/ localmente
```

Requiere Node 18.17 o superior (recomendado Node 20+).

## Estructura

```
app/
  layout.tsx        Metadata SEO/OG, JSON-LD, fuentes
  page.tsx          Orden de las secciones
  globals.css       Estilos y tokens de marca (:root)
components/         Una sección = un componente
  Hero.tsx          Titular + navegador con capturas reales rotando
  Servicios.tsx     6 servicios, cada uno enlazado a proyectos reales
  Casos.tsx         Portafolio: destacados + grilla filtrable (sin JS)
  Planes.tsx        4 planes + extras
  Contacto.tsx      Formulario → WhatsApp (cliente)
  ...
lib/
  config.ts         WhatsApp, correo y URL del sitio
  proyectos.ts      Datos del portafolio
public/
  casos/            Capturas del portafolio (<slug>.webp, 1280×960)
  og.png            Imagen para compartir (1200×630)
```

## Editar contenido

| Qué | Dónde |
|---|---|
| WhatsApp, correo, URL | `lib/config.ts` |
| Proyectos del portafolio | `lib/proyectos.ts` + captura en `public/casos/<slug>.webp` |
| Servicios | array `SERVICIOS` en `components/Servicios.tsx` |
| Planes y precios | arrays `PLANES` y `EXTRAS` en `components/Planes.tsx` (y opciones en `Contacto.tsx`, ofertas en `app/layout.tsx`) |
| Preguntas frecuentes | array `PREGUNTAS` en `components/Faq.tsx` |

## Publicar en Cloudflare

**Opción A — conectar el repo (recomendado):** Cloudflare → Workers & Pages → Create →
Import a repository → elige `FaroEstudioWeb`.

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

Queda en `https://faro-estudio-web.<tu-cuenta>.workers.dev`. Si cambia la URL o conectas un
dominio propio, actualiza `SITE_URL` en `lib/config.ts`, `public/robots.txt` y `public/sitemap.xml`.

**Opción B — desde tu computador:**

```bash
npx wrangler login
npm run deploy
```
