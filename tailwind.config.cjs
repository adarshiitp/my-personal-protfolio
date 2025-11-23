/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brandbg: "#0b0f12",
        emerald: "#00c77a",
        emerald2: "#24d293"
      },
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};
