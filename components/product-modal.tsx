'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check, Package, Plus, X } from 'lucide-react'
import { WhatsAppIcon } from '@/components/icons'
import { useCart } from '@/lib/cart'
import {
  categoryDescriptions,
  categoryLabels,
  formatPrice,
  productWhatsappLink,
  type Product,
} from '@/lib/products'

export function ProductModal({
  product,
  onClose,
  onAdd,
  justAdded,
}: {
  product: Product | null
  onClose: () => void
  onAdd: (product: Product) => void
  justAdded: boolean
}) {
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!product) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [product, onClose])

  return (
    <AnimatePresence>
      {product && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={product.name}
        >
          <motion.button
            type="button"
            aria-label="Cerrar"
            onClick={onClose}
            className="absolute inset-0 h-full w-full cursor-default bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          <motion.div
            className="relative flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-primary/40 bg-surface shadow-glow"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-3 top-3 z-10 inline-flex size-9 items-center justify-center rounded-full bg-surface/90 text-foreground/70 backdrop-blur transition-colors hover:bg-surface-2 hover:text-primary"
            >
              <X className="size-5" />
            </button>

            <div className="relative aspect-square shrink-0 overflow-hidden bg-neutral-light">
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
                  sizes="(max-width: 640px) 100vw, 512px"
                  className="object-contain p-6"
                  priority
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-foreground/25">
                  <Package className="size-20" strokeWidth={1.25} />
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col overflow-y-auto p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                {categoryLabels[product.category]}
              </span>
              <h3 className="mt-1 font-display text-xl font-extrabold leading-snug text-balance">
                {product.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {categoryDescriptions[product.category]}
              </p>
              <p className="mt-4 font-display text-2xl font-extrabold text-primary">
                {formatPrice(product.price)}
              </p>

              <div className="mt-5 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onAdd(product)}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
                >
                  {justAdded ? (
                    <>
                      <Check className="size-4" />
                      Agregado
                    </>
                  ) : (
                    <>
                      <Plus className="size-4" />
                      Agregar al carrito
                    </>
                  )}
                </button>
                <a
                  href={productWhatsappLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Consultar por ${product.name} por WhatsApp`}
                  title="Consultar solo este producto"
                  className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
                >
                  <WhatsAppIcon className="size-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
