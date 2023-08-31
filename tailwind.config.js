/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#146C94",
        secondary: "#19A7CE",
        accent: "#AFD3E2",
      },
    },
  },
  plugins: [],
};
