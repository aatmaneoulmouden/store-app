/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "lg": "3rem",
      }
    },
    fontFamily: {
      "montserrat": ["Montserrat", "sans-serif"]
    },
    extend: {
      colors: {
        "primary": {
          "green": "#00afaa",
          "cerise": "#d70073",
        },
        "neutral": {
          "black": {
            "dark": "#333333",
            "light": "#4c4c4c",
          },
          "white": "#fdfffc",
        }
      }
    },
  },
  plugins: [],
}

