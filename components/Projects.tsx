"use client";

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Private Residence",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
  },
  {
    title: "Contemporary Villa",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=85",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 25%"],
  });

  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.2],
    [0, 1]
  );

  const titleY = useTransform(
    scrollYProgress,
    [0, 0.2],
    [50, 0]
  );

  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className="px-6 pb-32 md:px-12 md:pb-44"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* TITLE */}
        <motion.div
          style={{
            opacity: titleOpacity,
            y: titleY,
          }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-black/50">
            04 — Projects
          </p>

          <h2 className="mt-4 text-4xl font-light tracking-[-0.04em] md:text-6xl">
            Spaces & inspiration
          </h2>
        </motion.div>

        {/* PROJECTS */}
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => {
            const start = 0.15 + index * 0.18;
            const end = start + 0.3;

            return (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
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

function ProjectCard({
  project,
  index,
  scrollYProgress,
  start,
  end,
}: {
  project: {
    title: string;
    year: string;
    image: string;
  };
  index: number;
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
}) {
  // ظهور الكارت
  const opacity = useTransform(
    scrollYProgress,
    [start, end],
    [0, 1]
  );

  // يدخل من الأسفل
  const y = useTransform(
    scrollYProgress,
    [start, end],
    [100, 0]
  );

  // يبدأ أصغر
  const scale = useTransform(
    scrollYProgress,
    [start, end],
    [0.9, 1]
  );

  // Zoom للصورة
  const imageScale = useTransform(
    scrollYProgress,
    [start, end],
    [1.12, 1]
  );

  return (
    <motion.div
      style={{
        opacity,
        y,
        scale,
      }}
      className={`group overflow-hidden ${
        index === 1 ? "md:mt-24" : ""
      }`}
    >
      {/* IMAGE */}
      <div className="aspect-[4/3] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          style={{
            scale: imageScale,
          }}
          className="h-full w-full object-cover"
        />
      </div>

      {/* INFO */}
      <div className="flex justify-between py-5">
        <span className="text-sm">
          {project.title}
        </span>

        <span className="text-xs uppercase tracking-[0.2em] text-black/40">
          {project.year}
        </span>
      </div>
    </motion.div>
  );
}