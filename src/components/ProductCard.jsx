import React from 'react'
import { ACCENT, ACCENT_BAR } from '../data/products'

export default function ProductCard({ product, index }) {
  const accentText = ACCENT[product.cat] ?? 'text-gold border-gold'
  const accentBar  = ACCENT_BAR[product.cat] ?? 'bg-gold'

  return (
    <article
      className="group relative bg-obsidian flex flex-col gap-4 p-8 overflow-hidden animate-fade-up"
      style={{ animationDelay: `${index * 0.07}s`, animationFillMode: 'both' }}
    >
      {/* Hover bottom bar */}
      <div
        className={`absolute bottom-0 left-0 w-full h-[2px] ${accentBar} scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100`}
      />

      {/* Subtle hover bg */}
      <div className="absolute inset-0 bg-obsidian-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Content */}
      <div className="relative flex flex-col gap-4 flex-1">
        {/* Tag */}
        <span className={`flex items-center gap-2 text-[0.55rem] tracking-[0.25em] uppercase font-mono ${accentText.split(' ')[0]}`}>
          <span className={`block w-4 h-px ${accentBar}`} />
          {product.cat.charAt(0).toUpperCase() + product.cat.slice(1)}
        </span>

        {/* Icon */}
        <span className="text-4xl leading-none select-none">{product.icon}</span>

        {/* Name */}
        <h3 className="font-display text-xl font-normal text-cream leading-snug">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-[0.62rem] leading-[1.85] text-muted tracking-[0.04em] flex-1">
          {product.desc}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-obsidian-200 mt-auto">
          <div>
            <span className="font-display text-2xl font-light text-gold">
              {product.price} <span className="font-mono text-[0.65rem] text-muted align-middle">€</span>
            </span>
            <p className="text-[0.55rem] text-muted tracking-[0.08em] mt-1 opacity-60">* Affiliate-Link</p>
          </div>

          <a
            href={product.href}
            target="_blank"
            rel="noopener sponsored"
            className="inline-flex items-center gap-2 font-mono text-[0.6rem] tracking-[0.18em] uppercase bg-gold text-obsidian px-4 py-2 no-underline transition-all duration-250 hover:bg-gold-light hover:-translate-y-px"
          >
            Angebot
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 9L9 1M9 1H3M9 1V7" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}
