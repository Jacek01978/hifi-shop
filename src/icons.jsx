// Custom SVG Icons für alle HiFi-Produkte

// ── Dual RCA (Supra Cables) ─────────────────────────────────────────
export function DualRCAIcon({ size = 28, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Kabel oben */}
      <rect x="1" y="7" width="9" height="4" rx="2" fill={color} opacity="0.5" />
      {/* Stecker oben */}
      <circle cx="17" cy="9" r="5.5" stroke={color} strokeWidth="1.4" opacity="0.9" />
      <circle cx="17" cy="9" r="3.2" stroke={color} strokeWidth="0.9" opacity="0.4" />
      <circle cx="17" cy="9" r="1.4" fill={color} opacity="0.95" />
      <rect x="10" y="8" width="3" height="2" rx="1" fill={color} opacity="0.45" />

      {/* Kabel unten */}
      <rect x="1" y="21" width="9" height="4" rx="2" fill={color} opacity="0.5" />
      {/* Stecker unten */}
      <circle cx="17" cy="23" r="5.5" stroke={color} strokeWidth="1.4" opacity="0.9" />
      <circle cx="17" cy="23" r="3.2" stroke={color} strokeWidth="0.9" opacity="0.4" />
      <circle cx="17" cy="23" r="1.4" fill={color} opacity="0.95" />
      <rect x="10" y="22" width="3" height="2" rx="1" fill={color} opacity="0.45" />

      {/* Verbindungsmantel */}
      <rect x="22" y="7" width="4" height="18" rx="2" fill={color} opacity="0.2" stroke={color} strokeWidth="0.8" />
      {/* L / R Label */}
      <text x="23.2" y="13" fontSize="3.2" fill={color} opacity="0.7" fontFamily="monospace">L</text>
      <text x="23" y="22" fontSize="3.2" fill={color} opacity="0.7" fontFamily="monospace">R</text>
    </svg>
  )
}

// ── 1. Cinch / RCA Stecker ──────────────────────────────────────────
export function CinchCableIcon({ size = 28, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="13.5" width="11" height="5" rx="2.5" fill={color} opacity="0.55" />
      <circle cx="19" cy="16" r="7.5" stroke={color} strokeWidth="1.6" opacity="0.9" />
      <circle cx="19" cy="16" r="4.8" stroke={color} strokeWidth="1" opacity="0.45" />
      <circle cx="19" cy="16" r="2" fill={color} opacity="0.95" />
      <rect x="11" y="14.5" width="3.5" height="3" rx="1" fill={color} opacity="0.45" />
      <line x1="2" y1="15.2" x2="10" y2="15.2" stroke={color} strokeWidth="0.8" opacity="0.3" />
      <line x1="2" y1="16.8" x2="10" y2="16.8" stroke={color} strokeWidth="0.8" opacity="0.3" />
    </svg>
  )
}

// ── 2. XLR Stecker ──────────────────────────────────────────────────
export function XLRCableIcon({ size = 28, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Kabel */}
      <rect x="1" y="13.5" width="7" height="5" rx="2.5" fill={color} opacity="0.5" />
      {/* Steckergehäuse */}
      <rect x="8" y="7" width="16" height="18" rx="4" stroke={color} strokeWidth="1.5" opacity="0.9" />
      {/* Verriegelungsring */}
      <rect x="24" y="10" width="3" height="12" rx="1.5" fill={color} opacity="0.35" />
      {/* 3 Pins im Dreieck */}
      <circle cx="16" cy="12.5" r="1.5" fill={color} opacity="0.95" />
      <circle cx="12.5" cy="18.5" r="1.5" fill={color} opacity="0.95" />
      <circle cx="19.5" cy="18.5" r="1.5" fill={color} opacity="0.95" />
      {/* Pin-Markierung */}
      <circle cx="16" cy="12.5" r="0.5" fill={color} opacity="0.4" />
    </svg>
  )
}

// ── 3. Schuko Netzkabel ─────────────────────────────────────────────
export function PowerCableIcon({ size = 28, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Kabel */}
      <rect x="1" y="14" width="8" height="4" rx="2" fill={color} opacity="0.5" />
      {/* Steckergehäuse */}
      <rect x="9" y="6" width="15" height="20" rx="4" stroke={color} strokeWidth="1.5" opacity="0.9" />
      {/* Schuko Seitenkontakte */}
      <rect x="7" y="13" width="2" height="6" rx="1" fill={color} opacity="0.5" />
      <rect x="23" y="13" width="2" height="6" rx="1" fill={color} opacity="0.5" />
      {/* Phase Pin */}
      <rect x="13.5" y="10" width="2" height="7" rx="1" fill={color} opacity="0.9" />
      {/* Neutral Pin */}
      <rect x="16.5" y="10" width="2" height="7" rx="1" fill={color} opacity="0.9" />
      {/* Kabeladern */}
      <line x1="2" y1="15.2" x2="8" y2="15.2" stroke={color} strokeWidth="0.8" opacity="0.3" />
      <line x1="2" y1="16.8" x2="8" y2="16.8" stroke={color} strokeWidth="0.8" opacity="0.3" />
    </svg>
  )
}

