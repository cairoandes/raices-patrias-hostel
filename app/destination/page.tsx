import { AnimatedSection } from "@/components/animated-section";
import { DestinationMapLoader } from "@/components/destination-map-loader";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Guía Local | Raíces Patrias Hostel"
};

export default function DestinationPage() {
  return (
    <main className="px-5 pt-32 md:px-8">
      <AnimatedSection className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Guía Local"
          title="Descubre Carlos Paz como un local, no como un turista."
          copy="Lagos, montañas, bares, restaurantes y los mejores spots para que tu estadía sea inolvidable."
        />
      </AnimatedSection>
      <AnimatedSection className="mx-auto max-w-7xl py-14">
        <DestinationMapLoader />
      </AnimatedSection>
    </main>
  );
}
