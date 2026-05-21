import { Logo } from "./logo";

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
            href="#services"
            className="text-warmGray hover:text-charcoal transition-colors"
          >
            Services
          </a>
          <a
            href="#work"
            className="text-warmGray hover:text-charcoal transition-colors"
          >
            Work
          </a>
          <a
            href="#process"
            className="text-warmGray hover:text-charcoal transition-colors"
          >
            Process
          </a>
          <a
            href="#about"
            className="text-warmGray hover:text-charcoal transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-warmGray hover:text-charcoal transition-colors"
          >
            Contact
          </a>
          {/* TODO: Replace with your real email */}
          <a
            href="mailto:hello@daybreakstudio.com"
            className="text-warmGray hover:text-accent transition-colors"
          >
            hello@daybreakstudio.com
          </a>
          {/* TODO: Replace with your real Instagram handle */}
          <a
            href="https://instagram.com/daybreakstudio"
            target="_blank"
            rel="noreferrer"
            className="text-warmGray hover:text-accent transition-colors"
          >
            @daybreakstudio
          </a>
        </div>
      </div>
    </footer>
  );
}
