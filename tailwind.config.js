/** @type {import('tailwindcss').Config} */
module.exports = {
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
}
