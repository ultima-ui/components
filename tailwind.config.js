/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './projects/**/*.{html,ts}'
  ],
  presets: [
    require('./projects/components/preset')
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
  ],
}
