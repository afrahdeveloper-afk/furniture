"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="mx-auto grid max-w-[1600px] gap-12 px-6 py-28 md:grid-cols-2 md:px-12 md:py-40"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        viewport={{ once: true }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-black/50">
          01 — Philosophy
        </p>
      </motion.div>

      <div>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.35,
          }}
          viewport={{ once: true }}
          className="max-w-3xl text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl"
        >
          Materials created for architecture, interiors and spaces that last.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.55,
          }}
          viewport={{ once: true }}
          className="mt-8 max-w-xl text-sm leading-7 text-black/60"
        >
          A curated world of ceramic surfaces, natural textures and
          contemporary collections designed to transform architectural
          environments.
        </motion.p>
      </div>
    </motion.section>
  );
}