"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const movieLeft = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const movieRight = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div
      className="bg-black h-screen flex items-center justify-center text-white relative overflow-hidden"
      ref={ref}
    >
      <motion.img
        src={
          "https://www.curations.club/_next/static/media/books.891ec125.webp"
        }
        width={300}
        height={50}
        className="absolute top-[7.5rem] left-[25rem] z-30"
        style={{ x: movieLeft }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      />

      <motion.div
        className="absolute top-[10rem] right-[31rem] z-10 flex items-start"
        style={{ x: movieRight }}
      >
        <motion.img
          src={
            "https://www.curations.club/_next/static/media/clouds.4e9a5288.webp"
          }
          className="z-10 transform transition-transform duration-300 hover:scale-105"
          width={200}
          height={50}
          animate={{
            x: [300, -300, 300],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        />
        <motion.img
          src={
            "https://www.curations.club/_next/static/media/ytvideos.50ca36d2.webp"
          }
          className="z-30 transform transition-transform duration-300 hover:scale-105"
          width={270}
          height={100}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
      </motion.div>

      <motion.img
        src={
          "https://www.curations.club/_next/static/media/alive.f14f223e.webp"
        }
        width={300}
        height={100}
        className="absolute top-[20.5rem] right-[10rem] z-30 "
        style={{ x: movieRight }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      />
      <motion.img
        src={
          "https://www.curations.club/_next/static/media/animated.bef4faaa.webp"
        }
        width={200}
        height={100}
        className="absolute bottom-[-0.5rem] left-[50rem] z-10"
        style={{ x: movieLeft }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      />
      <motion.img
        src={
          "https://www.curations.club/_next/static/media/music2.cab21a63.webp"
        }
        width={200}
        height={100}
        className="absolute bottom-[2rem] right-[40rem] z-10"
        style={{ x: movieRight }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      />
      <motion.img
        src={
          "https://www.curations.club/_next/static/media/music.98730cc6.webp"
        }
        width={200}
        height={50}
        className="absolute bottom-[5rem] left-[30rem] z-10"
        style={{ x: movieLeft }}
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "linear",
        }}
      />
      <h2 className="text-5xl w-3/12 text-center z-50">
        Internet{" "}
        <span className="font-[cursive] font-extrabold">curated by</span> people
        you know
      </h2>
    </div>
  );
}
