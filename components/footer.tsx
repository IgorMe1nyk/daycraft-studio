import { Logo } from "./logo";
import { InstagramSoonLink } from "./instagram-soon-link";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/[0.08] bg-cream">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-warmGray max-w-sm leading-relaxed">
            © 2026 Daybreak Studio.
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
            href="mailto:hello@daybreakstudio.studio"
            className="text-warmGray hover:text-accent transition-colors"
          >
            hello@daybreakstudio.studio
          </a>
          {/* Instagram is paused until the @daybreakstudio account exists —
              see components/instagram-soon-link.tsx. */}
          <InstagramSoonLink className="text-warmGray hover:text-accent" />
        </div>
      </div>
    </footer>
  );
}
