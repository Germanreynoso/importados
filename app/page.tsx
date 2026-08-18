import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ProductCatalog } from '@/components/product-catalog'
import { Benefits } from '@/components/benefits'
import { CtaBanner } from '@/components/cta-banner'
import { Faq } from '@/components/faq'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { CartDrawer } from '@/components/cart-drawer'
import { CartProvider } from '@/lib/cart'
import { buildStructuredData, serializeJsonLd } from '@/lib/structured-data'

export default function Page() {
  return (
    <CartProvider>
      {buildStructuredData().map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
        />
      ))}
      <div className="flex min-h-dvh flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Hero />
          <ProductCatalog />
          <Benefits />
          <CtaBanner />
          <Faq />
        </main>
        <SiteFooter />
        <WhatsAppFloat />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
