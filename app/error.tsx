"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";

/**
 * Root error boundary — catches runtime errors anywhere in the page tree and
 * shows a calm, on-brand fallback instead of a white screen. Matches the 404
 * sunrise theme. (Errors in the root layout itself would need global-error.tsx;
 * those are rare and out of scope here.)
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface for debugging; no user tracking.
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <header className="mx-auto w-full max-w-6xl px-6 lg:px-8 h-16 flex items-center">
        <Link
          href="/"
          aria-label="Daybreak Studio — home"
          className="-m-2 p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
        >
          <Logo />
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 pb-24">
        <div aria-hidden className="relative w-28 h-16 mb-8">
          <span className="absolute inset-x-0 top-1/2 h-px bg-charcoal/20" />
          <span className="absolute left-1/2 -translate-x-1/2 top-[calc(50%+10px)] size-4 rounded-full bg-accent/70" />
        </div>

        <span className="text-[11px] tracking-[0.22em] text-accent uppercase">
          Something broke
        </span>
        <h1 className="mt-4 font-display font-medium text-h1 text-charcoal max-w-2xl">
          The sun slipped behind a cloud.
        </h1>
        <p className="mt-5 text-warmGray text-body-lg leading-relaxed max-w-md">
          Something went wrong loading this page. Try again, or head back home —
          everything else is working.
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
            href="/"
            className="inline-flex items-center justify-center h-11 px-6 rounded-full border border-charcoal/15 text-charcoal text-sm font-medium hover:border-charcoal/30 hover:bg-charcoal/[0.03] transition-all"
          >
            Back home
          </Link>
        </div>
      </main>
    </div>
  );
}
