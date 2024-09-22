/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        playfair: ["playfair Display ", "serif"]
      },
      colors: {
        primary: "#fff890",
        secondary: "#23706C",
        // #7FF9E4
        //#0D4C43
        //#fb923c
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: "2rem",
          lg: "4rem",
          xl: "6rem",
          "2xl": "6rem",
        }
      }
    },
  },
  plugins: [],
}