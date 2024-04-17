/** @type {import('tailwindcss').Config} */
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "00BCD4",
      },
      animation: {
        shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
      },
      keyframes: {
        shake: {
          "10%, 90%": { transform: "translate3d(-1px, 0, 0)" },
          "20%, 80%": { transform: "translate3d(2px, 0, 0)" },
          "30%, 50%, 70%": { transform: "translate3d(-4px, 0, 0)" },
          "40%, 60%": { transform: "translate3d(4px, 0, 0)" },
        },
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "border-only-t": (value) => ({ borderTop: `1px solid ${value}` }),
          "border-only-b": (value) => ({ borderBottom: `1px solid ${value}` }),
          "border-only-l": (value) => ({ borderLeft: `1px solid ${value}` }),
          "border-only-r": (value) => ({ borderRight: `1px solid ${value}` }),
          "border-only-x": (value) => ({
            borderLeft: `1px solid ${value}`,
            borderRight: `1px solid ${value}`,
          }),
          "border-only-y": (value) => ({
            borderTop: `1px solid ${value}`,
            borderBottom: `1px solid ${value}`,
          }),
        },
        { values: flattenColorPalette(theme("colors")), type: "color" },
      );
    }),
  ],
};
