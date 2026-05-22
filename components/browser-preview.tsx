"use client";

import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  /** Real URL the iframe loads and the click-through opens. */
  liveUrl: string;
  /** Pretty URL shown in the fake address bar (can be the planned domain). */
  displayUrl: string;
  /** Used in the aria-label so screen readers identify the link clearly. */
  name: string;
  className?: string;
}

/**
 * BrowserPreview — a refined Mac-style window frame wrapping a scaled iframe
 * of the project. The whole frame is a single anchor that opens the live site
 * in a new tab.
 *
 * Visible content is intentionally minimal:
 *   • Traffic-light dots + the displayUrl text in the address bar.
 *   • The scaled iframe (works on every viewport — see notes below).
 *   • A "View live ↗" pill: always visible on touch devices, fades in on
 *     hover on devices with a real pointer.
 *
 * The iframe is pointer-events:none, tabIndex=-1, aria-hidden so visitors
 * can never accidentally interact with it. Click anywhere on the frame to
 * open the real site in a new tab.
 *
 * Notes on mobile:
 *   We render the same scaled iframe on every viewport. The wedding site is
 *   responsive, so inside a ~320px parent the iframe sees a ~640px viewport
 *   (because of the 2× width + scale-50 trick) and renders its tablet/mobile
 *   layout — which is exactly what we want a phone visitor to see.
 *   Iframe has loading="lazy" so it only fetches when scrolled into view.
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
        {/* Scaled iframe — origin-top-left + scale-50 + w/h 200% renders the
            page at a desktop-ish viewport size and visually shrinks it to fit
            the preview frame. Works on every breakpoint. */}
        <iframe
          src={liveUrl}
          title={`${name} live preview`}
          loading="lazy"
          sandbox="allow-same-origin allow-scripts allow-popups"
          tabIndex={-1}
          aria-hidden="true"
          className="absolute top-0 left-0 origin-top-left scale-50 w-[200%] h-[200%] pointer-events-none select-none border-0 bg-cream"
        />

        {/* "View live" affordance.
            • On touch devices (no hover): always visible — visitors need a
              clear cue that the frame is tappable.
            • On hover-capable devices: a soft dark gradient + the pill fade
              in only while hovering, so the preview content stays clean. */}
        <div
          className={cn(
            "absolute inset-0 flex items-end justify-end p-3 sm:p-5",
            "bg-gradient-to-t from-charcoal/30 via-transparent to-transparent",
            "transition-opacity duration-300",
            // Default: visible (covers touch / no-hover devices).
            "opacity-100",
            // On real-hover devices: hide unless hovering the frame.
            "[@media(hover:hover)]:opacity-0",
            "[@media(hover:hover)]:group-hover:opacity-100",
          )}
        >
          <span className="inline-flex items-center gap-1.5 bg-cream text-charcoal px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-medium shadow-[0_4px_14px_-2px_rgba(0,0,0,0.25)]">
            View live
            <ArrowUpRight className="size-3" strokeWidth={2} />
          </span>
        </div>
      </div>
    </a>
  );
}
