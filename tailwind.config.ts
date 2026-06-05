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
        // Cabinet Grotesk — display sans for hero/h1/h2.
        display: [
          "var(--font-display)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightish: "-0.015em",
      },
      // Typography scale — apply via `text-hero-display`, `text-h1`, etc.
      // Sizes use clamp() so headlines scale fluidly without breakpoint hops.
      // Display sizes bundle their own letterSpacing + lineHeight so a single
      // class is enough.
      fontSize: {
        "hero-display": [
          "clamp(2.75rem, 7vw, 7rem)",
          { lineHeight: "1.02", letterSpacing: "-0.035em" },
        ],
        h1: [
          "clamp(2rem, 4vw, 3.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.025em" },
        ],
        h2: [
          "clamp(1.6rem, 3.2vw, 2.75rem)",
          { lineHeight: "1.08", letterSpacing: "-0.022em" },
        ],
        "body-lg": ["1.125rem", { lineHeight: "1.65" }],
        body: ["1rem", { lineHeight: "1.6" }],
        caption: [
          "0.75rem",
          { lineHeight: "1.5", letterSpacing: "0.04em" },
        ],
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
        // CSS entrance animations for the hero (replace JS-gated Framer fades
        // so the LCP headline paints at first paint, not after hydration).
        // `both` fill-mode holds the from-state during animation-delay.
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "grow-x": "grow-x 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        "scroll-bounce": "scroll-bounce 2.4s ease-in-out infinite",
        // Slow, GPU-friendly drift for the hero's living-gradient accent.
        // Disabled automatically by the prefers-reduced-motion block in
        // globals.css (becomes a static gradient).
        aurora: "aurora 18s ease-in-out infinite",
      },
      keyframes: {
        "sun-pulse": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.06)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "grow-x": {
          from: { opacity: "0", transform: "scaleX(0.6)" },
          to: { opacity: "1", transform: "scaleX(1)" },
        },
        "scroll-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(4px)" },
        },
        aurora: {
          "0%, 100%": {
            transform: "translate3d(0, 0, 0) scale(1)",
            opacity: "0.5",
          },
          "50%": {
            transform: "translate3d(3%, -2%, 0) scale(1.12)",
            opacity: "0.78",
          },
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
