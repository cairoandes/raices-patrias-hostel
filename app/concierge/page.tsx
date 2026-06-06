import { AnimatedSection } from "@/components/animated-section";
import { ConciergeChat } from "@/components/concierge-chat";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Concierge Digital | Raíces Patrias Hostel"
};

export default function ConciergePage() {
  return (
    <main className="px-5 pt-32 md:px-8">
      <AnimatedSection className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Concierge Digital"
          title="Tu guía personal para disfrutar Carlos Paz como un local."
          copy="Preguntá por bares, excursiones, actividades y todo lo que necesites. Tu aventura empieza acá."
        />
      </AnimatedSection>
      <AnimatedSection className="mx-auto max-w-7xl py-14">
        <ConciergeChat />
      </AnimatedSection>
    </main>
  );
}
