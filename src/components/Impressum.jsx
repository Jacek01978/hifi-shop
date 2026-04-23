import React from 'react'

export default function Impressum({ onNavigate }) {
  return (
    <section className="min-h-screen pt-32 pb-24 px-8 lg:px-14 max-w-2xl">

      {/* Back button */}
      <button
        onClick={() => onNavigate('shop')}
        className="flex items-center gap-2 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted hover:text-gold transition-colors duration-300 mb-12"
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 1L1 9M1 9H7M1 9V3" />
        </svg>
        Zurück zum Shop
      </button>

      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        <span className="block w-8 h-px bg-gold/60" />
        <span className="font-mono text-[0.52rem] tracking-[0.35em] uppercase text-gold/70">Rechtliches</span>
      </div>
      <h1 className="font-display text-[2.8rem] font-light text-cream tracking-[0.03em] mb-12">
        Impressum
      </h1>

      <div className="space-y-10 font-mono text-[0.72rem] leading-[2] text-stone tracking-[0.02em]">

        {/* Angaben */}
        <div>
          <h2 className="font-mono text-[0.55rem] tracking-[0.28em] uppercase text-gold/70 mb-4">
            Angaben gemäß § 5 TMG
          </h2>
          <div className="border-l border-gold/20 pl-5 space-y-1">
            <p>Jacek Sok</p>
            <p>Gerresheimer Landstr. 70</p>
            <p>40627 Düsseldorf</p>
            <p>Deutschland</p>
          </div>
        </div>

        {/* Kontakt */}
        <div>
          <h2 className="font-mono text-[0.55rem] tracking-[0.28em] uppercase text-gold/70 mb-4">
            Kontakt
          </h2>
          <div className="border-l border-gold/20 pl-5">
            <p>E-Mail: <a href="mailto:Jaceksok@gmx.de" className="text-gold/80 hover:text-gold transition-colors duration-200 no-underline">Jaceksok@gmx.de</a></p>
          </div>
        </div>

        {/* Affiliate */}
        <div>
          <h2 className="font-mono text-[0.55rem] tracking-[0.28em] uppercase text-gold/70 mb-4">
            Hinweis zu Affiliate-Links
          </h2>
          <div className="border-l border-gold/20 pl-5">
            <p className="text-muted">
              Diese Website enthält Affiliate-Links zu Amazon.de. Als Amazon-Partner
              verdiene ich an qualifizierten Käufen. Für Sie entstehen dabei keine
              zusätzlichen Kosten.
            </p>
          </div>
        </div>

        {/* Haftung Inhalte */}
        <div>
          <h2 className="font-mono text-[0.55rem] tracking-[0.28em] uppercase text-gold/70 mb-4">
            Haftung für Inhalte
          </h2>
          <div className="border-l border-gold/20 pl-5">
            <p className="text-muted">
              Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen
              zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>
        </div>

        {/* Haftung Links */}
        <div>
          <h2 className="font-mono text-[0.55rem] tracking-[0.28em] uppercase text-gold/70 mb-4">
            Haftung für Links
          </h2>
          <div className="border-l border-gold/20 pl-5">
            <p className="text-muted">
              Mein Angebot enthält Links zu externen Websites Dritter, auf deren
              Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden
              Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
              verantwortlich.
            </p>
          </div>
        </div>

        {/* Urheberrecht */}
        <div>
          <h2 className="font-mono text-[0.55rem] tracking-[0.28em] uppercase text-gold/70 mb-4">
            Urheberrecht
          </h2>
          <div className="border-l border-gold/20 pl-5">
            <p className="text-muted">
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="mt-16 h-px bg-obsidian-200" />
      <p className="font-mono text-[0.52rem] text-muted tracking-[0.1em] mt-5">
        © {new Date().getFullYear()} AudioPure · Jacek Sok · Düsseldorf
      </p>
    </section>
  )
}
