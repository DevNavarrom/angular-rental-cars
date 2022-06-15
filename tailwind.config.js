/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      height: {
        '50': '50vh',
        '60': '60vh',
        '70': '70vh',
        '80': '80vh',
      },
      margin: {
        '350%': '350%',
      },
      flexBasis: {
        '3/10': '30%',
      },
      screens: {
        'xs': {'min': '280px', 'max': '767px'},
        // => @media (min-width: 280px and max-width: 767px) { ... }
      },
    },
  },
  plugins: [],
}
