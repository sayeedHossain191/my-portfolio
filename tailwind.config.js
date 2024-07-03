/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      courier: "'Courier Prime', monospace",
      roboto: "'Roboto',sans-serif",
      railway: "'Railway',sans-serif",
      inter: "'Inter',sans-serif",
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

