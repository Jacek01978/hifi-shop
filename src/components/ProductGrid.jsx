import React, { useState, useMemo } from 'react'
import { PRODUCTS } from '../data/products'
import CategoryFilter from './CategoryFilter'
import ProductCard from './ProductCard'

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = useMemo(
    () =>
      activeCategory === 'all'
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.cat === activeCategory),
    [activeCategory]
  )

  return (
    <section className="pb-16">
      <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

      {/* Section header */}
      <div className="flex items-baseline gap-6 px-8 lg:px-12 pt-12 pb-8 border-b border-obsidian-200">
        <h2 className="font-display text-3xl font-light text-cream tracking-[0.04em]">
          Unsere Produkte
        </h2>
        <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted">
          {filtered.length} Artikel
        </span>
      </div>

      {/* Grid – 1px gap for seamless dark grid look */}
      <div
        className="grid bg-obsidian-200"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5px',
        }}
      >
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  )
}
