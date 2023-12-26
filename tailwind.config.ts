import { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './index.html'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      // display: ['Oswald', ...defaultTheme.fontFamily.sans],
      display: ['Caviar Dreams', ...defaultTheme.fontFamily.sans],
      'display-bold': ['Caviar Dreams Bold', ...defaultTheme.fontFamily.sans],
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      height: {
        'section-header': 'calc(100vh - 65px)',
        'nav': '64px',
      },
      letterSpacing: {
        'heading': '0.36rem',
        'nav': '0.28rem'
      },
      borderWidth: {
        hair: "0.25px"
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'emerald-green': '#073b3a',
        'emerald-dark': 'rgb(51,62,55)',
        'ivory': '#f0e6d2',
        'ivory-light': 'rgb(228,224,222)',
        'rose-gold': '#b76e79',
        'charcoal-grey': '#36454f',
        'dusty-pink': '#d6a5a5',
        'gold': '#d4af37',
        'grey-dark': '#111518',
        'grey-light': '#E7EBEE',
        'dark': '#0b1315',
        'golden': '#715b3e',
        'golden-text': '#c9ab81',
        'nav-bg': '#0f1d22'
      },
      boxShadow: {
        neumorphic: `
        inset -2px -2px 7px rgba(113, 91, 62, 0.12),
        inset 2px 2px 10px rgba(113, 91, 62, 0.32);
        `,
        "neumorphic-inverse": `
        inset 2px 2px 3px #d4af3733,
        inset -2px -2px 3px  #d4af3733;
        `
      }
      // inset -10px -10px 15px  rgba(255, 255, 255, 0.4);
    },
  },
  plugins: [],
} satisfies Config

