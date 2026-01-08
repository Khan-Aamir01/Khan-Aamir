export default function About({ profile }: { profile: any }) {
  const aboutme = "I’m a Computer Engineering graduate with a B.E. degree from Mumbai University and a strong passion for computer science. I enjoy exploring how things work under the hood and building practical, real-world projects.I’ve worked on several full-stack projects using React, Node.js, MongoDB, and PostgreSQL, and I’m comfortable with concepts like authentication, APIs, and basic networking. I enjoy turning ideas into working products and continuously improving my engineering skills.Outside of building, I spend a lot of time watching, learning, and experimenting with computer science topics, from system design to low-level concepts. I’m driven by curiosity and a love for creating things that actually work."
  const about = profile.about || aboutme;
  return (
    <section className="w-full bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* Left: Section Title */}
          <div className="md:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              About Me
            </h2>
          </div>

          {/* Right: Content */}
          <div className="md:col-span-2">
            <p className="text-base sm:text-lg leading-relaxed text-black/70 dark:text-white/70">
              {about}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
