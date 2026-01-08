
import { useEffect, useState } from "react";

export default function Navbar({ profile }: { profile: any }) {
  const [theme, setTheme] = useState("dark");
  const logoName = profile.logoName || "Khan Aamir";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <nav className="w-full bg-neutral-900 dark:bg-neutral-900 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Brand */}
        <h1 className="text-xl sm:text-2xl font-semibold tracking-wide">
          {logoName}
        </h1>

        {/* Right: Theme Toggle */}
        { /*<button
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
          className="rounded-full border border-white/20 px-4 py-2 text-sm
                     hover:bg-white hover:text-black transition-all duration-300"
        >
          theme === "dark" ? "Light" : "Dark"
        </button> */ }
      </div>
    </nav>
  );
}
