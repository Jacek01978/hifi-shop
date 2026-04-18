import React, { useState, useEffect, useRef } from 'react'

const TIPPS = [
  {
    id: 1,
    category: 'Kabel & Verbinder',
    title: 'Warum hochwertige Kabel klanglich einen Unterschied machen',
    teaser: 'Viele Audiophile streiten über den Einfluss von Kabeln – dabei gibt es handfeste physikalische Gründe, warum Kapazitätsbelag, Schirmung und Leitergeometrie den Klang beeinflussen.',
    body: `Kabel sind keine neutralen Verbindungen. Jedes Kabel besitzt einen Widerstand, eine Induktivität und eine Kapazität – das sogenannte RLC-Modell. Bei Cinch-Kabeln spielt besonders der Kapazitätsbelag eine Rolle: Hohe Kapazität in Kombination mit dem Ausgangswiderstand einer Quelle bildet einen Tiefpass, der die Höhen bedämpft.

**Was zu beachten ist:**
- Kapazitätsbelag möglichst unter 100 pF/m wählen
- OFC (Oxygen-Free Copper) reduziert Oxidation und verbessert Leitfähigkeit
- Doppelte Schirmung verhindert HF-Einstreuungen aus WLAN, Mobilfunk und Netzteilen
- Vergoldete Stecker verhindern Kontaktoxidation über Jahre hinweg

Ein gutes Kabel muss nicht teuer sein – aber billiges Kabel kann eine audiophile Kette erheblich limitieren.`,
    readTime: '3 min',
  },
  {
    id: 2,
    category: 'Aufstellung & Raumakustik',
    title: 'Lautsprecher richtig aufstellen – die wichtigsten Grundregeln',
    teaser: 'Die Aufstellung der Lautsprecher hat oft mehr Einfluss auf den Klang als der Lautsprecher selbst. Mit ein paar einfachen Regeln holen Sie das Maximum heraus.',
    body: `Selbst die besten Lautsprecher klingen schlecht, wenn sie falsch aufgestellt sind. Raumreflexionen, Bassüberhöhungen und ein diffuses Klangbild sind häufige Folgen.

**Die wichtigsten Regeln:**
- **Gleichschenkliges Dreieck:** Lautsprecher und Hörplatz bilden idealerweise ein gleichseitiges Dreieck
- **Wandabstand:** Mindestens 50 cm Abstand zur Rückwand, um Bassverdickung zu vermeiden
- **Einwinkelung (Toe-in):** Lautsprecher leicht auf den Hörplatz einwinkeln für schärfere Abbildung
- **Entkopplung:** Spikes oder Absorberfüße verhindern, dass Schwingungen auf Möbel übertragen werden
- **Ohrhöhe:** Hochtöner sollte auf Ohrhöhe des Hörers ausgerichtet sein

Ein Nachhall von 0,3–0,5 Sekunden gilt im Wohnzimmer als ideal.`,
    readTime: '4 min',
  },
  {
    id: 3,
    category: 'Sicherungen',
    title: 'HiFi-Sicherungen: Klangverbesserung oder Placebo?',
    teaser: 'Audiophile Sicherungen kosten ein Vielfaches gewöhnlicher Gerätesicherungen. Was steckt dahinter – und lohnt sich der Tausch wirklich?',
    body: `Eine Gerätesicherung liegt direkt im Signalstromkreis. Jeder Übergangswiderstand, jede Materialunreinheit im Schmelzdraht beeinflusst theoretisch das Netzteil – und damit die Spannungsversorgung der empfindlichen Analogstufen.

**Was hochwertige Sicherungen bieten:**
- Reinerer Schmelzdraht (Silber oder Gold) mit weniger Verunreinigungen
- Vergoldete Endkappen für minimalen Übergangswiderstand
- Engere Fertigungstoleranzen für konstanten Auslösestrom

**Praktischer Hinweis:**
- Immer die korrekte Auslösekennlinie (T = träge, F = flink) verwenden
- Nennstrom exakt einhalten – niemals eine höhere Sicherung einsetzen
- Kontakte vor dem Einbau mit Kontaktspray reinigen

Der klangliche Unterschied ist subtil, aber messbar – besonders in hochwertigen Verstärkern mit Class-A-Endstufen.`,
    readTime: '3 min',
  },
  {
    id: 4,
    category: 'Reinigung & Pflege',
    title: 'Vinyl richtig reinigen – so klingt Ihre Schallplatte wie neu',
    teaser: 'Staub, Fett und Fingerabdrücke sind die größten Feinde der Schallplatte. Mit der richtigen Reinigungsmethode holen Sie verlorene Details zurück.',
    body: `Eine verschmutzte Schallplatte klingt nicht nur schlechter – der Schmutz schleift buchstäblich an der Nadelspitze und beschädigt langfristig sowohl Platte als auch Tonabnehmer.

**Die richtige Reinigungsreihenfolge:**
1. **Trockenreinigung:** Antistatische Carbonfaserbürste vor jedem Abspielen – immer in Rillenrichtung
2. **Nassreinigung:** Reinigungsflüssigkeit aufsprühen, mit Mikrofaserpad in kreisenden Bewegungen einarbeiten
3. **Abtrocknen:** Mit sauberem Mikrofasertuch abtupfen – nicht reiben
4. **Lagerung:** Platteninnerhülle aus säurefreiem Papier verwenden

**Wichtig bei der Nadelreinigung:**
- Nur von hinten nach vorne reinigen (Abspielrichtung)
- Niemals von der Seite – die Nadel kann verbiegen
- Spezielle Nadelreiniger verwenden, kein Alkohol

Eine sauber gepflegte Plattensammlung klingt auch nach Jahrzehnten noch makellos.`,
    readTime: '5 min',
  },
  {
    id: 5,
    category: 'Netzkabel & Stromversorgung',
    title: 'Netzqualität im HiFi – warum sauberer Strom besser klingt',
    teaser: 'Das Stromnetz ist voll von Störungen: Schaltnetzteile, LED-Dimmer und WLAN-Router hinterlassen Spuren im Klang. So schützen Sie Ihre Anlage.',
    body: `Moderne Haushalte sind voller Störquellen: Schaltnetzteile erzeugen hochfrequentes Rauschen, das sich über die Netzleitung in empfindliche Analogstufen einschleicht.

**Maßnahmen für sauberen Netzstrom:**
- **Dedizierte Netzleitung:** Eigene Steckdosenleitung direkt vom Sicherungskasten
- **Audiophiles Netzkabel:** Bessere Schirmung und niedrigere Impedanz reduzieren HF-Einstreuungen
- **Netzfilter/Konditionierer:** Aktive oder passive Netzfilter können Störungen erheblich reduzieren
- **Polarity:** Korrekte Polung des Schukosteckers kann einen Unterschied machen
- **Sternverdrahtung:** Alle HiFi-Geräte an derselben Steckdosenleiste, nicht verteilt

**Einfacher Test:** Legen Sie die Hand auf Ihr Metallgehäuse. Kribbelt es leicht, ist die Polung falsch. Stecker umdrehen!

Qualitätsstrom ist die Grundlage für das volle Potential jeder HiFi-Anlage.`,
    readTime: '4 min',
  },
  {
    id: 6,
    category: 'Absorber & Entkopplung',
    title: 'Gerätefüße & Entkopplung – unterschätzter Klangfaktor',
    teaser: 'Vibrationen aus Lautsprechern, Transformatoren und dem Untergrund arbeiten gegen Ihre Anlage. Richtige Entkopplung bringt mehr Ruhe ins Klangbild.',
    body: `Jeder Verstärker, jeder CD-Player und jede DAC enthält empfindliche Bauteile, die auf Körperschall reagieren. Mikrophonie-Effekte in Röhrenverstärkern und Kondensatoren sind dabei besonders ausgeprägt.

**Entkopplungsprinzipien:**
- **Spitzenlager (Spikes):** Punktueller Kontakt leitet Schwingungen gezielt ab – ideal für Lautsprecher auf Teppich
- **Gummipuffer:** Dämpfen und isolieren – gut für CD-Player und DACs
- **Edelstahl-Entkoppler:** Kombinieren Masse und Dämpfung – hochwirksam unter Verstärkern
- **Sandgefüllte Plattformen:** Maximale Resonanzabsorption für Plattenspieler

**Faustregel:** Leichte Geräte profitieren von Dämpfung (Gummi/Filz), schwere Geräte von Ableitung (Spikes/Kegel).

Selbst ein einfacher Satz Absorberfüße unter dem CD-Player kann das Klangbild spürbar beruhigen.`,
    readTime: '3 min',
  },
  {
    id: 7,
    category: 'Stromversorgung & Sicherheit',
    title: 'Was versteht man unter der Phase eines HiFi-Gerätes?',
    teaser: 'Der Begriff „Phase" taucht in der HiFi-Welt häufig auf – aber was bedeutet er genau, warum ist die richtige Polung wichtig und wie findet man sie heraus?',
    body: `In der Wechselstromtechnik bezeichnet „Phase" die Lage der positiven Halbwelle des Wechselstroms. Bei einem Schukostecker gibt es zwei Leiter: **Phase (L)** und **Neutralleiter (N)**. Da der Schukostecker drehsymmetrisch ist, kann er in beiden Richtungen eingesteckt werden – die Polung ist also zufällig.

**Warum ist das für HiFi relevant?**

In einem HiFi-Gerät liegt der Transformator direkt an der Netzspannung. Je nachdem, wie das Gerät eingesteckt ist, liegt die Phase entweder auf der dem Chassis zugewandten oder abgewandten Wicklungsseite. Dies beeinflusst die kapazitive Kopplung zwischen Trafo und Gehäuse – und damit das Rauschen und Brummen der Anlage.

**Wie erkennt man die richtige Phase?**
- **Berührungstest:** Legen Sie einen Finger auf das Metallgehäuse des eingeschalteten Gerätes. Kribbelt es leicht → Phase falsch, Stecker umdrehen
- **Multimeter:** Spannung zwischen Gehäuse und Schutzerde messen – bei richtiger Phase deutlich niedriger (unter 5V)
- **Phasentester:** Einfaches Werkzeug aus dem Elektrohandel für unter 5 Euro

**Praktische Auswirkungen:**
- Richtige Phasenlage reduziert kapazitive Einstreuungen ins Audiosignal
- Besonders bei Röhrengeräten und Class-A-Verstärkern hörbar relevant
- Bei Mehrkomponentenanlagen sollten alle Geräte auf korrekte Phase geprüft werden

**Sicherheitshinweis:** Der Berührungstest ist nur bei Geräten mit Schutzerdung (Schukostecker) und intaktem Gehäuse unbedenklich. Bei Geräten mit Eurostecker (ohne Erde) niemals am Gehäuse messen.

Die korrekte Phasenlage kostet nichts – und kann das Klangbild spürbar ruhiger und transparenter machen.`,
    readTime: '4 min',
  },
  {
    id: 8,
    category: 'Reinigung & Pflege',
    title: 'Kontakte reinigen lohnt sich',
    teaser: 'Oxidierte und verschmutzte Kontakte sind einer der häufigsten Klangräuber in einer HiFi-Anlage – und einer der einfachsten zu beheben.',
    body: `Im Laufe der Zeit oxidieren alle Metall-Kontakte. Cinch-Buchsen, XLR-Stecker, Lautsprecherklemmen, Potentiometer und sogar Sicherungshalter bilden eine dünne Oxidschicht, die den Übergangswiderstand erhöht. Das Ergebnis: dumpferer Klang, Kratzgeräusche beim Drehen von Reglern und im schlimmsten Fall Signalausfall.

**Welche Kontakte sollten regelmäßig gereinigt werden?**
- Cinch- und XLR-Stecker sowie deren Buchsen
- Lautsprecherklemmen (Bananenbuchsen, Schraubklemmen)
- Potentiometer (Lautstärkeregler, Balance)
- Sicherungshalter und Sicherungskontakte
- Netzstecker und Kaltgerätebuchsen

**Die richtige Vorgehensweise:**
- **Kontaktspray** auf ein Wattestäbchen oder direkt auf den Stecker auftragen
- Stecker mehrfach ein- und ausstecken, um Oxidschicht mechanisch zu lösen
- Bei Potentiometern: Spray in die Achsöffnung sprühen, Regler mehrfach drehen
- Überschüssiges Spray nach einigen Minuten mit einem trockenen Tuch abtupfen

**Was verwenden?**
- **Kontaktreiniger (z.B. DeoxIT D5):** Löst Oxidation zuverlässig
- **Kontaktpflegeöl (z.B. DeoxIT Gold G5):** Schützt gereinigte Kontakte langfristig vor Neuoxidation
- **Kein WD-40:** Enthält Lösungsmittel, die Kunststoffteile angreifen und Rückstände hinterlassen

**Wie oft?**
- Cinch/XLR-Verbindungen: einmal jährlich
- Potentiometer: bei ersten Kratzgeräuschen sofort
- Lautsprecherklemmen: alle 2 Jahre oder bei Klangverschlechterung

Eine gründliche Kontaktreinigung kostet wenig Zeit und kann klanglich so viel bewirken wie ein teures Upgrade.`,
    readTime: '4 min',
  },
  {
    id: 9,
    category: 'Reinigung & Pflege',
    title: 'Verstaubte HiFi-Geräte und Lautsprechermembranen – warum Sauberkeit klanglich zählt',
    teaser: 'Staub ist nicht nur optisch unschön – er beeinflusst die Wärmeableitung von Geräten, dämpft Lautsprechermembranen und kann langfristig zu Schäden führen.',
    body: `Staub ist der stille Feind jeder HiFi-Anlage. Er sammelt sich in Lüftungsschlitzen, auf Platinen, auf Lautsprechermembranen und in Hochtönern – und richtet dabei mehr Schaden an, als die meisten Musikliebhaber ahnen.

**Auswirkungen von Staub auf HiFi-Geräte:**
- **Überhitzung:** Verstärker und CD-Player benötigen freie Lüftungsschlitze. Zugestaubte Öffnungen stauen Wärme, verkürzen die Lebensdauer von Kondensatoren und Transistoren erheblich
- **Kriechströme:** Staub auf Platinen kann bei Feuchtigkeit leitfähig werden und Kurzschlüsse verursachen
- **Potentiometer:** Staub in Reglern verstärkt Kratzgeräusche und Oxidation

**Auswirkungen auf Lautsprechermembranen:**
- Staubablagerungen auf Papiermembranen erhöhen die bewegte Masse – das bedämpft besonders die Höhen- und Mitteltonwiedergabe
- Hochtönermembranen (Gewebe, Metall, Folie) reagieren empfindlich auf Staubpartikel, die die Schwingfähigkeit einschränken
- Staubkörner können bei hohen Pegeln in die Schwingspulenzentrierung gelangen und mechanische Schäden verursachen

**Richtige Reinigung von HiFi-Geräten:**
- Lüftungsschlitze mit weichem Pinsel oder Druckluft (aus der Dose) reinigen
- Gehäuseoberflächen mit leicht feuchtem Mikrofasertuch abwischen – niemals nass
- Potentiometer und Schalter mit Kontaktspray behandeln
- Niemals Staubsauger direkt auf Platinen halten – elektrostatische Entladung möglich

**Richtige Reinigung von Lautsprechermembranen:**
- **Tieftöner (Papier/Kevlar):** Weichen Pinsel in kreisenden Bewegungen verwenden, niemals drücken
- **Hochtöner (Gewebe):** Nur mit sehr weichem Pinsel oder speziellem Membranreiniger – nie mit Druckluft
- **Metallmembranen (Aluminium, Titan):** Trockenes Mikrofasertuch, äußerst sanft
- **Seidenkuppeln:** Am empfindlichsten – nur mit weichem Pinsel ohne Druck

**Reinigungsintervall:**
- Gehäuse und Lüftungsschlitze: alle 3 Monate
- Membranen: halbjährlich oder bei sichtbarem Staubbelag
- Nach Renovierungsarbeiten in der Wohnung: sofort

Regelmäßige Pflege erhält nicht nur den Klang – sie verlängert die Lebensdauer Ihrer wertvollen Geräte um Jahre.`,
    readTime: '5 min',
  },
]

