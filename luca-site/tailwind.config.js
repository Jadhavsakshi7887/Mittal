/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        luca: {
          blue: '#2AA9E0',
          dark: '#0E2431',
          orange: '#FF8A00',
          light: '#F2FAFF',
        },
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        grid: 'radial-gradient(#DDEAF1 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '24px 24px',
      },
    },
  },
  plugins: [],
};
