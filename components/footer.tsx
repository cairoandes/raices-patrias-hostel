import Link from "next/link";
import { MapPin, Phone, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-14 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display text-4xl text-white">Andean Luxury Resort</p>
          <p className="mt-4 max-w-xl leading-7 text-white/56">
            A cinematic sales demo for luxury hospitality brands, designed to convert high-value hotel owners into website development clients.
          </p>
        </div>
        <div className="space-y-4 text-sm text-white/65">
          <p className="flex gap-3"><MapPin className="mt-0.5 text-[#d7b56d]" size={18} /> Salta, Argentina</p>
          <p className="flex gap-3"><Phone className="mt-0.5 text-[#d7b56d]" size={18} /> +54 387 000 0000</p>
          <p className="flex gap-3"><ShieldCheck className="mt-0.5 text-[#d7b56d]" size={18} /> Mock Google Sheet reservations enabled</p>
        </div>
        <div className="grid gap-3 text-sm text-white/65">
          <Link href="/reservation" className="hover:text-white">Reserve a Suite</Link>
          <Link href="/destination" className="hover:text-white">Destination Guide</Link>
          <Link href="/concierge" className="hover:text-white">Digital Concierge</Link>
          <Link href="/admin" className="hover:text-white">Admin Analytics</Link>
        </div>
      </div>
    </footer>
  );
}
