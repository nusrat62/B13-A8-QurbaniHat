import BreedCard from "./BreedCard";

const TopBreeds = async () => {
  // Fetch top breeds from the API
  const res = await fetch("http://localhost:3000/api/animals", {
  next: { revalidate: 300 },
});
  const data = await res.json();

  // Extract top breeds from the API response
  const breeds = data.topBreeds;

  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="xl:container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-16">
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-3 mb-5 opacity-70">
            <div className="w-12 h-0.5 bg-gradient-accent rounded-full" />
            <span className="text-accent text-xl font-bold">◆</span>
            <div className="w-12 h-0.5 bg-gradient-accent rounded-full" />
          </div>

          {/* Main Heading */}
          <h2 className="font-heading text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-heading mb-3 tracking-tight">
            Top Breeds This Season
          </h2>

          {/* Supporting Description */}
          <p className="font-body text-base sm:text-lg text-muted max-w-130 mx-auto leading-relaxed">
            Popular breeds chosen by buyers for quality and size
          </p>
        </div>

        {/* Breeds Grid - Desktop / Scrollable - Mobile */}
        <div className="overflow-x-auto xl:overflow-visible -mx-4 px-4 sm:-mx-6 sm:px-6 xl:mx-0 xl:px-0">
          <div className="flex xl:grid xl:grid-cols-5 gap-5 xl:gap-6 min-w-max xl:min-w-0">
            {breeds.map((breed) => (
              <BreedCard key={breed.id} breed={breed} />
            ))}
          </div>
        </div>

        {/* Scroll Hint for Mobile */}
        <div className="xl:hidden mt-6 text-center">
          <p className="font-body text-xs text-muted italic">
            ← Swipe to see more breeds →
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopBreeds;
