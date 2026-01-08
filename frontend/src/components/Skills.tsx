type SkillsGroup = {
  frontend: string[];
  backend: string[];
  database: string[];
  tools: string[];
};

const DEFAULT_SKILLS: SkillsGroup = {
  frontend: ["React", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  backend: ["Node.js", "Express", "REST APIs", "Java"],
  database: ["MongoDB", "PostgreSQL","MySQL"],
  tools: ["Git","Postman","VS Code","IntelliJ Idea"],
};

export default function Skills({ profile }: { profile?: any }) {
  const skills: SkillsGroup =
    profile?.skills &&
    Array.isArray(profile.skills.frontend)
      ? profile.skills
      : DEFAULT_SKILLS;

  const groups = [
    { title: "Frontend", items: skills.frontend },
    { title: "Backend", items: skills.backend },
    { title: "Database", items: skills.database },
    { title: "Tools", items: skills.tools },
  ];

  return (
    <section className="w-full bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-16">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {groups.map((group) => (
            <div
              key={group.title}
              className="bg-zinc-100 dark:bg-zinc-900
                         border border-black/5 dark:border-white/5
                         rounded-xl p-8"
            >
              <h3 className="text-lg font-medium mb-4">
                {group.title}
              </h3>

              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
