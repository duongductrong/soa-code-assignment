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
        "3xl": "1.75rem",
        "6xl": "3.25rem",
      },

      lineHeight: {
        60: "3.75rem",
      },

      colors: {
        brand: {
          DEFAULT: "#562C2C",
          light: "#FFF4F1",
        },

        blue: "#1E88F9",
        card: "#F2542D",
        cloud: "#EAFCFF",
        foreground: "rgba(86, 44, 44, 0.8)",
        background: "#FFFFFF",
        grey: "#BBBBBB",
        gray: "#666666",
        turquoise: "#0E9594",

        calendar: {
          border: {
            DEFAULT: "#D7D7D7",
            disabled: "#DFDFDF",
            bgDisabled: "#F5F5F5",
          },
          disabled: "#cccccc",
          busy: "#999999",
          "busy-text": "#aaaaaa",
          free: "#F2542D",
        },
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

      boxShadow: {
        calendar: "0px 0px 30px 0px #F2542D1A",
      },
    },
  },
  plugins: [],
};

module.exports = withTV(config);
