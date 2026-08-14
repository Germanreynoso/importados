import { site } from '@/lib/site'

/**
 * Las respuestas son autocontenidas a propósito: nombran el negocio, la
 * localidad y la provincia sin depender del resto de la página. Así funcionan
 * tanto en el acordeón como recortadas por Google o citadas por un asistente
 * de IA, que es donde más se lee este contenido.
 */
export const faqs = [
  {
    q: '¿Dónde están ubicados?',
    a: `${site.name} es un local de tecnología y accesorios importados en Tafí del Valle, provincia de Tucumán. Podés pasar por el local o escribirnos por WhatsApp al ${site.phoneDisplay} para coordinar.`,
  },
  {
    q: '¿Hacen envíos a San Miguel de Tucumán y al resto de la provincia?',
    a: 'Sí. Enviamos a toda la provincia de Tucumán: San Miguel de Tucumán, Yerba Buena, El Mollar, Amaicha del Valle y demás localidades. Coordinamos el envío por WhatsApp según dónde estés, para que llegue de la forma más rápida y económica.',
  },
  {
    q: '¿Puedo retirar el pedido en el local de Tafí del Valle?',
    a: 'Sí, podés retirar sin costo por nuestro local en Tafí del Valle. Escribinos antes por WhatsApp para confirmar que tenemos stock del producto y no hacer el viaje en vano.',
  },
  {
    // PENDIENTE: detallar los medios de pago reales (efectivo, transferencia,
    // tarjeta). Concretar esta respuesta ayuda al posicionamiento y evita consultas.
    q: '¿Cómo se realizan los pagos?',
    a: 'Aceptamos múltiples métodos de pago. Al escribirnos por WhatsApp te pasamos todas las opciones disponibles y coordinamos la que más te convenga.',
  },
  {
    q: '¿Cuánto demora la entrega?',
    a: 'En Tafí del Valle la entrega es el mismo día o al día siguiente. Al resto de la provincia de Tucumán, generalmente entre 24 y 72 hs hábiles según el método de envío. Te confirmamos el plazo exacto al momento de la compra.',
  },
  {
    q: '¿Los productos tienen garantía?',
    a: 'Sí, todos nuestros productos cuentan con garantía. Ante cualquier inconveniente, escribinos por WhatsApp y te ayudamos a resolverlo lo antes posible.',
  },
  {
    q: '¿Cómo compro?',
    a: `Agregá los productos que te interesen al carrito y tocá "Consultar por WhatsApp": nos llega tu pedido con los productos y el total, y te respondemos para cerrar la compra. También podés escribirnos directo al ${site.phoneDisplay}.`,
  },
]
