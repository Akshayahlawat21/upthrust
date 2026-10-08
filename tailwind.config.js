/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF4600',
          'orange-hover': '#E03D00',
          'orange-light': '#FF5E1E',
          black: '#000000',
          dark: '#0A0A0A',
          card: '#0D0D0D',
          border: '#1F1F1F',
          muted: '#888888',
        }
      },
      fontFamily: {
        display: ['"Syne"', '"Cabinet Grotesk"', 'Impact', 'sans-serif'],
        body: ['"Inter"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'blueprint-grid': 'radial-gradient(#d1d5db 1px, transparent 1px), linear-gradient(to right, #f3f4f6 1px, transparent 1px), linear-gradient(to bottom, #f3f4f6 1px, transparent 1px)',
        'dark-grid': 'linear-gradient(to right, #181818 1px, transparent 1px), linear-gradient(to bottom, #181818 1px, transparent 1px)',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      }
    },
  },
  plugins: [],
}
