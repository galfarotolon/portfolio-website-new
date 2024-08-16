"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AnimatedTooltip } from "./AnimatedTooltip"; // Import AnimatedTooltip
import { HoverBorderGradient } from "./HoverBorderGradient";
import { FaLocationArrow } from "react-icons/fa6";
import { techStack } from "@/data";

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const CardHover = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    img: string;
    iconLists: (typeof techStack)[keyof typeof techStack][];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6 px-2  md:px-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <motion.div
          key={item.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          variants={itemVariants}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="relative w-full overflow-hidden rounded-t-3xl ">
              <img
                src={item.img}
                alt="cover"
                className="w-full h-full object-cover rounded-t-3xl"
              />
            </div>
            <div className="p-4">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <div className="flex flex-col min-[480px]:flex-row items-center mt-4 justify-between">
                <div className="flex items-center max-[480px]:mb-4">
                  {/* Use AnimatedTooltip here */}
                  <AnimatedTooltip items={Object.values(item.iconLists)} />
                </div>
                <Link href={item.link}>
                  <HoverBorderGradient className="text-xs flex text-center justify-center items-center">
                    View website
                    <FaLocationArrow className="ml-2" />
                  </HoverBorderGradient>
                </Link>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      variants={itemVariants}
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-purple-500 relative z-20",
        className
      )}
    >
      <div className="relative z-50">{children}</div>
    </motion.div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
