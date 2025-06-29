/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#0061FF",
        dark: "#191D31",
        lightdark: "#666876",
      },
      fontFamily: {
        rubik: "Rubik",
        "rubik-bold": "Rubik-Bold",
        "rubik-extrabold": "Rubik-ExtraBold",
        "rubik-light": "Rubik-Light",
        "rubik-medium": "Rubik-Medium",
        "rubik-semibold": "Rubik-SemiBold",
      },
    },
  },
  plugins: [],
};
