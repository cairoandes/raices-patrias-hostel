import { AnimatedSection } from "@/components/animated-section";
import { AdminAnalytics } from "@/components/admin-analytics";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Admin Analytics Demo | Andean Luxury Resort"
};

export default function AdminPage() {
  return (
    <main className="px-5 pt-32 md:px-8">
      <AnimatedSection className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Admin Analytics Demo"
          title="A beautiful operating dashboard for hotel owners."
          copy="Reservations, revenue, occupancy, room demand, and upcoming arrivals are presented in a polished owner-facing interface."
        />
      </AnimatedSection>
      <AnimatedSection className="mx-auto max-w-7xl py-14">
        <AdminAnalytics />
      </AnimatedSection>
    </main>
  );
}
