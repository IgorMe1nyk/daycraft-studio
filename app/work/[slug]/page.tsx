import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { CaseStudyView } from "@/components/case-study-view";
import { getProject, projects } from "@/lib/projects";

interface Params {
  params: { slug: string };
}

// Pre-render a static page for every project at build time.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Work · Daycraft Studio" };

  const kindLabel = project.kind === "concept" ? "Concept" : "Case study";
  const title = `${project.name} · ${kindLabel} · Daycraft Studio`;
  const description = project.shortDesc;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://daycraftstudio.com/work/${project.id}`,
      type: "article",
    },
  };
}

export default function CaseStudyPage({ params }: Params) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <>
      <Nav />
      <main>
        {/* Pass the slug, not the project — the client component re-looks-up
            the data so the Icon functions never cross the server boundary. */}
        <CaseStudyView slug={project.id} />
      </main>
      <Footer />
    </>
  );
}
