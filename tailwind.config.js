/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'navy': {
          50: '#f0f1f7',
          100: '#e0e2ef',
          200: '#c1c5df',
          300: '#a2a8cf',
          400: '#838bbf',
          500: '#646eaf',
          600: '#50588c',
          700: '#3c4269',
          800: '#282c46',
          900: '#141623',
          950: '#0a0a0f',
        },
        'crimson': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(239, 68, 68, 0.3)',
        'glow': '0 0 20px rgba(239, 68, 68, 0.4)',
        'glow-lg': '0 0 40px rgba(239, 68, 68, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'ring-pulse': 'ring-pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
