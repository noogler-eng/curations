"use client";

import CarouselSize from "./Coursel";
import { motion } from "framer-motion";

export default function HeroList() {
  const images = [
    "https://www.curations.club/_next/static/media/drinking.537921fb.webp",
    "https://www.curations.club/_next/static/media/eating.5a272fca.webp",
    "https://www.curations.club/_next/static/media/playingmusic.66a3a806.webp",
    "https://www.curations.club/_next/static/media/reading.117eaf24.webp",
    "https://www.curations.club/_next/static/media/reading2.5d51262e.webp",
    "https://www.curations.club/_next/static/media/watching.68b50fd5.webp",
  ];

  return (
    <div className="relative flex flex-col items-center justify-center gap-4 mt-20 mb-20 text-white overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 flex gap-8 w-max opacity-40 z-0"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 50,
          ease: "linear",
        }}
      >
        {[...images, ...images].map((src, idx) => (
          <img
            key={idx}
            src={src}
            width={300}
            className="object-cover rounded-xl"
            alt={`bg-${idx}`}
          />
        ))}
      </motion.div>

      <div className="z-10 text-center px-4">
        <h2 className="text-5xl mb-2">
          Build{" "}
          <span className="font-[cursive] font-extrabold italic">
            collaborative
          </span>{" "}
          lists
        </h2>
        <p className="text-xl">
          make lists with your friends, for the things you all love.
        </p>
        <div className="w-full mt-8">
          <CarouselSize />
        </div>
      </div>
    </div>
  );
}
