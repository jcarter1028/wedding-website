/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'],
        heading: ['var(--font-jakarta)', 'sans-serif'],
        body: ['var(--font-jakarta)', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#F1F5EF',
          100: '#E8EFE4',
          200: '#DCE7D6',
          300: '#CDDBC5',
        },
        sage: {
          50: '#F4F6F4',
          100: '#E8EDE8',
          200: '#C8D5C8',
          300: '#A8BDA8',
          400: '#7FA47F',
          500: '#6B8E6B',
          600: '#5A7A5A',
        },
        blush: {
          50: '#FDF5F5',
          100: '#FCE8E8',
          200: '#F9D1D1',
          300: '#F5B3B3',
        },
        sand: {
          100: '#E8DFD3',
          200: '#D9CDB8',
          300: '#C4B5A0',
        },
      },
    },
  },
  plugins: [],
}
