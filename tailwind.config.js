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
        'spin': 'spin 2s linear infinite',
        'wave': 'wave 0.5s ease forwards',
        'slideDown': 'slideDown 0.8s ease forwards',
        'disapear': 'disapear 0.6s ease forwards',
        'takeOff': 'takeOff 0.8s linear forwards',
        'land': 'land 0.6s ease forwards',
        'contrail': 'contrail 0.8s linear forwards',
        'appear': 'appear 1.2s ease forwards',
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
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        wave: {
          '30%': {
            opacity: '1',
            transform: 'translateY(4px) translateX(0) rotate(0)'
          },
          '50%': {
            opacity: '1',
            transform: 'translateY(-3px) translateX(0) rotate(0)',
            color: 'var(--primary)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) translateX(0) rotate(0)'
          }
        },
        slideDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px) translateX(5px) rotate(-90deg)',
            color: 'var(--primary)',
            filter: 'blur(5px)'
          },
          '30%': {
            opacity: '1',
            transform: 'translateY(4px) translateX(0) rotate(0)',
            filter: 'blur(0)'
          },
          '50%': {
            opacity: '1',
            transform: 'translateY(-3px) translateX(0) rotate(0)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) translateX(0) rotate(0)'
          }
        },
        disapear: {
          'from': {
            opacity: '1'
          },
          'to': {
            opacity: '0',
            transform: 'translateX(5px) translateY(20px)',
            color: 'var(--primary)',
            filter: 'blur(5px)'
          }
        },
        takeOff: {
          '0%': {
            opacity: '1'
          },
          '60%': {
            opacity: '1',
            transform: 'translateX(70px) rotate(45deg) scale(2)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(160px) rotate(45deg) scale(0)'
          }
        },
        land: {
          '0%': {
            transform: 'translateX(-60px) translateY(30px) rotate(-50deg) scale(2)',
            opacity: '0',
            filter: 'blur(3px)'
          },
          '100%': {
            transform: 'translateX(0) translateY(0) rotate(0)',
            opacity: '1',
            filter: 'blur(0)'
          }
        },
        contrail: {
          '0%': {
            width: '0',
            opacity: '1'
          },
          '8%': {
            width: '15px'
          },
          '60%': {
            opacity: '0.7',
            width: '80px'
          },
          '100%': {
            opacity: '0',
            width: '160px'
          }
        },
        appear: {
          '0%': {
            opacity: '0',
            transform: 'scale(4) rotate(-40deg)',
            color: 'var(--primary)',
            filter: 'blur(4px)'
          },
          '30%': {
            opacity: '1',
            transform: 'scale(0.6)',
            filter: 'blur(1px)'
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.2)',
            filter: 'blur(0)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
} 