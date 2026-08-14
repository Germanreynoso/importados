'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, MapPin, Truck, Users } from 'lucide-react'
import { WhatsAppIcon } from '@/components/icons'
import { whatsappLink } from '@/lib/products'

const badges = [
  { icon: Truck, label: 'Envíos a toda la provincia' },
  { icon: BadgeCheck, label: 'Productos de calidad' },
  { icon: Users, label: 'Atención personalizada' },
]

export function Hero() {
  return (
    <section id="inicio" className="bg-hero-gradient relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-primary/25 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-surface px-3 py-1.5 text-xs font-semibold uppercase tracking-widest">
            <MapPin className="size-3.5 text-primary" />
            Tafí del Valle, Tucumán
          </span>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Tecnología que <span className="text-primary">te conecta</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tu local de tecnología y accesorios importados en Tafí del Valle.
            Cargadores, cámaras de seguridad, aros de luz, auriculares y mucho
            más, con envíos a toda la provincia de Tucumán.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={whatsappLink('Hola! Quería hacer una consulta sobre sus productos.')}
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-glow inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              <WhatsAppIcon className="size-5" />
              Consultanos por WhatsApp
            </a>
            <a
              href="#productos"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Ver Productos
              <ArrowRight className="size-4" />
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {badges.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <span className="flex size-7 items-center justify-center rounded-full bg-primary/15 text-primary">
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
          <div className="shadow-glow relative aspect-square w-full overflow-hidden rounded-3xl border border-border bg-surface">
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
