import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Projects from "../src/components/Projects";
import Skills from "../src/components/Skills";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import Reveal from "../src/components/Reveal";
import { dummyProfile, dummyProjects } from "../src/data/portfolio";

function Homepage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      <Navbar profile={dummyProfile} />
      <Reveal>
        <Hero profile={dummyProfile} />
      </Reveal>
      <Reveal>
        <About profile={dummyProfile} />
      </Reveal>
      <Reveal>
        <Projects projects={dummyProjects} />
      </Reveal>
      <Reveal>
        <Skills profile={dummyProfile} />
      </Reveal>
      <Reveal>
        <Contact profile={dummyProfile} />
      </Reveal>
      <Footer profile={dummyProfile} />
    </div>
  );
}

export default Homepage;
