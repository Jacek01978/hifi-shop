import React from 'react'

export default function AffiliateDisclaimer() {
  return (
    <aside className="mx-8 lg:mx-14 mb-20">
      <div className="relative overflow-hidden border border-obsidian-300 p-6"
        style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.03) 0%, transparent 60%)' }}
      >
        {/* Corner accent */}
        <div className="absolute top-0 left-0 w-8 h-px bg-gold/60" />
        <div className="absolute top-0 left-0 w-px h-8 bg-gold/60" />
        <div className="absolute bottom-0 right-0 w-8 h-px bg-gold/60" />
        <div className="absolute bottom-0 right-0 w-px h-8 bg-gold/60" />

        <div className="flex items-start gap-4">
          <span className="text-gold/60 text-lg mt-0.5 shrink-0">*</span>
          <p className="font-mono text-[0.58rem] leading-[1.9] text-muted tracking-[0.04em]">
            <strong className="text-gold/70 font-normal">Affiliate-Hinweis:</strong>{' '}
            Diese Website enthält Affiliate-Links zu Amazon. Wenn Sie über einen dieser Links
            einkaufen, erhalten wir eine kleine Provision –{' '}
            <strong className="text-stone/70 font-normal">für Sie entstehen dabei keinerlei Mehrkosten.</strong>{' '}
            Alle verlinkten Produkte wurden nach audiophilen Kriterien sorgfältig kuratiert.
            Preise sind Richtwerte und können je nach Anbieter variieren.
          </p>
        </div>
      </div>
    </aside>
  )
}
