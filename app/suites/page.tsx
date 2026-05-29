import Image from "next/image";
import { Bath, BedDouble, Ruler, Users } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/button";
import { SectionHeading } from "@/components/section-heading";
import { suites } from "@/lib/data";

export const metadata = {
  title: "Suites & Rooms | Andean Luxury Resort"
};

export default function SuitesPage() {
  return (
    <main className="px-5 pt-32 md:px-8">
      <AnimatedSection className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Suites & Rooms"
          title="Private sanctuaries for guests who expect space, silence, and impeccable detail."
          copy="Each room layout is built as a premium sales component: gallery, amenities, capacity, pricing, floor plan, and direct reserve action."
        />
      </AnimatedSection>

      <div className="mx-auto grid max-w-7xl gap-10 py-14">
        {suites.map((suite, index) => (
          <AnimatedSection key={suite.id} className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]" delay={index * 0.05}>
            <div className="grid gap-3 md:grid-cols-[1.5fr_0.8fr]">
              <div className="relative min-h-[420px] overflow-hidden rounded-sm">
                <Image src={suite.gallery[0]} alt={suite.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="grid gap-3">
                {suite.gallery.slice(1).map((image) => (
                  <div key={image} className="relative min-h-48 overflow-hidden rounded-sm">
                    <Image src={image} alt={`${suite.name} gallery`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 24vw" />
                  </div>
                ))}
              </div>
            </div>

            <div className="glass flex flex-col justify-between p-6 md:p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-[#d7b56d]">From ${suite.price} per night</p>
                <h2 className="mt-4 font-display text-5xl text-white">{suite.name}</h2>
                <p className="mt-4 leading-8 text-white/65">{suite.view}</p>
                <div className="mt-7 grid grid-cols-2 gap-3 text-sm text-white/72">
                  <p className="flex items-center gap-2"><Users size={17} className="text-[#d7b56d]" /> {suite.capacity}</p>
                  <p className="flex items-center gap-2"><Ruler size={17} className="text-[#d7b56d]" /> {suite.size}</p>
                  <p className="flex items-center gap-2"><BedDouble size={17} className="text-[#d7b56d]" /> King bedding</p>
                  <p className="flex items-center gap-2"><Bath size={17} className="text-[#d7b56d]" /> Marble bath</p>
                </div>
                <div className="mt-7">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/48">Amenities</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {suite.amenities.map((amenity) => (
                      <span key={amenity} className="border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-7 border border-[#d7b56d]/20 bg-[#d7b56d]/8 p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#d7b56d]">Floor Plan</p>
                  <p className="mt-3 text-sm leading-7 text-white/68">{suite.floorPlan}</p>
                </div>
              </div>
              <Button href={`/reservation?room=${encodeURIComponent(suite.name)}`} className="mt-8 w-full">Reserve {suite.name}</Button>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </main>
  );
}
