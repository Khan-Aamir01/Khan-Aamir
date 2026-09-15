import { useEffect, useState } from "react";
import { Github, ExternalLink, Info, X } from "lucide-react";
import type { Project } from "../data/portfolio";
import { dummyProjects } from "../data/portfolio";

const actionClass =
  "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-black/15 dark:border-white/15 text-black/80 dark:text-white/80 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer";

export default function Projects({ projects }: { projects?: Project[] }) {
  const safeProjects =
    projects && projects.length > 0 ? projects : dummyProjects;
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (!selected) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

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
                <a
                  href={project.liveUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={actionClass}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className={actionClass}
                >
                  <Info className="w-4 h-4" />
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-lg rounded-xl border border-white/10 bg-zinc-900 p-8 text-white relative shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-2xl font-semibold">{selected.title}</h3>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close dialog"
                className="text-white/60 hover:text-white transition-colors cursor-pointer p-1 rounded-md hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              {selected.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {selected.techStack.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={selected.githubUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={actionClass}
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={selected.liveUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={actionClass}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className={actionClass}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
