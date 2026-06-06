import Image from "next/image";
import { ArrowDown, CalendarDays, MapPin, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/button";
import { ImageCard } from "@/components/image-card";
import { SectionHeading } from "@/components/section-heading";
import { experiences, suites, testimonials } from "@/lib/data";
import { images, videoSources } from "@/lib/assets";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={images.heroFallback}
        >
          <source src={videoSources.hero} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/70" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0A0807] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-16 md:px-8">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center gap-3 border border-[#C1694F]/20 bg-[#C1694F]/10 px-4 py-3 text-xs font-bold uppercase tracking-[0.28em] text-white backdrop-blur-xl">
              <Sparkles size={16} className="text-[#C1694F]" /> Villa Carlos Paz, Córdoba
            </p>
            <h1 className="font-display text-6xl font-semibold leading-[0.92] text-white md:text-8xl">
              Donde las<br/>raíces<br/>se encuentran
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
              Un hoste bohemio en el corazón de Villa Carlos Paz.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="/reservation" className="stone-btn"><CalendarDays size={17} /> Reservar tu lugar</Button>
              <Button href="/destination" variant="ghost"><MapPin size={17} /> Explorar Carlos Paz</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip - Horizontal band with organic feel */}
      <section className="relative overflow-hidden border-y border-[#C1694F]/10 bg-[#0D0B09]">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 Q45 0 50 15 T55 30 Q50 45 35 50 T15 45 Q5 35 10 20 T30 5Z' fill='%23C1694F'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-0 divide-x divide-[#C1694F]/15 px-5 py-8 md:px-8 md:py-10">
          {[
            { value: "6", label: "Habitaciones con alma", icon: "⌂" },
            { value: "24/7", label: "Mates siempre listos", icon: "☕" },
            { value: "5 min", label: "Al lago San Roque", icon: "◎" },
            { value: "Boho", label: "Vibra artesanal", icon: "✦" }
          ].map((item) => (
            <div key={item.value} className="flex flex-col items-center px-8 py-2 md:px-14">
              <span className="text-lg text-[#C1694F]/40">{item.icon}</span>
              <p className="mt-2 font-display text-4xl font-light text-white md:text-5xl">{item.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stone Divider */}
      <div className="stone-divider mx-auto max-w-7xl" />

      {/* Habitaciones Section with Stone Texture */}
      <AnimatedSection id="habitaciones" className="mx-auto max-w-7xl px-5 py-24 md:px-8 mountain-texture">
        <SectionHeading
          eyebrow="Nuestras Habitaciones"
          title="Espacios con alma, diseñados para viajeros que buscan conexión."
          copy="Cada habitación tiene su propia historia: paredes con arte local, plantas colgantes y la calidez de un hogar lejos del hogar."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {suites.map((suite) => (
            <ImageCard key={suite.id} image={suite.image} title={suite.name} meta={`Desde $${suite.price}`} copy={`${suite.size}. ${suite.view}.`} href="/suites" />
          ))}
        </div>
      </AnimatedSection>

      {/* Experiences Section with Stone Texture */}
      <AnimatedSection className="relative overflow-hidden py-24 slab-texture">
        <Image src={images.terrace} alt="Terraza del hostel" fill className="-z-10 object-cover opacity-38" sizes="100vw" />
        <div className="absolute inset-0 -z-10 bg-black/70" />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.8fr_1fr]">
          <SectionHeading eyebrow="Experiencias" title="Actividades que conectan viajeros con la esencia de Córdoba." />
          <div className="grid gap-4 md:grid-cols-2">
            {experiences.slice(0, 4).map((experience) => (
              <div key={experience.title} className="glass stone p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-[#C1694F]">{experience.duration}</p>
                <h3 className="mt-4 font-display text-3xl text-white">{experience.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Features Section with Stone Cards */}
      <AnimatedSection className="mx-auto grid max-w-7xl gap-8 px-5 py-24 md:px-8 lg:grid-cols-3">
        {[
          ["Arte Callejero", images.gastronomy, "Murales, graffiti y expresiones artísticas que cuentan la historia de Carlos Paz."],
          ["Yoga & Bienestar", images.spa, "Clases al amanecer en la terraza, meditación y conexión con la naturaleza."],
          ["Vida Social", images.lobby, "Noches de fogata, guitarreadas, juegos de mesa y nuevos amigos."]
        ].map(([title, image, copy]) => (
          <div key={title} className="stone-card rounded-sm overflow-hidden">
            <ImageCard title={title} image={image} copy={copy} href="/experiences" />
          </div>
        ))}
      </AnimatedSection>

      {/* Testimonials with Stone Texture */}
      <AnimatedSection className="mx-auto max-w-7xl px-5 py-24 md:px-8 cracked-texture">
        <SectionHeading eyebrow="Voces del Hostel" title="Lo que dicen nuestros viajeros." align="center" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="glass stone p-6">
              <p className="text-[#C1694F]">★★★★★</p>
              <blockquote className="mt-5 text-sm leading-7 text-white/70">&ldquo;{testimonial.text}&rdquo;</blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-white">{testimonial.name}</figcaption>
            </figure>
          ))}
        </div>
      </AnimatedSection>

      {/* Destination Section */}
      <AnimatedSection className="mx-auto grid max-w-7xl gap-8 px-5 py-24 md:px-8 lg:grid-cols-[1fr_0.8fr]">
        <div className="relative min-h-[420px] overflow-hidden rounded-sm stone-card">
          <Image src={images.city} alt="Villa Carlos Paz" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
          <div className="absolute bottom-6 left-6 right-6 glass stone p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-[#C1694F]">Mapa Interactivo</p>
            <p className="mt-3 font-display text-3xl text-white">Lagos, montañas, bares, restaurantes y los mejores spots de Carlos Paz.</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <SectionHeading eyebrow="Guía Local" title="Descubre Carlos Paz como un local, no como un turista." copy="Nuestro concierge digital te muestra los mejores lugares: desde el lago San Roque hasta los bares con música en vivo." />
          <Button href="/destination" className="mt-8 w-full sm:w-fit stone-btn">Abrir Guía Local</Button>
        </div>
      </AnimatedSection>

      {/* Final CTA with Stone Style */}
      <section className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden stone-card rounded-sm">
          <div className="p-8 text-center md:p-16">
            <p className="text-xs uppercase tracking-[0.36em] text-[#C1694F]">Reserva tu aventura</p>
            <h2 className="mx-auto mt-5 max-w-4xl font-display text-5xl font-semibold text-white md:text-7xl">
              Tu próxima historia comienza en Raíces Patrias.
            </h2>
            <Button href="/reservation" className="mt-8 stone-btn">Reservar Ahora</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
