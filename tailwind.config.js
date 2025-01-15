/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': '#001219',
        'oxford-blue': '#14213D',
        'yinmn-blue': '#005F73',
        'silver-lake': '#94A3B8',
        'platinum': '#E5E5E5',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'text-shimmer': 'text-shimmer 2.5s ease-out infinite alternate',
        'name-gradient': 'name-gradient 8s linear infinite',
        'pulse': 'pulse 4s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      rotate: {
        '15': '15deg',
        '-15': '-15deg',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'text-shimmer': {
          '0%': {
            'background-position': '0% 50%'
          },
          '100%': {
            'background-position': '100% 50%'
          }
        },
        'name-gradient': {
          '0%': {
            'background-position': '0% 50%'
          },
          '20%': {
            'background-position': '20% 50%'
          },
          '40%': {
            'background-position': '40% 50%'
          },
          '60%': {
            'background-position': '60% 50%'
          },
          '80%': {
            'background-position': '80% 50%'
          },
          '100%': {
            'background-position': '100% 50%'
          }
        },
        'pulse': {
          '0%, 100%': {
            opacity: 1
          },
          '50%': {
            opacity: 0.5
          }
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
} 