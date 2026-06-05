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
  title: "Privacy Policy · Daycraft Studio",
  description:
    "How Daycraft Studio collects, uses, and protects the information you share through this site. Plain English. New Jersey governing law.",
  alternates: { canonical: "https://daycraftstudio.com/privacy" },
  openGraph: {
    title: "Privacy Policy · Daycraft Studio",
    description:
      "How Daycraft Studio collects, uses, and protects your information.",
    url: "https://daycraftstudio.com/privacy",
    type: "article",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main>
        <LegalPage
          eyebrow="Legal"
          title="Privacy Policy"
          updated="June 3, 2026"
          intro="This policy explains what information Daycraft Studio collects when you use this website, why, and the choices you have. We keep it short because we collect very little."
        >
          <LegalSection title="Who we are">
            <LegalText>
              Daycraft Studio is a solo web-design studio based in North Jersey,
              United States, operated by Igor Melnyk. You can reach us at{" "}
              <a
                href="mailto:hello@daycraftstudio.com"
                className="text-charcoal underline underline-offset-2 hover:text-accentDeep"
              >
                hello@daycraftstudio.com
              </a>
              . This policy applies to daycraftstudio.com.
            </LegalText>
          </LegalSection>

          <LegalSection title="What we collect">
            <LegalText>
              We only collect the information you choose to send us through the
              contact form:
            </LegalText>
            <LegalList
              items={[
                "Your name",
                "Your email address",
                "Your business name (optional)",
                "The type of site you’re interested in",
                "The message you write describing your project",
              ]}
            />
            <LegalText>
              We do not run analytics, advertising pixels, or tracking cookies on
              this site. Our hosting provider keeps standard, short-lived server
              logs (such as IP address and browser type) for security and
              reliability, as is normal for any website. We do not use those logs
              to build profiles of visitors.
            </LegalText>
          </LegalSection>

          <LegalSection title="How we use it">
            <LegalText>
              We use the information you submit only to respond to your inquiry,
              prepare a quote, and communicate with you about a possible or
              ongoing project. We do not sell your information, and we do not use
              it for advertising.
            </LegalText>
          </LegalSection>

          <LegalSection title="Who we share it with">
            <LegalText>
              We share information only with the service providers that make this
              site and our replies work:
            </LegalText>
            <LegalList
              items={[
                "Formspree — processes contact-form submissions and forwards them to our inbox.",
                "Our email provider — so we can read and reply to your message.",
                "Vercel — hosts the website.",
              ]}
            />
            <LegalText>
              These providers process the information on our behalf. We never sell
              or rent your personal information to anyone.
            </LegalText>
          </LegalSection>

          <LegalSection title="Cookies">
            <LegalText>
              This site uses only essential functionality and does not set
              analytics or advertising cookies, so there is no cookie banner. If
              we ever add analytics or advertising tools in the future, we will
              update this policy and provide a way to opt out before any
              non-essential cookies are used.
            </LegalText>
          </LegalSection>

          <LegalSection title="How long we keep it">
            <LegalText>
              We keep contact-form messages only as long as needed to respond to
              you and, if we work together, for the duration of the project plus
              a reasonable period afterward for our records. You can ask us to
              delete your information at any time (see your rights below).
            </LegalText>
          </LegalSection>

          <LegalSection title="Your rights">
            <LegalText>
              You can ask us to access, correct, or delete the personal
              information you’ve shared, or to opt out of any future
              communications. To exercise any of these rights, email{" "}
              <a
                href="mailto:hello@daycraftstudio.com"
                className="text-charcoal underline underline-offset-2 hover:text-accentDeep"
              >
                hello@daycraftstudio.com
              </a>{" "}
              and we’ll take care of it. We will not discriminate against you for
              exercising these rights.
            </LegalText>
          </LegalSection>

          <LegalSection title="Children’s privacy">
            <LegalText>
              This site is intended for adults and small-business owners. We do
              not knowingly collect personal information from children under 16.
              If you believe a child has provided us information, email us and we
              will delete it promptly.
            </LegalText>
          </LegalSection>

          <LegalSection title="Changes to this policy">
            <LegalText>
              If we update this policy, we’ll change the effective date at the top
              of this page. Material changes will be reflected here before they
              take effect.
            </LegalText>
          </LegalSection>

          <LegalSection title="Governing law">
            <LegalText>
              This policy is governed by the laws of the State of New Jersey,
              United States, without regard to its conflict-of-laws rules.
            </LegalText>
          </LegalSection>
        </LegalPage>
      </main>
      <Footer />
    </>
  );
}
