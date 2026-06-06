"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CalendarDays, Users, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/button";

export default function ReservationPage() {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  function handleSearch() {
    if (!checkIn || !checkOut) return;
    const params = new URLSearchParams({
      checkIn,
      checkOut,
      guests: String(guests)
    });
    router.push(`/reservation/rooms?${params.toString()}`);
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-5 pt-28 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#C1694F]/10 via-transparent to-[#0A0807]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-[#C1694F]/30 blur-[100px]" />
          <div className="absolute right-1/4 bottom-1/4 h-48 w-48 rounded-full bg-[#8B9D77]/20 blur-[80px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <p className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#C1694F]">
            <Sparkles size={16} /> Reservá tu experiencia
          </p>
          <h1 className="font-display text-6xl font-semibold leading-[0.95] text-white md:text-8xl">
            Tu aventura<br />
            <span className="text-[#C1694F]">comienza acá</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/60">
            Elegí tus fechas, decinos cuántos son, y te mostramos las mejores opciones para tu estadía en Carlos Paz.
          </p>
        </motion.div>
      </section>

      {/* Search Card */}
      <section className="relative z-10 -mt-20 px-5 pb-24 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-3xl"
        >
          <div className="glass p-8 md:p-10">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C1694F]/30 to-transparent" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C1694F]">Buscá tu fecha</p>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C1694F]/30 to-transparent" />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Check-in */}
              <div className="group">
                <label className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  <CalendarDays size={14} className="text-[#C1694F]" />
                  Check-in
                </label>
                <input
                  type="date"
                  value={checkIn}
                  min={today}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="h-14 w-full border border-white/10 bg-white/5 px-4 text-lg text-white outline-none transition-all focus:border-[#C1694F]/50 focus:bg-[#C1694F]/5"
                />
              </div>

              {/* Check-out */}
              <div className="group">
                <label className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  <CalendarDays size={14} className="text-[#C1694F]" />
                  Check-out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn || today}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="h-14 w-full border border-white/10 bg-white/5 px-4 text-lg text-white outline-none transition-all focus:border-[#C1694F]/50 focus:bg-[#C1694F]/5"
                />
              </div>

              {/* Guests */}
              <div className="group">
                <label className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  <Users size={14} className="text-[#C1694F]" />
                  Huéspedes
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="h-14 w-full border border-white/10 bg-white/5 px-4 text-lg text-white outline-none transition-all focus:border-[#C1694F]/50 focus:bg-[#C1694F]/5"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n} className="bg-[#0A0807]">
                      {n} {n === 1 ? "viajero" : "viajeros"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handleSearch}
              disabled={!checkIn || !checkOut}
              className="mt-8 flex h-14 w-full items-center justify-center gap-3 bg-[#C1694F] text-sm font-bold uppercase tracking-[0.25em] text-black transition-all hover:bg-[#D4A574] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Ver disponibilidad
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Features */}
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { icon: "🌿", title: "Ambiente bohemio", desc: "Arte, plantas y buena vibra" },
              { icon: " mate", title: "Mate included", desc: "Siempre disponible en el hostel" },
              { icon: "🎸", title: "Vida social", desc: "Fogatas, música y nuevos amigos" }
            ].map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="border border-[#C1694F]/10 bg-[#C1694F]/5 p-5 text-center"
              >
                <span className="text-2xl">{feature.icon}</span>
                <p className="mt-3 text-sm font-semibold text-white">{feature.title}</p>
                <p className="mt-1 text-xs text-white/50">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
