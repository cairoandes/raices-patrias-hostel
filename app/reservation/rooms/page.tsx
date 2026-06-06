"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Users, Maximize } from "lucide-react";
import Image from "next/image";
import { suites } from "@/lib/data";

function RoomsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const guests = Number(searchParams.get("guests")) || 1;

  const nights = Math.max(1, Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000));

  function selectRoom(roomId: string) {
    const params = new URLSearchParams({
      checkIn,
      checkOut,
      guests: String(guests),
      room: roomId
    });
    router.push(`/reservation/rates?${params.toString()}`);
  }

  return (
    <main className="min-h-screen px-5 pt-28 pb-32 md:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <button
            onClick={() => router.back()}
            className="mb-6 flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            Volver
          </button>

          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-[#C1694F]/50 to-transparent" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C1694F]">Paso 2 de 4</p>
            <div className="h-px flex-1 bg-gradient-to-l from-[#C1694F]/50 to-transparent" />
          </div>

          <h1 className="mt-5 font-display text-4xl font-semibold text-white md:text-5xl">
            Habitaciones disponibles
          </h1>
          <p className="mt-3 text-base text-white/50">
            {checkIn} al {checkOut} · {nights} {nights === 1 ? "noche" : "noches"} · {guests} {guests === 1 ? "viajero" : "viajeros"}
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {suites.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer overflow-hidden border border-white/10 bg-white/[0.03] transition-all hover:border-[#C1694F]/30"
              onClick={() => selectRoom(room.id)}
            >
              {/* Room Image - Larger */}
              <div className="relative h-64 overflow-hidden md:h-72">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Price badge - top right */}
                <div className="absolute right-4 top-4 bg-black/60 px-4 py-2 backdrop-blur-sm">
                  <p className="text-xs text-white/60">Desde</p>
                  <p className="font-display text-2xl text-[#C1694F]">${room.price}</p>
                  <p className="text-xs text-white/60">/ noche</p>
                </div>

                {/* Room name - bottom left with background */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-[#C1694F]">{room.capacity}</p>
                  <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">{room.name}</h2>
                </div>
              </div>

              {/* Room Details */}
              <div className="p-5">
                <p className="text-sm leading-6 text-white/60">{room.view}</p>
                
                <div className="mt-3 flex flex-wrap gap-2">
                  {room.amenities.slice(0, 3).map((amenity) => (
                    <span
                      key={amenity}
                      className="border border-[#C1694F]/20 bg-[#C1694F]/10 px-2 py-1 text-xs text-[#C1694F]"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                  <div className="flex items-center gap-4 text-xs text-white/40">
                    <span className="flex items-center gap-1">
                      <Maximize size={14} />
                      {room.size}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={14} />
                      {room.capacity}
                    </span>
                  </div>
                  <span className="flex items-center gap-2 text-sm font-semibold text-[#C1694F] transition-all group-hover:gap-3">
                    Seleccionar
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#C1694F]/20 bg-black/95 backdrop-blur-xl"
        >
          <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 md:px-8">
            <div>
              <p className="text-xs text-white/50">{checkIn} al {checkOut}</p>
              <p className="text-sm font-semibold text-white">{nights} {nights === 1 ? "noche" : "noches"} · {guests} {guests === 1 ? "viajero" : "viajeros"}</p>
            </div>
            <p className="text-xs text-white/40">Elegí una habitación para continuar</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default function RoomsPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#C1694F] border-t-transparent" />
      </div>
    }>
      <RoomsContent />
    </Suspense>
  );
}
