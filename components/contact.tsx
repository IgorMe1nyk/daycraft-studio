"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select } from "./ui/select";
import { Label } from "./ui/label";
import { SectionHeading } from "./ui/section-heading";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    // ------------------------------------------------------------------
    // TODO: Wire this up to a real handler. Three easy options:
    //
    // OPTION A — Formspree (zero backend, fastest):
    //   1. Sign up at https://formspree.io and create a form.
    //   2. On the <form> below, set:
    //        action="https://formspree.io/f/YOUR_FORM_ID"
    //        method="POST"
    //      and remove the onSubmit handler — Formspree handles the rest.
    //
    // OPTION B — Resend + Next.js API route (more control):
    //   1. npm install resend
    //   2. Create app/api/contact/route.ts with a POST handler that uses
    //      Resend (https://resend.com/docs/send-with-nextjs) to email you.
    //   3. Replace this stub with:
    //        const formData = new FormData(e.currentTarget);
    //        const res = await fetch("/api/contact", {
    //          method: "POST",
    //          body: formData,
    //        });
    //        if (!res.ok) throw new Error("Failed");
    //
    // OPTION C — Plain mailto (no backend at all): change <form> to
    //   action="mailto:hello@daybreakstudio.com" method="POST"
    //   encType="text/plain". Trade-off: opens the user's mail client.
    // ------------------------------------------------------------------

    // Stub: pretend we sent it.
    await new Promise((r) => setTimeout(r, 400));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mt-12"
        >
          {submitted ? (
            <div className="rounded-2xl border border-charcoal/10 bg-cream p-12 text-center">
              <div className="text-3xl font-serif italic text-accent">
                Got it.
              </div>
              <p className="mt-3 text-warmGray">
                Thanks — I&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid sm:grid-cols-2 gap-x-5 gap-y-4"
              noValidate
            >
              <div className="sm:col-span-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Jane Doe" />
              </div>
              <div className="sm:col-span-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
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
                  placeholder="Sunrise Cafe"
                />
              </div>
              <div className="sm:col-span-1">
                <Label htmlFor="kind">What kind of site?</Label>
                <Select id="kind" name="kind" defaultValue="" required>
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
                  rows={5}
                  placeholder="A few sentences about your business and what you're looking for."
                />
              </div>
              <div className="sm:col-span-2 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                <p className="text-xs text-warmGray/80">
                  No spam. No newsletters. Just a reply.
                </p>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={submitting}
                >
                  {submitting ? "Sending…" : "Send message"}
                </Button>
              </div>
            </form>
          )}

          <div className="mt-12 pt-8 border-t border-charcoal/10 flex flex-col sm:flex-row gap-4 sm:gap-10 sm:items-center sm:justify-center text-sm">
            {/* TODO: Replace with your real email */}
            <a
              href="mailto:hello@daybreakstudio.com"
              className="inline-flex items-center gap-2 text-warmGray hover:text-accent transition-colors"
            >
              <Mail className="size-4" />
              hello@daybreakstudio.com
            </a>
            {/* TODO: Replace with your real Instagram handle */}
            <a
              href="https://instagram.com/daybreakstudio"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-warmGray hover:text-accent transition-colors"
            >
              <Instagram className="size-4" />
              @daybreakstudio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
