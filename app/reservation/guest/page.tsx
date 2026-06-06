"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, User, Mail, Phone, CreditCard, Lock } from "lucide-react";
import { suites } from "@/lib/data";

const plans = {
  basic: { name: "Básico", multiplier: 1 },
  comfort: { name: "Comfort", multiplier: 1.2 },
  experience: { name: "Experiencia", multiplier: 1.5 }
};

function GuestContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const guests = Number(searchParams.get("guests")) || 1;
  const roomId = searchParams.get("room") || "";
  const planId = searchParams.get("plan") || "basic";

  const room = useMemo(() => suites.find((s) => s.id === roomId) || suites[0], [roomId]);
  const plan = plans[planId as keyof typeof plans] || plans.basic;
  const nights = Math.max(1, Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000));
  const totalPrice = Math.round(room.price * plan.multiplier * nights);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    document: "",
    specialRequests: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!form.firstName.trim()) newErrors.firstName = "Nombre requerido";
    if (!form.lastName.trim()) newErrors.lastName = "Apellido requerido";
    if (!form.email.trim()) newErrors.email = "Email requerido";
    if (!form.email.includes("@")) newErrors.email = "Email inválido";
    if (!form.phone.trim()) newErrors.phone = "Teléfono requerido";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit() {
    if (!validate()) return;
    
    const params = new URLSearchParams({
      checkIn,
      checkOut,
      guests: String(guests),
      room: roomId,
      plan: planId,
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone
    });
    router.push(`/reservation/confirm?${params.toString()}`);
  }

  return (
    <main className="min-h-screen px-5 pt-28 pb-24 md:px-8">
      <div className="mx-auto max-w-4xl">
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
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C1694F]">Paso 4 de 4</p>
            <div className="h-px flex-1 bg-gradient-to-l from-[#C1694F]/50 to-transparent" />
          </div>

          <h1 className="mt-6 font-display text-5xl font-semibold text-white md:text-6xl">
            Tus datos
          </h1>
          <p className="mt-4 text-lg text-white/50">
            Completá tus datos para finalizar la reserva
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C1694F]">
                <User size={14} />
                Información personal
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wider text-white/40">Nombre *</label>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    placeholder="Tu nombre"
                    className={`h-12 w-full border bg-white/5 px-4 text-white outline-none transition-all focus:border-[#C1694F]/50 ${
                      errors.firstName ? "border-red-500" : "border-white/10"
                    }`}
                  />
                  {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wider text-white/40">Apellido *</label>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    placeholder="Tu apellido"
                    className={`h-12 w-full border bg-white/5 px-4 text-white outline-none transition-all focus:border-[#C1694F]/50 ${
                      errors.lastName ? "border-red-500" : "border-white/10"
                    }`}
                  />
                  {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-white/40">
                    <Mail size={12} />
                    Email *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="tu@email.com"
                    className={`h-12 w-full border bg-white/5 px-4 text-white outline-none transition-all focus:border-[#C1694F]/50 ${
                      errors.email ? "border-red-500" : "border-white/10"
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-white/40">
                    <Phone size={12} />
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+54 3541 000 000"
                    className={`h-12 w-full border bg-white/5 px-4 text-white outline-none transition-all focus:border-[#C1694F]/50 ${
                      errors.phone ? "border-red-500" : "border-white/10"
                    }`}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-white/40">
                    <CreditCard size={12} />
                    DNI / Pasaporte
                  </label>
                  <input
                    type="text"
                    value={form.document}
                    onChange={(e) => setForm({ ...form, document: e.target.value })}
                    placeholder="Número de documento"
                    className="h-12 w-full border border-white/10 bg-white/5 px-4 text-white outline-none transition-all focus:border-[#C1694F]/50"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs uppercase tracking-wider text-white/40">Pedidos especiales</label>
                  <textarea
                    value={form.specialRequests}
                    onChange={(e) => setForm({ ...form, specialRequests: e.target.value })}
                    placeholder="¿Algo que debamos saber? Alergias, preferencias, hora de llegada..."
                    rows={4}
                    className="w-full border border-white/10 bg-white/5 p-4 text-white outline-none transition-all focus:border-[#C1694F]/50"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="flex h-14 w-full items-center justify-center gap-3 bg-[#C1694F] text-sm font-bold uppercase tracking-[0.25em] text-black transition-all hover:bg-[#D4A574]"
            >
              <Lock size={16} />
              Confirmar reserva
            </button>

            <p className="flex items-center justify-center gap-2 text-center text-xs text-white/40">
              <Lock size={12} />
              Tus datos están protegidos y son confidenciales
            </p>
          </motion.div>

          {/* Summary Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="h-fit border border-[#C1694F]/20 bg-[#C1694F]/5 p-6"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C1694F]">Resumen</p>
            
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm text-white/50">Habitación</p>
                <p className="font-semibold text-white">{room.name}</p>
              </div>

              <div>
                <p className="text-sm text-white/50">Plan</p>
                <p className="font-semibold text-white">{plan.name}</p>
              </div>

              <div>
                <p className="text-sm text-white/50">Fechas</p>
                <p className="font-semibold text-white">{checkIn} al {checkOut}</p>
                <p className="text-xs text-white/40">{nights} {nights === 1 ? "noche" : "noches"}</p>
              </div>

              <div>
                <p className="text-sm text-white/50">Huéspedes</p>
                <p className="font-semibold text-white">{guests} {guests === 1 ? "viajero" : "viajeros"}</p>
              </div>

              <div className="border-t border-[#C1694F]/20 pt-4">
                <p className="text-sm text-white/50">Total</p>
                <p className="font-display text-4xl text-[#C1694F]">${totalPrice}</p>
                <p className="text-xs text-white/40">por {nights} {nights === 1 ? "noche" : "noches"}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default function GuestPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#C1694F] border-t-transparent" />
      </div>
    }>
      <GuestContent />
    </Suspense>
  );
}
