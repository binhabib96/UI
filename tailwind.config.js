/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './storage/framework/views/*.php',
  "./resources/**/*.blade.php",
  "./resources/**/*.js",
  "./resources/**/*.vue",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {'spin-slow': 'spin 3s linear infinite',},
  },
  plugins: ['flowbite/plugin'],
}

