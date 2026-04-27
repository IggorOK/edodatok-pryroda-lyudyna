/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Базове тло і текст
        paper: "#FCFCFA",          // тепло-білий, основне тло
        "paper-warm": "#F5F4EE",   // ледве темніший — для другорядних блоків
        "paper-deep": "#EDEBE3",   // акцентне світле тло (рідко)
        ink: "#0A0E0B",            // глибокий чорний з зеленавим
        "ink-soft": "#3A3D32",     // лишаємо для другорядного тексту

        // Зелена вісь — головний акцент
        forest: "#2D5530",          // насичений лісовий — основні акценти, кольорові блоки
        "forest-deep": "#1A3D1E",   // глибший зелений — рамки темних блоків, ховери
        "forest-pale": "#E8F0E5",   // світло-зелене тло (зберігаємо)

        // Акцент-сигнал (Atlantic blue) — для критично важливих точок
        signal: "#1E3A5F",          // глибокий синій, інтелектуальний
        "signal-pale": "#E5EBF0",   // світло-синій фон (для блоків з даними/цифрами)

        // Семантичні (зберігаємо для блоків уроків)
        terracotta: "#A85C32",
        "terracotta-pale": "#EDDDD0",
        sage: "#7A8471",
        "sage-pale": "#E4E7DF",
        sand: "#6B5538",
        ochre: "#D4B677",

        // Лінії і рамки
        rule: "#D4D4D0",            // нейтральна світло-сіра, не тепло-бежева
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['"IBM Plex Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
