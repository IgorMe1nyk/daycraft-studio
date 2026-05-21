import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Work from "@/components/work";
import Process from "@/components/process";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

// Section order: Hero → Services → Work → Process → About → Contact
//
// Testimonials is still paused — its backup lives alongside as
// TestimonialsSection.tsx.bak with full re-enable instructions at the
// top of that file.
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
