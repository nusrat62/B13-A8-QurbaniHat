import Link from "next/link";
import RegisterForm from "@/components/auth/RegisterForm";
import GoogleSignInButton from "@/components/auth/GoogleSignInButton";

export const metadata = {
  title: "Register - Create Your Account | QurbaniHat",
  description: "Join QurbaniHat today! Create your account to browse premium livestock, book animals for Qurbani, and manage your profile. Sign up with email or Google.",
};

const RegisterPage = () => {
  return (
    <div className="min-h-dvh bg-background flex items-center justify-center p-4 sm:p-6 lg:p-8 pt-24 sm:pt-28 lg:pt-32 pb-16">
      <div className="w-full max-w-md space-y-8">
        {/* Form Header */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-heading">
            Create Account
          </h1>
          <p className="text-sm sm:text-base text-muted font-body">
            Join QurbaniHat and start your Qurbani journey
          </p>
        </div>

        {/* Auth Card */}
        <div className="bg-surface border-2 border-border rounded-2xl p-6 sm:p-8 shadow-lg space-y-6">
          {/* Google Sign-In Button */}
          <GoogleSignInButton />

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-surface text-muted font-body">
                or register with email
              </span>
            </div>
          </div>

          {/* Email Register Form */}
          <RegisterForm />
        </div>

        {/* Form Footer */}
        <div className="text-center space-y-4">
          <p className="text-sm sm:text-base text-muted font-body">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-accent font-semibold hover:text-accent-hover hover:underline transition-colors duration-200"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
