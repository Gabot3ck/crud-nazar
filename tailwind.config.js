/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
            400: '#4327D0',
            500: '#2b0ebe',
            600: '#190773',
        },
        'light': {
          500: '#f2f2f2',
          600: '#eaeef2',
        },
        'alert': {
          500: '#ef4444',
        }
      }
    },
  },
  plugins: [],
}