// ── 4. Bananenstecker / Lautsprecherkabel ───────────────────────────
export function SpeakerCableIcon({ size = 28, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Kabel oben */}
      <rect x="2" y="10" width="16" height="3" rx="1.5" fill={color} opacity="0.5" />
      {/* Kabel unten */}
      <rect x="2" y="19" width="16" height="3" rx="1.5" fill={color} opacity="0.5" />
      {/* Bananenstecker oben */}
      <rect x="18" y="9.5" width="6" height="4" rx="2" fill={color} opacity="0.9" />
      <circle cx="26" cy="11.5" r="2" fill={color} opacity="0.7" />
      {/* Bananenstecker unten */}
      <rect x="18" y="18.5" width="6" height="4" rx="2" fill={color} opacity="0.9" />
      <circle cx="26" cy="20.5" r="2" fill={color} opacity="0.7" />
      {/* + / – Markierung */}
      <text x="20.5" y="13" fontSize="3.5" fill={color} opacity="0.5" fontFamily="monospace">+</text>
      <text x="21" y="22" fontSize="4" fill={color} opacity="0.5" fontFamily="monospace">–</text>
    </svg>
  )
}

// ── 5. Feinsicherung 5×20mm ─────────────────────────────────────────
export function FuseIcon({ size = 28, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Endkappe links */}
      <rect x="2" y="13" width="5" height="6" rx="1.5" fill={color} opacity="0.8" />
      {/* Endkappe rechts */}
      <rect x="25" y="13" width="5" height="6" rx="1.5" fill={color} opacity="0.8" />
      {/* Glaskörper */}
      <rect x="7" y="12" width="18" height="8" rx="2" stroke={color} strokeWidth="1.4" opacity="0.7" />
      {/* Schmelzdraht */}
      <path d="M9 16 Q12 13 16 16 Q20 19 23 16" stroke={color} strokeWidth="1.2" fill="none" opacity="0.9" />
      {/* Glanzlinie */}
      <rect x="8" y="13.5" width="16" height="1.5" rx="0.75" fill={color} opacity="0.08" />
    </svg>
  )
}

// ── 6. Goldkontakt Sicherung 6,3×32mm ──────────────────────────────
export function GoldFuseIcon({ size = 28, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Endkappe links (breiter = 6,3×32) */}
      <rect x="1" y="12" width="6" height="8" rx="2" fill={color} opacity="0.9" />
      {/* Endkappe rechts */}
      <rect x="25" y="12" width="6" height="8" rx="2" fill={color} opacity="0.9" />
      {/* Gehäuse */}
      <rect x="7" y="11" width="18" height="10" rx="2.5" stroke={color} strokeWidth="1.4" opacity="0.7" />
      {/* Schmelzdraht mit Gold-Wellung */}
      <path d="M9 16 Q11 13 13 16 Q15 19 17 16 Q19 13 21 16 Q22 17.5 23 16"
        stroke={color} strokeWidth="1.2" fill="none" opacity="0.95" />
      {/* Goldglanz */}
      <rect x="8" y="12.5" width="16" height="2" rx="1" fill={color} opacity="0.1" />
    </svg>
  )
}

// ── 7. Gerätefüße / Entkoppler ──────────────────────────────────────
export function DeviceFeetIcon({ size = 28, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Gerät (oben) */}
      <rect x="4" y="7" width="24" height="10" rx="2" stroke={color} strokeWidth="1.4" opacity="0.7" />
      {/* Gerätedetail */}
      <rect x="7" y="10" width="6" height="2" rx="1" fill={color} opacity="0.3" />
      <circle cx="20" cy="11" r="1.5" stroke={color} strokeWidth="1" opacity="0.5" />
      {/* 3 Entkopplungsfüße */}
      <path d="M9 17 L7 25 L11 25 Z" fill={color} opacity="0.8" />
      <path d="M16 17 L14 25 L18 25 Z" fill={color} opacity="0.8" />
      <path d="M23 17 L21 25 L25 25 Z" fill={color} opacity="0.8" />
      {/* Boden */}
      <line x1="4" y1="26" x2="28" y2="26" stroke={color} strokeWidth="1.2" opacity="0.4" />
    </svg>
  )
}

// ── 8. Pyramidenschaum Absorber ─────────────────────────────────────
export function AcousticAbsorberIcon({ size = 28, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Grundplatte */}
      <rect x="2" y="24" width="28" height="4" rx="1" fill={color} opacity="0.4" />
      {/* Pyramide 1 */}
      <path d="M4 24 L9 8 L14 24 Z" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.15" opacity="0.9" />
      {/* Pyramide 2 */}
      <path d="M11 24 L16 6 L21 24 Z" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.2" opacity="0.9" />
      {/* Pyramide 3 */}
      <path d="M18 24 L23 8 L28 24 Z" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.15" opacity="0.9" />
      {/* Schallwellen-Andeutung */}
      <path d="M2 14 Q4 12 6 14" stroke={color} strokeWidth="0.8" fill="none" opacity="0.35" />
    </svg>
  )
}

