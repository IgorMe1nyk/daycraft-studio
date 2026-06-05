import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { LandingPage, type LandingConfig } from "@/components/landing-page";

export const metadata: Metadata = {
  title: "Small Business Websites — Cafés, Barbershops & Local Services · Daycraft Studio",
  description:
    "Get found and get booked. Fast, modern websites for cafés, barbershops, landscapers, and local service businesses in North Jersey. From $650.",
  alternates: { canonical: "https://daycraftstudio.com/business-sites" },
  openGraph: {
    title: "Small Business Websites · Daycraft Studio",
    description:
      "Get found and get booked — websites for cafés, barbershops, landscapers, and local services. From $650.",
    url: "https://daycraftstudio.com/business-sites",
    type: "website",
  },
};

const config: LandingConfig = {
  eyebrow: "Local Business",
  title: "Get found. Get booked.",
  subtitle:
    "Cafés, barbershops, landscapers, and local service businesses: your next customer is searching on their phone right now. Give them a fast, clear site that turns a search into a visit, a call, or a booking.",
  exampleSlugs: ["sunrise-cafe", "greenline-landscaping", "fade-and-co"],
  examplesHeading: "Local-business concepts",
  tierLine: "Standard tier · from $650 · Custom builds from $1,200+",
  highlights: [
    "Clear value prop and a call-to-action that converts",
    "Services, pricing, hours, and a map that’s always current",
    "Quote-request or booking flow built in",
    "Real work and trust signals — no clip-art or stock filler",
    "Local SEO so you show up for nearby searches",
    "Fast, mobile-first, and accessible (WCAG 2.2 AA)",
  ],
  faqs: [
    {
      q: "I don’t have a website at all yet. Where do we start?",
      a: "Perfect starting point. We’ll cover the essentials first — what you do, where you are, and how people reach you — then grow from there.",
    },
    {
      q: "Can customers book or request a quote on the site?",
      a: "Yes. Depending on your business, I add a quote-request form or wire up a booking flow so leads come straight to you.",
    },
    {
      q: "Will people actually find it on Google?",
      a: "Local SEO is built in — proper titles, structured data, and content aimed at the searches your neighbors actually make.",
    },
    {
      q: "What does it cost?",
      a: "Most local-business sites are the Standard tier at $650; larger builds with booking or multiple pages start at Custom, $1,200+. We’ll scope it together first.",
    },
  ],
  ctaTitle: "Let’s get your business online.",
  ctaText:
    "Tell me about your business and what you want customers to do. I’ll reply within 24 hours with a clear plan and price.",
};

export default function BusinessSitesPage() {
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
