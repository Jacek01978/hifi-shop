# AudioPure – HiFi Zubehör Affiliate Shop

Ein eleganter HiFi-Zubehör Shop mit React + Vite + Tailwind CSS.

## Tech Stack

- **React 18** – UI-Komponenten
- **Vite 5** – Build-Tool & Dev-Server
- **Tailwind CSS 3** – Utility-First Styling
- **Google Fonts** – Cormorant Garamond + DM Mono

## Setup

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. Dev-Server starten
npm run dev

# 3. Produktions-Build erstellen
npm run build

# 4. Build-Vorschau
npm run preview
```

## Affiliate-Tag konfigurieren

Öffne `src/data/products.js` und ersetze `DEIN-TAG-21` mit deinem
echten **Amazon PartnerNet-Tag**:

```js
const TAG = 'deinname-21'  // ← hier eintragen
```

## Neue Produkte hinzufügen

Füge in `src/data/products.js` ein neues Objekt im `PRODUCTS`-Array hinzu:

```js
{
  id: 13,                    // eindeutige ID
  cat: 'kabel',              // kabel | sicherungen | absorber | reinigung
  icon: '🔌',
  name: 'Produktname',
  desc: 'Beschreibung ...',
  price: 'ab 29,–',
  href: amazon('suchanfrage für amazon'),
}
```

## Projektstruktur

```
audiopure/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── products.js        ← Produkte & Affiliate-Links
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── CategoryFilter.jsx
        ├── ProductCard.jsx
        ├── ProductGrid.jsx
        ├── AffiliateDisclaimer.jsx
        └── Footer.jsx
```

## Rechtliche Hinweise (Deutschland)

Als Affiliate-Shop in Deutschland benötigst du zwingend:
- **Impressum** (§ 5 TMG)
- **Datenschutzerklärung** (DSGVO)
- **Affiliate-Hinweis** (bereits integriert)
- Ggf. **Cookie-Banner** bei Tracking
