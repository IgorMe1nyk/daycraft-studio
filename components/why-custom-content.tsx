"use client";

import Link from "next/link";
import { m } from "framer-motion";
import {
  KeyRound,
  Fingerprint,
  Zap,
  Search,
  Accessibility,
  UserRound,
  Sprout,
  PenTool,
  ArrowRight,
  ArrowDown,
  type LucideIcon,
} from "lucide-react";
import { buttonVariants } from "./ui/button";
import { WhyCustomCalculator } from "./why-custom";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────────────────
   WhyCustomContent — the full /why-custom page. Leads with the benefits that
   matter beyond price; keeps the interactive cost comparison as proof near
   the end. Igor's voice: plain, honest, fair to builders, never salesy.
   ───────────────────────────────────────────────────────────────────── */

const easeOut = [0.22, 1, 0.36, 1] as const;

const BENEFITS: { Icon: LucideIcon; title: string; body: string }[] = [
  {
    Icon: KeyRound,
    title: "You own it",
    body: "It's yours — the site and the domain. Not a template you rent every month. If you ever leave, you take it with you.",
  },
  {
    Icon: Fingerprint,
    title: "One of a kind",
    body: "Built for your business, not a template a thousand other shops are using. People notice the difference.",
  },
  {
    Icon: Zap,
    title: "Built to be fast",
    body: "Hand-coded and light. Builders pile on extra code and lag — and slow sites lose people before they ever see you.",
  },
  {
    Icon: Search,
    title: "Found on Google",
    body: "Set up properly so you show up in search. Builders limit the technical things that actually help you rank.",
  },
  {
    Icon: Accessibility,
    title: "Works for everyone",
    body: "Built accessible (WCAG AA) — most builder sites aren't. It's the right thing to do, and it keeps you out of legal trouble.",
  },
  {
    Icon: UserRound,
    title: "A real person",
    body: "You talk to me — the person who actually built it. Not a help desk, not a chatbot, not figuring it out alone.",
  },
  {
    Icon: Sprout,
    title: "Grows with you",
    body: "Start simple, add online booking or payments later. A builder boxes you in; this doesn't.",
  },
  {
    Icon: PenTool,
    title: "Made for you, not a box",
    body: "Your words, your photos, your business shape the site — you don't squeeze yourself into someone's template.",
  },
];

export function WhyCustomContent() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-14 lg:pt-36 lg:pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-paleBlue/40 via-cream to-cream"
        />
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <span className="text-[11px] tracking-[0.18em] text-accentDeep uppercase">
            The honest answer
          </span>
          {/* H1 paints on first frame (LCP) — no opacity-gated entrance. */}
          <h1 className="mt-4 font-display font-medium text-h1 text-charcoal">
            Why not just a $30/month builder?
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-warmGray text-body-lg leading-relaxed">
            A builder rents you a template, forever. I build you something you
            own — and it&apos;s better in just about every way that matters.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#contact"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
            >
              Start a project
              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>
            <a
              href="#the-math"
              className="group inline-flex items-center gap-1.5 text-sm text-warmGray hover:text-accentDeep transition-colors"
            >
              see the math
              <ArrowDown className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Fair framing ─────────────────────────────────────────────────── */}
      <section className="pb-4">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <p className="text-center text-warmGray text-[15px] leading-relaxed">
            Builders aren&apos;t a scam. For a quick personal page, they&apos;re
            fine. But if this is your business, your event, or your name on the
            line, here&apos;s the honest difference — so you can decide for
            yourself.
          </p>
        </div>
      </section>

      {/* ── Benefits grid (the heart) ────────────────────────────────────── */}
      <section className="py-14 lg:py-20" aria-labelledby="why-benefits-heading">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {/* Visually hidden — gives the benefits section a heading so the
              card h3s don't skip a level (a11y), without changing the design. */}
          <h2 id="why-benefits-heading" className="sr-only">
            Why a custom site beats a builder
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {BENEFITS.map(({ Icon, title, body }, i) => (
              <m.div
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: (i % 4) * 0.06,
                  ease: easeOut,
                }}
                className="rounded-2xl border border-charcoal/[0.08] bg-cream p-6"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent/12 text-accent">
                  <Icon className="size-5" strokeWidth={1.9} aria-hidden />
                </span>
                <h3 className="mt-4 font-display font-medium text-xl text-charcoal">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-warmGray leading-relaxed">
                  {body}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The math (proof) ─────────────────────────────────────────────── */}
      <section
        id="the-math"
        className="scroll-mt-24 py-16 lg:py-24 bg-paleBlue/25 border-y border-charcoal/[0.06]"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display font-medium text-h2 text-charcoal">
              And yes — the math works too.
            </h2>
            <p className="mt-4 text-warmGray text-body-lg leading-relaxed">
              Owning beats renting over time. Drag the years and pick a tier —
              the numbers are real and sourced below.
            </p>
          </div>
          <div className="mt-12">
            <WhyCustomCalculator />
          </div>
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="rounded-2xl border border-charcoal/10 bg-paleBlue/30 p-8 sm:p-12 text-center"
          >
            <h2 className="font-display font-medium text-h2 text-charcoal">
              Want one that&apos;s actually yours?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-warmGray text-[15px] leading-relaxed">
              Tell me about your business or event and I&apos;ll get back to you
              within 24 hours — no pressure, no sales pitch.
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
