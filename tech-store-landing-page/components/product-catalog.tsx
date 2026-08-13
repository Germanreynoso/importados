'use client'

import { useMemo, useState } from 'react'
import { ProductCard } from '@/components/product-card'
import { products, type CategoryId } from '@/lib/products'
import { cn } from '@/lib/utils'

const filters: { id: CategoryId | 'all'; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'cables', label: 'Cables y Cargadores' },
  { id: 'audio', label: 'Audio' },
  { id: 'seguridad', label: 'Seguridad' },
  { id: 'iluminacion', label: 'Iluminación' },
  { id: 'accesorios', label: 'Accesorios' },
  { id: 'soportes', label: 'Trípodes y Soportes' },
  { id: 'gadgets', label: 'Gadgets' },
  { id: 'hogar', label: 'Hogar' },
]

export function ProductCatalog() {
  const [active, setActive] = useState<CategoryId | 'all'>('all')

  const visible = useMemo(
    () => (active === 'all' ? products : products.filter((p) => p.category === active)),
    [active],
  )

  return (
    <section id="productos" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <div className="mb-8 text-center">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          Todos nuestros <span className="text-primary">productos</span>
        </h2>
        <p className="mt-3 text-muted-foreground">
          Filtrá por categoría y consultá el que te interese por WhatsApp.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActive(f.id)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
              active === f.id
                ? 'border-foreground bg-foreground text-background'
                : 'border-border bg-card text-foreground hover:border-foreground/40',
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
