/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'bug':'#AFC836',
        'dark':'#868D9A',
        'dragon':'#0675C7',
        'electric':'#EDD53E',
        'fairy':'#EC8CE5',
        'fighting':'#CE4265',
        'fire':'#FC9C51',
        'flying':'#90A7DA',
        'ghost':'#516AAC',
        'grass':'#5FBC51',
        'ground':'#DC7545',
        'ice':'#70CCBD',
        'normal':'#9298A4',
        'poison':'#A864C7',
        'psychic':'#F66F71',
        'rock':'#C5B489',
        'steel':'#52869D',
        'water':'#4A90DD',
        'grey':'rgb(209 213 219)'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
