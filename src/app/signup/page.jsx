"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { GrGoogle } from "react-icons/gr";

export default function SignUpPage() {

  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setLoading(true);

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Password Validation
    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters");
      setLoading(false);
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setErrorMessage(
        "Password must contain at least one uppercase letter"
      );
      setLoading(false);
      return;
    }

    if (!/[0-9]/.test(password)) {
      setErrorMessage(
        "Password must contain at least one number"
      );
      setLoading(false);
      return;
    }

    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    setLoading(false);

    if (error) {
      setErrorMessage(error.message || "Registration Failed");
      return;
    }

    router.push("/signin");
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
            Register
          </h1>

          <p className="text-gray-500 mt-2">
            Create your new account
          </p>

        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block mb-2 font-medium">
              Name
            </label>

            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#40916C]"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-2 font-medium">
              Photo URL
            </label>

            <input
              type="text"
              name="image"
              required
              placeholder="Paste your image url"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#40916C]"
            />
          </div>

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
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#40916C]"
            />

            <p className="text-xs text-gray-400 mt-2">
              Must contain 8 characters,
              1 uppercase letter & 1 number
            </p>
          </div>

          {/* Error Message */}
          {
            errorMessage && (
              <p className="text-red-500 text-sm">
                {errorMessage}
              </p>
            )
          }

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#40916C] hover:bg-[#2D6A4F] text-white font-semibold py-3 rounded-xl transition"
          >
            {
              loading ? "Registering..." : "Register"
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

        {/* Google Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50"
        >
          <GrGoogle />
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">

          Already have an account?

          <Link
            href="/signin"
            className="text-[#40916C] font-semibold ml-1 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>
    </div>
  );
}