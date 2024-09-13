/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackk : '#090909',
        whitee : '#efefea',
      },
      fontFamily: {
        founder: ["founder", "sans-serif"],
        formulal: ["formulal", "sans-serif"],
        formulab: ["formulab", "sans-serif"],
      }
    },
  },
  plugins: [],
}

