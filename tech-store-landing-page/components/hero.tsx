'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, Truck, Users } from 'lucide-react'
import { WhatsAppIcon } from '@/components/icons'
import { whatsappLink } from '@/lib/products'

const badges = [
  { icon: Truck, label: 'Envíos a todo el país' },
  { icon: BadgeCheck, label: 'Productos de calidad' },
  { icon: Users, label: 'Atención personalizada' },
]

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-secondary">
      <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Tecnología que <span className="text-primary">te conecta</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Encontrá accesorios, gadgets y productos tecnológicos al mejor
            precio. Calidad, variedad y atención personalizada.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={whatsappLink('Hola! Quería hacer una consulta sobre sus productos.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
            >
              <WhatsAppIcon className="size-5 text-primary" />
              Consultanos por WhatsApp
            </a>
            <a
              href="#productos"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground/30"
            >
              Ver Productos
              <ArrowRight className="size-4" />
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {badges.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <span className="flex size-7 items-center justify-center rounded-full bg-primary/20 text-foreground">
                  <Icon className="size-4" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-background shadow-xl shadow-black/5">
            <Image
              src="/products/hero-collage.png"
              alt="Colección de productos tecnológicos: cámaras WiFi, smartwatch, aro de luz, auriculares y cargadores"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
