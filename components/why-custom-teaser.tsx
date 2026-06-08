import Link from "next/link";
import { KeyRound, Fingerprint, Zap, UserRound, ArrowRight } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────────────────
   WhyCustomTeaser — a short homepage band (between Services and Work) that
   catches the visitor already weighing builder-vs-custom and sends them to
   the full /why-custom page. Readable in ~5 seconds: no chart, no slider, no
   stat grid. Server component (zero client JS) so it stays off the homepage's
   hydration cost. Honest, calm, fair to builders.
   ───────────────────────────────────────────────────────────────────── */

const CHIPS = [
  { Icon: KeyRound, label: "You own it" },
  { Icon: Fingerprint, label: "One of a kind" },
  { Icon: Zap, label: "Faster & found on Google" },
  { Icon: UserRound, label: "A real person, not a help desk" },
];

export function WhyCustomTeaser() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <h2 className="font-display font-medium text-h2 text-charcoal text-balance">
          Thinking you could just use a $30/month builder?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-warmGray text-body-lg leading-relaxed">
          Fair question — and honestly, builders are fine for some people. The
          short version: a builder rents you a template forever. I build you
          something that&apos;s actually yours — faster, one of a kind, and
          cheaper over time.
        </p>

        <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
          {CHIPS.map(({ Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-cream px-3.5 py-1.5 text-sm text-charcoal"
            >
              <Icon className="size-4 text-accent shrink-0" aria-hidden />
              {label}
            </li>
          ))}
        </ul>

        <div className="mt-9">
          <Link
            href="/why-custom"
            className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
          >
            See the honest comparison
            <ArrowRight className="size-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
