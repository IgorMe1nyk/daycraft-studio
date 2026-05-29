"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { WorkCard } from "./work";
import { projects, type ProjectKind } from "@/lib/projects";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

type Filter = "all" | ProjectKind;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "real", label: "Real" },
  { value: "concept", label: "Concept" },
  { value: "pitch", label: "Pitch" },
];

export function WorkIndex() {
  const [filter, setFilter] = useState<Filter>("all");

  const shown = projects.filter((p) =>
    filter === "all" ? true : p.kind === filter,
  );

  return (
    <section className="pt-28 pb-24 lg:pt-32 lg:pb-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <m.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="text-[11px] tracking-[0.18em] text-accent uppercase block"
        >
          Work
        </m.span>
        <m.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: easeOut }}
          className="mt-4 font-display font-medium text-h1 text-charcoal"
        >
          Selected work
        </m.h1>
        <m.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: easeOut }}
          className="mt-4 max-w-2xl text-warmGray text-body-lg leading-relaxed"
        >
          Real projects, pitches, and concept work. Concepts are self-directed
          design exercises — labeled as such, never sold as client work.
        </m.p>

        {/* Filter */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 inline-flex items-center gap-1 rounded-full border border-charcoal/10 bg-cream p-1"
          role="tablist"
          aria-label="Filter work by type"
        >
          {filters.map((f) => {
            const active = filter === f.value;
            return (
              <button
                key={f.value}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f.value)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm transition-colors duration-200",
                  active
                    ? "bg-charcoal text-cream"
                    : "text-warmGray hover:text-charcoal",
                )}
              >
                {f.label}
              </button>
            );
          })}
        </m.div>

        {/* Grid */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 lg:gap-10">
          {shown.map((project, i) => (
            <WorkCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
