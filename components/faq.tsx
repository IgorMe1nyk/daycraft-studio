"use client";

import { m } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { SectionHeading } from "./ui/section-heading";

const easeOut = [0.22, 1, 0.36, 1] as const;

/**
 * Common questions from first-time buyers — money, domain, process.
 * Plain English, no jargon.
 *
 * Add/edit items by appending to the `faqs` array below. The accordion
 * supports one-open-at-a-time (`type="single"`, `collapsible`); switch to
 * `type="multiple"` if you want several open simultaneously.
 */
const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "How do I pay?",
    a: "Most clients pay through Zelle — it's instant, free, and most banks have it built in. I also accept Venmo, Cash App, or a personal check made out to Ihor Melnyk. I'll send payment details after we agree on the project. I do NOT collect card or banking details through the website.",
  },
  {
    q: "Do I pay everything upfront?",
    a: "No. Payments are split 50/50. The first half is due to begin work, and the final half is due before your site goes live. This protects both of us — you're not paying for something you haven't seen, and I'm not building something I won't get paid for.",
  },
  {
    q: "What if I want to back out after I pay the deposit?",
    a: "The deposit is non-refundable once design work has started, but if you change your mind in the first 24 hours after paying, I'll refund it in full. After that, you can pause the project for up to 30 days without losing your deposit.",
  },
  {
    q: "Do I need to buy a domain?",
    a: (
      <>
        Yes — you&apos;ll need a domain (your web address, like
        &ldquo;yourbusiness.com&rdquo;). It costs about $12–15 per year, and
        you buy it in YOUR name through a service like Namecheap or
        Cloudflare. Owning it yourself means you always have full control.
        I&apos;ll walk you through buying it during our first call — it takes
        about 5 minutes.
      </>
    ),
  },
  {
    q: "Who pays for hosting?",
    a: "First year of hosting is included in your price — no extra fees. After year one, you have two options: keep it managed by me for $15/month (which also includes small monthly tweaks and updates), or take it over yourself with my help. Either way, you're not locked in.",
  },
  {
    q: "How long does it take?",
    a: "Starter ($350) takes 3–5 days. Standard ($650) takes 7–10 days. Custom builds vary depending on scope. Timeline starts from the day you send the deposit, not the day you fill out the form.",
  },
  {
    q: "What if I need changes after the site is live?",
    a: "Small tweaks (text changes, swapping a photo, updating a phone number) — just message me, no charge for the first month. After that, ongoing tweaks are included in the $15/month plan, or charged at $50/hour for one-off requests.",
  },
  {
    q: "Can you handle the words/copy and photos for me?",
    a: "Yes for layout/structure, partially for content. I'll write the headlines, navigation, and structure your information clearly — but you provide the raw text about your business and any photos. If you don't have good photos, I can recommend a local photographer or use tasteful stock options.",
  },
  {
    q: "What if I already have a website?",
    a: "We can either redesign your existing site from scratch (recommended) or migrate your current content to a new design. Either way works — we'll discuss what makes sense in our first chat.",
  },
  {
    q: "Will my site work on phones?",
    a: "Every site I build is mobile-first. Most of your customers will visit on their phone, so the mobile experience is where I spend the most time.",
  },
  {
    q: "Do you do logos or branding?",
    a: "Not as a primary service, but I can put together simple wordmarks and basic logo treatments for clients who don't have one yet. For full branding work, I'll point you to designers I trust.",
  },
  {
    q: "I have a question that's not here.",
    a: (
      <>
        Just message me at{" "}
        <a
          href="mailto:hello@daycraftstudio.com"
          className="text-charcoal underline underline-offset-4 decoration-charcoal/25 hover:text-accent hover:decoration-accent transition-colors"
        >
          hello@daycraftstudio.com
        </a>{" "}
        — I usually reply within a few hours.
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 lg:py-32">
      {/* Soft top border so the section reads as its own beat even though
          the surrounding bg is cream on both sides. */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-charcoal/[0.08] to-transparent"
      />

      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions"
          description="What first-time buyers usually ask before we start."
          center
        />

        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mt-12 lg:mt-14 border-t border-charcoal/[0.08]"
        >
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </m.div>

        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center text-sm text-warmGray"
        >
          Want the full step-by-step?{" "}
          <a
            href="/how-it-works"
            className="text-charcoal hover:text-accent transition-colors underline underline-offset-4 decoration-charcoal/25 hover:decoration-accent"
          >
            Read the detailed process →
          </a>
        </m.p>
      </div>
    </section>
  );
}
