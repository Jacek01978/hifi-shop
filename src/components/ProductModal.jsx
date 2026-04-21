import React, { useEffect } from 'react'
import * as Icons from '../icons'

const CAT_COLORS = {
  kabel:          { text: 'text-gold',       border: 'border-gold',       bar: 'bg-gold' },
  sicherungen:    { text: 'text-blue-400',   border: 'border-blue-400',   bar: 'bg-blue-400' },
  absorber:       { text: 'text-emerald-400',border: 'border-emerald-400',bar: 'bg-emerald-400' },
  reinigung:      { text: 'text-rose-400',   border: 'border-rose-400',   bar: 'bg-rose-400' },
  netzleisten:    { text: 'text-violet-400', border: 'border-violet-400', bar: 'bg-violet-400' },
  phasendetektor: { text: 'text-cyan-400',   border: 'border-cyan-400',   bar: 'bg-cyan-400' },
}

const CAT_LABELS = {
  kabel: 'Kabel', sicherungen: 'Sicherungen', absorber: 'Absorber',
  reinigung: 'Reinigung', netzleisten: 'Netzleisten', phasendetektor: 'Phasendetektor',
}

export default function ProductModal({ product, onClose }) {
  const colors = CAT_COLORS[product.cat] ?? CAT_COLORS.kabel

  // ESC-Taste schließt Modal
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 lg:p-10"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-obsidian/90 backdrop-blur-md" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-2xl bg-obsidian-50 border border-obsidian-300 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent bar */}
        <div className={`w-full h-[2px] ${colors.bar}`} />

        <div className="p-8 lg:p-10 flex flex-col gap-6">

          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-3">
              {/* Kategorie */}
              <div className="flex items-center gap-2.5">
                <span className={`block w-5 h-px ${colors.bar}`} />
                <span className={`font-mono font-medium text-[0.65rem] tracking-[0.25em] uppercase ${colors.text}`}>
                  {CAT_LABELS[product.cat] ?? product.cat}
                </span>
              </div>
              {/* Icon + Titel */}
              <div className="flex items-center gap-4">
                <span className="w-14 h-14 flex items-center justify-center rounded-full bg-obsidian-100 border border-obsidian-300 shrink-0">
                  {product.iconComponent
                    ? React.createElement(Icons[product.iconComponent], { size: 30, color: '#c9a84c' })
                    : <span className="text-2xl">{product.icon}</span>}
                </span>
                <h2 className="font-display text-[1.7rem] font-semibold text-cream leading-snug">
                  {product.name}
                </h2>
              </div>
            </div>

            {/* Schließen-Button */}
            <button
              onClick={onClose}
              className="shrink-0 w-9 h-9 flex items-center justify-center border border-obsidian-300 text-muted hover:text-cream hover:border-gold/40 transition-all duration-200 font-mono text-lg"
            >
              ×
            </button>
          </div>

          {/* Trennlinie */}
          <div className={`h-px ${colors.bar} opacity-30`} />

          {/* Beschreibung */}
          <p className="font-mono text-[0.8rem] leading-[1.9] text-stone tracking-[0.02em]">
            {product.desc}
          </p>

          {/* Preis + Button */}
          <div className="flex items-center justify-between pt-2">
            <div>
              <span className={`font-display text-[2.4rem] font-semibold ${colors.text}`}>
                {product.price}
              </span>
              <span className="font-mono text-[0.8rem] text-muted ml-1.5">€</span>
              <p className="font-mono text-[0.6rem] text-muted tracking-[0.06em] mt-1 opacity-60">
                * Affiliate-Link – Preis kann abweichen
              </p>
            </div>

            <a
              href={product.href}
              target="_blank"
              rel="noopener sponsored"
              className={`inline-flex items-center gap-2.5 font-mono font-bold text-[0.78rem] tracking-[0.14em] uppercase bg-obsidian-100 ${colors.text} ${colors.border} border px-6 py-3.5 no-underline transition-all duration-300 hover:bg-gold/10`}
            >
              Zum Angebot
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M1 9L9 1M9 1H3M9 1V7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
