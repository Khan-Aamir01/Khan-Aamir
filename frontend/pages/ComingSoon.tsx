import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Github, Mail } from "lucide-react";
import { dummyProfile } from "../src/data/portfolio";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col justify-between selection:bg-neutral-800 selection:text-white">
      {/* Top Navigation */}
      <header className="w-full border-b border-black/5 dark:border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-xl sm:text-2xl font-semibold tracking-wide hover:opacity-80 transition"
          >
            {dummyProfile.logoName || "Khan Aamir"}
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-black/15 dark:border-white/15 text-black/80 dark:text-white/80 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Coming Soon Content */}
      <main className="max-w-3xl mx-auto px-6 py-20 text-center flex flex-col items-center justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 text-xs font-medium tracking-wide uppercase text-neutral-600 dark:text-neutral-400 mb-8 animate-pulse">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          Under Construction
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
          Coming Soon
        </h1>

        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl mb-10">
          I'm currently putting the finishing touches on this project's interactive demo, documentation, and live deployment.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-black dark:bg-white text-white dark:text-black hover:opacity-90 transition-all cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <a
            href={dummyProfile.social.github || "https://github.com/Khan-Aamir01"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-lg border border-black/15 dark:border-white/15 text-black/80 dark:text-white/80 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer"
          >
            <Github className="w-4 h-4" />
            Explore GitHub Repos
          </a>

          <a
            href={`mailto:${dummyProfile.email}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-lg border border-black/15 dark:border-white/15 text-black/80 dark:text-white/80 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-black/5 dark:border-white/10 px-6 py-6 text-center text-sm text-black/60 dark:text-white/60">
        <p>{dummyProfile.footerText || "Made with Hope!"}</p>
      </footer>
    </div>
  );
}
