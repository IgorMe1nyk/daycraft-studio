"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────────────────
   LazySection — defers a below-the-fold homepage section so its DOM/JS isn't
   built or hydrated on first paint (cuts FCP/Style-&-Layout/TBT). The section
   mounts as the reader scrolls within ~1200px of it, so by the time it's on
   screen it's fully rendered — visually identical.

   The wrapper carries the section's `id` (and scroll-margin), so in-page
   anchors like #work / #contact always resolve even before the content
   mounts; jumping to one scrolls here and triggers the mount. The wrapped
   component must NOT also set that id (avoid duplicates).

   A reserved min-height keeps layout stable; because the mount happens well
   before the section enters the viewport, any placeholder→content delta
   resolves off-screen (no visible shift).
   ───────────────────────────────────────────────────────────────────── */

export function LazySection({
  id,
  minHeight,
  children,
}: {
  id: string;
  /** Approximate rendered height, reserved until the content mounts. */
  minHeight: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShow(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "1200px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className={cn("scroll-mt-24")}
      style={!show ? { minHeight } : undefined}
    >
      {show ? children : null}
    </div>
  );
}
