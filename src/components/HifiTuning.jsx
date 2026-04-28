import React from 'react'

export default function HifiTuning({ onNavigate }) {
  return (
    <section className="min-h-screen pt-32 pb-24 px-8 lg:px-14 max-w-3xl">

      {/* Back button */}
      <button
        onClick={() => onNavigate('shop')}
        className="flex items-center gap-2 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted hover:text-gold transition-colors duration-300 mb-12"
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 1L1 9M1 9H7M1 9V3" />
        </svg>
        Zurück zum Shop
      </button>

      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        <span className="block w-8 h-px bg-gold/60" />
        <span className="font-mono text-[0.52rem] tracking-[0.35em] uppercase text-gold/70">Optimierung</span>
      </div>
      <h1
        className="font-display font-light text-cream tracking-[0.03em] mb-6"
        style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
      >
        HiFi Tuning
      </h1>
      <p className="font-mono text-[0.78rem] leading-[2] text-stone tracking-[0.04em] mb-16 max-w-xl">
        Praxistipps & Empfehlungen zur Optimierung deiner HiFi-Anlage –<br />
        von der Aufstellung bis zur Verkabelung.
      </p>

      {/* Photo */}
      <div className="relative overflow-hidden mb-6">
        <img
          src="/hifi-tuning.jpeg"
          alt="ASR Emitter II Exclusive HiFi Anlage"
          className="w-full object-cover"
          style={{ maxHeight: '520px', filter: 'brightness(0.95) contrast(1.05)', display: 'block' }}
        />

        {/* Vignette – alle vier Seiten */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `
            linear-gradient(to bottom, rgba(8,8,8,0.75) 0%, transparent 22%),
            linear-gradient(to top,    rgba(8,8,8,0.85) 0%, transparent 28%),
            linear-gradient(to right,  rgba(8,8,8,0.7)  0%, transparent 18%),
            linear-gradient(to left,   rgba(8,8,8,0.7)  0%, transparent 18%)
          `
        }} />

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-5 z-10">
          <p className="font-mono text-[0.58rem] tracking-[0.2em] uppercase text-gold/70">
            ASR Emitter II Exclusive · Battery Power Supply · PMC Lautsprecher
          </p>
        </div>
      </div>

      {/* Placeholder */}
      <div className="border border-obsidian-200 p-10 flex flex-col items-center gap-4 text-center">
        <span className="font-display text-4xl text-gold/20">⚙</span>
        <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-muted">
          Weitere Inhalte folgen in Kürze
        </p>
      </div>

    </section>
  )
}
