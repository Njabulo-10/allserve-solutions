/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'main-bg':   '#1c0d00',
        'dark-bg':   '#150900',
        'card-bg':   '#2d1500',
        'gold':      '#c9a84c',
        'gold-dark': '#a07830',
        'gold-light':'#e2c47a',
        'accent':    '#4a9fff',
        'cream':     '#d4c4aa',
        'sand':      '#b0957a',
        'wood':      '#8a7060',
        'dark-wood': '#5a4030',
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'sans':    ['Inter', '"Segoe UI"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};