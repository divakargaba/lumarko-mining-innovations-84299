/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0C1B2A',
          800: '#132D46',
          700: '#1B3A5C',
          600: '#24537A',
        },
        steel: {
          500: '#4A8DB7',
          400: '#6BA5CA',
          300: '#A3CCE0',
          100: '#E8F1F8',
        },
        gold: {
          500: '#C8952E',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
