// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackk: "#212121",
        whitee: "#f1f1f1",
        dark_green: "#004d43",
        light_green: "#cdea68",
      },
      fontFamily: {
        regularNeue: ["NeueMontreal-Regular"], 
        mediumNeue: ["NeueMontreal-Medium"],
        regularCondensedGrotesk : ["GroteskCondensed-Medium"],
        boldGrotesk : ["GroteskCondensed-Bold"],
      },
    },
  },
  plugins: [],
};
