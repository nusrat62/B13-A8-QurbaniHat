import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { Toaster } from "sonner";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "QurbaniHat - Modern Livestock Marketplace for Eid-ul-Adha",
  description:
    "QurbaniHat is a modern livestock marketplace built specifically for Eid-ul-Adha (Qurbani) season. It allows users to browse cows, goats, and other sacrificial animals, view detailed information, and place bookings — all through a clean, authenticated web experience.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
    >
      <body>
        <Navbar />
        <main className="bg-background">{children}</main>
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
