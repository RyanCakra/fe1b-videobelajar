/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Lato: 'Lato',
    },
    extend: {
      colors: {
        primary: '#3ECF4C',
        primary600: '#2b9435',
        primary500: '#3ac448',
        primary400: '#6BE26B',
        primary300: '#94F08B',
        primary200: '#C0FAB4',
        primary100: '#E2FCD9CC',
        secondary: '#FFBD3A',
        secondary500: '#daa233',
        secondary400: '#FFD26B',
        secondary300: '#FFDF88',
        secondary200: '#FFECB0',
        secondary100: '#FFF7D7CC',
        tertiary: '#F64920',
        tertiary400: '#F98256',
        tertiary300: '#FCA578',
        tertiary200: '#FECAA5',
        tertiary100: '#FEE8D2CC',
        bgc: '#FFFDF3',
      },
      animation: {
        slide: 'slide 1s linear infinite',
      },
      keyframes: {
        slide: {
          '0%, 100%': { transform: 'translateX(5%)' },
          '50%': { transform: 'translateX(-120%)' },
        },
      },
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
    },
  },
  plugins: [],
};
