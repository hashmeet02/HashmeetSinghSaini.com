/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    './public/index.html',  
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto Mono"', 'monospace'],
      },
      animation: {
        'gradient': 'gradient 6s linear infinite',
      },
      keyframes: {
        'gradient': {
          to: { 'background-position': '200% center' },
        }
      },   
    },
  },
  plugins: [],
}

