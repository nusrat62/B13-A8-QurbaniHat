import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import {
  Mail,
  Calendar,
  User,
  Edit,
  Shield,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "My Profile - Account Information | QurbaniHat",
  description: "View and manage your QurbaniHat account information, profile details, and account settings.",
};

const ProfilePage = async () => {
  // Get session from server-side
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { user } = session;

  // Format joined date
  const joinedDate = new Date(user.createdAt).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  // Format full date
  const fullJoinedDate = new Date(user.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Calculate account age
  const accountAge = Math.floor(
    (new Date().getTime() - new Date(user.createdAt).getTime()) /
      (1000 * 60 * 60 * 24),
  );
  const accountAgeText =
    accountAge === 0
      ? "Today"
      : accountAge === 1
        ? "1 day ago"
        : `${accountAge} days ago`;

  // Get user initials for fallback avatar
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-dvh bg-background pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
      <div className="xl:container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-heading mb-2">
            My Profile
          </h1>
          <p className="text-sm sm:text-base text-muted font-body">
            View and manage your account information
          </p>
        </div>

        {/* Profile Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface border-2 border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Banner Section with Pattern */}
            <div className="h-32 sm:h-40 lg:h-48 bg-linear-to-br from-primary via-primary-hover to-accent relative overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-background rounded-full -translate-x-32 -translate-y-32" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-background rounded-full translate-x-48 translate-y-48" />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-primary/30 to-transparent" />
            </div>

            {/* Main Content */}
            <div className="px-6 sm:px-8 lg:px-12">
              {/* Avatar and Basic Info Section */}
              <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 -mt-14 sm:-mt-16 lg:-mt-20 mb-8 sm:mb-10">
                {/* Avatar with Status Badge */}
                <div className="relative">
                  {user.image ? (
                    <div className="relative w-fit">
                      <Image
                        src={user.image}
                        alt={user.name}
                        width={160}
                        height={160}
                        className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-surface shadow-xl ring-4 ring-accent/20"
                      />
                      {/* Verification Badge */}
                      {user.emailVerified && (
                        <div className="absolute bottom-1 right-1 w-8 h-8 sm:w-9 sm:h-9 bg-success rounded-full border-4 border-surface flex items-center justify-center shadow-lg">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="relative">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-accent border-4 border-surface shadow-xl ring-4 ring-accent/20 flex items-center justify-center">
                        <span className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary">
                          {getInitials(user.name)}
                        </span>
                      </div>
                      {/* Verification Badge */}
                      {user.emailVerified && (
                        <div className="absolute bottom-1 right-1 w-8 h-8 sm:w-9 sm:h-9 bg-success rounded-full border-4 border-surface flex items-center justify-center shadow-lg">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* User Basic Info */}
                <div className="flex-1 pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-heading">
                      {user.name}
                    </h2>
                    {/* Verification Status Badge */}
                    {user.emailVerified ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-success-bg border border-success-border rounded-full text-xs font-semibold text-success-text w-fit">
                        <CheckCircle className="w-3.5 h-3.5" />
                        Verified
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-warning-bg border border-warning-border rounded-full text-xs font-semibold text-warning-text w-fit">
                        <XCircle className="w-3.5 h-3.5" />
                        Unverified
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-sm sm:text-base text-body">
                      <Mail className="w-4 h-4 text-accent shrink-0" />
                      <span className="font-body truncate">{user.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm sm:text-base text-muted">
                      <Calendar className="w-4 h-4 text-accent shrink-0" />
                      <span className="font-body">
                        Joined {joinedDate} • {accountAgeText}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Update Profile Button - Desktop */}
                <div className="hidden sm:block pb-2">
                  <Link
                    href="/update-profile"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 lg:px-6 lg:py-3
                               bg-gradient-accent text-primary rounded-lg font-bold font-body text-sm lg:text-base
                               shadow-md hover:shadow-xl
                               hover:brightness-110 hover:saturate-125
                               hover:-translate-y-0.5 hover:scale-[1.02]
                               transition-all duration-200 active:scale-95"
                  >
                    <Edit className="w-4 h-4" />
                    Edit Profile
                  </Link>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
                {/* Account Status */}
                <div className="bg-linear-to-br from-success-bg to-success-bg border-2 border-success-border rounded-xl p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-success-icon" />
                    <span className="text-xs sm:text-sm font-medium text-success-text font-body">
                      Status
                    </span>
                  </div>
                  <p className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-success-text">
                    Active
                  </p>
                </div>

                {/* Account Age */}
                <div className="bg-linear-to-br from-info-bg to-info-bg border-2 border-info-border rounded-xl p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-info-icon" />
                    <span className="text-xs sm:text-sm font-medium text-info-text font-body">
                      Member For
                    </span>
                  </div>
                  <p className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-info-text">
                    {accountAge === 0 ? "<1" : accountAge} day
                    {accountAge !== 1 ? "s" : ""}
                  </p>
                </div>

                {/* Email Status */}
                <div className="col-span-2 lg:col-span-1 bg-linear-to-br from-warning-bg to-warning-bg border-2 border-warning-border rounded-xl p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-warning-icon" />
                    <span className="text-xs sm:text-sm font-medium text-warning-text font-body">
                      Email Status
                    </span>
                  </div>
                  <p className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-warning-text">
                    {user.emailVerified ? "Verified" : "Pending"}
                  </p>
                </div>
              </div>

              {/* Detailed Information Section */}
              <div className="border-t-2 border-border pt-8 sm:pt-10 pb-8 sm:pb-10">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-heading mb-6 sm:mb-8 flex items-center gap-2">
                  <User className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  Account Information
                </h3>

                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* Full Name */}
                  <div className="bg-background border border-border rounded-xl p-4 sm:p-5 hover:border-accent/40 transition-colors duration-200">
                    <div className="flex items-center gap-2 mb-2">
                      <User className="w-4 h-4 text-accent" />
                      <span className="text-xs sm:text-sm font-medium text-muted font-body uppercase tracking-wide">
                        Full Name
                      </span>
                    </div>
                    <p className="text-base sm:text-lg text-heading font-body font-semibold">
                      {user.name}
                    </p>
                  </div>

                  {/* Email Address */}
                  <div className="bg-background border border-border rounded-xl p-4 sm:p-5 hover:border-accent/40 transition-colors duration-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Mail className="w-4 h-4 text-accent" />
                      <span className="text-xs sm:text-sm font-medium text-muted font-body uppercase tracking-wide">
                        Email Address
                      </span>
                    </div>
                    <p className="text-base sm:text-lg text-heading font-body font-semibold truncate">
                      {user.email}
                    </p>
                  </div>

                  {/* Account Created */}
                  <div className="bg-background border border-border rounded-xl p-4 sm:p-5 hover:border-accent/40 transition-colors duration-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="text-xs sm:text-sm font-medium text-muted font-body uppercase tracking-wide">
                        Account Created
                      </span>
                    </div>
                    <p className="text-base sm:text-lg text-heading font-body font-semibold">
                      {fullJoinedDate}
                    </p>
                  </div>

                  {/* Account Type */}
                  <div className="bg-background border border-border rounded-xl p-4 sm:p-5 hover:border-accent/40 transition-colors duration-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-accent" />
                      <span className="text-xs sm:text-sm font-medium text-muted font-body uppercase tracking-wide">
                        Account Type
                      </span>
                    </div>
                    <p className="text-base sm:text-lg text-heading font-body font-semibold">
                      Email Account
                    </p>
                  </div>
                </div>
              </div>

              {/* Update Profile Button - Mobile */}
              <div className="sm:hidden border-t-2 border-border pt-6 pb-6">
                <Link
                  href="/update-profile"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5
                             bg-gradient-accent text-primary rounded-lg font-bold font-body text-base
                             shadow-md hover:shadow-xl
                             hover:brightness-110 hover:saturate-125
                             hover:-translate-y-0.5 hover:scale-[1.02]
                             transition-all duration-200 active:scale-95"
                >
                  <Edit className="w-5 h-5" />
                  Edit Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
