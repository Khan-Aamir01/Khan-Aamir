
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact({ profile }: { profile: any }) {
  const location = profile.location || "Mumbai India";
  const email = profile.email || "aamir989280@gmail.com";
  const num = profile.phone || "+91 9892808248";
  const twitter = profile.social.twitter || "#";
  const github = profile.social.github || "https://github.com/khan-aamir01";
  const linkedin = profile.social.linkedin || "https://www.linkedin.com/in/mohd-aamir-khan-197715332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

  return (
    <section className="w-full bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left: Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Contact
            </h2>

            <div className="space-y-4 text-black/70 dark:text-white/70">
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>{location}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>{num}</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>{email}</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-6 pt-6 border-t border-black/10 dark:border-white/10">
              <a
                href={twitter}
                className="hover:opacity-60 transition"
                aria-label="X"
              >
                <Twitter size={20} />
              </a>
              <a
                href={linkedin}
                className="hover:opacity-60 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={github}
                className="hover:opacity-60 transition"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className="bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/5 rounded-xl p-8 space-y-6">
            
            <div>
              <label className="block text-sm mb-2 text-black/70 dark:text-white/70">
                Name
              </label>
              <input
                type="text"
                className="w-full bg-transparent border border-black/10 dark:border-white/10 
                           rounded-md px-4 py-2 focus:outline-none focus:border-black 
                           dark:focus:border-white"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-black/70 dark:text-white/70">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-transparent border border-black/10 dark:border-white/10 
                           rounded-md px-4 py-2 focus:outline-none focus:border-black 
                           dark:focus:border-white"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-black/70 dark:text-white/70">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full bg-transparent border border-black/10 dark:border-white/10 
                           rounded-md px-4 py-2 resize-none focus:outline-none 
                           focus:border-black dark:focus:border-white"
              />
            </div>

            <button
              type="submit"
              className="w-full border border-black dark:border-white 
                         px-6 py-3 text-sm font-medium 
                         hover:bg-black hover:text-white 
                         dark:hover:bg-white dark:hover:text-black
                         transition-all"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}
