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
