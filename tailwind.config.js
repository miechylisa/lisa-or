/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,jsx}',
      './components/**/*.{js,jsx}',
      './app/**/*.{js,jsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#eff6ff',
            100: '#dbeafe',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
          },
          accent: {
            400: '#06b6d4',
            500: '#0891b2',
            600: '#0e7490',
          }
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          mono: ['JetBrains Mono', 'monospace'],
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
          'slide-up': 'slideUp 0.5s ease-out',
          'glow': 'glow 2s ease-in-out infinite alternate',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          glow: {
            '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
            '100%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' },
          },
        },
        backdropBlur: {
          xs: '2px',
        }
      },
    },
    plugins: [],
  }