/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4682A9",
        secondary: "#749BC2",
        accent: "#91C8E4",
        background: "#F6F4EB",
      },
    },
  },
  plugins: [],
};