const CATEGORIES = ['Alle', ...new Set(TIPPS.map(t => t.category))]

export default function HifiTipps() {
  const [activeCategory, setActiveCategory] = useState('Alle')
  const [openId, setOpenId] = useState(null)
  const sectionRef = useRef(null)

  const filtered = activeCategory === 'Alle' ? TIPPS : TIPPS.filter(t => t.category === activeCategory)

  useEffect(() => {
    if (!sectionRef.current) return
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.08 }
    )
    sectionRef.current.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [filtered])

  return (
    <section className="min-h-screen pt-32 pb-20 px-8 lg:px-14">

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="block w-10 h-px bg-gold/60" />
          <span className="font-mono text-[0.55rem] tracking-[0.4em] uppercase text-gold/70">Wissen & Ratgeber</span>
        </div>
        <h1 className="font-display font-light text-cream leading-tight mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
          HiFi <em className="text-gradient-gold not-italic">Tipps</em>
        </h1>
        <p className="font-mono text-[0.65rem] leading-[1.9] text-muted tracking-[0.04em] max-w-lg">
          Praxiswissen für audiophile Ansprüche. Von Kabelphysik über Raumakustik bis zur richtigen Pflege Ihrer Schallplatten.
        </p>
      </div>

      {/* Kategorie-Filter */}
      <div className="flex gap-2 flex-wrap mb-10 border-b border-obsidian-200 pb-5">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-mono text-[0.55rem] tracking-[0.18em] uppercase px-4 py-2 border transition-all duration-250 whitespace-nowrap ${
              activeCategory === cat
                ? 'border-gold/60 text-gold bg-gold/[0.06]'
                : 'border-obsidian-300 text-muted hover:border-gold/30 hover:text-stone'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Artikel-Grid */}
      <div ref={sectionRef} className="grid gap-px bg-obsidian-200" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}>
        {filtered.map((tipp, i) => (
          <article
            key={tipp.id}
            className="reveal group bg-obsidian-50 border border-obsidian-200 p-7 flex flex-col gap-4 cursor-pointer transition-all duration-300 hover:bg-obsidian-100"
            style={{ transitionDelay: `${(i % 6) * 60}ms` }}
            onClick={() => setOpenId(openId === tipp.id ? null : tipp.id)}
          >
            {/* Kategorie */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="block w-3 h-px bg-gold/60" />
                <span className="font-mono text-[0.5rem] tracking-[0.3em] uppercase text-gold/70">{tipp.category}</span>
              </div>
              <span className="font-mono text-[0.5rem] tracking-[0.1em] text-muted">{tipp.readTime} Lesezeit</span>
            </div>

            {/* Titel */}
            <h2 className="font-display text-[1.25rem] font-normal text-cream leading-snug tracking-[0.01em] group-hover:text-gold transition-colors duration-300">
              {tipp.title}
            </h2>

            {/* Teaser */}
            <p className="font-mono text-[0.59rem] leading-[1.85] text-muted tracking-[0.03em]">
              {tipp.teaser}
            </p>

            {/* Aufklapp-Inhalt */}
            <div className={`overflow-hidden transition-all duration-500 ${openId === tipp.id ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pt-4 border-t border-obsidian-200">
                {tipp.body.split('\n\n').map((block, j) => (
                  block.startsWith('**') && block.endsWith('**') ? (
                    <p key={j} className="font-mono text-[0.58rem] text-gold/80 tracking-[0.08em] uppercase mb-2 mt-4">{block.replace(/\*\*/g, '')}</p>
                  ) : block.startsWith('- ') || block.includes('\n- ') ? (
                    <ul key={j} className="mb-3">
                      {block.split('\n').filter(l => l.trim()).map((line, k) => (
                        <li key={k} className="flex items-start gap-2 font-mono text-[0.58rem] leading-[1.8] text-muted mb-1">
                          <span className="block w-2 h-px bg-gold/40 mt-2 shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: line.replace(/^- /, '').replace(/\*\*(.*?)\*\*/g, '<span class="text-stone">$1</span>') }} />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p key={j} className="font-mono text-[0.58rem] leading-[1.85] text-muted tracking-[0.03em] mb-3"
                      dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, '<span class="text-stone">$1</span>') }}
                    />
                  )
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-auto pt-2">
              <div className="h-px flex-1 bg-obsidian-300 group-hover:bg-gold/20 transition-colors duration-300" />
              <span className="font-mono text-[0.52rem] tracking-[0.15em] uppercase text-gold/60 ml-4">
                {openId === tipp.id ? 'Schließen ↑' : 'Lesen →'}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
