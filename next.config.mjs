/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportación estática: `npm run build` genera la carpeta `out/`
  // lista para servir desde Cloudflare Pages.
  output: 'export',
  images: { unoptimized: true }
};

export default nextConfig;
