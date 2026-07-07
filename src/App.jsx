import React, { useState } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import IntroSection from './components/IntroSection'
import ProductGrid from './components/ProductGrid'
import AffiliateDisclaimer from './components/AffiliateDisclaimer'
import HifiTipps from './components/HifiTipps'
import Impressum from './components/Impressum'
import Datenschutz from './components/Datenschutz'
import HifiTuning from './components/HifiTuning'
import AudiophilerPC from './components/AudiophilerPC'
import AkustikMessung from './components/AkustikMessung'
import CookieBanner from './components/CookieBanner'
import Footer from './components/Footer'

export default function App() {
  const [page, setPage] = useState('shop')

  return (
    <LanguageProvider>
    <div className="min-h-screen bg-obsidian text-stone overflow-x-hidden">
      <div className="grain-overlay" aria-hidden="true" />
      <Header page={page} onNavigate={setPage} />
      <main>
        {page === 'shop' ? (
          <>
            <Hero onNavigate={setPage} />
            <IntroSection />
            <ProductGrid />
            <AffiliateDisclaimer />
          </>
        ) : page === 'tipps' ? (
          <HifiTipps onNavigate={setPage} />
        ) : page === 'impressum' ? (
          <Impressum onNavigate={setPage} />
        ) : page === 'datenschutz' ? (
          <Datenschutz onNavigate={setPage} />
        ) : page === 'tuning' ? (
          <HifiTuning onNavigate={setPage} />
        ) : page === 'audiophiler-pc' ? (
          <AudiophilerPC onNavigate={setPage} />
        ) : page === 'akustik-messung' ? (
          <AkustikMessung onNavigate={setPage} />
        ) : null}
      </main>
      <Footer onNavigate={setPage} />
      <CookieBanner onNavigate={setPage} />
    </div>
    </LanguageProvider>
  )
}
