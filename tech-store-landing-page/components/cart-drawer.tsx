'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Minus, Package, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { WhatsAppIcon } from '@/components/icons'
import { useCart } from '@/lib/cart'
import { formatPrice } from '@/lib/products'

export function CartDrawer() {
  const {
    items,
    count,
    total,
    hasUnpriced,
    isOpen,
    closeCart,
    setQty,
    remove,
    clear,
    whatsappHref,
  } = useCart()
  const reduceMotion = useReducedMotion()

  // El vaciado se difiere: si limpiáramos en el mismo tick, el href del enlace
  // pasaría a vacío antes de que el navegador termine de abrir WhatsApp.
  function handleConsult() {
    window.setTimeout(() => {
      clear()
      closeCart()
    }, 400)
  }

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart()
    }
    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, closeCart])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Carrito">
          <motion.button
            type="button"
            aria-label="Cerrar carrito"
            onClick={closeCart}
            className="absolute inset-0 h-full w-full cursor-default bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          <motion.aside
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-primary/40 bg-surface shadow-glow"
            initial={reduceMotion ? { opacity: 0 } : { x: '100%' }}
            animate={reduceMotion ? { opacity: 1 } : { x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { x: '100%' }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className="flex items-center justify-between border-b border-border px-5 py-4">
              <h2 className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight">
                <ShoppingBag className="size-5 text-primary" />
                Tu carrito
                {count > 0 && (
                  <span className="text-sm font-semibold text-foreground/50">
                    ({count})
                  </span>
                )}
              </h2>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Cerrar carrito"
                className="inline-flex size-9 items-center justify-center rounded-lg text-foreground/70 transition-colors hover:bg-surface-2 hover:text-primary"
              >
                <X className="size-5" />
              </button>
            </header>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-8 text-center">
                <span className="flex size-16 items-center justify-center rounded-2xl bg-surface-2 text-primary">
                  <ShoppingBag className="size-7" />
                </span>
                <p className="font-semibold">Todavía no agregaste productos</p>
                <p className="text-sm text-muted-foreground">
                  Agregá los que te interesen y consultanos todo junto por WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={closeCart}
                  className="mt-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  Ver productos
                </button>
              </div>
            ) : (
              <>
                <ul className="flex-1 divide-y divide-border overflow-y-auto px-5">
                  {items.map(({ product, qty }) => (
                    <li key={product.id} className="flex gap-3 py-4">
                      <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-neutral-light">
                        {product.image ? (
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="64px"
                            className="object-contain p-1.5"
                          />
                        ) : (
                          <span className="flex h-full items-center justify-center text-foreground/25">
                            <Package className="size-6" strokeWidth={1.25} />
                          </span>
                        )}
                      </div>

                      <div className="flex min-w-0 flex-1 flex-col">
                        <p className="text-sm font-semibold leading-snug">
                          {product.name}
                        </p>
                        <p className="mt-0.5 text-sm font-bold text-primary">
                          {product.price === null
                            ? 'Consultar precio'
                            : formatPrice(product.price * qty)}
                        </p>

                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex items-center rounded-full border border-border">
                            <button
                              type="button"
                              onClick={() => setQty(product.id, qty - 1)}
                              aria-label={`Quitar una unidad de ${product.name}`}
                              className="inline-flex size-8 items-center justify-center rounded-l-full text-foreground/70 transition-colors hover:bg-surface-2 hover:text-primary"
                            >
                              <Minus className="size-3.5" />
                            </button>
                            <span
                              aria-live="polite"
                              className="min-w-8 text-center text-sm font-semibold tabular-nums"
                            >
                              {qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => setQty(product.id, qty + 1)}
                              aria-label={`Agregar una unidad de ${product.name}`}
                              className="inline-flex size-8 items-center justify-center rounded-r-full text-foreground/70 transition-colors hover:bg-surface-2 hover:text-primary"
                            >
                              <Plus className="size-3.5" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => remove(product.id)}
                            aria-label={`Eliminar ${product.name} del carrito`}
                            className="inline-flex size-8 items-center justify-center rounded-full text-foreground/50 transition-colors hover:bg-surface-2 hover:text-primary"
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <footer className="border-t border-border px-5 py-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-muted-foreground">Total</span>
                    <span className="font-display text-2xl font-extrabold text-primary">
                      {total === 0 && hasUnpriced ? 'A confirmar' : formatPrice(total)}
                    </span>
                  </div>
                  {hasUnpriced && total > 0 && (
                    <p className="mt-1 text-right text-xs text-muted-foreground">
                      + productos a confirmar
                    </p>
                  )}

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleConsult}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-dark"
                  >
                    <WhatsAppIcon className="size-5" />
                    Consultar por WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={clear}
                    className="mt-2 w-full rounded-full px-5 py-2 text-xs font-semibold text-foreground/50 transition-colors hover:text-primary"
                  >
                    Vaciar carrito
                  </button>
                </footer>
              </>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  )
}
