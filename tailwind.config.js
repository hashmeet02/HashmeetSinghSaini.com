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
    },
  },
  plugins: [],
}

