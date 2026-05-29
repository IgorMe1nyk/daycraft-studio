import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { WorkIndex } from "@/components/work-index";

export const metadata: Metadata = {
  title: "Work · Daycraft Studio",
  description:
    "Selected work from Daycraft Studio — real projects and concept design for small businesses in North Jersey.",
  openGraph: {
    title: "Work · Daycraft Studio",
    description:
      "Selected work from Daycraft Studio — real projects and concept design for small businesses in North Jersey.",
    url: "https://daycraftstudio.com/work",
    type: "website",
  },
};

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main>
        <WorkIndex />
      </main>
      <Footer />
    </>
  );
}
