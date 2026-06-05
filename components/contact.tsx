"use client";

/* ─────────────────────────────────────────────────────────────────────────
   CONTACT FORM — SETUP INSTRUCTIONS (Formspree)

   This form POSTs to Formspree, which forwards every submission to my
   inbox. Set it up once and forget about it.

     1. Go to https://formspree.io and sign up using
        hello@daycraftstudio.com.
     2. Click "+ New form" → name it "Daycraft Studio Contact".
     3. Copy the form endpoint URL — it looks like:
          https://formspree.io/f/xxxxxxxx
     4. Replace the FORMSPREE_ENDPOINT constant below with your real
        endpoint URL.
     5. Verify the email Formspree sends to confirm ownership.
     6. Done — submissions will arrive at hello@daycraftstudio.com
        within seconds of being sent.

   Anti-spam: there's an invisible honeypot field named "website". Bots
   tend to fill every field they see; if "website" comes back filled,
   we silently drop the submission without bothering Formspree.

   To change contact methods (Email / Phone / Instagram), edit
   `lib/contact-methods.ts` — that file has its own setup notes.
   ───────────────────────────────────────────────────────────────────── */

import { useState } from "react";
import { m } from "framer-motion";
import { Loader2 } from "lucide-react";
import { LogoMark } from "./logo";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select } from "./ui/select";
import { Label } from "./ui/label";
import { SectionHeading } from "./ui/section-heading";
import { contactMethods, type ContactMethod } from "@/lib/contact-methods";
import { cn } from "@/lib/utils";

// Real Formspree endpoint — submissions arrive at hello@daycraftstudio.com.
// If you ever rotate the endpoint, see the setup steps at the top of this file.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xykvwqlv";

