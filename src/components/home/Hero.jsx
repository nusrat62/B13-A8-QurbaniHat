import Link from "next/link";
import "animate.css";

const Hero = () => {
  return (
    <section className="relative w-full min-h-dvh overflow-hidden">
      {/* Layer 1 — Base Image */}
      <div className="absolute inset-0 bg-cover bg-center hero-bg-image animate__animated animate__fadeIn" />

      {/* Layer 2 — Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient-overlay animate__animated animate__fadeIn" />

      {/* Content Container */}
      <div className="xl:container mx-auto relative z-10 px-4 flex items-center min-h-dvh">
        <div className="w-full max-w-4xl mx-auto lg:mx-0 text-center md:text-left py-8 sm:py-12">
          {/* Top Badge */}
          <div
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5 lg:mb-6 bg-gradient-accent-soft border border-accent/40 backdrop-blur-sm animate__animated animate__fadeInDown"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            <span className="text-lg sm:text-xl">🌙</span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-accent uppercase">
              Eid-ul-Adha 2026
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-4 sm:mb-5 lg:mb-6 font-heading capitalize">
            <span
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold text-white leading-[1.1] sm:leading-[1.15] tracking-tight animate__animated animate__fadeInLeft"
              style={{ animationDelay: "0.4s", animationFillMode: "both" }}
            >
              Choose
            </span>
            <span
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold text-white leading-[1.1] sm:leading-[1.15] tracking-tight animate__animated animate__fadeInLeft"
              style={{ animationDelay: "0.6s", animationFillMode: "both" }}
            >
              your favorite
            </span>
            <span
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold leading-[1.1] sm:leading-[1.15] tracking-tight bg-gradient-accent bg-clip-text text-transparent animate__animated animate__fadeInLeft animate__slow"
              style={{ animationDelay: "0.8s", animationFillMode: "both" }}
            >
              sacrificial animal
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-sm sm:text-[15px] md:text-base lg:text-[17px] leading-relaxed sm:leading-[1.65] max-w-xl lg:max-w-2xl mx-auto md:mx-0 font-body text-white/75 sm:text-white/78 px-2 sm:px-0 animate__animated animate__fadeInUp"
            style={{ animationDelay: "1s", animationFillMode: "both" }}
          >
            Browse premium healthy livestock for Qurbani — cows, goats, and
            more. Book with confidence.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3 sm:gap-3.5 lg:gap-4 mt-7 sm:mt-8 lg:mt-9 animate__animated animate__fadeInUp"
            style={{ animationDelay: "1.2s", animationFillMode: "both" }}
          >
            <Link
              href="/animals"
              className="w-full sm:w-auto px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-[15px] lg:text-base font-bold rounded-lg sm:rounded-xl transition-all duration-200 hover:scale-[1.02] sm:hover:scale-105 hover:brightness-110 active:scale-[0.98] bg-gradient-accent shadow-accent font-body text-primary text-center"
            >
              Browse All Animals →
            </Link>
            <Link
              href="#how-it-works"
              className="w-full sm:w-auto px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-[15px] lg:text-base font-medium text-white rounded-lg sm:rounded-xl transition-all duration-200 hover:bg-white/15 active:bg-white/20 font-body bg-white/8 border-[1.5px] border-white/30 backdrop-blur-sm text-center"
            >
              How It Works
            </Link>
          </div>

          {/* Stats Row */}
          <div
            className="flex items-center justify-center md:justify-start gap-4 sm:gap-6 lg:gap-8 mt-10 sm:mt-12 lg:mt-14 flex-wrap animate__animated animate__fadeInUp"
            style={{ animationDelay: "1.4s", animationFillMode: "both" }}
          >
            {[
              { number: "200+", label: "Premium Animals" },
              { number: "6+", label: "Breeds Available" },
              { number: "48hr", label: "Booking Confirmation" },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-4 sm:gap-6 lg:gap-8"
              >
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-[28px] font-bold font-heading text-accent drop-shadow-lg">
                    {stat.number}
                  </div>
                  <div className="text-[10px] sm:text-xs lg:text-sm mt-0.5 sm:mt-1 font-body text-white/60 whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
                {index < 2 && (
                  <div className="hidden xs:block w-px h-8 sm:h-10 lg:h-12 bg-white/15" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
