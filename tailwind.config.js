/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        "dark-primary":"#021425",
        "primary":"#012670"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

