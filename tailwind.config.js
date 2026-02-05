/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'void': '#050510',
        'deep-space': '#0f111a',
        'hologram': '#22d3ee',
        'neon-purple': '#d946ef',
        'glass': 'rgba(15, 23, 42, 0.6)',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        tech: ['"Rajdhani"', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 20px rgba(34, 211, 238, 0.3)',
        'neon-purple': '0 0 20px rgba(217, 70, 239, 0.3)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shine': 'shine 1s ease-in-out',
        'scan': 'scan 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        scan: {
          '0%, 100%': { top: '0%' },
          '50%': { top: '100%' }
        }
      }
    },
  },
  plugins: [],
}
