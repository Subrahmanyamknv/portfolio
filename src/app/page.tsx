import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { ParticleBackground } from "@/components/three/ParticleBackground";

export default function Home() {
  return (
    <>
      {/* 3D Particle Background - lazy loaded via client wrapper */}
      <ParticleBackground />

      {/* All sections layered above particles */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </div>
    </>
  );
}
