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

export const metadata: Metadata = {
  title: 'TechStore | Tecnología que te conecta',
  description:
    'Accesorios, gadgets y productos tecnológicos al mejor precio. Cámaras, aros de luz, auriculares, cargadores y más. Consultá y comprá por WhatsApp con envíos a todo el país.',
  keywords: [
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
    title: 'TechStore | Tecnología que te conecta',
    description:
      'Accesorios y gadgets tecnológicos al mejor precio. Consultá por WhatsApp.',
    type: 'website',
    locale: 'es_AR',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f0f0f',
  colorScheme: 'light',
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
