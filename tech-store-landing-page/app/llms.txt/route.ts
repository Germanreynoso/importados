import { faqs } from '@/lib/faqs'
import { formatPrice, products } from '@/lib/products'
import { hasPublicAddress, site } from '@/lib/site'

export const dynamic = 'force-static'

/**
 * /llms.txt — resumen del negocio en texto plano para asistentes de IA.
 * Se genera desde el catálogo, así que no se desactualiza al cambiar precios.
 */
export function GET() {
  const categories = new Map<string, string[]>()
  for (const p of products) {
    const list = categories.get(p.category) ?? []
    list.push(`- ${p.name} — ${formatPrice(p.price)}`)
    categories.set(p.category, list)
  }

  const CATEGORY_LABELS: Record<string, string> = {
    cables: 'Cables y cargadores',
    audio: 'Audio',
    seguridad: 'Cámaras de seguridad',
    iluminacion: 'Iluminación',
    accesorios: 'Accesorios para celular',
    soportes: 'Trípodes y soportes',
    gadgets: 'Gadgets',
    hogar: 'Hogar',
  }

  const ubicacion = hasPublicAddress
    ? `${site.address.street}, ${site.address.locality}, ${site.address.region}, Argentina`
    : `${site.address.locality}, ${site.address.region}, Argentina`

  const body = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    '## Datos del negocio',
    '',
    `- Tipo: local de venta de tecnología y accesorios importados`,
    `- Ubicación: ${ubicacion}`,
    `- Zona de entrega: ${site.areaServed.join(', ')}`,
    `- Teléfono / WhatsApp: ${site.phoneDisplay}`,
    `- Sitio web: ${site.url}`,
    `- Cómo comprar: se consulta y se cierra la compra por WhatsApp. También se puede retirar por el local.`,
    '',
    '## Catálogo',
    '',
    ...[...categories.entries()].flatMap(([id, items]) => [
      `### ${CATEGORY_LABELS[id] ?? id}`,
      '',
      ...items,
      '',
    ]),
    '## Preguntas frecuentes',
    '',
    ...faqs.flatMap((f) => [`### ${f.q}`, '', f.a, '']),
  ].join('\n')

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  })
}
