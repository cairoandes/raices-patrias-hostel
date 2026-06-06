import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LoadingCurtain } from "@/components/loading-curtain";

export const metadata: Metadata = {
  title: "Raíces Patrias | Hostel Bohemio - Villa Carlos Paz, Córdoba",
  description:
    "Un hoste bohemio en Villa Carlos Paz, Córdoba. Donde las raíces se encuentran: arte, naturaleza, mates y buena vibra.",
  keywords: [
    "hostel Carlos Paz",
    "hostel bohemio",
    "Villa Carlos Paz hospedaje",
    "hostel Córdoba",
    "Raíces Patrias"
  ],
  openGraph: {
    title: "Raíces Patrias - Hostel Bohemio",
    description: "Donde las raíces se encuentran. Villa Carlos Paz, Córdoba.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=80",
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
    <html lang="es">
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
