/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "gray-1": "#A0AEC0",
      "green-1": "#01b574",
    },
    screens: {
      'fullhd': '1920px',
      'laptop-l': '1440px',
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // <== disable this!
  },
};
