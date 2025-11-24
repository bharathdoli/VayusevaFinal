/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#000000',
          surface: '#0a0a0a',
          card: '#1a1a1a',
        }
      }
    },
  },
  plugins: [],
}

