"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { WorkCard } from "./work";
import { buttonVariants } from "./ui/button";
import { getProject } from "@/lib/projects";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────────────────
   Reusable segment landing page (/event-sites, /personal-brand,
   /business-sites). Same brand + components as the rest of the site:
   editorial hero, real example cards (WorkCard), a tier line, an audience
   FAQ, and ONE primary CTA to the contact form.

   The hero headline is rendered as plain markup (no opacity-gated motion) so
   it paints on first frame and stays LCP-friendly. Below-fold sections use
   light whileInView reveals.
   ───────────────────────────────────────────────────────────────────── */

const easeOut = [0.22, 1, 0.36, 1] as const;

export interface LandingFAQ {
  q: string;
  a: string;
}

export interface LandingConfig {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  /** Slugs from lib/projects.ts to feature as examples. */
  exampleSlugs: string[];
  examplesHeading: string;
  /** Short tier/price line, e.g. "Starter tier · from $350". */
  tierLine: string;
  /** 3–5 bullet points of what's included for this audience. */
  highlights: string[];
  faqs: LandingFAQ[];
  ctaTitle: string;
  ctaText: string;
}

export function LandingPage({ config }: { config: LandingConfig }) {
  const examples = config.exampleSlugs
    .map((slug) => getProject(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20">
        {/* Soft cream→paleBlue wash behind the hero — subtle, on-brand. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-paleBlue/40 via-cream to-cream"
        />
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <span className="text-[11px] tracking-[0.18em] text-accentDeep uppercase">
            {config.eyebrow}
          </span>
          <h1 className="mt-5 font-display font-medium text-hero-display text-charcoal text-balance">
            {config.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-warmGray text-body-lg leading-relaxed">
            {config.subtitle}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#contact"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
            >
              Start a project
              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>
            <Link
              href="/work"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              See all work
            </Link>
          </div>
          <p className="mt-6 text-sm text-warmGray/85">{config.tierLine}</p>
        </div>
      </section>

      {/* ── What's included ──────────────────────────────────────────────── */}
      <section className="py-8 lg:py-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {config.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2.5 text-[15px] text-charcoal/85"
              >
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent">
                  <Check className="size-3" strokeWidth={2.5} />
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Examples (real cards from the portfolio) ─────────────────────── */}
      {examples.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <m.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="font-display font-medium text-h2 text-charcoal text-center"
            >
              {config.examplesHeading}
            </m.h2>
            <div
              className={cn(
                "mt-12 grid gap-8 lg:gap-10",
                examples.length > 1 ? "md:grid-cols-2" : "max-w-2xl mx-auto",
              )}
            >
              {examples.map((project, i) => (
                <WorkCard key={project.id} project={project} index={i} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/work"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-charcoal hover:text-accentDeep transition-colors"
              >
                See all work
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ (native disclosure — accessible, zero JS) ────────────────── */}
      <section className="py-16 lg:py-24 bg-paleBlue/25 border-y border-charcoal/[0.06]">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-display font-medium text-h2 text-charcoal text-center">
            Questions
          </h2>
          <div className="mt-10 divide-y divide-charcoal/[0.08]">
            {config.faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none text-charcoal font-medium [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden
                    className="shrink-0 text-accent transition-transform duration-200 group-open:rotate-45 text-xl leading-none"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-warmGray leading-relaxed text-[15px]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="rounded-2xl border border-charcoal/10 bg-paleBlue/30 p-8 sm:p-12 text-center"
          >
            <h2 className="font-display font-medium text-h2 text-charcoal">
              {config.ctaTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-warmGray text-[15px] leading-relaxed">
              {config.ctaText}
            </p>
            <div className="mt-8">
              <Link
                href="/#contact"
                className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
              >
                Start a project
                <ArrowRight className="size-4" strokeWidth={2} />
              </Link>
            </div>
          </m.div>
        </div>
      </section>
    </>
  );
}
