/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-100": "#1B6392",
        "warning-100": "#F3DE6D",
        "orange-main": "#FA8232",
        "grey-main": "#F2F4F5",
      },
      fontFamily: {
        sans: ["Public Sans", "sans-serif"],
      },
    },

    plugins: [],
  },
};
