/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],

    theme: {
        colors: {
            transparent: 'transparent',
            black: '#000',
            white: '#fff',
            gray: {
                100: '#EFEFEF',
                600: '#9C9E9F',
                700: '#58585A',
                800: '#212121',
                900: '#121212',
            },
        },
        extend: {},
    },
    plugins: [],
};
