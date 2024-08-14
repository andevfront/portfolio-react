/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
      },
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        main: {
          50: "#EEEDFC",
          100: "#DDDBFA",
          200: "#B7B3F4",
          300: "#968FEF",
          400: "#746BEA",
          500: "#5046E5",
          600: "#2A1DD2",
          700: "#1F169D",
          800: "#140E67",
          900: "#0B0836",
          950: "#05041B",
        },
      },
      fontFamily: {
        cera: ["CeraRound", "sans-serif"],
      },
      animation: {
        fixed: "0.9s ease 0s normal both 1 running fixed",
        "move-y": "move-y 6s ease-in-out infinite",
      },
      keyframes: {
        fixed: {
          "0%": { top: "-100%" },
          "100%": { top: "0" },
        },
        "move-y": {
          "0%, 100%": { transform: "translateY(20px)" },
          "25%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
