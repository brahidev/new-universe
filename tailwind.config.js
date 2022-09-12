/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'anniversaryKirby': "url('https://kirby.nintendo.com/assets/img/anniversary-bg.jpg')",
        'newsFeed': "url('../public/images/star-gradient-bg.jpg')",
        'zig-zac': "url('https://kirby.nintendo.com/assets/img/zig-zag-border.png')",
        'sky': "url('../public/images/Sky-bg.jpg')",
        'stars-white': "url('../public/images/bg_starpattern.png')",
        'red-footprint': "url('../public/images/Paw-single.png')",
        'footer-bg': "url('../public/images/footer-bg.png')"
      }
    },
    fontFamily: {
      'titleExtraBold': ['"Dosis extra bold"'],
      'titleBold': ['"Dosis bold"'],
      'titleNormal': ['"Dosis"'],
      'titleLato': ['"Lato"'],
      'titleSniglet': ['"Sniglet"']
    }
  },
  plugins: [],
})
