"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";

/**
 * Segment-scoped error boundary for individual case studies. Keeps a bad
 * project render from bubbling to the whole app. (A genuinely missing slug is
 * handled by notFound() → not-found.tsx; this catches unexpected runtime
 * errors within a valid case study.)
 */
export default function CaseStudyError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <header className="mx-auto w-full max-w-6xl px-6 lg:px-8 h-16 flex items-center">
        <Link href="/" aria-label="Daycraft Studio — home" className="-m-2 p-2">
          <Logo />
        </Link>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 pb-24">
        <span className="text-[11px] tracking-[0.22em] text-accentDeep uppercase">
          Couldn&apos;t load this project
        </span>
        <h1 className="mt-4 font-display font-medium text-h1 text-charcoal max-w-2xl">
          That case study didn&apos;t open.
        </h1>
        <p className="mt-5 text-warmGray text-body-lg leading-relaxed max-w-md">
          Something went wrong. Try again, or browse the rest of the work.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-charcoal text-cream text-sm font-medium hover:bg-charcoal/90 active:scale-[0.98] transition-all"
          >
            Try again
          </button>
          <Link
            href="/work"
            className="inline-flex items-center justify-center h-11 px-6 rounded-full border border-charcoal/15 text-charcoal text-sm font-medium hover:border-charcoal/30 hover:bg-charcoal/[0.03] transition-all"
          >
            All work
          </Link>
        </div>
      </main>
    </div>
  );
}
