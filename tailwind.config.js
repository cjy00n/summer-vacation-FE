/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Noto Sans KR"],
      gamja: ["Gamja Flower"],
    },
    extend: {
      screens: {
        "custom-breakpoint": "480px",
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
    },
  },
  plugins: [],
};
