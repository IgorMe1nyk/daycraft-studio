"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./ui/section-heading";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    n: "01",
    title: "We chat",
    desc: "15 min message or quick call to understand what you need.",
    detail:
      "I'll ask about your business, your goals, and show you the right tier for you.",
  },
  {
    n: "02",
    title: "I design",
    desc: "You get a preview within a few days.",
    detail:
      "I send you a live link you can open on any device — no logins, no software.",
  },
  {
    n: "03",
    title: "We refine",
    desc: "Two rounds of revisions included.",
    detail: "Tell me what to change, I update it within 24 hours, repeat.",
  },
  {
    n: "04",
    title: "You launch",
    desc: "Your site goes live and I'm there for support.",
    detail:
      "I connect your domain, hand you the keys, and stay available for questions.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Faint dot grid — only behind this section, kept very low contrast */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1A1A1A 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading eyebrow="Process" title="How it works" />

        <div className="mt-16 relative">
          {/* Desktop connecting line — runs through the centre of the circles */}
          <div
            aria-hidden
            className="hidden md:block absolute top-[19px] left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
          />

          <div className="grid md:grid-cols-4 gap-10 md:gap-6 relative">
            {steps.map((s, i) => (
              <m.div
                key={s.n}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: easeOut }}
                className="relative flex md:block items-start gap-4"
              >
                {/* Numbered circle */}
                <div className="relative shrink-0 md:mb-5">
                  {/* Soft halo on the circle */}
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-accent/15 blur-md scale-150 opacity-60"
                  />
                  <span className="relative z-10 inline-flex items-center justify-center size-10 rounded-full bg-cream border border-accent/40 text-accentDeep text-[11px] font-medium tracking-[0.14em]">
                    {s.n}
                  </span>
                </div>

                <div className="flex-1 md:flex-none">
                  <h3 className="text-xl tracking-tight text-charcoal">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-warmGray text-[15px] leading-relaxed max-w-[18rem]">
                    {s.desc}
                  </p>
                  <p className="mt-2 text-warmGray/70 text-[13px] leading-relaxed max-w-[18rem]">
                    {s.detail}
                  </p>
                </div>

                {/* Mobile vertical connector — between rows */}
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="md:hidden absolute left-[19px] top-12 bottom-[-1.5rem] w-px bg-gradient-to-b from-accent/40 to-accent/0"
                  />
                )}
              </m.div>
            ))}
          </div>
        </div>

        {/* Wayfinding — the 4 steps above are the short version; this points to
            the full plain-English walkthrough at /how-it-works. */}
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
          className="mt-14 lg:mt-16 text-center"
        >
          <Link
            href="/how-it-works"
            className={cn(buttonVariants({ variant: "outline", size: "md" }), "group")}
          >
            See exactly how a project works, step by step
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </m.div>
      </div>
    </section>
  );
}
