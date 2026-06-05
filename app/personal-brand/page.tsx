import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { LandingPage, type LandingConfig } from "@/components/landing-page";

export const metadata: Metadata = {
  title: "Personal Brand Websites — Photographers, Agents & Consultants · Daycraft Studio",
  description:
    "Editorial portfolio and personal-brand websites for photographers, real-estate agents, consultants, and professionals in North Jersey. A site that looks like your work. From $650.",
  alternates: { canonical: "https://daycraftstudio.com/personal-brand" },
  openGraph: {
    title: "Personal Brand Websites · Daycraft Studio",
    description:
      "Editorial portfolio sites for photographers, agents, consultants, and professionals. From $650.",
    url: "https://daycraftstudio.com/personal-brand",
    type: "website",
  },
};

const config: LandingConfig = {
  eyebrow: "Personal Brand",
  title: "A site that looks like your work.",
  subtitle:
    "Photographers, real-estate agents, consultants, and professionals: your website is the first impression. It should feel as considered as the work itself — editorial, fast, and unmistakably yours.",
  exampleSlugs: ["leor-meltser"],
  examplesHeading: "Personal-brand work",
  tierLine: "Standard tier · from $650",
  highlights: [
    "Editorial design that puts your work front and center",
    "Portfolio or gallery with a clean, fast lightbox",
    "Clear inquiry / booking flow without sales pressure",
    "Your story and credibility, told well",
    "Mobile-first and genuinely accessible (WCAG 2.2 AA)",
    "Fast, modern build — no bloated page-builder",
  ],
  faqs: [
    {
      q: "I already have images — can you build around them?",
      a: "That’s the ideal case. Strong photography is the design. I’ll build a layout that lets your work breathe and lead.",
    },
    {
      q: "I’m a solo professional, not a big company. Is this overkill?",
      a: "The opposite — a sharp personal site is exactly how solo professionals win trust. You’re selling judgment and taste, and the site should prove it.",
    },
    {
      q: "Can people inquire or book through it?",
      a: "Yes. I add a clean inquiry or contact flow that fits how you actually take on clients — no pushy pop-ups.",
    },
    {
      q: "What does it cost?",
      a: "Personal-brand sites typically sit at the Standard tier, $650. We’ll confirm scope before anything starts.",
    },
  ],
  ctaTitle: "Let’s make your work look the part.",
  ctaText:
    "Tell me what you do and where you want to take it. I’ll reply within 24 hours with how I’d approach your site.",
};

export default function PersonalBrandPage() {
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
