'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Check, Package, Plus } from 'lucide-react'
import { WhatsAppIcon } from '@/components/icons'
import { ProductModal } from '@/components/product-modal'
import { useCart } from '@/lib/cart'
import {
  formatPrice,
  productWhatsappLink,
  type Product,
} from '@/lib/products'

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()
  const [justAdded, setJustAdded] = useState(false)
  const [detailOpen, setDetailOpen] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => {
    if (timeout.current) clearTimeout(timeout.current)
  }, [])

  function handleAdd() {
    add(product)
    setJustAdded(true)
    if (timeout.current) clearTimeout(timeout.current)
    timeout.current = setTimeout(() => setJustAdded(false), 1400)
  }

  return (
    <>
      <article className="group hover:shadow-glow flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/60">
        {/* Abre la vista ampliada. display:contents para no romper el layout
            de flex-col del article: el botón "desaparece" visualmente. */}
        <button
          type="button"
          onClick={() => setDetailOpen(true)}
          aria-label={`Ver detalle de ${product.name}`}
          className="contents text-left"
        >
          {/* Las fotos vienen con fondo blanco: van sobre un panel claro para
              que no se recorten contra el negro de la card. */}
          <div className="relative aspect-square overflow-hidden bg-neutral-light">
            {product.offer && (
              <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground">
                Oferta
              </span>
            )}
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-foreground/25">
                <Package className="size-14" strokeWidth={1.25} />
              </div>
            )}
          </div>
        </button>

        <div className="flex flex-1 flex-col p-4">
          <button
            type="button"
            onClick={() => setDetailOpen(true)}
            className="text-left"
          >
            <h3 className="text-sm font-semibold leading-snug text-pretty">
              {product.name}
            </h3>
            <p className="mt-1 font-display text-lg font-extrabold text-primary">
              {formatPrice(product.price)}
            </p>
          </button>

          <div className="mt-4 flex items-center gap-2">
            <button
              type="button"
              onClick={handleAdd}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              {justAdded ? (
                <>
                  <Check className="size-4" />
                  Agregado
                </>
              ) : (
                <>
                  <Plus className="size-4" />
                  Agregar
                </>
              )}
            </button>
            <a
              href={productWhatsappLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Consultar por ${product.name} por WhatsApp`}
              title="Consultar solo este producto"
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
            >
              <WhatsAppIcon className="size-4" />
            </a>
          </div>
        </div>
      </article>

      <ProductModal
        product={detailOpen ? product : null}
        onClose={() => setDetailOpen(false)}
        onAdd={handleAdd}
        justAdded={justAdded}
      />
    </>
  )
}
