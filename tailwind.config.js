/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        omnes: ["Omnes", ...defaultTheme.fontFamily.sans],
      },
      width: {
        88: "22rem",
      },
      screens: {
        timelinelg: "1065px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
