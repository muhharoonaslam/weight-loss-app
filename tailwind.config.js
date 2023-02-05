/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            'blue': '#1fb6ff',
            'purple': '#7e5bef',
            'pink': '#ff49db',
            'orange': '#ff7849',
            'green': '#13ce66',
            'gray-dark': '#273444',
            'gray': '#8492a6',
            'gray-light': '#d3dce6',
            'transparent': 'transparent',
            'current': 'currentColor',
            'black': colors.black,
            'white': colors.white,
            'gray': colors.gray,
            'emerald': colors.emerald,
            'indigo': colors.indigo,
            'yellow': colors.yellow,
            'green': colors.green,
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {}
    },
    plugins: [],
}