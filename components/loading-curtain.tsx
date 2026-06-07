"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingCurtain() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 2200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[#0A0807]"
        >
          {/* Stone texture background */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10c5-2 12-1 18 2s10 8 12 15-1 14-5 19-10 8-17 8-13-3-17-8-6-12-5-19 6-12 12-15 13-4 18-2z' fill='%23C1694F' opacity='0.5'/%3E%3Cpath d='M60 50c8-3 18-2 25 4s11 14 10 22-6 16-14 20-17 3-24-1-13-10-14-18 3-17 10-22 12-5 25-4z' fill='%23C1694F' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px'
          }} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative text-center"
          >
            {/* Decorative diamond */}
            <motion.div
              initial={{ scale: 0, rotate: 45 }}
              animate={{ scale: 1, rotate: 45 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mb-8 h-3 w-3 bg-[#C1694F]"
            />

            {/* Main title */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl font-light tracking-wide text-white md:text-7xl"
            >
              Raíces
            </motion.p>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl font-semibold text-[#C1694F] md:text-7xl"
            >
              Patrias
            </motion.p>

            {/* Animated line */}
            <div className="mx-auto mt-8 h-px w-56 overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-transparent via-[#C1694F] to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ delay: 0.8, duration: 1.2, ease: "easeInOut" }}
              />
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-6 text-xs font-bold uppercase tracking-[0.5em] text-white/40"
            >
              Hostel Bohemio
            </motion.p>

            {/* Location */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="mt-3 text-[10px] uppercase tracking-[0.4em] text-[#C1694F]/60"
            >
              Villa Carlos Paz, Córdoba
            </motion.p>

            {/* Decorative dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="mt-8 flex items-center justify-center gap-2"
            >
              <div className="h-1 w-1 rounded-full bg-[#C1694F]/40" />
              <div className="h-1 w-1 rounded-full bg-[#C1694F]/60" />
              <div className="h-1 w-1 rounded-full bg-[#C1694F]/40" />
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
