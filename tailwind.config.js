/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
  './src/components/**/*.{ts,tsx,js,jsx,tsx}',
  flowbite.content()
],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}

