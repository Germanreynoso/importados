import { faqs } from '@/lib/faqs'
import { products } from '@/lib/products'
import { hasPublicAddress, site, socialProfiles } from '@/lib/site'

const STORE_ID = `${site.url}/#tienda`

/**
 * El negocio: qué es, dónde está y hasta dónde entrega.
 * Es la pieza que le permite a Google y a los asistentes de IA entender que
 * esto es un local de Tafí del Valle y no un e-commerce genérico.
 */
function storeSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Store',
    '@id': STORE_ID,
    name: site.name,
    description: site.description,
    url: site.url,
    image: `${site.url}/logo.png`,
    logo: `${site.url}/logo.png`,
    telephone: site.phoneE164,
    priceRange: '$$',
    currenciesAccepted: 'ARS',
    ...(socialProfiles.length > 0 && { sameAs: socialProfiles }),
    // Sin dirección real no se publica: un dato inventado acá le hace perder
    // confianza al negocio ante Google.
    ...(hasPublicAddress && {
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address.street,
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        postalCode: site.address.postalCode,
        addressCountry: site.address.country,
      },
    }),
    ...(!hasPublicAddress && {
      address: {
        '@type': 'PostalAddress',
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
    }),
    areaServed: site.areaServed.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
    openingHoursSpecification: site.openingHours.map((slot) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: site.phoneE164,
      availableLanguage: ['es-AR'],
      areaServed: 'AR',
    },
  }
}

/** El catálogo. Los productos sin precio se publican sin oferta, no en cero. */
function catalogSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Catálogo de ${site.name}`,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        '@id': `${site.url}/#producto-${product.id}`,
        name: product.name,
        ...(product.image && { image: `${site.url}${product.image}` }),
        ...(product.price !== null && {
          offers: {
            '@type': 'Offer',
            price: product.price,
            priceCurrency: 'ARS',
            availability: 'https://schema.org/InStock',
            seller: { '@id': STORE_ID },
            areaServed: site.address.region,
          },
        }),
      },
    })),
  }
}

/** Las preguntas frecuentes, que es lo que más citan los asistentes de IA. */
function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}

export function buildStructuredData() {
  return [storeSchema(), catalogSchema(), faqSchema()]
}

/** `<` escapado para que un nombre de producto no pueda cerrar el <script>. */
export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
