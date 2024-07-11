/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,tsx}"],
  theme: {
    extend: {},
  },
  safelist: [{ pattern: /^line-clamp-(\d+)$/ }],
  plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
};
