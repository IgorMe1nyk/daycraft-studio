"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

/**
 * Headline alternatives — swap whichever feels strongest:
 *   1. "Websites that work as hard as you do."    (current — confident, personal)
 *   2. "The website your business deserves."      (warmer, more empathetic)
 *   3. "Clean websites. Fairly priced. Delivered fast."  (more direct/promise-led)
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden"
    >
      {/* ── Watercolor wash backdrop ───────────────────────────────────────────
          Three soft, blurred orbs layered to suggest a sunrise without ever
          being literal. Everything is decorative + aria-hidden. */}
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

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Pill badge with animated sun */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easeOut }}
          className="inline-flex items-center gap-2.5 rounded-full bg-paleBlue/60 backdrop-blur-sm border border-accent/15 px-3.5 py-1.5 mb-8"
        >
          <span className="relative inline-flex">
            <span className="absolute inset-0 rounded-full bg-accent/40 blur-[3px] animate-sun-pulse" />
            <span className="relative size-2 rounded-full bg-accent" />
          </span>
          <span className="text-xs text-charcoal/80 font-medium tracking-tight">
            Booking June–July 2026 · 2 spots open
          </span>
        </motion.div>

        {/* Headline — hero display */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.05, ease: easeOut }}
          className="text-[48px] leading-[1.02] sm:text-7xl lg:text-[104px] xl:text-[120px] tracking-[-0.035em] font-medium text-charcoal max-w-5xl"
        >
          Websites that work{" "}
          <span className="font-serif italic font-normal text-accent tracking-[-0.02em]">
            as hard
          </span>{" "}
          as you do.
        </motion.h1>

        {/* Horizon line decoration — echoes the logo: small line · sun · longer line */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scaleX: 0.6 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: easeOut }}
          className="origin-left mt-10 flex items-center gap-2.5"
        >
          <span className="block h-px w-10 bg-charcoal/20" />
          <span className="block size-1.5 rounded-full bg-accent" />
          <span className="block h-px w-32 bg-charcoal/20" />
        </motion.div>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: easeOut }}
          className="mt-8 text-lg sm:text-xl text-warmGray max-w-2xl leading-relaxed"
        >
          Daybreak Studio builds clean, fast websites for small businesses in
          North Jersey. Delivered in days, not months.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: easeOut }}
          className="mt-10 flex flex-wrap items-center gap-3"
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
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-7 text-sm text-warmGray/85"
        >
          Based in North Jersey · Replies within 24 hours
        </motion.p>

        {/* Scroll indicator — only above 'md' since on mobile it's redundant */}
        <motion.a
          href="#services"
          aria-label="Scroll to services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="hidden md:flex absolute bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-warmGray/70 hover:text-accent transition-colors"
        >
          <span className="text-[10px] tracking-[0.22em] uppercase">scroll</span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="block"
          >
            <ChevronDown className="size-4" strokeWidth={1.6} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
