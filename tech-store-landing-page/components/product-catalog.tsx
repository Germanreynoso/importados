'use client'

import { useMemo, useState } from 'react'
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
  Search,
  Smartphone,
  TabletSmartphone,
  Wrench,
  X,
} from 'lucide-react'
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
  { id: 'iluminacion', label: 'Iluminación', icon: Lightbulb },
  { id: 'accesorios', label: 'Accesorios para Celular', icon: Smartphone },
  { id: 'soportes', label: 'Trípodes y Soportes', icon: TabletSmartphone },
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

/** Sin tildes y en minúsculas: buscar "iluminacion" tiene que encontrar
 *  "Iluminación", que es como la mayoría escribe en el buscador. */
function normalizar(texto: string) {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // marcas diacríticas separadas por NFD
    .toLowerCase()
    .trim()
}

export function ProductCatalog() {
  const [busqueda, setBusqueda] = useState('')

  const { resultados, total } = useMemo(() => {
    const terminos = normalizar(busqueda).split(/\s+/).filter(Boolean)

    if (terminos.length === 0) {
      return { resultados: grouped, total: products.length }
    }

    const resultados = grouped.map((cat) => {
      // Si la categoría coincide ("juguetería"), entra completa.
      const categoriaCoincide = terminos.every((t) =>
        normalizar(cat.label).includes(t),
      )
      if (categoriaCoincide) return cat

      return {
        ...cat,
        items: cat.items.filter((p) =>
          terminos.every((t) => normalizar(p.name).includes(t)),
        ),
      }
    })

    return {
      resultados,
      total: resultados.reduce((acc, c) => acc + c.items.length, 0),
    }
  }, [busqueda])

  const buscando = busqueda.trim().length > 0

  return (
    <section id="productos" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <Reveal className="mb-8 text-center">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          Todos nuestros <span className="text-primary">productos</span>
        </h2>
        <p className="mt-3 text-muted-foreground">
          Explorá por categoría y consultá el que te interese por WhatsApp.
        </p>
      </Reveal>

      <Reveal className="mb-8">
        <div className="relative mx-auto max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
          <label htmlFor="buscador" className="sr-only">
            Buscar productos por nombre o categoría
          </label>
          <input
            id="buscador"
            type="search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar producto o categoría..."
            className="w-full rounded-full border border-border bg-card py-3 pl-12 pr-11 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          />
          {buscando && (
            <button
              type="button"
              onClick={() => setBusqueda('')}
              aria-label="Limpiar búsqueda"
              className="absolute right-3 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-surface-2 hover:text-primary"
            >
              <X className="size-4" />
            </button>
          )}
        </div>

        {buscando && (
          <p aria-live="polite" className="mt-3 text-center text-sm text-muted-foreground">
            {total === 0
              ? 'No encontramos productos con esa búsqueda.'
              : `${total} ${total === 1 ? 'producto' : 'productos'} encontrados`}
          </p>
        )}
      </Reveal>

      {/* Accesos directos: con 12 categorías y más de 100 productos, bajar
          scrolleando hasta la categoría buscada es demasiado trabajo. */}
      {!buscando && (
        <Reveal className="mb-12">
          <nav aria-label="Categorías" className="flex flex-wrap justify-center gap-2">
            {grouped.map(({ id, label, icon: Icon, items }) =>
              items.length === 0 ? null : (
                <a
                  key={id}
                  href={`#cat-${id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4 text-primary" />
                  {label}
                  <span className="text-xs font-bold text-muted-foreground">
                    {items.length}
                  </span>
                </a>
              ),
            )}
          </nav>
        </Reveal>
      )}

      {buscando && total === 0 ? (
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card px-6 py-14 text-center">
          <span className="flex size-16 items-center justify-center rounded-2xl bg-surface-2 text-primary">
            <Search className="size-7" />
          </span>
          <p className="font-semibold">Nada por acá</p>
          <p className="max-w-sm text-sm text-muted-foreground">
            Probá con otra palabra, o escribinos por WhatsApp y lo buscamos
            para vos.
          </p>
          <button
            type="button"
            onClick={() => setBusqueda('')}
            className="mt-1 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            Ver todos los productos
          </button>
        </div>
      ) : (
        <div className="space-y-14">
          {resultados.map(({ id, label, icon: Icon, items }, i) => {
            if (items.length === 0) return null
            return (
              <Reveal key={id} delay={i * 0.04}>
                {/* scroll-mt compensa el header fijo al saltar desde los accesos */}
                <div id={`cat-${id}`} className="scroll-mt-24">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-surface-2 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-display text-xl font-extrabold tracking-tight sm:text-2xl">
                      {label}
                    </h3>
                    <span className="text-sm font-semibold text-muted-foreground">
                      ({items.length})
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {items.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      )}
    </section>
  )
}
