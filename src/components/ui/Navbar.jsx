"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

const Navbar = () => {
  // Get current pathname for active link styling
  const pathname = usePathname();

  const router = useRouter();

  // Get the current session to determine if the user is logged in
  const { data: session, isPending } = authClient.useSession();

  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      toast.success("Logged Out", {
        description: "You have been successfully logged out.",
      });
      setIsMenuOpen(false);
      router.push("/");
    } catch (error) {
      toast.error("Logout Failed", {
        description: "Unable to log out. Please try again.",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-primary shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-primary-hover/50 backdrop-blur-sm">
      <div className="xl:container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2 shrink-0 group"
          >
            <Image
              src="/logo-light.png"
              alt="Qurbani Hat Logo"
              width={56}
              height={56}
              className="w-9 h-9 sm:w-11 sm:h-11 lg:w-14 lg:h-14 transition-transform duration-200 group-hover:scale-105"
              priority
            />
            <Image
              src="/brand-name-light.png"
              alt="Qurbani Hat Brand"
              width={160}
              height={80}
              className="w-20 h-10 sm:w-28 sm:h-14 lg:w-40 lg:h-20 object-contain transition-transform duration-200 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              href="/"
              className={`text-background hover:text-white font-medium text-sm lg:text-base px-3 lg:px-4 py-2 rounded-lg
                         hover:bg-primary-hover/80 hover:-translate-y-0.5
                         transition-all duration-200 active:scale-95
                         ${pathname === "/" ? "bg-primary-hover/80 text-white" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/animals"
              className={`text-background hover:text-white font-medium text-sm lg:text-base px-3 lg:px-4 py-2 rounded-lg
                         hover:bg-primary-hover/80 hover:-translate-y-0.5
                         transition-all duration-200 active:scale-95
                         ${pathname.startsWith("/animals") ? "bg-primary-hover/80 text-white" : ""}`}
            >
              All Animals
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {isPending ? (
              // Loading Skeleton - Desktop
              <div className="flex items-center gap-2 lg:gap-3">
                {/* Avatar Skeleton */}
                <div className="flex items-center gap-2 p-1 pr-3 rounded-full bg-background/10 border-2 border-background/30 animate-pulse">
                  <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-background/30" />
                  <div className="h-4 w-20 bg-background/30 rounded" />
                </div>
                {/* Logout Button Skeleton */}
                <div className="h-10 w-24 lg:w-28 bg-background/30 rounded-lg animate-pulse" />
              </div>
            ) : session?.user ? (
              // Logged In State - Avatar Link + Logout Button
              <>
                <Link
                  href="/profile"
                  className="flex items-center gap-2 p-1 pr-3 rounded-full bg-background/10 hover:bg-background/20
                             border-2 border-background/30 hover:border-background/50
                             transition-all duration-200 hover:scale-105 active:scale-95
                             focus:outline-none focus:ring-2 focus:ring-background/50"
                  aria-label="Go to profile"
                  title={session.user.name}
                >
                  <Image
                    src={session.user.image}
                    alt={session.user.name}
                    width={40}
                    height={40}
                    className="w-9 h-9 lg:w-10 lg:h-10 rounded-full object-cover border-2 border-background/50"
                  />
                  <span className="text-background text-sm lg:text-base font-medium max-w-32 truncate">
                    {session.user.name}
                  </span>
                </Link>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 lg:px-5 py-2 text-sm lg:text-base text-white bg-danger border-2 border-danger rounded-lg
                             hover:bg-danger-hover hover:border-danger-hover
                             hover:-translate-y-0.5 hover:shadow-lg
                             font-semibold transition-all duration-200 active:scale-95"
                  aria-label="Logout"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              // Logged Out State
              <>
                <Link
                  href="/login"
                  className="px-4 lg:px-5 py-2 text-sm lg:text-base text-background border-2 border-background rounded-lg
                             hover:bg-background hover:text-primary
                             hover:-translate-y-0.5 hover:shadow-lg
                             font-semibold transition-all duration-200 active:scale-95"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="px-4 lg:px-5 py-2 lg:py-2.5 text-sm lg:text-base bg-gradient-accent text-primary rounded-lg font-semibold
                             shadow-md hover:shadow-xl
                             hover:brightness-110 hover:saturate-125
                             hover:-translate-y-0.5 hover:scale-[1.02]
                             transition-all duration-200 active:scale-95"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-background
                       hover:bg-primary-hover/80 hover:scale-105 active:scale-95
                       transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-background/50"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-primary-hover/50 bg-primary animate-in slide-in-from-top-2 duration-200">
            <div className="px-2 sm:px-4 py-4 space-y-2">
              {/* Mobile Navigation */}
              <Link
                href="/"
                onClick={toggleMenu}
                className={`block px-4 py-2.5 text-background hover:text-white rounded-lg font-medium text-sm
                           hover:bg-primary-hover/80 active:bg-primary-hover
                           transition-all duration-200
                           ${pathname === "/" ? "bg-primary-hover/80 text-white" : ""}`}
              >
                Home
              </Link>

              <Link
                href="/animals"
                onClick={toggleMenu}
                className={`block px-4 py-2.5 text-background hover:text-white rounded-lg font-medium text-sm
                           hover:bg-primary-hover/80 active:bg-primary-hover
                           transition-all duration-200
                           ${pathname.startsWith("/animals") ? "bg-primary-hover/80 text-white" : ""}`}
              >
                All Animals
              </Link>

              {/* Mobile Actions */}
              <div className="pt-3 border-t border-primary-hover/50 space-y-2">
                {isPending ? (
                  // Loading Skeleton - Mobile
                  <div className="space-y-2">
                    {/* Profile Card Skeleton */}
                    <div className="flex items-center gap-3 px-4 py-3 bg-background/10 rounded-xl border-2 border-background/20 animate-pulse">
                      <div className="w-12 h-12 rounded-full bg-background/30" />
                      <div className="flex flex-col flex-1 gap-2">
                        <div className="h-4 w-32 bg-background/30 rounded" />
                        <div className="h-3 w-40 bg-background/30 rounded" />
                      </div>
                    </div>
                    {/* Logout Button Skeleton */}
                    <div className="h-12 w-full bg-background/30 rounded-lg animate-pulse" />
                  </div>
                ) : session?.user ? (
                  // Logged In State (Mobile)
                  <>
                    <Link
                      href="/profile"
                      onClick={toggleMenu}
                      className="flex items-center gap-3 px-4 py-3 bg-background/10 rounded-xl border-2 border-background/20
                                 hover:bg-background/20 active:scale-95
                                 transition-all duration-200"
                    >
                      <Image
                        src={session.user.image}
                        alt={session.user.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover border-2 border-background/50"
                      />
                      <div className="flex flex-col flex-1 min-w-0">
                        <span className="text-background text-sm font-bold truncate">
                          {session.user.name}
                        </span>
                        <span className="text-background/70 text-xs truncate">
                          {session.user.email}
                        </span>
                      </div>
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full px-5 py-3 text-center text-sm text-white bg-danger border-2 border-danger rounded-lg
                                 hover:bg-danger-hover hover:border-danger-hover active:scale-95
                                 font-semibold transition-all duration-200 shadow-md
                                 flex items-center justify-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </>
                ) : (
                  // Logged Out State (Mobile)
                  <>
                    <Link
                      href="/login"
                      onClick={toggleMenu}
                      className="block px-5 py-2.5 text-center text-sm text-background border-2 border-background rounded-lg
                                 hover:bg-background hover:text-primary active:scale-95
                                 font-semibold transition-all duration-200"
                    >
                      Login
                    </Link>

                    <Link
                      href="/register"
                      onClick={toggleMenu}
                      className="block px-5 py-3 text-center text-sm bg-gradient-accent text-primary rounded-lg
                                 hover:brightness-110 hover:saturate-125 active:scale-95
                                 font-semibold transition-all duration-200 shadow-md"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
