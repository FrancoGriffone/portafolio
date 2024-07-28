/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'verde': '#bcff75',
        'negro': '#26242d',
        'gris': '#f3f3f3',
      },
      margin: {
        'tarjetasMargen': '3%'
      }
    },
  },
  plugins: [],
  prefix: 'tw-',
  corePlugins: { preflight: false }
}

