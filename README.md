# Faro — Next.js

Sitio web de **Faro** (webs en 48 horas, sin hosting mensual) construido con
**Next.js 14 (App Router) + React 18 + TypeScript**, con exportación estática
para desplegar en Cloudflare Pages.

## Stack

- Next.js 14 · App Router · `output: 'export'`
- React 18 · componentes de servidor + islas de cliente (header, formulario, reveal)
- TypeScript
- CSS global con variables de marca (sin librerías de UI)
- Tipografías autoalojadas vía `next/font` (Instrument Serif / Instrument Sans / JetBrains Mono)

## Estructura

```
faro-next/
├── app/
│   ├── layout.tsx        Metadata, fuentes y estructura raíz
│   ├── page.tsx          Composición de la página
│   └── globals.css       Estilos globales
├── components/           Una sección = un componente
│   ├── Header.tsx        (cliente: scroll + menú móvil)
│   ├── Hero.tsx
│   ├── ...
│   ├── Contacto.tsx      (cliente: formulario → WhatsApp)
│   └── icons.tsx         Iconos SVG compartidos
├── lib/
│   └── config.ts         WhatsApp y correo de contacto
└── public/
    └── favicon.svg
```

## Configuración

Edita `lib/config.ts` con tu número de WhatsApp (formato internacional,
solo dígitos) y tu correo:

```ts
export const CONTACTO = {
  whatsapp: '56912345678',
  email: 'hola@tudominio.cl'
};
```

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build y despliegue en Cloudflare Pages

```bash
npm run build      # genera la carpeta out/
```

En Cloudflare: **Workers & Pages → Create → Pages → conectar el repo**.

- Build command: `npm run build`
- Build output directory: `out`

O sin repo: `npm run build` local y *Direct Upload* de la carpeta `out/`.
Luego conecta tu dominio `.cl` en **Custom domains**.
