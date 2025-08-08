/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: "var(--color-bg-light)",
          text: "var(--color-text-light)",
          primary: "var(--color-primary-light)",
        },
        dark: {
          background: "var(--color-bg-dark)",
          text: "var(--color-text-dark)",
          primary: "var(--color-primary-dark)",
        },
      },
      fontFamily: {
        // Roboto will be the default body font
        sans: ['"Roboto"', "sans-serif"],
        // Poppins will be used for headings
        display: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
