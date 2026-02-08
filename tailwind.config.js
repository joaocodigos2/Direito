/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      colors: {
        brand: {
          50: "#f4f1ff",
          100: "#e3dbff",
          200: "#cbbaff",
          300: "#ad94ff",
          400: "#8c67ff",
          500: "#7c5cff",
          600: "#5b35f5",
          700: "#4a2bcc",
          800: "#3924a1",
          900: "#2d1d7f"
        }
      }
    }
  },
  plugins: []
};
