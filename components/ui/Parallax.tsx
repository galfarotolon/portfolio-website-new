"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }: { type: string }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className={`relative flex items-center justify-center overflow-hidden w-screen h-screen ${
        type === "services"
          ? "bg-gradient-to-b from-gray-900 to-gray-800"
          : "bg-gradient-to-b from-gray-900 to-gray-500"
      }`}
    >
      <motion.h1
        style={{ y: yText }}
        className="text-white text-4xl lg:text-6xl font-bold z-10"
      >
        About Me
      </motion.h1>
      <motion.div
        className="absolute inset-0 bg-cover bg-bottom z-30"
        style={{ backgroundImage: "url('/mountains.png')" }}
      />
      <motion.div
        className="absolute inset-0 bg-cover bg-bottom z-20"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      />
      <motion.div
        className="absolute inset-0 bg-cover bg-bottom z-10"
        style={{ x: yBg, backgroundImage: "url('/stars.png')" }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-gray-900 to-transparent z-50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900 to-transparent z-50"></div>
      </div>
    </div>
  );
};

export default Parallax;
