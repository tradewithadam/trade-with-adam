/** @type {import('tailwindcss').Config} */
const config = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          foreground: 'rgb(var(--foreground-rgb))',
          background: {
            start: 'rgb(var(--background-start-rgb))',
            end: 'rgb(var(--background-end-rgb))'
          }
        }
      },
    },
    plugins: [],
  }
  
  module.exports = config