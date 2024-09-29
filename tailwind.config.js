/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate(0)" },
          "100%": { transform: "translate(calc(-100% - 2.5rem))" },
        },
      },
      animation: {
        marquee: "marquee 50s linear infinite",
      },
      backgroundImage: {
        main: "linear-gradient(270.78deg, #c3dafe 4.19%, #e9d8fd 96.11%)",
      },
      width: {
        w: "50",
      },
      height: {
        86: "350px",
      },
      translate: {
        700: "700px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
