import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found | QurbaniHat",
  description: "The page you're looking for doesn't exist or has been moved. Return to QurbaniHat homepage or browse our animals.",
};

export default function NotFound() {
  return (
    <div className="min-h-dvh bg-background flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        {/* Error Code */}
        <div className="mb-6">
          <h1 className="text-8xl sm:text-9xl font-heading font-bold text-primary">
            404
          </h1>
        </div>

        {/* Main Message */}
        <div className="mb-4">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-heading">
            Couldn&apos;t find the animal!
          </h2>
        </div>

        {/* Supporting Text */}
        <div className="mb-10">
          <p className="text-base sm:text-lg text-muted font-body">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4
                       bg-gradient-accent text-primary rounded-lg font-bold font-body
                       shadow-md hover:shadow-lg
                       hover:brightness-110
                       transition-all duration-200"
          >
            <Home className="w-5 h-5" />
            Go Back to Home
          </Link>

          <Link
            href="/animals"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4
                       bg-surface border-2 border-border text-body rounded-lg font-semibold font-body
                       hover:border-accent
                       transition-all duration-200"
          >
            Browse All Animals
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Help Text */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted font-body">
            Need help?{" "}
            <Link
              href="/support"
              className="text-accent hover:text-accent-hover hover:underline font-medium"
            >
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
