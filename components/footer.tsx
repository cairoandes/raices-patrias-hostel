import Link from "next/link";
import { MapPin, Phone, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#C1694F]/15 bg-black px-5 py-14 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display text-4xl text-white">Raíces Patrias</p>
          <p className="mt-4 max-w-xl leading-7 text-white/56">
            Un hoste bohemio en el corazón de Villa Carlos Paz. Arte, mates, naturaleza y la mejor vibra cordobesa te esperan.
          </p>
        </div>
        <div className="space-y-4 text-sm text-white/65">
          <p className="flex gap-3"><MapPin className="mt-0.5 text-[#C1694F]" size={18} /> Villa Carlos Paz, Córdoba, Argentina</p>
          <p className="flex gap-3"><Phone className="mt-0.5 text-[#C1694F]" size={18} /> +54 3541 000 000</p>
          <p className="flex gap-3"><ShieldCheck className="mt-0.5 text-[#C1694F]" size={18} /> Reservas online habilitadas</p>
        </div>
        <div className="grid gap-3 text-sm text-white/65">
          <Link href="/reservation" className="hover:text-white">Reservar Habitación</Link>
          <Link href="/destination" className="hover:text-white">Guía de Carlos Paz</Link>
          <Link href="/concierge" className="hover:text-white">Concierge Digital</Link>
          <Link href="/admin" className="hover:text-white">Panel Admin</Link>
        </div>
      </div>
    </footer>
  );
}
