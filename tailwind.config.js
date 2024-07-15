/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        // 'kunstler' : ['Kunstler Script', 'cursive']
      },
      screens:{
        print:{raw:'print'},

      }
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'kunstler' : ['KunstlerScript', 'cursive']
    },
  },
  plugins: [],
}
