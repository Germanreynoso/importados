import { WhatsAppIcon } from '@/components/icons'
import { whatsappLink } from '@/lib/products'

export function CtaBanner() {
  return (
    <section id="contacto" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-12 text-background sm:px-12">
        <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-5">
            <span className="hidden size-16 shrink-0 items-center justify-center rounded-2xl bg-whatsapp text-whatsapp-foreground sm:flex">
              <WhatsAppIcon className="size-8" />
            </span>
            <div>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
                ¿Tenés dudas o querés hacer un pedido?
              </h2>
              <p className="mt-2 text-background/70">
                Escribinos por WhatsApp y te respondemos al instante.
              </p>
            </div>
          </div>
          <a
            href={whatsappLink('Hola! Quería hacer un pedido / consulta.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            <WhatsAppIcon className="size-5" />
            Ir a WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
