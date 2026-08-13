import { Reveal } from '@/components/reveal'
import { ProductCard } from '@/components/product-card'
import { featuredProducts } from '@/lib/products'

export function FeaturedProducts() {
  return (
    <section id="destacados" className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <Reveal className="mb-10 text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Productos <span className="text-primary">destacados</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Los más elegidos por nuestros clientes.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.map((product, i) => (
            <Reveal key={product.id} delay={(i % 4) * 0.05}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
