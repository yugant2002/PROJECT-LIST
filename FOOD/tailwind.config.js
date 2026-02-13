/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Heading font
        vibes: ["Great Vibes", "cursive"],
        // Body font
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#F5B041",
        accent: "#F39C12",
      },
    },
  },
  plugins: [],
}
