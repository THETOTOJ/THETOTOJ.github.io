/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'tagged': {
        DEFAULT: '#3f3d3a',
        hovered: '#444039',
        message: '#4a4b72',
        border:'#f0b033'
      },
      'default': {
        DEFAULT: '#313338',
        hovered: '#2e3035',
        message: '#383a3f',
      },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]}}
