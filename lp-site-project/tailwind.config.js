/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        warmWhite: "#FAF7F4",
        charcoal: "#1F1B1C",
        roseGold: "#B76E79",
        champagneRose: "#E8C4BE",
        metallicGold: "#C9A46A",
        wineRose: "#6F263D",
        softBorder: "#E7DAD4",
      },
    },
  },
  plugins: [],
};
