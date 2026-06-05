"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./ui/section-heading";
import { ProjectPreview } from "./project-preview";
import { featuredProjects, type Project } from "@/lib/projects";

const easeOut = [0.22, 1, 0.36, 1] as const;

/**
 * Work — homepage portfolio section.
 *
 * Shows every featured project (real + concept) in a 2-up grid. Each card
 * links to its case study at /work/<id>. A "View all work" link points to
 * the full /work index. All data comes from lib/projects.ts.
 */
export default function Work() {
  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Work"
          title="Selected work"
          description="Real projects, pitches, and concept work."
        />

        <div className="mt-14 lg:mt-16 grid md:grid-cols-2 gap-8 lg:gap-10">
          {featuredProjects.map((project, i) => (
            <WorkCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 text-center"
        >
          <Link
            href="/work"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-charcoal hover:text-accentDeep transition-colors"
          >
            View all work
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </m.div>
      </div>
    </section>
  );
}

export function WorkCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isConcept = project.kind === "concept";
  const isPitch = project.kind === "pitch";
  // Concepts and pitches get a labeled pill ("Concept" / "Pitch") + the bare
  // vertical; real projects show the full descriptive tag.
  const label = isConcept || isPitch ? project.vertical : project.tag;

  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: easeOut }}
    >
      <Link
        href={`/work/${project.id}`}
        className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-4 focus-visible:ring-offset-cream rounded-xl"
      >
        <div className="overflow-hidden rounded-xl shadow-[0_12px_36px_-16px_rgba(26,26,26,0.20)] transition-shadow duration-500 group-hover:shadow-[0_22px_56px_-18px_rgba(26,26,26,0.30)]">
          <div className="transition-transform duration-500 ease-out group-hover:scale-[1.02]">
            <ProjectPreview
              project={project}
              className="!shadow-none !border-0 rounded-none"
            />
          </div>
        </div>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              {(isConcept || isPitch) && (
                <span className="text-[9px] tracking-[0.18em] uppercase text-warmGray bg-paleBlue/60 border border-charcoal/[0.07] rounded-full px-2 py-0.5">
                  {isPitch ? "Pitch" : "Concept"}
                </span>
              )}
              <span className="text-[11px] tracking-[0.18em] text-accentDeep uppercase truncate">
                {label}
              </span>
            </div>
            {/* h2 (not h3) so the /work index — which opens with an <h1> and
                no intervening h2 — has no skipped heading levels (a11y). */}
            <h2 className="mt-1.5 text-xl tracking-tight text-charcoal">
              {project.name}
            </h2>
          </div>
          <span className="shrink-0 inline-flex items-center gap-1 text-sm text-warmGray group-hover:text-accentDeep transition-colors">
            View case study
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </m.div>
  );
}
