import React, { useState, useEffect } from 'react'

export default function CookieBanner({ onNavigate }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] px-4 pb-4 md:px-8 md:pb-6">
      <div
        className="relative max-w-4xl mx-auto border border-obsidian-200 bg-obsidian/95 backdrop-blur-xl p-6 md:p-8"
        style={{ boxShadow: '0 -4px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.08)' }}
      >
        {/* Gold top accent */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

        <div className="flex flex-col md:flex-row md:items-center gap-6">

          {/* Icon + Text */}
          <div className="flex items-start gap-4 flex-1">
            <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-sm">🍪</span>
            </div>
            <div>
              <p className="font-mono text-[0.68rem] leading-[1.9] text-stone tracking-[0.02em]">
                Diese Website verwendet keine eigenen Cookies. Beim Klick auf
                Affiliate-Links zu <strong className="text-cream">Amazon.de</strong> können
                dort Cookies gesetzt werden, um Käufe dem Partnerprogramm zuzuordnen.
                Weitere Informationen finden Sie in unserer{' '}
                <button
                  onClick={() => { onNavigate('datenschutz'); decline() }}
                  className="text-gold/80 hover:text-gold underline underline-offset-2 transition-colors duration-200"
                >
                  Datenschutzerklärung
                </button>
                .
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={decline}
              className="font-mono text-[0.6rem] tracking-[0.16em] uppercase text-muted border border-obsidian-200 px-4 py-2.5 hover:border-gold/30 hover:text-stone transition-all duration-300"
            >
              Ablehnen
            </button>
            <button
              onClick={accept}
              className="font-mono text-[0.6rem] tracking-[0.16em] uppercase font-bold bg-gold text-obsidian px-5 py-2.5 hover:bg-gold-light transition-all duration-300"
              style={{ boxShadow: '0 0 20px rgba(201,168,76,0.25)' }}
            >
              Akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
