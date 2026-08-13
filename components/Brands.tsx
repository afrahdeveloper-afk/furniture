"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const brands = [
  "MARAZZI",
  "MUTINA",
  "ATLAS",
  "MOSAICO",
  "CERAMICHE",
  "LIVING",
];

export default function Brands() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 25%"],
  });

  // عنوان القسم
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0, 1]
  );

  const titleY = useTransform(
    scrollYProgress,
    [0, 0.25],
    [40, 0]
  );

  return (
    <motion.section
      ref={sectionRef}
      id="brands"
      className="border-y border-black/10 bg-[#e9e6df] px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* TITLE */}
        <motion.p
          style={{
            opacity: titleOpacity,
            y: titleY,
          }}
          className="mb-12 text-xs uppercase tracking-[0.3em] text-black/50"
        >
          03 — Selected brands
        </motion.p>

        {/* BRANDS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand, index) => {
            const start = 0.12 + index * 0.08;
            const end = start + 0.25;

            return (
              <Brand
                key={brand}
                brand={brand}
                scrollYProgress={scrollYProgress}
                start={start}
                end={end}
              />
            );
          })}
        </div>

      </div>
    </motion.section>
  );
}

function Brand({
  brand,
  scrollYProgress,
  start,
  end,
}: {
  brand: string;
  scrollYProgress: any;
  start: number;
  end: number;
}) {
  // الظهور مع الـScroll
  const opacity = useTransform(
    scrollYProgress,
    [start, end],
    [0, 1]
  );

  // من تحت إلى مكانه
  const y = useTransform(
    scrollYProgress,
    [start, end],
    [70, 0]
  );

  // يبدأ أصغر ثم يكبر
  const scale = useTransform(
    scrollYProgress,
    [start, end],
    [0.8, 1]
  );

  return (
    <motion.div
      style={{
        opacity,
        y,
        scale,
      }}
      whileHover={{
        y: -5,
        scale: 1.03,
      }}
      className="flex h-32 items-center justify-center border-b border-black/10 text-center text-sm font-medium tracking-[0.2em] transition hover:bg-[#dedbd3]"
    >
      {brand}
    </motion.div>
  );
}