import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "mt-black": "var(--mt-black)",
        "mt-ink": "var(--mt-ink)",
        "mt-bone": "var(--mt-bone)",
        "mt-gold": "var(--mt-gold)",
        "mt-emerald": "var(--mt-emerald)"
      },
      fontFamily: {
        display: ["Cinzel", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.06)"
      }
    }
  },
  plugins: []
} satisfies Config;

