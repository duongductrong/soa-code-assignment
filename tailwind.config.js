const { withTV } = require("tailwind-variants/transformer");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },

      fontSize: {
        "6xl": "3.25rem",
      },

      lineHeight: {
        60: "3.75rem",
      },

      colors: {
        brand: "#562C2C",

        card: "#F2542D",

        cloud: "#EAFCFF",

        foreground: "rgba(86, 44, 44, 0.8)",
        background: "#FFFFFF",

        grey: "#BBBBBB",
        gray: "#666666",
        turquoise: "#0E9594",
      },

      borderRadius: {
        "4xl": "20px",
      },

      height: {
        18: "4.5rem", //  "72px"
      },

      spacing: {
        15: "3.75rem", // "60px"

        17: "4.375rem", // "70px"

        base: "1240px",
      },
    },
  },
  plugins: [],
};

module.exports = withTV(config);
