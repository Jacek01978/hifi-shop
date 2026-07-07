import React, { useState, useEffect, useRef } from 'react'
import { useLang } from '../context/LanguageContext'
import { TIPPS_DATA } from '../data/tippsData'

export default function HifiTipps({ onNavigate }) {
  const { lang, t } = useLang()
  const TIPPS = TIPPS_DATA[lang] ?? TIPPS_DATA.de
  const allLabel = t.tipps.allCategory
  const CATEGORIES = [allLabel, ...new Set(TIPPS.map(tp => tp.category))]

  const [activeCategory, setActiveCategory] = useState(allLabel)
  const [openId, setOpenId] = useState(null)
  const sectionRef = useRef(null)

  // Reset filter when language changes (categories differ per language)
  useEffect(() => { setActiveCategory(allLabel) }, [lang, allLabel])

  const filtered = activeCategory === allLabel ? TIPPS : TIPPS.filter(tp => tp.category === activeCategory)

  useEffect(() => {
    if (!sectionRef.current) return
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.08 }
    )
    sectionRef.current.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [filtered])

  return (
    <section className="min-h-screen pt-32 pb-20 px-8 lg:px-14">

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="block w-10 h-px bg-gold/60" />
          <span className="font-mono font-semibold text-[0.75rem] tracking-[0.3em] uppercase text-gold">{t.tipps.eyebrow}</span>
        </div>
        <h1 className="font-display font-semibold text-cream leading-tight mb-4" style={{ fontSize: 'clamp(3.2rem, 6vw, 5.5rem)' }}>
          {t.tipps.headline.split(' ')[0]} <em className="text-gradient-gold not-italic">{t.tipps.headline.split(' ').slice(1).join(' ')}</em>
        </h1>
        <p className="font-mono font-medium text-[0.82rem] leading-[1.8] text-stone tracking-[0.03em] max-w-lg">
          {t.tipps.subline}
        </p>
      </div>

      {/* Featured Artikel */}
      {onNavigate && (
        <div
          className="relative overflow-hidden border border-gold/30 mb-10 cursor-pointer group"
          onClick={() => onNavigate('audiophiler-pc')}
        >
          <div className="absolute inset-0">
            <img src="/AudiophilerPC2.jpg" alt="Audiophiler PC" className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
          </div>
          <div className="relative z-10 p-7 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="block w-3 h-px bg-gold/60" />
                <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-gold/80">{t.tipps.featuredLabel}</span>
              </div>
              <h2 className="font-display text-[1.5rem] font-light text-cream leading-snug group-hover:text-gold transition-colors duration-300">
                {t.tipps.featuredTitle}
              </h2>
              <p className="font-mono text-[0.75rem] leading-[1.8] text-stone mt-2 max-w-lg">
                {t.tipps.featuredTeaser}
              </p>
            </div>
            <span className="font-mono text-[0.7rem] tracking-[0.15em] uppercase border border-gold/50 text-gold px-4 py-2 group-hover:bg-gold group-hover:text-obsidian transition-all duration-300 whitespace-nowrap flex-shrink-0">
              {t.tipps.featuredCta}
            </span>
          </div>
        </div>
      )}

      {/* Featured Artikel 2 – Raumakustik messen */}
      {onNavigate && (
        <div
          className="relative overflow-hidden border border-gold/30 mb-10 cursor-pointer group"
          onClick={() => onNavigate('akustik-messung')}
        >
          <div className="absolute inset-0">
            <img src="/hifi-tuning.jpeg" alt="Raumakustik" className="w-full h-full object-cover opacity-[0.12] group-hover:opacity-20 transition-opacity duration-500" />
          </div>
          <div className="relative z-10 p-7 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="block w-3 h-px bg-gold/60" />
                <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-gold/80">{t.tipps.featuredLabel}</span>
              </div>
              <h2 className="font-display text-[1.5rem] font-light text-cream leading-snug group-hover:text-gold transition-colors duration-300">
                {t.tipps.featured2Title}
              </h2>
              <p className="font-mono text-[0.75rem] leading-[1.8] text-stone mt-2 max-w-lg">
                {t.tipps.featured2Teaser}
              </p>
            </div>
            <span className="font-mono text-[0.7rem] tracking-[0.15em] uppercase border border-gold/50 text-gold px-4 py-2 group-hover:bg-gold group-hover:text-obsidian transition-all duration-300 whitespace-nowrap flex-shrink-0">
              {t.tipps.featuredCta}
            </span>
          </div>
        </div>
      )}

      {/* Kategorie-Filter */}
      <div className="flex gap-2 flex-wrap mb-10 border-b border-obsidian-200 pb-5">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-mono font-semibold text-[0.7rem] tracking-[0.14em] uppercase px-5 py-2.5 border transition-all duration-250 whitespace-nowrap ${
              activeCategory === cat
                ? 'border-gold/70 text-gold bg-gold/[0.08]'
                : 'border-gold/40 text-gold hover:border-gold hover:text-gold-light hover:bg-gold/[0.06]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Artikel-Grid */}
      <div ref={sectionRef} className="grid gap-px bg-obsidian-200" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}>
        {filtered.map((tipp, i) => (
          <article
            key={tipp.id}
            className="reveal group bg-obsidian-50 border border-obsidian-200 p-7 flex flex-col gap-4 cursor-pointer transition-all duration-300 hover:bg-obsidian-100"
            style={{ transitionDelay: `${(i % 6) * 60}ms` }}
            onClick={() => setOpenId(openId === tipp.id ? null : tipp.id)}
          >
            {/* Kategorie */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="block w-3 h-px bg-gold/60" />
                <span className="font-mono font-medium text-[0.65rem] tracking-[0.22em] uppercase text-gold">{tipp.category}</span>
              </div>
              <span className="font-mono text-[0.65rem] tracking-[0.1em] text-muted">{tipp.readTime} {t.tipps.readTime}</span>
            </div>

            {/* Titel */}
            <h2 className="font-display text-[1.45rem] font-semibold text-cream leading-snug tracking-[0.01em] group-hover:text-gold transition-colors duration-300">
              {tipp.title}
            </h2>

            {/* Teaser */}
            <p className="font-mono text-[0.75rem] leading-[1.8] text-stone tracking-[0.02em]">
              {tipp.teaser}
            </p>

            {/* Aufklapp-Inhalt */}
            <div className={`overflow-hidden transition-all duration-500 ${openId === tipp.id ? (tipp.video ? 'max-h-[1600px]' : 'max-h-[800px]') + ' opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pt-4 border-t border-obsidian-200">
                {tipp.body.split('\n\n').map((block, j) => (
                  block.startsWith('**') && block.endsWith('**') ? (
                    <p key={j} className="font-mono font-semibold text-[0.7rem] text-gold tracking-[0.08em] uppercase mb-2 mt-4">{block.replace(/\*\*/g, '')}</p>
                  ) : block.startsWith('- ') || block.includes('\n- ') ? (
                    <ul key={j} className="mb-3">
                      {block.split('\n').filter(l => l.trim()).map((line, k) => (
                        <li key={k} className="flex items-start gap-2 font-mono text-[0.74rem] leading-[1.8] text-stone mb-1.5">
                          <span className="block w-2 h-px bg-gold/60 mt-2.5 shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: line.replace(/^- /, '').replace(/\*\*(.*?)\*\*/g, '<span class="text-cream font-semibold">$1</span>') }} />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p key={j} className="font-mono text-[0.74rem] leading-[1.85] text-stone tracking-[0.02em] mb-3"
                      dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, '<span class="text-cream font-semibold">$1</span>') }}
                    />
                  )
                ))}

                {/* YouTube-Video */}
                {tipp.video && (
                  <div className="mt-5" onClick={(e) => e.stopPropagation()}>
                    <div className="relative w-full overflow-hidden border border-obsidian-200" style={{ paddingTop: '56.25%' }}>
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube-nocookie.com/embed/${tipp.video}${tipp.videoStart ? `?start=${tipp.videoStart}` : ''}`}
                        title={tipp.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    {tipp.videoCaption && (
                      <p className="font-mono text-[0.66rem] leading-[1.7] text-muted tracking-[0.02em] mt-2.5">
                        ▶ {tipp.videoCaption}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-auto pt-2">
              <div className="h-px flex-1 bg-obsidian-300 group-hover:bg-gold/20 transition-colors duration-300" />
              <span className="font-mono font-medium text-[0.65rem] tracking-[0.15em] uppercase text-gold ml-4">
                {openId === tipp.id ? t.tipps.close : t.tipps.readMore}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
