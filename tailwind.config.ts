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
        "overlay-in": "overlay-in 200ms ease-out",
        "overlay-out": "overlay-out 150ms ease-out forwards",
        "modal-in": "modal-in 280ms cubic-bezier(0.22, 1, 0.36, 1)",
        "modal-out": "modal-out 200ms cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "accordion-down":
          "accordion-down 280ms cubic-bezier(0.22, 1, 0.36, 1)",
        "accordion-up":
          "accordion-up 240ms cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
      keyframes: {
        "sun-pulse": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.06)" },
        },
        "overlay-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "overlay-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "modal-in": {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.97)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
        "modal-out": {
          from: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
          to: {
            opacity: "0",
            transform: "translate(-50%, -49%) scale(0.98)",
          },
        },
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
          to: { height: "0", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
