"use client";

import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  /** Real URL the iframe loads and the click-through opens. */
  liveUrl: string;
  /** Pretty URL shown in the fake address bar (can be the planned domain). */
  displayUrl: string;
  /** Used in aria-labels and the mobile mockup. */
  name: string;
  /** Optional path to a real mobile screenshot. */
  mobilePreview?: string;
  className?: string;
}

/**
 * BrowserPreview — a refined Mac-style window frame wrapping a live iframe of
 * the project on desktop, and a stylized mockup on mobile (where iframes are
 * too small to be useful). The whole frame is a single anchor that opens the
 * live site in a new tab. The iframe itself is pointer-events:none, so the
 * user can never accidentally interact with it.
 */
export function BrowserPreview({
  liveUrl,
  displayUrl,
  name,
  mobilePreview,
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
        <div className="flex gap-1.5 shrink-0">
          <span className="size-[10px] rounded-full bg-[#FF5F57]" />
          <span className="size-[10px] rounded-full bg-[#FEBC2E]" />
          <span className="size-[10px] rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 mx-1 px-3 py-1 rounded-md bg-paleBlue/45 text-center min-w-0">
          <span className="block text-[11px] text-charcoal/70 font-mono truncate tracking-tight">
            {displayUrl}
          </span>
        </div>
        {/* Spacer to balance the traffic-light dots visually */}
        <div className="size-[10px] shrink-0" aria-hidden />
      </div>

      {/* ── Preview viewport ──────────────────────────────────────────── */}
      <div className="relative aspect-[16/10] bg-paleBlue/20 overflow-hidden">
        {/* Desktop: scaled iframe of the real site.
            scale-50 with w/h 200% renders the page at "desktop viewport" size
            then visually halves it, so the preview shows the desktop layout. */}
        <iframe
          src={liveUrl}
          title={`${name} live preview`}
          loading="lazy"
          sandbox="allow-same-origin allow-scripts allow-popups"
          tabIndex={-1}
          aria-hidden="true"
          className="hidden md:block absolute top-0 left-0 origin-top-left scale-50 w-[200%] h-[200%] pointer-events-none select-none border-0 bg-cream"
        />

        {/* Mobile: stylized mockup. The iframe scale trick can't render a
            useful preview at phone widths, so we show a tasteful placeholder.
            TODO: Drop a real screenshot at /public/projects/<id>-mobile-preview.png
            and swap this block for an <Image src={mobilePreview} ... fill /> */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-br from-[#F4E8E3] via-[#EBE2D2] to-[#C9D5C7] flex flex-col items-center justify-center">
          <span className="font-serif italic text-2xl text-charcoal/75">
            {name}
          </span>
          <span className="mt-2 text-[10px] tracking-[0.22em] uppercase text-charcoal/45">
            Tap to view live
          </span>
          {/* Tiny no-op reference so the prop isn't flagged unused in TS */}
          <span aria-hidden className="sr-only">
            {mobilePreview}
          </span>
        </div>

        {/* Hover hint pill — only on devices with hover, and only after the
            iframe has rendered something. Slight gradient at the bottom for
            legibility against any color the iframe happens to show. */}
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
