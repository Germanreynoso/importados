import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
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

// En Netlify, `URL` es la URL del sitio en tiempo de build. Necesario para que
// la og:image se resuelva absoluta (previsualización al compartir por WhatsApp).
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Importados Tafí | Tecnología que te conecta',
  description:
    'Accesorios, gadgets y productos tecnológicos importados al mejor precio. Cámaras, aros de luz, auriculares, cargadores y más. Consultá y comprá por WhatsApp con envíos a todo el país.',
  applicationName: 'Importados Tafí',
  keywords: [
    'importados',
    'Tafí',
    'tecnología',
    'accesorios',
    'gadgets',
    'cámaras WiFi',
    'aro de luz',
    'auriculares',
    'cargadores',
    'WhatsApp',
    'Argentina',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Importados Tafí | Tecnología que te conecta',
    description:
      'Accesorios y gadgets tecnológicos importados al mejor precio. Consultá por WhatsApp.',
    siteName: 'Importados Tafí',
    type: 'website',
    locale: 'es_AR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Importados Tafí',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Importados Tafí | Tecnología que te conecta',
    description:
      'Accesorios y gadgets tecnológicos importados al mejor precio. Consultá por WhatsApp.',
    images: ['/og-image.png'],
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
