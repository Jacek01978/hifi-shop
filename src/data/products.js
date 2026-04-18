// ─── AFFILIATE TAG ────────────────────────────────────────────────────────────
// Ersetze "DEIN-TAG-21" mit deinem echten Amazon PartnerNet-Tag
const TAG = 'DEIN-TAG-21'

const amazon = (query) =>
  `https://www.amazon.de/s?k=${encodeURIComponent(query)}&tag=${TAG}`

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────
export const CATEGORIES = [
  { id: 'all',        label: 'Alle Produkte' },
  { id: 'kabel',      label: 'Kabel' },
  { id: 'sicherungen',label: 'Sicherungen' },
  { id: 'absorber',   label: 'Absorber & Dämpfer' },
  { id: 'reinigung',  label: 'Reinigungsmittel' },
]

export const ACCENT = {
  kabel:       'text-gold border-gold',
  sicherungen: 'text-blue-400 border-blue-400',
  absorber:    'text-green-400 border-green-400',
  reinigung:   'text-pink-400 border-pink-400',
}

export const ACCENT_BAR = {
  kabel:       'bg-gold',
  sicherungen: 'bg-blue-400',
  absorber:    'bg-green-400',
  reinigung:   'bg-pink-400',
}

export const PRODUCTS = [
  // ── KABEL ──
  {
    id: 1, cat: 'kabel',
    icon: '🔌',
    iconComponent: 'CinchCableIcon',
    name: 'Cinch-Stereo Audiokabel OFC Kupfer',
    desc: 'Hochreines OFC-Kupfer, doppelt geschirmt. Minimaler Signalverlust für maximale Klangtreue. Ideal für Verstärker, CD-Player und DAC-Verbindungen.',
    price: 'ab 29,–',
    href: amazon('cinch audiokabel ofc kupfer hifi'),
  },
  {
    id: 2, cat: 'kabel',
    icon: '🎧',
    iconComponent: 'XLRCableIcon',
    name: 'XLR Symmetrisches Audiokabel',
    desc: 'Professionelles symmetrisches Kabel mit Neutrik-Steckern, optimal zur Brummunterdrückung. Unverzichtbar in störungsarmen Studio- und HiFi-Setups.',
    price: 'ab 18,–',
    href: amazon('xlr kabel neutrik hifi symmetrisch'),
  },
  {
    id: 3, cat: 'kabel',
    icon: '⚡',
    iconComponent: 'PowerCableIcon',
    name: 'HiFi Netzkabel audiophil 2,5mm²',
    desc: 'Abgeschirmtes Netzkabel mit 2,5mm² Querschnitt und Schuko-Stecker. Reduziert Netzrauschen spürbar für saubereren Klang.',
    price: 'ab 45,–',
    href: amazon('hifi netzkabel audiophil schuko'),
  },
  {
    id: 4, cat: 'kabel',
    icon: '🔗',
    iconComponent: 'SpeakerCableIcon',
    name: 'Lautsprecherkabel OFC 2×2,5mm²',
    desc: 'Sauerstofffreies Kupfer in Bananencrimpausführung. Klarer, druckvoller Bassfundament durch minimierten Übergangswiderstand.',
    price: 'ab 34,–',
    href: amazon('lautsprecherkabel ofc 2x2.5mm hifi'),
  },

  // ── SICHERUNGEN ──
  {
    id: 5, cat: 'sicherungen',
    icon: '🔒',
    iconComponent: 'FuseIcon',
    name: 'HiFi Feinsicherung Silber 5×20mm',
    desc: 'Audiophile Silbersicherung mit reinem Schmelzdraht für verbesserte Leitfähigkeit und Dynamik. Kompatibel mit vielen Verstärkern und Netzteilen.',
    price: 'ab 12,–',
    href: amazon('hifi feinsicherung silber 5x20 audiophil'),
  },
  {
    id: 6, cat: 'sicherungen',
    icon: '✨',
    iconComponent: 'GoldFuseIcon',
    name: 'Goldkontakt Sicherung 6,3×32mm',
    desc: 'Hochwertige Gerätesicherung mit vergoldeten Kontakten. Reduziert Übergangswiderstände – klangliche Verbesserungen gegenüber Standardsicherungen.',
    price: 'ab 19,–',
    href: amazon('hifi sicherung gold 6.3x32mm audiophil'),
  },

  // ── ABSORBER ──
  {
    id: 7, cat: 'absorber',
    icon: '🟢',
    iconComponent: 'DeviceFeetIcon',
    name: 'Gerätefüße Entkoppler Edelstahl',
    desc: 'Präzisionsgefertigte Entkopplungsfüße aus Edelstahl mit Spitzenlager. Minimieren Körperschall und Mikrophonie in Verstärkern und CD-Playern.',
    price: 'ab 39,–',
    href: amazon('hifi geratefusse entkoppler edelstahl spitzenlager'),
  },
  {
    id: 8, cat: 'absorber',
    icon: '🎛️',
    iconComponent: 'AcousticAbsorberIcon',
    name: 'Raumakustik Absorber Schaumstoff',
    desc: 'Breitband-Absorber aus akustischem Pyramidenschaum. Reduziert Raumreflexionen, Flatterechos und störende Frequenzüberhöhungen im Hörraum.',
    price: 'ab 49,–',
    href: amazon('raumakustik absorber pyramidenschaum hifi studio'),
  },
  {
    id: 9, cat: 'absorber',
    icon: '🔵',
    iconComponent: 'SpeakerSpikesIcon',
    name: 'Lautsprecher Spikes & Teller-Set',
    desc: 'M6 Gewindebolzen-Spikes aus Messing, verchromt. Entkoppeln Lautsprecher vom Untergrund, verbessern Basswiedergabe und Bühnenabbildung.',
    price: 'ab 22,–',
    href: amazon('lautsprecher spikes messing hifi entkopplung'),
  },

  // ── REINIGUNG ──
  {
    id: 10, cat: 'reinigung',
    icon: '💿',
    iconComponent: 'VinylCleanerIcon',
    name: 'Vinyl-Schallplatten Reinigungsflüssigkeit',
    desc: 'Antistatische Reinigungsflüssigkeit für Schallplatten. Löst Staub, Fett und Fingerabdrücke schonend. Inklusive Mikrofasertuch.',
    price: 'ab 16,–',
    href: amazon('vinyl schallplatten reinigungsflussigkeit antistatisch'),
  },
  {
    id: 11, cat: 'reinigung',
    icon: '🧹',
    iconComponent: 'ContactSprayIcon',
    name: 'Kontaktspray Reiniger & Pflegemittel',
    desc: 'Hochwertiges Kontaktspray für Cinch-Buchsen, Lautsprecherklemmen und Potentiometer. Beseitigt Oxidation, Kratzgeräusche und Übergangswiderstand.',
    price: 'ab 11,–',
    href: amazon('kontaktspray hifi reiniger elektronik'),
  },
  {
    id: 12, cat: 'reinigung',
    icon: '🎼',
    iconComponent: 'NeedleBrushIcon',
    name: 'Carbon-Tonabnehmerbürste',
    desc: 'Antistatische Carbonfaserbürste für Vinyl-Nadeln. Schonende Entfernung von Staub und Partikeln, verlängert die Lebensdauer von Tonabnehmer und Platte.',
    price: 'ab 9,–',
    href: amazon('tonabnehmer nadelbürste carbon vinyl antistatisch'),
  },
]
