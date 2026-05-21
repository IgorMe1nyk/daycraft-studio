import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm off-white backdrop. Everything sits on this.
        cream: "#FAF8F3",
        // Section break — very soft pale blue, used sparingly.
        paleBlue: "#E8EEF4",
        // Primary accent — muted blue. The sun, the eyebrows, the focus rings.
        accent: "#6B8CAE",
        // A deeper accent for hover/CTAs where extra weight is wanted.
        accentDeep: "#4A6E94",
        // Warm coral, reserved for a single CTA accent if ever needed.
        coral: "#D97757",
        // Deep charcoal for text & strong elements.
        charcoal: "#1A1A1A",
        // Warm gray for secondary text.
        warmGray: "#666666",
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        serif: [
          "var(--font-serif)",
          "ui-serif",
          "Georgia",
          "Cambria",
          "serif",
        ],
      },
      letterSpacing: {
        tightish: "-0.015em",
      },
      animation: {
        "sun-pulse": "sun-pulse 2.6s ease-in-out infinite",
      },
      keyframes: {
        "sun-pulse": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.06)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
