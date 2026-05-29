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
            <span className="italic font-serif text-warmGray/80">
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
    </footer>
  );
}
