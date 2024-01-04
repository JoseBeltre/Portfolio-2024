/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {

      fontFamily:{
        "poppins": ['"Poppins"', 'sans-serif'] 
      },
      colors:{
        "highlight": "#942222",
        "container-color": '#222222',
        "details-gray": '#717171',
        "background-color": '#121212',
        "2nd-background-color": '#1e1e1e'
      },
      backgroundImage:{
        "open-menu": "url(../assets/icons/menu.svg)",
        "close-menu": "url(../assets/icons/close.svg)",
        "me-animated": "url(../assets/imgs/me-animated.png)"
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(8px)' },
          '50%': { transform: 'translateY(0px)' },
        }
      },
      animation:{
        'wiggle': "wiggle 3s ease-in-out infinite"
      }
    },
  },
  plugins: [],
}

