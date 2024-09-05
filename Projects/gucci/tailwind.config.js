/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayStart: 'rgba(171, 171, 171, 1)',
        grayEnd: 'rgba(215, 215, 215, 1)',
      },
    },
  },
  plugins: [],
}

