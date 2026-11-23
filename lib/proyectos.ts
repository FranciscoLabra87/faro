/* Portafolio de Faro.
   Para agregar un proyecto: suma un objeto al array y deja su captura en
   public/casos/<slug>.webp (1280×960, recortada desde arriba).
   - url: null → la tarjeta se muestra sin enlace (proyecto privado o sin publicar).
   - destacado: true → aparece grande arriba (ideal: 3).
   Fuera por ahora: Terrible Poleras (tiene aviso +18) y Signalia (sin captura). */

export type Categoria = 'tiendas' | 'negocios' | 'comunidad' | 'datos';

export type Proyecto = {
  slug: string;
  nombre: string;
  dominio: string;
  url: string | null;
  categoria: Categoria;
  tipo: string;
  texto: string;
  stack: string[];
  destacado?: boolean;
};

export const CATEGORIAS: { id: Categoria | 'todos'; label: string }[] = [
  { id: 'todos', label: 'todos' },
  { id: 'tiendas', label: 'tiendas' },
  { id: 'negocios', label: 'negocios y servicios' },
  { id: 'comunidad', label: 'comunidad' },
  { id: 'datos', label: 'datos y apps' }
];

export const PROYECTOS: Proyecto[] = [
  {
    slug: 'smcaballero',
    nombre: 'SM Caballero',
    dominio: 'smcaballero.cl',
    url: 'https://smcaballero.cl',
    categoria: 'tiendas',
    tipo: 'ecommerce',
    texto:
      'Andadores para adulto mayor: ficha técnica, páginas por búsqueda, blog SEO y compra directa por WhatsApp.',
    stack: ['React', 'Vite', 'SEO'],
    destacado: true
  },
  {
    slug: 'cotaclara',
    nombre: 'Cota Clara',
    dominio: 'cotaclara.cl',
    url: 'https://cotaclara.cl',
    categoria: 'negocios',
    tipo: 'inmobiliaria',
    texto:
      'Corretaje, tasaciones y gestión de patrimonio, con inventario de propiedades propio y formulario de captación.',
    stack: ['Next.js', 'Cloudflare D1', 'R2'],
    destacado: true
  },
  {
    slug: 'huevon',
    nombre: 'El Huevón de Puente Alto',
    dominio: 'elhuevondepuentealto.cl',
    url: 'https://elhuevondepuentealto.cl',
    categoria: 'tiendas',
    tipo: 'tienda online',
    texto:
      'Catálogo real, carrito con precios recalculados en el servidor y comprobante del pedido por correo.',
    stack: ['Next.js', 'Node', 'Cloudflare'],
    destacado: true
  },
  {
    slug: 'confiteria',
    nombre: 'La Confitería de la Plaza',
    dominio: 'confiterialaplaza.cl',
    url: 'https://confiterialaplaza.franciscolabra87.workers.dev',
    categoria: 'tiendas',
    tipo: 'tienda + reservas',
    texto:
      'Pastelería del Casco Histórico con carro, reserva de pedidos y panel para que el local administre su carta.',
    stack: ['Cloudflare Workers', 'API', 'Panel']
  },
  {
    slug: 'dentplas',
    nombre: 'DentPlas',
    dominio: 'dentplas.cl',
    url: 'https://dentplas.cl',
    categoria: 'tiendas',
    tipo: 'ortopedia',
    texto:
      'Tienda de ortopedia sobre una plataforma multi-comercio: catálogo, carro, reservas y panel de administración.',
    stack: ['Astro', 'Cloudflare', 'D1']
  },
  {
    slug: 'ropamed',
    nombre: 'Ropa Med',
    dominio: 'ropamed.cl',
    url: null,
    categoria: 'tiendas',
    tipo: 'uniformes clínicos',
    texto:
      'Catálogo con buscador y filtros, guía de tallas, tiendas en Puente Alto y San Bernardo y cotización por WhatsApp.',
    stack: ['Next.js', 'React 19']
  },
  {
    slug: 'aeb',
    nombre: 'OCTAVIA · Agua Purificada',
    dominio: 'octavia',
    url: null,
    categoria: 'tiendas',
    tipo: 'delivery',
    texto:
      'Bidones de 20 y 12 litros y dispensadores con pedido directo por WhatsApp para hogares, oficinas y comercios.',
    stack: ['Next.js', 'Export estático']
  },
  {
    slug: 'kda',
    nombre: '+KDA Sandwich al Paso',
    dominio: 'maskda.cl',
    url: 'https://www.maskda.cl',
    categoria: 'negocios',
    tipo: 'restaurante',
    texto:
      'Landing y carta digital con QR para las mesas de una fuente de soda del Casco Histórico de Puente Alto.',
    stack: ['Next.js', 'Tailwind', 'QR']
  },
  {
    slug: 'grecia',
    nombre: 'Grecia Rojas',
    dominio: 'masoterapia holística',
    url: 'https://grecia-rojas-masoterapia-holistica.vercel.app',
    categoria: 'negocios',
    tipo: 'bienestar',
    texto:
      'Landing editorial para una masoterapeuta en Providencia: servicios, terapias y reserva directa.',
    stack: ['HTML', 'CSS', 'Vercel']
  },
  {
    slug: 'angel',
    nombre: 'Ángel de la Guarda',
    dominio: 'protección personal',
    url: 'https://angel-de-la-guarda.franciscolabra87.workers.dev',
    categoria: 'negocios',
    tipo: 'servicios',
    texto:
      'Protección personal integral: acompañamiento preventivo, adultos mayores y socorro antibullying 24/7.',
    stack: ['HTML', 'JS', 'Cloudflare']
  },
  {
    slug: 'dosquiltros',
    nombre: 'Dos Quiltros en Sanhattan',
    dominio: 'podcast',
    url: 'https://dos-quiltros-sanhattan.franciscolabra87.workers.dev',
    categoria: 'negocios',
    tipo: 'podcast',
    texto:
      'Sitio de lanzamiento del podcast con episodios, enlaces a Spotify y Apple Podcasts y versión para compartir.',
    stack: ['HTML', 'Cloudflare Pages']
  },
  {
    slug: 'barrio-casco-historico',
    nombre: 'Barrio Casco Histórico',
    dominio: 'chbeta.pages.dev',
    url: 'https://chbeta.pages.dev',
    categoria: 'comunidad',
    tipo: 'agrupación vecinal',
    texto:
      'Plataforma de la agrupación patrimonial de Puente Alto: historia, mapa de comercios, socios y comunidad.',
    stack: ['Cloudflare Pages', 'Functions', 'D1']
  },
  {
    slug: 'hgcasco',
    nombre: 'AG Casco Histórico',
    dominio: 'landing institucional',
    url: null,
    categoria: 'comunidad',
    tipo: 'landing',
    texto:
      'Página de presentación de la agrupación: quiénes son, qué hacen, de dónde vienen y cómo contactarlos.',
    stack: ['HTML', 'CSS']
  },
  {
    slug: 'empleos',
    nombre: 'Empleos Casco Histórico',
    dominio: 'bolsa laboral',
    url: 'https://empleos-casco-historico.franciscolabra87.workers.dev',
    categoria: 'comunidad',
    tipo: 'bolsa de trabajo',
    texto:
      'Ofertas públicas de comercios del barrio y perfiles de trabajadores, con contacto solo para socios.',
    stack: ['Vite', 'Workers', 'D1']
  },
  {
    slug: 'revista',
    nombre: 'Taller Editorial',
    dominio: 'revista comunal',
    url: null,
    categoria: 'comunidad',
    tipo: 'software',
    texto:
      'Herramienta para que la asociación arme, revise e imprima su revista de 18 páginas sin diseñador.',
    stack: ['JS', 'Node', 'Impresión']
  },
  {
    slug: 'pulso',
    nombre: 'Pulso Chile',
    dominio: 'datos económicos',
    url: 'https://pulso-chile.franciscolabra87.workers.dev',
    categoria: 'datos',
    tipo: 'plataforma de datos',
    texto:
      'Une datos del Banco Central, CMF, DIPRES y SII detrás de una API, con módulos de análisis y exportación.',
    stack: ['Next.js', 'API REST', 'D1']
  },
  {
    slug: 'gyf',
    nombre: 'Economía de Puente Alto',
    dominio: 'dashboard',
    url: null,
    categoria: 'datos',
    tipo: 'dashboard',
    texto:
      'Empresas, ventas, empleo e ingresos municipales del Distrito 12, de 2005 a 2025, en gráficos comparables.',
    stack: ['React', 'Recharts', 'Vite']
  },
  {
    slug: 'seguridad',
    nombre: 'Seguridad Puente Alto',
    dominio: 'tablero',
    url: null,
    categoria: 'datos',
    tipo: 'tablero',
    texto:
      'Casos policiales mes a mes desde 2014, delito por delito, con KPIs y correlación con variables económicas.',
    stack: ['HTML', 'Charts', 'CEAD']
  },
  {
    slug: 'radioguia',
    nombre: 'RadioGuía Chile',
    dominio: 'radioguia.cl',
    url: null,
    categoria: 'datos',
    tipo: 'web + android',
    texto:
      'Consulta de bandas, modos y potencias para radioaficionados según la reglamentación chilena vigente.',
    stack: ['Next.js', 'Android']
  },
  {
    slug: 'javascript-lab',
    nombre: 'JavaScript Lab',
    dominio: 'aprendiendojs.workers.dev',
    url: 'https://aprendiendojs.franciscolabra87.workers.dev',
    categoria: 'datos',
    tipo: 'web app educativa',
    texto:
      '14 módulos y 109 etapas para aprender JavaScript escribiendo código real, con pruebas y proyectos guiados.',
    stack: ['JS', 'Workers', 'Tests']
  }
];
