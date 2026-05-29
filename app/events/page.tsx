import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/button";
import { SectionHeading } from "@/components/section-heading";
import { images } from "@/lib/assets";

const events = [
  ["Weddings", images.wedding, "Ceremonies framed by the Andes, with private dining, floral direction, and full guest logistics."],
  ["Conferences", images.conference, "Board-level meeting environments with discreet technology and flawless hospitality operations."],
  ["Corporate Events", images.lobby, "Executive retreats, incentive travel, launches, and high-touch brand gatherings."],
  ["Luxury Celebrations", images.pool, "Milestone weekends, private buyouts, chef-led receptions, and bespoke entertainment."]
];

export const metadata = {
  title: "Events & Corporate | Andean Luxury Resort"
};

export default function EventsPage() {
  return (
    <main className="px-5 pt-32 md:px-8">
      <AnimatedSection className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Events & Corporate"
          title="Commercial pages that sell premium occasions, not banquet packages."
          copy="A high-value event lead experience for weddings, conferences, corporate events, and luxury celebrations."
        />
      </AnimatedSection>

      <div className="mx-auto grid max-w-7xl gap-5 py-14 md:grid-cols-2">
        {events.map(([title, image, copy]) => (
          <AnimatedSection key={title} className="group relative min-h-[420px] overflow-hidden rounded-sm">
            <Image src={image} alt={title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
            <div className="absolute bottom-0 p-7">
              <h2 className="font-display text-5xl text-white">{title}</h2>
              <p className="mt-4 max-w-xl leading-7 text-white/70">{copy}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="mx-auto mb-24 max-w-7xl glass p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.28em] text-[#d7b56d]">Inquiry Form</p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {["Name", "Email", "Event Type", "Preferred Date"].map((field) => (
            <input key={field} placeholder={field} className="h-13 border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#d7b56d]/50" />
          ))}
        </div>
        <textarea placeholder="Tell us about your event." className="mt-4 min-h-32 w-full border border-white/10 bg-white/5 p-4 text-white outline-none placeholder:text-white/35 focus:border-[#d7b56d]/50" />
        <Button className="mt-4">Submit Event Inquiry</Button>
      </AnimatedSection>
    </main>
  );
}
