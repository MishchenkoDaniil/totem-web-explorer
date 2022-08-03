/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,scss,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      'white': '#FFFFFF',
      'yellow': '#FFD011',
      'light-grey': '#8A939B',
      'dark-grey': '#353840',
      'black': '#202225'
    },
    opacity : {
      12: '0.12',
      38: '0.38',
      87: '0.87'
    },
    screens : {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '1000px',
      xl: '1280px',
      xxl: '1440px',
      xxxl: '1980px',
    },
    extend : {
      zIndex                  : {
        '-1'   : -1,
        '49'   : 49,
        '60'   : 60,
        '70'   : 70,
        '80'   : 80,
        '90'   : 90,
        '99'   : 99,
        '999'  : 999,
        '9999' : 9999,
        '99999': 99999
    },
    spacing                 : {
        '13': '3.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '50': '12.5rem',
        '90': '22.5rem',

        // Bigger values
        '100': '25rem',
        '120': '30rem',
        '128': '32rem',
        '140': '35rem',
        '160': '40rem',
        '180': '45rem',
        '192': '48rem',
        '200': '50rem',
        '240': '60rem',
        '256': '64rem',
        '280': '70rem',
        '320': '80rem',
        '360': '90rem',
        '400': '100rem',
        '480': '120rem',

        '5p': '5%',
        '10p': '10%',
        '15p': '15%',
        '20p': '20%',

        '140px': '140px',
        '30px': '30px',

        // Fractional values
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%'
    },
    }
  },
  plugins: [],
}
