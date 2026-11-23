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
      name: "Faro",
      url: SITE_URL,
      image: `${SITE_URL}/og.png`,
      email: CONTACTO.email,
      priceRange: "CLP 60000 - 200000+",
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
          price: "60000",
          priceCurrency: "CLP",
          url: `${SITE_URL}/#planes`,
          description: "Landing de hasta 5 secciones publicada en 48 horas.",
        },
        {
          "@type": "Offer",
          name: "Plan Impulso",
          price: "120000",
          priceCurrency: "CLP",
          url: `${SITE_URL}/#planes`,
          description:
            "Sitio para explicar servicios, mostrar casos y convertir visitas en clientes.",
        },
        {
          "@type": "Offer",
          name: "Plan App a medida",
          price: "200000",
          priceCurrency: "CLP",
          url: `${SITE_URL}/#planes`,
          description:
            "Proyecto a medida desde $200.000 para catalogos, reservas, pagos o flujos de venta.",
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
  title: "Faro · Diseño web, apps y sistemas sobre Cloudflare, sin hosting mensual",
  description:
    "Diseño web, identidad visual y aplicaciones integradas: tiendas, reservas, paneles, bases de datos en Cloudflare, correos con Resend e IA. Landing en 48 horas, sin hosting mensual. Desde $60.000.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: SITE_URL,
    siteName: "Faro",
    title: "Faro · Tu web encendida en 48 horas",
    description:
      "Diseñamos, montamos y publicamos tu web en 48 horas. Dominio a tu nombre, correo corporativo, SSL y $0 de hosting mensual. Planes desde $60.000.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Faro: tu web encendida en 48 horas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faro · Tu web encendida en 48 horas",
    description:
      "Webs profesionales en 48 h, sin hosting mensual. Planes desde $60.000.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Faro: tu web encendida en 48 horas",
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
