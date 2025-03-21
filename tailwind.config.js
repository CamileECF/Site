/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Roboto', 'sans-serif']
      },
      //imagem de fundo 
      backgroundImage:{"home": "url('/assets/bg.png')"}
    },
  },
  plugins: [],
}

