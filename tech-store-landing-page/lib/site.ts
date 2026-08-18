/**
 * Datos del negocio. Fuente única de verdad para SEO, datos estructurados
 * y los textos de contacto del sitio.
 *
 * NAP (Name, Address, Phone) debe coincidir CARÁCTER POR CARÁCTER con la
 * ficha de Google Business Profile y con las redes sociales. Google cruza
 * esos datos: si difieren, pierde confianza en el negocio y lo posiciona peor.
 */

export const site = {
  name: 'Importados Tafí',
  legalName: 'Importados Tafí',
  tagline: 'Tecnología que te conecta',
  description:
    'Local de tecnología y accesorios importados en Tafí del Valle, Tucumán. Cargadores Apple, cámaras de seguridad WiFi, aros de luz, auriculares y parlantes Tomate, linternas Lelong y más. Consultá y comprá por WhatsApp con envíos a toda la provincia de Tucumán.',

  /**
   * URL pública. Vercel expone VERCEL_PROJECT_PRODUCTION_URL sin protocolo,
   * y siempre apunta al dominio de producción (no al de cada preview).
   * Con el dominio propio conectado conviene fijar NEXT_PUBLIC_SITE_URL,
   * que gana sobre ella.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : undefined) ??
    'http://localhost:3000',

  phoneDisplay: '+54 9 381 358 6755',
  /** E.164, el formato que esperan schema.org y los buscadores. */
  phoneE164: '+5493813586755',

  address: {
    /** PENDIENTE: calle y número del local. Sin esto no se publica la dirección. */
    street: '',
    locality: 'Tafí del Valle',
    region: 'Tucumán',
    postalCode: 'T4137',
    country: 'AR',
  },

  /** PENDIENTE: confirmar con el cliente. Formato schema.org. */
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '20:00' },
  ],

  /** Localidades donde efectivamente entrega. Alimenta `areaServed`. */
  areaServed: [
    'Tafí del Valle',
    'El Mollar',
    'Amaicha del Valle',
    'San Miguel de Tucumán',
    'Yerba Buena',
    'Provincia de Tucumán',
  ],

  /** PENDIENTE: cargar las URLs reales cuando existan los perfiles. */
  social: {
    instagram: '',
    facebook: '',
    tiktok: '',
    /** URL corta de la ficha de Google (Maps), cuando esté creada. */
    googleBusiness: '',
  } as Record<string, string>,
}

/** No publicamos dirección hasta tenerla real: un dato falso en los datos
 *  estructurados es peor que no tener dato. */
export const hasPublicAddress = site.address.street.trim().length > 0

/** Perfiles oficiales para `sameAs`. Solo los que existen. */
export const socialProfiles = Object.values(site.social).filter(
  (url) => url.length > 0,
)
