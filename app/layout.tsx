"use client"
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Metadata } from "next";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // use usePathname instead of router.events
import Preloader from "@/components/preLoader"; // Import your Preloader component

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  // Handle loading state based on route changes
  useEffect(() => {
    setLoading(true); // Start preloader when the route changes
    const timer = setTimeout(() => {
      setLoading(false); // Stop preloader after a delay
    }, 1000); // Adjust the delay time as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, [pathname]); // Trigger effect on route change

  return (
    <html lang="en">
      <body className={`${poppins.variable} bg-white antialiased`}>
        {loading && <Preloader />} {/* Show Preloader during loading */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

