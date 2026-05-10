import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
      <div className="xl:container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6 py-16 sm:py-20 lg:py-24">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-accent-soft flex items-center justify-center">
              <AlertCircle className="w-10 h-10 sm:w-12 sm:h-12 text-accent" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-heading">
            Animal Not Found
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted font-body">
            Sorry, we couldn&apos;t find the animal you&apos;re looking for. It
            may have been sold or removed from our listings.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/animals"
              className="px-6 py-3 sm:py-3.5 text-sm sm:text-base
                         bg-primary text-background rounded-lg font-semibold font-body
                         hover:bg-primary-hover hover:shadow-lg hover:-translate-y-0.5
                         transition-all duration-200 active:scale-95"
            >
              Browse All Animals
            </Link>

            <Link
              href="/"
              className="px-6 py-3 sm:py-3.5 text-sm sm:text-base
                         bg-surface text-primary border-2 border-border rounded-lg font-semibold font-body
                         hover:border-accent hover:shadow-md hover:-translate-y-0.5
                         transition-all duration-200 active:scale-95"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
