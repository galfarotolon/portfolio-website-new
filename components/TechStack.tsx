"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "./ui/GoogleGeminiEffect";

export const TechStack = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 1], [0, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 1], [0, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 1], [0, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 1], [0, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 1], [0, 1.2]);

  return (
    <div
      className="h-[400vh] w-full  rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <div className="sticky top-0 h-screen">
        <GoogleGeminiEffect
          title="Tech Stack"
          description="The tools and technologies I use to build modern web applications."
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>
    </div>
  );
};
