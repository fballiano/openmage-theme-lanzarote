/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        '../../../../../app/design/frontend/**/*.{html,phtml}',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("daisyui")
    ],
}