import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import HowItWorksContent from "@/components/how-it-works-content";

export const metadata: Metadata = {
  title: "How it works · Daybreak Studio",
  description:
    "The full step-by-step guide to working with Daybreak Studio — what you do, what I do, what it costs, and what happens when something goes wrong.",
  openGraph: {
    title: "How it works · Daybreak Studio",
    description:
      "The full step-by-step guide to working with Daybreak Studio — what you do, what I do, what it costs, and what happens when something goes wrong.",
    url: "https://daybreakstudio.studio/how-it-works",
    type: "article",
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <main>
        <HowItWorksContent />
      </main>
      <Footer />
    </>
  );
}
