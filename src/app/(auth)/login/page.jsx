import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";
import GoogleSignInButton from "@/components/auth/GoogleSignInButton";


export const metadata = {
  title: "Login - Sign In to Your Account | QurbaniHat",
  description: "Sign in to your QurbaniHat account to book animals, manage your profile, and access exclusive features. Login with email or Google.",
};

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6 lg:p-8 pt-24 sm:pt-28 lg:pt-32">
      <div className="w-full max-w-md space-y-8">
        {/* Form Header */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-heading">
            Welcome Back
          </h1>
          <p className="text-sm sm:text-base text-muted font-body">
            Sign in to your QurbaniHat account
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
                or sign in with email
              </span>
            </div>
          </div>

          {/* Email Login Form */}
          <LoginForm />
        </div>

        {/* Form Footer */}
        <div className="text-center space-y-4">
          <p className="text-sm sm:text-base text-muted font-body">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-accent font-semibold hover:text-accent-hover hover:underline transition-colors duration-200"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
