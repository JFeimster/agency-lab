import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0a0a',
          secondary: '#141414',
          tertiary: '#1e1e1e',
        },
        text: {
          primary: '#ffffff',
          secondary: '#a3a3a3',
          muted: '#525252',
        },
        accent: {
          gold: '#d4af37',
          neon: '#39ff14',
          purple: '#a78bfa',
        },
        border: 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        headline: ['var(--font-clash)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'blob': 'blob 20s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;