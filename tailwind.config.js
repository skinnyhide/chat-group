/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black1: "#0B090C",
        black2: "#120F13",
        gray1: "#252329",
        gray2: "#3C393F",
        blue1: "#2F80ED",
        "font-white": "#E0E0E0",
        "font-white2": "#BDBDBD",
        "font-gray": "#828282",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
