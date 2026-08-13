// Número de WhatsApp de la tienda (formato internacional sin + ni espacios)
export const WHATSAPP_NUMBER = '5493811234567'

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function productWhatsappLink(productName: string) {
  return whatsappLink(
    `Hola! Me interesa el producto "${productName}". ¿Me pasás más info?`,
  )
}

const ARS = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
})

export function formatPrice(value: number | null) {
  return value === null ? 'Consultar precio' : ARS.format(value)
}

export type CategoryId =
  | 'cables'
  | 'audio'
  | 'seguridad'
  | 'iluminacion'
  | 'accesorios'
  | 'gadgets'
  | 'hogar'
  | 'soportes'

export type Product = {
  id: string
  name: string
  /** null = sin precio definido, se muestra "Consultar precio" */
  price: number | null
  category: CategoryId
  /** Imagen principal servida desde /public */
  image?: string
  /** Fotos adicionales del mismo producto (variantes / otros ángulos) */
  gallery?: string[]
  featured?: boolean
  offer?: boolean
}

export const products: Product[] = [
  // ── Cables y Cargadores ────────────────────────────────────────────────
  {
    id: 'cabezal-apple-40w',
    name: 'Cabezal de Apple 40W',
    price: 35000,
    category: 'cables',
    image: '/products/cabezal-apple-40w.jpeg',
    gallery: ['/products/cabezal-apple-40w-2.jpeg'],
    featured: true,
  },
  {
    id: 'cargador-apple-20w',
    name: 'Cargador de Apple 20W',
    price: 30000,
    category: 'cables',
    image: '/products/cargador-apple-20w.jpeg',
    gallery: [
      '/products/cargador-apple-20w-2.jpeg',
      '/products/cargador-apple-20w-3.jpeg',
    ],
    featured: true,
  },
  {
    id: 'cable-apple-lightning-c',
    name: 'Cable de Apple Lightning a Tipo C',
    price: 8000,
    category: 'cables',
    image: '/products/cable-apple-lightning-c.jpeg',
  },
  {
    id: 'powerbank-magsafe',
    name: 'Power Bank MagSafe',
    price: 30000,
    category: 'cables',
    image: '/products/powerbank-magsafe.jpeg',
    featured: true,
  },
  {
    id: 'cargadores-universales',
    name: 'Cargador Universal para Notebook',
    price: 18000,
    category: 'cables',
    image: '/products/cargadores-universales.jpeg',
  },
  {
    id: 'adaptador-multiple',
    name: 'Adaptador Múltiples Entradas',
    price: 18000,
    category: 'cables',
    image: '/products/adaptador-multiple.jpeg',
  },
  {
    id: 'cable-hdmi',
    name: 'Cable HDMI',
    price: null,
    category: 'cables',
    image: '/products/cable-hdmi.jpeg',
  },

  // ── Audio ──────────────────────────────────────────────────────────────
  {
    id: 'auriculares-tomate',
    name: 'Auriculares Tomate',
    price: 30000,
    category: 'audio',
    image: '/products/auriculares-tomate.jpeg',
    featured: true,
  },
  {
    id: 'parlante-tomate',
    name: 'Parlante Tomate',
    price: 45000,
    category: 'audio',
    image: '/products/parlante-tomate.jpeg',
    featured: true,
  },

  // ── Seguridad ──────────────────────────────────────────────────────────
  {
    id: 'camara-domo',
    name: 'Cámara Domo',
    price: 60000,
    category: 'seguridad',
    image: '/products/camara-domo.jpeg',
    featured: true,
  },
  {
    id: 'camara-doble-360',
    name: 'Cámara Doble 360°',
    price: 60000,
    category: 'seguridad',
    image: '/products/camara-doble-360.jpeg',
    featured: true,
  },
  {
    id: 'camara-foco-360',
    name: 'Cámara Foco 360°',
    price: 40000,
    category: 'seguridad',
    image: '/products/camara-foco-360.jpeg',
  },

  // ── Iluminación ────────────────────────────────────────────────────────
  {
    id: 'aro-luz-corazon',
    name: 'Aro de Luz Forma de Corazón',
    price: 80000,
    category: 'iluminacion',
    image: '/products/aro-luz-corazon.jpeg',
    featured: true,
  },
  {
    id: 'aro-luz-simple',
    name: 'Aro de Luz Simple',
    price: 35000,
    category: 'iluminacion',
    image: '/products/aro-luz-simple.jpeg',
    gallery: ['/products/aro-luz-simple-2.jpeg'],
  },
  {
    id: 'aro-luz-triple',
    name: 'Aro de Luz Triple',
    price: 80000,
    category: 'iluminacion',
    image: '/products/aro-luz-triple.jpeg',
    featured: true,
  },
  {
    id: 'linterna-lelong',
    name: 'Linterna Lelong',
    price: 35000,
    category: 'iluminacion',
    image: '/products/linterna-lelong.jpeg',
  },
  {
    id: 'linterna-lelong-largo',
    name: 'Linterna Lelong Largo Alcance',
    price: 60000,
    category: 'iluminacion',
    image: '/products/linterna-lelong-largo.jpeg',
    featured: true,
  },
  {
    id: 'linterna-mediana',
    name: 'Linterna Mediana',
    price: 8000,
    category: 'iluminacion',
    image: '/products/linterna-mediana.jpeg',
  },
  {
    id: 'linterna-minera',
    name: 'Linterna Minera',
    price: 12000,
    category: 'iluminacion',
    image: '/products/linterna-minera.jpeg',
  },
  {
    id: 'picana-linterna',
    name: 'Picana con Linterna',
    price: 35000,
    category: 'iluminacion',
    image: '/products/picana-linterna.jpeg',
  },
  {
    id: 'lampara-esfera',
    name: 'Lámpara Esfera de Cristal con Motivos',
    price: 10000,
    category: 'iluminacion',
    image: '/products/lampara-esfera.jpeg',
    gallery: [
      '/products/lampara-esfera-2.jpeg',
      '/products/lampara-esfera-3.jpeg',
    ],
  },
  {
    id: 'guirnaldas-solares',
    name: 'Guirnaldas Solares',
    price: null,
    category: 'iluminacion',
    image: '/products/guirnaldas-solares.jpeg',
  },

  // ── Accesorios para Celular ────────────────────────────────────────────
  {
    id: 'soporte-celular',
    name: 'Soporte de Celular',
    price: 5000,
    category: 'accesorios',
    image: '/products/soporte-celular.jpeg',
  },
  {
    id: 'funda-magsafe',
    name: 'Funda MagSafe Premium',
    price: 20000,
    category: 'accesorios',
    image: '/products/funda-magsafe.jpeg',
    featured: true,
  },
  {
    id: 'porta-celular-deporte',
    name: 'Porta Celular para Deporte',
    price: 8000,
    category: 'accesorios',
    image: '/products/porta-celular-deporte.jpeg',
  },
  {
    id: 'tarjeta-memoria-32gb',
    name: 'Tarjeta de Memoria 32 GB',
    price: null,
    category: 'accesorios',
    image: '/products/tarjeta-memoria-32gb.jpeg',
  },
  {
    id: 'tarjeta-memoria-64gb',
    name: 'Tarjeta de Memoria 64 GB',
    price: null,
    category: 'accesorios',
    image: '/products/tarjeta-memoria-64gb.jpeg',
  },

  // ── Trípodes y Soportes ────────────────────────────────────────────────
  {
    id: 'soporte-auto',
    name: 'Soporte de Auto para Celular',
    price: 12000,
    category: 'soportes',
    image: '/products/soporte-auto.jpeg',
    gallery: [
      '/products/soporte-auto-2.jpeg',
      '/products/soporte-auto-3.jpeg',
      '/products/soporte-auto-retrovisor.jpeg',
    ],
    featured: true,
  },
  {
    id: 'soporte-bici',
    name: 'Soporte de Celular para Bicicleta',
    price: 12000,
    category: 'soportes',
    image: '/products/soporte-bici.jpeg',
  },
  {
    id: 'soporte-escritorio',
    name: 'Soporte de Celular para Escritorio',
    price: 5000,
    category: 'soportes',
    image: '/products/soporte-escritorio.jpeg',
  },
  {
    id: 'porta-notebook',
    name: 'Porta Notebook / Tablet Mediana',
    price: null,
    category: 'soportes',
    image: '/products/porta-notebook.png',
  },
  {
    id: 'estabilizador',
    name: 'Estabilizador con Micrófono y Luz',
    price: 25000,
    category: 'soportes',
    image: '/products/estabilizador.png',
    featured: true,
  },

  // ── Gadgets ────────────────────────────────────────────────────────────
  {
    id: 'proyector-game',
    name: 'Proyector Game Tomate Premium Full',
    price: 200000,
    category: 'gadgets',
    image: '/products/proyector-game.png',
    featured: true,
    offer: true,
  },
  {
    id: 'corta-barba',
    name: 'Corta Barba 3 en 1',
    price: 20000,
    category: 'gadgets',
    image: '/products/corta-barba.jpeg',
    featured: true,
  },
  {
    id: 'reloj-mano',
    name: 'Reloj de Mano',
    price: 25000,
    category: 'gadgets',
    image: '/products/reloj-mano.jpeg',
    featured: true,
  },
  {
    id: 'teclado-mouse',
    name: 'Teclado + Mouse',
    price: 35000,
    category: 'gadgets',
    image: '/products/teclado-mouse.jpeg',
    featured: true,
  },
  {
    id: 'mini-teclado',
    name: 'Mini Teclado con Touchpad',
    price: 15000,
    category: 'gadgets',
    image: '/products/mini-teclado.jpeg',
  },
  {
    id: 'balanza-precision',
    name: 'Balanza de Precisión',
    price: 10000,
    category: 'gadgets',
    image: '/products/balanza-precision.jpeg',
  },
  {
    id: 'masajeador-cervical',
    name: 'Masajeador de Cervical',
    price: 35000,
    category: 'gadgets',
    image: '/products/masajeador-cervical.jpeg',
  },
  {
    id: 'pistola-masajes',
    name: 'Pistola de Masajes con Múltiples Accesorios',
    price: null,
    category: 'gadgets',
    image: '/products/pistola-masajes.jpeg',
  },
  {
    id: 'masajeador-mini',
    name: 'Masajeador Mini',
    price: null,
    category: 'gadgets',
    image: '/products/masajeador-mini.jpeg',
  },
  {
    id: 'bomba-agua',
    name: 'Bomba de Agua Eléctrica',
    price: 10000,
    category: 'gadgets',
    image: '/products/bomba-agua.jpeg',
  },
  {
    id: 'xilofono-piano',
    name: 'Xilófono Piano',
    price: 12000,
    category: 'gadgets',
    image: '/products/xilofono-piano.jpeg',
  },
  {
    id: 'lapices-motivos',
    name: 'Lápices con Motivos',
    price: 3000,
    category: 'gadgets',
    image: '/products/lapices-motivos.jpeg',
  },

  // ── Hogar ──────────────────────────────────────────────────────────────
  {
    id: 'botella-termica',
    name: 'Botella Térmica con Manija',
    price: 15000,
    category: 'hogar',
    image: '/products/botella-termica.jpeg',
  },
  {
    id: 'termo-camping',
    name: 'Termo + 2 Tazas Camping',
    price: 25000,
    category: 'hogar',
    image: '/products/termo-camping.jpeg',
    featured: true,
  },
  {
    id: 'balanza-cocina',
    name: 'Balanza de Cocina',
    price: 15000,
    category: 'hogar',
    image: '/products/balanza-cocina.jpeg',
  },
  {
    id: 'mini-batidora',
    name: 'Mini Batidora Portátil Alto Rendimiento',
    price: null,
    category: 'hogar',
    image: '/products/mini-batidora.jpeg',
  },
  {
    id: 'mesa-plegable',
    name: 'Mesa Plegable Amplia',
    price: 65000,
    category: 'hogar',
    image: '/products/mesa-plegable.jpeg',
  },
  {
    id: 'banco-plegable',
    name: 'Banco Plegable',
    price: null,
    category: 'hogar',
    image: '/products/banco-plegable.jpeg',
  },
]

export const featuredProducts = products.filter((p) => p.featured)
