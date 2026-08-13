"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-[#f3f1ec]/95 text-[#171717] shadow-sm backdrop-blur-md"
            : "bg-transparent text-white"
        }`}
      >
        <div className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-6 md:px-12">

          {/* LOGO */}
          <a
            href="#"
            onClick={closeMenu}
            className="text-[15px] font-medium tracking-[0.28em]"
          >
            CERAMICA
          </a>

          {/* DESKTOP MENU */}
          <nav className="hidden items-center gap-12 text-[10px] uppercase tracking-[0.28em] md:flex">
            <a
              href="#collections"
              className="transition-opacity hover:opacity-50"
            >
              Collections
            </a>

            <a
              href="#brands"
              className="transition-opacity hover:opacity-50"
            >
              Brands
            </a>

            <a
              href="#projects"
              className="transition-opacity hover:opacity-50"
            >
              Projects
            </a>

            <a
              href="#about"
              className="transition-opacity hover:opacity-50"
            >
              About
            </a>
          </nav>

          {/* MENU BUTTON */}
         <button
  type="button"
  aria-label="Open menu"
  onClick={() => setMenuOpen(!menuOpen)}
  className="relative flex h-11 w-11 items-center justify-center rounded-full border border-current transition duration-300 hover:bg-current hover:text-[#f3f1ec] md:hidden"
>
            <div className="relative flex h-4 w-4 items-center justify-center">

              {/* TOP LINE */}
              <motion.span
                animate={
                  menuOpen
                    ? {
                        rotate: 45,
                        y: 0,
                      }
                    : {
                        rotate: 0,
                        y: -3,
                      }
                }
                transition={{ duration: 0.3 }}
                className="absolute h-px w-full bg-current"
              />

              {/* BOTTOM LINE */}
              <motion.span
                animate={
                  menuOpen
                    ? {
                        rotate: -45,
                        y: 0,
                      }
                    : {
                        rotate: 0,
                        y: 3,
                      }
                }
                transition={{ duration: 0.3 }}
                className="absolute h-px w-full bg-current"
              />

            </div>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            className="fixed inset-0 z-40 bg-[#f3f1ec] pt-32"
          >
            <nav className="flex flex-col px-8">

              {[
                ["Collections", "#collections"],
                ["Brands", "#brands"],
                ["Projects", "#projects"],
                ["About", "#about"],
              ].map(([label, href], index) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.1 + index * 0.08,
                    duration: 0.5,
                  }}
                  className="border-b border-black/10 py-6 text-4xl font-light tracking-[-0.04em]"
                >
                  {label}
                </motion.a>
              ))}

            </nav>

            <div className="absolute bottom-10 left-8 text-xs uppercase tracking-[0.25em] text-black/40">
              Architecture · Design · Surfaces
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}