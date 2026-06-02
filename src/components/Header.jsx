import React, { useState, useEffect, useRef } from 'react'
import { useLang } from '../context/LanguageContext'

export default function Header({ page, onNavigate }) {
  const { lang, t, toggleLang } = useLang()
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
            ⚙ {t.nav.hifiTuning}
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
            ✦ {t.nav.hifiTipps}
          </button>
          <a
            href="/HiFi-Checkliste.html"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.6rem] tracking-[0.22em] uppercase px-3 py-1.5 border no-underline transition-all duration-300"
            style={{ animation: 'hifi-tipps-glow 3s ease-in-out infinite', animationDelay: '0.75s' }}
          >
            {t.nav.hifiCheckliste}
          </a>

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="font-mono text-[0.6rem] tracking-[0.22em] uppercase px-3 py-1.5 border border-gold/30 text-gold/60 hover:text-gold hover:border-gold/60 transition-all duration-300 flex items-center gap-1.5"
            title={lang === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'}
          >
            <span className="text-[0.75rem]">{lang === 'de' ? '🇬🇧' : '🇩🇪'}</span>
            {lang === 'de' ? 'EN' : 'DE'}
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
