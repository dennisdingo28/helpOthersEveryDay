/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors:{
        "lightBlue":"#2570d1",
        "softGray":"#f0f0f0",
        "softBlack":"#1e1e1e"
      },
      fontFamily:{
        'Raleway':['Raleway', 'sans-serif'],
        'DMsans':['DM Sans', 'sans-serif'],
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
