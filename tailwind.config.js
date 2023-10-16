/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-primary":"#061E36",
        "primary":"#002952"
      }
    },
  },
  plugins: [],
}

