"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────
   LazyIframe — renders a live preview <iframe> only once it's near the
   viewport. A bare `loading="lazy"` iframe can still cost main-thread work on
   first paint; gating the element itself keeps an entire embedded site off the
   homepage's initial load. The placeholder matches the frame's size, so the
   layout is identical (no shift) and the visual result is unchanged once the
   reader scrolls near.
   ───────────────────────────────────────────────────────────────────── */

export function LazyIframe({
  src,
  title,
  className,
}: {
  src: string;
  title: string;
  className?: string;
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
      { rootMargin: "500px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 bg-cream">
      {show && (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          sandbox="allow-same-origin allow-scripts allow-popups"
          tabIndex={-1}
          aria-hidden="true"
          className={className}
        />
      )}
    </div>
  );
}
