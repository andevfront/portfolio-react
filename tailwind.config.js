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
          50: "#F5F5FF",
          100: "#ECEBFF",
          200: "#D3D1FF",
          300: "#BBB8FF",
          400: "#9994FF",
          500: "#6C63FF",
          600: "#5A52FF",
          700: "#473DFF",
          800: "#2014FF",
          900: "#0A00C2",
          950: "#07008F",
        },
      },
      fontFamily: {
        cera: ["CeraRound", "sans-serif"],
      },
      animation: {
        fixed: "0.9s ease 0s normal both 1 running fixed",
        "move-y": "move-y 6s ease-in-out infinite",
        loader: "loader 1.3s infinite ease-in-out",
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
        loader: {
          "0%, 100%": { transform: "translateX(-20%)" },
          "50%": { transform: "translateX(120%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
