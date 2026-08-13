import Image from 'next/image'
import { Package } from 'lucide-react'
import { WhatsAppIcon } from '@/components/icons'
import {
  formatPrice,
  productWhatsappLink,
  type Product,
} from '@/lib/products'

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group hover:shadow-glow flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/60">
      {/* Las fotos vienen con fondo blanco: van sobre un panel claro para que
          no se recorten contra el negro de la card. */}
      <div className="relative aspect-square overflow-hidden bg-neutral-light">
        {product.offer && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground">
            Oferta
          </span>
        )}
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-foreground/25">
            <Package className="size-14" strokeWidth={1.25} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-semibold leading-snug text-pretty">
          {product.name}
        </h3>
        <p className="mt-1 font-display text-lg font-extrabold text-primary">
          {formatPrice(product.price)}
        </p>
        <a
          href={productWhatsappLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
        >
          <WhatsAppIcon className="size-4" />
          Consultar por WhatsApp
        </a>
      </div>
    </article>
  )
}
