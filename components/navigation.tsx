"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/button";

const links = [
  ["Home", "/"],
  ["Suites", "/suites"],
  ["Experiences", "/experiences"],
  ["Guide", "/destination"],
  ["Concierge", "/concierge"],
  ["Reserve", "/reservation"],
  ["Events", "/events"],
  ["Reviews", "/reviews"],
  ["Dashboard", "/guest-dashboard"],
  ["Analytics", "/admin"]
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="group">
          <span className="block font-display text-2xl font-semibold tracking-wide text-white">Andean</span>
          <span className="block text-[10px] font-bold uppercase tracking-[0.42em] text-[#d7b56d]">Luxury Resort</span>
        </Link>

        <div className="hidden items-center gap-6 xl:flex">
          {links.slice(0, 8).map(([label, href]) => (
            <Link key={href} href={href} className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65 transition hover:text-white">
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="/reservation" className="min-h-10 px-4 py-2 text-[11px]">
            Book
          </Button>
        </div>

        <button
          type="button"
          aria-label="Open navigation"
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 items-center justify-center border border-white/15 bg-white/5 text-white xl:hidden"
        >
          <Menu size={20} />
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/95 p-6 backdrop-blur-xl xl:hidden"
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-3xl text-white">Andean Luxury Resort</span>
            <button
              type="button"
              aria-label="Close navigation"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center border border-white/15 bg-white/5 text-white"
            >
              <X size={20} />
            </button>
          </div>
          <div className="mt-12 grid gap-5">
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
                  className="block border-b border-white/10 pb-4 font-display text-4xl text-white"
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
