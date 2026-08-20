"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="bg-[#171717] px-6 py-20 text-white md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* MAIN CONTENT */}
        <div className="grid gap-16 md:grid-cols-2">

          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-light tracking-[-0.05em] md:text-7xl">
              Let&apos;s create
              <br />
              something timeless.
            </h2>
          </motion.div>

          {/* LINKS */}
          <div className="grid grid-cols-2 gap-10 text-sm text-white/60">

            {/* EXPLORE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              viewport={{ once: true }}
            >
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white">
                Explore
              </p>

              <a
                href="#collections"
                className="block transition-colors hover:text-white"
              >
                Collections
              </a>

              <a
                href="#brands"
                className="mt-3 block transition-colors hover:text-white"
              >
                Brands
              </a>

              <a
                href="#projects"
                className="mt-3 block transition-colors hover:text-white"
              >
                Projects
              </a>
            </motion.div>

            {/* CONTACT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              viewport={{ once: true }}
            >
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white">
                Contact
              </p>

              <a
                href="mailto:info@ceramica.com"
                className="block transition-colors hover:text-white"
              >
                info@ceramica.com
              </a>

              <p className="mt-3">Showroom</p>

              <a
                href="#"
                className="mt-3 block transition-colors hover:text-white"
              >
                Instagram
              </a>
            </motion.div>

          </div>
        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          viewport={{ once: true }}
          className="mt-20 origin-left border-t border-white/15 pt-6 text-xs uppercase tracking-[0.2em] text-white/40"
        >
          © 2026 Ceramica — Architecture & Surfaces
        </motion.div>

      </div>
    </motion.footer>
  );
}