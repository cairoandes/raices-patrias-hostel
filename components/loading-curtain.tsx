"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingCurtain() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7 } }}
          className="fixed inset-0 z-[100] grid place-items-center bg-black"
        >
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="font-display text-5xl text-white md:text-7xl">Andean</p>
            <div className="mx-auto mt-6 h-px w-48 overflow-hidden bg-white/15">
              <motion.div
                className="h-full bg-[#d7b56d]"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.45em] text-[#d7b56d]">Salta, Argentina</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
