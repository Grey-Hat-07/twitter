/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/*.tsx',
    './components/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        twitter: '#00ADED',
      }
    },
  },
  plugins: [],
}
