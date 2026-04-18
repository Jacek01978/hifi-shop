import React, { useRef } from 'react'
import * as Icons from '../icons'

const CAT_COLORS = {
  kabel: { text: 'text-gold', border: 'border-gold', bar: 'bg-gold', glow: 'rgba(201,168,76,0.15)' },
}

export default function GroupCard({ products, groupLabel, style, onShowVariants }) {
  const cardRef = useRef(null)
  const colors  = CAT_COLORS[products[0].cat] ?? CAT_COLORS.kabel
  const first   = products[0]

  const onMouseMove = (e) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width  - 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5
    el.style.transform = `perspective(700px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.015)`
    el.style.boxShadow = `${-x * 20}px ${-y * 20}px 40px ${colors.glow}, 0 0 0 1px rgba(201,168,76,0.12)`
    const shine = el.querySelector('.card-shine')
    if (shine) shine.style.background = `radial-gradient(circle at ${(x+0.5)*100}% ${(y+0.5)*100}%, rgba(255,255,255,0.04) 0%, transparent 60%)`
  }

  const onMouseLeave = () => {
    const el = cardRef.current
    if (!el) return
    el.style.transform = ''
    el.style.boxShadow = ''
    const shine = el.querySelector('.card-shine')
    if (shine) shine.style.background = ''
  }

  return (
    <article
      ref={cardRef}
      className="reveal group relative flex flex-col overflow-hidden bg-obsidian-50 border border-obsidian-200 transition-all duration-300"
      style={{ ...style, willChange: 'transform' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="card-shine absolute inset-0 pointer-events-none z-10 transition-all duration-200" />
      <div className={`absolute top-0 left-0 w-full h-[1.5px] ${colors.bar} scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100`} />

      <div className="relative z-20 flex flex-col gap-5 p-7 flex-1">

        {/* Tag + Varianten-Badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className={`block w-4 h-px ${colors.bar}`} />
            <span className={`font-mono text-[0.52rem] tracking-[0.3em] uppercase ${colors.text}`}>
              {groupLabel}
            </span>
          </div>
          <span className={`font-mono text-[0.5rem] tracking-[0.15em] uppercase px-2.5 py-1 border ${colors.border} ${colors.text} bg-gold/[0.06]`}>
            {products.length} Varianten
          </span>
        </div>

        {/* Icon */}
        <span className="text-3xl leading-none select-none w-12 h-12 flex items-center justify-center rounded-full bg-obsidian-100 border border-obsidian-300 group-hover:border-gold/20 transition-colors duration-300">
          {first.iconComponent
            ? React.createElement(Icons[first.iconComponent], { size: 26, color: '#c9a84c' })
            : first.icon}
        </span>

        {/* Gruppenname */}
        <h3 className="font-display text-[1.3rem] font-normal text-cream leading-snug tracking-[0.01em]">
          {groupLabel}
        </h3>

        {/* Variantenliste */}
        <ul className="flex flex-col gap-2 flex-1">
          {products.map((p) => (
            <li key={p.id} className="flex items-center gap-2.5">
              <span className="block w-2 h-px bg-gold/40 shrink-0" />
              <span className="font-mono text-[0.58rem] text-stone tracking-[0.02em]">{p.name}</span>
              <span className="font-mono text-[0.55rem] text-gold ml-auto shrink-0">{p.price} €</span>
            </li>
          ))}
        </ul>

        <div className="h-px bg-obsidian-300 group-hover:bg-gold/20 transition-colors duration-300" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <p className="font-mono text-[0.5rem] text-muted tracking-[0.06em] opacity-50">* Affiliate-Links</p>
          <button
            onClick={onShowVariants}
            className={`shimmer-sweep relative inline-flex items-center gap-2 font-mono text-[0.58rem] tracking-[0.18em] uppercase bg-obsidian-100 ${colors.text} ${colors.border} border px-4 py-2.5 transition-all duration-300 hover:bg-gold/10 overflow-hidden`}
          >
            Alle anzeigen
            <svg width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 9L9 1M9 1H3M9 1V7" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(to top, ${colors.glow}, transparent)` }}
      />
    </article>
  )
}
