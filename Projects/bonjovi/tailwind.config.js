/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgblack : '#090909',
        bgwhite : '#efefea'
      }
    },
  },
  plugins: [],
}

