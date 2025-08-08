import ContactForm from "@/components/home/contact-form";
import { Hero } from "@/components/home/Hero";
import { MyWork } from "@/components/home/MyWork";
import {SexyProjects} from "@/components/home/SexyProjects";
import { TechStack } from "@/components/home/TechStack";
import { ValueProposition } from "@/components/home/ValueProposition";
import { Services } from "@/components/home/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <TechStack />
      <MyWork />
      <ValueProposition />
      <SexyProjects />
      <ContactForm />
    
    </>
  );
}
