import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { LandingPage, type LandingConfig } from "@/components/landing-page";

export const metadata: Metadata = {
  title: "Event Websites — Weddings, Quinceañeras & Milestones · Daycraft Studio",
  description:
    "Beautiful, bilingual-ready websites for weddings, quinceañeras, sweet 16s, and milestone events in North Jersey. Custom RSVP, schedule, and details. From $350.",
  alternates: { canonical: "https://daycraftstudio.com/event-sites" },
  openGraph: {
    title: "Event Websites · Daycraft Studio",
    description:
      "Beautiful, bilingual-ready websites for weddings, quinceañeras, and milestone events. From $350.",
    url: "https://daycraftstudio.com/event-sites",
    type: "website",
  },
};

const config: LandingConfig = {
  eyebrow: "Event Websites",
  title: "A website as beautiful as the day.",
  subtitle:
    "Weddings, quinceañeras, sweet 16s, and milestone celebrations deserve more than a generic template. A custom site that holds your story, your details, and your RSVPs — and works for every guest, in every language.",
  exampleSlugs: ["emily-and-james", "mia-quince"],
  examplesHeading: "Event work",
  tierLine: "Starter tier · from $350 · usually live within days",
  highlights: [
    "Custom RSVP with meal choices, guest counts & song requests",
    "Schedule, venue map, directions & travel info",
    "Bilingual (e.g. English ⇄ Spanish) when your family needs it",
    "Add-to-calendar, gallery, and a countdown to the day",
    "Mobile-first — most guests open it on their phone",
    "Editorial design that matches the feel of your event",
  ],
  faqs: [
    {
      q: "How fast can it be ready?",
      a: "A one-page event site is usually live within a few days of getting your details and photos. If your date is close, tell me — I’ll prioritize it.",
    },
    {
      q: "Can it be in two languages?",
      a: "Yes. I build bilingual sites with a clean one-tap toggle so a Spanish-dominant family member and an English-first guest both get a first-class experience.",
    },
    {
      q: "Will I be able to see who’s coming?",
      a: "Yes. The RSVP flow collects guest counts, meal choices, and notes, and the responses come straight to you — no clunky third-party dashboard.",
    },
    {
      q: "What does it cost?",
      a: "Event one-pagers start at the Starter tier, $350. If you want something larger or more custom, we’ll talk through it — no surprises.",
    },
  ],
  ctaTitle: "Tell me about your celebration.",
  ctaText:
    "Send me the date, the vibe, and what you need guests to do. I’ll reply within 24 hours with how I’d approach it.",
};

export default function EventSitesPage() {
  return (
    <>
      <Nav />
      <main>
        <LandingPage config={config} />
      </main>
      <Footer />
    </>
  );
}
