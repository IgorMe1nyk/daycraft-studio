"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { ConceptMockup } from "./project-preview";
import { getProject, type Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────────────────
   FeaturedWork — the homepage "Selected work" section, redesigned as big
   editorial rows. Four curated projects, alternating sides; the rest live on
   /work. Each row pairs a refined browser-frame preview (real screenshots,
   or the concept's own design mockup) with a calm info column. One tasteful
   hover move: the frame lifts and a tall screenshot pans down a touch.
   ───────────────────────────────────────────────────────────────────── */

const easeOut = [0.22, 1, 0.36, 1] as const;

type ChipKind = "Pitch" | "Concept" | "Demo";

interface Featured {
  slug: string;
  chip: ChipKind;
  /** Tall screenshot for image rows; omit for concept-mockup rows. */
  image?: { src: string; alt: string };
  /** Live URL for an optional "Live preview" link. */
  live?: string;
  location: string;
  blurb: string;
}

/* Curated order — alternates dark/light tone and keeps the two event sites
   from sitting back-to-back. */
const FEATURED: Featured[] = [
  {
    slug: "leor-meltser",
    chip: "Pitch",
    image: {
      src: "/work/featured/leor.jpg",
      alt: "Homepage of the Leor Meltser photography site — a large editorial hero reading “Editorial photography for Jewish families.”",
    },
    live: "https://leor.daycraftstudio.com",
    location: "NY/NJ wedding & lifecycle photography",
    blurb:
      "An editorial pitch that lets the photography lead — quiet typography, generous space, and a booking flow that never pressures.",
  },
  {
    slug: "mia-quince",
    chip: "Concept",
    image: {
      src: "/work/featured/mia.jpg",
      alt: "Homepage of the Mía's Quinceañera concept — a cream and gold hero with a drawn monogram and the name Mía Reyes.",
    },
    live: "https://mia-quince.daycraftstudio.com",
    location: "Bilingual quinceañera invitation",
    blurb:
      "A cream-and-gold concept that treats a quinceañera like a luxury magazine spread — one tap flips the whole site between English and Spanish.",
  },
  {
    slug: "fade-and-co",
    chip: "Concept",
    location: "Barbershop · booking-first",
    blurb:
      "A bold, dark concept for a barbershop where “book now” is never more than a thumb-reach away. Sharp, modern, confident.",
  },
  {
    slug: "emily-and-james",
    chip: "Demo",
    image: {
      src: "/work/featured/emily.jpg",
      alt: "Homepage of the Emily & James wedding demo — a romantic Hudson Valley photo with the couple's names in script.",
    },
    live: "https://emily-and-james-wedding.vercel.app",
    location: "Wedding website · custom RSVP",
    blurb:
      "A romantic one-page wedding site with a real multi-step RSVP, schedule, and travel info. A demo build — Emily & James aren't a real couple.",
  },
];

// Category chips — tinted, with AA-contrast text.
const CHIP: Record<ChipKind, string> = {
  Pitch: "bg-accent/12 text-accentDeep",
  Concept: "bg-[#EADFC6] text-[#6A5326]",
  Demo: "bg-charcoal/[0.06] text-charcoal/75",
};

/* Shared browser-frame chrome — identical to ProjectPreview so the homepage
   and /work feel like one system. `children` fills the 16:10 viewport. */
function RowFrame({
  displayUrl,
  children,
}: {
  displayUrl: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden border border-charcoal/10 bg-cream",
        "shadow-[0_12px_36px_-16px_rgba(26,26,26,0.20)]",
        "transition-[transform,box-shadow] duration-500 ease-out",
        "group-hover:-translate-y-1.5 group-hover:shadow-[0_26px_60px_-18px_rgba(26,26,26,0.32)]",
        "group-focus-within:-translate-y-1.5 group-focus-within:shadow-[0_26px_60px_-18px_rgba(26,26,26,0.32)]",
        "motion-reduce:transition-none motion-reduce:transform-none",
      )}
    >
      <div className="flex items-center gap-3 px-3.5 py-3 border-b border-charcoal/[0.06] bg-cream/85 backdrop-blur-sm">
        <div className="flex gap-1.5 shrink-0" aria-hidden>
          <span className="size-[10px] rounded-full bg-[#FF5F57]" />
          <span className="size-[10px] rounded-full bg-[#FEBC2E]" />
          <span className="size-[10px] rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 mx-1 px-3 py-1 rounded-md bg-paleBlue/45 text-center min-w-0">
          <span className="block text-[11px] text-charcoal/70 font-mono truncate tracking-tight">
            {displayUrl}
          </span>
        </div>
        <div className="size-[10px] shrink-0" aria-hidden />
      </div>
      <div className="relative aspect-[16/10] bg-paleBlue/20 overflow-hidden">
        {children}
      </div>
    </div>
  );
}

