import React, { useState, useMemo, useEffect, useRef } from 'react'
import { PRODUCTS, KABEL_SUBCATEGORIES } from '../data/products'
import CategoryFilter from './CategoryFilter'
import ProductCard from './ProductCard'

const SUBCAT_LABELS = Object.fromEntries(KABEL_SUBCATEGORIES.map(s => [s.id, s.label]))

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeSub, setActiveSub]           = useState('all')
  const gridRef = useRef(null)

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    setActiveSub('all')
  }

  const filtered = useMemo(() => {
    let list = activeCategory === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === activeCategory)
    if (activeCategory === 'kabel' && activeSub !== 'all') {
      list = list.filter(p => p.subcat === activeSub)
    }
    return list
  }, [activeCategory, activeSub])

  // Gruppen für Kabel-Ansicht (alle Kabel)
  const groups = useMemo(() => {
    if (activeCategory !== 'kabel' || activeSub !== 'all') return null
    const map = {}
    filtered.forEach(p => {
      if (!map[p.subcat]) map[p.subcat] = []
      map[p.subcat].push(p)
    })
    return Object.entries(map)
  }, [filtered, activeCategory, activeSub])

  useEffect(() => {
    if (!gridRef.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    gridRef.current.querySelectorAll('.reveal').forEach(card => observer.observe(card))
    return () => observer.disconnect()
  }, [filtered])

  return (
    <section className="pb-20">
      <CategoryFilter
        active={activeCategory}
        onChangeCategory={handleCategoryChange}
        activeSub={activeSub}
        onChangeSub={setActiveSub}
      />

      {/* Section header */}
      <div className="flex items-baseline gap-6 px-8 lg:px-14 pt-14 pb-10">
        <h2 className="font-display text-[2rem] font-light text-cream tracking-[0.03em]">
          Unsere Produkte
        </h2>
        <span className="font-mono text-[0.56rem] tracking-[0.25em] uppercase text-muted">
          {filtered.length} Artikel
        </span>
        <div className="flex-1 h-px bg-obsidian-200 ml-4" />
      </div>

      {/* Gruppierte Ansicht (nur Kabel → Alle) */}
      {groups ? (
        <div ref={gridRef}>
          {groups.map(([subcat, products]) => (
            <div key={subcat}>
              {/* Subkategorie-Header */}
              <div className="flex items-center gap-4 px-8 lg:px-14 py-4 border-t border-obsidian-200 bg-obsidian-50">
                <span className="block w-3 h-px bg-gold/60" />
                <span className="font-mono text-[0.55rem] tracking-[0.28em] uppercase text-gold/70">
                  {SUBCAT_LABELS[subcat] ?? subcat}
                </span>
                <span className="font-mono text-[0.5rem] tracking-[0.15em] text-muted">
                  {products.length} Artikel
                </span>
                <div className="flex-1 h-px bg-obsidian-200" />
              </div>
              {/* Grid für diese Gruppe */}
              <div
                className="grid gap-px bg-obsidian-200"
                style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}
              >
                {products.map((product, i) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    style={{ transitionDelay: `${(i % 6) * 60}ms` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Standard-Grid (alle anderen Ansichten) */
        <div
          ref={gridRef}
          className="grid gap-px bg-obsidian-200"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}
        >
          {filtered.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              style={{ transitionDelay: `${(i % 6) * 60}ms` }}
            />
          ))}
        </div>
      )}
    </section>
  )
}
