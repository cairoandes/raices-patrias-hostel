import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/button";

export function ImageCard({
  image,
  title,
  meta,
  copy,
  href = "/reservation"
}: {
  image: string;
  title: string;
  meta?: string;
  copy: string;
  href?: string;
}) {
  return (
    <article className="group overflow-hidden rounded-sm border border-[#C1694F]/15 bg-[#C1694F]/[0.035]">
      <div className="relative aspect-[4/5] overflow-hidden md:aspect-[16/11]">
        <Image src={image} alt={title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
        {meta ? <p className="absolute left-5 top-5 bg-black/45 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white backdrop-blur">{meta}</p> : null}
      </div>
      <div className="p-5 md:p-7">
        <h3 className="font-display text-3xl text-white">{title}</h3>
        <p className="mt-3 min-h-20 text-sm leading-7 text-white/62">{copy}</p>
        <Button href={href} variant="ghost" className="mt-5 w-full justify-between px-4">
          Explorar <ArrowUpRight size={16} />
        </Button>
      </div>
    </article>
  );
}
