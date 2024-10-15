/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bellina: ["bellina", "sans-serif"],
        gilroy: ["gilroy", "sans-serif"],
      }
    },
  },
  plugins: [],
}

