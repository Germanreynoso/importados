'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/lib/faqs'
import { cn } from '@/lib/utils'

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
                aria-controls={`faq-respuesta-${i}`}
              >
                <span className="font-semibold">{item.q}</span>
                <ChevronDown
                  className={cn(
                    'size-5 shrink-0 text-muted-foreground transition-transform duration-300',
                    isOpen && 'rotate-180 text-primary',
                  )}
                />
              </button>
              {/* La respuesta queda siempre en el HTML, aunque el ítem esté
                  cerrado: es contenido que buscadores y asistentes de IA leen. */}
              <motion.div
                id={`faq-respuesta-${i}`}
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </motion.div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
