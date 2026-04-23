import React from 'react'

export default function Datenschutz({ onNavigate }) {
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
      <h1 className="font-display text-[2.8rem] font-light text-cream tracking-[0.03em] mb-4">
        Datenschutzerklärung
      </h1>
      <p className="font-mono text-[0.62rem] text-muted tracking-[0.06em] mb-12">
        Gemäß DSGVO / BDSG
      </p>

      <div className="space-y-10 font-mono text-[0.72rem] leading-[2] text-stone tracking-[0.02em]">

        {/* Verantwortlicher */}
        <div>
          <h2 className="font-mono text-[0.55rem] tracking-[0.28em] uppercase text-gold/70 mb-4">
            1. Verantwortlicher
          </h2>
          <div className="border-l border-gold/20 pl-5 space-y-1">
            <p>Jacek Sok</p>
            <p>Gerresheimer Landstr. 70</p>
            <p>40627 Düsseldorf</p>
            <p>E-Mail: <a href="mailto:Jaceksok@gmx.de" className="text-gold/80 hover:text-gold transition-colors duration-200 no-underline">Jaceksok@gmx.de</a></p>
          </div>
        </div>

        {/* Allgemein */}
        <div>
          <h2 className="font-mono text-[0.55rem] tracking-[0.28em] uppercase text-gold/70 mb-4">
            2. Allgemeines zur Datenverarbeitung
          </h2>
          <div className="border-l border-gold/20 pl-5">
            <p className="text-muted">
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese
              Datenschutzerklärung informiert Sie darüber, welche Daten bei Ihrem
              Besuch auf AudioPure erhoben werden und wie diese verwendet werden.
              Diese Website erhebt und verarbeitet personenbezogene Daten nur im
              gesetzlich zulässigen Rahmen.
            </p>
          </div>
        </div>

        {/* Hosting / Server-Logs */}
        <div>
          <h2 className="font-mono text-[0.55rem] tracking-[0.28em] uppercase text-gold/70 mb-4">
            3. Hosting & Server-Logfiles
          </h2>
          <div className="border-l border-gold/20 pl-5 space-y-3">
            <p className="text-muted">
              Diese Website wird bei <strong className="text-stone">Vercel Inc.</strong> (440 N Barranca Ave #4133,
              Covina, CA 91723, USA) gehostet. Bei jedem Aufruf werden automatisch
              folgende Daten in Server-Logfiles gespeichert:
            </p>
            <ul className="text-muted space-y-1 pl-4">
              <li>– IP-Adresse des anfragenden Geräts</li>
              <li>– Datum und Uhrzeit des Zugriffs</li>
              <li>– Name und URL der abgerufenen Datei</li>
              <li>– Verwendeter Browser und Betriebssystem</li>
              <li>– Referrer-URL (zuvor besuchte Seite)</li>
            </ul>
            <p className="text-muted">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
              an der sicheren und fehlerfreien Bereitstellung der Website).
              Die Daten werden nach spätestens 7 Tagen gelöscht.
            </p>
            <p className="text-muted">
              Vercel Datenschutz: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gold/70 hover:text-gold no-underline transition-colors duration-200">vercel.com/legal/privacy-policy</a>
            </p>
          </div>
        </div>

        {/* Amazon Affiliate */}
        <div>
          <h2 className="font-mono text-[0.55rem] tracking-[0.28em] uppercase text-gold/70 mb-4">
            4. Amazon Partnerprogramm (Affiliate-Links)
          </h2>
          <div className="border-l border-gold/20 pl-5 space-y-3">
            <p className="text-muted">
              Diese Website nimmt am Amazon EU-Partnerprogramm teil. Dabei werden
              auf Amazon.de verweisende Links mit einem Affiliate-Tag versehen.
              Wenn Sie über einen solchen Link auf Amazon.de gelangen und dort
              einen Kauf tätigen, erhalten wir eine Provision – für Sie entstehen
              keine Mehrkosten.
            </p>
            <p className="text-muted">
              Beim Klick auf einen Affiliate-Link werden Sie zu Amazon.de
              weitergeleitet. Amazon setzt dabei eigene Cookies und erhebt Daten
              gemäß seiner Datenschutzrichtlinie:
            </p>
            <p>
              <a href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010" target="_blank" rel="noopener noreferrer" className="text-gold/70 hover:text-gold no-underline transition-colors duration-200">
                Amazon Datenschutzhinweis
              </a>
            </p>
            <p className="text-muted">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>
        </div>

        {/* Cookies */}
        <div>
          <h2 className="font-mono text-[0.55rem] tracking-[0.28em] uppercase text-gold/70 mb-4">
            5. Cookies
          </h2>
          <div className="border-l border-gold/20 pl-5">
            <p className="text-muted">
              Diese Website selbst setzt keine eigenen Cookies. Beim Klick auf
              externe Links (z. B. Amazon-Affiliate-Links) können von den
              jeweiligen Drittanbietern Cookies gesetzt werden, auf die wir
              keinen Einfluss haben. Bitte beachten Sie die Datenschutzerklärungen
              der jeweiligen Anbieter.
            </p>
          </div>
        </div>

        {/* Betroffenenrechte */}
        <div>
          <h2 className="font-mono text-[0.55rem] tracking-[0.28em] uppercase text-gold/70 mb-4">
            6. Ihre Rechte
          </h2>
          <div className="border-l border-gold/20 pl-5 space-y-3">
            <p className="text-muted">
              Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer
              personenbezogenen Daten:
            </p>
            <ul className="text-muted space-y-1 pl-4">
              <li>– Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>– Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>– Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>– Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>– Recht auf Widerspruch (Art. 21 DSGVO)</li>
              <li>– Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            </ul>
            <p className="text-muted">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte per E-Mail an:
              <a href="mailto:Jaceksok@gmx.de" className="text-gold/80 hover:text-gold ml-1 no-underline transition-colors duration-200">Jaceksok@gmx.de</a>
            </p>
          </div>
        </div>

        {/* Beschwerderecht */}
        <div>
          <h2 className="font-mono text-[0.55rem] tracking-[0.28em] uppercase text-gold/70 mb-4">
            7. Beschwerderecht bei der Aufsichtsbehörde
          </h2>
          <div className="border-l border-gold/20 pl-5">
            <p className="text-muted">
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
              über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
              Zuständige Aufsichtsbehörde für Nordrhein-Westfalen:
            </p>
            <p className="mt-3">
              <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer" className="text-gold/70 hover:text-gold no-underline transition-colors duration-200">
                Landesbeauftragte für Datenschutz und Informationsfreiheit NRW
              </a>
            </p>
          </div>
        </div>

        {/* Aktualität */}
        <div>
          <h2 className="font-mono text-[0.55rem] tracking-[0.28em] uppercase text-gold/70 mb-4">
            8. Aktualität dieser Erklärung
          </h2>
          <div className="border-l border-gold/20 pl-5">
            <p className="text-muted">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand
              {' '}{new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}.
              Durch die Weiterentwicklung der Website kann eine Anpassung dieser
              Datenschutzerklärung notwendig werden.
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
