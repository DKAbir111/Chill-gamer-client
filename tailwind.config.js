/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      animation: {
        flooting: 'flooting 2s ease-in-out infinite',
      },
      keyframes: {
        flooting: {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(20px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [
    daisyui,
  ],
  darkMode: 'class',
}