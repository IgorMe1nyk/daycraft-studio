"use client";

import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  /** Real URL the iframe loads and the click-through opens. */
  liveUrl: string;
  /** Pretty URL shown in the fake address bar (can be the planned domain). */
  displayUrl: string;
  /** Used in aria-labels and the mobile mockup heading. */
  name: string;
  className?: string;
}

/**
 * BrowserPreview — a refined Mac-style window frame wrapping a live iframe
 * of the project on desktop, and a stylized soft-blue placeholder on mobile
 * (where iframes are too small to be useful). The whole frame is a single
 * anchor that opens the live site in a new tab.
 *
 * Visible content is intentionally minimal:
 *   • Traffic-light dots + the displayUrl text in the address bar.
 *   • Either the iframe (desktop) or the mobile placeholder.
 *   • A "View live ↗" pill that fades in on hover (desktop only).
 *
 * The iframe is pointer-events:none, tabIndex=-1, aria-hidden so visitors
 * can never accidentally interact with it. Click anywhere on the frame to
 * open the real site.
 *
 * TODO: When a real mobile screenshot exists at /public/projects/<id>.png,
 * swap the placeholder gradient div below for an <Image fill /> using that
 * path. Until then this stays a tasteful brand-coloured placeholder.
 */
export function BrowserPreview({
  liveUrl,
  displayUrl,
  name,
  className,
}: Props) {
  return (
    <a
      href={liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open the live ${name} website in a new tab`}
      className={cn(
        "group relative block rounded-xl overflow-hidden",
        "border border-charcoal/10 bg-cream",
        "shadow-[0_12px_36px_-16px_rgba(26,26,26,0.20)]",
        "hover:shadow-[0_20px_56px_-16px_rgba(26,26,26,0.30)]",
        "hover:-translate-y-0.5 transition-all duration-500 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
        className,
      )}
    >
      {/* ── Window chrome ─────────────────────────────────────────────── */}
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
        {/* Spacer to visually balance the traffic-light dots */}
        <div className="size-[10px] shrink-0" aria-hidden />
      </div>

      {/* ── Preview viewport ──────────────────────────────────────────── */}
      <div className="relative aspect-[16/10] bg-paleBlue/20 overflow-hidden">
        {/* DESKTOP: scaled iframe of the real site (md and up).
            origin-top-left + scale-50 + w/h 200% renders the page at desktop
            viewport size and shrinks it visually to fit the preview. */}
        <iframe
          src={liveUrl}
          title={`${name} live preview`}
          loading="lazy"
          sandbox="allow-same-origin allow-scripts allow-popups"
          tabIndex={-1}
          aria-hidden="true"
          className="hidden md:block absolute top-0 left-0 origin-top-left scale-50 w-[200%] h-[200%] pointer-events-none select-none border-0 bg-cream"
        />

        {/* MOBILE: soft-blue brand-coloured placeholder (below md). Nothing
            else is rendered here — just a quiet gradient and a hint. */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-br from-paleBlue via-paleBlue/80 to-accent/20 flex items-center justify-center">
          <span className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.22em] uppercase text-charcoal/65">
            Tap to view live
            <ArrowUpRight className="size-3" strokeWidth={2} />
          </span>
        </div>

        {/* Hover hint pill — only on devices with hover (desktop). */}
        <div className="hidden md:flex absolute inset-0 items-end justify-end p-5 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="inline-flex items-center gap-1.5 bg-cream text-charcoal px-3.5 py-1.5 rounded-full text-xs font-medium shadow-[0_4px_14px_-2px_rgba(0,0,0,0.25)]">
            View live
            <ArrowUpRight className="size-3" strokeWidth={2} />
          </span>
        </div>
      </div>
    </a>
  );
}
