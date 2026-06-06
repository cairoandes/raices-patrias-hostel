"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, X, Sparkles } from "lucide-react";
import { suites, extras } from "@/lib/data";

const plans = [
  {
    id: "basic",
    name: "Básico",
    description: "Lo esencial para tu estadía",
    multiplier: 1,
    features: ["Habitación seleccionada", "WiFi gratuito", "Acceso a cocina compartida", "Limpieza diaria"],
    excluded: ["Desayuno incluido", "Toallas premium", "Tour guiado"]
  },
  {
    id: "comfort",
    name: "Comfort",
    description: "Un poco más de comodidad",
    multiplier: 1.2,
    features: ["Habitación seleccionada", "WiFi gratuito", "Acceso a cocina compartida", "Limpieza diaria", "Desayuno criollo incluido", "Toallas premium"],
    excluded: ["Tour guiado"],
    popular: true
  },
  {
    id: "experience",
    name: "Experiencia",
    description: "La estadía completa",
    multiplier: 1.5,
    features: ["Habitación seleccionada", "WiFi gratuito", "Acceso a cocina compartida", "Limpieza diaria", "Desayuno criollo incluido", "Toallas premium", "Tour guiado por Carlos Paz", "Bebida de bienvenida"]
  }
];

function RatesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const guests = Number(searchParams.get("guests")) || 1;
  const roomId = searchParams.get("room") || "";

  const room = useMemo(() => suites.find((s) => s.id === roomId) || suites[0], [roomId]);
  const nights = Math.max(1, Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000));

  function selectPlan(planId: string) {
    const params = new URLSearchParams({
      checkIn,
      checkOut,
      guests: String(guests),
      room: roomId,
      plan: planId
    });
    router.push(`/reservation/guest?${params.toString()}`);
  }

  return (
    <main className="min-h-screen px-5 pt-28 pb-24 md:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
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
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C1694F]">Paso 3 de 4</p>
            <div className="h-px flex-1 bg-gradient-to-l from-[#C1694F]/50 to-transparent" />
          </div>

          <h1 className="mt-6 font-display text-5xl font-semibold text-white md:text-6xl">
            Elegí tu plan
          </h1>
          <p className="mt-4 text-lg text-white/50">
            {room.name} · {checkIn} al {checkOut} · {nights} {nights === 1 ? "noche" : "noches"}
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => {
            const price = Math.round(room.price * plan.multiplier * nights);
            const pricePerNight = Math.round(room.price * plan.multiplier);

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative cursor-pointer overflow-hidden border transition-all ${
                  plan.popular
                    ? "border-[#C1694F] bg-[#C1694F]/5"
                    : "border-white/10 bg-white/[0.03] hover:border-[#C1694F]/30"
                }`}
                onClick={() => selectPlan(plan.id)}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute right-0 top-0 bg-[#C1694F] px-4 py-1">
                    <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-black">
                      <Sparkles size={12} />
                      Popular
                    </span>
                  </div>
                )}

                <div className="p-6 md:p-8">
                  {/* Plan Header */}
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C1694F]">{plan.name}</p>
                  <h2 className="mt-2 font-display text-4xl text-white">{plan.description}</h2>

                  {/* Price */}
                  <div className="mt-6 border-b border-white/10 pb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-5xl text-[#C1694F]">${pricePerNight}</span>
                      <span className="text-sm text-white/40">/ noche</span>
                    </div>
                    <p className="mt-2 text-sm text-white/50">
                      Total: <span className="font-semibold text-white">${price}</span> por {nights} {nights === 1 ? "noche" : "noches"}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check size={16} className="text-[#8B9D77]" />
                        <span className="text-sm text-white/70">{feature}</span>
                      </div>
                    ))}
                    {plan.excluded?.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <X size={16} className="text-white/20" />
                        <span className="text-sm text-white/30">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    className={`mt-8 flex h-12 w-full items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.2em] transition-all ${
                      plan.popular
                        ? "bg-[#C1694F] text-black hover:bg-[#D4A574]"
                        : "border border-[#C1694F]/30 text-[#C1694F] hover:bg-[#C1694F]/10"
                    }`}
                  >
                    Seleccionar
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Extras Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 border border-white/10 bg-white/[0.03] p-6 md:p-8"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C1694F]">Extras opcionales</p>
          <p className="mt-2 text-sm text-white/50">Podés agregar estos servicios después</p>

          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {extras.map((extra) => (
              <div
                key={extra}
                className="flex items-center justify-between border border-white/10 bg-white/5 px-4 py-3"
              >
                <span className="text-sm text-white/70">{extra}</span>
                <span className="text-sm font-semibold text-[#C1694F]">+$15</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default function RatesPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#C1694F] border-t-transparent" />
      </div>
    }>
      <RatesContent />
    </Suspense>
  );
}
