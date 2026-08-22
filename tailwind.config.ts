import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        canvas: {
          light: "#F6F4EE",
          dark: "#0B0D13",
        },
        surface: {
          light: "#FFFFFF",
          muted: "#EFECE6",
          dark: "#12151F",
          elevated: "#1D2230",
        },
        line: {
          light: "#E2DDD4",
          dark: "#23293A",
          DEFAULT: "var(--border-line)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["var(--font-serif)", "Newsreader", "Georgia", "Cambria", "Times New Roman", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "SF Mono", "monospace"],
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(11, 13, 19, 0.03)",
        card: "0 1px 3px rgba(11, 13, 19, 0.04), 0 4px 12px rgba(11, 13, 19, 0.02)",
        "card-dark": "0 1px 3px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3)",
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "0.4" },
          "100%": { transform: "scale(3)", opacity: "0" },
        },
      },
      animation: {
        shine: "shine 4s linear infinite",
        ripple: "ripple 0.5s linear",
      },
    },
  },
  plugins: [],
};
export default config;
