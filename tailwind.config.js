/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6528F7",
        secondary: "#A076F9",
        accent: "#D7BBF5",
        accent2: "#EDE4FF",
      },
    },
  },
  plugins: [],
};
