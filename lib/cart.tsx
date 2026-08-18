'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { formatPrice, products, whatsappLink, type Product } from '@/lib/products'

const STORAGE_KEY = 'importados-tafi:cart:v1'
const MAX_QTY = 99

/** Lo único que se persiste. Nombres y precios salen siempre del catálogo. */
type CartLine = { id: string; qty: number }

export type CartItem = { product: Product; qty: number }

type CartContextValue = {
  items: CartItem[]
  count: number
  total: number
  /** true si algún producto del carrito todavía no tiene precio cargado */
  hasUnpriced: boolean
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  add: (product: Product) => void
  setQty: (id: string, qty: number) => void
  remove: (id: string) => void
  clear: () => void
  whatsappHref: string
}

const CartContext = createContext<CartContextValue | null>(null)

const catalog = new Map(products.map((p) => [p.id, p]))

function readStoredLines(): CartLine[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.flatMap((line) => {
      if (typeof line !== 'object' || line === null) return []
      const { id, qty } = line as Partial<CartLine>
      // Un producto dado de baja del catálogo se descarta al rehidratar.
      if (typeof id !== 'string' || !catalog.has(id)) return []
      if (typeof qty !== 'number' || !Number.isFinite(qty) || qty < 1) return []
      return [{ id, qty: Math.min(MAX_QTY, Math.trunc(qty)) }]
    })
  } catch {
    return []
  }
}

function buildMessage(items: CartItem[], total: number, hasUnpriced: boolean) {
  const detail = items.map(({ product, qty }) => {
    const subtotal =
      product.price === null ? 'a confirmar' : formatPrice(product.price * qty)
    return `• ${qty}x ${product.name} — ${subtotal}`
  })

  const totalLine =
    total === 0 && hasUnpriced
      ? 'Total: a confirmar'
      : `Total: ${formatPrice(total)}${hasUnpriced ? ' (+ a confirmar)' : ''}`

  return ['Hola! Quiero consultar por:', '', ...detail, '', totalLine].join('\n')
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])
  const [isOpen, setIsOpen] = useState(false)
  // El carrito se lee recién en el cliente para no romper la hidratación.
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setLines(readStoredLines())
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
    } catch {
      // Modo privado o storage lleno: el carrito sigue funcionando en memoria.
    }
  }, [lines, hydrated])

  const add = useCallback((product: Product) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.id === product.id)
      if (!existing) return [...prev, { id: product.id, qty: 1 }]
      return prev.map((l) =>
        l.id === product.id ? { ...l, qty: Math.min(MAX_QTY, l.qty + 1) } : l,
      )
    })
  }, [])

  const setQty = useCallback((id: string, qty: number) => {
    setLines((prev) =>
      qty < 1
        ? prev.filter((l) => l.id !== id)
        : prev.map((l) =>
            l.id === id ? { ...l, qty: Math.min(MAX_QTY, Math.trunc(qty)) } : l,
          ),
    )
  }, [])

  const remove = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.id !== id))
  }, [])

  const clear = useCallback(() => setLines([]), [])

  const value = useMemo<CartContextValue>(() => {
    const items: CartItem[] = lines.flatMap((line) => {
      const product = catalog.get(line.id)
      return product ? [{ product, qty: line.qty }] : []
    })

    const count = items.reduce((acc, i) => acc + i.qty, 0)
    const total = items.reduce(
      (acc, i) => acc + (i.product.price ?? 0) * i.qty,
      0,
    )
    const hasUnpriced = items.some((i) => i.product.price === null)

    return {
      items,
      count,
      total,
      hasUnpriced,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      add,
      setQty,
      remove,
      clear,
      whatsappHref: items.length
        ? whatsappLink(buildMessage(items, total, hasUnpriced))
        : '',
    }
  }, [lines, isOpen, add, setQty, remove, clear])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>')
  return ctx
}
