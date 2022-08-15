const { default: plugin } = require('tailwindcss')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#004DFF',
      },
      width: {
        160: '50rem',
      },
    },
  },
  plugins: [
    // plugin(({ theme, addUtilities }) => {
    //   addUtilities({
    //     '.main-border': {
    //       border: theme(colors.primary),
    //       borderRadius: '10px 5px 2em',
    //     },
    //   })
    // }),
  ],
}
