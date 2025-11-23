/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Includes all HTML, JS, JSX, TS, and TSX files in the src folder
    "./public/index.html", // If your app has a public HTML file
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F", // Navy Blue
        secondary: "#00B4D8", // Sky Blue
        accent: "#4CAF50", // Green
        background: "#F8F9FA", // Off-white
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
