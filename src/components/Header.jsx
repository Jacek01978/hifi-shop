import React, { useState, useEffect, useRef } from 'react'
import { useLang } from '../context/LanguageContext'

export default function Header({ page, onNavigate }) {
  const { lang, t, toggleLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible]   = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
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

  // Close mobile menu on page change
  useEffect(() => { setMenuOpen(false) }, [page])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navItems = [
    {
      label: `⚙ ${t.nav.hifiTuning}`,
      action: () => onNavigate(page === 'tuning' ? 'shop' : 'tuning'),
      active: page === 'tuning',
    },
    {
      label: `✦ ${t.nav.hifiTipps}`,
      action: () => onNavigate(page === 'tipps' ? 'shop' : 'tipps'),
      active: page === 'tipps',
    },
    {
      label: t.nav.hifiCheckliste,
      href: lang === 'en' ? '/HiFi-Checklist-EN.html' : '/HiFi-Checkliste.html',
      active: false,
    },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        } ${
          scrolled || menuOpen
            ? 'bg-obsidian/95 backdrop-blur-xl border-b border-obsidian-200'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-14 h-[68px]">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 no-underline" onClick={() => onNavigate('shop')}>
            <div className="w-7 h-7 rounded-full border border-gold/40 flex items-center justify-center animate-pulse-glow">
              <div className="w-2.5 h-2.5 rounded-full bg-gold/60" />
            </div>
            <span className="font-display text-[1.55rem] font-light tracking-[0.15em] text-cream">
              Audio<em className="text-gradient-gold not-italic">Pure</em>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[0.6rem] tracking-[0.22em] uppercase px-3 py-1.5 border no-underline transition-all duration-300"
                  style={{ animation: 'hifi-tipps-glow 3s ease-in-out infinite', animationDelay: '0.75s' }}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  onClick={item.action}
                  className={`font-mono text-[0.6rem] tracking-[0.22em] uppercase px-3 py-1.5 border transition-all duration-300 ${
                    item.active ? 'text-gold border-gold/60 bg-gold/10' : ''
                  }`}
                  style={!item.active ? { animation: 'hifi-tipps-glow 3s ease-in-out infinite' } : {
                    textShadow: '0 0 12px rgba(201,168,76,0.8)',
                    boxShadow: '0 0 16px rgba(201,168,76,0.3)',
                  }}
                >
                  {item.label}
                </button>
              )
            )}

            {/* Language Toggle – Desktop */}
            <button
              onClick={toggleLang}
              className="font-mono text-[0.6rem] tracking-[0.22em] uppercase px-3 py-1.5 border border-gold/30 text-gold/60 hover:text-gold hover:border-gold/60 transition-all duration-300 flex items-center gap-1.5"
            >
              <span className="text-[0.75rem]">{lang === 'de' ? '🇬🇧' : '🇩🇪'}</span>
              {lang === 'de' ? 'EN' : 'DE'}
            </button>
          </nav>

          {/* Mobile right side: language + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            {/* Language Toggle – Mobile */}
            <button
              onClick={toggleLang}
              className="font-mono text-[0.6rem] tracking-[0.15em] uppercase px-2.5 py-1.5 border border-gold/30 text-gold/60 flex items-center gap-1"
            >
              <span className="text-[0.75rem]">{lang === 'de' ? '🇬🇧' : '🇩🇪'}</span>
              {lang === 'de' ? 'EN' : 'DE'}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="flex flex-col justify-center items-center w-10 h-10 gap-[5px] border border-gold/30 transition-colors duration-300 hover:border-gold/60"
              aria-label="Menu"
            >
              <span className={`block w-5 h-px bg-gold transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
              <span className={`block w-5 h-px bg-gold transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-px bg-gold transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Decorative bottom line */}
        <div
          className={`h-px transition-opacity duration-500 ${scrolled || menuOpen ? 'opacity-0' : 'opacity-60'}`}
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3) 30%, rgba(201,168,76,0.3) 70%, transparent)' }}
        />
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(8,8,8,0.97)', backdropFilter: 'blur(16px)' }}
      >
        <div className={`flex flex-col justify-center items-center h-full gap-6 transition-all duration-400 ${
          menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>

          {/* Logo in menu */}
          <div className="mb-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-gold/60" />
            </div>
            <span className="font-display text-[1.8rem] font-light tracking-[0.15em] text-cream">
              Audio<em className="text-gradient-gold not-italic">Pure</em>
            </span>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-gold/30" />

          {/* Nav Items */}
          {navItems.map((item, i) =>
            item.href ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.75rem] tracking-[0.3em] uppercase text-gold/80 hover:text-gold border border-gold/20 hover:border-gold/50 px-8 py-3.5 no-underline transition-all duration-300 text-center"
                style={{ transitionDelay: `${i * 60}ms` }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <button
                key={item.label}
                onClick={() => { item.action(); setMenuOpen(false) }}
                className={`font-mono text-[0.75rem] tracking-[0.3em] uppercase px-8 py-3.5 border transition-all duration-300 text-center w-64 ${
                  item.active
                    ? 'text-gold border-gold/60 bg-gold/10'
                    : 'text-gold/80 hover:text-gold border-gold/20 hover:border-gold/50'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {item.label}
              </button>
            )
          )}

          {/* Back to Shop */}
          {page !== 'shop' && (
            <button
              onClick={() => { onNavigate('shop'); setMenuOpen(false) }}
              className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-stone/50 hover:text-stone transition-colors duration-300 mt-2"
            >
              ← {lang === 'de' ? 'Zurück zum Shop' : 'Back to Shop'}
            </button>
          )}
        </div>
      </div>
    </>
  )
}
