import React from 'react'
import { CATEGORIES } from '../data/products'

export default function CategoryFilter({ active, onChange }) {
  return (
    <div className="flex gap-3 overflow-x-auto px-8 lg:px-12 py-5 border-b border-obsidian-200 scrollbar-none">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`font-mono text-[0.6rem] tracking-[0.15em] uppercase px-5 py-2 border transition-all duration-250 whitespace-nowrap cursor-pointer ${
            active === cat.id
              ? 'border-gold text-gold bg-gold/5'
              : 'border-obsidian-200 text-muted hover:border-gold hover:text-gold hover:bg-gold/5'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
