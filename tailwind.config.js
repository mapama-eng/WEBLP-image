/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F6F0E8",
        pearl: "#FFFDF8",
        greige: "#D8CEC1",
        taupe: "#A99C8D",
        ink: "#23211E",
        gold: "#B89A5E",
        blush: "#D8C7BD",
      },
      fontFamily: {
        serifjp: [
          '"Yu Mincho"',
          '"Hiragino Mincho ProN"',
          '"Noto Serif JP"',
          "serif",
        ],
        sansjp: [
          '"Yu Gothic"',
          '"Hiragino Sans"',
          '"Noto Sans JP"',
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(75, 62, 48, 0.12)",
      },
    },
  },
  plugins: [],
};
