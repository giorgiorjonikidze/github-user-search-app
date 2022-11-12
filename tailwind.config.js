/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      md: "768px",
      xl: "1440px",
    },
    colors: {
      "blue": "#0079FF",
      'light-gray': "#697C9A",
      "light-dark-blue": "#4B6A9B",
      "light-very-dark-blue": "#2B3442",
      "light-bg-white": "#F6F8FF",
      "dark-black-black": "#141D2F",
      "dark-black-blue": "#1E2A47",
      "light-font-color": "#4B6A9B",
      "dark-font-color": "#2B3442",
      "alert-color": "#F74646",
      "white": "#ffffff"
    },
    fontFamily: {
      spacemono: ['Space Mono']
    },
    borderColor: {
      "sm": "10px",
      "md": "15px"
    }
    
  },
  plugins: [],
}
