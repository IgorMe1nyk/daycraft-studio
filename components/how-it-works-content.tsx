"use client";

import { m } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

/* ─────────────────────────────────────────────────────────────────────────
   The /how-it-works page content. Long-form, conversational, written for
   someone who has never bought a website before. All copy lives here so
   it's easy to tweak in one place.
   ─────────────────────────────────────────────────────────────────────── */

export default function HowItWorksContent() {
  return (
    <>
      <Hero />
      <Stages />
      <Money />
      <Domain />
      <Troubleshoot />
      <ClosingCTA />
    </>
  );
}

/* ── HERO ─────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative pt-32 pb-14 lg:pt-40 lg:pb-20 overflow-hidden">
      {/* Soft watercolor backdrop — quieter than the home hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(232,238,244,0.85) 0%, rgba(232,238,244,0) 65%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <m.a
          href="/"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="inline-flex items-center gap-1.5 text-sm text-warmGray hover:text-accent transition-colors"
        >
          <ArrowLeft className="size-3.5" strokeWidth={1.8} />
          Back to home
        </m.a>
        <m.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: easeOut }}
          className="mt-10 block text-[11px] tracking-[0.18em] text-accent uppercase"
        >
          The full guide
        </m.span>
        <m.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
          className="mt-4 font-display font-medium text-h1 text-charcoal"
        >
          How working with{" "}
          <span className="font-serif italic font-normal text-accent">
            Daybreak Studio
          </span>{" "}
          actually works
        </m.h1>
        <m.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: easeOut }}
          className="mt-6 text-lg text-warmGray leading-relaxed"
        >
          If you&apos;ve never paid for a website before, this page walks you
          through the whole thing — what you&apos;ll do, what I&apos;ll do,
          what it costs, and what happens when something goes wrong.
        </m.p>
      </div>
    </section>
  );
}

/* ── STAGES ───────────────────────────────────────────────────────────── */

const stages: {
  n: string;
  title: string;
  youDo: string;
  iDo: string;
  timeline: string;
}[] = [
  {
    n: "01",
    title: "You reach out",
    youDo:
      "Fill out the contact form on the home page (or email me directly at hello@daybreakstudio.studio). Tell me a little about your business and what kind of site you're thinking about.",
    iDo: "Reply within 24 hours, usually faster.",
    timeline: "Day 0",
  },
  {
    n: "02",
    title: "We chat",
    youDo:
      "Hop on a 15-minute conversation (call, text, or email — your call). I'll ask about your business, your goals, and any examples you like. No prep needed.",
    iDo: "Listen, ask the right questions, and recommend the right service tier for what you actually need (not the most expensive one).",
    timeline: "Day 1–2",
  },
  {
    n: "03",
    title: "You decide & we agree",
    youDo:
      "If you want to move forward, I'll send you a short project agreement (1 page, plain English). You sign by replying “I agree” — no fancy contracts needed.",
    iDo: "Send the agreement, then send you the deposit details (Zelle, Venmo, or Cash App).",
    timeline: "Day 2–4",
  },
  {
    n: "04",
    title: "You pay the 50% deposit",
    youDo:
      "Send the deposit via Zelle (or your preferred method). Buy your domain through Namecheap (~$12–15) — I'll walk you through this if you've never done it. Takes 5 minutes.",
    iDo: "Confirm receipt of payment and your domain. Start work the same day.",
    timeline: "Day 4–5",
  },
  {
    n: "05",
    title: "I build",
    youDo:
      "Send me your business info: name, logo (if you have one), photos, the words you want, and any examples you like. Then relax — I'll keep you updated.",
    iDo: "Design and build your site. Send you a preview link within a few days that you can open on any device. No logins, no software.",
    timeline: "Day 5–10",
  },
  {
    n: "06",
    title: "We refine",
    youDo:
      "Look at the preview. Tell me what to change — colors, words, layout, photos — anything. Two rounds of revisions are included.",
    iDo: "Make the changes within 24 hours. Send you a new preview. Repeat until you're happy.",
    timeline: "Day 8–13",
  },
  {
    n: "07",
    title: "Final payment & launch",
    youDo:
      "When you're happy with the preview, send the final 50% payment.",
    iDo: "As soon as payment lands, I connect your domain to the site, run a final test, and your site goes live. I send you a short walkthrough on how to ask for changes later.",
    timeline: "Day 10–14",
  },
];

