"use client";

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";

/**
 * App-wide motion setup (Round 4 performance).
 *
 * 1. LazyMotion + `domAnimation` ships only the animation features we use
 *    (~6 KB of feature code) instead of the full `motion` engine (~34 KB).
 *    Every component uses the lightweight `m.*` components, which are tiny
 *    on their own and pull behavior from this provider.
 *
 * 2. MotionConfig `reducedMotion="user"` makes all of it respect the OS
 *    `prefers-reduced-motion` setting (transform/layout animations off,
 *    opacity fades kept) without per-component guards.
 *
 * Pairs with the CSS `@media (prefers-reduced-motion: reduce)` block in
 * globals.css, which handles the non-Framer CSS animations.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
