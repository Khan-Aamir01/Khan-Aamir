export default function Footer({ profile }: { profile: any }) {
  const footerText = profile.footerText || "Made with Hope!"
  return (
    <footer className="w-full bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left */}
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Khan Aamir. All rights reserved.
          </p>

          {/* Right */}
          <p className="text-sm text-white/60">
            {footerText}
          </p>

        </div>

      </div>
    </footer>
  );
}
