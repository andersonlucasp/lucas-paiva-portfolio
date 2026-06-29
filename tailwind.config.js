/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        bg:     '#0b0b0b',
        'bg-2': '#111111',
        'bg-3': '#161616',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter:  '-0.02em',
      },
    },
  },
  plugins: [],
}
