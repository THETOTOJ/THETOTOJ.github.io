/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: {
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
        'channels': {
          DEFAULT: '#3f3d3a',
          text: '#80848e',
          name:'#949ba4',
          background: '#2b2d31',
          selected:'#414249',
          white:'#f2f3e4',
          border:'#222325'
        },
        'sidebar': {
          text:'#949b97',
          hover:'#dbdee1',
          DEFAULT: '#2b2d31',
          border:'#222325'
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
