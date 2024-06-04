module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "gray-main": "#E8E8E8",
        "yellow-main": "#FFDA77",
        "yellow-sub": "#ffe294",
        "black-main": "#383838"
      },
      fontFamily: {
        sans: ["Rajdhani"]
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
