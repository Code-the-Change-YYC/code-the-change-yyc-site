/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        omnes: ['Omnes', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      lilac: '#A689FF',
      white: '#FFFFFF',
      orange: '#FF6B54',
      pink: '#FFD2DC',
      brightPink: '#FF4D6F',
      green: '00D3A9',
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
