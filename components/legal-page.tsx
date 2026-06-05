import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────
   Shared layout + typographic helpers for the legal/compliance pages
   (/privacy, /terms, /accessibility). Server Component — pure markup, no
   client JS, so these pages are fast and fully crawlable.

   Styling follows DESIGN.md: cream page, charcoal body, accent eyebrow,
   serif/display headings, generous whitespace, comfortable line length.
   ───────────────────────────────────────────────────────────────────── */

export function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  /** Effective date string — placeholder until Igor sets it on publish. */
  updated: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <article className="pt-28 pb-24 lg:pt-32 lg:pb-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-1.5 text-sm text-warmGray hover:text-accent transition-colors"
        >
          <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
          Home
        </Link>

        <span className="mt-8 block text-[11px] tracking-[0.18em] text-accent uppercase">
          {eyebrow}
        </span>
        <h1 className="mt-4 font-display font-medium text-h1 text-charcoal">
          {title}
        </h1>
        <p className="mt-5 text-warmGray text-body-lg leading-relaxed">{intro}</p>

        <p className="mt-4 text-[13px] text-warmGray/80">
          Effective date: {updated}
        </p>

        {/* Honest disclaimer — these are starter templates, not legal advice. */}
        <p className="mt-5 text-[13px] leading-relaxed text-warmGray/80 italic border-l-2 border-accent/30 pl-4">
          This page is a plain-English starter template provided for
          transparency. It is not legal advice and has not been reviewed by an
          attorney. Have it reviewed by a qualified lawyer before relying on it.
        </p>

        <div className="mt-14 space-y-12">{children}</div>

        <p className="mt-16 pt-8 border-t border-charcoal/[0.08] text-sm text-warmGray leading-relaxed">
          Questions about this page? Email{" "}
          <a
            href="mailto:hello@daycraftstudio.com"
            className="text-charcoal hover:text-accent underline underline-offset-4 decoration-charcoal/25 hover:decoration-accent transition-colors"
          >
            hello@daycraftstudio.com
          </a>
          .
        </p>
      </div>
    </article>
  );
}

/* A titled section with a consistent heading + body rhythm. */
export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display font-medium text-h2 text-charcoal">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

/* Body paragraph. */
export function LegalText({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-warmGray leading-relaxed text-[15px]">{children}</p>
  );
}

/* Bulleted list. */
export function LegalList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2.5 pl-1">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex gap-3 text-warmGray leading-relaxed text-[15px]"
        >
          <span
            aria-hidden
            className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent/60"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
