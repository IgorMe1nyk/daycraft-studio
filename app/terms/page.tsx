import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import {
  LegalPage,
  LegalSection,
  LegalText,
} from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service · Daycraft Studio",
  description:
    "The terms for using the Daycraft Studio website. Project work is governed by a separate per-project agreement. New Jersey governing law.",
  alternates: { canonical: "https://daycraftstudio.com/terms" },
  openGraph: {
    title: "Terms of Service · Daycraft Studio",
    description: "The terms for using the Daycraft Studio website.",
    url: "https://daycraftstudio.com/terms",
    type: "article",
  },
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main>
        <LegalPage
          eyebrow="Legal"
          title="Terms of Service"
          updated="[EFFECTIVE DATE]"
          intro="These terms cover your use of the Daycraft Studio website. Any actual design work we do together is governed by a separate written agreement for that project."
        >
          <LegalSection title="Using this site">
            <LegalText>
              You’re welcome to browse this site and contact us through it. In
              return, you agree not to misuse it — for example, by attempting to
              break, overload, or gain unauthorized access to the site, or by
              submitting unlawful, infringing, or deliberately false information
              through the contact form.
            </LegalText>
          </LegalSection>

          <LegalSection title="Intellectual property">
            <LegalText>
              The design, code, text, logos, and visual identity of this website
              belong to Daycraft Studio. The portfolio includes concept and pitch
              work that is self-directed and clearly labeled as such. Please don’t
              copy, reproduce, or reuse this site’s design or content without
              written permission. Third-party imagery shown in concept pieces is
              licensed stock used for illustration.
            </LegalText>
          </LegalSection>

          <LegalSection title="The site is provided “as is”">
            <LegalText>
              We work hard to keep this site accurate and available, but it is
              provided on an “as is” and “as available” basis without warranties
              of any kind, express or implied. We don’t guarantee the site will
              be uninterrupted, error-free, or that any information on it is
              complete or current.
            </LegalText>
          </LegalSection>

          <LegalSection title="Limitation of liability">
            <LegalText>
              To the fullest extent permitted by law, Daycraft Studio will not be
              liable for any indirect, incidental, or consequential damages
              arising from your use of this website. This section is about the
              marketing website itself — it does not limit any obligations agreed
              in a signed project contract.
            </LegalText>
          </LegalSection>

          <LegalSection title="Project work is separate">
            <LegalText>
              Pricing shown on this site (Starter, Standard, and Custom tiers) is
              indicative. Any project we take on is governed by its own written
              agreement covering scope, timeline, payment, revisions, ownership of
              the finished work, and support. Nothing on this website is a
              binding offer or contract on its own.
            </LegalText>
          </LegalSection>

          <LegalSection title="Links to other sites">
            <LegalText>
              This site may link to live examples or third-party sites we don’t
              control. We’re not responsible for the content or practices of those
              sites.
            </LegalText>
          </LegalSection>

          <LegalSection title="Changes to these terms">
            <LegalText>
              We may update these terms from time to time. The effective date at
              the top of this page shows when they last changed. Continuing to use
              the site means you accept the current version.
            </LegalText>
          </LegalSection>

          <LegalSection title="Governing law">
            <LegalText>
              These terms are governed by the laws of the State of New Jersey,
              United States, without regard to its conflict-of-laws rules. Any
              dispute relating to this website will be handled in the state or
              federal courts located in New Jersey.
            </LegalText>
          </LegalSection>
        </LegalPage>
      </main>
      <Footer />
    </>
  );
}
