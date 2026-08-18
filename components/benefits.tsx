import { BadgeCheck, Headset, ShieldCheck, Truck } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const benefits = [
  {
    icon: BadgeCheck,
    title: 'Local en Tafí del Valle',
    description: 'Podés pasar a ver los productos y retirar tu pedido.',
  },
  {
    icon: Headset,
    title: 'Atención personalizada',
    description: 'Te asesoramos por WhatsApp en todo lo que necesites.',
  },
  {
    icon: Truck,
    title: 'Envíos en toda la provincia',
    description:
      'Llegamos a San Miguel de Tucumán, Yerba Buena, El Mollar y todo Tucumán.',
  },
  {
    icon: ShieldCheck,
    title: 'Compra segura',
    description: 'Comprá con confianza y respaldo en cada pedido.',
  },
]

export function Benefits() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <Reveal className="mb-10 text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            ¿Por qué <span className="text-primary">elegirnos?</span>
          </h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-border bg-card p-6 text-center">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
