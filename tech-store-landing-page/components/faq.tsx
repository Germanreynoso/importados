'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: '¿Realizan envíos?',
    a: 'Sí, hacemos envíos a todo el país. Coordinamos el método de envío por WhatsApp según tu localidad para que recibas tu pedido de la forma más rápida y económica.',
  },
  {
    q: '¿Cómo se realizan los pagos?',
    a: 'Aceptamos múltiples métodos de pago confiables. Al escribirnos por WhatsApp te pasamos todas las opciones disponibles y coordinamos la que más te convenga.',
  },
  {
    q: '¿Cuánto demora la entrega?',
    a: 'Los tiempos varían según tu ubicación y el método de envío elegido. Generalmente entre 24 y 72 hs hábiles. Te confirmamos el plazo exacto al momento de la compra.',
  },
  {
    q: '¿Los productos tienen garantía?',
    a: 'Sí, todos nuestros productos cuentan con garantía. Ante cualquier inconveniente, escribinos por WhatsApp y te ayudamos a resolverlo lo antes posible.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <div className="mb-10 text-center">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          Preguntas <span className="text-primary">frecuentes</span>
        </h2>
        <p className="mt-3 text-muted-foreground">
          Todo lo que necesitás saber antes de tu compra.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((item, i) => {
          const isOpen = open === i
          return (
            <div
              key={item.q}
              className={cn(
                'overflow-hidden rounded-2xl border bg-card transition-colors',
                isOpen ? 'border-primary' : 'border-border',
              )}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-semibold">{item.q}</span>
                <ChevronDown
                  className={cn(
                    'size-5 shrink-0 text-muted-foreground transition-transform duration-300',
                    isOpen && 'rotate-180 text-primary',
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
