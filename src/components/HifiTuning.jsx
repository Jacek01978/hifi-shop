import React from 'react'
import { useLang } from '../context/LanguageContext'

const CONTENT = {
  de: {
    back: 'Zurück zum Shop',
    eyebrow: 'Optimierung',
    title: 'HiFi Tuning',
    subline: 'Praxistipps & Empfehlungen zur Optimierung deiner HiFi-Anlage –\nvon der Aufstellung bis zur Verkabelung.',
    caption: 'ASR Emitter II Exclusive · Battery Power Supply · PMC Lautsprecher',
    tuning: 'Tuning',
    tippWord: 'Tuning Tipp',
    tip1a: 'Silikon-Dämpfer unter dem Netzteil sorgen für einen rutschfesten Stand und reduzieren ebenfalls schädliche Vibrationen. Eine Hifi-Basis unter dem Netzteil trägt auch dazu bei, dass das Netzteil vor Erschütterungen geschützt ist. Sie werden es nicht glauben, aber diese kleine Modifikation hat durchaus positiven Einfluss auf den Klang.',
    tip1b: 'Das lineare Netzteil versorgt nun den Media-Player, einen Orbsmart-Android-Player, mit sauberer 12 Volt Spannung. Der Unterschied zum günstigen Standard-Netzteil macht sich visuell und audiophil bemerkbar.',
    tip2a: 'Das Einlesen der Daten kann durch verschmutze CDs verfälscht werden. Deswegen sollten CDs vorher gereinigt werden.',
    tip2b: 'Das CD-Spray verbessert die Lesbarkeit der Daten auf der CD und die CD-Matte verringert ungewünschte Schwingungen der CD, sodass der Laser die Daten exakter auslesen kann. Die Fehlerkorrektur des CD-Spielers bzw. des Laufwerks wird durch diese Maßnahmen nicht mehr so stark beansprucht, was zu einem verbesserten Klangbild führen wird.',
    tip3a: 'Alle offenen RCA-Eingänge/Ausgänge sollten immer abgeschlossen werden, da sonst HF-Strahlung in den Verstärker eindringen und die Klangqualität negativ beeinflussen kann.',
    tip3b: 'Digitale Eingänge/Ausgänge des Quellgerätes (z.B. CD-Spieler, Streamers usw.) oder des Verstärkers sollten ebenfalls abgeschlossen werden, falls diese nicht benutzt werden.',
    tip3c: 'Für alle Anschlusstypen gibt es Abschlusskappen und diese verhindern, dass Staub und HF-Strahlung in das Gerät eindringen. Dadurch sollte in der Regel ein ruhigeres und gelassenes Klangbild entstehen.',
    tip4a: 'Ein Austausch der HiFi-Sicherung kann sich durchaus lohnen und das Klangbild verbessern. Bitte dabei immer auf die korrekte Stromstärke (z.B. 1,25 A) achten!',
    tip5a: 'Eine Netzleiste kann zusätzlich mit speziellen Geräten zur Filterung von Netzstörungen – PS Audio Noise Harvester – ausgestattet werden. Die blaue LED blinkt jedes Mal auf, wenn Netzstörungen aus dem System heraus genommen wurden. Je schneller sie blinkt, desto mehr Störungen sind im System.',
    tip5b: 'Der creaktivSystems ci2p Power Plug-Optimizer Abschlußstecker informiert durch direkten Metallkontakt die gesamte Stromleitung. Dies führt zu einem deutlich verbesserten HF-Verhalten der gesamten Steckerleiste und der damit verbundenen Stromleitung.',
  },
  en: {
    back: 'Back to Shop',
    eyebrow: 'Optimisation',
    title: 'HiFi Tuning',
    subline: 'Practical tips & recommendations for optimising your HiFi system –\nfrom placement to cabling.',
    caption: 'ASR Emitter II Exclusive · Battery Power Supply · PMC Speakers',
    tuning: 'Tuning',
    tippWord: 'Tuning Tip',
    tip1a: 'Silicone dampers under the power supply provide a non-slip footing and also reduce harmful vibrations. A HiFi base under the power supply additionally protects it from shocks. You may not believe it, but this small modification does have a positive influence on the sound.',
    tip1b: 'The linear power supply now feeds the media player – an Orbsmart Android player – with clean 12-volt power. The difference compared to the cheap standard power supply is noticeable both visually and sonically.',
    tip2a: 'Reading the data can be corrupted by dirty CDs. That is why CDs should be cleaned beforehand.',
    tip2b: 'The CD spray improves the readability of the data on the CD, and the CD mat reduces unwanted vibrations of the CD so that the laser can read the data more precisely. The error correction of the CD player or transport is no longer used as heavily by these measures, which leads to an improved sound.',
    tip3a: 'All open RCA inputs/outputs should always be terminated, otherwise RF radiation can enter the amplifier and negatively affect sound quality.',
    tip3b: 'Digital inputs/outputs of the source device (e.g. CD player, streamer, etc.) or of the amplifier should also be terminated if they are not in use.',
    tip3c: 'Terminating caps are available for all connector types, and they prevent dust and RF radiation from entering the device. This should generally result in a calmer, more relaxed sound.',
    tip4a: 'Replacing the HiFi fuse can be well worthwhile and improve the sound. Please always pay attention to the correct current rating (e.g. 1.25 A)!',
    tip5a: 'A power strip can additionally be equipped with special devices for filtering mains interference – the PS Audio Noise Harvester. The blue LED flashes each time mains interference is removed from the system. The faster it flashes, the more interference there is in the system.',
    tip5b: 'The creaktivSystems ci2p Power Plug Optimizer terminating plug conditions the entire power line through direct metal contact. This leads to significantly improved RF behaviour of the whole power strip and the connected power line.',
  },
}

