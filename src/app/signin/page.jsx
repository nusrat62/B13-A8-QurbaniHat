"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { GrGoogle } from "react-icons/gr";

export default function SignInPage() {

  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    setLoading(false);

    if (error) {
      setErrorMessage(error.message || "Login Failed");
      return;
    }

    router.push("/");
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F1FFF7] via-[#F8FFFB] to-[#E9F8F0] px-4 py-10">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-[#2D6A4F]">
            Login
          </h1>

          <p className="text-gray-500 mt-2">
            Login to your account
          </p>

        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#40916C]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              required
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#40916C]"
            />
          </div>

          {/* Error Message */}
          {
            errorMessage && (
              <p className="text-red-500 text-sm">
                {errorMessage}
              </p>
            )
          }

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#40916C] hover:bg-[#2D6A4F] text-white font-semibold py-3 rounded-xl transition"
          >
            {
              loading ? "Logging In..." : "Login"
            }
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">

          <div className="flex-1 h-[1px] bg-gray-200"></div>

          <p className="text-gray-400 text-sm">
            OR
          </p>

          <div className="flex-1 h-[1px] bg-gray-200"></div>

        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50"
        >
          <GrGoogle />
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">

          Don&apos;t have an account?

          <Link
            href="/signup"
            className="text-[#40916C] font-semibold ml-1 hover:underline"
          >
            Register
          </Link>

        </p>

      </div>
    </div>
  );
}