function Row({ f, index }: { f: Featured; index: number }) {
  const project = getProject(f.slug) as Project;
  const previewLeft = index % 2 === 0;

  return (
    <m.article
      initial={{ opacity: 0, x: previewLeft ? -28 : 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="group grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
    >
      {/* Preview */}
      <div
        className={cn(
          "lg:col-span-7",
          previewLeft ? "lg:order-1" : "lg:order-2",
        )}
      >
        <Link
          href={`/work/${f.slug}`}
          aria-label={`${project.name} — view case study`}
          className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
        >
          <RowFrame displayUrl={project.displayUrl}>
            {f.image ? (
              <Image
                src={f.image.src}
                alt={f.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className={cn(
                  "object-cover object-top",
                  "transition-[object-position] duration-[1400ms] ease-out",
                  "group-hover:object-bottom group-focus-within:object-bottom",
                  "motion-reduce:transition-none",
                )}
              />
            ) : (
              <ConceptMockup project={project} />
            )}
          </RowFrame>
        </Link>
      </div>

      {/* Info */}
      <div
        className={cn(
          "lg:col-span-5",
          previewLeft ? "lg:order-2" : "lg:order-1",
        )}
      >
        <span
          className={cn(
            "inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-[0.1em] uppercase",
            CHIP[f.chip],
          )}
        >
          {f.chip}
        </span>
        <h3 className="mt-4 font-display font-medium text-h2 text-charcoal">
          {project.name}
        </h3>
        <p className="mt-2 text-sm tracking-tight text-warmGray">
          {f.location}
        </p>
        <p className="mt-4 text-warmGray text-[15px] leading-relaxed max-w-md">
          {f.blurb}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href={`/work/${f.slug}`}
            className="group/cta inline-flex items-center gap-1.5 text-sm font-medium text-accentDeep hover:text-charcoal transition-colors"
          >
            View case study
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1 group-hover/cta:translate-x-1" />
          </Link>
          {f.live && (
            <a
              href={f.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-warmGray hover:text-charcoal transition-colors"
            >
              Live preview
              <ArrowUpRight className="size-3.5" />
            </a>
          )}
        </div>
      </div>
    </m.article>
  );
}

export function FeaturedWork() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-[11px] tracking-[0.18em] text-accentDeep uppercase">
            Selected work
          </span>
          <h2 className="mt-4 font-display font-medium text-h1 text-charcoal">
            A look at what I build.
          </h2>
          <p className="mt-5 text-warmGray text-body-lg leading-relaxed">
            Real projects, pitches, and self-directed concepts. Concepts are
            design exercises — labeled as such, never sold as client work.
          </p>
        </div>

        {/* Rows */}
        <div className="mt-16 lg:mt-24 space-y-20 lg:space-y-28">
          {FEATURED.map((f, i) => (
            <Row key={f.slug} f={f} index={i} />
          ))}
        </div>

        {/* View all */}
        <div className="mt-16 lg:mt-20 text-center">
          <Link
            href="/work"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            View all work
            <ArrowRight className="size-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
