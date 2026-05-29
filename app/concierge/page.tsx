import { AnimatedSection } from "@/components/animated-section";
import { ConciergeChat } from "@/components/concierge-chat";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Digital Concierge | Andean Luxury Resort"
};

export default function ConciergePage() {
  return (
    <main className="px-5 pt-32 md:px-8">
      <AnimatedSection className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Digital Concierge"
          title="A luxury chat interface that makes the hotel feel attentive before the guest even arrives."
          copy="Responses are mocked for instant demo reliability and can be replaced with a production AI service without redesigning the UI."
        />
      </AnimatedSection>
      <AnimatedSection className="mx-auto max-w-7xl py-14">
        <ConciergeChat />
      </AnimatedSection>
    </main>
  );
}
