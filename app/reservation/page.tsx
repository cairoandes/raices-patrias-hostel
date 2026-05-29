import { Suspense } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { ReservationFlow } from "@/components/reservation-flow";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Reservation System | Andean Luxury Resort"
};

export default function ReservationPage() {
  return (
    <main className="px-5 pt-32 md:px-8">
      <AnimatedSection className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Reservation System"
          title="A cinematic booking flow with a mock Google Sheet backend."
          copy="Every confirmed reservation is saved through a service layer that can later connect to Google Sheets without changing the frontend architecture."
        />
      </AnimatedSection>
      <AnimatedSection className="mx-auto max-w-7xl py-14">
        <Suspense fallback={<div className="glass min-h-[500px] animate-pulse" />}>
          <ReservationFlow />
        </Suspense>
      </AnimatedSection>
    </main>
  );
}
