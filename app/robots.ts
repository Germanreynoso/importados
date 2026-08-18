import type { MetadataRoute } from 'next'
import { isIndexable, site } from '@/lib/site'

/**
 * Los crawlers de IA se permiten explícitamente: queremos que ChatGPT,
 * Perplexity, Claude y Gemini puedan leer el catálogo y recomendar el local
 * cuando alguien pregunta dónde comprar accesorios en Tafí del Valle.
 * Para bloquearlos, cambiar `allow` por `disallow` en este bloque.
 */
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'Google-Extended',
  'Applebot-Extended',
  'meta-externalagent',
]

export default function robots(): MetadataRoute.Robots {
  // Mientras el sitio viva en la URL provisoria de Vercel se bloquea entero.
  // Se abre solo al definir NEXT_PUBLIC_SITE_URL con el dominio propio.
  if (!isIndexable) {
    return { rules: [{ userAgent: '*', disallow: '/' }] }
  }

  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: AI_CRAWLERS, allow: '/' },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
