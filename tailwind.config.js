/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Noto Sans KR"],
    },
    extend: {
      screens: {
        "custom-breakpoint": "480px",
      },
      colors: {
        "primary-orange": "#FF6D3C",
        "primary-white": "#F6F6F6",
        "primary-yellow": "#FFCE3C",
        "gray-90": "#FDF8F4",
        "gray-70": "#D1CDCA",
        "gray-50": "#A3A09D",
        "gray-30": "#757371",
      },
      boxShadow: {
        custom: "0px 1px 1px 0px rgba(0, 0, 0, 0.16)",
      },
    },
  },
  plugins: [],
};
