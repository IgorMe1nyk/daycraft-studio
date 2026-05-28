"use client";

import { MotionConfig } from "framer-motion";

/**
 * Wraps the whole app so every Framer Motion component respects the user's
 * `prefers-reduced-motion` OS setting. With `reducedMotion="user"`, transform
 * and layout animations are disabled for those users (opacity fades still
 * play, which is the accessible default) — without having to add a
 * `useReducedMotion()` guard to every component individually.
 *
 * Pairs with the CSS `@media (prefers-reduced-motion: reduce)` block in
 * globals.css, which covers the non-Framer CSS animations (sun-pulse, etc.).
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