function Stages() {
  return (
    <section className="relative py-14 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <m.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="font-display font-medium text-h2 text-charcoal mb-12"
        >
          The 7 stages, from inquiry to launch
        </m.h2>

        <ol className="relative space-y-12 lg:space-y-14">
          {/* Vertical timeline line */}
          <div
            aria-hidden
            className="absolute left-5 top-4 bottom-4 w-px bg-gradient-to-b from-accent/40 via-accent/30 to-accent/0"
          />

          {stages.map((s, i) => (
            <m.li
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: easeOut }}
              className="relative flex gap-5 sm:gap-6"
            >
              {/* Numbered circle */}
              <div className="relative shrink-0">
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-accent/15 blur-md scale-150 opacity-50"
                />
                <span className="relative z-10 inline-flex items-center justify-center size-10 rounded-full bg-cream border border-accent/40 text-accent text-[11px] font-medium tracking-[0.14em]">
                  {s.n}
                </span>
              </div>

              <div className="flex-1 min-w-0 pt-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-xl sm:text-2xl tracking-[-0.015em] text-charcoal">
                    {s.title}
                  </h3>
                  <span className="text-[11px] tracking-[0.18em] text-warmGray/80 uppercase">
                    {s.timeline}
                  </span>
                </div>

                <div className="mt-4 space-y-3.5 text-[15px] leading-relaxed">
                  <p>
                    <span className="inline-block text-[11px] tracking-[0.18em] uppercase text-accent mr-2 align-baseline">
                      You
                    </span>
                    <span className="text-charcoal/85">{s.youDo}</span>
                  </p>
                  <p>
                    <span className="inline-block text-[11px] tracking-[0.18em] uppercase text-accent mr-2 align-baseline">
                      Me
                    </span>
                    <span className="text-charcoal/85">{s.iDo}</span>
                  </p>
                </div>
              </div>
            </m.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ── MONEY ────────────────────────────────────────────────────────────── */

const moneyCards = [
  {
    title: "How you pay",
    body: "Zelle (preferred — instant and free), Venmo, Cash App, or check made out to Ihor Melnyk. I'll send you the details after we agree on the project. I don't take credit card or bank info through the website.",
  },
  {
    title: "The 50/50 split",
    body: "Half upfront to begin work, half before your site goes live. This protects both of us — you're not paying for something you haven't seen, and I'm not working without a commitment.",
  },
  {
    title: "What's included",
    body: "The price you agree on covers: design, build, mobile optimization, basic SEO, two rounds of revisions, domain setup help, and the first year of hosting. No hidden fees.",
  },
];

function Money() {
  return (
    <section className="relative bg-paleBlue/50 py-20 lg:py-28 border-y border-charcoal/[0.04]">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <m.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="font-display font-medium text-h2 text-charcoal"
        >
          What about the money?
        </m.h2>

        <div className="mt-10 grid md:grid-cols-3 gap-5 lg:gap-6">
          {moneyCards.map((card, i) => (
            <m.div
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: easeOut,
              }}
              className="rounded-2xl border border-charcoal/[0.08] bg-cream p-6 lg:p-7"
            >
              <h3 className="text-[11px] tracking-[0.18em] uppercase text-accent">
                {card.title}
              </h3>
              <p className="mt-3 text-[15px] text-charcoal/85 leading-relaxed">
                {card.body}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── DOMAIN ───────────────────────────────────────────────────────────── */

const domainSteps = [
  <>
    Go to{" "}
    <a
      href="https://www.namecheap.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-charcoal underline underline-offset-4 decoration-charcoal/25 hover:text-accent hover:decoration-accent transition-colors font-medium"
    >
      namecheap.com
    </a>{" "}
    (or{" "}
    <a
      href="https://www.cloudflare.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-charcoal underline underline-offset-4 decoration-charcoal/25 hover:text-accent hover:decoration-accent transition-colors font-medium"
    >
      cloudflare.com
    </a>
    ).
  </>,
  <>Search for the name you want.</>,
  <>Add it to cart — should cost $10–15 per year for a normal .com.</>,
  <>
    Make sure{" "}
    <span className="font-medium text-charcoal">Domain Privacy</span> is turned
    ON (it&apos;s usually free) — this hides your home address from public
    lookup.
  </>,
  <>
    Skip every other add-on (no hosting, no email packages, no SSL
    certificates — I handle all of that).
  </>,
  <>Pay with your card.</>,
  <>
    Send me your Namecheap login when you&apos;re ready, OR add me as a user
    to manage DNS — I&apos;ll explain in a quick message.
  </>,
];

function Domain() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <m.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="font-display font-medium text-h2 text-charcoal"
        >
          What about the domain?
        </m.h2>

        <m.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05, ease: easeOut }}
          className="mt-5 text-[15.5px] text-warmGray leading-relaxed"
        >
          A domain is your website&apos;s address (like{" "}
          <span className="text-charcoal italic font-serif">
            tonysbarbershop.com
          </span>
          ). You need to buy one yourself in your own name, so you always own
          it. Here&apos;s how:
        </m.p>

        <m.ol
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
          className="mt-8 space-y-3.5"
        >
          {domainSteps.map((step, i) => (
            <li key={i} className="flex gap-3 text-[15px] text-charcoal/85">
              <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent text-[11px] font-medium tracking-tight">
                {i + 1}
              </span>
              <span className="flex-1 leading-relaxed pt-0.5">{step}</span>
            </li>
          ))}
        </m.ol>

        <m.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
          className="mt-7 text-[15px] text-warmGray leading-relaxed"
        >
          If you&apos;ve never bought a domain before, I&apos;ll do this part
          with you over a screen share — takes about 5 minutes.
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
          className="mt-8 flex gap-3 rounded-xl border border-accent/20 bg-accent/[0.05] p-4 lg:p-5"
        >
          <span className="text-[10px] tracking-[0.18em] uppercase text-accent shrink-0 mt-0.5">
            Tip
          </span>
          <p className="text-[14.5px] text-charcoal/85 leading-relaxed">
            Pick something simple, short, and easy to spell. Your business
            name + .com is almost always the best choice.
          </p>
        </m.div>
      </div>
    </section>
  );
}

/* ── TROUBLESHOOT ─────────────────────────────────────────────────────── */

const troubleshootItems = [
  {
    q: "What if my site breaks?",
    a: "Email me. I'll fix it. If you're on the $15/month plan, it's included. If not, urgent fixes are free for the first 30 days after launch, then $50 for a one-off fix.",
  },
  {
    q: "What if I want my money back?",
    a: "If you change your mind in the first 24 hours after sending the deposit, you get a full refund — no questions. After work has started, deposits aren't refundable, but you can pause the project for up to 30 days without losing it.",
  },
  {
    q: "What if I'm not happy with the design?",
    a: "We do two rounds of revisions included. If after both rounds it still isn't right, we can talk — I want you to actually love your site. I've never had a client walk away unhappy and I plan to keep it that way.",
  },
  {
    q: "What if I want to move my site to someone else later?",
    a: "You own your domain. You own your content. I can hand off the codebase or help you migrate. No one is locked in.",
  },
];

function Troubleshoot() {
  return (
    <section className="relative bg-paleBlue/50 py-20 lg:py-28 border-y border-charcoal/[0.04]">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <m.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="font-display font-medium text-h2 text-charcoal"
        >
          What if something goes wrong?
        </m.h2>

        <div className="mt-10 space-y-7">
          {troubleshootItems.map((item, i) => (
            <m.div
              key={item.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.06,
                ease: easeOut,
              }}
              className="border-t border-charcoal/10 pt-5"
            >
              <h3 className="text-[16.5px] font-medium text-charcoal">
                {item.q}
              </h3>
              <p className="mt-2 text-[15px] text-warmGray leading-relaxed">
                {item.a}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CLOSING CTA ──────────────────────────────────────────────────────── */

function ClosingCTA() {
  return (
    <section className="relative py-24 lg:py-32 text-center">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <m.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="font-display font-medium text-h1 text-charcoal"
        >
          Ready to{" "}
          <span className="font-serif italic font-normal text-accent">
            start
          </span>
          ?
        </m.h2>
        <m.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
          className="mt-9 flex flex-wrap justify-center items-center gap-3"
        >
          <a
            href="/#contact"
            className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
          >
            Start a project
            <ArrowRight className="size-4" strokeWidth={2} />
          </a>
          <a
            href="mailto:hello@daybreakstudio.studio"
            className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
          >
            Email me directly
            <ArrowUpRight className="size-4" strokeWidth={2} />
          </a>
        </m.div>
        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-sm text-warmGray/85"
        >
          Most projects start within a week of first contact.
        </m.p>
      </div>
    </section>
  );
}
