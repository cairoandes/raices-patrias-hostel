import { AnimatedSection } from "@/components/animated-section";
import { GuestDashboard } from "@/components/guest-dashboard";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Guest Dashboard | Andean Luxury Resort"
};

export default function GuestDashboardPage() {
  return (
    <main className="px-5 pt-32 md:px-8">
      <AnimatedSection className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Guest Dashboard"
          title="A premium post-booking portal for reservation control, service requests, and concierge contact."
        />
      </AnimatedSection>
      <AnimatedSection className="mx-auto max-w-7xl py-14">
        <GuestDashboard />
      </AnimatedSection>
    </main>
  );
}
