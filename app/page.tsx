import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Process from "@/components/process";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

// Section order: Hero → Services → Process → About → Contact
//
// Portfolio and Testimonials are temporarily paused — their backups live
// alongside as PortfolioSection.tsx.bak / TestimonialsSection.tsx.bak,
// with full re-enable instructions at the top of each file.
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
