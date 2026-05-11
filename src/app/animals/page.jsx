import AnimalsGrid from "@/components/animals/AnimalsGrid";
import SortControl from "@/components/animals/SortControl";

export const metadata = {
  title: "All Animals - Browse Qurbani Livestock | QurbaniHat",
  description:
    "Browse our complete collection of Qurbani animals. Filter and sort cows, goats, and sheep by price. Find detailed information on breed, weight, age, and location.",
};

// Enable ISR with 5-minute revalidation
export const revalidate = 300;

const AllAnimalsPage = async ({ searchParams }) => {
  // ✅ FIX: use full URL for server-side fetch
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL || "http://localhost:3000";
  const response = await fetch(`${baseUrl}/api/animals`, {
    next: { revalidate: 300 },
  });

  const data = await response.json();
  let animals = data.animals || [];

  // Get sort order from URL search params
  const params = await searchParams;
  const sortOrder = params?.sort || "";

  // Apply sorting
  if (sortOrder === "low-to-high") {
    animals = [...animals].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high-to-low") {
    animals = [...animals].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="min-h-screen bg-background pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
      <div className="xl:container mx-auto px-4">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-heading mb-2">
              All Animals
            </h1>
            <p className="text-sm sm:text-base text-muted font-body">
              Showing {animals.length} animals
            </p>
          </div>

          <SortControl currentSort={sortOrder} />
        </div>

        {/* Grid */}
        <AnimalsGrid animalsData={animals} />

        {/* Empty State */}
        {animals.length === 0 && (
          <div className="text-center py-16 sm:py-20 lg:py-24">
            <p className="text-lg sm:text-xl text-muted font-body">
              No animals available at the moment.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default AllAnimalsPage;