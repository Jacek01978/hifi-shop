/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        gold: {
          DEFAULT: '#c9a84c',
          light: '#f0d98c',
          dim: '#8a6f30',
          muted: 'rgba(201,168,76,0.15)',
        },
        obsidian: {
          DEFAULT: '#080808',
          50: '#0f0f0f',
          100: '#161616',
          200: '#1e1e1e',
          300: '#2a2a2a',
        },
        cream: '#f0ead8',
        stone: '#d4ccbb',
        muted: '#4a4a4a',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #c9a84c 0%, #f0d98c 50%, #c9a84c 100%)',
        'gradient-dark': 'linear-gradient(180deg, #080808 0%, #111111 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
      },
    },
  },
  plugins: [],
}
