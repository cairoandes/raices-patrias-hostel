import Image from "next/image";
import { ArrowDown, CalendarDays, MapPin, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/button";
import { ImageCard } from "@/components/image-card";
import { SectionHeading } from "@/components/section-heading";
import { experiences, suites, testimonials } from "@/lib/data";
import { images, videoSources } from "@/lib/assets";

const stats = [
  ["42", "Private villas and suites"],
  ["24/7", "Personal concierge"],
  ["188km", "Cafayate wine route access"],
  ["5-star", "Resort service model"]
];

export default function Home() {
  return (
    <main>
      <section className="relative flex min-h-screen items-end overflow-hidden px-5 pb-10 pt-28 md:px-8 md:pb-16">
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
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82),rgba(0,0,0,0.25),rgba(0,0,0,0.7))]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050505] to-transparent" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.65fr] lg:items-end">
          <div>
            <p className="mb-6 inline-flex items-center gap-3 border border-white/15 bg-white/10 px-4 py-3 text-xs font-bold uppercase tracking-[0.28em] text-white backdrop-blur-xl">
              <Sparkles size={16} className="text-[#d7b56d]" /> Salta, Argentina
            </p>
            <h1 className="font-display max-w-5xl text-6xl font-semibold leading-[0.92] text-white md:text-8xl lg:text-9xl">
              Experience Salta Like Never Before
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
              A private Andean sanctuary where cinematic landscape, precision hospitality, and intelligent guest technology meet.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="/reservation"><CalendarDays size={17} /> Reserve Your Stay</Button>
              <Button href="/destination" variant="ghost"><MapPin size={17} /> Explore Salta</Button>
            </div>
          </div>

          <div className="glass grid grid-cols-2 gap-px overflow-hidden rounded-sm p-px">
            {stats.map(([value, label]) => (
              <div key={label} className="bg-black/45 p-5 md:p-7">
                <p className="font-display text-4xl text-[#d7b56d] md:text-5xl">{value}</p>
                <p className="mt-2 text-xs uppercase leading-5 tracking-[0.2em] text-white/58">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <a href="#suites" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-white/60 md:block" aria-label="Scroll">
          <ArrowDown className="animate-bounce" />
        </a>
      </section>

      <AnimatedSection id="suites" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <SectionHeading
          eyebrow="Signature Stays"
          title="Suites composed with the restraint of Aman and the confidence of a grand hotel."
          copy="Every room card in this demo is designed for conversion: cinematic imagery, clear rate logic, and instant reservation access."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {suites.map((suite) => (
            <ImageCard key={suite.id} image={suite.image} title={suite.name} meta={`From $${suite.price}`} copy={`${suite.size}. ${suite.view}.`} href="/suites" />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="relative overflow-hidden py-24">
        <Image src={images.terrace} alt="Andean resort terrace" fill className="-z-10 object-cover opacity-38" sizes="100vw" />
        <div className="absolute inset-0 -z-10 bg-black/70" />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.8fr_1fr]">
          <SectionHeading eyebrow="Experiences" title="Private itineraries, choreographed around the rhythm of Salta." />
          <div className="grid gap-4 md:grid-cols-2">
            {experiences.slice(0, 4).map((experience) => (
              <div key={experience.title} className="glass p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-[#d7b56d]">{experience.duration}</p>
                <h3 className="mt-4 font-display text-3xl text-white">{experience.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto grid max-w-7xl gap-8 px-5 py-24 md:px-8 lg:grid-cols-3">
        {[
          ["Gastronomy", images.gastronomy, "Chef-led menus that translate northern Argentine ingredients into modern fine dining."],
          ["Spa & Wellness", images.spa, "Quiet rituals, botanicals, thermal recovery, and private wellness consultations."],
          ["Luxury Services", images.lobby, "Butler service, private transfers, itinerary design, and discreet guest operations."]
        ].map(([title, image, copy]) => (
          <ImageCard key={title} title={title} image={image} copy={copy} href="/experiences" />
        ))}
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <SectionHeading eyebrow="Guest Voice" title="A testimonial system that feels editorial, not templated." align="center" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="glass p-6">
              <p className="text-[#d7b56d]">★★★★★</p>
              <blockquote className="mt-5 text-sm leading-7 text-white/70">&ldquo;{testimonial.text}&rdquo;</blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-white">{testimonial.name}</figcaption>
            </figure>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto grid max-w-7xl gap-8 px-5 py-24 md:px-8 lg:grid-cols-[1fr_0.8fr]">
        <div className="relative min-h-[420px] overflow-hidden rounded-sm">
          <Image src={images.city} alt="Salta city destination preview" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
          <div className="absolute bottom-6 left-6 right-6 glass p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-[#d7b56d]">Interactive Map Preview</p>
            <p className="mt-3 font-display text-3xl text-white">Restaurants, vineyards, museums, cafes, hospitals, airport, and attractions.</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <SectionHeading eyebrow="Destination Intelligence" title="A guide that turns local discovery into a premium concierge product." copy="Hotel owners see more than a website here: they see upsells, guest confidence, and a better pre-arrival journey." />
          <Button href="/destination" className="mt-8 w-full sm:w-fit">Open Destination Guide</Button>
        </div>
      </AnimatedSection>

      <section className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-sm border border-[#d7b56d]/25 bg-[#d7b56d] p-px">
          <div className="bg-black p-8 text-center md:p-16">
            <p className="text-xs uppercase tracking-[0.36em] text-[#d7b56d]">Final Booking CTA</p>
            <h2 className="mx-auto mt-5 max-w-4xl font-display text-5xl font-semibold text-white md:text-7xl">
              Transform browsing into confirmed luxury reservations.
            </h2>
            <Button href="/reservation" className="mt-8">Begin Booking Flow</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
