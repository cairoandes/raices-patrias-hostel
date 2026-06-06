import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/button";
import { SectionHeading } from "@/components/section-heading";
import { images } from "@/lib/assets";

const events = [
  ["Fogatas Nocturnas", images.terrace, "Noches mágicas bajo las estrellas con guitarreadas, mates y nuevas amistades."],
  ["Clases de Cocina", images.gastronomy, "Aprende a hacer empanadas, locro y otros platos típicos cordobeses."],
  ["Yoga & Meditación", images.spa, "Clases al amanecer en la terraza con vista a las sierras de Córdoba."],
  ["Excursiones Grupales", images.mountain, "Lagos, montañas, pueblos serranos y los mejores spots de la zona."]
];

export const metadata = {
  title: "Eventos | Raíces Patrias Hostel"
};

export default function EventsPage() {
  return (
    <main className="px-5 pt-32 md:px-8">
      <AnimatedSection className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Eventos & Actividades"
          title="Experiencias que crean comunidad entre viajeros."
          copy="Cada semana organizamos actividades para que conozcas gente, disfrutes Córdoba y crees recuerdos inolvidables."
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
        <p className="text-xs uppercase tracking-[0.28em] text-[#C1694F]">Consulta Privada</p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {["Nombre", "Email", "Tipo de Evento", "Fecha Preferida"].map((field) => (
            <input key={field} placeholder={field} className="h-13 border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#C1694F]/50" />
          ))}
        </div>
        <textarea placeholder="Contanos sobre tu evento o actividad privada." className="mt-4 min-h-32 w-full border border-white/10 bg-white/5 p-4 text-white outline-none placeholder:text-white/35 focus:border-[#C1694F]/50" />
        <Button className="mt-4">Enviar Consulta</Button>
      </AnimatedSection>
    </main>
  );
}
