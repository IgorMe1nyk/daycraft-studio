"use client";

import { useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

// Anchor hrefs use the `/#section` form so they work from any page (when on
// /how-it-works, clicking "Services" should go home and scroll). Browsers
// treat `/#x` on the home page as a same-page hash change → smooth scroll.
const links = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-out",
        scrolled
          ? "bg-cream/75 backdrop-blur-md border-b border-charcoal/[0.06]"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="/"
          aria-label="Daybreak Studio — home"
          className="-m-2 p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
        >
          <Logo />
        </a>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-9"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-warmGray hover:text-charcoal transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="text-sm text-charcoal hover:text-accent transition-colors"
          >
            Start a project →
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden -m-2 p-2 text-charcoal rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu className="size-5" />
        </button>
      </div>

      {/* Mobile slide-in panel */}
      <AnimatePresence>
        {open && (
          <>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-charcoal/15 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <m.div
              key="mobile-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                ease: [0.22, 1, 0.36, 1],
                duration: 0.4,
              }}
              className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-cream z-50 md:hidden p-6 border-l border-charcoal/[0.06] flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
            >
              <div className="flex items-center justify-between mb-12">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="-m-2 p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                >
                  <X className="size-5" />
                </button>
              </div>
              <nav aria-label="Mobile" className="flex flex-col">
                {links.map((l, i) => (
                  <m.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.04,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="py-3 text-2xl tracking-tight text-charcoal hover:text-accent transition-colors border-b border-charcoal/[0.06]"
                  >
                    {l.label}
                  </m.a>
                ))}
              </nav>
              <div className="mt-auto pt-8 text-xs text-warmGray">
                Based in North Jersey
                <br />
                Available for new projects
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
