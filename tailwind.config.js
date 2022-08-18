/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-midnight-100": "var(--primary-midnight-100)",
        "primary-midnight-50": "var(--primary-midnight-50)",
        "secondary-sea-50": "var(--secondary-sea-50)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
