import React, { useRef, useEffect, useState } from 'react'
import { CATEGORIES, KABEL_SUBCATEGORIES, REINIGUNG_SUBCATEGORIES } from '../data/products'

function FilterRow({ items, active, onChange, small = false }) {
  const containerRef = useRef(null)
  const btnRefs      = useRef({})
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 })

  useEffect(() => {
    const btn = btnRefs.current[active]
    const container = containerRef.current
    if (!btn || !container) return
    const cr = container.getBoundingClientRect()
    const br = btn.getBoundingClientRect()
    setIndicator({ left: br.left - cr.left + container.scrollLeft, width: br.width, opacity: 1 })
  }, [active])

  return (
    <div ref={containerRef} className="relative flex gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
      <div
        className="absolute bottom-0 h-[1.5px] bg-gold transition-all duration-300 ease-out"
        style={{ left: indicator.left, width: indicator.width, opacity: indicator.opacity }}
      />
      {items.map((item) => (
        <button
          key={item.id}
          ref={(el) => { btnRefs.current[item.id] = el }}
          onClick={() => onChange(item.id)}
          className={`font-mono font-extrabold tracking-[0.12em] uppercase border transition-all duration-250 whitespace-nowrap ${
            small ? 'text-[0.72rem] px-4 py-2' : 'text-[0.82rem] px-6 py-3'
          } ${
            active === item.id
              ? 'border-gold/70 text-gold bg-gold/[0.08]'
              : 'border-obsidian-300 text-stone hover:border-gold/40 hover:text-cream hover:bg-obsidian-100'
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}

export default function CategoryFilter({ active, onChangeCategory, activeSub, onChangeSub }) {
  const showKabelSubs    = active === 'kabel'
  const showReinigungSubs = active === 'reinigung'
  const showSubs = showKabelSubs || showReinigungSubs

  const subLabel = showKabelSubs ? 'Kabeltyp' : 'Kategorie'
  const subItems = showKabelSubs ? KABEL_SUBCATEGORIES : REINIGUNG_SUBCATEGORIES

  return (
    <div id="products">
      {/* Hauptkategorien */}
      <div className="flex gap-2 overflow-x-auto px-8 lg:px-14 py-5 border-b border-obsidian-200" style={{ scrollbarWidth: 'none' }}>
        <FilterRow items={CATEGORIES} active={active} onChange={onChangeCategory} />
      </div>

      {/* Unterkategorien – bei Kabel und Reinigung */}
      <div className={`overflow-hidden transition-all duration-400 ${showSubs ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex items-center gap-3 px-8 lg:px-14 py-3 border-b border-obsidian-200 bg-obsidian-50">
          <span className="font-mono text-[0.48rem] tracking-[0.3em] uppercase text-gold/50 shrink-0">{subLabel}</span>
          <div className="w-px h-4 bg-obsidian-300" />
          <FilterRow items={subItems} active={activeSub} onChange={onChangeSub} small />
        </div>
      </div>
    </div>
  )
}
