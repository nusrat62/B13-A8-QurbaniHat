"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProfilePage = () => {

  const router = useRouter();

  // user session
  const { data, isPending } = authClient.useSession();

  const user = data?.user;

  // redirect if not logged in
  useEffect(() => {
    if (!isPending && !user) {
      router.push("/signin");
    }
  }, [user, isPending, router]);

  // loading state
  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">

        <span className="loading loading-spinner loading-lg text-success"></span>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F1FFF7] via-[#F8FFFB] to-[#E9F8F0] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 text-center">

        {/* Avatar */}
        <div className="flex justify-center">

          <Avatar
            src={user?.image}
            name={user?.name}
            className="w-28 h-28 text-3xl border-4 border-[#40916C]"
          />

        </div>

        {/* Name */}
        <h1 className="text-3xl font-bold text-[#2D6A4F] mt-5">
          {user?.name}
        </h1>

        {/* Email */}
        <p className="text-gray-500 mt-2">
          {user?.email}
        </p>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200 my-6"></div>

        {/* User Info */}
        <div className="space-y-4 text-left">

          <div className="bg-[#F8FFFB] border border-[#d8f3dc] rounded-xl p-4">

            <p className="text-sm text-gray-500">
              Full Name
            </p>

            <h2 className="font-semibold text-lg text-gray-800">
              {user?.name}
            </h2>

          </div>

          <div className="bg-[#F8FFFB] border border-[#d8f3dc] rounded-xl p-4">

            <p className="text-sm text-gray-500">
              Email Address
            </p>

            <h2 className="font-semibold text-lg text-gray-800">
              {user?.email}
            </h2>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProfilePage;