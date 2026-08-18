# Importados Tafí

Landing y catálogo de Importados Tafí, local de tecnología y accesorios
importados en Tafí del Valle, Tucumán. Las consultas y ventas se cierran por
WhatsApp: el sitio no procesa pagos.

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de producción
```

## Dónde tocar qué

| Necesidad | Archivo |
| --- | --- |
| Productos, precios, categorías | `lib/products.ts` |
| Número de WhatsApp | `lib/products.ts` (`WHATSAPP_NUMBER`) |
| Dirección, horarios, redes, URL del sitio | `lib/site.ts` |
| Preguntas frecuentes | `lib/faqs.ts` |
| Datos estructurados (Store, ItemList, FAQ) | `lib/structured-data.ts` |
| Fotos de producto | `public/products/` |

`lib/site.ts` es la fuente única del NAP (nombre, dirección, teléfono). Tiene
que coincidir carácter por carácter con la ficha de Google Business Profile.

Un producto con `price: null` se muestra como "Consultar precio".

## Deploy

Vercel, conectado a `main`. En producción hay que definir la variable de
entorno `NEXT_PUBLIC_SITE_URL` con el dominio final: de ella salen el
canonical, el `sitemap.xml` y las tarjetas de Open Graph.
