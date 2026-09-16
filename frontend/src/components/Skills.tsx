import type { SkillsGroup } from "../data/portfolio";
import { dummyProfile } from "../data/portfolio";
import SkillIcon from "./SkillIcon";

export default function Skills({ profile }: { profile?: { skills?: SkillsGroup } }) {
  const skills: SkillsGroup =
    profile?.skills && Array.isArray(profile.skills.frontend)
      ? profile.skills
      : dummyProfile.skills;

  const groups = [
    { title: "Frontend", items: skills.frontend },
    { title: "Backend", items: skills.backend },
    { title: "Database", items: skills.database },
    { title: "Tools", items: skills.tools },
  ];

  return (
    <section className="w-full bg-white dark:bg-black text-black dark:text-white snap-start">
      <div className="max-w-7xl mx-auto px-6 py-12">
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
              <h3 className="text-lg font-semibold mb-6 tracking-tight text-black dark:text-white">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg 
                               bg-white dark:bg-zinc-800/80 
                               border border-black/5 dark:border-white/10 
                               text-black/85 dark:text-white/85 
                               hover:border-black/25 dark:hover:border-white/25 
                               hover:scale-[1.02] transition-all shadow-xs"
                  >
                    <SkillIcon name={item} className="w-5 h-5 shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
