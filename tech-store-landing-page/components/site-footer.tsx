import { Mail, MapPin, Phone, ShoppingBag } from 'lucide-react'
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
} from '@/components/icons'
import { whatsappLink } from '@/lib/products'

const nav = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Productos', href: '#productos' },
  { label: 'Contacto', href: '#contacto' },
]

const info = [
  { label: 'Envíos', href: '#faq' },
  { label: 'Cambios y devoluciones', href: '#faq' },
  { label: 'Términos y condiciones', href: '#faq' },
]

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <ShoppingBag className="size-5" />
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight">
              TECH<span className="text-primary">STORE</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/60">
            Los mejores gadgets y accesorios tecnológicos al mejor precio.
            Calidad, confianza y atención personalizada.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="flex size-9 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-primary hover:text-primary-foreground">
              <InstagramIcon className="size-4" />
            </a>
            <a href="#" aria-label="Facebook" className="flex size-9 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-primary hover:text-primary-foreground">
              <FacebookIcon className="size-4" />
            </a>
            <a href="#" aria-label="TikTok" className="flex size-9 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-primary hover:text-primary-foreground">
              <TikTokIcon className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-background/90">
            Navegación
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {nav.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-sm text-background/60 transition-colors hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-background/90">
            Información
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {info.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-sm text-background/60 transition-colors hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-background/90">
            Contacto
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <a
                href={whatsappLink('Hola! Quería hacer una consulta.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-background/60 transition-colors hover:text-primary"
              >
                <WhatsAppIcon className="size-4 text-primary" />
                +54 9 381 123 4567
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-background/60">
              <Phone className="size-4 text-primary" />
              Lun a Sáb, 9 a 20 hs
            </li>
            <li className="flex items-center gap-2.5 text-sm text-background/60">
              <Mail className="size-4 text-primary" />
              hola@techstore.com
            </li>
            <li className="flex items-center gap-2.5 text-sm text-background/60">
              <MapPin className="size-4 text-primary" />
              Argentina
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-background/50 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} TechStore. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
