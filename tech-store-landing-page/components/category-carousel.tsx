'use client'

import { useRef, useState, useCallback, useEffect, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CategoryCarouselProps {
  title: string
  icon: ReactNode
  children: ReactNode
  id: string
}

export function CategoryCarousel({ title, icon, children, id }: CategoryCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener('scroll', checkScroll, { passive: true })
    const ro = new ResizeObserver(checkScroll)
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', checkScroll)
      ro.disconnect()
    }
  }, [checkScroll])

  function scroll(direction: 'left' | 'right') {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.querySelector(':scope > *')?.getBoundingClientRect().width ?? 260
    const gap = 16
    const distance = (cardWidth + gap) * 2
    el.scrollBy({
      left: direction === 'left' ? -distance : distance,
      behavior: 'smooth',
    })
  }

  return (
    <div id={id} className="relative">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-surface-2 text-primary">
            {icon}
          </span>
          <h3 className="font-display text-xl font-extrabold tracking-tight sm:text-2xl">
            {title}
          </h3>
        </div>

        {/* Navigation arrows (desktop) */}
        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={cn(
              'flex size-9 items-center justify-center rounded-full border border-border bg-card transition-all duration-200',
              canScrollLeft
                ? 'hover:border-primary hover:text-primary'
                : 'cursor-default opacity-30',
            )}
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={cn(
              'flex size-9 items-center justify-center rounded-full border border-border bg-card transition-all duration-200',
              canScrollRight
                ? 'hover:border-primary hover:text-primary'
                : 'cursor-default opacity-30',
            )}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      {/* Fade edges */}
      {canScrollLeft && (
        <div className="pointer-events-none absolute bottom-0 left-0 top-[3.5rem] z-10 w-8 bg-gradient-to-r from-background to-transparent sm:w-12" />
      )}
      {canScrollRight && (
        <div className="pointer-events-none absolute bottom-0 right-0 top-[3.5rem] z-10 w-8 bg-gradient-to-l from-background to-transparent sm:w-12" />
      )}

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="scrollbar-hide flex gap-4 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory"
      >
        {children}
      </div>
    </div>
  )
}
