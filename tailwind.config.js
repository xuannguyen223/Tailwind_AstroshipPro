/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage:{
        main: "linear-gradient(270.78deg, #c3dafe 4.19%, #e9d8fd 96.11%)"
      },
      width:{
        w: "50"
      }
    },
  },
  
  plugins: [
    require('flowbite/plugin'),
  ],
}

