import React, { useState, useEffect } from 'react'

const COMPONENTS = [
  {
    title: 'Intel Mini PC (Intel Atom)',
    icon: '🖥️',
    desc: 'Das Herzstück: Ein kompakter Mini-PC mit Intel-Atom-Prozessor, 4 USB-Anschlüssen und 12V-Gleichstromeingang. Geringer Stromverbrauch, keine beweglichen Teile (kein Lüfter im Betrieb), geringe Wärmeentwicklung – ideal für eine rauschfreie digitale Audioquelle.',
  },
  {
    title: 'MCRU Lineares 12V-Netzteil',
    icon: '⚡',
    desc: 'Anstelle des mitgelieferten Schaltnetzteils kommt ein hochwertiges Linear-Netzteil von MCRU zum Einsatz. Lineare Netzteile erzeugen deutlich weniger Hochfrequenzstörungen (HF-Rauschen) als Schaltnetzteile und versorgen den Mini-PC mit sauberem, stabilem Gleichstrom – ein spürbarer Klanggewinn.',
  },
  {
    title: 'Douk Audio U2 Pro USB Digital Interface',
    icon: '🔌',
    desc: 'Das USB-Audio-Interface von Douk Audio (Modell U2 Pro) wandelt das USB-Signal des Mini-PC in hochwertige digitale Ausgangssignale um: SPDIF (Koaxial), optisch (TOSLINK) und I²S. Es wird über ein separates 5V-Netzteil von Topping gespeist, was die Stromversorgung vom Computer-USB-Bus trennt und so Störungen eliminiert.',
  },
  {
    title: 'AudioQuest Carbon USB-Kabel',
    icon: '🔗',
    desc: 'Die Verbindung zwischen Mini-PC und Douk Audio Interface erfolgt über ein AudioQuest Carbon USB-Kabel. Dieses audiophile USB-Kabel verfügt über getrennte Leiter für Daten und Stromversorgung, eine Carbon-Abschirmung sowie Kaltschweißverbindungen – für eine sauberere digitale Signalübertragung.',
  },
  {
    title: 'AudioQuest JitterBug FMJ',
    icon: '🛡️',
    desc: 'Der AudioQuest JitterBug FMJ sitzt zwischen dem Mini-PC und dem USB-Audio-Interface. Er filtert parasitäre Resonanzen, Netzrauschen und Störungen auf der USB-Leitung, die sich negativ auf den Klang auswirken. Ein kleines Gerät mit großer Wirkung.',
  },
  {
    title: 'Topping 5V Linearnetzteil',
    icon: '🔋',
    desc: 'Das Douk Audio Interface wird von einem separaten 5V-Linearnetzteil von Topping versorgt. Damit wird das Interface vollständig vom USB-Bus des Computers getrennt und erhält eine rauscharme, stabile Stromversorgung – entscheidend für jitter-freie digitale Signale.',
  },
]

