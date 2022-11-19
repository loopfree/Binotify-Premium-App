/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      head: ['Gotham Bold', 'sans-serif'],
      text: ['Gotham Regular', 'sans-serif'],
    },
    extend: {
      colors: {
        black: "#191414",
        gray: "#242526",
        green: "#1DB954",
        lime: "#1ED760",
        white: "#FFFFFF",
        spearmint: "#4B917D",
        fuschia: "#F037A5",
        citric: "#CDF564",
      },
    },
  },
  plugins: [],
}
