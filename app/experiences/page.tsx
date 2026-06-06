import Image from "next/image";
import { Clock, Compass } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/button";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/lib/data";

export const metadata = {
  title: "Experiencias | Raíces Patrias Hostel"
};

export default function ExperiencesPage() {
  return (
    <main className="px-5 pt-32 md:px-8">
      <AnimatedSection className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experiencias"
          title="Actividades que conectan viajeros con la esencia de Córdoba."
          copy="Desde clases de empanadas hasta noches de fogata. Cada experiencia está diseñada para crear recuerdos inolvidables."
        />
      </AnimatedSection>

      <div className="mx-auto grid max-w-7xl gap-5 py-14 md:grid-cols-2">
        {experiences.map((experience) => (
          <AnimatedSection key={experience.title} className="group relative min-h-[520px] overflow-hidden rounded-sm">
            <Image src={experience.image} alt={experience.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <p className="inline-flex items-center gap-2 bg-black/45 px-3 py-2 text-xs uppercase tracking-[0.22em] text-[#C1694F] backdrop-blur">
                <Clock size={15} /> {experience.duration}
              </p>
              <h2 className="mt-5 font-display text-5xl text-white">{experience.title}</h2>
              <p className="mt-4 max-w-2xl leading-8 text-white/72">{experience.description}</p>
              <Button href="/concierge" variant="ghost" className="mt-6"><Compass size={17} /> Preguntar al Concierge</Button>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </main>
  );
}
