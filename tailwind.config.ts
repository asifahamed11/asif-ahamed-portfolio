import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FFF8F0",
        gold: "#C08552",
        mocha: "#8C5A3C",
        coffee: "#4B2E2B",
        background: "#FFF8F0",
        foreground: "#4B2E2B",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        "glow-gold": "0 0 30px rgba(192, 133, 82, 0.12)",
        "glow-gold-lg": "0 0 60px rgba(192, 133, 82, 0.15)",
        "card": "0 1px 3px rgba(75, 46, 43, 0.04), 0 1px 2px rgba(75, 46, 43, 0.03)",
        "card-hover": "0 8px 24px rgba(75, 46, 43, 0.08), 0 2px 8px rgba(75, 46, 43, 0.04)",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        shimmer: "shimmer 3s infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
