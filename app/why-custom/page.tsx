import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { WhyCustomContent } from "@/components/why-custom-content";

export const metadata: Metadata = {
  title: "Why not a $30/month builder? — The honest answer · Daycraft Studio",
  description:
    "A fair, honest comparison: a $30/month website builder rents you a template forever; a one-time Daycraft build is yours to own. See the math by tier and year.",
  alternates: { canonical: "https://daycraftstudio.com/why-custom" },
  openGraph: {
    title: "Why not a $30/month builder? · Daycraft Studio",
    description:
      "A builder rents you a template, forever. I build you something you own — and the math is on your side.",
    url: "https://daycraftstudio.com/why-custom",
    type: "article",
  },
};

export default function WhyCustomPage() {
  return (
    <>
      <Nav />
      <main>
        <WhyCustomContent />
      </main>
      <Footer />
    </>
  );
}
