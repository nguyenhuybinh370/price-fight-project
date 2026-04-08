export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#00113A",
        gold: "#FED488",
        red: {
          light: "#FF524C",
          mid: "#BA1A1A",
          dark: "#5A0006",
        },
        subtitle: "#94A3B8",
      },
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
}