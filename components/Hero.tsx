"use client";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
};

const buttonVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 2.5, // Delay to ensure the text appears first
      duration: 1,
    },
  },
};

const Hero = () => {
  return (
    <div className="pb-20 pt-20 md:pt-32 md:pb-32">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black-100/[0.03]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Bringing Your Ideas to Life with Code"
            className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80"
          />

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Where Creativity Meets Technology"
            className="text-center text-4xl md:text-5xl lg:text-6xl xl:px-10"
            colorWords={["creativity", "technology"]}
            colors={["text-green-500", "text-blue-500"]}
          />

          <motion.p
            variants={variants}
            initial="initial"
            animate="animate"
            className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"
          >
            Hello! I&apos;m Guillermo, a creative web developer focused on
            Next.js and modern web development. Check out my portfolio and
            let&apos;s get in touch to build something great.
          </motion.p>

          <motion.a
            href="#projects"
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            className="mt-6 xl:mt-0"
          >
            <MagicButton
              title="See my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
