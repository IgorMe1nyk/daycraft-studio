"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { m, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────────────────
   WhyCustomCalculator — the honest, interactive cost comparison.

   This is the PROOF that lives near the bottom of /why-custom (under "And yes
   — the math works too"). It has no heading/eyebrow of its own anymore — the
   page provides the surrounding narrative. Tone: fair, calm, sourced. No
   "free forever", no hype.
   ───────────────────────────────────────────────────────────────────── */

const easeOut = [0.22, 1, 0.36, 1] as const;

// Chart is lazy-loaded so Recharts stays out of the initial bundle, and only
// rendered once near the viewport (see chartInView below).
const WhyCustomChart = dynamic(() => import("./why-custom-chart"), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden
      className="h-[320px] w-full rounded-xl bg-paleBlue/30 animate-pulse"
    />
  ),
});

type TierKey = "starter" | "standard" | "custom";

interface Tier {
  key: TierKey;
  label: string;
  price: number;
  priceLabel: string;
  tag: string;
  facts: { stat: string; text: string }[];
}

const TIERS: Record<TierKey, Tier> = {
  starter: {
    key: "starter",
    label: "Starter",
    price: 350,
    priceLabel: "$350",
    tag: "events",
    facts: [
      {
        stat: "$15k+",
        text: "spent on the average wedding or quince — your site is a tiny slice of the day",
      },
      {
        stat: "1 link",
        text: "date, venue, dress code and RSVP in one place on every guest's phone",
      },
      { stat: "0", text: "paper cards to print, mail, or chase down" },
    ],
  },
  standard: {
    key: "standard",
    label: "Standard",
    price: 650,
    priceLabel: "$650",
    tag: "business",
    facts: [
      { stat: "75%", text: "judge your credibility by your site's design" },
      {
        stat: "53%",
        text: "leave a site slower than 3 seconds (builders run heavy)",
      },
      { stat: "31%", text: "skip a small business with no real website" },
    ],
  },
  custom: {
    key: "custom",
    label: "Custom",
    price: 1200,
    priceLabel: "$1,200+",
    tag: "apps",
    facts: [
      {
        stat: "67%",
        text: "prefer to book or order direct from your site, not a middleman",
      },
      {
        stat: "24/7",
        text: "take bookings and payments while you sleep; a builder can't",
      },
      {
        stat: "~20%",
        text: "of bookings no-show; automatic reminders cut that down",
      },
    ],
  },
};

const ORDER: TierKey[] = ["starter", "standard", "custom"];
const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

const SOURCES =
  "Sources: Stanford Web Credibility Research · Google “The Need for Mobile Speed” · The Knot 2025 Real Weddings Study · industry quinceañera budget data · Lightspeed/Restolabs online-ordering data · small-business consumer surveys.";

const MONEY_NOTE =
  "You own your domain (~$15/yr) — a builder rents you everything. Want changes? $75/hr, only when you need them. Prefer fully hands-off? Optional care plan $75/mo for Custom builds.";

/* Gentle count-up. Renders the REAL value on first paint (so there's never a
   "$0" flash for users or crawlers), then — once scrolled into view — counts
   up from a sensible base to the value. On tier/year changes it eases from the
   previous value. Respects prefers-reduced-motion. */
