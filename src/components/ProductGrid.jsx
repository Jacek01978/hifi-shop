import React, { useState, useMemo, useEffect, useRef } from 'react'
import { PRODUCTS } from '../data/products'
import CategoryFilter from './CategoryFilter'
import ProductCard from './ProductCard'

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('all')
  const gridRef = useRef(null)

  const filtered = useMemo(
    () => activeCategory === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === activeCategory),
    [activeCategory]
  )

  // Intersection Observer for scroll reveal
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
    const cards = gridRef.current.querySelectorAll('.reveal')
    cards.forEach(card => observer.observe(card))
    return () => observer.disconnect()
  }, [filtered])

  return (
    <section className="pb-20">
      <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

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

      {/* Grid */}
      <div
        ref={gridRef}
        className="grid gap-px bg-obsidian-200 px-0"
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
    </section>
  )
}
