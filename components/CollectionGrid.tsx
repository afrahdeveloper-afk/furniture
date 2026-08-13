"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const collections = [
  {
    title: "Natural Stone",
    subtitle: "The elegance of nature",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=85",
  },
  {
    title: "Contemporary",
    subtitle: "Modern architectural surfaces",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
  },
  {
    title: "Minimal",
    subtitle: "Pure forms and refined spaces",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85",
  },
];

export default function CollectionGrid() {
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      imageRefs.current.forEach((image) => {
        if (!image) return;

        const rect = image.parentElement.getBoundingClientRect();

        if (
          rect.bottom < 0 ||
          rect.top > windowHeight
        ) {
          return;
        }

        const center =
          rect.top + rect.height / 2;

        const distance =
          center - windowHeight / 2;

        const movement = distance * -0.08;

        image.style.setProperty(
          "--parallax",
          `${movement}px`
        );
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="grid gap-5 md:grid-cols-3"
    >
     {collections.map((collection, index) => (
  <motion.div
    key={collection.title}
    initial={{
      opacity: 0,
      y: 60,
      scale: 0.95,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      scale: 1,
    }}
    transition={{
      duration: 0.8,
      delay: index * 0.2,
      ease: "easeOut",
    }}
    viewport={{
      once: true,
      amount: 0.2,
    }}
    className={`collection-card ${
      index === 1 ? "md:mt-20" : ""
    }`}
  >
    <div className="collection-image-wrapper relative aspect-[4/5] overflow-hidden">
      
      <img
        ref={(el) => {
          imageRefs.current[index] = el;
        }}
        src={collection.image}
        alt={collection.title}
        className="collection-image"
      />

      <div className="pointer-events-none absolute inset-0 bg-black/10" />

     <div className="pointer-events-none absolute inset-x-0 bottom-0 p-7 text-white">

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      delay: index * 0.2 + 0.3,
    }}
    viewport={{ once: true }}
    className="mb-2 text-[10px] uppercase tracking-[0.25em]"
  >
    Collection
  </motion.p>

  <motion.h3
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.7,
      delay: index * 0.2 + 0.4,
    }}
    viewport={{ once: true }}
    className="text-3xl font-light"
  >
    {collection.title}
  </motion.h3>

  <motion.p
    initial={{
  opacity: 0,
  y: 30,
  x: -20,
}}
    whileInView={{
  opacity: 1,
  y: 0,
  x: 0,
}}
    transition={{
      duration: 0.6,
      delay: index * 0.2 + 0.55,
    }}
    viewport={{ once: true }}
    className="mt-2 text-sm"
  >
    {collection.subtitle}
  </motion.p>

</div>

    </div>
  </motion.div>
))}
    </section>
  );
}