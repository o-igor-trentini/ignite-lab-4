/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#FFF',
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7C7C8A',
        200: '#202024',
        100: '#C4C4CC',
      },
      cyan: {
        500: '#81D8F7',
        300: '#9BE1FB',
      }
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    }
  },
  plugins: [],
};
