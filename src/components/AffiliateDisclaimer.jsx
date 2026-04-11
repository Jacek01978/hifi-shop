import React from 'react'

export default function AffiliateDisclaimer() {
  return (
    <aside className="mx-8 lg:mx-12 mb-16 px-6 py-5 border border-obsidian-200 border-l-[3px] border-l-gold-dim bg-obsidian-50">
      <p className="font-mono text-[0.6rem] leading-[1.85] text-muted tracking-[0.04em]">
        <strong className="text-gold-dim">* Affiliate-Hinweis:</strong>{' '}
        Diese Website enthält Affiliate-Links. Wenn Sie über einen dieser Links
        einkaufen, erhalten wir eine kleine Provision –{' '}
        <strong className="text-gold-dim">für Sie entstehen dabei keine Mehrkosten.</strong>{' '}
        Alle verlinkten Produkte wurden nach audiophilen Kriterien ausgewählt.
        Preise sind Richtwerte und können je nach Anbieter variieren.
      </p>
    </aside>
  )
}
