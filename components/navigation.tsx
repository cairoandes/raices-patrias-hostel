"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/button";

const links = [
  ["Inicio", "/"],
  ["Habitaciones", "/suites"],
  ["Experiencias", "/experiences"],
  ["Guía Local", "/destination"],
  ["Concierge", "/concierge"],
  ["Reservar", "/reservation"],
  ["Eventos", "/events"],
  ["Reseñas", "/reviews"],
  ["Dashboard", "/guest-dashboard"],
  ["Admin", "/admin"]
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b-2 border-[#C1694F]/20 bg-[#0A0807] shadow-lg shadow-black/50">
      {/* Stone texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23C1694F' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      />
      
      <nav className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="group">
          <span className="block font-display text-2xl font-semibold tracking-wide text-white">Raíces</span>
          <span className="block text-[10px] font-bold uppercase tracking-[0.42em] text-[#C1694F]">Patrias Hostel</span>
        </Link>

        <div className="hidden items-center gap-6 xl:flex">
          {links.slice(0, 8).map(([label, href]) => (
            <Link key={href} href={href} className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:text-[#C1694F]">
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="/reservation" className="min-h-10 px-4 py-2 text-[11px]">
            Reservar
          </Button>
        </div>

        <button
          type="button"
          aria-label="Abrir navegación"
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 items-center justify-center border border-[#C1694F]/30 bg-[#C1694F]/15 text-white xl:hidden"
        >
          <Menu size={20} />
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-[#0A0807] p-6 xl:hidden"
        >
          {/* Stone texture in mobile menu */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C1694F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
          
          <div className="relative flex items-center justify-between">
            <span className="font-display text-3xl text-white">Raíces Patrias</span>
            <button
              type="button"
              aria-label="Cerrar navegación"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center border border-[#C1694F]/30 bg-[#C1694F]/15 text-white"
            >
              <X size={20} />
            </button>
          </div>
          <div className="relative mt-12 grid gap-5">
            {links.map(([label, href], index) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.035 }}
              >
                <Link
                  onClick={() => setOpen(false)}
                  href={href}
                  className="block border-b border-[#C1694F]/15 pb-4 font-display text-4xl text-white transition hover:text-[#C1694F]"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
