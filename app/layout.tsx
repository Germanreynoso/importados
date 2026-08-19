import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { isIndexable, site } from '@/lib/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

// El título lidera con la marca y cierra con la localidad: es lo que se busca
// en un pueblo ("importados tafí del valle") y lo que se lee en el resultado.
const TITLE = 'Importados Tafí | Tecnología y accesorios en Tafí del Valle, Tucumán'
const SHORT_DESCRIPTION =
  'Local de tecnología y accesorios importados en Tafí del Valle. Envíos a toda la provincia de Tucumán. Consultá por WhatsApp.'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: TITLE,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: {
    canonical: '/',
  },
  keywords: [
    'importados Tafí del Valle',
    'tecnología Tafí del Valle',
    'accesorios celular Tucumán',
    'cámaras de seguridad Tucumán',
    'cargadores Apple Tucumán',
    'aro de luz Tucumán',
    'auriculares Tomate',
    'parlantes Tomate',
    'linternas Lelong',
    'Tafí del Valle',
    'Tucumán',
  ],
  category: 'shopping',
  // Fuera de Google hasta que el sitio corra bajo el dominio propio
  // (ver isIndexable en lib/site.ts).
  robots: {
    index: isIndexable,
    follow: isIndexable,
    googleBot: {
      index: isIndexable,
      follow: isIndexable,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: TITLE,
    description: SHORT_DESCRIPTION,
    siteName: site.name,
    type: 'website',
    locale: 'es_AR',
    url: '/',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: SHORT_DESCRIPTION,
    images: ['/og-image.png'],
  },
  verification: {
    google: '4YLnelWE3v9_WoJmVvUvecqwUbnpKwQIXDfCREuXSdk',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${manrope.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
