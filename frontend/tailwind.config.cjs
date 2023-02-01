/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#48ACF0',
      },
    },
    fontFamily: {
      apple: ["apple"],
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),require('tailwind-scrollbar-hide')],
};
