
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './pages/**/*.{js,jsx}', './styles/**/*.{css}'],
  theme: {
    extend: {
      colors: {
        primary: '#2A0066',
        accent: '#1BC7D7',
        gold: '#F4C542'
      }
    }
  },
  plugins: []
}
