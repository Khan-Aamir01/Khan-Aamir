import { useEffect, useState } from "react";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Projects from "../src/components/Projects";
import Skills from "../src/components/Skills";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import { api } from "../services/api";

function Homepage() {
  const [profile, setProfile] = useState<any>(null);
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [profileData, projectsData] = await Promise.all([
          api.getProfile(),
          api.getProjects(),
        ]);

        setProfile(profileData);
        setProjects(projectsData);
      } catch (err) {
        console.error("Failed to load homepage data", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-black">
        <p className="text-neutral-400">Loading...</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-black">
        <p className="text-red-400">Failed to load profile</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      <Navbar profile={profile} />
      <Hero profile={profile} />
      <About profile={profile} />
      <Projects projects={projects} />
      <Skills profile={profile} />
      <Contact profile={profile} />
      <Footer profile={profile} />
    </div>
  );
}

export default Homepage;
