import defaultImage from "../assets/default.png";
export default function Hero({ profile }: { profile: any }) {
  const fullname = profile.fullName || "Khan Mohd Aamir";
  const role = profile.role || "Software Developer";
  return (
    <section className="w-full bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              {fullname}{/*<span className="text-black/70 dark:text-white/70">hd Aamir</span> */}
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-black/60 dark:text-white/60">
              {role}
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 
                  rounded-full border border-black/20 dark:border-white/20 
                  overflow-hidden flex items-center justify-center transition-all">
              
              {/* Replace src with your image */}
              <img
                src={defaultImage}
                alt="Khan Aamir"
                className="w-full h-full object-cover grayscale"
              />

              {/* If no image yet, use this instead 👇 */}
              {/* <span className="text-black/40 dark:text-white/40 text-sm">
                Add Photo
              </span> */}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
