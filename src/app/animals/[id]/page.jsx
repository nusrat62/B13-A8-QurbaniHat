import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, Tag } from "lucide-react";
import AnimalQuickStats from "@/components/animals/AnimalQuickStats";
import BookingSection from "@/components/animals/BookingSection";
import RelatedAnimals from "@/components/animals/RelatedAnimals";
import { notFound } from "next/navigation";

// Enable ISR with 5-minute revalidation
export const revalidate = 300;

export async function generateMetadata({ params }) {
  const { id } = await params;
  
  const response = await fetch(process.env.ANIMALS_API_URL, {
    next: { revalidate: 300 },
    cache: "force-cache",
  });
  const data = await response.json();
  const animal = data.animals.find((a) => a.id === parseInt(id));

  if (!animal) {
    return {
      title: "Animal Not Found | QurbaniHat",
      description: "The animal you're looking for could not be found.",
    };
  }

  return {
    title: `${animal.name} - ${animal.breed} ${animal.type} | QurbaniHat`,
    description: `${animal.description} Located in ${animal.location}. Weight: ${animal.weight}kg, Age: ${animal.age} years. Price: ৳${animal.price.toLocaleString()}. Book now for Eid-ul-Adha.`,
  };
}

const AnimalDetailsPage = async ({ params }) => {
  const { id } = await params;

  // Fetch animal data
  const response = await fetch(process.env.ANIMALS_API_URL, {
    next: { revalidate: 300 },
    cache: "force-cache",
  });
  const data = await response.json();
  const animal = data.animals.find((a) => a.id === parseInt(id));
  const allAnimals = data.animals;

  // If animal not found, show 404
  if (!animal) {
    notFound();
  }

  return (
    <div className="min-h-dvh bg-background pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
      <div className="xl:container mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm sm:text-base font-body mb-6 sm:mb-8 lg:mb-10">
          <Link
            href="/"
            className="text-muted hover:text-primary transition-colors duration-200"
          >
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-muted" />
          <Link
            href="/animals"
            className="text-muted hover:text-primary transition-colors duration-200"
          >
            All Animals
          </Link>
          <ChevronRight className="w-4 h-4 text-muted" />
          <span className="text-body font-medium truncate max-w-37.5 sm:max-w-none">
            {animal.name}
          </span>
        </nav>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column — Image & Quick Info */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-background border-2 border-border shadow-lg group">
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              {/* Featured Badge if applicable */}
              {animal.featured && (
                <div className="absolute top-4 right-4 bg-gradient-accent text-primary px-4 py-2 rounded-full text-xs sm:text-sm font-bold font-body shadow-lg backdrop-blur-sm">
                  ⭐ Featured
                </div>
              )}
            </div>

            {/* Quick Stats */}
            <AnimalQuickStats animal={animal} />
          </div>

          {/* Right Column — Animal Details */}
          <div className="space-y-6 lg:space-y-8">
            {/* Top Information */}
            <div className="space-y-4">
              {/* Badges */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-background text-xs sm:text-sm font-semibold rounded-full font-body">
                  <Tag className="w-3.5 h-3.5" />
                  {animal.category}
                </span>
                <span className="inline-flex items-center px-3 py-1.5 bg-gradient-accent text-primary text-xs sm:text-sm font-bold rounded-full font-body">
                  {animal.type}
                </span>
              </div>

              {/* Animal Name */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-heading">
                {animal.name}
              </h1>

              {/* Location */}
              <div className="flex items-center gap-2 text-muted">
                <MapPin className="w-5 h-5" />
                <span className="text-base sm:text-lg font-body">
                  {animal.location}
                </span>
              </div>
            </div>

            {/* Price Section */}
            <div className="bg-gradient-accent-soft border-2 border-accent/40 rounded-xl p-6 sm:p-8">
              <p className="text-sm sm:text-base text-muted font-body mb-2">
                Price
              </p>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-3">
                <span className="text-2xl sm:text-3xl lg:text-4xl">৳</span>
                {animal.price.toLocaleString()}
              </p>
              <p className="text-xs sm:text-sm text-muted font-body">
                Negotiable · Contact for bulk discount
              </p>
            </div>

            {/* Description Section */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-heading">
                About This Animal
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-body font-body">
                {animal.description}
              </p>
            </div>

            {/* Booking Section */}
            <BookingSection animalId={animal.id} />
          </div>
        </div>

        {/* Related Animals Section */}
        <RelatedAnimals
          animals={allAnimals}
          currentAnimalId={animal.id}
          currentAnimalType={animal.type}
        />
      </div>
    </div>
  );
};

export default AnimalDetailsPage;
