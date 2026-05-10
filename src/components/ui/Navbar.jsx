"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

const Navbar = () => {
  const pathname = usePathname();
  const safePathname = pathname || ""; // ✅ FIX 1

  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

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
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-primary shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-primary-hover/50 backdrop-blur-sm">
      <div className="xl:container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2 shrink-0 group">
            <Image src="/logo-light.png" alt="Logo" width={56} height={56} className="w-9 h-9 sm:w-11 sm:h-11 lg:w-14 lg:h-14" priority />
            <Image src="/brand-name-light.png" alt="Brand" width={160} height={80} className="w-20 h-10 sm:w-28 sm:h-14 lg:w-40 lg:h-20 object-contain" priority />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">

            <Link
              href="/"
              className={`text-background hover:text-white px-3 py-2 rounded-lg transition-all
              ${safePathname === "/" ? "bg-primary-hover/80 text-white" : ""}`}
            >
              Home
            </Link>

            <Link
              href="/animals"
              className={`text-background hover:text-white px-3 py-2 rounded-lg transition-all
              ${safePathname.startsWith("/animals") ? "bg-primary-hover/80 text-white" : ""}`}  // ✅ FIX 2
            >
              All Animals
            </Link>

          </div>

          {/* Mobile Button */}
          <button onClick={toggleMenu} className="md:hidden p-2 text-background">
            {isMenuOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-primary-hover/50 bg-primary">

            <Link
              href="/"
              onClick={toggleMenu}
              className={`block px-4 py-2 ${safePathname === "/" ? "bg-primary-hover/80 text-white" : ""}`}
            >
              Home
            </Link>

            <Link
              href="/animals"
              onClick={toggleMenu}
              className={`block px-4 py-2 ${safePathname.startsWith("/animals") ? "bg-primary-hover/80 text-white" : ""}`} // ✅ FIX 3
            >
              All Animals
            </Link>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;