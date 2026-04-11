import React from 'react'
import Cursor from './components/Cursor'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import AffiliateDisclaimer from './components/AffiliateDisclaimer'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-stone overflow-x-hidden">
      <Cursor />
      <div className="grain-overlay" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <AffiliateDisclaimer />
      </main>
      <Footer />
    </div>
  )
}
