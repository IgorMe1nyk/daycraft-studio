"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, MessageCircle, Award, Coins } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const easeOut = [0.22, 1, 0.36, 1] as const;

type Principle = { title: string; desc: string; Icon: LucideIcon };

const principles: Principle[] = [
  {
    title: "Fast delivery",
    desc: "Measured in days, not months.",
    Icon: Zap,
  },
  {
    title: "Direct communication",
    desc: "You talk to me, not an account manager.",
    Icon: MessageCircle,
  },
  {
    title: "Quality work",
    desc: "Every site I'd be proud to put my name on.",
    Icon: Award,
  },
  {
    title: "Fair pricing",
    desc: "Small business friendly, no surprises.",
    Icon: Coins,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-paleBlue/50 py-24 lg:py-32 border-y border-charcoal/[0.04]"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* ─── Photo + offset color block ───────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="md:col-span-5 md:sticky md:top-24"
          >
            <div className="relative">
              {/* Offset color block — soft accent square behind the photo,
                  nudged down-right to add depth. */}
              <div
                aria-hidden
                className="absolute -inset-px translate-x-3 translate-y-3 lg:translate-x-4 lg:translate-y-4 rounded-2xl bg-accent/15 -z-10"
              />
              {/* Soft halo, even further back */}
              <div
                aria-hidden
                className="absolute -inset-4 -z-20 rounded-3xl bg-gradient-to-br from-accent/10 via-transparent to-paleBlue/0 blur-2xl"
              />

              {/* Photo. To swap the image, drop a new portrait JPG at
                  /public/igor-photo.jpg (recommend ~1000x1250) — next/image
                  handles compression, resizing, and modern-format serving
                  automatically. The pale-blue background only shows briefly
                  while the image loads. */}
              <div className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-paleBlue/40 ring-1 ring-charcoal/[0.06] shadow-[0_8px_28px_-12px_rgba(26,26,26,0.18)] transition-shadow duration-500 hover:shadow-[0_14px_40px_-12px_rgba(26,26,26,0.26)]">
                <Image
                  src="/igor-photo.jpg"
                  alt="Igor Melnyk, founder of Daybreak Studio"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </motion.div>

          {/* ─── Copy + principles ────────────────────────────────────────── */}
          <div className="md:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="text-[11px] tracking-[0.18em] text-accent uppercase block"
            >
              About
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.05, ease: easeOut }}
              className="mt-4 text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em] text-charcoal"
            >
              Hey, I&apos;m{" "}
              <span className="font-serif italic font-normal">Igor</span>.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.12, ease: easeOut }}
              className="mt-6 space-y-5 text-warmGray leading-relaxed text-[16px]"
            >
              <p>
                I&apos;m a computer science student at Rowan University,
                originally from Ukraine. I started Daybreak Studio because I
                noticed a gap: small business owners need real websites, but
                agencies are expensive and DIY builders look amateur. I bridge
                that gap.
              </p>
              <p>
                I build the site myself, deliver fast, and treat every project
                like it&apos;s my own business. When I&apos;m not coding,
                I&apos;m boxing, running, or planning my next trip. I work
                early mornings and late nights — hence{" "}
                <span className="text-charcoal italic font-serif">
                  Daybreak
                </span>
                .
              </p>
            </motion.div>

            <div className="mt-10">
              <motion.h3
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="text-[11px] tracking-[0.18em] text-warmGray uppercase"
              >
                How I work
              </motion.h3>
              <div className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-5">
                {principles.map((p, i) => {
                  const Icon = p.Icon;
                  return (
                    <motion.div
                      key={p.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{
                        duration: 0.5,
                        delay: 0.22 + i * 0.06,
                        ease: easeOut,
                      }}
                      className="border-t border-charcoal/10 pt-4"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex size-7 items-center justify-center rounded-md bg-accent/12 text-accent">
                          <Icon className="size-3.5" strokeWidth={2} />
                        </span>
                        <h4 className="text-sm font-medium text-charcoal">
                          {p.title}
                        </h4>
                      </div>
                      <p className="mt-2 text-sm text-warmGray leading-relaxed">
                        {p.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Currently building — a quiet "live" status line. The green
                  dot reuses Tailwind's built-in `animate-ping` for a gentle
                  pulse, signalling this isn't a static page. */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.5, ease: easeOut }}
                className="mt-8 flex items-center gap-2.5 text-sm italic text-warmGray"
              >
                <span
                  className="relative inline-flex size-2 shrink-0"
                  aria-hidden
                >
                  <span className="absolute inset-0 rounded-full bg-emerald-500/50 animate-ping" />
                  <span className="relative inline-block size-2 rounded-full bg-emerald-500" />
                </span>
                Currently in design: an editorial photography portfolio for a
                NY/NJ wedding photographer.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
