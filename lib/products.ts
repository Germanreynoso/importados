// Número de WhatsApp de la tienda (formato internacional sin + ni espacios)
export const WHATSAPP_NUMBER = '5493813586755'

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
  | 'bazar'
  | 'juguetes'
  | 'salud'
  | 'herramientas'

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
    price: 35000,
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
    name: 'Mini Batidora Portátil Lelong',
    price: 45000,
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

  // ══ Incorporación agosto 2026 ══════════════════════════════════════════

  // ── Audio ──────────────────────────────────────────────────────────────
  {
    id: 'auriculares-tomate-anc',
    name: 'Auriculares Tomate Vincha ANC T-Y2447BT',
    price: null,
    category: 'audio',
    image: '/products/auriculares-tomate-anc.jpg',
  },
  {
    id: 'auriculares-tomate-negro',
    name: 'Auriculares Inalámbricos Tomate T-G3820BT',
    price: 35000,
    category: 'audio',
    image: '/products/auriculares-tomate-negro.jpg',
  },
  {
    id: 'auriculares-vincha-tomate',
    name: 'Auriculares Vincha Tomate T-Y2420BT',
    price: 35000,
    category: 'audio',
    image: '/products/auriculares-vincha-tomate.jpg',
    featured: true,
  },
  {
    id: 'auriculares-tomate-linterna',
    name: 'Auriculares Inalámbricos Tomate con Linterna',
    price: null,
    category: 'audio',
    image: '/products/auriculares-tomate-linterna.jpg',
  },
  {
    id: 'auriculares-it-blue',
    name: 'Auriculares Inalámbricos IT-Blue',
    price: 30000,
    category: 'audio',
    image: '/products/auriculares-it-blue.jpg',
  },
  {
    id: 'auriculares-deportivos-it-blue',
    name: 'Auriculares Inalámbricos Deportivos IT-Blue',
    price: 40000,
    category: 'audio',
    image: '/products/auriculares-deportivos-it-blue.jpg',
  },
  {
    id: 'auriculares-gamer',
    name: 'Auriculares Profesionales para Juegos',
    price: 45000,
    category: 'audio',
    image: '/products/auriculares-gamer.jpg',
  },
  {
    id: 'auriculares-cat-infantil',
    name: 'Auriculares Inalámbricos Cat Infantil',
    price: 30000,
    category: 'audio',
    image: '/products/auriculares-cat-infantil.jpg',
  },
  {
    id: 'auriculares-cable-tipo-c',
    name: 'Auriculares con Cable Entrada Universal y Tipo C',
    price: 5000,
    category: 'audio',
    image: '/products/auriculares-cable-tipo-c.jpg',
  },
  {
    id: 'parlante-tomate-extra-bass',
    name: 'Parlante Tomate Extra Bass TO-122BT Max',
    price: 45000,
    category: 'audio',
    image: '/products/parlante-tomate-extra-bass.jpg',
    featured: true,
  },
  {
    id: 'parlante-magnetic',
    name: 'Parlante Magnetic para Celular',
    price: null,
    category: 'audio',
    image: '/products/parlante-magnetic.jpg',
  },
  {
    id: 'parlante-knup-mini',
    name: 'Parlante Knup Mini Portable',
    price: null,
    category: 'audio',
    image: '/products/parlante-knup-mini.jpg',
  },
  {
    id: 'microfono-tomate-mic813',
    name: 'Micrófono Lavalier Inalámbrico Tomate MIC813',
    price: 40000,
    category: 'audio',
    image: '/products/microfono-tomate-mic813.jpg',
  },
  {
    id: 'microfono-tomate-mic844',
    name: 'Micrófono Lavalier Inalámbrico Tomate MIC844',
    price: 40000,
    category: 'audio',
    image: '/products/microfono-tomate-mic844.jpg',
  },
  {
    id: 'microfono-inalambrico-f15',
    name: 'Micrófono Inalámbrico Doble F15-2',
    price: 30000,
    category: 'audio',
    image: '/products/microfono-inalambrico-f15.jpg',
  },

  // ── Cables y Cargadores ────────────────────────────────────────────────
  {
    id: 'powerbank-yesido-30000',
    name: 'Power Bank Yesido 30.000 mAh',
    price: 30000,
    category: 'cables',
    image: '/products/powerbank-yesido-30000.jpg',
  },
  {
    id: 'powerbank-yesido-22w',
    name: 'Power Bank Yesido 30.000 mAh Carga Rápida 22.5W',
    price: 30000,
    category: 'cables',
    image: '/products/powerbank-yesido-22w.jpg',
    featured: true,
  },
  {
    id: 'powerbank-15000',
    name: 'Power Bank 15.000 mAh',
    price: 20000,
    category: 'cables',
    image: '/products/powerbank-15000.jpg',
  },
  {
    id: 'cable-red-5m',
    name: 'Cable de Red de 5 m',
    price: 2000,
    category: 'cables',
    image: '/products/cable-red-5m.jpg',
  },

  // ── Seguridad ──────────────────────────────────────────────────────────
  {
    id: 'reflector-solar-camara',
    name: 'Reflector Solar con Cámara',
    price: 250000,
    category: 'seguridad',
    image: '/products/reflector-solar-camara.jpg',
    featured: true,
  },

  // ── Iluminación ────────────────────────────────────────────────────────
  {
    id: 'reflector-solar',
    name: 'Reflector Solar Tomate TO-L019',
    price: 18000,
    category: 'iluminacion',
    image: '/products/reflector-solar.jpg',
  },
  {
    id: 'lampara-solar-jardin',
    name: 'Lámpara Solar de Jardín Knup',
    price: null,
    category: 'iluminacion',
    image: '/products/lampara-solar-jardin.jpg',
  },
  {
    id: 'luces-emergencia-30-led',
    name: 'Luces de Emergencia 30 LED',
    price: 10000,
    category: 'iluminacion',
    image: '/products/luces-emergencia-30-led.jpg',
  },

  // ── Gadgets ────────────────────────────────────────────────────────────
  {
    id: 'combo-gamer',
    name: 'Combo Gamer Noga 4 en 1',
    price: 60000,
    category: 'gadgets',
    image: '/products/combo-gamer.jpg',
    featured: true,
  },
  {
    id: 'camara-deportiva-4k',
    name: 'Cámara Deportiva 4K',
    price: 150000,
    category: 'gadgets',
    image: '/products/camara-deportiva-4k.jpg',
    featured: true,
  },
  {
    id: 'drone-lelong',
    name: 'Drone Lelong',
    price: 60000,
    category: 'gadgets',
    image: '/products/drone-lelong.jpg',
    featured: true,
  },
  {
    id: 'binocular-20x50',
    name: 'Binocular 20x50',
    price: 65000,
    category: 'gadgets',
    image: '/products/binocular-20x50.jpg',
  },
  {
    id: 'binocular-30x60',
    name: 'Binocular 30x60',
    price: 40000,
    category: 'gadgets',
    image: '/products/binocular-30x60.jpg',
  },
  {
    id: 'reloj-it-blue-11-mallas',
    name: 'Reloj Digital IT-Blue 11 Mallas en Uno',
    price: 45000,
    category: 'gadgets',
    image: '/products/reloj-it-blue-11-mallas.jpg',
  },
  {
    id: 'set-reloj-auriculares-cables',
    name: 'Set Reloj Digital + Auriculares + Multicables',
    price: 45000,
    category: 'gadgets',
    image: '/products/set-reloj-auriculares-cables.jpg',
  },
  {
    id: 'set-reloj-auriculares-funda',
    name: 'Set Reloj Digital + Auriculares + Funda + Llavero',
    price: 45000,
    category: 'gadgets',
    image: '/products/set-reloj-auriculares-funda.jpg',
  },
  {
    id: 'set-reloj-auriculares-manicura',
    name: 'Set Reloj Digital + Auriculares + Set Manicura',
    price: 40000,
    category: 'gadgets',
    image: '/products/set-reloj-auriculares-manicura.jpg',
  },
  {
    id: 'corta-pelo-mascotas',
    name: 'Máquina Corta Pelo para Mascotas Tomate',
    price: null,
    category: 'gadgets',
    image: '/products/corta-pelo-mascotas.jpg',
  },

  // ── Herramientas ───────────────────────────────────────────────────────
  {
    id: 'set-herramientas-bateria',
    name: 'Set de Herramientas 3 en 1 Bomtex + 2 Baterías 21V',
    price: 250000,
    category: 'herramientas',
    image: '/products/set-herramientas-bateria.jpg',
    featured: true,
    offer: true,
  },

  // ── Bazar y Cocina ─────────────────────────────────────────────────────
  {
    id: 'waflera-3-en-1',
    name: 'Máquina 3 en 1: Waflera + Sandwichera + Grill',
    price: 60000,
    category: 'bazar',
    image: '/products/waflera-3-en-1.jpg',
    featured: true,
  },
  {
    id: 'maquina-pastas',
    name: 'Máquina para Pastas',
    price: 50000,
    category: 'bazar',
    image: '/products/maquina-pastas.jpg',
  },
  {
    id: 'exprimidor-electrico',
    name: 'Exprimidor de Jugos Eléctrico',
    price: 60000,
    category: 'bazar',
    image: '/products/exprimidor-electrico.jpg',
  },
  {
    id: 'sarten-grill-3-en-1',
    name: 'Sartén Grill 3 en 1',
    price: 18000,
    category: 'bazar',
    image: '/products/sarten-grill-3-en-1.jpg',
  },
  {
    id: 'utensilios-silicona',
    name: 'Juego de Utensilios de Cocina de Silicona',
    price: 18000,
    category: 'bazar',
    image: '/products/utensilios-silicona.jpg',
  },
  {
    id: 'picador-verduras',
    name: 'Picador de Verduras',
    price: null,
    category: 'bazar',
    image: '/products/picador-verduras.jpg',
  },

  // ── Hogar ──────────────────────────────────────────────────────────────
  {
    id: 'tender-4-niveles',
    name: 'Tender 4 Niveles con Ruedas',
    price: 40000,
    category: 'hogar',
    image: '/products/tender-4-niveles.jpg',
  },
  {
    id: 'plancha-ropa',
    name: 'Plancha de Ropa',
    price: 35000,
    category: 'hogar',
    image: '/products/plancha-ropa.jpg',
  },
  {
    id: 'cesto-basura-inox',
    name: 'Cesto de Basura de Acero Inoxidable',
    price: 25000,
    category: 'hogar',
    image: '/products/cesto-basura-inox.jpg',
  },
  {
    id: 'zapatero-4-niveles',
    name: 'Zapatero 4 Niveles',
    price: 10000,
    category: 'hogar',
    image: '/products/zapatero-4-niveles.jpg',
  },
  {
    id: 'joyero-corazon',
    name: 'Joyero Forma de Corazón',
    price: 10000,
    category: 'hogar',
    image: '/products/joyero-corazon.jpg',
  },
  {
    id: 'inflador-globos',
    name: 'Inflador de Globos Eléctrico',
    price: 30000,
    category: 'hogar',
    image: '/products/inflador-globos.jpg',
  },

  // ── Juguetería ─────────────────────────────────────────────────────────
  {
    id: 'elefante-2-en-1',
    name: 'Elefante 2 en 1 con Luz y Sonido',
    price: 55000,
    category: 'juguetes',
    image: '/products/elefante-2-en-1.jpg',
    featured: true,
  },
  {
    id: 'sillas-infantiles',
    name: 'Sillas Infantiles',
    price: 25000,
    category: 'juguetes',
    image: '/products/sillas-infantiles.jpg',
  },
  {
    id: 'autito-didactico',
    name: 'Juego Didáctico Autito con Piezas Encastrables',
    price: 25000,
    category: 'juguetes',
    image: '/products/autito-didactico.jpg',
  },
  {
    id: 'piezas-encastrables-pizarra',
    name: 'Piezas Encastrables + Pizarra',
    price: 8000,
    category: 'juguetes',
    image: '/products/piezas-encastrables-pizarra.jpg',
  },
  {
    id: 'juego-ajedrez',
    name: 'Juego de Ajedrez',
    price: 18000,
    category: 'juguetes',
    image: '/products/juego-ajedrez.jpg',
  },
  {
    id: 'juego-tetris',
    name: 'Juego Tetris',
    price: 6000,
    category: 'juguetes',
    image: '/products/juego-tetris.jpg',
  },

  // ── Salud y Cuidado Personal ───────────────────────────────────────────
  {
    id: 'audifono-tomate',
    name: 'Audífono Tomate TO-ZT2422',
    price: 60000,
    category: 'salud',
    image: '/products/audifono-tomate.jpg',
  },
  {
    id: 'pulidor-unas',
    name: 'Pulidor de Uñas',
    price: 35000,
    category: 'salud',
    image: '/products/pulidor-unas.jpg',
  },
  {
    id: 'kit-primeros-auxilios',
    name: 'Kit de Primeros Auxilios para Ciclistas',
    price: 10000,
    category: 'salud',
    image: '/products/kit-primeros-auxilios.jpg',
  },
  {
    id: 'faja-ajustable',
    name: 'Faja Ajustable',
    price: null,
    category: 'salud',
    image: '/products/faja-ajustable.jpg',
  },
  {
    id: 'rodillera-ajustable',
    name: 'Rodillera Ajustable',
    price: null,
    category: 'salud',
    image: '/products/rodillera-ajustable.jpg',
  },
  {
    id: 'codera-ajustable',
    name: 'Codera Ajustable',
    price: null,
    category: 'salud',
    image: '/products/codera-ajustable.jpg',
  },
  {
    id: 'munequera-ajustable',
    name: 'Muñequera Ajustable',
    price: null,
    category: 'salud',
    image: '/products/munequera-ajustable.jpg',
  },

  // ══ Incorporación 21 de agosto 2026 ════════════════════════════════════

  // ── Teléfonos ──────────────────────────────────────────────────────────
  {
    id: 'samsung-a06-64gb',
    name: 'Samsung A06 64 GB',
    price: 300000,
    category: 'gadgets',
    featured: true,
  },
  {
    id: 'redmi-15c-128gb',
    name: 'Redmi 15C 128 GB 4 RAM',
    price: 380000,
    category: 'gadgets',
    featured: true,
  },
  {
    id: 'moto-g5-128gb',
    name: 'Moto G5 128 GB',
    price: 350000,
    category: 'gadgets',
    featured: true,
  },
  {
    id: 'iphone-16-128gb',
    name: 'iPhone 16 128 GB',
    price: null,
    category: 'gadgets',
    featured: true,
  },

  // ── Accesorios para Celular ────────────────────────────────────────────
  {
    id: 'wallet-accesorio',
    name: 'Wallet',
    price: 15000,
    category: 'accesorios',
  },
  {
    id: 'correa-cordon-universal',
    name: 'Correa Cordón Universal',
    price: 10000,
    category: 'accesorios',
  },
  {
    id: 'correa-brillante',
    name: 'Correa Brillante',
    price: 10000,
    category: 'accesorios',
  },
  {
    id: 'funda-cargador-20w-animada',
    name: 'Funda de Cargador 20W Animada',
    price: 10000,
    category: 'accesorios',
  },
  {
    id: 'protector-pin-carga-polvo',
    name: 'Protector Pin de Carga Anti Polvo',
    price: 8000,
    category: 'accesorios',
  },
  {
    id: 'correas-perladas-cortas',
    name: 'Correas Cortas Perladas',
    price: 8000,
    category: 'accesorios',
  },
  {
    id: 'aro-ring-soporte-celular',
    name: 'Aro Soporte Ring Celular',
    price: 5000,
    category: 'accesorios',
  },
  {
    id: 'correas-estampadas-celular',
    name: 'Correas Estampadas para Celular',
    price: 10000,
    category: 'accesorios',
  },
  {
    id: 'aro-magnetic-soporte-celular',
    name: 'Aro Magnetic Soporte Celular',
    price: 8000,
    category: 'accesorios',
  },
  {
    id: 'accesorios-fundas',
    name: 'Accesorios para Fundas',
    price: 8000,
    category: 'accesorios',
  },
  {
    id: 'funda-cargador-aesthetic',
    name: 'Funda para Cargador Aesthetic',
    price: 10000,
    category: 'accesorios',
  },

  // ── Audio ──────────────────────────────────────────────────────────────
  {
    id: 'earbuds-tomate',
    name: 'EarPods',
    price: 15000,
    category: 'audio',
  },
  {
    id: 'parlante-moto-bici',
    name: 'Parlante para Moto Bici',
    price: 20000,
    category: 'audio',
  },
  {
    id: 'soporte-magnetico-parlante',
    name: 'Soporte Magnético para Parlante',
    price: 15000,
    category: 'audio',
  },

  // ── Cables y Cargadores ────────────────────────────────────────────────
  {
    id: 'cable-tipo-c-a-c',
    name: 'Cable Tipo C a Tipo C',
    price: 8000,
    category: 'cables',
  },
  {
    id: 'fuente-carga-multiple',
    name: 'Fuente de Carga Múltiple',
    price: 28000,
    category: 'cables',
  },

  // ── Seguridad ──────────────────────────────────────────────────────────
  {
    id: 'candado-digital',
    name: 'Candado Digital',
    price: 35000,
    category: 'seguridad',
  },

  // ── Iluminación ────────────────────────────────────────────────────────
  {
    id: 'luz-rgb-led',
    name: 'Luz RGB',
    price: 40000,
    category: 'iluminacion',
  },
  {
    id: 'luz-led-con-tripode',
    name: 'Luz LED con Trípode',
    price: 45000,
    category: 'iluminacion',
  },
  {
    id: 'luz-magnetica',
    name: 'Luz Magnética',
    price: 45000,
    category: 'iluminacion',
  },

  // ── Gadgets ────────────────────────────────────────────────────────────
  {
    id: 'extensor-wifi-300mbps',
    name: 'Extensor de WiFi 300 MBPS',
    price: 38000,
    category: 'gadgets',
  },
  {
    id: 'extensor-wifi-ac-1200',
    name: 'Extensor de WiFi AC 1200',
    price: 65000,
    category: 'gadgets',
  },
  {
    id: 'mini-teclado-plegable',
    name: 'Mini Teclado Plegable',
    price: 20000,
    category: 'gadgets',
  },

  // ── Hogar ──────────────────────────────────────────────────────────────
  {
    id: 'botellas-3-en-1',
    name: 'Botellas 3 en 1',
    price: 12000,
    category: 'hogar',
    image: '/products/botellas-3-en-1.jpg',
  },
  {
    id: 'joyero-irun',
    name: 'Joyero Irun',
    price: 9000,
    category: 'hogar',
  },

  // ── Bazar y Cocina ─────────────────────────────────────────────────────
  {
    id: 'pava-electrica-inox',
    name: 'Pava Eléctrica Acero Inoxidable',
    price: 20000,
    category: 'bazar',
  },

  // ── Soportes y Trípodes ────────────────────────────────────────────────
  {
    id: 'palo-selfie',
    name: 'Palo de Selfie',
    price: 10000,
    category: 'soportes',
  },
  {
    id: 'selfie-tripode-automatico',
    name: 'Selfie Trípode Automático',
    price: 60000,
    category: 'soportes',
  },
  {
    id: 'selfie-tripode-magsafe',
    name: 'Selfie Trípode Automático MagSafe',
    price: 80000,
    category: 'soportes',
    featured: true,
  },
  {
    id: 'tripode-corto',
    name: 'Trípode Corto',
    price: 8000,
    category: 'soportes',
  },
  {
    id: 'soporte-magnetico',
    name: 'Soporte Magnético',
    price: 10000,
    category: 'soportes',
  },
  {
    id: 'hombrera-ajustable',
    name: 'Hombrera Ajustable',
    price: null,
    category: 'salud',
    image: '/products/hombrera-ajustable.jpg',
  },
  {
    id: 'munequera-ajustable',
    name: 'Muñequera Ajustable',
    price: null,
    category: 'salud',
    image: '/products/munequera-ajustable.jpg',
  },
]

export const featuredProducts = products.filter((p) => p.featured)
