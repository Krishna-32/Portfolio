/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackk : '#1e1e1c',
        whitee : '#d5d4d3',
        greyy : '#333331',
      },
      fontFamily: {
        halyard: ["halyard", "sans-serif"],
        seasonr: ["seasonr", "sans-serif"],
        seasonb: ["seasonb", "sans-serif"],
      }
    },
  },
  plugins: [],
}

