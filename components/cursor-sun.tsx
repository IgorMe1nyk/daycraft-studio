"use client";

/**
 * CursorSun — a tiny easter egg. A very soft, blue-tinted glow that lags
 * behind the cursor like a sun catching up to it. Hidden on touch devices
 * (no `hover: hover`) and on small screens. pointer-events:none so it never
 * interferes with the page.
 *
 * If you ever want to tone it down further: drop the opacity in `className`
 * from `opacity-25` to `opacity-15`. To turn it off entirely, remove the
 * `<CursorSun />` import + render from `app/layout.tsx`.
 */

import { useEffect } from "react";
import { m, useMotionValue, useSpring } from "framer-motion";

export default function CursorSun() {
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  // Generous spring lag — the sun trails the cursor, doesn't chase it.
  const springConfig = { stiffness: 70, damping: 20, mass: 0.7 };
  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Only on devices with a real pointer (skip touch).
    if (!window.matchMedia("(hover: hover)").matches) return;

    const onMove = (e: PointerEvent) => {
      // -80 to center the 160px circle on the cursor.
      x.set(e.clientX - 80);
      y.set(e.clientY - 80);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return (
    <m.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="fixed top-0 left-0 size-40 rounded-full pointer-events-none z-[30] mix-blend-multiply opacity-25 hidden md:block"
    >
      <div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(107,140,174,0.55) 0%, transparent 65%)",
        }}
      />
    </m.div>
  );
}