// ── 9. Lautsprecher Spikes ──────────────────────────────────────────
export function SpeakerSpikesIcon({ size = 28, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Lautsprechergehäuse */}
      <rect x="3" y="4" width="26" height="18" rx="2" stroke={color} strokeWidth="1.4" opacity="0.8" />
      {/* Membran */}
      <circle cx="16" cy="13" r="6" stroke={color} strokeWidth="1.2" opacity="0.6" />
      <circle cx="16" cy="13" r="2.5" stroke={color} strokeWidth="1" opacity="0.4" />
      <circle cx="16" cy="13" r="1" fill={color} opacity="0.7" />
      {/* 3 Spikes */}
      <path d="M8 22 L6 30 L10 30 Z" fill={color} opacity="0.85" />
      <path d="M16 22 L14 30 L18 30 Z" fill={color} opacity="0.85" />
      <path d="M24 22 L22 30 L26 30 Z" fill={color} opacity="0.85" />
    </svg>
  )
}

// ── 10. Schallplatten Reinigungsflüssigkeit ─────────────────────────
export function VinylCleanerIcon({ size = 28, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Vinyl-Schallplatte */}
      <circle cx="16" cy="16" r="13" stroke={color} strokeWidth="1.4" opacity="0.8" />
      <circle cx="16" cy="16" r="9.5" stroke={color} strokeWidth="0.8" opacity="0.3" />
      <circle cx="16" cy="16" r="6.5" stroke={color} strokeWidth="0.8" opacity="0.25" />
      <circle cx="16" cy="16" r="3.5" stroke={color} strokeWidth="1" opacity="0.5" />
      {/* Label-Mitte */}
      <circle cx="16" cy="16" r="2" fill={color} opacity="0.35" />
      {/* Mittelloch */}
      <circle cx="16" cy="16" r="0.8" fill={color} opacity="0.9" />
      {/* Reinigungsstrahl */}
      <path d="M24 5 L27 2 M25 8 L29 7 M22 3 L23 0" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

// ── 11. Kontaktspray Dose ───────────────────────────────────────────
export function ContactSprayIcon({ size = 28, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sprühdose Körper */}
      <rect x="9" y="10" width="12" height="19" rx="3" stroke={color} strokeWidth="1.4" opacity="0.85" />
      {/* Dose Deckel */}
      <rect x="11" y="7" width="8" height="4" rx="2" fill={color} opacity="0.5" />
      {/* Ventilknopf */}
      <rect x="14" y="4" width="4" height="4" rx="1.5" fill={color} opacity="0.8" />
      {/* Düse */}
      <rect x="18" y="5" width="5" height="2" rx="1" fill={color} opacity="0.6" />
      {/* Sprühnebel */}
      <path d="M24 4 Q27 3 28 5" stroke={color} strokeWidth="0.9" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M24 6 Q28 6 29 8" stroke={color} strokeWidth="0.9" fill="none" strokeLinecap="round" opacity="0.55" />
      <path d="M24 8 Q27 9 27 11" stroke={color} strokeWidth="0.9" fill="none" strokeLinecap="round" opacity="0.4" />
      {/* Etikett */}
      <rect x="11" y="16" width="10" height="7" rx="1" fill={color} opacity="0.1" stroke={color} strokeWidth="0.8" />
      <line x1="13" y1="18.5" x2="19" y2="18.5" stroke={color} strokeWidth="0.7" opacity="0.4" />
      <line x1="13" y1="20.5" x2="17" y2="20.5" stroke={color} strokeWidth="0.7" opacity="0.4" />
    </svg>
  )
}

// ── 12. Carbon Tonabnehmerbürste ────────────────────────────────────
export function NeedleBrushIcon({ size = 28, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Griff */}
      <rect x="3" y="12" width="18" height="6" rx="3" fill={color} opacity="0.55" />
      {/* Bürstenkopf */}
      <rect x="18" y="10" width="8" height="10" rx="2" stroke={color} strokeWidth="1.3" opacity="0.8" />
      {/* Carbonfasern (Borsten) */}
      {[19.5, 21, 22.5, 24, 25.5].map((x, i) => (
        <line key={i} x1={x} y1="20" x2={x} y2="26" stroke={color} strokeWidth="0.9" opacity="0.7" />
      ))}
      {/* Nadelspitze */}
      <path d="M14 15 L3 22 L5 22 L14 17 Z" fill={color} opacity="0.5" />
      <circle cx="3" cy="22" r="1" fill={color} opacity="0.9" />
    </svg>
  )
}
