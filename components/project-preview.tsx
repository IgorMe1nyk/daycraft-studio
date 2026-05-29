import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

/**
 * ProjectPreview — the Mac-style browser frame used on Work cards and at the
 * top of case-study pages. It renders:
 *   • real projects    → a scaled live <iframe> of the actual site
 *   • pitch projects   → a captured screenshot of the live site
 *   • concept projects → a palette-driven mockup hero (no live site)
 *
 * Pure visual — no link wrapper, no pointer handling. The parent decides
 * what wraps it (a Link to the case study, an <a> to the live site, etc.).
 *
 * The mockup sizes its type in container-query units (cqw) so the same
 * composition scales cleanly from a small grid card to a large case-study
 * hero without re-tuning font sizes.
 */
export function ProjectPreview({
  project,
  className,
  priority = false,
}: {
  project: Project;
  className?: string;
  /** Mark the screenshot as LCP-priority (case-study hero only). */
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden border border-charcoal/10 bg-cream",
        "shadow-[0_12px_36px_-16px_rgba(26,26,26,0.20)]",
        className,
      )}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-3 px-3.5 py-3 border-b border-charcoal/[0.06] bg-cream/85 backdrop-blur-sm">
        <div className="flex gap-1.5 shrink-0" aria-hidden>
          <span className="size-[10px] rounded-full bg-[#FF5F57]" />
          <span className="size-[10px] rounded-full bg-[#FEBC2E]" />
          <span className="size-[10px] rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 mx-1 px-3 py-1 rounded-md bg-paleBlue/45 text-center min-w-0">
          <span className="block text-[11px] text-charcoal/70 font-mono truncate tracking-tight">
            {project.displayUrl}
          </span>
        </div>
        <div className="size-[10px] shrink-0" aria-hidden />
      </div>

      {/* Viewport */}
      <div className="relative aspect-[16/10] bg-paleBlue/20 overflow-hidden">
        {project.screenshot ? (
          <Image
            src={project.screenshot.src}
            alt={project.screenshot.alt}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-top"
          />
        ) : project.kind === "real" && project.liveUrl ? (
          <iframe
            src={project.liveUrl}
            title={`${project.name} live preview`}
            loading="lazy"
            sandbox="allow-same-origin allow-scripts allow-popups"
            tabIndex={-1}
            aria-hidden="true"
            className="absolute top-0 left-0 origin-top-left scale-50 w-[200%] h-[200%] pointer-events-none select-none border-0 bg-cream"
          />
        ) : (
          <ConceptMockup project={project} />
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   ConceptMockup — a designed "fake website" hero in the concept's own
   palette. Honest by nature: clearly a design mockup, not a screenshot of a
   real site. Type scales with the container via cqw units.
   ───────────────────────────────────────────────────────────────────── */

function ConceptMockup({ project }: { project: Project }) {
  const p = project.palette;
  const m = project.mockup;

  const containerStyle: CSSProperties = {
    background: p.bg,
    // containerType lets children size in cqw (container width %).
    containerType: "size",
  };

  return (
    <div className="absolute inset-0 flex flex-col" style={containerStyle}>
      {/* Faux nav */}
      <div
        className="flex items-center justify-between"
        style={{ padding: "4cqw 5cqw 0" }}
      >
        <span
          className="font-display"
          style={{
            color: p.ink,
            fontSize: "3.4cqw",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          {project.name}
        </span>
        <div className="flex items-center" style={{ gap: "3.4cqw" }}>
          {m.nav.map((n) => (
            <span
              key={n}
              className="hidden sm:inline"
              style={{ color: p.muted, fontSize: "2.3cqw" }}
            >
              {n}
            </span>
          ))}
          <span
            style={{
              background: p.accent,
              color: p.bg,
              fontSize: "2.3cqw",
              fontWeight: 600,
              padding: "1.4cqw 3cqw",
              borderRadius: "999px",
              whiteSpace: "nowrap",
            }}
          >
            {m.cta}
          </span>
        </div>
      </div>

      {/* Hero */}
      <div
        className="flex-1 flex flex-col justify-center"
        style={{ padding: "0 5cqw" }}
      >
        <span
          style={{
            color: p.accent,
            fontSize: "2.1cqw",
            fontWeight: 600,
            letterSpacing: "0.18em",
          }}
        >
          {m.eyebrow}
        </span>
        <span
          className="font-display"
          style={{
            color: p.ink,
            fontSize: "7.6cqw",
            fontWeight: 500,
            lineHeight: 1.03,
            letterSpacing: "-0.03em",
            marginTop: "2.2cqw",
            maxWidth: "72%",
          }}
        >
          {m.headline}
        </span>
        <span
          style={{
            color: p.muted,
            fontSize: "2.7cqw",
            lineHeight: 1.4,
            marginTop: "2.6cqw",
            maxWidth: "56%",
          }}
        >
          {m.sub}
        </span>
      </div>

      {/* Bottom strip — a gallery/feature row of real licensed stock photos,
          edge-to-edge object-cover. Falls back to faint palette blocks only if
          a concept hasn't supplied images. */}
      <div className="flex" style={{ gap: "2.6cqw", padding: "5cqw" }}>
        {(project.mockupImages ?? [null, null, null]).map((img, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              flex: 1,
              height: "15cqw",
              borderRadius: "2cqw",
              overflow: "hidden",
              background: `${p.ink}14`,
            }}
          >
            {img && (
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 30vw, 220px"
                className="object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
