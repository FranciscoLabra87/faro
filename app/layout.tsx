import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import {
  Instrument_Serif,
  Instrument_Sans,
  JetBrains_Mono,
} from "next/font/google";
import { CONTACTO, SITE_URL } from "@/lib/config";
import "./globals.css";

const cloudflareAnalyticsToken =
  process.env.NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN;
const whatsappSchema = CONTACTO.whatsapp.replace(/\D/g, "");
const contactoSchema =
  whatsappSchema.length >= 8 ? { telephone: `+${whatsappSchema}` } : {};
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Faro · estudio web",
      url: SITE_URL,
      image: `${SITE_URL}/og.png`,
      email: CONTACTO.email,
      priceRange: "CLP 90000 - 800000+",
      areaServed: {
        "@type": "Country",
        name: "Chile",
      },
      ...contactoSchema,
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      name: "Diseno web, aplicaciones web e identidad visual",
      serviceType: "Diseno web",
      provider: {
        "@id": `${SITE_URL}/#localbusiness`,
      },
      areaServed: {
        "@type": "Country",
        name: "Chile",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Plan Presencia",
          price: "90000",
          priceCurrency: "CLP",
          url: `${SITE_URL}/#planes`,
          description: "Landing de hasta 5 secciones publicada en 48 horas.",
        },
        {
          "@type": "Offer",
          name: "Plan Profesional",
          price: "250000",
          priceCurrency: "CLP",
          url: `${SITE_URL}/#planes`,
          description: "Sitio de hasta 6 paginas con catalogo, blog SEO y marca aplicada.",
        },
        {
          "@type": "Offer",
          name: "Plan Tienda / Reservas",
          price: "450000",
          priceCurrency: "CLP",
          url: `${SITE_URL}/#planes`,
          description: "Tienda o reservas con base de datos en Cloudflare, panel y correos automaticos con Resend.",
        },
        {
          "@type": "Offer",
          name: "Plan Sistema a medida",
          price: "800000",
          priceCurrency: "CLP",
          url: `${SITE_URL}/#planes`,
          description: "Plataforma con usuarios, dashboards, API e IA, por etapas.",
        },
        {
          "@type": "Offer",
          name: "Identidad visual",
          price: "150000",
          priceCurrency: "CLP",
          url: `${SITE_URL}/#planes`,
          description: "Logo, paleta, tipografias y guia de marca.",
        },
      ],
    },
  ],
};

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Faro · estudio web — diseño web, apps e identidad visual en Chile",
  description:
    "Faro es un estudio web en Chile: diseño web, identidad visual y aplicaciones integradas (tiendas, reservas, paneles, bases de datos en Cloudflare, correos con Resend e IA). Landing en 48 horas, sin hosting mensual. Desde $90.000.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: SITE_URL,
    siteName: "Faro · estudio web",
    title: "Faro · estudio web",
    description:
      "Webs, apps e identidad visual para negocios en Chile. Tiendas, reservas, paneles y correos automáticos sobre Cloudflare. Sin hosting mensual. Desde $90.000.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Faro · estudio web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faro · estudio web",
    description:
      "Webs, apps e identidad visual. Sin hosting mensual. Desde $90.000.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Faro · estudio web",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#04120f",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {cloudflareAnalyticsToken ? (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({ token: cloudflareAnalyticsToken })}
          />
        ) : null}
      </body>
    </html>
  );
}
