module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sakthi:
        {
          50: '#fee2ff',
          100: '#efb1ff',
          200: '#2B3148',
          300: '#d64cff',
          400: '#ca1aff',
          500: '#b000e6',
          600: '#8900b4',
          700: '#630081',
          800: '#3c0050',
          900: '#17001f',
        },
        navCol:
        {
          50: '#eae6ff',
          100: '#c1b6fb',
          200: '#9786f7',
          300: '#6f56f3',
          400: '#4827f0',
          500: '#333333',
          600: '#240ca7',
          700: '#f84464',
          800: '#0e0449',
          900: '#05001b',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
