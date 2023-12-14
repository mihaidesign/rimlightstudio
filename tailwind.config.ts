import { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './index.html'],
  theme: {
    fontFamily: {
      display: ['Oswald', ...defaultTheme.fontFamily.sans],
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'emerald-green': '#073b3a',
        'ivory': '#f0e6d2',
        'rose-gold': '#b76e79',
        'charcoal-grey': '#36454f',
        'dusty-pink': '#d6a5a5',
        'gold': '#d4af37',
      },
    },
  },
  plugins: [],
} satisfies Config

