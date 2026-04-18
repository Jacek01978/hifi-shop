// Custom SVG icons für Produkte die kein passendes Emoji haben

export function CinchCableIcon({ size = 28, color = 'currentColor' }) {
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Kabelmantel */}
      <rect x="1" y="13.5" width="11" height="5" rx="2.5" fill={color} opacity="0.55" />

      {/* Außenhülse (Massepin) */}
      <circle cx="19" cy="16" r="7.5" stroke={color} strokeWidth="1.6" fill="none" opacity="0.9" />

      {/* Mittlerer Isolierring */}
      <circle cx="19" cy="16" r="4.8" stroke={color} strokeWidth="1" fill="none" opacity="0.45" />

      {/* Innenleiter / Signalpin */}
      <circle cx="19" cy="16" r="2" fill={color} opacity="0.95" />

      {/* Übergang Kabel → Stecker */}
      <rect x="11" y="14.5" width="3.5" height="3" rx="1" fill={color} opacity="0.45" />

      {/* Kabelstreifen (Ader-Andeutung) */}
      <line x1="2" y1="15.2" x2="10" y2="15.2" stroke={color} strokeWidth="0.8" opacity="0.3" />
      <line x1="2" y1="16.8" x2="10" y2="16.8" stroke={color} strokeWidth="0.8" opacity="0.3" />
    </svg>
  )
}
