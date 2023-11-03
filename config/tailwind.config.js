/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          customDark: '#0d1b2a',
          customDarkBlue: '#1b263b',
          customBlue: '#415a77',
          customLightBlue: '#778da9',
          customWhite: '#e0e1dd',
        },
      },
    },
    plugins: []
  }