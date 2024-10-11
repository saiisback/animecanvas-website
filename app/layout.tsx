"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Preloader from "@/components/preLoader";

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
  const [loading, setLoading] = useState(true); // Start loading as true initially
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop preloader after a delay
    }, 1000); // Adjust the delay time as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${poppins.variable} bg-white antialiased`}>
        {loading ? <Preloader /> : (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
