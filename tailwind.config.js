/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      brand: "#ffc248",
      "brand-light": "#fffbf3",
      dark: "#452f02",
      light: "#f5f5f5",
      gray: "#d7d7d7",
      red: "#eb001b",
      green: "#22d03e",
      service: "#2a9755",
      travel: "#9c4ddd",
      shops: "#ec5aa8",
      videos: "#61ccf0",
      games: "#ee9951",
      papers: "#32af62",
      security: "#efc956",
      gas: "#4f00e6",
      home: "#f8413f",
      food: "#c2efb3",
      tuition: "#006992",
    },
  },
  plugins: [],
};
