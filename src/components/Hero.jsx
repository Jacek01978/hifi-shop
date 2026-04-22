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

      {/* Vinyl Record – right side */}
      <div className="hidden lg:flex absolute right-16 xl:right-24 top-1/2 -translate-y-1/2 pointer-events-none items-center justify-center">

        {/* Outer pulse glow */}
        <div className="absolute w-72 h-72 xl:w-96 xl:h-96 rounded-full animate-pulse-glow"
          style={{ boxShadow: '0 0 80px rgba(201,168,76,0.18), 0 0 160px rgba(201,168,76,0.08)' }} />

        {/* Spinning vinyl disc */}
        <div
          className="w-64 h-64 xl:w-80 xl:h-80 rounded-full relative"
          style={{ animation: 'spinSlow 4s linear infinite', filter: 'drop-shadow(0 0 18px rgba(201,168,76,0.35))' }}
        >
          <svg viewBox="0 0 320 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Iridescent sheen gradient */}
              <radialGradient id="vinylSheen" cx="38%" cy="35%" r="65%">
                <stop offset="0%"   stopColor="rgba(220,80,60,0.16)"/>
                <stop offset="35%"  stopColor="rgba(201,168,76,0.12)"/>
                <stop offset="70%"  stopColor="rgba(180,60,80,0.10)"/>
                <stop offset="100%" stopColor="rgba(0,0,0,0)"/>
              </radialGradient>
              {/* Label gradient */}
              <radialGradient id="labelGrad" cx="50%" cy="40%" r="60%">
                <stop offset="0%"   stopColor="#2a1e00"/>
                <stop offset="100%" stopColor="#0f0a00"/>
              </radialGradient>
              {/* Edge highlight */}
              <radialGradient id="edgeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="88%"  stopColor="rgba(0,0,0,0)"/>
                <stop offset="96%"  stopColor="rgba(201,168,76,0.25)"/>
                <stop offset="100%" stopColor="rgba(201,168,76,0.08)"/>
              </radialGradient>
            </defs>

            {/* Main disc – deep black */}
            <circle cx="160" cy="160" r="158" fill="#0c0c0c"/>

            {/* Vinyl grooves – alternating brightness for realism */}
            {Array.from({ length: 22 }, (_, i) => 14 + i * 6).map((r, i) => (
              <circle key={i} cx="160" cy="160" r={r}
                fill="none"
                stroke={i % 2 === 0 ? 'rgba(255,255,255,0.055)' : 'rgba(255,255,255,0.018)'}
                strokeWidth={i % 4 === 0 ? '1.2' : '0.7'}
              />
            ))}

            {/* Iridescent sheen over grooves */}
            <circle cx="160" cy="160" r="158" fill="url(#vinylSheen)"/>

            {/* Edge glow ring */}
            <circle cx="160" cy="160" r="158" fill="url(#edgeGlow)"/>
            <circle cx="160" cy="160" r="157" fill="none" stroke="rgba(201,168,76,0.35)" strokeWidth="1.2"/>

            {/* Label */}
            <circle cx="160" cy="160" r="52" fill="url(#labelGrad)"/>
            <circle cx="160" cy="160" r="51" fill="none" stroke="rgba(201,168,76,0.7)" strokeWidth="1"/>
            <circle cx="160" cy="160" r="44" fill="none" stroke="rgba(201,168,76,0.25)" strokeWidth="0.6"/>

            {/* Label text arc */}
            <path id="labelArc"    d="M 118,148 A 42,42 0 0,1 202,148" fill="none"/>
            <path id="labelArcBot" d="M 122,178 A 42,42 0 0,0 198,178" fill="none"/>
            <text fontSize="7.5" fill="rgba(201,168,76,1)" fontFamily="monospace" letterSpacing="2.5" fontWeight="bold">
              <textPath href="#labelArc"    startOffset="8%">AUDIO PURE</textPath>
            </text>
            <text fontSize="5.5" fill="rgba(201,168,76,0.55)" fontFamily="monospace" letterSpacing="3">
              <textPath href="#labelArcBot" startOffset="18%">HI-FI · STEREO</textPath>
            </text>

            {/* Label center spindle */}
            <circle cx="160" cy="160" r="6"   fill="rgba(201,168,76,0.5)"/>
            <circle cx="160" cy="160" r="3.5" fill="#0c0c0c"/>
            <circle cx="160" cy="160" r="1.5" fill="rgba(201,168,76,0.8)"/>

            {/* Highlight reflection */}
            <ellipse cx="118" cy="105" rx="28" ry="10"
              fill="rgba(255,255,255,0.045)"
              transform="rotate(-38 118 105)"
            />
          </svg>
        </div>

        {/* Tonearm */}
        <div className="absolute" style={{ top: '-2%', right: '-18%' }}>
          <svg width="140" height="200" viewBox="0 0 90 130" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="armGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="rgba(240,217,140,0.9)"/>
                <stop offset="100%" stopColor="rgba(160,120,40,0.7)"/>
              </linearGradient>
            </defs>
            {/* Pivot base */}
            <circle cx="72" cy="18" r="9"  fill="#1a1400" stroke="rgba(201,168,76,0.6)" strokeWidth="1.5"/>
            <circle cx="72" cy="18" r="4.5" fill="url(#armGrad)"/>
            <circle cx="72" cy="18" r="2"  fill="#0c0c0c"/>
            {/* Arm tube with gradient */}
            <line x1="72" y1="24" x2="26" y2="112"
              stroke="url(#armGrad)" strokeWidth="3" strokeLinecap="round"/>
            {/* Headshell */}
            <line x1="26" y1="112" x2="14" y2="124"
              stroke="rgba(201,168,76,0.6)" strokeWidth="2.2" strokeLinecap="round"/>
            {/* Cartridge body */}
            <rect x="9" y="120" width="10" height="6" rx="1"
              fill="#1a1400" stroke="rgba(201,168,76,0.5)" strokeWidth="0.8"/>
            {/* Stylus tip glow */}
            <circle cx="14" cy="128" r="2.5" fill="rgba(201,168,76,0.9)"
              style={{ filter: 'drop-shadow(0 0 3px rgba(201,168,76,0.8))' }}/>
          </svg>
        </div>
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
          className="font-mono text-[0.82rem] leading-[2] text-stone tracking-[0.04em] max-w-md mb-12 animate-fade-up"
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
            className="group inline-flex items-center gap-3 font-mono text-[0.78rem] font-bold tracking-[0.16em] uppercase bg-gold text-obsidian px-7 py-3.5 no-underline transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]"
          >
            Produkte entdecken
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 11L11 1M11 1H4M11 1V8" />
            </svg>
          </a>
          <span className="font-mono text-[0.68rem] tracking-[0.15em] uppercase text-muted">
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
      <div className="absolute bottom-8 right-8 lg:right-14 flex flex-col items-center gap-3 opacity-80">
        <span className="font-mono text-[0.68rem] font-bold tracking-[0.3em] uppercase text-gold rotate-90 origin-center mb-3">Scroll</span>
        <div className="w-[3px] h-16 rounded-full bg-gradient-to-b from-gold via-gold/60 to-transparent shadow-[0_0_8px_rgba(201,168,76,0.5)]" />
      </div>
    </section>
  )
}