function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const fromRef = useRef(value);
  const started = useRef(false);
  const [n, setN] = useState(value); // first paint / SSR = real number

  useEffect(() => {
    if (reduce) {
      setN(value);
      fromRef.current = value;
      return;
    }
    if (!inView) return;
    // First reveal counts from ~half; later changes ease from the prior value.
    const from = started.current ? fromRef.current : Math.round(value * 0.5);
    started.current = true;
    const start = performance.now();
    const dur = 750;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(from + (value - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
      else fromRef.current = value;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return <span ref={ref}>{usd(n)}</span>;
}

export function WhyCustomCalculator() {
  const [tierKey, setTierKey] = useState<TierKey>("standard");
  const [years, setYears] = useState(3);
  const tier = TIERS[tierKey];

  // Defer the (heavy) Recharts chart until it's near the viewport.
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInView = useInView(chartRef, { once: true, margin: "400px 0px" });

  const builderTotal = 360 * years;
  const ahead = builderTotal - tier.price;

  let winLine: string;
  if (tierKey === "custom") {
    winLine =
      "Builders literally can't do this — booking, payments, logins. That's the real difference.";
  } else if (builderTotal >= tier.price) {
    winLine = `You come out about ${usd(
      ahead,
    )} ahead — and you own it. After that, just your domain; changes only when you want them.`;
  } else {
    winLine =
      "A touch cheaper this first year — but the builder charges every year forever, while your site is yours and paid for.";
  }

  return (
    <div className="mx-auto max-w-5xl">
      {/* Controls */}
      <div className="flex flex-col items-center gap-6">
        <div
          role="radiogroup"
          aria-label="Choose a tier"
          className="inline-flex flex-wrap justify-center gap-2"
        >
          {ORDER.map((k) => {
            const t = TIERS[k];
            const active = k === tierKey;
            return (
              <button
                key={k}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setTierKey(k)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-colors duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
                  active
                    ? "bg-charcoal text-cream border-charcoal"
                    : "bg-cream text-charcoal border-charcoal/15 hover:border-charcoal/30",
                )}
              >
                <span className="font-medium">{t.label}</span>
                <span
                  className={cn(
                    "ml-1.5",
                    active ? "text-cream/70" : "text-warmGray",
                  )}
                >
                  {t.priceLabel} · {t.tag}
                </span>
              </button>
            );
          })}
        </div>

        <div className="w-full max-w-md">
          <label
            htmlFor="years"
            className="flex items-center justify-between text-sm text-charcoal"
          >
            <span>
              Over <span className="font-medium tabular-nums">{years}</span>{" "}
              {years === 1 ? "year" : "years"}
            </span>
            <span className="text-xs text-warmGray">drag to compare</span>
          </label>
          <input
            id="years"
            type="range"
            min={1}
            max={5}
            step={1}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            aria-valuetext={`${years} ${years === 1 ? "year" : "years"}`}
            className="mt-3 w-full accent-accent cursor-pointer"
          />
        </div>
      </div>

      {/* Scoreboard */}
      <div className="mt-12 grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
        <div className="rounded-2xl border border-coral/30 bg-coral/[0.05] p-6">
          <p className="text-[11px] tracking-[0.16em] uppercase text-[#A8472B]">
            $30/mo builder
          </p>
          <p className="mt-2 font-display font-medium text-3xl text-charcoal tabular-nums">
            <CountUp value={builderTotal} />
          </p>
          <p className="mt-1.5 text-sm text-warmGray">
            over {years} {years === 1 ? "year" : "years"} · you own $0.
          </p>
        </div>

        <div className="rounded-2xl border border-accent/40 bg-accent/[0.07] p-6 ring-1 ring-accent/10">
          <p className="text-[11px] tracking-[0.16em] uppercase text-accentDeep">
            Daycraft {tier.label}
          </p>
          <p className="mt-2 font-display font-medium text-3xl text-charcoal tabular-nums">
            <CountUp value={tier.price} />
            {tierKey === "custom" && "+"}
            <span className="ml-1.5 text-base font-normal text-warmGray">
              once
            </span>
          </p>
          <p className="mt-1.5 text-sm text-warmGray">yours, you own it.</p>
        </div>
      </div>

      {/* Win line */}
      <m.p
        key={winLine}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: easeOut }}
        className="mt-6 max-w-2xl mx-auto text-center text-[15px] leading-relaxed text-charcoal bg-paleBlue/40 border border-accent/15 rounded-xl px-5 py-4"
      >
        {winLine}
      </m.p>

      {/* Chart (deferred until near viewport — keeps Recharts off first paint) */}
      <div ref={chartRef} className="mt-12 max-w-4xl mx-auto">
        {chartInView ? (
          <WhyCustomChart price={tier.price} years={years} />
        ) : (
          <div
            aria-hidden
            className="h-[320px] w-full rounded-xl bg-paleBlue/30"
          />
        )}
      </div>

      {/* Per-tier facts */}
      <div className="mt-12 grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {tier.facts.map((f) => (
          <m.div
            key={f.stat + f.text}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="rounded-xl border border-charcoal/[0.08] bg-cream p-5"
          >
            <p className="font-display font-medium text-2xl text-charcoal">
              {f.stat}
            </p>
            <p className="mt-2 text-sm text-warmGray leading-relaxed">
              {f.text}
            </p>
          </m.div>
        ))}
      </div>

      {/* Honest money note (NOT folded into the chart math) */}
      <p className="mt-10 max-w-2xl mx-auto text-center text-sm text-warmGray leading-relaxed">
        {MONEY_NOTE}
      </p>

      {/* Sources */}
      <p className="mt-6 max-w-3xl mx-auto text-center text-xs text-warmGray leading-relaxed">
        {SOURCES}
      </p>
    </div>
  );
}
