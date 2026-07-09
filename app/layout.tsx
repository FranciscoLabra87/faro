import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Instrument_Serif, Instrument_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif'
});

const sans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-sans'
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'Faro · Tu web encendida en 48 horas, sin hosting mensual',
  description:
    'Faro diseña, monta y publica tu web en 48 horas: dominio .cl a tu nombre, correo corporativo, SEO inicial y SSL sobre Cloudflare + GitHub. Sin hosting mensual. Planes desde $60.000.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    siteName: 'Faro',
    title: 'Faro · Tu web encendida en 48 horas',
    description:
      'Diseñamos, montamos y publicamos tu web en 48 horas. Dominio a tu nombre, correo corporativo, SSL y $0 de hosting mensual. Planes desde $60.000.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faro · Tu web encendida en 48 horas',
    description: 'Webs profesionales en 48 h, sin hosting mensual. Planes desde $60.000.'
  }
};

export const viewport: Viewport = {
  themeColor: '#04120f'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
