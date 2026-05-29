import { AnimatedSection } from "@/components/animated-section";
import { DestinationMapLoader } from "@/components/destination-map-loader";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Destination Guide | Andean Luxury Resort"
};

export default function DestinationPage() {
  return (
    <main className="px-5 pt-32 md:px-8">
      <AnimatedSection className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Destination Guide"
          title="Interactive intelligence for Salta's finest restaurants, vineyards, culture, and essential services."
          copy="This section turns the hotel website into a living guest platform, helping travelers make better decisions before they arrive."
        />
      </AnimatedSection>
      <AnimatedSection className="mx-auto max-w-7xl py-14">
        <DestinationMapLoader />
      </AnimatedSection>
    </main>
  );
}
