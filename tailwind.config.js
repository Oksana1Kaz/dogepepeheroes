/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'speed-lines': 'speed-lines 2s linear infinite',
      },
      fontFamily: {
        bangers: ['Bangers', 'cursive'],
        comic: ['Comic Neue', 'cursive'],
        marker: ['Permanent Marker', 'cursive'],
      },
      gridTemplateAreas: {
        'comic': [
          'main main side1',
          'main main side2',
          'bottom1 bottom2 side2',
        ],
      },
    },
  },
  plugins: [],
};