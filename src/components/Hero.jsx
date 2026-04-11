import React, { useEffect, useRef } from 'react'

const BARS = [3,5,8,12,7,10,14,9,6,11,8,5,13,7,4,10,12,6,9,3,11,8,14,5,7]

export default function Hero() {
  const waveRef = useRef(null)

  useEffect(() => {
    if (!waveRef.current) return
    const bars = waveRef.current.querySelectorAll('.wave-bar')
    let frame
    const animate = () => {
      bars.forEach((bar, i) => {
        const t = Date.now() / 1000
        const h = 20 + Math.abs(Math.sin(t * 1.5 + i * 0.4)) * 60
        bar.style.height = h + '%'
      })
      frame = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Ambient background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(201,168,76,0.06) 0%, transparent 65%)'
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 50% 80% at 10% 60%, rgba(201,168,76,0.03) 0%, transparent 65%)'
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2) 30%, rgba(201,168,76,0.2) 70%, transparent)' }}
        />
      </div>

      {/* Decorative rotating rings – right side */}
      <div className="hidden lg:block absolute right-16 xl:right-24 top-1/2 -translate-y-1/2 pointer-events-none">
        {/* Outer ring */}
        <div className="absolute -inset-16 rounded-full border border-gold/[0.06] animate-spin-slow" />
        {/* Mid ring */}
        <div className="absolute -inset-8 rounded-full border border-gold/[0.1] animate-spin-slow-reverse" />
        {/* Main ring */}
        <div className="w-64 h-64 xl:w-80 xl:h-80 rounded-full border border-gold/[0.18] flex items-center justify-center animate-pulse-glow">
          {/* Inner decorative */}
          <div className="absolute inset-6 rounded-full border border-gold/[0.08]" />
          <div className="absolute inset-12 rounded-full border border-gold/[0.05]" />

          {/* Center symbol */}
          <div className="w-20 h-20 rounded-full border border-gold/30 flex items-center justify-center bg-obsidian-100/60 backdrop-blur-sm">
            <span className="font-display text-3xl text-gradient-gold animate-float">♫</span>
          </div>
        </div>

        {/* Floating dots */}
        {[0,60,120,180,240,300].map((deg, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-gold/40"
            style={{
              top: '50%', left: '50%',
              transform: `rotate(${deg}deg) translateY(-${140 + (i % 2) * 24}px)`,
              animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 px-8 lg:px-14 pt-32 pb-20 max-w-3xl">

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="block w-10 h-px bg-gold/60" />
          <span className="font-mono text-[0.55rem] tracking-[0.4em] uppercase text-gold/70">
            Curated HiFi Accessories
          </span>
          <span className="block w-10 h-px bg-gold/60" />
        </div>

        {/* Headline */}
        <h1
          className="font-display font-light leading-[1.04] text-cream mb-8 animate-fade-up"
          style={{ fontSize: 'clamp(3.2rem, 6.5vw, 6rem)', animationDelay: '0.2s' }}
        >
          Der Klang<br />
          liegt im{' '}
          <em className="text-gradient-gold not-italic relative">
            Detail.
            <span
              className="absolute -bottom-2 left-0 h-px w-full opacity-60"
              style={{ background: 'linear-gradient(90deg, #c9a84c, transparent)' }}
            />
          </em>
        </h1>

        {/* Subline */}
        <p
          className="font-mono text-[0.68rem] leading-[2] text-muted tracking-[0.06em] max-w-md mb-12 animate-fade-up"
          style={{ animationDelay: '0.35s' }}
        >
          Handverlesenes HiFi-Zubehör für audiophile Ansprüche.<br />
          Kabel, Sicherungen, Absorber & Reinigungsmittel –<br />
          sorgfältig kuratiert, direkt verlinkt.
        </p>

        {/* CTA row */}
        <div className="flex items-center gap-6 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <a
            href="#products"
            className="group inline-flex items-center gap-3 font-mono text-[0.62rem] tracking-[0.2em] uppercase bg-gold text-obsidian px-7 py-3.5 no-underline transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]"
          >
            Produkte entdecken
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 11L11 1M11 1H4M11 1V8" />
            </svg>
          </a>
          <span className="font-mono text-[0.55rem] tracking-[0.15em] uppercase text-muted">
            {25} Premium-Produkte
          </span>
        </div>
      </div>

      {/* Animated sound wave bar – bottom */}
      <div
        ref={waveRef}
        className="absolute bottom-10 left-8 lg:left-14 flex items-end gap-[3px] h-10 opacity-30 animate-fade-in"
        style={{ animationDelay: '0.8s' }}
        aria-hidden="true"
      >
        {BARS.map((_, i) => (
          <div
            key={i}
            className="wave-bar w-[3px] bg-gold rounded-full transition-all"
            style={{
              height: '30%',
              transitionDuration: `${300 + i * 20}ms`,
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 lg:right-14 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-[0.5rem] tracking-[0.3em] uppercase text-gold rotate-90 origin-center mb-2">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  )
}
