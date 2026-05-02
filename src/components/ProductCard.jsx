import React, { useRef } from 'react'
import * as Icons from '../icons'

const CAT_COLORS = {
  kabel:          { text: 'text-gold',        border: 'border-gold',        bar: 'bg-gold',        glow: 'rgba(201,168,76,0.15)' },
  sicherungen:    { text: 'text-amber-300',   border: 'border-amber-300',   bar: 'bg-amber-300',   glow: 'rgba(252,211,77,0.15)' },
  absorber:       { text: 'text-stone-300',   border: 'border-stone-300',   bar: 'bg-stone-300',   glow: 'rgba(214,211,209,0.12)' },
  reinigung:      { text: 'text-amber-200',   border: 'border-amber-200',   bar: 'bg-amber-200',   glow: 'rgba(253,230,138,0.12)' },
  netzleisten:    { text: 'text-orange-300',  border: 'border-orange-300',  bar: 'bg-orange-300',  glow: 'rgba(253,186,116,0.15)' },
  phasendetektor: { text: 'text-yellow-500',  border: 'border-yellow-500',  bar: 'bg-yellow-500',  glow: 'rgba(234,179,8,0.15)'  },
  usb:            { text: 'text-amber-400',   border: 'border-amber-400',   bar: 'bg-amber-400',   glow: 'rgba(251,191,36,0.15)' },
}

export default function ProductCard({ product, style, onClick }) {
  const cardRef = useRef(null)
  const colors  = CAT_COLORS[product.cat] ?? CAT_COLORS.kabel

  return (
    <article
      ref={cardRef}
      className="reveal relative flex flex-col gap-0 overflow-hidden bg-obsidian-50 border border-obsidian-200 cursor-pointer"
      style={style}
      onClick={onClick}
    >
      {/* Top accent bar */}
      <div className={`absolute top-0 left-0 w-full h-[1.5px] ${colors.bar}`} />

      {/* Content */}
      <div className="relative z-20 flex flex-col gap-5 p-7 flex-1">

        {/* Category tag */}
        <div className="flex items-center gap-2.5">
          <span className={`block w-4 h-px ${colors.bar}`} />
          <span className={`font-mono text-[0.52rem] tracking-[0.3em] uppercase ${colors.text}`}>
            {product.cat}
          </span>
        </div>

        {/* Icon */}
        <span className="text-3xl leading-none select-none w-12 h-12 flex items-center justify-center rounded-full bg-obsidian-100 border border-obsidian-300">
          {product.iconComponent
            ? React.createElement(Icons[product.iconComponent], { size: 26, color: '#c9a84c' })
            : product.icon}
        </span>

        {/* Title */}
        <h3 className="font-display text-[1.6rem] font-semibold text-cream leading-snug tracking-[0.01em]">
          {product.name}
        </h3>

        {/* Description */}
        <p className="font-mono text-[0.75rem] leading-[1.8] text-stone tracking-[0.02em] flex-1">
          {product.desc}
        </p>

        {/* Divider */}
        <div className="h-px bg-obsidian-300" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div>
            <span className={`font-display text-[2.1rem] font-semibold ${colors.text}`}>
              {product.price}
            </span>
            <span className="font-mono text-[0.8rem] text-muted ml-1">€</span>
            <p className="font-mono text-[0.74rem] text-stone tracking-[0.06em] mt-0.5">
              * Affiliate-Link
            </p>
          </div>

          <a
            href={product.href}
            target="_blank"
            rel="noopener sponsored"
            className={`shimmer-sweep relative inline-flex items-center gap-2 font-mono text-[0.72rem] font-bold tracking-[0.14em] uppercase bg-obsidian-100 ${colors.text} ${colors.border} border px-5 py-3 no-underline transition-all duration-300 hover:bg-gold/10 overflow-hidden`}
          >
            Zum Angebot
            <svg width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 9L9 1M9 1H3M9 1V7" />
            </svg>
          </a>
        </div>
      </div>

    </article>
  )
}
