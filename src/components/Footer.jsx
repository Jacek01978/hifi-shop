import React from 'react'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-obsidian-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8 lg:px-12 py-12">
        {/* Brand */}
        <div>
          <a href="#" className="font-display text-xl font-light tracking-[0.18em] text-gold no-underline block mb-3">
            Audio<span className="text-cream italic">Pure</span>
          </a>
          <p className="font-mono text-[0.6rem] leading-[1.8] text-muted tracking-[0.04em]">
            Kuratiertes HiFi-Zubehör für<br />
            audiophile Ansprüche.<br />
            Made with ♫ in Deutschland.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-gold-dim mb-4">
            Kategorien
          </h4>
          {['Kabel & Verbinder', 'Sicherungen', 'Absorber & Spikes', 'Reinigungsmittel'].map((item) => (
            <a
              key={item}
              href="#"
              className="block font-mono text-[0.6rem] text-muted no-underline mb-2 tracking-[0.05em] hover:text-stone transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-gold-dim mb-4">
            Rechtliches
          </h4>
          {['Impressum', 'Datenschutz', 'Affiliate-Hinweis', 'Kontakt'].map((item) => (
            <a
              key={item}
              href="#"
              className="block font-mono text-[0.6rem] text-muted no-underline mb-2 tracking-[0.05em] hover:text-stone transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 border-t border-obsidian-200 px-8 lg:px-12 py-4">
        <span className="font-mono text-[0.55rem] text-muted tracking-[0.1em]">
          © {year} AudioPure. Alle Rechte vorbehalten.
        </span>
        <span className="font-mono text-[0.55rem] text-muted tracking-[0.1em]">
          Affiliate-Shop · Keine direkte Kaufabwicklung
        </span>
      </div>
    </footer>
  )
}
