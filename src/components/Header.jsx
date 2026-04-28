import React, { useState, useEffect, useRef } from 'react'


export default function Header({ page, onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible]   = useState(true)
  const lastY = useRef(0)

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      setVisible(y < lastY.current || y < 80)
      lastY.current = y
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled
          ? 'bg-obsidian/90 backdrop-blur-xl border-b border-obsidian-200'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-8 lg:px-14 h-[76px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 no-underline">
          <div className="w-7 h-7 rounded-full border border-gold/40 flex items-center justify-center animate-pulse-glow">
            <div className="w-2.5 h-2.5 rounded-full bg-gold/60" />
          </div>
          <span className="font-display text-[1.55rem] font-light tracking-[0.15em] text-cream">
            Audio<em className="text-gradient-gold not-italic">Pure</em>
          </span>
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => onNavigate(page === 'tuning' ? 'shop' : 'tuning')}
            className={`font-mono text-[0.6rem] tracking-[0.22em] uppercase px-3 py-1.5 border transition-all duration-300 ${
              page === 'tuning'
                ? 'text-gold border-gold/60 bg-gold/10'
                : ''
            }`}
            style={page !== 'tuning' ? {
              animation: 'hifi-tipps-glow 3s ease-in-out infinite',
              animationDelay: '1.5s',
            } : {
              textShadow: '0 0 12px rgba(201,168,76,0.8)',
              boxShadow: '0 0 16px rgba(201,168,76,0.3)',
            }}
          >
            ⚙ HiFi Tuning
          </button>
          <button
            onClick={() => onNavigate(page === 'tipps' ? 'shop' : 'tipps')}
            className={`font-mono text-[0.6rem] tracking-[0.22em] uppercase px-3 py-1.5 border transition-all duration-300 ${
              page === 'tipps'
                ? 'text-gold border-gold/60 bg-gold/10'
                : ''
            }`}
            style={page !== 'tipps' ? {
              animation: 'hifi-tipps-glow 3s ease-in-out infinite',
            } : {
              textShadow: '0 0 12px rgba(201,168,76,0.8)',
              boxShadow: '0 0 16px rgba(201,168,76,0.3)',
            }}
          >
            ✦ HiFi Tipps
          </button>
          <button
            onClick={() => onNavigate('shop')}
            className="font-mono text-[0.7rem] font-bold tracking-[0.1em] uppercase border border-gold/40 text-gold px-4 py-2 hover:bg-gold/10 transition-colors duration-300"
          >
            {page === 'tipps' ? '← Shop' : 'Affiliate Shop'}
          </button>
        </nav>
      </div>

      {/* Decorative bottom line */}
      <div
        className={`h-px transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-60'}`}
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3) 30%, rgba(201,168,76,0.3) 70%, transparent)' }}
      />
    </header>
  )
}
