import React, { useRef, useEffect, useState, useCallback } from 'react'
import { CATEGORIES, KABEL_SUBCATEGORIES, REINIGUNG_SUBCATEGORIES } from '../data/products'

function ScrollArrow({ direction, onClick, visible }) {
  if (!visible) return null
  return (
    <button
      onClick={onClick}
      className="shrink-0 w-8 h-full flex items-center justify-center text-gold/60 hover:text-gold transition-colors duration-200 z-10"
      style={{
        background: direction === 'left'
          ? 'linear-gradient(to right, rgba(8,8,8,1) 40%, rgba(8,8,8,0))'
          : 'linear-gradient(to left, rgba(8,8,8,1) 40%, rgba(8,8,8,0))',
      }}
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        {direction === 'left'
          ? <path d="M7 1L3 5L7 9" />
          : <path d="M3 1L7 5L3 9" />
        }
      </svg>
    </button>
  )
}

function FilterRow({ items, active, onChange, small = false }) {
  const containerRef = useRef(null)
  const btnRefs      = useRef({})
  const [indicator, setIndicator]   = useState({ left: 0, width: 0, opacity: 0 })
  const [canScrollLeft, setCanScrollLeft]   = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScroll = useCallback(() => {
    const el = containerRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    checkScroll()
    el.addEventListener('scroll', checkScroll, { passive: true })
    window.addEventListener('resize', checkScroll)
    return () => {
      el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [checkScroll, items])

  useEffect(() => {
    const btn = btnRefs.current[active]
    const container = containerRef.current
    if (!btn || !container) return
    const cr = container.getBoundingClientRect()
    const br = btn.getBoundingClientRect()
    setIndicator({ left: br.left - cr.left + container.scrollLeft, width: br.width, opacity: 1 })
  }, [active])

  const scroll = (dir) => {
    const el = containerRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'left' ? -160 : 160, behavior: 'smooth' })
  }

  return (
    <div className="relative flex items-center w-full">
      <ScrollArrow direction="left"  onClick={() => scroll('left')}  visible={canScrollLeft} />
      <div
        ref={containerRef}
        className="relative flex gap-2 overflow-x-auto flex-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div
          className="absolute bottom-0 h-[1.5px] bg-gold transition-all duration-300 ease-out"
          style={{ left: indicator.left, width: indicator.width, opacity: indicator.opacity }}
        />
        {items.map((item) => (
          <button
            key={item.id}
            ref={(el) => { btnRefs.current[item.id] = el }}
            onClick={() => onChange(item.id)}
            className={`font-mono font-medium tracking-[0.16em] uppercase border transition-all duration-250 whitespace-nowrap ${
              small ? 'text-[0.66rem] px-3.5 py-1.5' : 'text-[0.72rem] px-5 py-2.5'
            } ${
              active === item.id
                ? 'border-gold text-gold bg-gold/[0.12] shadow-[0_0_12px_rgba(201,168,76,0.3)]'
                : 'border-gold/40 text-gold hover:border-gold hover:text-gold-light hover:bg-gold/[0.08] hover:shadow-[0_0_10px_rgba(201,168,76,0.2)]'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <ScrollArrow direction="right" onClick={() => scroll('right')} visible={canScrollRight} />
    </div>
  )
}

export default function CategoryFilter({ active, onChangeCategory, activeSub, onChangeSub }) {
  const showKabelSubs     = active === 'kabel'
  const showReinigungSubs = active === 'reinigung'
  const showSubs = showKabelSubs || showReinigungSubs

  const subLabel = showKabelSubs ? 'Kabeltyp' : 'Kategorie'
  const subItems = showKabelSubs ? KABEL_SUBCATEGORIES : REINIGUNG_SUBCATEGORIES

  return (
    <div id="products">
      {/* Hauptkategorien */}
      <div className="flex items-center gap-2 px-8 lg:px-14 py-5 border-b border-obsidian-200">
        <FilterRow items={CATEGORIES} active={active} onChange={onChangeCategory} />
      </div>

      {/* Unterkategorien – bei Kabel und Reinigung */}
      <div className={`overflow-hidden transition-all duration-400 ${showSubs ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex items-center gap-3 px-8 lg:px-14 py-3 border-b border-obsidian-200 bg-obsidian-50">
          <span className="font-mono text-[0.48rem] tracking-[0.3em] uppercase text-gold/50 shrink-0">{subLabel}</span>
          <div className="w-px h-4 bg-obsidian-300 shrink-0" />
          <FilterRow items={subItems} active={activeSub} onChange={onChangeSub} small />
        </div>
      </div>
    </div>
  )
}
