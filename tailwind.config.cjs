const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,vue}",
    "./components/**/*.{ts,tsx,vue}",
    "./app/**/*.{ts,tsx,vue}",
    "./src/**/*.{ts,tsx,vue}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1081px",
      },
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      orange: {
        400: "#FF842D",
      },
      blue: {
        50: "#88BCFB",
        100: "#87CAF4",
        200: "#B2DCFB",
        600: "#055AC1",
      },
      gray: {
        50: "#8293B0",
        100: "#F3F8FF",
        200: "#596C8C",
        300: "#6E7C91",
        400: "#435169",
        500: "#57657D",
        600: "#738091",
        700: "#F1F4FA",
      },
      gradient: {
        one: "#E6F1FE",
        two: "#D3E6FC",
      },
      pink: {
        100: "#F3CFE2",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        noto: "'Noto Kufi Arabic', sans-serif",
      },
      fontSize: {
        xxs: "10px",
      },
      backgroundImage: {
        "gradient-blue": "linear-gradient(180deg, #67AAFC 0%, #1A80FC 98%)",
        "gradient-blue-o": "linear-gradient(180deg, #E6F1FE 0%, #D3E6FC 98%)",
      },
      boxShadow: {
        blue: "0px 11px 19px -5px rgba(1, 109, 240, 0.25)",
      },
    },
  },
  plugins: [animate],
};
