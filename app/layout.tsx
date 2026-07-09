import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import {
  Instrument_Serif,
  Instrument_Sans,
  JetBrains_Mono,
} from "next/font/google";
import { SITE_URL } from "@/lib/config";
import "./globals.css";

const cloudflareAnalyticsToken =
  process.env.NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN;

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
  title: "Faro · Tu web encendida en 48 horas, sin hosting mensual",
  description:
    "Faro diseña, monta y publica tu web en 48 horas: dominio .cl a tu nombre, correo corporativo, SEO inicial y SSL sobre Cloudflare + GitHub. Sin hosting mensual. Planes desde $60.000.",
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
