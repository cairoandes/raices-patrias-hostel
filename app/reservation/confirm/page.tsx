"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, CalendarDays, Users, MapPin, Phone, Mail, Download, ArrowRight } from "lucide-react";
import { suites } from "@/lib/data";

const plans = {
  basic: { name: "Básico", multiplier: 1 },
  comfort: { name: "Comfort", multiplier: 1.2 },
  experience: { name: "Experiencia", multiplier: 1.5 }
};

function generateReservationId() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "RP-";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function ConfirmContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const guests = Number(searchParams.get("guests")) || 1;
  const roomId = searchParams.get("room") || "";
  const planId = searchParams.get("plan") || "basic";
  const firstName = searchParams.get("firstName") || "";
  const lastName = searchParams.get("lastName") || "";
  const email = searchParams.get("email") || "";
  const phone = searchParams.get("phone") || "";

  const room = useMemo(() => suites.find((s) => s.id === roomId) || suites[0], [roomId]);
  const plan = plans[planId as keyof typeof plans] || plans.basic;
  const nights = Math.max(1, Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000));
  const totalPrice = Math.round(room.price * plan.multiplier * nights);

  const [reservationId, setReservationId] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const id = generateReservationId();
    setReservationId(id);
    
    // Save to localStorage
    const reservations = JSON.parse(localStorage.getItem("raices-patrias-reservations") || "[]");
    reservations.unshift({
      reservationId: id,
      date: new Date().toISOString().slice(0, 10),
      guestName: `${firstName} ${lastName}`,
      email,
      phone,
      room: room.name,
      checkIn,
      checkOut,
      guests,
      extras: [],
      status: "Confirmed"
    });
    localStorage.setItem("raices-patrias-reservations", JSON.stringify(reservations));
    setSaved(true);
  }, []);

  return (
    <main className="min-h-screen px-5 pt-28 pb-24 md:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Success Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-12 text-center"
        >
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#8B9D77]/20">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <Check size={48} className="text-[#8B9D77]" />
            </motion.div>
          </div>

          <h1 className="font-display text-5xl font-semibold text-white md:text-6xl">
            ¡Reserva confirmada!
          </h1>
          <p className="mt-4 text-lg text-white/60">
            Tu aventura en Carlos Paz está asegurada
          </p>
        </motion.div>

        {/* Reservation Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 overflow-hidden border border-[#C1694F]/20 bg-gradient-to-br from-[#C1694F]/10 to-transparent"
        >
          <div className="border-b border-[#C1694F]/20 bg-[#C1694F]/5 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C1694F]">Código de reserva</p>
                <p className="mt-1 font-mono text-2xl font-bold text-white">{reservationId}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-white/40">Estado</p>
                <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-[#8B9D77]">
                  <Check size={14} />
                  Confirmada
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <p className="flex items-center gap-2 text-xs text-white/40">
                    <CalendarDays size={12} />
                    Check-in
                  </p>
                  <p className="font-semibold text-white">{checkIn}</p>
                  <p className="text-xs text-white/40">Desde las 14:00</p>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-xs text-white/40">
                    <CalendarDays size={12} />
                    Check-out
                  </p>
                  <p className="font-semibold text-white">{checkOut}</p>
                  <p className="text-xs text-white/40">Hasta las 11:00</p>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-xs text-white/40">
                    <Users size={12} />
                    Huéspedes
                  </p>
                  <p className="font-semibold text-white">{guests} {guests === 1 ? "viajero" : "viajeros"}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-white/40">Habitación</p>
                  <p className="font-semibold text-white">{room.name}</p>
                  <p className="text-xs text-white/40">{room.view}</p>
                </div>

                <div>
                  <p className="text-xs text-white/40">Plan</p>
                  <p className="font-semibold text-white">{plan.name}</p>
                </div>

                <div>
                  <p className="text-xs text-white/40">Duración</p>
                  <p className="font-semibold text-white">{nights} {nights === 1 ? "noche" : "noches"}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-[#C1694F]/20 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-white/40">Huésped principal</p>
                  <p className="font-semibold text-white">{firstName} {lastName}</p>
                  <p className="flex items-center gap-2 text-sm text-white/50">
                    <Mail size={12} />
                    {email}
                  </p>
                  <p className="flex items-center gap-2 text-sm text-white/50">
                    <Phone size={12} />
                    {phone}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-white/40">Total pagado</p>
                  <p className="font-display text-4xl text-[#C1694F]">${totalPrice}</p>
                  <p className="text-xs text-white/40">ARS</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <button
            onClick={() => window.print()}
            className="flex h-12 w-full items-center justify-center gap-3 border border-[#C1694F]/30 text-sm font-bold uppercase tracking-[0.2em] text-[#C1694F] transition-all hover:bg-[#C1694F]/10"
          >
            <Download size={16} />
            Descargar comprobante
          </button>

          <button
            onClick={() => router.push("/")}
            className="flex h-12 w-full items-center justify-center gap-3 bg-[#C1694F] text-sm font-bold uppercase tracking-[0.2em] text-black transition-all hover:bg-[#D4A574]"
          >
            Volver al inicio
            <ArrowRight size={16} />
          </button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 border border-white/10 bg-white/[0.03] p-6 text-center"
        >
          <p className="text-sm text-white/50">¿Tenés alguna pregunta sobre tu reserva?</p>
          <p className="mt-2 flex items-center justify-center gap-2 text-[#C1694F]">
            <Phone size={14} />
            +54 3541 000 000
          </p>
          <p className="mt-1 flex items-center justify-center gap-2 text-[#C1694F]">
            <Mail size={14} />
            reservas@raicespatrias.com
          </p>
          <p className="mt-1 flex items-center justify-center gap-2 text-[#C1694F]">
            <MapPin size={14} />
            Villa Carlos Paz, Córdoba
          </p>
        </motion.div>
      </div>
    </main>
  );
}

export default function ConfirmPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#C1694F] border-t-transparent" />
      </div>
    }>
      <ConfirmContent />
    </Suspense>
  );
}
