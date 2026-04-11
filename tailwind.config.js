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
          light: '#e8c97a',
          dim: '#8a6f30',
        },
        obsidian: {
          DEFAULT: '#0a0a0a',
          50: '#111111',
          100: '#1a1a1a',
          200: '#222222',
        },
        cream: '#f0ead8',
        stone: '#d4ccbb',
        muted: '#5a5a5a',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spinSlow: {
          to: { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease both',
        'spin-slow': 'spinSlow 20s linear infinite',
      },
    },
  },
  plugins: [],
}
