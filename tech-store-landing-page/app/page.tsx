import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Categories } from '@/components/categories'
import { FeaturedProducts } from '@/components/featured-products'
import { ProductCatalog } from '@/components/product-catalog'
import { Benefits } from '@/components/benefits'
import { CtaBanner } from '@/components/cta-banner'
import { Faq } from '@/components/faq'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <ProductCatalog />
        <Benefits />
        <CtaBanner />
        <Faq />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
