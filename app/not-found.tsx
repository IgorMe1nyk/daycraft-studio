import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/logo";

export const metadata: Metadata = {
  title: "Page not found · Daybreak Studio",
};

export default function NotFound() {
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
        {/* Horizon mark — sun below the line, like a page that hasn't risen yet */}
        <div
          aria-hidden
          className="relative w-28 h-16 mb-8"
        >
          <span className="absolute inset-x-0 top-1/2 h-px bg-charcoal/20" />
          <span className="absolute left-1/2 -translate-x-1/2 top-[calc(50%+10px)] size-4 rounded-full bg-accent/70 animate-sun-pulse" />
        </div>

        <span className="text-[11px] tracking-[0.22em] text-accent uppercase">
          404
        </span>
        <h1 className="mt-4 font-display font-medium text-h1 text-charcoal max-w-2xl">
          The sun hasn&apos;t risen on this page yet.
        </h1>
        <p className="mt-5 text-warmGray text-body-lg leading-relaxed max-w-md">
          The page you&apos;re after doesn&apos;t exist — or hasn&apos;t been
          built yet. Let&apos;s get you back to something real.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm">
          <Link href="/" className="text-charcoal hover:text-accent transition-colors font-medium">
            Home
          </Link>
          <Link href="/work" className="text-warmGray hover:text-accent transition-colors">
            Work
          </Link>
          <Link href="/#services" className="text-warmGray hover:text-accent transition-colors">
            Services
          </Link>
          <Link href="/#contact" className="text-warmGray hover:text-accent transition-colors">
            Contact
          </Link>
        </div>
      </main>
    </div>
  );
}