const easeOut = [0.22, 1, 0.36, 1] as const;

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot — if the invisible field is filled, silently drop.
    if (formData.get("website")) {
      setState("success"); // pretend it worked so the bot moves on
      return;
    }

    // Min message length — match the inline hint shown under the textarea.
    const message = String(formData.get("message") ?? "").trim();
    if (message.length < 10) {
      setState("error");
      return;
    }

    setState("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setState("success");
      form.reset();
    } catch (err) {
      // Don't swallow — log to console for debugging, but show the user a
      // calm fallback that always works (email).
      console.error("Contact form submission failed:", err);
      setState("error");
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build{" "}
              <span className="font-serif italic font-normal text-accent">
                something
              </span>
              .
            </>
          }
          description="Tell me about your project and I'll get back to you within 24 hours."
          center
        />

        {/* Soft pointer for anyone hesitating before reaching out. */}
        <p className="mt-5 text-center text-sm text-warmGray">
          Not sure how this works?{" "}
          <a
            href="/how-it-works"
            className="text-charcoal hover:text-accentDeep transition-colors underline underline-offset-4 decoration-charcoal/25 hover:decoration-accent"
          >
            Here&apos;s the full step-by-step →
          </a>
        </p>

        <div className="mt-12 grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* ── Form ─────────────────────────────────────────────────────── */}
          <m.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="lg:col-span-3"
          >
            {state === "success" ? (
              <SuccessState onReset={() => setState("idle")} />
            ) : (
              <form
                action={FORMSPREE_ENDPOINT}
                method="POST"
                onSubmit={handleSubmit}
                noValidate
                className="grid sm:grid-cols-2 gap-x-5 gap-y-4"
                aria-busy={state === "submitting"}
              >
                {/* Honeypot — invisible to humans, irresistible to bots. */}
                <div
                  aria-hidden="true"
                  className="hidden"
                  // tabindex/autocomplete intentionally weird so screen readers
                  // and keyboard users never land here.
                >
                  <label htmlFor="website">
                    Leave this empty if you&apos;re human
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="sm:col-span-1">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="sm:col-span-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jane@business.com"
                  />
                </div>
                <div className="sm:col-span-1">
                  <Label htmlFor="business">
                    Business name{" "}
                    <span className="text-warmGray/60">(optional)</span>
                  </Label>
                  <Input
                    id="business"
                    name="business"
                    autoComplete="organization"
                    placeholder="Sunrise Cafe"
                  />
                </div>
                <div className="sm:col-span-1">
                  <Label htmlFor="kind">What kind of site?</Label>
                  <Select id="kind" name="kind" defaultValue="">
                    <option value="" disabled>
                      Pick one
                    </option>
                    <option value="starter">Starter — One-Page</option>
                    <option value="standard">Standard — Small Business</option>
                    <option value="custom">Custom Build</option>
                    <option value="not-sure">Not sure yet</option>
                  </Select>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="message">Tell me about your project</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    rows={5}
                    placeholder="A few sentences about your business and what you're looking for."
                  />
                </div>

                {state === "error" && (
                  <div
                    role="alert"
                    className="sm:col-span-2 text-sm text-[#A6453A] bg-[#FBEDE9] border border-[#E5BBB1] rounded-lg px-4 py-3"
                  >
                    Something went wrong. Please email{" "}
                    <a
                      href="mailto:hello@daycraftstudio.com"
                      className="underline underline-offset-2 hover:text-charcoal"
                    >
                      hello@daycraftstudio.com
                    </a>{" "}
                    directly — I&apos;ll reply within 24 hours.
                  </div>
                )}

                <div className="sm:col-span-2 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                  <p className="text-xs text-warmGray/80">
                    No spam. No newsletters. Just a reply.
                  </p>
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={state === "submitting"}
                    className="min-w-[120px]"
                  >
                    {state === "submitting" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" aria-hidden />
                        Sending
                      </>
                    ) : (
                      "Send"
                    )}
                  </Button>
                </div>
              </form>
            )}
          </m.div>

          {/* ── Alternative contact methods ─────────────────────────────── */}
          <m.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
            className="lg:col-span-2"
          >
            <h3 className="text-[11px] tracking-[0.18em] text-warmGray uppercase">
              Or reach me directly
            </h3>
            <ul className="mt-4 space-y-2.5">
              {contactMethods.map((m) => (
                <li key={m.id}>
                  <ContactMethodRow method={m} />
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-warmGray/75 leading-relaxed">
              Email is the fastest way to reach me. Replies within 24 hours.
            </p>
          </m.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Single contact-method row. Every method is a real link now — always
   renders as an <a>. Hover lifts, focus shows the accent ring.
   ───────────────────────────────────────────────────────────────────── */

function ContactMethodRow({ method }: { method: ContactMethod }) {
  const { label, display, href, Icon, openInNewTab } = method;

  return (
    <a
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      aria-label={`${label}: ${display}`}
      className={cn(
        "group flex items-center gap-3 w-full text-left",
        "rounded-xl border border-charcoal/[0.08] bg-cream",
        "px-4 py-3.5",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-0.5 hover:border-charcoal/20",
        "hover:shadow-[0_4px_20px_-12px_rgba(26,26,26,0.18)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
      )}
    >
      <span className="shrink-0 inline-flex size-9 items-center justify-center rounded-lg bg-accent/12 text-accent">
        <Icon className="size-4" aria-hidden />
      </span>
      <span className="flex-1 min-w-0">
        <span className="block text-[11px] tracking-[0.14em] text-warmGray uppercase">
          {label}
        </span>
        <span className="block text-sm truncate text-charcoal group-hover:text-accentDeep transition-colors">
          {display}
        </span>
      </span>
    </a>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Success state — replaces the form after a successful submission.
   ───────────────────────────────────────────────────────────────────── */

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <m.div
      key="success"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeOut }}
      className="rounded-2xl border border-charcoal/10 bg-cream p-10 sm:p-14 text-center"
    >
      <div className="mx-auto flex items-center justify-center size-14 rounded-full bg-accent/10">
        <LogoMark className="h-6 w-auto" />
      </div>
      <h3 className="mt-6 text-3xl font-serif italic text-charcoal">
        Thanks for reaching out.
      </h3>
      <p className="mt-3 text-warmGray text-[15px] leading-relaxed">
        I&apos;ll reply within 24 hours — usually a lot sooner.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-8 text-sm text-warmGray hover:text-accentDeep underline underline-offset-4 decoration-charcoal/15 hover:decoration-accent transition-colors"
      >
        Send another message
      </button>
    </m.div>
  );
}
