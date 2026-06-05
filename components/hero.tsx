import { ChevronDown } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

/**
 * Hero — a SERVER component.
 *
 * Performance note (Round 4): this used to be a client component whose
 * headline (the LCP element) started at opacity:0 and only became visible
 * after Framer Motion hydrated — which pushed LCP to ~6.5s on a busy main
 * thread. Now the entrance animations are pure CSS (see the `animate-fade-up`
 * / `animate-grow-x` utilities in tailwind.config.ts), so the headline is
 * server-rendered and paints at first paint. The look is identical; the
 * `prefers-reduced-motion` block in globals.css collapses these to instant.
 *
 * Headline alternatives — swap whichever feels strongest:
 *   1. "Websites that work as hard as you do."    (current)
 *   2. "The website your business deserves."
 *   3. "Clean websites. Fairly priced. Delivered fast."
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden"
    >
      {/* ── Watercolor wash backdrop — decorative, aria-hidden ───────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 w-[820px] h-[820px] rounded-full opacity-80 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(232,238,244,0.95) 0%, rgba(232,238,244,0) 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-32 w-[600px] h-[600px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(250,243,232,0.85) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-28 right-[16%] w-44 h-44 rounded-full opacity-40 blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(107,140,174,0.55) 0%, transparent 70%)",
        }}
      />
      {/* Living-gradient accent — a slow, GPU-friendly aurora drifting behind
          the headline. Pure CSS (no JS) so the LCP headline still paints on
          first frame; collapses to a static gradient under reduced-motion. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-12 left-[8%] w-[720px] max-w-[90vw] h-[460px] rounded-full blur-3xl animate-aurora"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(107,140,174,0.30) 0%, rgba(232,238,244,0.20) 45%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Pill badge with animated sun */}
        <div
          className="inline-flex items-center gap-2.5 rounded-full bg-paleBlue/60 backdrop-blur-sm border border-accent/15 px-3.5 py-1.5 mb-8 animate-fade-up"
          style={{ animationDelay: "0ms" }}
        >
          <span className="relative inline-flex">
            <span className="absolute inset-0 rounded-full bg-accent/40 blur-[3px] animate-sun-pulse" />
            <span className="relative size-2 rounded-full bg-accent" />
          </span>
          <span className="text-xs text-charcoal/80 font-medium tracking-tight">
            Booking June–July 2026 · 2 spots open
          </span>
        </div>

        {/* Headline — the LCP element. Server-rendered, painted immediately;
            CSS fade-up enhances it. */}
        <h1
          className="text-hero-display font-display font-medium text-charcoal max-w-5xl animate-fade-up"
          style={{ animationDelay: "60ms" }}
        >
          Websites that work{" "}
          <span className="font-serif italic font-normal text-accent tracking-[-0.02em]">
            as hard
          </span>{" "}
          as you do.
        </h1>

        {/* Horizon line decoration */}
        <div
          aria-hidden
          className="origin-left mt-10 flex items-center gap-2.5 animate-grow-x"
          style={{ animationDelay: "320ms" }}
        >
          <span className="block h-px w-10 bg-charcoal/20" />
          <span className="block size-1.5 rounded-full bg-accent" />
          <span className="block h-px w-32 bg-charcoal/20" />
        </div>

        {/* Subhead */}
        <p
          className="mt-8 text-lg sm:text-xl text-warmGray max-w-2xl leading-relaxed animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          Daycraft Studio builds clean, fast websites for small businesses in
          North Jersey. Delivered in days, not months.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href="#contact"
            className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
          >
            Start a project
          </a>
          <a
            href="#services"
            className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
          >
            View services
          </a>
        </div>

        <p
          className="mt-7 text-sm text-warmGray/85 animate-fade-up"
          style={{ animationDelay: "460ms" }}
        >
          Based in North Jersey · Replies within 24 hours
        </p>

        {/* Scroll indicator — desktop only */}
        <a
          href="#services"
          aria-label="Scroll to services"
          className="hidden md:flex absolute bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-warmGray/70 hover:text-accentDeep transition-colors animate-fade-up"
          style={{ animationDelay: "800ms" }}
        >
          <span className="text-[10px] tracking-[0.22em] uppercase">scroll</span>
          <span className="block animate-scroll-bounce">
            <ChevronDown className="size-4" strokeWidth={1.6} />
          </span>
        </a>
      </div>
    </section>
  );
}
