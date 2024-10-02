/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkslategray: '#2F4F4F',
        limegreen: '#C0F10F'
      },
      screens: {
        lgx: '1100px'
      },
    },
  },
  plugins: [],
}