import {
  Cable,
  Camera,
  Cpu,
  Headphones,
  House,
  Lightbulb,
  Smartphone,
  TabletSmartphone,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import type { CategoryId } from '@/lib/products'

const categories: { id: CategoryId; label: string; icon: typeof Cable }[] = [
  { id: 'cables', label: 'Cables y Cargadores', icon: Cable },
  { id: 'audio', label: 'Audio', icon: Headphones },
  { id: 'seguridad', label: 'Seguridad', icon: Camera },
  { id: 'iluminacion', label: 'Iluminación', icon: Lightbulb },
  { id: 'accesorios', label: 'Accesorios para Celular', icon: Smartphone },
  { id: 'gadgets', label: 'Gadgets', icon: Cpu },
  { id: 'hogar', label: 'Hogar Inteligente', icon: House },
  { id: 'soportes', label: 'Trípodes y Soportes', icon: TabletSmartphone },
]

export function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <Reveal className="mb-10 text-center">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          Explorá nuestras <span className="text-primary">categorías</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Todo lo que necesitás en tecnología y accesorios, organizado para que
          encuentres tu producto ideal.
        </p>
      </Reveal>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map(({ id, label, icon: Icon }, i) => (
          <Reveal key={id} delay={i * 0.05}>
            <a
              href="#productos"
              className="group hover:shadow-glow flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary"
            >
              <span className="flex size-16 items-center justify-center rounded-2xl bg-surface-2 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-7" />
              </span>
              <span className="text-sm font-semibold leading-tight">{label}</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
