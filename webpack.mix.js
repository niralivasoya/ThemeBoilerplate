const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('src/js/app.js', '/')
    .sass('src/scss/app.scss', '/')
    .setPublicPath('public');
