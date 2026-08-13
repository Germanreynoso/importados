'use client'

import { useEffect, useState } from 'react'
import { BadgeCheck, Menu, ShoppingBag, Truck, X } from 'lucide-react'
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
} from '@/components/icons'
import { whatsappLink } from '@/lib/products'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Productos', href: '#productos' },
  { label: 'Ofertas', href: '#destacados' },
  { label: 'Contacto', href: '#contacto' },
  { label: 'Preguntas Frecuentes', href: '#faq' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-foreground text-background transition-shadow duration-300',
        scrolled && 'shadow-lg shadow-black/20',
      )}
    >
      {!scrolled && (
        <div className="border-b border-white/10 bg-foreground text-background/70">
          <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-xs sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Truck className="size-3.5 text-primary" /> Envíos a todo el país
              </span>
              <span className="hidden items-center gap-1.5 sm:flex">
                <BadgeCheck className="size-3.5 text-primary" /> Productos de calidad
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline">Seguinos en</span>
              <a href="#" aria-label="Instagram" className="transition-colors hover:text-primary">
                <InstagramIcon className="size-4" />
              </a>
              <a href="#" aria-label="Facebook" className="transition-colors hover:text-primary">
                <FacebookIcon className="size-4" />
              </a>
              <a href="#" aria-label="TikTok" className="transition-colors hover:text-primary">
                <TikTokIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      )}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2" aria-label="TechStore inicio">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <ShoppingBag className="size-5" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight">
            TECH<span className="text-primary">STORE</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-background/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink('Hola! Quería hacer una consulta sobre sus productos.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            Consultar por WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-lg text-background lg:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6" aria-label="Navegación móvil">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-medium text-background/85 transition-colors hover:bg-white/5 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink('Hola! Quería hacer una consulta sobre sus productos.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              <WhatsAppIcon className="size-4" />
              Consultar por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
