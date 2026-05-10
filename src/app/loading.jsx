const HomeLoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-4 border-border rounded-full"></div>
          {/* Spinning Ring */}
          <div className="absolute inset-0 border-4 border-transparent border-t-primary border-r-primary rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-2">
          <p className="text-lg sm:text-xl font-heading font-bold text-heading">
            Loading QurbaniHat
          </p>
          <p className="text-sm sm:text-base text-muted font-body">
            Please wait while we prepare your experience...
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeLoadingSpinner;
