import PillNav from "@/components/molecules/PillNav";
import HeroSection from "@/components/organisms/HeroSection";
import ProjectsSection from "@/components/organisms/ProjectsSection";
import AboutMe from "@/components/organisms/AboutMe";
import ContactForm from "@/components/organisms/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen">
       <PillNav
          items={[
            { label: "Home", href: "#hero-section" },
            { label: "Services", href: "#projects-section" },
            { label: "About", href: "#about-me" },
            { label: "Contact", href: "#contact-form" },
          ]}
          activeHref="/"
          className="custom-nav mx-auto"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      <HeroSection />
      <ProjectsSection />
      <AboutMe />
      <ContactForm />
    </main>
  );
}
