"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectPreview } from "./project-preview";
import { buttonVariants } from "./ui/button";
import { getProject, type Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

// Maps a tier to the contact form's select value, passed as a query param so
// the contact link arrives pre-contextualised.
const tierParam: Record<Project["tier"], string> = {
  Starter: "starter",
  Standard: "standard",
  Custom: "custom",
};

// Takes a slug (not the project object) so the Server Component page doesn't
// have to serialize the project's Icon *functions* across the client boundary.
// As a client component, we can import the data module directly.
export function CaseStudyView({ slug }: { slug: string }) {
  const project = getProject(slug);
  if (!project) return null;

  const isConcept = project.kind === "concept";

  return (
    <article className="pt-28 pb-24 lg:pt-32 lg:pb-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/work"
          className="group inline-flex items-center gap-1.5 text-sm text-warmGray hover:text-accent transition-colors"
        >
          <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
          Selected work
        </Link>

        {/* Header */}
        <div className="mt-8 max-w-3xl">
          <div className="flex items-center gap-2.5">
            {isConcept && (
              <span className="text-[9px] tracking-[0.18em] uppercase text-warmGray/80 bg-paleBlue/60 border border-charcoal/[0.07] rounded-full px-2 py-0.5">
                Concept
              </span>
            )}
            <span className="text-[11px] tracking-[0.18em] text-accent uppercase">
              {project.tag}
            </span>
          </div>
          <h1 className="mt-4 font-display font-medium text-h1 text-charcoal">
            {project.name}
          </h1>
          <p className="mt-5 text-warmGray text-body-lg leading-relaxed">
            {project.longDesc}
          </p>

          {isConcept && (
            <p className="mt-5 text-[13px] leading-relaxed text-warmGray/80 italic border-l-2 border-accent/30 pl-4">
              This is a concept project — a self-directed design exercise, not a
              commissioned client site. Imagery and copy are placeholders chosen
              to demonstrate the design direction.
            </p>
          )}

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {project.kind === "real" && project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "primary", size: "md" }))}
              >
                Visit live site
                <ArrowUpRight className="size-4" strokeWidth={2} />
              </a>
            ) : null}
            <span className="text-xs text-warmGray/85">
              {project.tier} Tier · {project.price} · {project.buildTime}
            </span>
          </div>
        </div>

        {/* Hero preview */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
          className="mt-12 lg:mt-14"
        >
          <ProjectPreview project={project} />
          <p className="mt-3 text-center text-xs text-warmGray/70">
            Palette: {project.palette.name}
          </p>
        </motion.div>

        {/* Movements */}
        <div className="mt-16 lg:mt-20 max-w-3xl mx-auto space-y-14 lg:space-y-16">
          <Movement label="The brief" paragraphs={project.caseStudy.brief} />
          <Movement label="The approach" paragraphs={project.caseStudy.approach} />
          <Movement label="The build" paragraphs={project.caseStudy.build} />

          {/* Features grid sits between build and result */}
          <Section label="What it includes">
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {project.features.map((f) => {
                const Icon = f.Icon;
                return (
                  <li
                    key={f.label}
                    className="flex items-center gap-2.5 text-sm text-charcoal/85"
                  >
                    <span className="inline-flex size-7 items-center justify-center rounded-md bg-accent/12 text-accent shrink-0">
                      <Icon className="size-3.5" strokeWidth={1.9} />
                    </span>
                    {f.label}
                  </li>
                );
              })}
            </ul>
          </Section>

          <Movement label="The result" paragraphs={project.caseStudy.result} />

          {/* Tech */}
          <Section label="Tech used">
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="text-xs text-charcoal/80 bg-paleBlue/40 border border-charcoal/[0.06] px-2.5 py-1 rounded-full"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mt-20 max-w-3xl mx-auto rounded-2xl border border-charcoal/10 bg-paleBlue/30 p-8 sm:p-10 text-center"
        >
          <h2 className="font-display font-medium text-h2 text-charcoal">
            Want one like this?
          </h2>
          <p className="mt-3 text-warmGray text-[15px] leading-relaxed">
            {isConcept
              ? "This is concept work — but it's exactly the kind of site I build for real businesses. Tell me about yours."
              : "Tell me about your project and I'll get back to you within 24 hours."}
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`/?tier=${tierParam[project.tier]}#contact`}
              className={cn(buttonVariants({ variant: "primary", size: "md" }))}
            >
              Start a project
              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>
            <Link
              href="/work"
              className={cn(buttonVariants({ variant: "outline", size: "md" }))}
            >
              See more work
            </Link>
          </div>
        </motion.div>
      </div>
    </article>
  );
}

/* A titled block whose contents fade up on scroll. */
function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: easeOut }}
    >
      <h2 className="text-[11px] tracking-[0.18em] text-accent uppercase">
        {label}
      </h2>
      <div className="mt-4">{children}</div>
    </motion.section>
  );
}

/* A movement = label + paragraphs. */
function Movement({
  label,
  paragraphs,
}: {
  label: string;
  paragraphs: string[];
}) {
  return (
    <Section label={label}>
      <div className="space-y-4 text-warmGray leading-relaxed text-[16px]">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
