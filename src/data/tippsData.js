// HiFi-Tipps Artikel – zweisprachig (DE / EN)
// Die IDs und readTime-Werte sind in beiden Sprachen identisch.

export const TIPPS_DATA = {
  de: [
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
      video: 'DhYAESCIEU0',
      videoCaption: 'Dipl.-Ing. Manfred Strassner erläutert, warum hochwertige Kabel einen klanglichen Unterschied machen.',
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
  ],

  en: [
    {
      id: 1,
      category: 'Cables & Connectors',
      title: 'Why high-quality cables make an audible difference',
      teaser: 'Many audiophiles argue about the influence of cables – yet there are solid physical reasons why capacitance, shielding and conductor geometry affect the sound.',
      body: `Cables are not neutral connections. Every cable has resistance, inductance and capacitance – the so-called RLC model. With RCA cables, capacitance plays a particularly important role: high capacitance combined with the output impedance of a source forms a low-pass filter that attenuates the highs.

**What to look out for:**
- Choose capacitance below 100 pF/m where possible
- OFC (Oxygen-Free Copper) reduces oxidation and improves conductivity
- Double shielding prevents RF interference from WiFi, mobile networks and power supplies
- Gold-plated connectors prevent contact oxidation over many years

A good cable doesn't have to be expensive – but a cheap cable can significantly limit an audiophile chain.`,
      readTime: '3 min',
      video: 'DhYAESCIEU0',
      videoCaption: 'Dipl.-Ing. Manfred Strassner explains why high-quality cables make an audible difference (in German).',
    },
    {
      id: 2,
      category: 'Placement & Room Acoustics',
      title: 'Positioning speakers correctly – the most important basic rules',
      teaser: 'Speaker placement often has more influence on the sound than the speaker itself. With a few simple rules you get the most out of your system.',
      body: `Even the best speakers sound poor if positioned incorrectly. Room reflections, bass boom and a diffuse soundstage are common consequences.

**The most important rules:**
- **Equilateral triangle:** Ideally speakers and listening position form an equilateral triangle
- **Wall distance:** At least 50 cm from the rear wall to avoid bass build-up
- **Toe-in:** Angle speakers slightly towards the listening position for sharper imaging
- **Decoupling:** Spikes or absorber feet prevent vibrations from transferring to furniture
- **Ear height:** The tweeter should be aligned with the listener's ear height

A reverberation time of 0.3–0.5 seconds is considered ideal in a living room.`,
      readTime: '4 min',
    },
    {
      id: 3,
      category: 'Fuses',
      title: 'HiFi fuses: sonic improvement or placebo?',
      teaser: 'Audiophile fuses cost many times more than ordinary device fuses. What is behind this – and is the swap really worth it?',
      body: `A device fuse sits directly in the signal power circuit. Every contact resistance, every material impurity in the fuse wire theoretically affects the power supply – and thus the voltage supply to the sensitive analogue stages.

**What high-quality fuses offer:**
- Purer fuse wire (silver or gold) with fewer impurities
- Gold-plated end caps for minimal contact resistance
- Tighter manufacturing tolerances for a consistent trip current

**Practical note:**
- Always use the correct trip characteristic (T = slow-blow, F = fast-blow)
- Match the rated current exactly – never fit a higher-rated fuse
- Clean the contacts with contact spray before installation

The sonic difference is subtle but measurable – especially in high-quality amplifiers with Class-A output stages.`,
      readTime: '3 min',
    },
    {
      id: 4,
      category: 'Cleaning & Care',
      title: 'Cleaning vinyl correctly – make your records sound like new',
      teaser: 'Dust, grease and fingerprints are the biggest enemies of the record. With the right cleaning method you bring back lost detail.',
      body: `A dirty record not only sounds worse – the dirt literally grinds against the stylus tip and, over time, damages both the record and the cartridge.

**The correct cleaning sequence:**
1. **Dry cleaning:** Antistatic carbon fibre brush before every play – always in the direction of the groove
2. **Wet cleaning:** Spray on cleaning fluid, work it in with a microfibre pad in circular motions
3. **Drying:** Dab off with a clean microfibre cloth – do not rub
4. **Storage:** Use an inner sleeve made of acid-free paper

**Important when cleaning the stylus:**
- Only clean from back to front (the playing direction)
- Never from the side – the stylus can bend
- Use a special stylus cleaner, no alcohol

A well-maintained record collection still sounds flawless after decades.`,
      readTime: '5 min',
    },
    {
      id: 5,
      category: 'Power Cables & Supply',
      title: 'Mains quality in HiFi – why clean power sounds better',
      teaser: 'The power grid is full of interference: switching power supplies, LED dimmers and WiFi routers leave their mark on the sound. Here is how to protect your system.',
      body: `Modern households are full of interference sources: switching power supplies generate high-frequency noise that sneaks into sensitive analogue stages via the mains line.

**Measures for clean mains power:**
- **Dedicated mains line:** A separate circuit run directly from the fuse box
- **Audiophile power cable:** Better shielding and lower impedance reduce RF interference
- **Mains filter/conditioner:** Active or passive mains filters can considerably reduce interference
- **Polarity:** Correct polarity of the mains plug can make a difference
- **Star wiring:** Connect all HiFi devices to the same power strip, not spread around

**Simple test:** Place your hand on the metal chassis. If it tingles slightly, the polarity is wrong. Turn the plug around!

Quality power is the foundation for the full potential of any HiFi system.`,
      readTime: '4 min',
    },
    {
      id: 6,
      category: 'Absorbers & Decoupling',
      title: 'Device feet & decoupling – an underrated sonic factor',
      teaser: 'Vibrations from speakers, transformers and the surface beneath work against your system. Proper decoupling brings more calm to the soundstage.',
      body: `Every amplifier, every CD player and every DAC contains sensitive components that react to structure-borne sound. Microphonic effects in tube amplifiers and capacitors are particularly pronounced.

**Decoupling principles:**
- **Spikes:** Point contact channels vibrations away in a targeted manner – ideal for speakers on carpet
- **Rubber buffers:** Damp and isolate – good for CD players and DACs
- **Stainless steel decouplers:** Combine mass and damping – highly effective under amplifiers
- **Sand-filled platforms:** Maximum resonance absorption for turntables

**Rule of thumb:** Light devices benefit from damping (rubber/felt), heavy devices from drainage (spikes/cones).

Even a simple set of absorber feet under the CD player can noticeably calm the soundstage.`,
      readTime: '3 min',
    },
    {
      id: 7,
      category: 'Power Supply & Safety',
      title: 'What is meant by the phase of a HiFi device?',
      teaser: 'The term "phase" comes up frequently in the HiFi world – but what does it mean exactly, why is correct polarity important and how do you find it out?',
      body: `In AC technology, "phase" refers to the position of the positive half-wave of the alternating current. A Schuko plug has two conductors: **phase (L)** and **neutral (N)**. Because the Schuko plug is rotationally symmetrical, it can be inserted either way round – so the polarity is random.

**Why is this relevant for HiFi?**

In a HiFi device the transformer is connected directly to the mains voltage. Depending on how the device is plugged in, the phase sits on either the chassis-facing or the chassis-away winding side. This affects the capacitive coupling between transformer and chassis – and thus the noise and hum of the system.

**How do you identify the correct phase?**
- **Touch test:** Place a finger on the metal chassis of the powered-on device. If it tingles slightly → phase wrong, turn the plug around
- **Multimeter:** Measure the voltage between chassis and protective earth – significantly lower with the correct phase (below 5V)
- **Phase tester:** A simple tool from the electrical shop for under 5 euros

**Practical effects:**
- Correct phase position reduces capacitive interference in the audio signal
- Particularly audible with tube equipment and Class-A amplifiers
- In multi-component systems all devices should be checked for correct phase

**Safety note:** The touch test is only safe with devices that have protective earthing (Schuko plug) and an intact chassis. Never measure on the chassis of devices with a Euro plug (without earth).

Correct phase position costs nothing – and can make the soundstage noticeably calmer and more transparent.`,
      readTime: '4 min',
    },
    {
      id: 8,
      category: 'Cleaning & Care',
      title: 'Cleaning contacts pays off',
      teaser: 'Oxidised and dirty contacts are one of the most common sound thieves in a HiFi system – and one of the easiest to fix.',
      body: `Over time all metal contacts oxidise. RCA sockets, XLR connectors, speaker terminals, potentiometers and even fuse holders form a thin oxide layer that increases contact resistance. The result: a duller sound, scratching noises when turning controls and, in the worst case, signal loss.

**Which contacts should be cleaned regularly?**
- RCA and XLR connectors and their sockets
- Speaker terminals (banana sockets, screw terminals)
- Potentiometers (volume control, balance)
- Fuse holders and fuse contacts
- Mains plugs and IEC sockets

**The correct procedure:**
- Apply **contact spray** to a cotton swab or directly onto the connector
- Plug and unplug the connector several times to mechanically loosen the oxide layer
- For potentiometers: spray into the shaft opening, turn the control several times
- After a few minutes, dab off excess spray with a dry cloth

**What to use?**
- **Contact cleaner (e.g. DeoxIT D5):** Reliably dissolves oxidation
- **Contact treatment oil (e.g. DeoxIT Gold G5):** Protects cleaned contacts against re-oxidation in the long term
- **No WD-40:** Contains solvents that attack plastic parts and leave residue

**How often?**
- RCA/XLR connections: once a year
- Potentiometers: immediately at the first scratching noises
- Speaker terminals: every 2 years or when the sound deteriorates

A thorough contact cleaning takes little time and can do as much for the sound as an expensive upgrade.`,
      readTime: '4 min',
    },
    {
      id: 9,
      category: 'Cleaning & Care',
      title: 'Dusty HiFi devices and speaker cones – why cleanliness matters sonically',
      teaser: 'Dust is not just visually unappealing – it affects heat dissipation, damps speaker cones and can cause damage over time.',
      body: `Dust is the silent enemy of every HiFi system. It collects in ventilation slots, on circuit boards, on speaker cones and in tweeters – causing more damage than most music lovers realise.

**Effects of dust on HiFi devices:**
- **Overheating:** Amplifiers and CD players need free ventilation slots. Dust-clogged openings trap heat and considerably shorten the lifespan of capacitors and transistors
- **Leakage currents:** Dust on circuit boards can become conductive in the presence of moisture and cause short circuits
- **Potentiometers:** Dust in controls increases scratching noises and oxidation

**Effects on speaker cones:**
- Dust deposits on paper cones increase the moving mass – this particularly damps the treble and midrange reproduction
- Tweeter diaphragms (fabric, metal, film) are sensitive to dust particles that restrict their ability to vibrate
- At high levels, dust grains can get into the voice coil centring and cause mechanical damage

**Correct cleaning of HiFi devices:**
- Clean ventilation slots with a soft brush or compressed air (from a can)
- Wipe chassis surfaces with a slightly damp microfibre cloth – never wet
- Treat potentiometers and switches with contact spray
- Never hold a vacuum cleaner directly on circuit boards – electrostatic discharge is possible

**Correct cleaning of speaker cones:**
- **Woofers (paper/Kevlar):** Use a soft brush in circular motions, never press
- **Tweeters (fabric):** Only with a very soft brush or special diaphragm cleaner – never with compressed air
- **Metal diaphragms (aluminium, titanium):** Dry microfibre cloth, extremely gently
- **Silk domes:** The most sensitive – only with a soft brush, no pressure

**Cleaning intervals:**
- Chassis and ventilation slots: every 3 months
- Diaphragms: every six months or when dust is visible
- After renovation work in the home: immediately

Regular care not only preserves the sound – it extends the lifespan of your valuable devices by years.`,
      readTime: '5 min',
    },
  ],
}
