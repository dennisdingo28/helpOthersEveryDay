/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors:{
        "lightBlue":"#2570d1",
        "softGray":"#f0f0f0",
        "softBlack":"#1e1e1e",
        "bodyColor":"#bfbdbd"
      },
      fontFamily:{
        'Raleway':['Raleway', 'sans-serif'],
        'DMsans':['DM Sans', 'sans-serif'],
        'JosefinSans':['Josefin Sans', 'sans-serif'],
        'SourceCodePro':['Source Code Pro', 'monospace','sans-serif'],
        'Rajdhani':['Rajdhani', 'sans-serif'],
      },
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(-60%)' },
          '100%': { transform: 'translateX(0)' }
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        slideRight: 'slideRight 1s ease-in-out',
        slideLeft: 'slideLeft 1s ease-in-out'
      }
    },
    screens: {
      'xs':"468px",
      'sm':"576px",
      'md':"768px",
      "lg":"992px",
      "xl":"1200px",
      "xxl":"1400px"
    },
  },
  plugins: [],
}
