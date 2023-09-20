/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        primary: "#5BBB7B",
        hover: "#4ca068",
        focus: "c1f8d3"
      },
    },
  },
}

