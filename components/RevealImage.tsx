"use client";

import { motion } from "framer-motion";

const image =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90";

const rows = 4;
const cols = 6;

export default function RevealImage() {
  const squares = Array.from({ length: rows * cols });

  return (
    <section className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <div className="relative aspect-[16/8] overflow-hidden">

          {/* الصورة الحقيقية */}
          <img
            src={image}
            alt="Interior architecture"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* المربعات */}
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
            {squares.map((_, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 1,
                  scale: 1,
                }}
                whileInView={{
                  opacity: 0,
                  scale: 0.8,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                  ease: "easeInOut",
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                className="bg-[#171717]"
              />
            ))}
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />

          {/* Text */}
          <div className="absolute bottom-8 left-8 max-w-xl text-white md:bottom-14 md:left-14">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 1.8,
              }}
              viewport={{ once: true }}
              className="mb-4 text-xs uppercase tracking-[0.3em]"
            >
              Architecture
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.9,
              }}
              viewport={{ once: true }}
              className="text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl"
            >
              Designed for extraordinary interiors.
            </motion.h2>
          </div>

        </div>
      </div>
    </section>
  );
}