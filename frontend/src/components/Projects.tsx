import { Link } from "react-router-dom";
import { Github, ExternalLink, Info } from "lucide-react";
import type { Project } from "../data/portfolio";
import { dummyProjects } from "../data/portfolio";

const actionClass =
  "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-black/15 dark:border-white/15 text-black/80 dark:text-white/80 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer";

export default function Projects({ projects }: { projects?: Project[] }) {
  const safeProjects =
    projects && projects.length > 0 ? projects : dummyProjects;

  return (
    <section className="w-full bg-white dark:bg-black text-black dark:text-white snap-start">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-16">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {safeProjects.map((project) => (
            <div
              key={project._id || project.title}
              className="bg-zinc-100 dark:bg-zinc-900
                         border border-black/5 dark:border-white/5
                         rounded-xl p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                <p className="text-black/70 dark:text-white/70 mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full
                                 border border-black/10 dark:border-white/10
                                 text-black/60 dark:text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                <a
                  href={project.githubUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={actionClass}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <Link to="/coming-soon" className={actionClass}>
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Link>
                <Link to="/coming-soon" className={actionClass}>
                  <Info className="w-4 h-4" />
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
