"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./ui/section-heading";
import { BrowserPreview } from "./browser-preview";
import { CaseStudyModal } from "./case-study-modal";
import { buttonVariants } from "./ui/button";
import {
  featuredProjects,
  otherProjects,
  type Project,
} from "@/lib/projects";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

/**
 * Work — portfolio section.
 *
 * Layout adapts automatically to the contents of `lib/projects.ts`:
 *   • Each `featured: true` project renders as a large side-by-side hero card.
 *   • Each `featured: false` project renders as a compact card in a 3-up grid
 *     beneath the featured area.
 *   • The "more projects in progress" line below is static — edit the copy
 *     directly in this file when the pipeline shifts.
 *
 * To add a new project: see the comment block at the top of lib/projects.ts.
 */
export default function Work() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Work"
          title="Selected work"
          description="A look at projects I've built for real couples and businesses."
        />

        {/* ── Featured project(s) ─────────────────────────────────────── */}
        <div className="mt-14 lg:mt-16 space-y-12 lg:space-y-16">
          {featuredProjects.map((project, i) => (
            <FeaturedCard
              key={project.id}
              project={project}
              index={i}
              onOpenDetails={() => setActiveProject(project)}
            />
          ))}
        </div>

        {/* ── Compact cards grid (when more projects added) ───────────── */}
        {otherProjects.length > 0 && (
          <div className="mt-12 lg:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {otherProjects.map((project, i) => (
              <CompactCard
                key={project.id}
                project={project}
                index={i}
                onOpenDetails={() => setActiveProject(project)}
              />
            ))}
          </div>
        )}

        {/* ── Pipeline note ───────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-16 lg:mt-20 text-center text-sm text-warmGray"
        >
          <span className="inline-flex items-center gap-2.5">
            <span className="size-1.5 rounded-full bg-accent/70 animate-sun-pulse" />
            <span className="font-serif italic">
              More projects in progress — a small business site and a
              quinceañera celebration site are coming next.
            </span>
          </span>
        </motion.p>
      </div>

      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Featured project — large side-by-side hero card. Stacks on mobile.
   ───────────────────────────────────────────────────────────────────── */

interface CardProps {
  project: Project;
  index: number;
  onOpenDetails: () => void;
}

function FeaturedCard({ project, index, onOpenDetails }: CardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.85,
        delay: index * 0.08,
        ease: easeOut,
      }}
      className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-stretch rounded-3xl border border-charcoal/[0.08] bg-cream p-5 sm:p-6 lg:p-8"
    >
      {/* Preview — 60% on desktop */}
      <div className="lg:col-span-3 lg:order-1">
        <BrowserPreview
          liveUrl={project.liveUrl}
          displayUrl={project.displayUrl}
          name={project.name}
          mobilePreview={project.mobilePreview}
        />
      </div>

      {/* Details — 40% on desktop */}
      <div className="lg:col-span-2 lg:order-2 flex flex-col">
        <span className="text-[11px] tracking-[0.18em] text-accent uppercase">
          {project.tag}
        </span>
        <h3 className="mt-3 text-4xl lg:text-5xl tracking-[-0.025em] text-charcoal leading-[1.05]">
          <span className="font-serif italic font-normal">{project.name}</span>
        </h3>
        <p className="mt-5 text-warmGray text-[15.5px] leading-relaxed">
          {project.shortDesc}
        </p>

        {/* Mini features (card-level) */}
        <ul className="mt-5 flex flex-wrap gap-x-3.5 gap-y-2">
          {project.cardFeatures.map((f) => {
            const Icon = f.Icon;
            return (
              <li
                key={f.label}
                className="inline-flex items-center gap-1.5 text-xs text-charcoal/75"
              >
                <Icon
                  className="size-3.5 text-accent"
                  strokeWidth={1.8}
                  aria-hidden
                />
                {f.label}
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "primary", size: "md" }))}
          >
            Visit live site
            <ArrowUpRight className="size-4" strokeWidth={2} />
          </a>
          <button
            type="button"
            onClick={onOpenDetails}
            className={cn(buttonVariants({ variant: "outline", size: "md" }))}
          >
            See details
          </button>
        </div>

        <p className="mt-5 text-xs text-warmGray/80">
          {project.tier} Tier · {project.price} · {project.buildTime}
        </p>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Compact project card — used for non-featured projects in the grid below.
   Currently unused (no non-featured projects yet) but ready for the moment
   a second project lands.
   ───────────────────────────────────────────────────────────────────── */

function CompactCard({ project, index, onOpenDetails }: CardProps) {
  return (
    <motion.button
      type="button"
      onClick={onOpenDetails}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: easeOut }}
      className="group text-left rounded-2xl border border-charcoal/[0.08] bg-cream p-5 hover:border-charcoal/25 hover:-translate-y-1 hover:shadow-[0_4px_24px_-12px_rgba(26,26,26,0.18)] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
    >
      <BrowserPreview
        liveUrl={project.liveUrl}
        displayUrl={project.displayUrl}
        name={project.name}
        mobilePreview={project.mobilePreview}
        className="pointer-events-none"
      />
      <div className="mt-4">
        <span className="text-[10px] tracking-[0.18em] text-accent uppercase">
          {project.tag}
        </span>
        <h3 className="mt-1.5 text-xl tracking-tight text-charcoal">
          {project.name}
        </h3>
        <span className="mt-3 inline-flex items-center gap-1 text-sm text-warmGray group-hover:text-accent transition-colors">
          See details
          <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </motion.button>
  );
}
