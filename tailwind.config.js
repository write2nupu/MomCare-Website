/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#923450",
          secondary: "#ffe7ef",
          backgroundHue: "#fde0e5",
          formfield: "#feecef",
        },
      },
    },
    plugins: [],
  }