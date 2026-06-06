import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JAS ARCHITECT | Luxury Architecture & Interior Design Studio",
  description: "JAS ARCHITECT designs bespoke, high-end residential, architectural, and interior marvels. Explore our portfolio of luxury estates, modern spaces, and bespoke spatial plans.",
  keywords: ["JAS ARCHITECT", "Luxury Architecture", "Interior Design", "Architectural Blueprints", "Naksha", "3D Elevation", "Modern Houses"],
  openGraph: {
    title: "JAS ARCHITECT | Luxury Architecture & Interior Design Studio",
    description: "Bespoke, high-end residential, architectural, and interior marvels.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} h-full scroll-smooth antialiased`}
    >
      <body className="bg-luxury-black text-luxury-offwhite font-sans min-h-screen flex flex-col overflow-x-hidden selection:bg-luxury-gold selection:text-luxury-black">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
