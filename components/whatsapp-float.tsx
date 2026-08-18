'use client'

import { motion } from 'framer-motion'
import { WhatsAppIcon } from '@/components/icons'
import { whatsappLink } from '@/lib/products'

export function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappLink('Hola! Quería hacer una consulta sobre sus productos.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg shadow-black/25 transition-transform hover:scale-110"
    >
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-whatsapp opacity-30" />
      <WhatsAppIcon className="relative size-7" />
    </motion.a>
  )
}
