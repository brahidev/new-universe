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
        'zig-zac': "url('https://kirby.nintendo.com/assets/img/zig-zag-border.png')",
      }
    },
    fontFamily: {
      'titleExtraBold': ['"Dosis extra bold"']
    }
  },
  plugins: [],
}
