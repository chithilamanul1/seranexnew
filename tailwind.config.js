/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#141414",
        "background-light": "#f7f7f7",
        "background-dark": "#191919",
        'theme-blue': '#3B82F6',
        'text-light': '#ffffff',
        'text-dark': '#141414',
      },
      fontFamily: {
        display: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
};