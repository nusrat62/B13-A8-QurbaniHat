import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, Tag } from "lucide-react";
import AnimalQuickStats from "@/components/animals/AnimalQuickStats";
import BookingSection from "@/components/animals/BookingSection";
import RelatedAnimals from "@/components/animals/RelatedAnimals";
import { notFound } from "next/navigation";
import animals from "@/data/animals.json";

// Enable ISR
export const revalidate = 300;

export async function generateMetadata({ params }) {
  const { id } = params;
  const animal = animals?.find((a) => a.id === parseInt(id));

  if (!animal) {
    return {
      title: "Animal Not Found | QurbaniHat",
      description: "The animal you're looking for could not be found.",
    };
  }

  return {
    title: `${animal.name} - ${animal.breed} ${animal.type} | QurbaniHat`,
    description: `${animal.description} Located in ${animal.location}. Weight: ${animal.weight}kg, Age: ${animal.age} years. Price: ৳${animal.price.toLocaleString()}.`,
  };
}

const AnimalDetailsPage = async ({ params }) => {
  const { id } = params;
  const animal = animals?.find((a) => a.id === parseInt(id));

  if (!animal) {
    notFound();
  }

  const allAnimals = animals || [];

  return (
    <div className="min-h-screen bg-background pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
      <div className="xl:container mx-auto px-4">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm sm:text-base font-body mb-6 sm:mb-8 lg:mb-10">
          <Link href="/" className="text-muted hover:text-primary">
            Home
          </Link>

          <ChevronRight className="w-4 h-4 text-muted" />

          <Link href="/animals" className="text-muted hover:text-primary">
            All Animals
          </Link>

          <ChevronRight className="w-4 h-4 text-muted" />

          <span className="text-body font-medium truncate">
            {animal.name}
          </span>
        </nav>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Image */}
          <div className="space-y-6">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden border shadow-lg">
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <AnimalQuickStats animal={animal} />
          </div>

          {/* Details */}
          <div className="space-y-6">

            <div className="flex gap-3 flex-wrap">
              <span className="px-3 py-1 bg-primary text-white rounded-full text-sm">
                <Tag className="inline w-4 h-4 mr-1" />
                {animal.category}
              </span>

              <span className="px-3 py-1 bg-accent text-primary rounded-full text-sm">
                {animal.type}
              </span>
            </div>

            <h1 className="text-3xl font-bold">{animal.name}</h1>

            <div className="flex items-center gap-2 text-muted">
              <MapPin className="w-5 h-5" />
              {animal.location}
            </div>

            <div className="text-3xl font-bold text-primary">
              ৳{animal.price.toLocaleString()}
            </div>

            <p className="text-body leading-relaxed">
              {animal.description}
            </p>

            <BookingSection animalId={animal.id} />
          </div>

        </div>

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