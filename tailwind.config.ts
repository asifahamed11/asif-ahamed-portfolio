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
        background: "#06080f",
        "background-secondary": "#0c0e18",
        foreground: "#eef0f6",
        "foreground-secondary": "#c8ccd8",
        card: "#0f1120",
        "card-hover": "#161830",
        border: "rgba(255, 255, 255, 0.07)",
        "border-hover": "rgba(255, 255, 255, 0.15)",
        // Aurora palette
        cyan: {
          DEFAULT: "#06b6d4",
          light: "#22d3ee",
          dim: "#0891b2",
          glow: "rgba(6, 182, 212, 0.4)",
        },
        violet: {
          DEFAULT: "#8b5cf6",
          light: "#a78bfa",
          dim: "#7c3aed",
          glow: "rgba(139, 92, 246, 0.4)",
        },
        rose: {
          DEFAULT: "#f43f5e",
          light: "#fb7185",
          dim: "#e11d48",
          glow: "rgba(244, 63, 94, 0.3)",
        },
        emerald: {
          DEFAULT: "#10b981",
          light: "#34d399",
          glow: "rgba(16, 185, 129, 0.3)",
        },
        amber: {
          DEFAULT: "#f59e0b",
          light: "#fbbf24",
          glow: "rgba(245, 158, 11, 0.3)",
        },
        muted: "#6b7280",
        "muted-light": "#9ca3af",
        surface: "rgba(255, 255, 255, 0.04)",
        "surface-hover": "rgba(255, 255, 255, 0.07)",
        "surface-active": "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "aurora-gradient": "linear-gradient(135deg, #06b6d4, #8b5cf6, #f43f5e)",
        "aurora-gradient-soft": "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(139,92,246,0.15), rgba(244,63,94,0.1))",
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "aurora-shift": "auroraShift 8s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "border-glow": "borderGlow 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "slide-up": "slideUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "spin-slow": "spin 12s linear infinite",
        "text-glow": "textGlow 3s ease-in-out infinite alternate",
        "bounce-subtle": "bounceSubtle 2s ease-in-out infinite",
        orbit: "orbit 20s linear infinite",
        "orbit-reverse": "orbit 25s linear infinite reverse",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "1" },
        },
        auroraShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        borderGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        textGlow: {
          "0%": { textShadow: "0 0 10px rgba(6,182,212,0.3)" },
          "100%": { textShadow: "0 0 20px rgba(139,92,246,0.5), 0 0 40px rgba(6,182,212,0.3)" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "smooth-in": "cubic-bezier(0.4, 0, 1, 1)",
        "smooth-out": "cubic-bezier(0, 0, 0.2, 1)",
      },
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(6, 182, 212, 0.1)",
        "glow-violet": "0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.1)",
        "glow-rose": "0 0 20px rgba(244, 63, 94, 0.3), 0 0 40px rgba(244, 63, 94, 0.1)",
        "glow-amber": "0 0 20px rgba(245, 158, 11, 0.3), 0 0 40px rgba(245, 158, 11, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
