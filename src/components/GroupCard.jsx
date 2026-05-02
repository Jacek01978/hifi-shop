import React, { useRef } from 'react'
import * as Icons from '../icons'

const CAT_COLORS = {
  kabel:          { text: 'text-gold',       border: 'border-gold',       bar: 'bg-gold',       glow: 'rgba(201,168,76,0.15)'  },
  reinigung:      { text: 'text-amber-200',  border: 'border-amber-200',  bar: 'bg-amber-200',  glow: 'rgba(253,230,138,0.12)' },
  phasendetektor: { text: 'text-yellow-500', border: 'border-yellow-500', bar: 'bg-yellow-500', glow: 'rgba(234,179,8,0.15)'   },
  netzleisten:    { text: 'text-orange-300', border: 'border-orange-300', bar: 'bg-orange-300', glow: 'rgba(253,186,116,0.15)' },
  dynavox_absorber: { text: 'text-stone-300', border: 'border-stone-300', bar: 'bg-stone-300',  glow: 'rgba(214,211,209,0.12)' },
}

export default function GroupCard({ products, groupLabel, style, onShowVariants }) {
  const cardRef = useRef(null)
  const colors  = CAT_COLORS[products[0].cat] ?? CAT_COLORS.kabel
  const first   = products[0]

  return (
    <article
      ref={cardRef}
      className="reveal relative flex flex-col overflow-hidden bg-obsidian-50 border border-obsidian-200"
      style={style}
    >
      <div className={`absolute top-0 left-0 w-full h-[1.5px] ${colors.bar}`} />

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
        <span className="text-3xl leading-none select-none w-12 h-12 flex items-center justify-center rounded-full bg-obsidian-100 border border-obsidian-300">
          {first.iconComponent
            ? React.createElement(Icons[first.iconComponent], { size: 26, color: '#c9a84c' })
            : first.icon}
        </span>

        {/* Gruppenname */}
        <h3 className="font-display text-[1.6rem] font-semibold text-cream leading-snug tracking-[0.01em]">
          {groupLabel}
        </h3>

        {/* Variantenliste */}
        <ul className="flex flex-col gap-2.5 flex-1">
          {products.map((p) => (
            <li key={p.id} className="flex items-center gap-2.5">
              <span className="block w-2 h-px bg-gold/40 shrink-0" />
              <span className="font-mono text-[0.74rem] text-stone tracking-[0.02em]">{p.name}</span>
              <span className="font-mono text-[0.72rem] font-semibold text-gold ml-auto shrink-0">{p.price} €</span>
            </li>
          ))}
        </ul>

        <div className="h-px bg-obsidian-300" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <p className="font-mono text-[0.62rem] text-stone tracking-[0.06em]">* Affiliate-Links</p>
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

    </article>
  )
}
