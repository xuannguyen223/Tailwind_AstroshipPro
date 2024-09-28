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
      height: {
        86: "350px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
