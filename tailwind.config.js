/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: "Montserrat",
    },
    extend: {
      colors: {
        pri: "#FE7332",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
