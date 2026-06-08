import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Services from "@/components/services";
import { WhyCustomTeaser } from "@/components/why-custom-teaser";
import Work from "@/components/work";
import Process from "@/components/process";
import About from "@/components/about";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { LazySection } from "@/components/lazy-section";

// Section order: Hero → Services → WhyCustom → Work → Process → About → FAQ → Contact
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
        <WhyCustomTeaser />
        {/* Below-the-fold, heavy sections: deferred until scrolled near so
            their DOM/JS stays off the homepage's first paint. The wrappers
            keep the #work / #contact anchors working. */}
        <LazySection id="work" minHeight={1400}>
          <Work />
        </LazySection>
        <Process />
        <About />
        <FAQ />
        <LazySection id="contact" minHeight={760}>
          <Contact />
        </LazySection>
      </main>
      <Footer />
    </>
  );
}
