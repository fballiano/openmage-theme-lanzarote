/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/styles.src.css"],
  theme: {
    container: {
      center: true
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
}
