const ProfileLoadingSkeleton = () => {
  return (
    <div className="min-h-screen bg-background pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
      <div className="xl:container mx-auto px-4">
        {/* Page Header Skeleton */}
        <div className="mb-8 sm:mb-10 lg:mb-12 space-y-3">
          <div className="h-10 sm:h-12 lg:h-14 w-64 bg-surface border border-border rounded-lg animate-pulse" />
          <div className="h-5 w-80 bg-surface border border-border rounded animate-pulse" />
        </div>

        {/* Profile Card Skeleton */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface border-2 border-border rounded-2xl overflow-hidden shadow-lg">
            {/* Banner Section Skeleton */}
            <div className="h-32 sm:h-40 lg:h-48 bg-linear-to-br from-surface to-background animate-pulse" />

            {/* Main Content */}
            <div className="px-6 sm:px-8 lg:px-12">
              {/* Avatar and Basic Info Section Skeleton */}
              <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 -mt-14 sm:-mt-16 lg:-mt-20 mb-8 sm:mb-10">
                {/* Avatar Skeleton */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full bg-background border-4 border-surface shadow-xl animate-pulse" />

                {/* User Basic Info Skeleton */}
                <div className="flex-1 pb-2 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <div className="h-8 sm:h-10 lg:h-12 w-64 bg-background border border-border rounded-lg animate-pulse" />
                    <div className="h-7 w-24 bg-background border border-border rounded-full animate-pulse" />
                  </div>

                  <div className="space-y-2">
                    <div className="h-5 w-72 bg-background border border-border rounded animate-pulse" />
                    <div className="h-5 w-64 bg-background border border-border rounded animate-pulse" />
                  </div>
                </div>

                {/* Update Profile Button Skeleton - Desktop */}
                <div className="hidden sm:block pb-2">
                  <div className="h-11 w-40 bg-background border border-border rounded-lg animate-pulse" />
                </div>
              </div>

              {/* Stats Cards Skeleton */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-background border-2 border-border rounded-xl p-4 sm:p-5 space-y-3 animate-pulse"
                  >
                    <div className="h-5 w-20 bg-surface border border-border rounded" />
                    <div className="h-8 w-24 bg-surface border border-border rounded-lg" />
                  </div>
                ))}
              </div>

              {/* Detailed Information Section Skeleton */}
              <div className="border-t-2 border-border pt-8 sm:pt-10 pb-8 sm:pb-10">
                <div className="h-7 sm:h-8 w-64 bg-background border border-border rounded-lg mb-6 sm:mb-8 animate-pulse" />

                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className="bg-background border border-border rounded-xl p-4 sm:p-5 space-y-3 animate-pulse"
                    >
                      <div className="h-4 w-32 bg-surface border border-border rounded" />
                      <div className="h-6 w-48 bg-surface border border-border rounded-lg" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Update Profile Button Skeleton - Mobile */}
              <div className="sm:hidden border-t-2 border-border pt-6 pb-6">
                <div className="h-14 w-full bg-background border border-border rounded-lg animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLoadingSkeleton;
