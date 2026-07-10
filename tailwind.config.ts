import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#CCFF00",
        ink: "#000000",
        charcoal: "#2B2B2B",
        deadred: "#E63946",
        plum: "#6B4C7A",
        coffee: "#8B5E3C",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        pop: "4px 4px 0px #000000",
        "pop-lg": "6px 6px 0px #000000",
        "pop-sm": "2px 2px 0px #000000",
        "pop-hover": "7px 7px 0px #000000",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-sm": {
          "0%, 100%": { transform: "translateY(0px) rotate(var(--tilt, -4deg))" },
          "50%": { transform: "translateY(-8px) rotate(var(--tilt, -4deg))" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-sm": "float-sm 3s ease-in-out infinite",
        wiggle: "wiggle 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
