const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      'white': '#ffffff',
      'cyan': '#2acfcf',
      'violet': { 800: 'hsl(257, 27%, 26%)', 900: 'hsl(260, 8%, 14%)' },
      'red': '#f46262',
      'gray': '#efefef',
      'grayish-violet': '#9e9aa7',
      'blue': { 
        900: '#35323e'
      },
      tp: 'transparent'
    },
    backgroundPosition: {
      'hero-position-mobile': 'right -35vw top 0%',
      'hero-position-desktop': 'right -7vw top 0%',  
      'tab-position': 'right -7vw top 50%',
      right: 'right',
      top: 'top',
      center: 'center',
      left: 'left',
      bottom: 'bottom',
      'right-center': 'right center',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
    }, 
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      'mobile-size': '88vmax',  
      'desktop-size': '110vmin 70vmin',
      tab: '60%'
    },
    extend: {
      backgroundImage: {
        'hero-img': "url('/images/illustration-working.svg')",

        'bg-shorten-mobile': "url('/images/bg-shorten-mobile.svg')",

        'bg-shorten-desktop': "url('/images/bg-shorten-desktop.svg')",

        'bg-boost-mobile': "url('/images/bg-boost-mobile.svg')",

        'bg-boost-desktop': "url('/images/bg-boost-desktop.svg')",
      }
    },
  },
  plugins: [],
}