export default function AudiophilerPC({ onNavigate }) {
  const [lightbox, setLightbox] = useState(null) // { src, alt }

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const openLightbox = (src, alt) => setLightbox({ src, alt })

  return (
    <>
    {/* Lightbox Overlay */}
    {lightbox && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ background: 'rgba(0,0,0,0.92)' }}
        onClick={() => setLightbox(null)}
      >
        <button
          onClick={() => setLightbox(null)}
          className="absolute top-5 right-6 text-white/70 hover:text-white font-mono text-[0.7rem] tracking-[0.2em] uppercase bg-transparent border border-white/20 px-3 py-1.5 transition-colors"
        >
          ✕ Schließen
        </button>
        <img
          src={lightbox.src}
          alt={lightbox.alt}
          className="max-w-[92vw] max-h-[88vh] object-contain shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
        <p className="absolute bottom-5 font-mono text-[0.65rem] tracking-[0.15em] text-white/40 uppercase">
          {lightbox.alt}
        </p>
      </div>
    )}
    <div>
    <article className="min-h-screen pb-24">

      {/* Hero-Bild */}
      <div className="relative w-full overflow-hidden" style={{ height: '480px' }}>
        <img
          src="/AudiophilerPC2.jpg"
          alt="Audiophiler PC Setup"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.6)' }}
        />
        <div className="absolute inset-0 flex flex-col justify-end px-8 lg:px-14 pb-14"
          style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.4) 60%, transparent 100%)' }}
        >
          {/* Breadcrumb */}
          <button
            onClick={() => onNavigate('tipps')}
            className="flex items-center gap-2 font-mono text-[0.6rem] tracking-[0.3em] uppercase text-gold/60 hover:text-gold transition-colors mb-6 cursor-pointer bg-transparent border-none p-0"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M11 6H1M1 6L5 2M1 6L5 10" />
            </svg>
            HiFi Tuning Tipps
          </button>

          <div className="flex items-center gap-4 mb-4">
            <span className="block w-10 h-px bg-gold/60" />
            <span className="font-mono text-[0.55rem] tracking-[0.4em] uppercase text-gold/70">
              Audiophiler Streaming-PC
            </span>
          </div>
          <h1
            className="font-display font-light text-cream leading-[1.1]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Wie baue ich einen<br />
            <em className="text-gradient-gold not-italic">audiophilen PC?</em>
          </h1>
        </div>
      </div>

      <div className="px-8 lg:px-14 max-w-4xl">

        {/* Einleitung */}
        <section className="pt-14 pb-10 border-b border-obsidian-200">
          <p className="font-mono text-[0.84rem] leading-[2] text-stone tracking-[0.02em] mb-5">
            Ein Standard-PC ist kein audiophiles Gerät – er erzeugt Netzrauschen, HF-Störungen und Jitter,
            die die Klangqualität erheblich beeinträchtigen. Mit der richtigen Kombination aus Komponenten
            lässt sich jedoch ein kompakter, leiser und klanglich hochwertiger digitaler Musik-Streamer
            aufbauen, der selbst dedizierte Streaming-Lösungen herausfordert.
          </p>
          <p className="font-mono text-[0.84rem] leading-[2] text-stone tracking-[0.02em]">
            In diesem Artikel zeige ich, welche Komponenten ich verwendet habe und warum jede einzelne
            zur Klangqualität beiträgt. Das Prinzip: <strong className="text-cream font-medium">jede
            Störquelle konsequent eliminieren</strong> – von der Stromversorgung bis zum digitalen Ausgang.
          </p>
        </section>

        {/* Foto-Galerie oben */}
        <section className="py-10 border-b border-obsidian-200">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-6 h-px bg-gold/60" />
            <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-gold/70">Das Setup</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { src: '/AudiophilerPC.jpg',  alt: 'Audiophiler PC – Übersicht alle Komponenten' },
              { src: '/AudiophilerPC1.jpg', alt: 'Audiophiler PC – Detailansicht' },
            ].map(({ src, alt }) => (
              <div
                key={src}
                className="overflow-hidden border border-obsidian-200 cursor-zoom-in relative group"
                style={{ height: '280px' }}
                onClick={() => openLightbox(src, alt)}
              >
                <img src={src} alt={alt} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(0,0,0,0.25)' }}>
                  <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-white border border-white/50 px-3 py-1.5">
                    🔍 Vergrößern
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Signalkette */}
        <section className="py-10 border-b border-obsidian-200">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-6 h-px bg-gold/60" />
            <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-gold/70">Signalkette</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 font-mono text-[0.72rem] tracking-[0.08em]">
            {[
              'MCRU 12V Linearnetzteil',
              '→',
              'Intel Mini PC',
              '→',
              'JitterBug FMJ',
              '→',
              'AQ Carbon USB',
              '→',
              'Douk Audio U2 Pro',
              '→',
              'DAC / Verstärker',
            ].map((item, i) => (
              item === '→'
                ? <span key={i} className="text-gold/50 text-lg">→</span>
                : <span key={i} className="bg-obsidian-100 border border-obsidian-200 text-cream px-3 py-1.5">{item}</span>
            ))}
          </div>
          <p className="font-mono text-[0.75rem] text-muted mt-4 leading-relaxed">
            Das Topping 5V-Linearnetzteil versorgt das Douk Audio Interface separat (nicht im Diagramm) –
            damit ist der Interface komplett vom USB-Bus des PC getrennt.
          </p>
        </section>

        {/* Komponenten-Liste */}
        <section className="py-10 border-b border-obsidian-200">
          <div className="flex items-center gap-4 mb-8">
            <span className="block w-6 h-px bg-gold/60" />
            <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-gold/70">Die Komponenten im Detail</span>
          </div>
          <div className="space-y-0 divide-y divide-obsidian-200">
            {COMPONENTS.map((c, i) => (
              <div key={i} className="py-8 flex gap-6">
                <span className="text-2xl mt-1 flex-shrink-0">{c.icon}</span>
                <div>
                  <h2 className="font-display text-[1.3rem] font-light text-cream mb-3">{c.title}</h2>
                  <p className="font-mono text-[0.8rem] leading-[2] text-stone tracking-[0.02em]">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Topping Netzteil – Foto */}
        <section className="py-10 border-b border-obsidian-200">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-6 h-px bg-gold/60" />
            <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-gold/70">Topping Lineares 5V-Netzteil</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
            <div
              className="overflow-hidden border border-obsidian-200 cursor-zoom-in relative group"
              style={{ height: '300px' }}
              onClick={() => openLightbox('/Topping.jpg', 'Topping Lineares 5V-Netzteil – Rückseite mit AC-Eingang und DC-Ausgängen')}
            >
              <img
                src="/Topping.jpg"
                alt="Topping Lineares 5V-Netzteil"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(0,0,0,0.25)' }}>
                <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-white border border-white/50 px-3 py-1.5">
                  🔍 Vergrößern
                </span>
              </div>
            </div>
            <div className="font-mono text-[0.8rem] leading-[2] text-stone tracking-[0.02em] py-2">
              <p>
                Das <strong className="text-cream font-medium">Topping Linearnetzteil</strong> versorgt
                das Douk Audio U2 Pro Interface mit sauberem 5V-Gleichstrom über den USB-Ausgang
                (OUTPUT1: DC 5V/1A×2). Ein zweiter Ausgang (OUTPUT2: DC 15V/1A) steht für weitere
                Komponenten zur Verfügung.
              </p>
              <p className="mt-4">
                Der C14-Kaltgeräteeingang (AC INPUT) ermöglicht den Anschluss eines audiophilen
                Netzkabels – ein weiterer Tuning-Schritt für noch saubereren Strom.
              </p>
            </div>
          </div>
        </section>

        {/* USB Digital Interface – Fotos */}
        <section className="py-10 border-b border-obsidian-200">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-6 h-px bg-gold/60" />
            <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-gold/70">Douk Audio U2 Pro – USB Digital Interface</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { src: '/USB-Digital-Audio.jpg',  alt: 'Douk Audio U2 Pro USB Interface – Rückseite' },
              { src: '/USB-Digital-Audio1.jpg', alt: 'Douk Audio U2 Pro USB Interface – Detail' },
            ].map(({ src, alt }) => (
              <div
                key={src}
                className="overflow-hidden border border-obsidian-200 cursor-zoom-in relative group"
                style={{ height: '260px' }}
                onClick={() => openLightbox(src, alt)}
              >
                <img src={src} alt={alt} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(0,0,0,0.25)' }}>
                  <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-white border border-white/50 px-3 py-1.5">
                    🔍 Vergrößern
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="font-mono text-[0.78rem] leading-[2] text-stone mt-5 tracking-[0.02em]">
            Das <strong className="text-cream font-medium">Douk Audio U2 Pro</strong> verfügt über einen
            USB-Eingang sowie SPDIF-, optischen (OPT) und I²S-Ausgang. Über den I²S-Ausgang lässt sich
            bei kompatiblen DACs die reinste digitale Verbindung herstellen. Das separate 5V-Netzteil
            am DC-Eingang entkoppelt das Interface vollständig vom USB-Bus des Computers.
          </p>
        </section>

        {/* Warum nicht einfach direkt per USB ? */}
        <section className="py-10 border-b border-obsidian-200">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-6 h-px bg-gold/60" />
            <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-gold/70">Warum dieser Aufwand?</span>
          </div>
          <h2 className="font-display text-[1.6rem] font-light text-cream mb-5">
            Warum nicht einfach USB direkt in den DAC?
          </h2>
          <div className="space-y-4 font-mono text-[0.82rem] leading-[2] text-stone tracking-[0.02em]">
            <p>
              Ein direkter USB-Anschluss vom Computer zum DAC überträgt neben dem Audiosignal auch
              <strong className="text-cream font-medium"> Störungen aus dem Computer</strong>: Netzrauschen
              vom Schaltnetzteil, Taktjitter durch CPU-Last, HF-Einstreuungen von Peripheriegeräten.
              All das beeinflusst den Klang des DACs messbar und hörbar.
            </p>
            <p>
              Durch die Kombination aus <strong className="text-cream font-medium">Linearnetzteil →
              JitterBug → hochwertiges USB-Kabel → USB-Interface mit externer Speisung</strong> werden
              diese Störquellen Schicht für Schicht eliminiert. Das Ergebnis: Der DAC erhält ein sauberes,
              stabiles digitales Signal – als käme es von einem dedizierten High-End-Streamer.
            </p>
            <p>
              Der Vorteil gegenüber teuren audiophilen Streamern: <strong className="text-cream font-medium">
              volle Software-Freiheit</strong>. Roon, JRiver, Foobar2000, HQPlayer mit Upsampling –
              alles möglich, zu einem Bruchteil der Kosten eines vergleichbaren Dedicated-Players.
            </p>
          </div>
        </section>

        {/* High-End Alternativen */}
        <section className="py-10 border-b border-obsidian-200">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-6 h-px bg-gold/60" />
            <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-gold/70">High-End Alternativen</span>
          </div>
          <h2 className="font-display text-[1.6rem] font-light text-cream mb-4">
            Der nächste Schritt: Dedizierte Streamer
          </h2>
          <p className="font-mono text-[0.82rem] leading-[2] text-stone tracking-[0.02em] mb-6">
            Wer noch weiter gehen möchte, findet in dedizierten Audio-Streamern und High-End-USB-Interfaces
            die Königsklasse des digitalen Transports:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { src: '/Lumin.jpg',   alt: 'Lumin Streamer' },
              { src: '/Mutec.jpg',   alt: 'Mutec USB Interface' },
              { src: '/Chord.jpg',   alt: 'Chord Electronics' },
              { src: '/chord1.jpg',  alt: 'Chord DAC Detail' },
            ].map(({ src, alt }) => (
              <div
                key={src}
                className="overflow-hidden border border-obsidian-200 cursor-zoom-in relative group"
                style={{ height: '140px' }}
                onClick={() => openLightbox(src, alt)}
              >
                <img src={src} alt={alt} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(0,0,0,0.3)' }}>
                  <span className="text-white text-lg">🔍</span>
                </div>
              </div>
            ))}
          </div>
          <p className="font-mono text-[0.72rem] text-muted mt-3 leading-relaxed">
            Lumin Streamer, Mutec USB-Interface, Chord Electronics – High-End Referenzgeräte für den anspruchsvollen Musikhörer.
          </p>
        </section>

        {/* Fazit */}
        <section className="py-10 border-b border-obsidian-200">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-6 h-px bg-gold/60" />
            <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-gold/70">Fazit</span>
          </div>
          <h2 className="font-display text-[1.6rem] font-light text-cream mb-5">
            Fazit: Große Klangverbesserung, kleines Budget
          </h2>
          <div className="space-y-4 font-mono text-[0.82rem] leading-[2] text-stone tracking-[0.02em]">
            <p>
              Ein audiophiler PC ist kein Widerspruch. Mit dem richtigen Aufbau – lineares Netzteil,
              USB-Entstörung und einem hochwertigen USB-Audio-Interface – lässt sich aus einem günstigen
              Mini-PC eine ernstzunehmende Audioquelle machen.
            </p>
            <p>
              Die Gesamtkosten für das beschriebene Setup liegen weit unter denen eines vergleichbaren
              dedizierten Streamers. Der klangliche Unterschied zum ungefilterten Computer-USB-Ausgang
              ist dabei deutlich hörbar: <strong className="text-cream font-medium">ruhigerer Klangboden,
              mehr Auflösung, natürlichere Räumlichkeit.</strong>
            </p>
          </div>

          {/* Komponentenliste Kurzfassung */}
          <div className="mt-8 p-6 border border-gold/20 bg-obsidian-50">
            <p className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-gold/70 mb-4">
              Verwendete Komponenten (Zusammenfassung)
            </p>
            <ul className="space-y-2 font-mono text-[0.78rem] text-stone">
              {[
                'Intel Mini PC (Atom-Prozessor, 4× USB, 12V DC)',
                'MCRU Lineares 12V-Netzteil',
                'Douk Audio U2 Pro USB Digital Interface',
                'AudioQuest Carbon USB-Kabel',
                'AudioQuest JitterBug FMJ',
                'Topping Lineares 5V-Netzteil (für Douk Audio)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold/60 mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Navigation zurück */}
        <div className="pt-10 flex gap-6">
          <button
            onClick={() => onNavigate('tipps')}
            className="font-mono text-[0.72rem] tracking-[0.15em] uppercase text-gold/70 hover:text-gold border border-gold/30 hover:border-gold/60 px-5 py-2.5 transition-all duration-300 bg-transparent cursor-pointer"
          >
            ← Zurück zu den Tuning-Tipps
          </button>
          <button
            onClick={() => onNavigate('shop')}
            className="font-mono text-[0.72rem] tracking-[0.15em] uppercase bg-gold text-obsidian px-5 py-2.5 hover:bg-gold-light transition-all duration-300 border-none cursor-pointer"
          >
            Produkte entdecken →
          </button>
        </div>
      </div>
    </article>
    </div>
    </>
  )
}
