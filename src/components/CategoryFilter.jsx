import React, { useRef, useEffect, useState } from 'react'
import { CATEGORIES } from '../data/products'

export default function CategoryFilter({ active, onChange }) {
  const containerRef = useRef(null)
  const btnRefs      = useRef({})
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 })

  useEffect(() => {
    const btn = btnRefs.current[active]
    const container = containerRef.current
    if (!btn || !container) return
    const cr = container.getBoundingClientRect()
    const br = btn.getBoundingClientRect()
    setIndicator({
      left: br.left - cr.left + container.scrollLeft,
      width: br.width,
      opacity: 1,
    })
  }, [active])

  return (
    <div
      ref={containerRef}
      className="relative flex gap-2 overflow-x-auto px-8 lg:px-14 py-5 border-b border-obsidian-200"
      style={{ scrollbarWidth: 'none' }}
      id="products"
    >
      {/* Sliding gold indicator */}
      <div
        className="absolute bottom-0 h-[1.5px] bg-gold transition-all duration-300 ease-out"
        style={{
          left: indicator.left,
          width: indicator.width,
          opacity: indicator.opacity,
        }}
      />

      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          ref={(el) => { btnRefs.current[cat.id] = el }}
          onClick={() => onChange(cat.id)}
          className={`font-mono text-[0.58rem] tracking-[0.18em] uppercase px-5 py-2.5 border transition-all duration-250 whitespace-nowrap ${
            active === cat.id
              ? 'border-gold/60 text-gold bg-gold/[0.06]'
              : 'border-obsidian-300 text-muted hover:border-gold/30 hover:text-stone hover:bg-obsidian-100'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
