const { join } = require("path");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", join(__dirname, "./src/**/*.{js,ts,jsx,tsx}")],
  theme: {
    extend: {
      colors: {
        primary: "#1D3B20", // Main green
        secondary: "#BF0517", // Red accent
      },
      fontFamily: {
        sans: ["Axiforma", "sans-serif"],
      },
      fontSize: {
        h1: ["64px", { fontWeight: "700" }],
        h2: ["48px", { fontWeight: "700" }],
        h3: ["28px", { fontWeight: "700" }],
        body: ["24px", { fontWeight: "500" }],
        small: ["12px", { fontWeight: "500" }],
        hero1: "15rem",
        h2small: "2rem",
      },
    },
  },
  plugins: [],
};
