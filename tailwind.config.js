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
      green: '#00D3A9',
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-thin': {
          scrollbarWidth: 'thin',
          scrollbarColor: '#00D3A9 #7559fc',
        },
        '.scrollbar-webkit': {
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'var(--scrollbar-track-colour)',
            borderRadius: '20px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'var(--scrollbar-thumb-colour)',
            borderRadius: '20px',
            border: 'none',
          },
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
