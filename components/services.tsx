"use client";

import { m } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { SectionHeading } from "./ui/section-heading";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

// ─── Tier icons ───────────────────────────────────────────────────────────────
// Custom inline SVGs that echo the horizon-line / sun logo motif. Each one
// renders in the accent color via currentColor. Keep them quiet — they sit
// inside a soft circular badge at the top of every card.

function StarterMark({ className }: { className?: string }) {
  // One page → one horizon line with a small sun.
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      aria-hidden
      className={className}
    >
      <line
        x1="3"
        y1="13"
        x2="21"
        y2="13"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="9" cy="9.5" r="2" fill="currentColor" />
    </svg>
  );
}

function StandardMark({ className }: { className?: string }) {
  // Multi-page → stacked horizon lines.
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      aria-hidden
      className={className}
    >
      <line
        x1="3"
        y1="7"
        x2="21"
        y2="7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <line
        x1="3"
        y1="17"
        x2="21"
        y2="17"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="7.5" cy="4.3" r="1.5" fill="currentColor" />
    </svg>
  );
}

function CustomMark({ className }: { className?: string }) {
  // Custom → cross of lines with sun at intersection. A little more dimensional.
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      aria-hidden
      className={className}
    >
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <line
        x1="12"
        y1="3"
        x2="12"
        y2="21"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const tiers = [
  {
    tier: "STARTER",
    price: "$350",
    title: "One-Page Site",
    desc: "Perfect for events, RSVPs, or a simple digital business card. Everything someone needs to know, on one beautiful page.",
    features: [
      "Custom design",
      "Mobile-perfect",
      "Contact form",
      "Delivered in 3–5 days",
    ],
    cta: "Start a Starter project",
    popular: false,
    Icon: StarterMark,
  },
  {
    tier: "STANDARD",
    price: "$650",
    title: "Small Business Site",
    desc: "A complete multi-page site for your business. Tell your story, show your services, get customers.",
    features: [
      "4–6 pages",
      "Custom design",
      "Mobile-perfect",
      "Contact form",
      "Show up in Google search (SEO basics)",
      "Delivered in 7–10 days",
    ],
    cta: "Start a Standard project",
    popular: true,
    Icon: StandardMark,
  },
  {
    tier: "CUSTOM",
    price: "From $1,200",
    title: "Custom Build",
    desc: "Need something more? Online booking, ordering, customer logins, or connecting the tools you already use — let's talk about what you need.",
    features: [
      "Custom features",
      "Customer logins or online booking",
      "Connect tools you already use",
      "Timeline based on scope",
    ],
    cta: "Let's talk",
    popular: false,
    Icon: CustomMark,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-paleBlue/50 py-24 lg:py-32 border-y border-charcoal/[0.04]"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading eyebrow="Services" title="What I build" />

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {tiers.map((t, i) => {
            const Icon = t.Icon;
            return (
              <m.div
                key={t.tier}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: easeOut }}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-7 lg:p-8",
                  "transition-all duration-500 ease-out",
                  "hover:-translate-y-1.5",
                  t.popular
                    ? [
                        "bg-gradient-to-b from-cream to-paleBlue/40",
                        "border-accent/35",
                        "shadow-[0_8px_40px_-12px_rgba(107,140,174,0.45)]",
                        "md:-translate-y-3 md:hover:-translate-y-4",
                        "ring-1 ring-accent/10",
                      ]
                    : [
                        "bg-cream",
                        "border-charcoal/[0.08]",
                        "hover:border-charcoal/25",
                        "hover:shadow-[0_4px_24px_-12px_rgba(26,26,26,0.18)]",
                      ],
                )}
              >
                {t.popular && (
                  <span className="absolute -top-3 left-7 text-[10px] font-medium tracking-[0.18em] bg-accent text-cream px-3 py-1 rounded-full uppercase shadow-[0_2px_8px_-2px_rgba(107,140,174,0.45)]">
                    Most Popular
                  </span>
                )}

                {/* Icon badge */}
                <div
                  className={cn(
                    "size-11 rounded-xl flex items-center justify-center mb-5",
                    "transition-colors duration-300",
                    t.popular
                      ? "bg-accent text-cream"
                      : "bg-paleBlue/70 text-accent",
                  )}
                >
                  <Icon />
                </div>

                <div className="flex items-baseline justify-between">
                  <span className="text-[11px] tracking-[0.18em] text-warmGray uppercase">
                    {t.tier}
                  </span>
                  <span className="text-sm text-charcoal font-medium">
                    {t.price}
                  </span>
                </div>

                <h3 className="mt-3 text-2xl tracking-tight text-charcoal">
                  {t.title}
                </h3>
                <p className="mt-3 text-warmGray text-[15px] leading-relaxed">
                  {t.desc}
                </p>

                <ul className="mt-6 space-y-2.5 flex-1">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-charcoal/85"
                    >
                      <Check
                        className={cn(
                          "size-4 mt-[3px] shrink-0",
                          t.popular ? "text-accent" : "text-accent/80",
                        )}
                        strokeWidth={2.2}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    "group/cta mt-8 inline-flex items-center gap-1.5 text-sm transition-colors duration-200",
                    t.popular
                      ? "text-accentDeep hover:text-accentDeep font-medium"
                      : "text-charcoal hover:text-accentDeep",
                  )}
                >
                  {t.cta}
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/cta:translate-x-1" />
                </a>

                {/* Quiet secondary link — only on Starter, pointing to the
                    live Emily & James example in the Work section. */}
                {t.tier === "STARTER" && (
                  <a
                    href="#work"
                    className="mt-2 inline-block text-xs text-warmGray/80 hover:text-accentDeep transition-colors"
                  >
                    See an example →
                  </a>
                )}
              </m.div>
            );
          })}
        </div>

        {/* Subtle wayfinding to the segment landing pages (kept out of the
            main nav). Helps each audience self-select the right examples. */}
        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center text-sm text-warmGray"
        >
          See examples for your project:{" "}
          <a
            href="/event-sites"
            className="text-charcoal hover:text-accentDeep underline underline-offset-4 decoration-charcoal/20 hover:decoration-accent transition-colors"
          >
            events
          </a>
          {" · "}
          <a
            href="/personal-brand"
            className="text-charcoal hover:text-accentDeep underline underline-offset-4 decoration-charcoal/20 hover:decoration-accent transition-colors"
          >
            personal brand
          </a>
          {" · "}
          <a
            href="/business-sites"
            className="text-charcoal hover:text-accentDeep underline underline-offset-4 decoration-charcoal/20 hover:decoration-accent transition-colors"
          >
            local business
          </a>
        </m.p>
      </div>
    </section>
  );
}
