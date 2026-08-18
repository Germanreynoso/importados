import Image from 'next/image'
import { MapPin, Phone } from 'lucide-react'
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
} from '@/components/icons'
import { whatsappLink } from '@/lib/products'
import { hasPublicAddress, site } from '@/lib/site'

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
    <footer className="border-t-2 border-primary bg-background text-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Image
            src="/logo.png"
            alt="Importados Tafí"
            width={1024}
            height={1024}
            className="size-28"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/60">
            Local de tecnología y accesorios importados en Tafí del Valle,
            Tucumán. Envíos a toda la provincia y retiro por el local.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="flex size-9 items-center justify-center rounded-full border border-border bg-surface transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground">
              <InstagramIcon className="size-4" />
            </a>
            <a href="#" aria-label="Facebook" className="flex size-9 items-center justify-center rounded-full border border-border bg-surface transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground">
              <FacebookIcon className="size-4" />
            </a>
            <a href="#" aria-label="TikTok" className="flex size-9 items-center justify-center rounded-full border border-border bg-surface transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground">
              <TikTokIcon className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground/90">
            Navegación
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {nav.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-sm text-foreground/60 transition-colors hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground/90">
            Información
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {info.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-sm text-foreground/60 transition-colors hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground/90">
            Contacto
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <a
                href={whatsappLink('Hola! Quería hacer una consulta.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-foreground/60 transition-colors hover:text-primary"
              >
                <WhatsAppIcon className="size-4 text-primary" />
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-foreground/60">
              <Phone className="size-4 text-primary" />
              Lun a Sáb, 9 a 20 hs
            </li>
            {/* Dirección postal: NAP. Debe coincidir con la ficha de Google. */}
            <li className="flex items-start gap-2.5 text-sm text-foreground/60">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                <address className="not-italic">
                  {hasPublicAddress && (
                    <>
                      {site.address.street}
                      <br />
                    </>
                  )}
                  {site.address.locality}, {site.address.region}
                  <br />
                  Argentina
                </address>
                <span className="mt-1 inline-block text-xs font-semibold text-primary">
                  Cómo llegar
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-foreground/50 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Importados Tafí. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
