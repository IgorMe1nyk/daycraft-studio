"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { buttonVariants } from "./ui/button";
import { type Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

interface Props {
  /** Project to show, or null to hide. */
  project: Project | null;
  /** Called when the user dismisses the modal (X, Esc, or backdrop click). */
  onClose: () => void;
}

/**
 * CaseStudyModal — opens when a project's "See Details" button is clicked.
 * Powered by radix-ui/react-dialog under the hood: focus trap, Escape to
 * close, scroll lock, and `return focus to trigger` come for free.
 *
 * We keep the previously-shown project in local state during the exit
 * animation so the content doesn't pop blank as the modal fades out.
 */
export function CaseStudyModal({ project, onClose }: Props) {
  const [shown, setShown] = useState<Project | null>(project);

  // Whenever a new project comes in, remember it. We only swap the *shown*
  // value when opening; on close we keep the previous one around until the
  // exit animation finishes.
  useEffect(() => {
    if (project) setShown(project);
  }, [project]);

  const open = project !== null;

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent>
        {shown && (
          <article className="p-7 sm:p-10 pt-9 sm:pt-11">
            {/* ── Tag pills ───────────────────────────────────────────── */}
            <div className="flex flex-wrap items-center gap-1.5 mb-5">
              {tagPillsFor(shown).map((label) => (
                <span
                  key={label}
                  className="text-[10px] tracking-[0.18em] uppercase bg-accent/10 text-accent px-2.5 py-1 rounded-full"
                >
                  {label}
                </span>
              ))}
            </div>

            <DialogTitle>
              <span className="font-serif italic font-normal">
                {shown.name}
              </span>
            </DialogTitle>

            <DialogDescription className="mt-4 text-[15.5px]">
              {shown.longDesc}
            </DialogDescription>

            {/* ── Features grid ───────────────────────────────────────── */}
            <h3 className="mt-9 text-[11px] tracking-[0.18em] text-warmGray uppercase">
              Features built
            </h3>
            <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {shown.features.map((f) => {
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

            {/* ── The Approach ────────────────────────────────────────── */}
            <h3 className="mt-10 text-[11px] tracking-[0.18em] text-warmGray uppercase">
              The approach
            </h3>
            <div className="mt-4 space-y-4 text-warmGray leading-relaxed text-[15px]">
              {shown.approach.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* ── Tech ────────────────────────────────────────────────── */}
            <h3 className="mt-10 text-[11px] tracking-[0.18em] text-warmGray uppercase">
              Tech used
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {shown.tech.map((t) => (
                <li
                  key={t}
                  className="text-xs text-charcoal/80 bg-paleBlue/40 border border-charcoal/[0.06] px-2.5 py-1 rounded-full"
                >
                  {t}
                </li>
              ))}
            </ul>

            {/* ── CTA ─────────────────────────────────────────────────── */}
            <div className="mt-10 pt-8 border-t border-charcoal/10 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-warmGray/85">
                {shown.tier} Tier · {shown.price} · {shown.buildTime}
              </p>
              <a
                href={shown.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "primary", size: "md" }),
                )}
              >
                Visit the live site
                <ArrowUpRight className="size-4" strokeWidth={2} />
              </a>
            </div>
          </article>
        )}
      </DialogContent>
    </Dialog>
  );
}

/**
 * Build the short tag pills shown at the top of the modal.
 * Always ends with the tier pill (e.g. "Starter Tier").
 */
function tagPillsFor(project: Project): string[] {
  // Split the project's tag string ("Wedding · RSVP Site") on the divider
  // and take meaningful tokens. Keep them concise — the modal does the
  // heavy lifting in the description.
  const tagTokens = project.tag
    .split("·")
    .map((s) => s.trim())
    .filter(Boolean);

  // De-dupe & truncate. The last pill is always the tier.
  const tokens = Array.from(
    new Set([...tagTokens, `${project.tier} Tier`]),
  );
  return tokens;
}