const VIGNETTE = `
  linear-gradient(to bottom, rgba(8,8,8,0.6) 0%, transparent 20%),
  linear-gradient(to top,    rgba(8,8,8,0.7) 0%, transparent 25%),
  linear-gradient(to right,  rgba(8,8,8,0.6) 0%, transparent 15%),
  linear-gradient(to left,   rgba(8,8,8,0.6) 0%, transparent 15%)
`

export default function HifiTuning({ onNavigate }) {
  const { lang } = useLang()
  const c = CONTENT[lang] ?? CONTENT.de

  const TippHeader = ({ n }) => (
    <>
      <div className="flex items-center gap-4 mb-6">
        <span className="block w-8 h-px bg-gold/60" />
        <span className="font-mono text-[0.52rem] tracking-[0.35em] uppercase text-gold/70">{c.tuning}</span>
      </div>
      <h2 className="font-display text-[2rem] font-light text-cream tracking-[0.03em] mb-10">
        {c.tippWord} {n}
      </h2>
    </>
  )

  const Para = ({ children, mt = 'mt-8' }) => (
    <p className={`font-mono text-[0.74rem] leading-[2] text-stone tracking-[0.03em] ${mt} border-l border-gold/20 pl-5`}>
      {children}
    </p>
  )

  return (
    <section className="min-h-screen pt-32 pb-24 px-8 lg:px-14 max-w-3xl">

      {/* Back button */}
      <button
        onClick={() => onNavigate('shop')}
        className="flex items-center gap-2 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted hover:text-gold transition-colors duration-300 mb-12"
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 1L1 9M1 9H7M1 9V3" />
        </svg>
        {c.back}
      </button>

      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        <span className="block w-8 h-px bg-gold/60" />
        <span className="font-mono text-[0.52rem] tracking-[0.35em] uppercase text-gold/70">{c.eyebrow}</span>
      </div>
      <h1
        className="font-display font-light text-cream tracking-[0.03em] mb-6"
        style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
      >
        {c.title}
      </h1>
      <p className="font-mono text-[0.78rem] leading-[2] text-stone tracking-[0.04em] mb-16 max-w-xl">
        {c.subline.split('\n').map((line, i, arr) => (
          <React.Fragment key={i}>{line}{i < arr.length - 1 && <br />}</React.Fragment>
        ))}
      </p>

      {/* Photo */}
      <div className="relative overflow-hidden mb-6">
        <img
          src="/hifi-tuning.jpeg"
          alt="ASR Emitter II Exclusive HiFi System"
          className="w-full object-cover"
          style={{ maxHeight: '520px', filter: 'brightness(0.95) contrast(1.05)', display: 'block' }}
        />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `
            linear-gradient(to bottom, rgba(8,8,8,0.75) 0%, transparent 22%),
            linear-gradient(to top,    rgba(8,8,8,0.85) 0%, transparent 28%),
            linear-gradient(to right,  rgba(8,8,8,0.7)  0%, transparent 18%),
            linear-gradient(to left,   rgba(8,8,8,0.7)  0%, transparent 18%)
          `
        }} />
        <div className="absolute bottom-0 left-0 right-0 px-6 py-5 z-10">
          <p className="font-mono text-[0.58rem] tracking-[0.2em] uppercase text-gold/70">
            {c.caption}
          </p>
        </div>
      </div>

      {/* Tuning Tipp 1 */}
      <div className="mt-16">
        <TippHeader n={1} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { src: '/netzteil1.jpeg',  alt: 'Power supply view 1' },
            { src: '/netzteil2.jpeg',  alt: 'Power supply view 2' },
            { src: '/netzteil3.jpeg',  alt: 'Power supply view 3' },
            { src: '/netzteil4.jpeg',  alt: 'Power supply view 4' },
            { src: '/netzteil-base.jpeg', alt: 'Power supply base' },
          ].map((img) => (
            <div key={img.src} className="relative overflow-hidden">
              <img src={img.src} alt={img.alt} className="w-full object-cover"
                style={{ maxHeight: '340px', filter: 'brightness(0.95) contrast(1.05)', display: 'block' }} />
              <div className="absolute inset-0 pointer-events-none" style={{ background: VIGNETTE }} />
            </div>
          ))}
        </div>
        <Para>{c.tip1a}</Para>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
          {[
            { src: '/netzteil-mediaplayer.jpeg', alt: 'Linear power supply with media player' },
            { src: '/orbsmart.jpeg',             alt: 'Orbsmart H-01 media player' },
          ].map((img) => (
            <div key={img.src} className="relative overflow-hidden">
              <img src={img.src} alt={img.alt} className="w-full object-cover"
                style={{ maxHeight: '340px', filter: 'brightness(0.95) contrast(1.05)', display: 'block' }} />
              <div className="absolute inset-0 pointer-events-none" style={{ background: VIGNETTE }} />
            </div>
          ))}
        </div>
        <Para>{c.tip1b}</Para>
      </div>

      {/* Tuning Tipp 2 */}
      <div className="mt-16">
        <TippHeader n={2} />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { src: '/ar.jpeg',      alt: 'Analogue output' },
            { src: '/cleaner.jpeg', alt: 'CD cleaner' },
          ].map((img) => (
            <div key={img.src} className="relative overflow-hidden" style={{ height: '320px' }}>
              <img src={img.src} alt={img.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.95) contrast(1.05)', display: 'block' }} />
              <div className="absolute inset-0 pointer-events-none" style={{ background: VIGNETTE }} />
            </div>
          ))}

          {/* CD mat – rotated 90°, same height */}
          <div className="relative overflow-hidden" style={{ height: '320px' }}>
            <img
              src="/cd-matte.jpg"
              alt="CD mat"
              style={{
                position: 'absolute', top: '50%', left: '50%',
                width: '320px', height: 'auto',
                transform: 'translate(-50%, -50%) rotate(90deg)',
                maxWidth: 'none',
                filter: 'brightness(0.95) contrast(1.05)',
              }}
            />
          </div>
        </div>
        <Para>{c.tip2a}</Para>
        <Para mt="mt-4">{c.tip2b}</Para>
      </div>

      {/* Tuning Tipp 3 */}
      <div className="mt-16">
        <TippHeader n={3} />
        <div className="relative overflow-hidden">
          <img src="/abschlusskappen.jpeg" alt="RCA terminating caps on HiFi amplifier inputs" className="w-full object-cover"
            style={{ maxHeight: '480px', filter: 'brightness(0.95) contrast(1.05)', display: 'block' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: VIGNETTE }} />
        </div>
        <Para>{c.tip3a}</Para>

        <div className="relative overflow-hidden mt-10">
          <img src="/digital.jpeg" alt="Digital inputs on the HiFi amplifier" className="w-full object-cover"
            style={{ maxHeight: '480px', filter: 'brightness(0.95) contrast(1.05)', display: 'block' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: VIGNETTE }} />
        </div>
        <Para>{c.tip3b}</Para>

        <div className="relative overflow-hidden mt-10">
          <img src="/abschluss-stecker.jpeg" alt="Terminating caps for all connector types" className="w-full object-cover"
            style={{ maxHeight: '480px', filter: 'brightness(0.95) contrast(1.05)', display: 'block' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: VIGNETTE }} />
        </div>
        <Para>{c.tip3c}</Para>
      </div>

      {/* Tuning Tipp 4 */}
      <div className="mt-16">
        <TippHeader n={4} />
        <p className="font-mono text-[0.74rem] leading-[2] text-stone tracking-[0.03em] mb-10 border-l border-gold/20 pl-5">
          {c.tip4a}
        </p>
        <div className="relative overflow-hidden">
          <img src="/sicherung1.jpeg" alt="HiFi fuse replacement" className="w-full object-cover"
            style={{ maxHeight: '480px', filter: 'brightness(0.95) contrast(1.05)', display: 'block' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: VIGNETTE }} />
        </div>
      </div>

      {/* Tuning Tipp 5 */}
      <div className="mt-16">
        <TippHeader n={5} />
        <div className="relative overflow-hidden">
          <img src="/netzleiste-ps.jpg" alt="Power strip with PS Audio Noise Harvester" className="w-full object-contain"
            style={{ filter: 'brightness(0.95) contrast(1.05)', display: 'block' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: VIGNETTE }} />
        </div>
        <Para>{c.tip5a}</Para>
        <Para mt="mt-4">{c.tip5b}</Para>
      </div>

    </section>
  )
}
