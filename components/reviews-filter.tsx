"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

const filters = ["All", "Couples", "Families", "Business Travelers"];

export function ReviewsFilter() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? testimonials : testimonials.filter((testimonial) => testimonial.type === filter);

  return (
    <div>
      <div className="hide-scrollbar flex gap-2 overflow-x-auto pb-2">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`shrink-0 border px-4 py-2 text-xs uppercase tracking-[0.18em] transition ${
              filter === item ? "border-[#d7b56d] bg-[#d7b56d] text-black" : "border-white/15 bg-white/5 text-white/62 hover:text-white"
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
            <p className="text-[#d7b56d]">★★★★★</p>
            <blockquote className="mt-6 font-display text-3xl leading-snug text-white">&ldquo;{testimonial.text}&rdquo;</blockquote>
            <figcaption className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-sm font-semibold text-white">{testimonial.name}</span>
              <span className="text-xs uppercase tracking-[0.18em] text-white/45">{testimonial.type}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  );
}
