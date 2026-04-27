/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F0EDE3',
        'paper-warm': '#EBE5D6',
        'paper-deep': '#E2DBC8',
        ink: '#1F2419',
        'ink-soft': '#3A3D32',
        forest: '#4A6B3D',
        'forest-deep': '#33502A',
        terracotta: '#A85C32',
        sage: '#7A8471',
        sand: '#6B5538',
        ochre: '#D4B677',
        rule: '#C9BFA4',
        'forest-pale': '#E8EDE5',
        'terracotta-pale': '#EDDDD0',
        'sage-pale': '#E4E7DF',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['IBM Plex Serif', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
};
