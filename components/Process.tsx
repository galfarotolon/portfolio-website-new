import React from "react";
import { Compare } from "./ui/Compare";
import { motion } from "framer-motion";

const Process = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-16 max-w-7xl mx-auto">
      <motion.h2
        className="text-center text-[28px] sm:text-[32px] md:text-3xl lg:text-4xl font-bold mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="text-orange-500">My Code,</span> Your Vision.
      </motion.h2>
      <motion.p
        className="text-white-100 text-center mb-8  px-8 sm:px-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        I will help you bring your vision to life with clean, modern, and
        efficient code. I will work with you to create a website that is not
        only visually appealing but also user-friendly and responsive.
      </motion.p>
      <div className="w-[90%] md:w-3/4 h-[60vh] px-1 md:px-8 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
        <div
          style={{
            transform: "rotateX(15deg) translateZ(80px)",
          }}
          className="p-1 md:p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 mx-auto w-3/4 h-1/2 md:h-3/4"
        >
          <Compare
            firstImage="/before.png"
            secondImage="/after.png"
            firstImageClassName="object-cover object-left-top w-full"
            secondImageClassname="object-cover object-left-top w-full"
            className="w-full h-full rounded-[22px] md:rounded-lg"
            slideMode="hover"
            autoplay={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Process;
