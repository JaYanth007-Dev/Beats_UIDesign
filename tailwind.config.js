/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "zoom-in-zoom-out": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.07)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "pulse-zoom": "zoom-in-zoom-out 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
