import React, { useRef } from 'react'
import * as Icons from '../icons'

const CAT_COLORS = {
  kabel:        { text: 'text-gold',      border: 'border-gold',      bar: 'bg-gold',      glow: 'rgba(201,168,76,0.15)' },
  sicherungen:  { text: 'text-blue-400',  border: 'border-blue-400',  bar: 'bg-blue-400',  glow: 'rgba(96,165,250,0.15)' },
  absorber:     { text: 'text-emerald-400', border: 'border-emerald-400', bar: 'bg-emerald-400', glow: 'rgba(52,211,153,0.15)' },
  reinigung:    { text: 'text-rose-400',    border: 'border-rose-400',    bar: 'bg-rose-400',    glow: 'rgba(251,113,133,0.15)' },
  netzleisten:    { text: 'text-violet-400', border: 'border-violet-400', bar: 'bg-violet-400', glow: 'rgba(167,139,250,0.15)' },
  phasendetektor: { text: 'text-cyan-400',   border: 'border-cyan-400',   bar: 'bg-cyan-400',   glow: 'rgba(34,211,238,0.15)' },
  usb:            { text: 'text-sky-400',    border: 'border-sky-400',    bar: 'bg-sky-400',    glow: 'rgba(56,189,248,0.15)' },
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
            <p className="font-mono text-[0.62rem] text-muted tracking-[0.06em] mt-0.5 opacity-70">
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
