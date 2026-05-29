import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LoadingCurtain } from "@/components/loading-curtain";

export const metadata: Metadata = {
  title: "Andean Luxury Resort | Salta, Argentina",
  description:
    "A cinematic luxury resort website demo for Andean Luxury Resort in Salta, Argentina, featuring suites, reservations, concierge, destination guide, and analytics.",
  keywords: [
    "luxury hotel website",
    "Salta resort",
    "Andean Luxury Resort",
    "hotel booking demo",
    "Argentina luxury travel"
  ],
  openGraph: {
    title: "Andean Luxury Resort",
    description: "Experience Salta like never before.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LoadingCurtain />
        <Navigation />
        {children}
        <Footer />
        <div className="noise" />
      </body>
    </html>
  );
}
