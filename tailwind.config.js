/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6936d8",
        secondary: "#17112f",
        highlight: "#d342c3",
        dark: "#33205c",
        light: "#34e4fd",
      },
      fontFamily: {
        bubblegum: ['"Bubblegum Sans"', "cursive"],
      },
    },
  },
  plugins: [],
};

