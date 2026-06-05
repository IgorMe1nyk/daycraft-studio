import { Instagram, Phone } from "lucide-react";
import { Logo } from "./logo";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/[0.08] bg-cream">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-warmGray max-w-sm leading-relaxed">
            © 2026 Daycraft Studio.
            <br />
            Built with care in North Jersey
            <span className="text-warmGray/60"> · </span>
            <span className="italic font-serif text-warmGray">
              Crafted before the sun comes up.
            </span>
          </p>
        </div>

        <div className="flex flex-wrap md:justify-end gap-x-7 gap-y-3 text-sm">
          <a
            href="/#services"
            className="text-warmGray hover:text-charcoal transition-colors"
          >
            Services
          </a>
          <a
            href="/#work"
            className="text-warmGray hover:text-charcoal transition-colors"
          >
            Work
          </a>
          <a
            href="/#process"
            className="text-warmGray hover:text-charcoal transition-colors"
          >
            Process
          </a>
          <a
            href="/#about"
            className="text-warmGray hover:text-charcoal transition-colors"
          >
            About
          </a>
          <a
            href="/#contact"
            className="text-warmGray hover:text-charcoal transition-colors"
          >
            Contact
          </a>
          <a
            href="/how-it-works"
            className="text-warmGray hover:text-charcoal transition-colors"
          >
            How it works
          </a>
          <a
            href="mailto:hello@daycraftstudio.com"
            className="text-warmGray hover:text-accent transition-colors"
          >
            hello@daycraftstudio.com
          </a>
          <a
            href="tel:+12017710092"
            className="inline-flex items-center gap-1.5 text-warmGray hover:text-accent transition-colors"
          >
            <Phone className="size-3.5" aria-hidden />
            (201) 771-0092
          </a>
          {/* Instagram handle: daycraft.studio — update here if the
              username changes (also update lib/contact-methods.ts). */}
          <a
            href="https://instagram.com/daycraft.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-warmGray hover:text-accent transition-colors"
          >
            <Instagram className="size-3.5" aria-hidden />
            @daycraft.studio
          </a>
        </div>
      </div>

      {/* Solutions — segment landing pages (kept out of the main nav). */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <nav
          aria-label="Solutions"
          className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm text-warmGray"
        >
          <a
            href="/event-sites"
            className="hover:text-accent transition-colors"
          >
            Event websites
          </a>
          <a
            href="/personal-brand"
            className="hover:text-accent transition-colors"
          >
            Personal brand
          </a>
          <a
            href="/business-sites"
            className="hover:text-accent transition-colors"
          >
            Local business
          </a>
        </nav>
      </div>

      {/* Legal / compliance bar — site-wide. */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8 pb-10">
        <div className="pt-6 border-t border-charcoal/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <nav
            aria-label="Legal"
            className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-warmGray"
          >
            <a href="/privacy" className="hover:text-accent transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-accent transition-colors">
              Terms
            </a>
            <a
              href="/accessibility"
              className="hover:text-accent transition-colors"
            >
              Accessibility
            </a>
          </nav>
          <p className="text-xs text-warmGray">
            Essential cookies only · No tracking
          </p>
        </div>
      </div>
    </footer>
  );
}
