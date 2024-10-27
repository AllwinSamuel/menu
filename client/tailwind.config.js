/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  darkMode : "class",
  theme: {
    extend: {boxShadow:{
      "5xl": "7px 20px 20px rgba(0,0,0,0.5)"
    }},
  },
  plugins: [],
}