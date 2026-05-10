import Link from "next/link";
import AnimalsGrid from "../animals/AnimalsGrid";

const FeaturedAnimals = async () => {
  const res = await fetch("http://localhost:3000/api/animals", {
  next: { revalidate: 300 },
});

  const data = await res.json();

  const featuredAnimals = data.animals.filter(
    (animal) => animal.featured === true
  );

  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="xl:container mx-auto px-4 relative z-10">

        <div className="text-center mb-14 lg:mb-16">
          <h2 className="font-heading text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-heading mb-3 tracking-tight">
            Featured Animals
          </h2>

          <p className="font-body text-base sm:text-lg text-muted max-w-130 mx-auto leading-relaxed">
            Handpicked premium livestock available for Qurbani this season
          </p>
        </div>

        <AnimalsGrid animalsData={featuredAnimals} />

        <div className="mt-14 lg:mt-16 text-center">
          <Link
            href="/animals"
            className="inline-flex items-center gap-2.5 border-2 border-primary text-primary px-10 py-3.5 rounded-xl"
          >
            View All Animals →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedAnimals;