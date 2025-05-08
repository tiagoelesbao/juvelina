// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        juvelina: {
          gold: '#D4B26A',     // Dourado premium atualizado
          mint: '#C2F7BC',     // Verde menta atual
          aqua: '#9BD0D2',     // Azul aqua atual
          emerald: '#1D7D63',  // Verde principal (naturalidade)
          navy: '#174863',     // Azul profundo (científico)
          mocha: '#85624C'     // Pantone 2025 (elemento terroso)
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fadeIn': 'fadeIn 0.5s ease-out',
        'fadeInUp': 'fadeInUp 0.7s ease-out forwards',
        'expandWidth': 'expandWidth 0.5s ease-out forwards',
        'slideInRight': 'slideInRight 0.7s ease-out forwards',
        'slideInLeft': 'slideInLeft 0.7s ease-out forwards',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        expandWidth: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};