import React from 'react'
import { useLang } from '../context/LanguageContext'

const CONTENT = {
  de: {
    back: 'Zurück zu den HiFi Tipps',
    eyebrow: 'Raumakustik messen',
    title: 'Bass dröhnt? Raumakustik messen und analysieren',
    intro: 'Dröhnende, undefinierte Bässe gehören zu den häufigsten Problemen im Hörraum – und lassen sich mit dem Gehör allein kaum zuverlässig beheben. Wer seinen Raum wirklich optimieren will, kommt um eine Messung nicht herum: Erst sie zeigt schwarz auf weiß, wo Überhöhungen, Auslöschungen und Raummoden liegen – und ob die eigenen Maßnahmen tatsächlich wirken.',
    s1Label: 'Was Sie zum Messen brauchen',
    s1: [
      'Ein Mess-Mikrofon (z.B. miniDSP UMIK-1)',
      'Eine kostenlose Mess-Software wie CARMA oder REW (Room EQ Wizard)',
      'Einen Laptop und Ihre HiFi-Anlage zur Wiedergabe des Testsignals',
    ],
    s2Label: 'So gehen Sie vor',
    s2: [
      'Mikrofon am Hörplatz auf Ohrhöhe positionieren',
      'Sweep-/Testsignal über die Anlage abspielen und aufzeichnen',
      'Frequenzgang und Nachhallzeit auswerten – Überhöhungen und Einbrüche werden sofort sichtbar',
      'Besonders im Bass zeigen sich die Raummoden als deutliche Pegelspitzen',
    ],
    s3Label: 'Was Sie mit den Ergebnissen tun',
    s3: [
      'Lautsprecher- und Hörplatz-Position anpassen (oft der wirksamste Schritt)',
      'Bassfallen in den Raumecken einsetzen',
      'Bei Bedarf gezielt per Equalizer/DSP korrigieren',
    ],
    outro: 'Eine Messung nimmt das Rätselraten aus der Raumakustik – Sie sehen genau, wo die Probleme liegen und ob Ihre Maßnahmen den gewünschten Erfolg bringen.',
    videoLabel: 'Video zum Thema',
    videoCaption: 'Im Video: „Der Bass dröhnt? Raumakustik analysieren und auswerten" – Messung und Auswertung mit der Software CARMA.',
    toTipps: '← Zurück zu den HiFi Tipps',
    toShop: 'Produkte entdecken →',
  },
  en: {
    back: 'Back to HiFi Tips',
    eyebrow: 'Measuring room acoustics',
    title: 'Booming bass? Measuring and analysing room acoustics',
    intro: 'Booming, undefined bass is one of the most common problems in the listening room – and can hardly be fixed reliably by ear alone. Anyone who really wants to optimise their room cannot avoid taking a measurement: only it shows clearly where peaks, dips and room modes lie – and whether your own measures are actually working.',
    s1Label: 'What you need to measure',
    s1: [
      'A measurement microphone (e.g. miniDSP UMIK-1)',
      'Free measurement software such as CARMA or REW (Room EQ Wizard)',
      'A laptop and your HiFi system to play the test signal',
    ],
    s2Label: 'How to proceed',
    s2: [
      'Position the microphone at the listening seat at ear height',
      'Play a sweep/test signal through the system and record it',
      'Evaluate the frequency response and reverberation time – peaks and dips become immediately visible',
      'Especially in the bass, room modes appear as pronounced level peaks',
    ],
    s3Label: 'What to do with the results',
    s3: [
      'Adjust speaker and listening positions (often the most effective step)',
      'Use bass traps in the room corners',
      'If needed, correct specifically with an equaliser/DSP',
    ],
    outro: 'A measurement takes the guesswork out of room acoustics – you see exactly where the problems are and whether your measures deliver the desired result.',
    videoLabel: 'Video on the topic',
    videoCaption: 'In the video: "The bass is booming? Analysing and evaluating room acoustics" – measuring and evaluation with the CARMA software (in German).',
    toTipps: '← Back to HiFi Tips',
    toShop: 'Discover products →',
  },
}

export default function AkustikMessung({ onNavigate }) {
  const { lang } = useLang()
  const c = CONTENT[lang] ?? CONTENT.de

  const Section = ({ label, items }) => (
    <section className="py-8 border-b border-obsidian-200">
      <div className="flex items-center gap-4 mb-5">
        <span className="block w-6 h-px bg-gold/60" />
        <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-gold/70">{label}</span>
      </div>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 font-mono text-[0.8rem] leading-[1.9] text-stone tracking-[0.02em]">
            <span className="block w-2.5 h-px bg-gold/60 mt-3 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )

  return (
    <article className="min-h-screen pt-32 pb-24 px-8 lg:px-14 max-w-3xl">

      {/* Back button */}
      <button
        onClick={() => onNavigate('tipps')}
        className="flex items-center gap-2 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted hover:text-gold transition-colors duration-300 mb-12"
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 1L1 9M1 9H7M1 9V3" />
        </svg>
        {c.back}
      </button>

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <span className="block w-8 h-px bg-gold/60" />
        <span className="font-mono text-[0.52rem] tracking-[0.35em] uppercase text-gold/70">{c.eyebrow}</span>
      </div>
      <h1
        className="font-display font-light text-cream tracking-[0.02em] leading-[1.12] mb-8"
        style={{ fontSize: 'clamp(2rem, 4.2vw, 3.2rem)' }}
      >
        {c.title}
      </h1>

      {/* Intro */}
      <p className="font-mono text-[0.84rem] leading-[2] text-stone tracking-[0.02em] pb-8 border-b border-obsidian-200">
        {c.intro}
      </p>

      {/* Sections */}
      <Section label={c.s1Label} items={c.s1} />
      <Section label={c.s2Label} items={c.s2} />
      <Section label={c.s3Label} items={c.s3} />

      {/* Outro */}
      <p className="font-mono text-[0.84rem] leading-[2] text-stone tracking-[0.02em] py-8 border-b border-obsidian-200">
        {c.outro}
      </p>

      {/* Video */}
      <section className="py-8">
        <div className="flex items-center gap-4 mb-5">
          <span className="block w-6 h-px bg-gold/60" />
          <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-gold/70">{c.videoLabel}</span>
        </div>
        <div className="relative w-full overflow-hidden border border-obsidian-200" style={{ paddingTop: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/Y63xlCF1cb4"
            title={c.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="font-mono text-[0.66rem] leading-[1.7] text-muted tracking-[0.02em] mt-2.5">
          ▶ {c.videoCaption}
        </p>
      </section>

      {/* Navigation */}
      <div className="pt-10 flex gap-6 flex-wrap">
        <button
          onClick={() => onNavigate('tipps')}
          className="font-mono text-[0.72rem] tracking-[0.15em] uppercase text-gold/70 hover:text-gold border border-gold/30 hover:border-gold/60 px-5 py-2.5 transition-all duration-300 bg-transparent cursor-pointer"
        >
          {c.toTipps}
        </button>
        <button
          onClick={() => onNavigate('shop')}
          className="font-mono text-[0.72rem] tracking-[0.15em] uppercase bg-gold text-obsidian px-5 py-2.5 hover:bg-gold-light transition-all duration-300 border-none cursor-pointer"
        >
          {c.toShop}
        </button>
      </div>
    </article>
  )
}
