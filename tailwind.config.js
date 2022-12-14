/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      lgview: { min: "1023px" },
      // => @media (max-width: 1023px) { ... }

      mdview: { min: "767px" },
      // => @media (max-width: 767px) { ... }

      mobileview: { max: "450px" },
      // => @media (max-width: 639px) { ... }
      tview: { min: "340px", max: "1450px" },
      hamburger: { min: "550px" },
      hamburgermax: { max: "550px" },
    },
    extend: {},
  },
  plugins: [],
};
