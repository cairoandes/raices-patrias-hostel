"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

const filters = ["Todos", "Parejas", "Mochileros", "Amigas", "Nómadas"];

export function ReviewsFilter() {
  const [filter, setFilter] = useState("Todos");
  const filtered = filter === "Todos" ? testimonials : testimonials.filter((testimonial) => testimonial.type === filter);

  return (
    <div>
      <div className="hide-scrollbar flex gap-2 overflow-x-auto pb-2">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`shrink-0 border px-4 py-2 text-xs uppercase tracking-[0.18em] transition ${
              filter === item ? "border-[#C1694F] bg-[#C1694F] text-black" : "border-white/15 bg-white/5 text-white/62 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {filtered.map((testimonial, index) => (
          <motion.figure
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className="glass p-7"
          >
            <p className="text-[#C1694F]">★★★★★</p>
            <blockquote className="mt-6 font-display text-3xl leading-snug text-white">&ldquo;{testimonial.text}&rdquo;</blockquote>
            <figcaption className="mt-8 flex items-center justify-between border-t border-[#C1694F]/15 pt-5">
              <span className="text-sm font-semibold text-white">{testimonial.name}</span>
              <span className="text-xs uppercase tracking-[0.18em] text-white/45">{testimonial.type}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  );
}
