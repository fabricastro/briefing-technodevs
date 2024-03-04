import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      juta: ['Jura', 'sans-serif']
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}

