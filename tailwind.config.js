/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      first: "#fba507",
      white: "#FFFFFF",
      gray: "#ebe8e8",
      hoverBG: "#ebe5e1",
      black: "#050505",
      red: "#ab1114",
      orange: "#e08c16",
    },
  },
  plugins: [require("daisyui")],
};
