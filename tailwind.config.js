/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./Views/**/*.cshtml",
        "./wwwroot/js/**/*.js",
        "./Shared/**/*.cshtml"
    ],
    theme: {
        
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
    code: ['Fira Code', 'monospace']},
        extend: {},
    },
    plugins: [],
}

