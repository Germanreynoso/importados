'use client'

import {
  Baby,
  Cable,
  Camera,
  ChefHat,
  Cpu,
  HeartPulse,
  Headphones,
  House,
  Lightbulb,
  Smartphone,
  TabletSmartphone,
  Wrench,
} from 'lucide-react'
import { CategoryCarousel } from '@/components/category-carousel'
import { ProductCard } from '@/components/product-card'
import { Reveal } from '@/components/reveal'
import { products, type CategoryId } from '@/lib/products'

const categoryMeta: {
  id: CategoryId
  label: string
  icon: typeof Cable
}[] = [
  { id: 'cables', label: 'Cables y Cargadores', icon: Cable },
  { id: 'audio', label: 'Audio', icon: Headphones },
  { id: 'seguridad', label: 'Seguridad', icon: Camera },
  { id: 'iluminacion', label: 'Iluminacion', icon: Lightbulb },
  { id: 'accesorios', label: 'Accesorios para Celular', icon: Smartphone },
  { id: 'soportes', label: 'Tripodes y Soportes', icon: TabletSmartphone },
  { id: 'gadgets', label: 'Gadgets', icon: Cpu },
  { id: 'herramientas', label: 'Herramientas', icon: Wrench },
  { id: 'bazar', label: 'Bazar y Cocina', icon: ChefHat },
  { id: 'hogar', label: 'Hogar', icon: House },
  { id: 'juguetes', label: 'Juguetería', icon: Baby },
  { id: 'salud', label: 'Salud y Cuidado Personal', icon: HeartPulse },
]

const grouped = categoryMeta.map((cat) => ({
  ...cat,
  items: products.filter((p) => p.category === cat.id),
}))

export function ProductCatalog() {
  return (
    <section id="productos" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <Reveal className="mb-12 text-center">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          Todos nuestros <span className="text-primary">productos</span>
        </h2>
        <p className="mt-3 text-muted-foreground">
          Explora por categoria y consulta el que te interese por WhatsApp.
        </p>
      </Reveal>

      <div className="space-y-14">
        {grouped.map(({ id, label, icon: Icon, items }, i) => {
          if (items.length === 0) return null
          return (
            <Reveal key={id} delay={i * 0.04}>
              <CategoryCarousel
                id={`cat-${id}`}
                title={label}
                icon={<Icon className="size-5" />}
              >
                {items.map((product) => (
                  <div
                    key={product.id}
                    className="w-[200px] shrink-0 snap-start sm:w-[220px] lg:w-[240px]"
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </CategoryCarousel>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
