/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './Views/**/*.{cshtml,html}',
        './Shared/**/*.{cshtml,html}',
        './Pages/**/*.{cshtml,html}', 
        './wwwroot/js/**/*.js'
    ],
    theme: {
        
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
    code: ['Fira Code', 'monospace']},
        extend: {},
    },
    plugins: [],
}

