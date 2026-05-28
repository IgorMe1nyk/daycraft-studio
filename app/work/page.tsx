import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { WorkIndex } from "@/components/work-index";

export const metadata: Metadata = {
  title: "Work · Daybreak Studio",
  description:
    "Selected work from Daybreak Studio — real projects and concept design for small businesses in North Jersey.",
  openGraph: {
    title: "Work · Daybreak Studio",
    description:
      "Selected work from Daybreak Studio — real projects and concept design for small businesses in North Jersey.",
    url: "https://daybreakstudio.studio/work",
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
