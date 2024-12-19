import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flowHorizontal: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(50px)' }
        },
        flowVertical: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(50px)' }
        },
        flowDiagonal1: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(25px, 25px)' }
        },
        flowDiagonal2: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-25px, 25px)' }
        }
      },
      animation: {
        'flowHorizontal': 'flowHorizontal 3s linear infinite',
        'flowVertical': 'flowVertical 3s linear infinite',
        'flowDiagonal1': 'flowDiagonal1 4s linear infinite',
        'flowDiagonal2': 'flowDiagonal2 4s linear infinite'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
