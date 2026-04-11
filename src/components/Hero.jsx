import React from 'react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-obsidian-200 px-8 lg:px-12 py-28 lg:py-36">
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 85% 50%, rgba(201,168,76,0.07) 0%, transparent 70%), radial-gradient(ellipse 40% 80% at 8% 50%, rgba(201,168,76,0.03) 0%, transparent 70%)',
        }}
      />
      {/* Top gold line */}
      <div
        className="absolute top-0 left-8 right-8 h-px opacity-40"
        style={{ background: 'linear-gradient(90deg, transparent, #8a6f30, transparent)' }}
      />

      {/* Content */}
      <div className="relative max-w-2xl">
        <div className="mb-6 flex items-center gap-4 text-gold text-[0.6rem] tracking-[0.35em] uppercase">
          <span className="block w-8 h-px bg-gold" />
          Curated HiFi Accessories
        </div>

        <h1 className="font-display font-light leading-[1.05] text-cream mb-6"
            style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>
          Der Klang<br />
          liegt im <em className="text-gold not-italic">Detail.</em>
        </h1>

        <p className="text-[0.7rem] leading-[1.9] text-muted tracking-[0.05em] max-w-md">
          Handverlesenes HiFi-Zubehör für audiophile Ansprüche. Kabel, Sicherungen,
          Absorber und Reinigungsmittel – sorgfältig kuratiert, direkt verlinkt.
        </p>
      </div>

      {/* Decorative circle */}
      <div
        className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 w-72 h-72 items-center justify-center rounded-full"
        style={{ border: '1px solid rgba(201,168,76,0.12)' }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-5 rounded-full"
          style={{ border: '1px solid rgba(201,168,76,0.07)' }}
        />
        <div
          className="w-28 h-28 rounded-full flex items-center justify-center font-display text-4xl text-gold-dim animate-spin-slow"
          style={{ border: '1px solid rgba(201,168,76,0.18)' }}
        >
          ♫
        </div>
      </div>
    </section>
  )
}
