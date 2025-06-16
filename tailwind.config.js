/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // <<< ESSA LINHA É A CHAVE!
  theme: {
    extend: {},
  },
  plugins: [],
}