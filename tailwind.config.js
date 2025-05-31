/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}',  "./src/**/*.{js,ts,jsx,tsx}",],
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
  plugins: [require('tailwind-scrollbar-hide'),
    function ({addUtilities}){
      const newUtilities ={
        "@supports .scrollbar-thin" :{
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(0, 211, 169) rgb(90, 68, 220)"
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar" :{
            width: "8px"
          },
          "&::-webkit-scrollbar-track":{
            background: "rgb(90, 68, 220)",
            borderRadius: "20px"
          },
          "&::-webkit-scrollbar-thumb":{
            backgroundColor: "rgb(0 211 169)",
            borderRadius: "20px",
            border: "2px solid rgb(90, 68, 220)"
          },
        }, 
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    } ],
};
