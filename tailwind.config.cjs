/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        blackLine: `url("./src/assets/imgDeFundo.png")`,
      },
    },
    screens: {
      mobile: { max: '700px' },
    },
  },
  plugins: [],
};
