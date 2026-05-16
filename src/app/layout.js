import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "QurbanirHat",
  description: "A modern livestock marketplace where users can explore animals for Qurbani such as cows and goats. Users can view details and place a booking after authentication.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-gray-50 min-h-full flex flex-col">
        <Toaster/>
        {children}
        </body>
    </html>
  );
}
