const AnimalsLoadingSkeleton = () => {
  return (
    <div className="min-h-dvh bg-background pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
      <div className="xl:container mx-auto px-4">
        {/* Header Section Skeleton */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
          {/* Left Side - Title and Count */}
          <div className="space-y-3">
            <div className="h-10 sm:h-12 lg:h-14 w-64 bg-surface border border-border rounded-lg animate-pulse" />
            <div className="h-5 w-40 bg-surface border border-border rounded-lg animate-pulse" />
          </div>

          {/* Right Side - Sort Control Skeleton */}
          <div className="h-11 w-48 bg-surface border border-border rounded-lg animate-pulse" />
        </div>

        {/* Animal Cards Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="bg-surface border border-border rounded-[14px] overflow-hidden animate-pulse"
            >
              {/* Image Skeleton */}
              <div className="relative h-50 w-full bg-background" />

              {/* Card Body */}
              <div className="p-5 space-y-4">
                {/* Name Skeleton */}
                <div className="h-6 bg-background border border-border rounded-lg w-3/4" />

                {/* Meta Chips Row Skeleton */}
                <div className="flex gap-2 flex-wrap">
                  <div className="h-8 w-24 bg-background border border-border rounded-lg" />
                  <div className="h-8 w-20 bg-background border border-border rounded-lg" />
                  <div className="h-8 w-20 bg-background border border-border rounded-lg" />
                </div>

                {/* Price Skeleton */}
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-background border border-border rounded" />
                  <div className="h-8 w-32 bg-background border border-border rounded-lg" />
                </div>

                {/* Divider */}
                <div className="border-t border-border pt-4">
                  {/* Button Skeleton */}
                  <div className="h-11 w-full bg-background border border-border rounded-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimalsLoadingSkeleton;
