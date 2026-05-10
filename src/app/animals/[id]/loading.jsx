const AnimalDetailLoadingSkeleton = () => {
  return (
    <div className="min-h-dvh bg-background pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
      <div className="xl:container mx-auto px-4">
        {/* Breadcrumb Skeleton */}
        <nav className="flex items-center gap-2 text-sm sm:text-base font-body mb-6 sm:mb-8 lg:mb-10">
          <div className="h-5 w-16 bg-surface border border-border rounded animate-pulse" />
          <div className="w-4 h-4 bg-surface border border-border rounded animate-pulse" />
          <div className="h-5 w-24 bg-surface border border-border rounded animate-pulse" />
          <div className="w-4 h-4 bg-surface border border-border rounded animate-pulse" />
          <div className="h-5 w-32 bg-surface border border-border rounded animate-pulse" />
        </nav>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column — Image & Quick Info Skeleton */}
          <div className="space-y-6">
            {/* Main Image Skeleton */}
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-surface border-2 border-border animate-pulse" />

            {/* Quick Stats Skeleton */}
            <div className="bg-surface border-2 border-border rounded-xl p-6 space-y-4 animate-pulse">
              <div className="h-6 w-40 bg-background border border-border rounded-lg" />
              <div className="grid grid-cols-2 gap-4">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="space-y-2">
                    <div className="h-4 w-20 bg-background border border-border rounded" />
                    <div className="h-6 w-24 bg-background border border-border rounded-lg" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column — Animal Details Skeleton */}
          <div className="space-y-6 lg:space-y-8">
            {/* Badges Skeleton */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="h-8 w-20 bg-surface border border-border rounded-full animate-pulse" />
              <div className="h-8 w-24 bg-surface border border-border rounded-full animate-pulse" />
            </div>

            {/* Animal Name Skeleton */}
            <div className="space-y-3">
              <div className="h-10 sm:h-12 lg:h-14 w-3/4 bg-surface border border-border rounded-lg animate-pulse" />
              <div className="h-6 w-48 bg-surface border border-border rounded-lg animate-pulse" />
            </div>

            {/* Price Section Skeleton */}
            <div className="bg-surface border-2 border-border rounded-xl p-6 sm:p-8 space-y-3 animate-pulse">
              <div className="h-5 w-16 bg-background border border-border rounded" />
              <div className="h-12 w-48 bg-background border border-border rounded-lg" />
              <div className="h-4 w-56 bg-background border border-border rounded" />
            </div>

            {/* Description Section Skeleton */}
            <div className="space-y-4">
              <div className="h-8 w-56 bg-surface border border-border rounded-lg animate-pulse" />
              <div className="space-y-2">
                <div className="h-5 w-full bg-surface border border-border rounded animate-pulse" />
                <div className="h-5 w-full bg-surface border border-border rounded animate-pulse" />
                <div className="h-5 w-3/4 bg-surface border border-border rounded animate-pulse" />
              </div>
            </div>

            {/* Booking Section Skeleton */}
            <div className="bg-surface border-2 border-border rounded-xl p-6 sm:p-8 space-y-4 animate-pulse">
              <div className="h-7 w-48 bg-background border border-border rounded-lg" />
              <div className="h-12 w-full bg-background border border-border rounded-lg" />
            </div>
          </div>
        </div>

        {/* Related Animals Section Skeleton */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="mb-8 sm:mb-10">
            <div className="h-8 sm:h-10 w-64 bg-surface border border-border rounded-lg animate-pulse" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-surface border border-border rounded-[14px] overflow-hidden animate-pulse"
              >
                <div className="relative h-50 w-full bg-background" />
                <div className="p-5 space-y-4">
                  <div className="h-6 bg-background border border-border rounded-lg w-3/4" />
                  <div className="flex gap-2">
                    <div className="h-8 w-24 bg-background border border-border rounded-lg" />
                    <div className="h-8 w-20 bg-background border border-border rounded-lg" />
                  </div>
                  <div className="h-8 w-32 bg-background border border-border rounded-lg" />
                  <div className="border-t border-border pt-4">
                    <div className="h-11 w-full bg-background border border-border rounded-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetailLoadingSkeleton;
