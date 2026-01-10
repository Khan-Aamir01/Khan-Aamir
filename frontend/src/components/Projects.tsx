type Project = {
  _id?: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
};
const DEFAULT_PROJECTS: Project[] = [
  {
    title: "Real-time Chat Application",
    description:
      "A full-stack real-time chat app with authentication, WebSocket-based messaging, and responsive UI.Implemented message persistence with a database,handled room/channel logic,and ensured seamless live updates across clients",
    techStack: ["React", "Node.js", "WebSocket", "MongoDB"],
    liveUrl: "#",
  },
  {
    title: "Library Management System",
    description:
      "Developed a web application to streamline library operations,integrating functionalities like user authentication,book management,and fine tracking.Utilized the MERN stack (MongoDB,Express.js,React.js,Node.js)to build a responsive and intuitive user interface.Ensured efficient management of library resources and enhanced the user experience through optimized design and usability.",
    techStack: ["React", "Node.js","Express", "JWT", "MongoDB"],
    liveUrl: "#",
  },
  {
    title: "Smart Feedback System",
    description:
      "Built a SaaS MVP for small businesses to collect customer feedback through voice recording and speech-to-text.Implemented sentiment analysis pipeline to classify positive/negative feedback and generate insights",
    techStack: ["Python", "Supabase", "Fast-api","ML"],
    liveUrl: "#",
  },
  {
    title: "Glaucoma Detection and Monitoring",
    description:
      "Developed an AI-based system for glaucoma detection and monitoring using retinal images captured with a 20D lens. Implemented deep learning models including ResNet, YOLO, and U-Net for image classification,segmentation, and preprocessing. Built a clean React-based UI for visualization and reporting, with a Python Flask backend handling model inference and data flow.",
    techStack: ["Python", "Flask","Deep Learning", "Hardware"],
    liveUrl: "#",
  },
];


export default function Projects({ projects }: { projects?: Project[] }) {
  const safeProjects =
    projects && projects.length > 0 ? projects : DEFAULT_PROJECTS;

  return (
    <section className="w-full bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-16">
          Projects
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {safeProjects.map((project:any) => {
            const link = project.liveUrl || project.githubUrl || "#";

            return (
              <div
                key={project._id || project.title}
                className="bg-zinc-100 dark:bg-zinc-900
                           border border-black/5 dark:border-white/5
                           rounded-xl p-8"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-black/70 dark:text-white/70 mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tag:any) => (
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

                {/* Link */}
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium underline underline-offset-4
                             text-black/80 dark:text-white/80 hover:opacity-70"
                >
                  View Project →
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

