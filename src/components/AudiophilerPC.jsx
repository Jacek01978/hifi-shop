import React, { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'

const CONTENT = {
  de: {
    breadcrumb: 'HiFi Tuning Tipps',
    eyebrow: 'Audiophiler Streaming-PC',
    titleLine1: 'Wie baue ich einen',
    titleLine2: 'audiophilen PC?',
    introLabel: '',
    intro1: 'Ein Standard-PC ist kein audiophiles Gerät – er erzeugt Netzrauschen, HF-Störungen und Jitter, die die Klangqualität erheblich beeinträchtigen. Mit der richtigen Kombination aus Komponenten lässt sich jedoch ein kompakter, leiser und klanglich hochwertiger digitaler Musik-Streamer aufbauen, der selbst dedizierte Streaming-Lösungen herausfordert.',
    intro2pre: 'In diesem Artikel zeige ich, welche Komponenten ich verwendet habe und warum jede einzelne zur Klangqualität beiträgt. Das Prinzip: ',
    intro2strong: 'jede Störquelle konsequent eliminieren',
    intro2post: ' – von der Stromversorgung bis zum digitalen Ausgang.',
    setupLabel: 'Das Setup',
    setupAlt1: 'Audiophiler PC – Übersicht alle Komponenten',
    setupAlt2: 'Audiophiler PC – Detailansicht',
    chainLabel: 'Signalkette',
    chain: ['MCRU 12V Linearnetzteil', 'Intel Mini PC', 'JitterBug FMJ', 'AQ Carbon USB', 'Douk Audio U2 Pro', 'DAC / Verstärker'],
    chainNote: 'Das Topping 5V-Linearnetzteil versorgt das Douk Audio Interface separat (nicht im Diagramm) – damit ist der Interface komplett vom USB-Bus des PC getrennt.',
    componentsLabel: 'Die Komponenten im Detail',
    viewOnAmazon: 'Auf Amazon ansehen →',
    components: [
      { title: 'Intel Mini PC (Intel Atom)', icon: '🖥️', desc: 'Das Herzstück: Ein kompakter Mini-PC mit Intel-Atom-Prozessor, 4 USB-Anschlüssen und 12V-Gleichstromeingang. Geringer Stromverbrauch, keine beweglichen Teile (kein Lüfter im Betrieb), geringe Wärmeentwicklung – ideal für eine rauschfreie digitale Audioquelle.', href: 'https://www.amazon.de/AWOW-AK10-512GB-Bluetooth-Gigabit/dp/B0GQLCNGWN/ref=sr_1_1_sspa?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3GF1JZ2E9CVBS&keywords=mini%2Bpc%2Bl%C3%BCfterlos%2B12v&qid=1782232323&sr=8-1-spons&th=1&tag=hifisok-21' },
      { title: 'MCRU Lineares 12V-Netzteil', icon: '⚡', desc: 'Anstelle des mitgelieferten Schaltnetzteils kommt ein hochwertiges Linear-Netzteil von MCRU zum Einsatz. Lineare Netzteile erzeugen deutlich weniger Hochfrequenzstörungen (HF-Rauschen) als Schaltnetzteile und versorgen den Mini-PC mit sauberem, stabilem Gleichstrom – ein spürbarer Klanggewinn.' },
      { title: 'Douk Audio U2 Pro USB Digital Interface', icon: '🔌', desc: 'Das USB-Audio-Interface von Douk Audio (Modell U2 Pro) wandelt das USB-Signal des Mini-PC in hochwertige digitale Ausgangssignale um: SPDIF (Koaxial), optisch (TOSLINK) und I²S. Es wird über ein separates 5V-Netzteil von Topping gespeist, was die Stromversorgung vom Computer-USB-Bus trennt und so Störungen eliminiert.', href: 'https://www.amazon.de/DoukAudio-U2PRO-Digital-Schnittstelle-Digital-Analog-Schnittstelle/dp/B0FF9MHZCQ/ref=sr_1_2?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1F9LCCOG7ADYH&keywords=Douk+Audio+usb+coax&qid=1782233377&sr=8-2&tag=hifisok-21' },
      { title: 'AudioQuest Carbon USB-Kabel', icon: '🔗', desc: 'Die Verbindung zwischen Mini-PC und Douk Audio Interface erfolgt über ein AudioQuest Carbon USB-Kabel. Dieses audiophile USB-Kabel verfügt über getrennte Leiter für Daten und Stromversorgung, eine Carbon-Abschirmung sowie Kaltschweißverbindungen – für eine sauberere digitale Signalübertragung.', href: 'https://www.amazon.de/Audioquest-Carbon-USB-Type-75/dp/B07GXVGYCH/ref=sr_1_1?crid=2G8RJH6FH9DW0&keywords=audioquest%2Bcarbon%2Busb%2Ba-c&qid=1782233813&sr=8-1&th=1&tag=hifisok-21' },
      { title: 'AudioQuest JitterBug FMJ', icon: '🛡️', desc: 'Der AudioQuest JitterBug FMJ sitzt zwischen dem Mini-PC und dem USB-Audio-Interface. Er filtert parasitäre Resonanzen, Netzrauschen und Störungen auf der USB-Leitung, die sich negativ auf den Klang auswirken. Ein kleines Gerät mit großer Wirkung.', href: 'https://www.amazon.de/AudioQuest-USB-Filter-Reduzierung-parasit%C3%A4re-Resonanzen-schwarz/dp/B08YDFH63B/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1R8DS3D11R2FC&keywords=audioquest+jitterbug&qid=1782234319&sr=8-1&tag=hifisok-21' },
      { title: 'Topping 5V Linearnetzteil', icon: '🔋', desc: 'Das Douk Audio Interface wird von einem separaten 5V-Linearnetzteil von Topping versorgt. Damit wird das Interface vollständig vom USB-Bus des Computers getrennt und erhält eine rauscharme, stabile Stromversorgung – entscheidend für jitter-freie digitale Signale.' },
    ],
    toppingLabel: 'Topping Lineares 5V-Netzteil',
    toppingAlt: 'Topping Lineares 5V-Netzteil – Rückseite mit AC-Eingang und DC-Ausgängen',
    toppingImgAlt: 'Topping Lineares 5V-Netzteil',
    topping1pre: 'Das ',
    topping1strong: 'Topping Linearnetzteil',
    topping1post: ' versorgt das Douk Audio U2 Pro Interface mit sauberem 5V-Gleichstrom über den USB-Ausgang (OUTPUT1: DC 5V/1A×2). Ein zweiter Ausgang (OUTPUT2: DC 15V/1A) steht für weitere Komponenten zur Verfügung.',
    topping2: 'Der C14-Kaltgeräteeingang (AC INPUT) ermöglicht den Anschluss eines audiophilen Netzkabels – ein weiterer Tuning-Schritt für noch saubereren Strom.',
    doukLabel: 'Douk Audio U2 Pro – USB Digital Interface',
    doukAlt1: 'Douk Audio U2 Pro USB Interface – Rückseite',
    doukAlt2: 'Douk Audio U2 Pro USB Interface – Detail',
    doukDescPre: 'Das ',
    doukDescStrong: 'Douk Audio U2 Pro',
    doukDescPost: ' verfügt über einen USB-Eingang sowie SPDIF-, optischen (OPT) und I²S-Ausgang. Über den I²S-Ausgang lässt sich bei kompatiblen DACs die reinste digitale Verbindung herstellen. Das separate 5V-Netzteil am DC-Eingang entkoppelt das Interface vollständig vom USB-Bus des Computers.',
    whyLabel: 'Warum dieser Aufwand?',
    whyTitle: 'Warum nicht einfach USB direkt in den DAC?',
    why1pre: 'Ein direkter USB-Anschluss vom Computer zum DAC überträgt neben dem Audiosignal auch ',
    why1strong: 'Störungen aus dem Computer',
    why1post: ': Netzrauschen vom Schaltnetzteil, Taktjitter durch CPU-Last, HF-Einstreuungen von Peripheriegeräten. All das beeinflusst den Klang des DACs messbar und hörbar.',
    why2pre: 'Durch die Kombination aus ',
    why2strong: 'Linearnetzteil → JitterBug → hochwertiges USB-Kabel → USB-Interface mit externer Speisung',
    why2post: ' werden diese Störquellen Schicht für Schicht eliminiert. Das Ergebnis: Der DAC erhält ein sauberes, stabiles digitales Signal – als käme es von einem dedizierten High-End-Streamer.',
    why3pre: 'Der Vorteil gegenüber teuren audiophilen Streamern: ',
    why3strong: 'volle Software-Freiheit',
    why3post: '. Roon, JRiver, Foobar2000, HQPlayer mit Upsampling – alles möglich, zu einem Bruchteil der Kosten eines vergleichbaren Dedicated-Players.',
    highEndLabel: 'High-End Alternativen',
    highEndTitle: 'Der nächste Schritt: Dedizierte Streamer',
    highEndIntro: 'Wer noch weiter gehen möchte, findet in dedizierten Audio-Streamern und High-End-USB-Interfaces die Königsklasse des digitalen Transports:',
    highEndCaption: 'Lumin Streamer, Mutec USB-Interface, Chord Electronics, Keces P8 Ultra Low Noise Linear Power Supply – High-End Referenzgeräte für den anspruchsvollen Musikhörer.',
    conclusionLabel: 'Fazit',
    conclusionTitle: 'Fazit: Große Klangverbesserung, kleines Budget',
    conclusion1: 'Ein audiophiler PC ist kein Widerspruch. Mit dem richtigen Aufbau – lineares Netzteil, USB-Entstörung und einem hochwertigen USB-Audio-Interface – lässt sich aus einem günstigen Mini-PC eine ernstzunehmende Audioquelle machen.',
    conclusion2pre: 'Die Gesamtkosten für das beschriebene Setup liegen weit unter denen eines vergleichbaren dedizierten Streamers. Der klangliche Unterschied zum ungefilterten Computer-USB-Ausgang ist dabei deutlich hörbar: ',
    conclusion2strong: 'ruhigerer Klangboden, mehr Auflösung, natürlichere Räumlichkeit.',
    summaryLabel: 'Verwendete Komponenten (Zusammenfassung)',
    summary: [
      'Intel Mini PC (Atom-Prozessor, 4× USB, 12V DC)',
      'MCRU Lineares 12V-Netzteil',
      'Douk Audio U2 Pro USB Digital Interface',
      'AudioQuest Carbon USB-Kabel',
      'AudioQuest JitterBug FMJ',
      'Topping Lineares 5V-Netzteil (für Douk Audio)',
    ],
    backToTipps: '← Zurück zu den Tuning-Tipps',
    toShop: 'Produkte entdecken →',
    zoom: '🔍 Vergrößern',
    close: '✕ Schließen',
  },
  en: {
    breadcrumb: 'HiFi Tuning Tips',
    eyebrow: 'Audiophile Streaming PC',
    titleLine1: 'How to build an',
    titleLine2: 'audiophile PC?',
    introLabel: '',
    intro1: 'A standard PC is not an audiophile device – it generates mains noise, RF interference and jitter that considerably degrade sound quality. With the right combination of components, however, you can build a compact, quiet and sonically high-quality digital music streamer that even challenges dedicated streaming solutions.',
    intro2pre: 'In this article I show which components I used and why each one contributes to sound quality. The principle: ',
    intro2strong: 'consistently eliminate every source of interference',
    intro2post: ' – from the power supply to the digital output.',
    setupLabel: 'The Setup',
    setupAlt1: 'Audiophile PC – overview of all components',
    setupAlt2: 'Audiophile PC – detail view',
    chainLabel: 'Signal Chain',
    chain: ['MCRU 12V linear PSU', 'Intel Mini PC', 'JitterBug FMJ', 'AQ Carbon USB', 'Douk Audio U2 Pro', 'DAC / Amplifier'],
    chainNote: 'The Topping 5V linear power supply feeds the Douk Audio interface separately (not in the diagram) – completely isolating the interface from the PC\'s USB bus.',
    componentsLabel: 'The Components in Detail',
    viewOnAmazon: 'View on Amazon →',
    components: [
      { title: 'Intel Mini PC (Intel Atom)', icon: '🖥️', desc: 'The heart of the system: a compact mini PC with an Intel Atom processor, 4 USB ports and a 12V DC input. Low power consumption, no moving parts (no fan in operation) and little heat generation – ideal for a noise-free digital audio source.', href: 'https://www.amazon.de/AWOW-AK10-512GB-Bluetooth-Gigabit/dp/B0GQLCNGWN/ref=sr_1_1_sspa?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3GF1JZ2E9CVBS&keywords=mini%2Bpc%2Bl%C3%BCfterlos%2B12v&qid=1782232323&sr=8-1-spons&th=1&tag=hifisok-21' },
      { title: 'MCRU 12V Linear Power Supply', icon: '⚡', desc: 'Instead of the supplied switching power supply, a high-quality linear power supply from MCRU is used. Linear power supplies generate far less high-frequency interference (RF noise) than switching supplies and feed the mini PC with clean, stable DC power – a noticeable sonic gain.' },
      { title: 'Douk Audio U2 Pro USB Digital Interface', icon: '🔌', desc: 'The Douk Audio USB audio interface (model U2 Pro) converts the mini PC\'s USB signal into high-quality digital output signals: SPDIF (coaxial), optical (TOSLINK) and I²S. It is fed by a separate 5V power supply from Topping, which isolates the power supply from the computer\'s USB bus and thus eliminates interference.', href: 'https://www.amazon.de/DoukAudio-U2PRO-Digital-Schnittstelle-Digital-Analog-Schnittstelle/dp/B0FF9MHZCQ/ref=sr_1_2?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1F9LCCOG7ADYH&keywords=Douk+Audio+usb+coax&qid=1782233377&sr=8-2&tag=hifisok-21' },
      { title: 'AudioQuest Carbon USB Cable', icon: '🔗', desc: 'The connection between the mini PC and the Douk Audio interface is made with an AudioQuest Carbon USB cable. This audiophile USB cable has separate conductors for data and power, carbon shielding and cold-welded connections – for cleaner digital signal transmission.', href: 'https://www.amazon.de/Audioquest-Carbon-USB-Type-75/dp/B07GXVGYCH/ref=sr_1_1?crid=2G8RJH6FH9DW0&keywords=audioquest%2Bcarbon%2Busb%2Ba-c&qid=1782233813&sr=8-1&th=1&tag=hifisok-21' },
      { title: 'AudioQuest JitterBug FMJ', icon: '🛡️', desc: 'The AudioQuest JitterBug FMJ sits between the mini PC and the USB audio interface. It filters parasitic resonances, mains noise and interference on the USB line that negatively affect the sound. A small device with a big effect.', href: 'https://www.amazon.de/AudioQuest-USB-Filter-Reduzierung-parasit%C3%A4re-Resonanzen-schwarz/dp/B08YDFH63B/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1R8DS3D11R2FC&keywords=audioquest+jitterbug&qid=1782234319&sr=8-1&tag=hifisok-21' },
      { title: 'Topping 5V Linear Power Supply', icon: '🔋', desc: 'The Douk Audio interface is powered by a separate 5V linear power supply from Topping. This completely isolates the interface from the computer\'s USB bus and provides a low-noise, stable power supply – crucial for jitter-free digital signals.' },
    ],
    toppingLabel: 'Topping 5V Linear Power Supply',
    toppingAlt: 'Topping 5V linear power supply – rear with AC input and DC outputs',
    toppingImgAlt: 'Topping 5V linear power supply',
    topping1pre: 'The ',
    topping1strong: 'Topping linear power supply',
    topping1post: ' feeds the Douk Audio U2 Pro interface with clean 5V DC via the USB output (OUTPUT1: DC 5V/1A×2). A second output (OUTPUT2: DC 15V/1A) is available for additional components.',
    topping2: 'The C14 IEC input (AC INPUT) allows the connection of an audiophile power cable – a further tuning step for even cleaner power.',
    doukLabel: 'Douk Audio U2 Pro – USB Digital Interface',
    doukAlt1: 'Douk Audio U2 Pro USB interface – rear',
    doukAlt2: 'Douk Audio U2 Pro USB interface – detail',
    doukDescPre: 'The ',
    doukDescStrong: 'Douk Audio U2 Pro',
    doukDescPost: ' has a USB input as well as SPDIF, optical (OPT) and I²S outputs. The I²S output allows the purest digital connection with compatible DACs. The separate 5V power supply at the DC input completely decouples the interface from the computer\'s USB bus.',
    whyLabel: 'Why all this effort?',
    whyTitle: 'Why not just connect USB directly to the DAC?',
    why1pre: 'A direct USB connection from the computer to the DAC transmits, alongside the audio signal, also ',
    why1strong: 'interference from the computer',
    why1post: ': mains noise from the switching power supply, clock jitter from CPU load, RF interference from peripherals. All of this affects the DAC\'s sound measurably and audibly.',
    why2pre: 'By combining a ',
    why2strong: 'linear power supply → JitterBug → high-quality USB cable → externally powered USB interface',
    why2post: ', these sources of interference are eliminated layer by layer. The result: the DAC receives a clean, stable digital signal – as if it came from a dedicated high-end streamer.',
    why3pre: 'The advantage over expensive audiophile streamers: ',
    why3strong: 'full software freedom',
    why3post: '. Roon, JRiver, Foobar2000, HQPlayer with upsampling – all possible, at a fraction of the cost of a comparable dedicated player.',
    highEndLabel: 'High-End Alternatives',
    highEndTitle: 'The next step: dedicated streamers',
    highEndIntro: 'For those who want to go even further, dedicated audio streamers and high-end USB interfaces represent the pinnacle of digital transport:',
    highEndCaption: 'Lumin streamer, Mutec USB interface, Chord Electronics, Keces P8 Ultra Low Noise Linear Power Supply – high-end reference devices for the discerning music listener.',
    conclusionLabel: 'Conclusion',
    conclusionTitle: 'Conclusion: big sonic improvement, small budget',
    conclusion1: 'An audiophile PC is not a contradiction. With the right setup – a linear power supply, USB noise filtering and a high-quality USB audio interface – a budget mini PC can be turned into a serious audio source.',
    conclusion2pre: 'The total cost of the setup described is far below that of a comparable dedicated streamer. The sonic difference compared to the unfiltered computer USB output is clearly audible: ',
    conclusion2strong: 'a calmer sound floor, more resolution, more natural spatiality.',
    summaryLabel: 'Components used (summary)',
    summary: [
      'Intel Mini PC (Atom processor, 4× USB, 12V DC)',
      'MCRU 12V linear power supply',
      'Douk Audio U2 Pro USB Digital Interface',
      'AudioQuest Carbon USB cable',
      'AudioQuest JitterBug FMJ',
      'Topping 5V linear power supply (for Douk Audio)',
    ],
    backToTipps: '← Back to the Tuning Tips',
    toShop: 'Discover products →',
    zoom: '🔍 Enlarge',
    close: '✕ Close',
  },
}

export default function AudiophilerPC({ onNavigate }) {
  const { lang } = useLang()
  const c = CONTENT[lang] ?? CONTENT.de
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
          {c.close}
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
          alt={c.titleLine2}
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
            {c.breadcrumb}
          </button>

          <div className="flex items-center gap-4 mb-4">
            <span className="block w-10 h-px bg-gold/60" />
            <span className="font-mono text-[0.55rem] tracking-[0.4em] uppercase text-gold/70">
              {c.eyebrow}
            </span>
          </div>
          <h1
            className="font-display font-light text-cream leading-[1.1]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            {c.titleLine1}<br />
            <em className="text-gradient-gold not-italic">{c.titleLine2}</em>
          </h1>
        </div>
      </div>

      <div className="px-8 lg:px-14 max-w-4xl">

        {/* Einleitung */}
        <section className="pt-14 pb-10 border-b border-obsidian-200">
          <p className="font-mono text-[0.84rem] leading-[2] text-stone tracking-[0.02em] mb-5">
            {c.intro1}
          </p>
          <p className="font-mono text-[0.84rem] leading-[2] text-stone tracking-[0.02em]">
            {c.intro2pre}<strong className="text-cream font-medium">{c.intro2strong}</strong>{c.intro2post}
          </p>
        </section>

        {/* Foto-Galerie oben */}
        <section className="py-10 border-b border-obsidian-200">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-6 h-px bg-gold/60" />
            <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-gold/70">{c.setupLabel}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { src: '/AudiophilerPC.jpg',  alt: c.setupAlt1 },
              { src: '/AudiophilerPC1.jpg', alt: c.setupAlt2 },
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
                    {c.zoom}
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
            <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-gold/70">{c.chainLabel}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 font-mono text-[0.72rem] tracking-[0.08em]">
            {c.chain.map((item, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="text-gold/50 text-lg">→</span>}
                <span className="bg-obsidian-100 border border-obsidian-200 text-cream px-3 py-1.5">{item}</span>
              </React.Fragment>
            ))}
          </div>
          <p className="font-mono text-[0.75rem] text-muted mt-4 leading-relaxed">
            {c.chainNote}
          </p>
        </section>

        {/* Komponenten-Liste */}
        <section className="py-10 border-b border-obsidian-200">
          <div className="flex items-center gap-4 mb-8">
            <span className="block w-6 h-px bg-gold/60" />
            <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-gold/70">{c.componentsLabel}</span>
          </div>
          <div className="space-y-0 divide-y divide-obsidian-200">
            {c.components.map((comp, i) => (
              <div key={i} className="py-8 flex gap-6">
                <span className="text-2xl mt-1 flex-shrink-0">{comp.icon}</span>
                <div>
                  <h2 className="font-display text-[1.3rem] font-light text-cream mb-3">{comp.title}</h2>
                  <p className="font-mono text-[0.8rem] leading-[2] text-stone tracking-[0.02em]">{comp.desc}</p>
                  {comp.href && (
                    <a
                      href={comp.href}
                      target="_blank"
                      rel="noopener sponsored"
                      className="inline-block mt-3 font-mono text-[0.68rem] tracking-[0.12em] uppercase text-gold/80 hover:text-gold border border-gold/30 hover:border-gold/60 px-4 py-2 no-underline transition-all duration-300"
                    >
                      {c.viewOnAmazon}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Topping Netzteil – Foto */}
        <section className="py-10 border-b border-obsidian-200">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-6 h-px bg-gold/60" />
            <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-gold/70">{c.toppingLabel}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
            <div
              className="overflow-hidden border border-obsidian-200 cursor-zoom-in relative group"
              style={{ height: '300px' }}
              onClick={() => openLightbox('/Topping.jpg', c.toppingAlt)}
            >
              <img
                src="/Topping.jpg"
                alt={c.toppingImgAlt}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(0,0,0,0.25)' }}>
                <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-white border border-white/50 px-3 py-1.5">
                  {c.zoom}
                </span>
              </div>
            </div>
            <div className="font-mono text-[0.8rem] leading-[2] text-stone tracking-[0.02em] py-2">
              <p>
                {c.topping1pre}<strong className="text-cream font-medium">{c.topping1strong}</strong>{c.topping1post}
              </p>
              <p className="mt-4">
                {c.topping2}
              </p>
            </div>
          </div>
        </section>

        {/* USB Digital Interface – Fotos */}
        <section className="py-10 border-b border-obsidian-200">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-6 h-px bg-gold/60" />
            <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-gold/70">{c.doukLabel}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { src: '/USB-Digital-Audio.jpg',  alt: c.doukAlt1 },
              { src: '/USB-Digital-Audio1.jpg', alt: c.doukAlt2 },
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
                    {c.zoom}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="font-mono text-[0.78rem] leading-[2] text-stone mt-5 tracking-[0.02em]">
            {c.doukDescPre}<strong className="text-cream font-medium">{c.doukDescStrong}</strong>{c.doukDescPost}
          </p>
        </section>

        {/* Warum nicht einfach direkt per USB ? */}
        <section className="py-10 border-b border-obsidian-200">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-6 h-px bg-gold/60" />
            <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-gold/70">{c.whyLabel}</span>
          </div>
          <h2 className="font-display text-[1.6rem] font-light text-cream mb-5">
            {c.whyTitle}
          </h2>
          <div className="space-y-4 font-mono text-[0.82rem] leading-[2] text-stone tracking-[0.02em]">
            <p>
              {c.why1pre}<strong className="text-cream font-medium">{c.why1strong}</strong>{c.why1post}
            </p>
            <p>
              {c.why2pre}<strong className="text-cream font-medium">{c.why2strong}</strong>{c.why2post}
            </p>
            <p>
              {c.why3pre}<strong className="text-cream font-medium">{c.why3strong}</strong>{c.why3post}
            </p>
          </div>
        </section>

        {/* High-End Alternativen */}
        <section className="py-10 border-b border-obsidian-200">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-6 h-px bg-gold/60" />
            <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-gold/70">{c.highEndLabel}</span>
          </div>
          <h2 className="font-display text-[1.6rem] font-light text-cream mb-4">
            {c.highEndTitle}
          </h2>
          <p className="font-mono text-[0.82rem] leading-[2] text-stone tracking-[0.02em] mb-6">
            {c.highEndIntro}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { src: '/Lumin.jpg',   alt: 'Lumin Streamer' },
              { src: '/Keces.jpg',   alt: 'Keces P8 Ultra Low Noise Linear Power Supply' },
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
            {c.highEndCaption}
          </p>
        </section>

        {/* Fazit */}
        <section className="py-10 border-b border-obsidian-200">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-6 h-px bg-gold/60" />
            <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-gold/70">{c.conclusionLabel}</span>
          </div>
          <h2 className="font-display text-[1.6rem] font-light text-cream mb-5">
            {c.conclusionTitle}
          </h2>
          <div className="space-y-4 font-mono text-[0.82rem] leading-[2] text-stone tracking-[0.02em]">
            <p>
              {c.conclusion1}
            </p>
            <p>
              {c.conclusion2pre}<strong className="text-cream font-medium">{c.conclusion2strong}</strong>
            </p>
          </div>

          {/* Komponentenliste Kurzfassung */}
          <div className="mt-8 p-6 border border-gold/20 bg-obsidian-50">
            <p className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-gold/70 mb-4">
              {c.summaryLabel}
            </p>
            <ul className="space-y-2 font-mono text-[0.78rem] text-stone">
              {c.summary.map((item, i) => (
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
            {c.backToTipps}
          </button>
          <button
            onClick={() => onNavigate('shop')}
            className="font-mono text-[0.72rem] tracking-[0.15em] uppercase bg-gold text-obsidian px-5 py-2.5 hover:bg-gold-light transition-all duration-300 border-none cursor-pointer"
          >
            {c.toShop}
          </button>
        </div>
      </div>
    </article>
    </div>
    </>
  )
}
