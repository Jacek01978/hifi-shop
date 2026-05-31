import React from 'react'

export default function IntroSection() {
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
            HiFi-Zubehör für audiophile Ansprüche
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-[2rem] lg:text-[2.6rem] font-light leading-[1.15] text-cream mb-8">
          Besserer Klang beginnt beim{' '}
          <em className="text-gradient-gold not-italic">richtigen Zubehör</em>.
        </h2>

        {/* Body copy */}
        <div className="space-y-5 font-mono text-[0.82rem] leading-[1.95] text-stone tracking-[0.02em]">
          <p>
            Willkommen bei <strong className="text-cream font-medium">AudioPure</strong> – Ihrer
            kuratierten Auswahl an hochwertigem <strong className="text-cream font-medium">HiFi-Zubehör</strong>{' '}
            und audiophilen Accessoires. Ob analoge oder digitale Quelle, Verstärker, Streamer oder
            Plattenspieler: Mit dem passenden Zubehör holen Sie das volle Klangpotenzial aus Ihrer
            Anlage heraus – ganz ohne neue Komponenten.
          </p>
          <p>
            In unserem Sortiment finden Sie sorgfältig ausgewählte{' '}
            <strong className="text-cream font-medium">Cinch-, XLR-, Lautsprecher-, Netz- und Digitalkabel</strong>,{' '}
            <strong className="text-cream font-medium">lineare Netzteile</strong> für DACs und Streamer,
            audiophile <strong className="text-cream font-medium">HiFi-Sicherungen</strong>,{' '}
            <strong className="text-cream font-medium">Absorber und Dämpfungsmatten</strong> zur Entkopplung,{' '}
            <strong className="text-cream font-medium">Netzleisten und Netzfilter</strong> für sauberen Strom,{' '}
            <strong className="text-cream font-medium">Phasendetektoren</strong>,{' '}
            <strong className="text-cream font-medium">Reinigungsmittel</strong> sowie praktisches
            USB-Zubehör – von Marken wie AudioQuest, QED, Supra Cables, IsoTek, Dynavox, Keces,
            Topping und SBooster.
          </p>
          <p>
            Sie wissen nicht, wo Sie ansetzen sollen? Unsere kostenlose{' '}
            <strong className="text-cream font-medium">HiFi-Checkliste</strong> und unsere{' '}
            <strong className="text-cream font-medium">Tuning-Tipps</strong> zeigen Schritt für Schritt,
            wie Sie Ihre Anlage optimieren – von der richtigen Netzphase über die Kontaktpflege bis
            zur Aufstellung der Lautsprecher.
          </p>
        </div>

        {/* Keyword chips / quick links */}
        <div className="flex flex-wrap gap-2.5 mt-10">
          {[
            'HiFi Kabel',
            'Lineare Netzteile',
            'HiFi Sicherungen',
            'Absorber & Dämpfer',
            'Netzleisten',
            'Phasendetektor',
            'HiFi Tuning',
            'HiFi-Checkliste',
          ].map((label) => (
            <span
              key={label}
              className="font-mono text-[0.62rem] tracking-[0.12em] uppercase text-gold/70 border border-gold/25 px-3 py-1.5"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
