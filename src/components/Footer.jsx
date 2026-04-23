import React from 'react'

const year = new Date().getFullYear()
const FREQ_BARS = [4,7,10,14,11,8,6,12,9,5,13,7,10,4,8,11,6,9,5,12]

export default function Footer({ onNavigate }) {
  return (
    <footer className="border-t border-obsidian-200 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(201,168,76,0.04) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 px-8 lg:px-14 pt-14 pb-10">

        {/* Brand */}
        <div>
          <a href="#" className="inline-flex items-center gap-3 no-underline mb-5 block">
            <div className="w-6 h-6 rounded-full border border-gold/40 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gold/60" />
            </div>
            <span className="font-display text-[1.4rem] font-light tracking-[0.15em] text-cream">
              Audio<em className="text-gradient-gold not-italic">Pure</em>
            </span>
          </a>
          <p className="font-mono text-[0.58rem] leading-[1.9] text-muted tracking-[0.04em] mb-6">
            Kuratiertes HiFi-Zubehör<br />
            für audiophile Ansprüche.<br />
            Made with ♫ in Deutschland.
          </p>

          {/* Mini frequency bars */}
          <div className="flex items-end gap-[2px] h-6 opacity-25" aria-hidden="true">
            {FREQ_BARS.map((h, i) => (
              <div
                key={i}
                className="w-[2px] bg-gold rounded-full"
                style={{ height: `${h * 7}%` }}
              />
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-mono text-[0.55rem] tracking-[0.28em] uppercase text-gold/60 mb-5">
            Kategorien
          </h4>
          {['Kabel & Verbinder', 'Sicherungen', 'Absorber & Spikes', 'Reinigungsmittel'].map((item) => (
            <a
              key={item}
              href="#"
              className="group flex items-center gap-2 font-mono text-[0.58rem] text-muted no-underline mb-3 tracking-[0.05em] hover:text-stone transition-colors duration-300"
            >
              <span className="block w-0 h-px bg-gold/50 transition-all duration-300 group-hover:w-3" />
              {item}
            </a>
          ))}
          <button
            onClick={() => onNavigate?.('tipps')}
            className="group flex items-center gap-2 font-mono text-[0.58rem] text-muted mb-3 tracking-[0.05em] hover:text-gold transition-colors duration-300"
          >
            <span className="block w-0 h-px bg-gold/50 transition-all duration-300 group-hover:w-3" />
            HiFi Tipps
          </button>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-mono text-[0.55rem] tracking-[0.28em] uppercase text-gold/60 mb-5">
            Rechtliches
          </h4>
          <button
            onClick={() => onNavigate?.('impressum')}
            className="group flex items-center gap-2 font-mono text-[0.58rem] text-muted mb-3 tracking-[0.05em] hover:text-gold transition-colors duration-300"
          >
            <span className="block w-0 h-px bg-gold/50 transition-all duration-300 group-hover:w-3" />
            Impressum
          </button>
          {['Datenschutz', 'Affiliate-Hinweis', 'Kontakt'].map((item) => (
            <a
              key={item}
              href="#"
              className="group flex items-center gap-2 font-mono text-[0.58rem] text-muted no-underline mb-3 tracking-[0.05em] hover:text-stone transition-colors duration-300"
            >
              <span className="block w-0 h-px bg-gold/50 transition-all duration-300 group-hover:w-3" />
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-3 border-t border-obsidian-200 px-8 lg:px-14 py-5">
        <span className="font-mono text-[0.52rem] text-muted tracking-[0.12em]">
          © {year} AudioPure. Alle Rechte vorbehalten.
        </span>
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-gold/40" />
          <span className="font-mono text-[0.52rem] text-muted tracking-[0.1em]">
            Affiliate-Shop · Keine direkte Kaufabwicklung
          </span>
        </div>
      </div>
    </footer>
  )
}
