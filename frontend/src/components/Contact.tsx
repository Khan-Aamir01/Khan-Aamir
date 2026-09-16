import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Check, Copy, Send } from "lucide-react";
import { dummyProfile } from "../data/portfolio";

export default function Contact({ profile }: { profile?: typeof dummyProfile }) {
  const data = profile ?? dummyProfile;
  const location = data.location;
  const targetEmail = data.email || "aamir989280@gmail.com";
  const num = data.phone;
  const twitter = data.social?.twitter || "#";
  const github = data.social?.github || "#";
  const linkedin = data.social?.linkedin || "#";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const subject = encodeURIComponent(`Portfolio Contact: ${name.trim()}`);
    const body = encodeURIComponent(
      `Hello Aamir,\n\n${message.trim()}\n\n---\nFrom: ${name.trim()}\nEmail: ${email.trim()}`
    );

    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(targetEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="w-full bg-white dark:bg-black text-black dark:text-white snap-start">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Contact
            </h2>

            <p className="text-black/70 dark:text-white/70 leading-relaxed max-w-md">
              Have an idea, project, or opportunity you'd like to discuss? Reach out directly via the form or through my contact information.
            </p>

            <div className="space-y-4 text-black/70 dark:text-white/70">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="shrink-0" />
                <span>{location}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" />
                <a href={`tel:${num}`} className="hover:underline">{num}</a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <button
                  type="button"
                  onClick={copyEmail}
                  className="hover:underline inline-flex items-center gap-2 cursor-pointer text-left"
                  title="Click to copy email"
                >
                  <span>{targetEmail}</span>
                  {copied ? (
                    <span className="text-xs text-emerald-500 font-medium inline-flex items-center gap-1">
                      <Check size={13} /> Copied
                    </span>
                  ) : (
                    <Copy size={14} className="opacity-60 hover:opacity-100" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-black/10 dark:border-white/10">
              {twitter && twitter !== "#" && (
                <a href={twitter} target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition" aria-label="X">
                  <Twitter size={20} />
                </a>
              )}
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>

          <form
            className="bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/5 rounded-xl p-8 space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-sm mb-2 text-black/70 dark:text-white/70">
                Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 
                           rounded-md px-4 py-2 text-sm focus:outline-none focus:border-black 
                           dark:focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-black/70 dark:text-white/70">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 
                           rounded-md px-4 py-2 text-sm focus:outline-none focus:border-black 
                           dark:focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-black/70 dark:text-white/70">
                Message
              </label>
              <textarea
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                className="w-full bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 
                           rounded-md px-4 py-2 text-sm resize-none focus:outline-none 
                           focus:border-black dark:focus:border-white transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 border border-black dark:border-white 
                         px-6 py-3 text-sm font-medium rounded-md
                         hover:bg-black hover:text-white 
                         dark:hover:bg-white dark:hover:text-black
                         transition-all cursor-pointer"
            >
              <Send size={15} />
              Send Message
            </button>

            {submitted && (
              <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/20 text-emerald-800 dark:text-emerald-200 text-xs leading-relaxed flex items-start gap-2">
                <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Opening your email client...</p>
                  <p className="mt-0.5 opacity-80">
                    If your email client didn't launch automatically, click the email above to copy my address directly.
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
