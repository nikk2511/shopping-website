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
        "mt-black-70": "rgba(var(--mt-black-rgb), 0.7)",
        "mt-ink": "var(--mt-ink)",
        "mt-ink-70": "rgba(var(--mt-ink-rgb), 0.7)",
        "mt-bone": "var(--mt-bone)",
        "mt-gold": "var(--mt-gold)",
        "mt-emerald": "var(--mt-emerald)"
      },
      fontFamily: {
        display: ["Poppins", "serif"],
        sans: ["Poppins", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.06)"
      }
    }
  },
  plugins: []
} satisfies Config;

