import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import {
  LegalPage,
  LegalSection,
  LegalText,
  LegalList,
} from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Accessibility Statement · Daycraft Studio",
  description:
    "Daycraft Studio builds to WCAG 2.2 AA. Our commitment to accessible websites, what that means, and how to reach us about any barrier.",
  alternates: { canonical: "https://daycraftstudio.com/accessibility" },
  openGraph: {
    title: "Accessibility Statement · Daycraft Studio",
    description: "Daycraft Studio builds accessible websites to WCAG 2.2 AA.",
    url: "https://daycraftstudio.com/accessibility",
    type: "article",
  },
};

export default function AccessibilityPage() {
  return (
    <>
      <Nav />
      <main>
        <LegalPage
          eyebrow="Legal"
          title="Accessibility Statement"
          updated="June 3, 2026"
          intro="Accessibility isn’t an add-on at Daycraft Studio — it’s how we build. We design and develop this site, and the sites we make for clients, to be usable by as many people as possible."
        >
          <LegalSection title="Our standard">
            <LegalText>
              We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2
              at Level AA. That standard guides how we handle color contrast,
              keyboard navigation, focus visibility, text alternatives for images,
              semantic structure, and respect for motion preferences.
            </LegalText>
          </LegalSection>

          <LegalSection title="What we do">
            <LegalList
              items={[
                "Semantic HTML and a logical heading structure on every page.",
                "Full keyboard navigation with clearly visible focus states.",
                "Descriptive alternative text for meaningful images.",
                "Form fields with proper labels and clear error messaging.",
                "Respect for the “reduced motion” setting, so animations calm down for people who prefer that.",
                "Color and contrast chosen to stay legible against our cream background.",
              ]}
            />
          </LegalSection>

          <LegalSection title="An ongoing commitment">
            <LegalText>
              Accessibility is never “finished.” We test as we build and revisit
              the site over time as standards and tools improve. If something
              here falls short, we want to know and we’ll fix it.
            </LegalText>
          </LegalSection>

          <LegalSection title="Why it matters (and why we mention it)">
            <LegalText>
              Most small-business websites aren’t built with accessibility in
              mind — which shuts out real customers and, increasingly, invites
              legal risk. Building to WCAG 2.2 AA is simply the right way to do
              it, and it’s part of what you get when you work with us.
            </LegalText>
          </LegalSection>

          <LegalSection title="Tell us about a barrier">
            <LegalText>
              If you run into any difficulty using this site, or you use assistive
              technology and hit a wall, please email{" "}
              <a
                href="mailto:hello@daycraftstudio.com"
                className="text-charcoal underline underline-offset-2 hover:text-accentDeep"
              >
                hello@daycraftstudio.com
              </a>
              . Tell us what happened and where, and we’ll work to fix it and help
              you get what you need in the meantime.
            </LegalText>
          </LegalSection>
        </LegalPage>
      </main>
      <Footer />
    </>
  );
}
