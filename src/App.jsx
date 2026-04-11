import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import AffiliateDisclaimer from './components/AffiliateDisclaimer'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-stone">
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
