/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Only two colors
        'gb': '#EDE3D0',       // golden beige — primary background
        'gb-light': '#F5EDE0', // lighter beige
        'gb-dark': '#D9CDB5',  // darker beige
        'dg': '#1A3324',       // dark green — primary text/accent
        'dg-light': '#2D5A3E', // lighter green
        'dg-mid': '#234430',   // mid green
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
