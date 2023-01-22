/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#181C31",
        cgray: "#EBEFF4",
      },
    },
  },
  plugins: [require("daisyui")],
};
