/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0b001a",
        secondary: "#b380ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(179, 128, 255, 0.1)",
        lightPrimary: "#ffffff",
        lightText: "#111827",
        lightDimText: "#4b5563",
        lightBg: "#f9fafb",
      },
      fontFamily: {
        poppins: ["Outfit", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
