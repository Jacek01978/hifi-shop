import React, { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between px-8 lg:px-12 h-[72px] border-b border-obsidian-200 transition-all duration-300 ${
        scrolled ? 'bg-obsidian/95 backdrop-blur-xl' : 'bg-obsidian'
      }`}
    >
      {/* Logo */}
      <a href="#" className="font-display text-2xl font-light tracking-[0.18em] text-gold no-underline">
        Audio<span className="text-cream italic">Pure</span>
      </a>

      {/* Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {['Kabel', 'Sicherungen', 'Absorber', 'Reinigung'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[0.65rem] tracking-[0.2em] uppercase text-muted hover:text-gold transition-colors duration-300 no-underline"
          >
            {item}
          </a>
        ))}
        <span className="text-[0.6rem] tracking-[0.1em] bg-gold text-obsidian px-3 py-1 font-mono">
          Affiliate Shop
        </span>
      </nav>
    </header>
  )
}
