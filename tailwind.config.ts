/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");
import type { Config } from "tailwindcss";
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Noto Sans KR"],
      gamja: ["Gamja Flower"],
    },
    extend: {
      spacing: {
        "bottom-tab": "64px",
      },
      height: {
        "bottom-tab": "64px",
      },
      scrollbarHide: {
        "-ms-overflow-style": "none", // IE와 Edge를 위한 설정
        "scrollbar-width": "none", // Firefox를 위한 설정
        "&::-webkit-scrollbar": {
          display: "none", // Chrome, Safari, Opera를 위한 설정
        },
      },
      screens: {
        "custom-breakpoint": "450px",
      },
      colors: {
        "primary-orange": "#FF6D3C",
        "primary-white": "#F6F6F6",
        "primary-yellow": "#FFCE3C",
        "primary-green": "#27BE69",
        "error-red": "#DF0020",
        "gray-90": "#FDF8F4",
        "gray-80": "#E8E3E0",
        "gray-70": "#D1CDCA",
        "gray-50": "#A3A09D",
        "gray-30": "#757371",
      },
      boxShadow: {
        custom: "0px 1px 1px 0px rgba(0, 0, 0, 0.16)",
      },
      textShadow: {
        custom: "0px 2px 4px rgba(0, 0, 0, 0.16)",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".left-center": {
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
