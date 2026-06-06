import { AnimatedSection } from "@/components/animated-section";
import { ReviewsFilter } from "@/components/reviews-filter";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Reseñas | Raíces Patrias Hostel"
};

export default function ReviewsPage() {
  return (
    <main className="px-5 pt-32 md:px-8">
      <AnimatedSection className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Reseñas"
          title="Lo que dicen nuestros viajeros."
          copy="Experiencias reales de mochileros, nómadas digitales y viajeros que encontraron su hogar lejos del hogar."
        />
      </AnimatedSection>
      <AnimatedSection className="mx-auto max-w-7xl py-14">
        <ReviewsFilter />
      </AnimatedSection>
    </main>
  );
}
