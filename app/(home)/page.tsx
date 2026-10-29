import { Hero } from "@/components/home/Hero";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { Services } from "@/components/home/Services";
import { Methodology } from "@/components/home/Methodology";
import ContactForm from "@/components/home/contact-form";
import CtaSection from "@/components/common/CtaSection";
import { AboutMe } from "@/components/home/AboutMe";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Hero />
      <ProjectsSection />
      <Services />
      <Methodology />
      <AboutMe />
      < ContactForm />
      <CtaSection />
    </main>
  );
}
