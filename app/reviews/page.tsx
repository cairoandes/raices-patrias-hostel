import { AnimatedSection } from "@/components/animated-section";
import { ReviewsFilter } from "@/components/reviews-filter";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Reviews | Andean Luxury Resort"
};

export default function ReviewsPage() {
  return (
    <main className="px-5 pt-32 md:px-8">
      <AnimatedSection className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Reviews"
          title="Animated social proof for couples, families, and business travelers."
          copy="The review experience is designed to feel like a luxury editorial feature while still giving users fast filtering."
        />
      </AnimatedSection>
      <AnimatedSection className="mx-auto max-w-7xl py-14">
        <ReviewsFilter />
      </AnimatedSection>
    </main>
  );
}
