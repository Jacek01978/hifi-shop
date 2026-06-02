import React from 'react'
import { useLang } from '../context/LanguageContext'

export default function IntroSection() {
  const { t } = useLang()
  return (
    <section
      id="ueber-audiopure"
      className="relative px-8 lg:px-14 py-20 border-b border-obsidian-200"
    >
      <div className="max-w-3xl">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8">
          <span className="block w-10 h-px bg-gold/60" />
          <span className="font-mono text-[0.55rem] tracking-[0.4em] uppercase text-gold/70">
            {t.intro.eyebrow}
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-[2rem] lg:text-[2.6rem] font-light leading-[1.15] text-cream mb-8">
          {t.intro.headline}
        </h2>

        {/* Body copy */}
        <div className="space-y-5 font-mono text-[0.82rem] leading-[1.95] text-stone tracking-[0.02em]">
          <p>{t.intro.p1}</p>
          <p>{t.intro.p2}</p>
          <p>{t.intro.p3}</p>
        </div>
      </div>
    </section>
  )
}
