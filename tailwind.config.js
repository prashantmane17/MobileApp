/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", // If you have an App file
    "./src/**/*.{js,jsx,ts,tsx}", // If you're using a src folder
    "./components/**/*.{js,jsx,ts,tsx}", // Include components folder
    "./screens/**/*.{js,jsx,ts,tsx}", // Include screens folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
