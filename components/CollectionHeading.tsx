"use client";

import { motion } from "framer-motion";

export default function CollectionHeading() {
  return (
    <div className="mb-12 flex items-end justify-between">

      <div>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-xs uppercase tracking-[0.3em] text-black/50"
        >
          02 — Collections
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-4 text-4xl font-light tracking-[-0.04em] md:text-6xl"
        >
          Explore surfaces
        </motion.h2>
      </div>

      <motion.span
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
        }}
        viewport={{ once: true }}
        className="hidden text-xs uppercase tracking-[0.2em] text-black/50 md:block"
      >
        View all
      </motion.span>

    </div>
  );
}